(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var ic={exports:{}},To={},rc={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function x_(){if(op)return ct;op=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function S(U,te,Ie){this.props=U,this.context=te,this.refs=R,this.updater=Ie||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=S.prototype;function O(U,te,Ie){this.props=U,this.context=te,this.refs=R,this.updater=Ie||y}var D=O.prototype=new _;D.constructor=O,w(D,S.prototype),D.isPureReactComponent=!0;var L=Array.isArray,X=Object.prototype.hasOwnProperty,H={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function Y(U,te,Ie){var Z,de={},ye=null,ve=null;if(te!=null)for(Z in te.ref!==void 0&&(ve=te.ref),te.key!==void 0&&(ye=""+te.key),te)X.call(te,Z)&&!N.hasOwnProperty(Z)&&(de[Z]=te[Z]);var Te=arguments.length-2;if(Te===1)de.children=Ie;else if(1<Te){for(var Ue=Array(Te),Ze=0;Ze<Te;Ze++)Ue[Ze]=arguments[Ze+2];de.children=Ue}if(U&&U.defaultProps)for(Z in Te=U.defaultProps,Te)de[Z]===void 0&&(de[Z]=Te[Z]);return{$$typeof:o,type:U,key:ye,ref:ve,props:de,_owner:H.current}}function C(U,te){return{$$typeof:o,type:U.type,key:te,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function k(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ie){return te[Ie]})}var oe=/\/+/g;function ee(U,te){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):te.toString(36)}function ce(U,te,Ie,Z,de){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(ye){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case o:case e:ve=!0}}if(ve)return ve=U,de=de(ve),U=Z===""?"."+ee(ve,0):Z,L(de)?(Ie="",U!=null&&(Ie=U.replace(oe,"$&/")+"/"),ce(de,te,Ie,"",function(Ze){return Ze})):de!=null&&(A(de)&&(de=C(de,Ie+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(oe,"$&/")+"/")+U)),te.push(de)),1;if(ve=0,Z=Z===""?".":Z+":",L(U))for(var Te=0;Te<U.length;Te++){ye=U[Te];var Ue=Z+ee(ye,Te);ve+=ce(ye,te,Ie,Ue,de)}else if(Ue=x(U),typeof Ue=="function")for(U=Ue.call(U),Te=0;!(ye=U.next()).done;)ye=ye.value,Ue=Z+ee(ye,Te++),ve+=ce(ye,te,Ie,Ue,de);else if(ye==="object")throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(U,te,Ie){if(U==null)return U;var Z=[],de=0;return ce(U,Z,"","",function(ye){return te.call(Ie,ye,de++)}),Z}function se(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(Ie){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ie)},function(Ie){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ie)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:H};function re(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:he,forEach:function(U,te,Ie){he(U,function(){te.apply(this,arguments)},Ie)},count:function(U){var te=0;return he(U,function(){te++}),te},toArray:function(U){return he(U,function(te){return te})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ct.Component=S,ct.Fragment=n,ct.Profiler=a,ct.PureComponent=O,ct.StrictMode=r,ct.Suspense=p,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ct.act=re,ct.cloneElement=function(U,te,Ie){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=w({},U.props),de=U.key,ye=U.ref,ve=U._owner;if(te!=null){if(te.ref!==void 0&&(ye=te.ref,ve=H.current),te.key!==void 0&&(de=""+te.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Ue in te)X.call(te,Ue)&&!N.hasOwnProperty(Ue)&&(Z[Ue]=te[Ue]===void 0&&Te!==void 0?Te[Ue]:te[Ue])}var Ue=arguments.length-2;if(Ue===1)Z.children=Ie;else if(1<Ue){Te=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Te[Ze]=arguments[Ze+2];Z.children=Te}return{$$typeof:o,type:U.type,key:de,ref:ye,props:Z,_owner:ve}},ct.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ct.createElement=Y,ct.createFactory=function(U){var te=Y.bind(null,U);return te.type=U,te},ct.createRef=function(){return{current:null}},ct.forwardRef=function(U){return{$$typeof:d,render:U}},ct.isValidElement=A,ct.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:se}},ct.memo=function(U,te){return{$$typeof:m,type:U,compare:te===void 0?null:te}},ct.startTransition=function(U){var te=B.transition;B.transition={};try{U()}finally{B.transition=te}},ct.unstable_act=re,ct.useCallback=function(U,te){return le.current.useCallback(U,te)},ct.useContext=function(U){return le.current.useContext(U)},ct.useDebugValue=function(){},ct.useDeferredValue=function(U){return le.current.useDeferredValue(U)},ct.useEffect=function(U,te){return le.current.useEffect(U,te)},ct.useId=function(){return le.current.useId()},ct.useImperativeHandle=function(U,te,Ie){return le.current.useImperativeHandle(U,te,Ie)},ct.useInsertionEffect=function(U,te){return le.current.useInsertionEffect(U,te)},ct.useLayoutEffect=function(U,te){return le.current.useLayoutEffect(U,te)},ct.useMemo=function(U,te){return le.current.useMemo(U,te)},ct.useReducer=function(U,te,Ie){return le.current.useReducer(U,te,Ie)},ct.useRef=function(U){return le.current.useRef(U)},ct.useState=function(U){return le.current.useState(U)},ct.useSyncExternalStore=function(U,te,Ie){return le.current.useSyncExternalStore(U,te,Ie)},ct.useTransition=function(){return le.current.useTransition()},ct.version="18.3.1",ct}var ap;function Rf(){return ap||(ap=1,rc.exports=x_()),rc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function S_(){if(lp)return To;lp=1;var o=Rf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var g,v={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(g in p)r.call(p,g)&&!u.hasOwnProperty(g)&&(v[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)v[g]===void 0&&(v[g]=p[g]);return{$$typeof:e,type:d,key:x,ref:y,props:v,_owner:a.current}}return To.Fragment=n,To.jsx=f,To.jsxs=f,To}var up;function y_(){return up||(up=1,ic.exports=S_()),ic.exports}var an=y_(),Bc=Rf(),Ya={},sc={exports:{}},Pn={},oc={exports:{}},ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function M_(){return cp||(cp=1,function(o){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var U=re-1>>>1,te=B[U];if(0<a(te,ae))B[U]=ae,B[re]=te,re=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var U=0,te=B.length,Ie=te>>>1;U<Ie;){var Z=2*(U+1)-1,de=B[Z],ye=Z+1,ve=B[ye];if(0>a(de,re))ye<te&&0>a(ve,de)?(B[U]=ve,B[ye]=re,U=ye):(B[U]=de,B[Z]=re,U=Z);else if(ye<te&&0>a(ve,re))B[U]=ve,B[ye]=re,U=ye;else break e}}return ae}function a(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,v=null,x=3,y=!1,w=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(B){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=B)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function L(B){if(R=!1,D(B),!w)if(n(p)!==null)w=!0,se(X);else{var ae=n(m);ae!==null&&le(L,ae.startTime-B)}}function X(B,ae){w=!1,R&&(R=!1,_(Y),Y=-1),y=!0;var re=x;try{for(D(ae),v=n(p);v!==null&&(!(v.expirationTime>ae)||B&&!k());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var te=U(v.expirationTime<=ae);ae=o.unstable_now(),typeof te=="function"?v.callback=te:v===n(p)&&r(p),D(ae)}else r(p);v=n(p)}if(v!==null)var Ie=!0;else{var Z=n(m);Z!==null&&le(L,Z.startTime-ae),Ie=!1}return Ie}finally{v=null,x=re,y=!1}}var H=!1,N=null,Y=-1,C=5,A=-1;function k(){return!(o.unstable_now()-A<C)}function oe(){if(N!==null){var B=o.unstable_now();A=B;var ae=!0;try{ae=N(!0,B)}finally{ae?ee():(H=!1,N=null)}}else H=!1}var ee;if(typeof O=="function")ee=function(){O(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=oe,ee=function(){he.postMessage(null)}}else ee=function(){S(oe,0)};function se(B){N=B,H||(H=!0,ee())}function le(B,ae){Y=S(function(){B(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){w||y||(w=!0,se(X))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return B()}finally{x=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=x;x=B;try{return ae()}finally{x=re}},o.unstable_scheduleCallback=function(B,ae,re){var U=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,B){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=re+te,B={id:g++,callback:ae,priorityLevel:B,startTime:re,expirationTime:te,sortIndex:-1},re>U?(B.sortIndex=re,e(m,B),n(p)===null&&B===n(m)&&(R?(_(Y),Y=-1):R=!0,le(L,re-U))):(B.sortIndex=te,e(p,B),w||y||(w=!0,se(X))),B},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(B){var ae=x;return function(){var re=x;x=ae;try{return B.apply(this,arguments)}finally{x=re}}}}(ac)),ac}var fp;function E_(){return fp||(fp=1,oc.exports=M_()),oc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function T_(){if(dp)return Pn;dp=1;var o=Rf(),e=E_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(t){return p.call(v,t)?!0:p.call(g,t)?!1:m.test(t)?v[t]=!0:(g[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function O(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,O);S[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,O);S[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,O);S[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,s,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var L=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),H=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function te(t){if(U===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ie=!1;function Z(t,i){if(!t||Ie)return"";Ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var c=J.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,b=h.length-1;1<=M&&0<=b&&c[M]!==h[b];)b--;for(;1<=M&&0<=b;M--,b--)if(c[M]!==h[b]){if(M!==1||b!==1)do if(M--,b--,0>b||c[M]!==h[b]){var I=`
`+c[M].replace(" at new "," at ");return t.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",t.displayName)),I}while(1<=M&&0<=b);break}}}finally{Ie=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?te(t):""}function de(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case H:return"Portal";case C:return"Profiler";case Y:return"StrictMode";case ee:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Tt(t){t._valueTracker||(t._valueTracker=Ze(t))}function dt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Pt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function F(t,i){var s=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function gn(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Te(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function lt(t,i){ft(t,i);var s=Te(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Et(t,i.type,s):i.hasOwnProperty("defaultValue")&&Et(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Et(t,i,s){(i!=="number"||Pt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Ge=Array.isArray;function P(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Te(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Ge(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Te(s)}}function pe(t,i){var s=Te(i.value),l=Te(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function at(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function je(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=je(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mt=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,ie=null,fe=null;function Le(t){if(t=lo(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=aa(i),Ae(t.stateNode,t.type,i))}}function Pe(t){ie?fe?fe.push(t):fe=[t]:ie=t}function it(){if(ie){var t=ie,i=fe;if(fe=ie=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function bt(t,i){return t(i)}function Yt(){}var _t=!1;function En(t,i,s){if(_t)return t(i,s);_t=!0;try{return bt(t,i,s)}finally{_t=!1,(ie!==null||fe!==null)&&(Yt(),it())}}function _n(t,i){var s=t.stateNode;if(s===null)return null;var l=aa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var jr=!1;if(d)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){jr=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{jr=!1}function _i(t,i,s,l,c,h,M,b,I){var J=Array.prototype.slice.call(arguments,3);try{i.apply(s,J)}catch(_e){this.onError(_e)}}var vi=!1,vr=null,xr=!1,zi=null,ko={onError:function(t){vi=!0,vr=t}};function $r(t,i,s,l,c,h,M,b,I){vi=!1,vr=null,_i.apply(ko,arguments)}function zo(t,i,s,l,c,h,M,b,I){if($r.apply(this,arguments),vi){if(vi){var J=vr;vi=!1,vr=null}else throw Error(n(198));xr||(xr=!0,zi=J)}}function oi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Ho(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Vo(t){if(oi(t)!==t)throw Error(n(188))}function Al(t){var i=t.alternate;if(!i){if(i=oi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Vo(c),t;if(h===l)return Vo(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,b=c.child;b;){if(b===s){M=!0,s=c,l=h;break}if(b===l){M=!0,l=c,s=h;break}b=b.sibling}if(!M){for(b=h.child;b;){if(b===s){M=!0,s=h,l=c;break}if(b===l){M=!0,l=h,s=c;break}b=b.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Go(t){return t=Al(t),t!==null?Wo(t):null}function Wo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Wo(t);if(i!==null)return i;t=t.sibling}return null}var Xo=e.unstable_scheduleCallback,T=e.unstable_cancelCallback,G=e.unstable_shouldYield,Q=e.unstable_requestPaint,j=e.unstable_now,W=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,be=e.unstable_NormalPriority,ke=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function pt(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:gt,Bt=Math.log,It=Math.LN2;function gt(t){return t>>>=0,t===0?32:31-(Bt(t)/It|0)|0}var qe=64,kt=4194304;function ht(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ln(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var b=M&~c;b!==0?l=ht(b):(h&=M,h!==0&&(l=ht(h)))}else M=s&~c,M!==0?l=ht(M):h!==0&&(l=ht(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&c)&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(l&4&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-rt(i),c=1<<s,l|=t[s],i&=~c;return l}function Hi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-rt(h),b=1<<M,I=c[M];I===-1?(!(b&s)||b&l)&&(c[M]=Hi(b,i)):I<=i&&(t.expiredLanes|=b),h&=~b}}function xi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rt(){var t=qe;return qe<<=1,!(qe&4194240)&&(qe=64),t}function un(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Zt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-rt(i),t[i]=s}function rn(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-rt(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Qt(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-rt(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var vt=0;function ai(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kf,Rl,zf,Hf,Vf,Cl=!1,Yo=[],Vi=null,Gi=null,Wi=null,Ys=new Map,qs=new Map,Xi=[],Vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(t,i){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function js(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=lo(i),i!==null&&Rl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Gm(t,i,s,l,c){switch(i){case"focusin":return Vi=js(Vi,t,i,s,l,c),!0;case"dragenter":return Gi=js(Gi,t,i,s,l,c),!0;case"mouseover":return Wi=js(Wi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Ys.set(h,js(Ys.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,qs.set(h,js(qs.get(h)||null,t,i,s,l,c)),!0}return!1}function Wf(t){var i=Sr(t.target);if(i!==null){var s=oi(i);if(s!==null){if(i=s.tag,i===13){if(i=Ho(s),i!==null){t.blockedOn=i,Vf(t.priority,function(){zf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ll(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Mt=l,s.target.dispatchEvent(l),Mt=null}else return i=lo(s),i!==null&&Rl(i),t.blockedOn=s,!1;i.shift()}return!0}function Xf(t,i,s){qo(t)&&s.delete(i)}function Wm(){Cl=!1,Vi!==null&&qo(Vi)&&(Vi=null),Gi!==null&&qo(Gi)&&(Gi=null),Wi!==null&&qo(Wi)&&(Wi=null),Ys.forEach(Xf),qs.forEach(Xf)}function $s(t,i){t.blockedOn===i&&(t.blockedOn=null,Cl||(Cl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wm)))}function Ks(t){function i(c){return $s(c,t)}if(0<Yo.length){$s(Yo[0],t);for(var s=1;s<Yo.length;s++){var l=Yo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Vi!==null&&$s(Vi,t),Gi!==null&&$s(Gi,t),Wi!==null&&$s(Wi,t),Ys.forEach(i),qs.forEach(i),s=0;s<Xi.length;s++)l=Xi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Xi.length&&(s=Xi[0],s.blockedOn===null);)Wf(s),s.blockedOn===null&&Xi.shift()}var Kr=L.ReactCurrentBatchConfig,jo=!0;function Xm(t,i,s,l){var c=vt,h=Kr.transition;Kr.transition=null;try{vt=1,Pl(t,i,s,l)}finally{vt=c,Kr.transition=h}}function Ym(t,i,s,l){var c=vt,h=Kr.transition;Kr.transition=null;try{vt=4,Pl(t,i,s,l)}finally{vt=c,Kr.transition=h}}function Pl(t,i,s,l){if(jo){var c=Ll(t,i,s,l);if(c===null)ql(t,i,l,$o,s),Gf(t,l);else if(Gm(c,t,i,s,l))l.stopPropagation();else if(Gf(t,l),i&4&&-1<Vm.indexOf(t)){for(;c!==null;){var h=lo(c);if(h!==null&&kf(h),h=Ll(t,i,s,l),h===null&&ql(t,i,l,$o,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else ql(t,i,l,null,s)}}var $o=null;function Ll(t,i,s,l){if($o=null,t=V(l),t=Sr(t),t!==null)if(i=oi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Ho(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return $o=t,null}function Yf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W()){case Se:return 1;case Re:return 4;case be:case ke:return 16;case et:return 536870912;default:return 16}default:return 16}}var Yi=null,bl=null,Ko=null;function qf(){if(Ko)return Ko;var t,i=bl,s=i.length,l,c="value"in Yi?Yi.value:Yi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return Ko=c.slice(t,1<l?1-l:void 0)}function Zo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function jf(){return!1}function Dn(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(s=t[b],this[b]=s?s(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Qo:jf,this.isPropagationStopped=jf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),i}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Dn(Zr),Zs=re({},Zr,{view:0,detail:0}),qm=Dn(Zs),Ul,Il,Qs,Jo=re({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Ul=t.screenX-Qs.screenX,Il=t.screenY-Qs.screenY):Il=Ul=0,Qs=t),Ul)},movementY:function(t){return"movementY"in t?t.movementY:Il}}),$f=Dn(Jo),jm=re({},Jo,{dataTransfer:0}),$m=Dn(jm),Km=re({},Zs,{relatedTarget:0}),Nl=Dn(Km),Zm=re({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qm=Dn(Zm),Jm=re({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eg=Dn(Jm),tg=re({},Zr,{data:0}),Kf=Dn(tg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=rg[t])?!!i[t]:!1}function Fl(){return sg}var og=re({},Zs,{key:function(t){if(t.key){var i=ng[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ig[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ag=Dn(og),lg=re({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=Dn(lg),ug=re({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),cg=Dn(ug),fg=re({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),dg=Dn(fg),hg=re({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=Dn(hg),mg=[9,13,27,32],Ol=d&&"CompositionEvent"in window,Js=null;d&&"documentMode"in document&&(Js=document.documentMode);var gg=d&&"TextEvent"in window&&!Js,Qf=d&&(!Ol||Js&&8<Js&&11>=Js),Jf=" ",ed=!1;function td(t,i){switch(t){case"keyup":return mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function _g(t,i){switch(t){case"compositionend":return nd(i);case"keypress":return i.which!==32?null:(ed=!0,Jf);case"textInput":return t=i.data,t===Jf&&ed?null:t;default:return null}}function vg(t,i){if(Qr)return t==="compositionend"||!Ol&&td(t,i)?(t=qf(),Ko=bl=Yi=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qf&&i.locale!=="ko"?null:i.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!xg[t.type]:i==="textarea"}function rd(t,i,s,l){Pe(l),i=ra(i,"onChange"),0<i.length&&(s=new Dl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var eo=null,to=null;function Sg(t){Md(t,0)}function ea(t){var i=is(t);if(dt(i))return t}function yg(t,i){if(t==="change")return i}var sd=!1;if(d){var Bl;if(d){var kl="oninput"in document;if(!kl){var od=document.createElement("div");od.setAttribute("oninput","return;"),kl=typeof od.oninput=="function"}Bl=kl}else Bl=!1;sd=Bl&&(!document.documentMode||9<document.documentMode)}function ad(){eo&&(eo.detachEvent("onpropertychange",ld),to=eo=null)}function ld(t){if(t.propertyName==="value"&&ea(to)){var i=[];rd(i,to,t,V(t)),En(Sg,i)}}function Mg(t,i,s){t==="focusin"?(ad(),eo=i,to=s,eo.attachEvent("onpropertychange",ld)):t==="focusout"&&ad()}function Eg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ea(to)}function Tg(t,i){if(t==="click")return ea(i)}function wg(t,i){if(t==="input"||t==="change")return ea(i)}function Ag(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var jn=typeof Object.is=="function"?Object.is:Ag;function no(t,i){if(jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!jn(t[c],i[c]))return!1}return!0}function ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cd(t,i){var s=ud(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=ud(s)}}function fd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?fd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function dd(){for(var t=window,i=Pt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Pt(t.document)}return i}function zl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Rg(t){var i=dd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&fd(s.ownerDocument.documentElement,s)){if(l!==null&&zl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=cd(s,h);var M=cd(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cg=d&&"documentMode"in document&&11>=document.documentMode,Jr=null,Hl=null,io=null,Vl=!1;function hd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Vl||Jr==null||Jr!==Pt(l)||(l=Jr,"selectionStart"in l&&zl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),io&&no(io,l)||(io=l,l=ra(Hl,"onSelect"),0<l.length&&(i=new Dl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Jr)))}function ta(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var es={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},Gl={},pd={};d&&(pd=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function na(t){if(Gl[t])return Gl[t];if(!es[t])return t;var i=es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in pd)return Gl[t]=i[s];return t}var md=na("animationend"),gd=na("animationiteration"),_d=na("animationstart"),vd=na("transitionend"),xd=new Map,Sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,i){xd.set(t,i),u(i,[t])}for(var Wl=0;Wl<Sd.length;Wl++){var Xl=Sd[Wl],Pg=Xl.toLowerCase(),Lg=Xl[0].toUpperCase()+Xl.slice(1);qi(Pg,"on"+Lg)}qi(md,"onAnimationEnd"),qi(gd,"onAnimationIteration"),qi(_d,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(vd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function yd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,zo(l,i,void 0,t),t.currentTarget=null}function Md(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var b=l[M],I=b.instance,J=b.currentTarget;if(b=b.listener,I!==h&&c.isPropagationStopped())break e;yd(c,b,J),h=I}else for(M=0;M<l.length;M++){if(b=l[M],I=b.instance,J=b.currentTarget,b=b.listener,I!==h&&c.isPropagationStopped())break e;yd(c,b,J),h=I}}}if(xr)throw t=zi,xr=!1,zi=null,t}function Dt(t,i){var s=i[Jl];s===void 0&&(s=i[Jl]=new Set);var l=t+"__bubble";s.has(l)||(Ed(i,t,2,!1),s.add(l))}function Yl(t,i,s){var l=0;i&&(l|=4),Ed(s,t,l,i)}var ia="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[ia]){t[ia]=!0,r.forEach(function(s){s!=="selectionchange"&&(bg.has(s)||Yl(s,!1,t),Yl(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ia]||(i[ia]=!0,Yl("selectionchange",!1,i))}}function Ed(t,i,s,l){switch(Yf(i)){case 1:var c=Xm;break;case 4:c=Ym;break;default:c=Pl}s=c.bind(null,i,s,t),c=void 0,!jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function ql(t,i,s,l,c){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var b=l.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var I=M.tag;if((I===3||I===4)&&(I=M.stateNode.containerInfo,I===c||I.nodeType===8&&I.parentNode===c))return;M=M.return}for(;b!==null;){if(M=Sr(b),M===null)return;if(I=M.tag,I===5||I===6){l=h=M;continue e}b=b.parentNode}}l=l.return}En(function(){var J=h,_e=V(s),xe=[];e:{var me=xd.get(t);if(me!==void 0){var De=Dl,ze=t;switch(t){case"keypress":if(Zo(s)===0)break e;case"keydown":case"keyup":De=ag;break;case"focusin":ze="focus",De=Nl;break;case"focusout":ze="blur",De=Nl;break;case"beforeblur":case"afterblur":De=Nl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=$m;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=cg;break;case md:case gd:case _d:De=Qm;break;case vd:De=dg;break;case"scroll":De=qm;break;case"wheel":De=pg;break;case"copy":case"cut":case"paste":De=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=Zf}var Ve=(i&4)!==0,Ht=!Ve&&t==="scroll",q=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var z=J,$;z!==null;){$=z;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,q!==null&&(Ee=_n(z,q),Ee!=null&&Ve.push(oo(z,Ee,$)))),Ht)break;z=z.return}0<Ve.length&&(me=new De(me,ze,null,s,_e),xe.push({event:me,listeners:Ve}))}}if(!(i&7)){e:{if(me=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",me&&s!==Mt&&(ze=s.relatedTarget||s.fromElement)&&(Sr(ze)||ze[Si]))break e;if((De||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,De?(ze=s.relatedTarget||s.toElement,De=J,ze=ze?Sr(ze):null,ze!==null&&(Ht=oi(ze),ze!==Ht||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=J),De!==ze)){if(Ve=$f,Ee="onMouseLeave",q="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=Zf,Ee="onPointerLeave",q="onPointerEnter",z="pointer"),Ht=De==null?me:is(De),$=ze==null?me:is(ze),me=new Ve(Ee,z+"leave",De,s,_e),me.target=Ht,me.relatedTarget=$,Ee=null,Sr(_e)===J&&(Ve=new Ve(q,z+"enter",ze,s,_e),Ve.target=$,Ve.relatedTarget=Ht,Ee=Ve),Ht=Ee,De&&ze)t:{for(Ve=De,q=ze,z=0,$=Ve;$;$=ts($))z++;for($=0,Ee=q;Ee;Ee=ts(Ee))$++;for(;0<z-$;)Ve=ts(Ve),z--;for(;0<$-z;)q=ts(q),$--;for(;z--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=ts(Ve),q=ts(q)}Ve=null}else Ve=null;De!==null&&Td(xe,me,De,Ve,!1),ze!==null&&Ht!==null&&Td(xe,Ht,ze,Ve,!0)}}e:{if(me=J?is(J):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Xe=yg;else if(id(me))if(sd)Xe=wg;else{Xe=Eg;var $e=Mg}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Tg);if(Xe&&(Xe=Xe(t,J))){rd(xe,Xe,s,_e);break e}$e&&$e(t,me,J),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&Et(me,"number",me.value)}switch($e=J?is(J):window,t){case"focusin":(id($e)||$e.contentEditable==="true")&&(Jr=$e,Hl=J,io=null);break;case"focusout":io=Hl=Jr=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,hd(xe,s,_e);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":hd(xe,s,_e)}var Ke;if(Ol)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Qr?td(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(Qf&&s.locale!=="ko"&&(Qr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Qr&&(Ke=qf()):(Yi=_e,bl="value"in Yi?Yi.value:Yi.textContent,Qr=!0)),$e=ra(J,tt),0<$e.length&&(tt=new Kf(tt,t,null,s,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=nd(s),Ke!==null&&(tt.data=Ke)))),(Ke=gg?_g(t,s):vg(t,s))&&(J=ra(J,"onBeforeInput"),0<J.length&&(_e=new Kf("onBeforeInput","beforeinput",null,s,_e),xe.push({event:_e,listeners:J}),_e.data=Ke))}Md(xe,i)})}function oo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ra(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=_n(t,s),h!=null&&l.unshift(oo(t,h,c)),h=_n(t,i),h!=null&&l.push(oo(t,h,c))),t=t.return}return l}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Td(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var b=s,I=b.alternate,J=b.stateNode;if(I!==null&&I===l)break;b.tag===5&&J!==null&&(b=J,c?(I=_n(s,h),I!=null&&M.unshift(oo(s,I,b))):c||(I=_n(s,h),I!=null&&M.push(oo(s,I,b)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Dg=/\r\n?/g,Ug=/\u0000|\uFFFD/g;function wd(t){return(typeof t=="string"?t:""+t).replace(Dg,`
`).replace(Ug,"")}function sa(t,i,s){if(i=wd(i),wd(t)!==i&&s)throw Error(n(425))}function oa(){}var jl=null,$l=null;function Kl(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,Ig=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(t){return Ad.resolve(null).then(t).catch(Fg)}:Zl;function Fg(t){setTimeout(function(){throw t})}function Ql(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),Ks(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);Ks(i)}function ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Rd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),li="__reactFiber$"+ns,ao="__reactProps$"+ns,Si="__reactContainer$"+ns,Jl="__reactEvents$"+ns,Og="__reactListeners$"+ns,Bg="__reactHandles$"+ns;function Sr(t){var i=t[li];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Si]||s[li]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Rd(t);t!==null;){if(s=t[li])return s;t=Rd(t)}return i}t=s,s=t.parentNode}return null}function lo(t){return t=t[li]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function aa(t){return t[ao]||null}var eu=[],rs=-1;function $i(t){return{current:t}}function Ut(t){0>rs||(t.current=eu[rs],eu[rs]=null,rs--)}function Lt(t,i){rs++,eu[rs]=t.current,t.current=i}var Ki={},cn=$i(Ki),Tn=$i(!1),yr=Ki;function ss(t,i){var s=t.type.contextTypes;if(!s)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function wn(t){return t=t.childContextTypes,t!=null}function la(){Ut(Tn),Ut(cn)}function Cd(t,i,s){if(cn.current!==Ki)throw Error(n(168));Lt(cn,i),Lt(Tn,s)}function Pd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},s,l)}function ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,yr=cn.current,Lt(cn,t),Lt(Tn,Tn.current),!0}function Ld(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Pd(t,i,yr),l.__reactInternalMemoizedMergedChildContext=t,Ut(Tn),Ut(cn),Lt(cn,t)):Ut(Tn),Lt(Tn,s)}var yi=null,ca=!1,tu=!1;function bd(t){yi===null?yi=[t]:yi.push(t)}function kg(t){ca=!0,bd(t)}function Zi(){if(!tu&&yi!==null){tu=!0;var t=0,i=vt;try{var s=yi;for(vt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}yi=null,ca=!1}catch(c){throw yi!==null&&(yi=yi.slice(t+1)),Xo(Se,Zi),c}finally{vt=i,tu=!1}}return null}var os=[],as=0,fa=null,da=0,kn=[],zn=0,Mr=null,Mi=1,Ei="";function Er(t,i){os[as++]=da,os[as++]=fa,fa=t,da=i}function Dd(t,i,s){kn[zn++]=Mi,kn[zn++]=Ei,kn[zn++]=Mr,Mr=t;var l=Mi;t=Ei;var c=32-rt(l)-1;l&=~(1<<c),s+=1;var h=32-rt(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Mi=1<<32-rt(i)+c|s<<c|l,Ei=h+t}else Mi=1<<h|s<<c|l,Ei=t}function nu(t){t.return!==null&&(Er(t,1),Dd(t,1,0))}function iu(t){for(;t===fa;)fa=os[--as],os[as]=null,da=os[--as],os[as]=null;for(;t===Mr;)Mr=kn[--zn],kn[zn]=null,Ei=kn[--zn],kn[zn]=null,Mi=kn[--zn],kn[zn]=null}var Un=null,In=null,Nt=!1,$n=null;function Ud(t,i){var s=Wn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Id(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,In=ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Mr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Wn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Un=t,In=null,!0):!1;default:return!1}}function ru(t){return(t.mode&1)!==0&&(t.flags&128)===0}function su(t){if(Nt){var i=In;if(i){var s=i;if(!Id(t,i)){if(ru(t))throw Error(n(418));i=ji(s.nextSibling);var l=Un;i&&Id(t,i)?Ud(l,s):(t.flags=t.flags&-4097|2,Nt=!1,Un=t)}}else{if(ru(t))throw Error(n(418));t.flags=t.flags&-4097|2,Nt=!1,Un=t}}}function Nd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function ha(t){if(t!==Un)return!1;if(!Nt)return Nd(t),Nt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Kl(t.type,t.memoizedProps)),i&&(i=In)){if(ru(t))throw Fd(),Error(n(418));for(;i;)Ud(t,i),i=ji(i.nextSibling)}if(Nd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){In=ji(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}In=null}}else In=Un?ji(t.stateNode.nextSibling):null;return!0}function Fd(){for(var t=In;t;)t=ji(t.nextSibling)}function ls(){In=Un=null,Nt=!1}function ou(t){$n===null?$n=[t]:$n.push(t)}var zg=L.ReactCurrentBatchConfig;function uo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var b=c.refs;M===null?delete b[h]:b[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Od(t){var i=t._init;return i(t._payload)}function Bd(t){function i(q,z){if(t){var $=q.deletions;$===null?(q.deletions=[z],q.flags|=16):$.push(z)}}function s(q,z){if(!t)return null;for(;z!==null;)i(q,z),z=z.sibling;return null}function l(q,z){for(q=new Map;z!==null;)z.key!==null?q.set(z.key,z):q.set(z.index,z),z=z.sibling;return q}function c(q,z){return q=sr(q,z),q.index=0,q.sibling=null,q}function h(q,z,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<z?(q.flags|=2,z):$):(q.flags|=2,z)):(q.flags|=1048576,z)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function b(q,z,$,Ee){return z===null||z.tag!==6?(z=Zu($,q.mode,Ee),z.return=q,z):(z=c(z,$),z.return=q,z)}function I(q,z,$,Ee){var Xe=$.type;return Xe===N?_e(q,z,$.props.children,Ee,$.key):z!==null&&(z.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&Od(Xe)===z.type)?(Ee=c(z,$.props),Ee.ref=uo(q,z,$),Ee.return=q,Ee):(Ee=Ba($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=uo(q,z,$),Ee.return=q,Ee)}function J(q,z,$,Ee){return z===null||z.tag!==4||z.stateNode.containerInfo!==$.containerInfo||z.stateNode.implementation!==$.implementation?(z=Qu($,q.mode,Ee),z.return=q,z):(z=c(z,$.children||[]),z.return=q,z)}function _e(q,z,$,Ee,Xe){return z===null||z.tag!==7?(z=br($,q.mode,Ee,Xe),z.return=q,z):(z=c(z,$),z.return=q,z)}function xe(q,z,$){if(typeof z=="string"&&z!==""||typeof z=="number")return z=Zu(""+z,q.mode,$),z.return=q,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case X:return $=Ba(z.type,z.key,z.props,null,q.mode,$),$.ref=uo(q,null,z),$.return=q,$;case H:return z=Qu(z,q.mode,$),z.return=q,z;case se:var Ee=z._init;return xe(q,Ee(z._payload),$)}if(Ge(z)||ae(z))return z=br(z,q.mode,$,null),z.return=q,z;pa(q,z)}return null}function me(q,z,$,Ee){var Xe=z!==null?z.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:b(q,z,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case X:return $.key===Xe?I(q,z,$,Ee):null;case H:return $.key===Xe?J(q,z,$,Ee):null;case se:return Xe=$._init,me(q,z,Xe($._payload),Ee)}if(Ge($)||ae($))return Xe!==null?null:_e(q,z,$,Ee,null);pa(q,$)}return null}function De(q,z,$,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get($)||null,b(z,q,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case X:return q=q.get(Ee.key===null?$:Ee.key)||null,I(z,q,Ee,Xe);case H:return q=q.get(Ee.key===null?$:Ee.key)||null,J(z,q,Ee,Xe);case se:var $e=Ee._init;return De(q,z,$,$e(Ee._payload),Xe)}if(Ge(Ee)||ae(Ee))return q=q.get($)||null,_e(z,q,Ee,Xe,null);pa(z,Ee)}return null}function ze(q,z,$,Ee){for(var Xe=null,$e=null,Ke=z,tt=z=0,tn=null;Ke!==null&&tt<$.length;tt++){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var St=me(q,Ke,$[tt],Ee);if(St===null){Ke===null&&(Ke=tn);break}t&&Ke&&St.alternate===null&&i(q,Ke),z=h(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St,Ke=tn}if(tt===$.length)return s(q,Ke),Nt&&Er(q,tt),Xe;if(Ke===null){for(;tt<$.length;tt++)Ke=xe(q,$[tt],Ee),Ke!==null&&(z=h(Ke,z,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Nt&&Er(q,tt),Xe}for(Ke=l(q,Ke);tt<$.length;tt++)tn=De(Ke,q,tt,$[tt],Ee),tn!==null&&(t&&tn.alternate!==null&&Ke.delete(tn.key===null?tt:tn.key),z=h(tn,z,tt),$e===null?Xe=tn:$e.sibling=tn,$e=tn);return t&&Ke.forEach(function(or){return i(q,or)}),Nt&&Er(q,tt),Xe}function Ve(q,z,$,Ee){var Xe=ae($);if(typeof Xe!="function")throw Error(n(150));if($=Xe.call($),$==null)throw Error(n(151));for(var $e=Xe=null,Ke=z,tt=z=0,tn=null,St=$.next();Ke!==null&&!St.done;tt++,St=$.next()){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var or=me(q,Ke,St.value,Ee);if(or===null){Ke===null&&(Ke=tn);break}t&&Ke&&or.alternate===null&&i(q,Ke),z=h(or,z,tt),$e===null?Xe=or:$e.sibling=or,$e=or,Ke=tn}if(St.done)return s(q,Ke),Nt&&Er(q,tt),Xe;if(Ke===null){for(;!St.done;tt++,St=$.next())St=xe(q,St.value,Ee),St!==null&&(z=h(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return Nt&&Er(q,tt),Xe}for(Ke=l(q,Ke);!St.done;tt++,St=$.next())St=De(Ke,q,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?tt:St.key),z=h(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return t&&Ke.forEach(function(v_){return i(q,v_)}),Nt&&Er(q,tt),Xe}function Ht(q,z,$,Ee){if(typeof $=="object"&&$!==null&&$.type===N&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case X:e:{for(var Xe=$.key,$e=z;$e!==null;){if($e.key===Xe){if(Xe=$.type,Xe===N){if($e.tag===7){s(q,$e.sibling),z=c($e,$.props.children),z.return=q,q=z;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&Od(Xe)===$e.type){s(q,$e.sibling),z=c($e,$.props),z.ref=uo(q,$e,$),z.return=q,q=z;break e}s(q,$e);break}else i(q,$e);$e=$e.sibling}$.type===N?(z=br($.props.children,q.mode,Ee,$.key),z.return=q,q=z):(Ee=Ba($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=uo(q,z,$),Ee.return=q,q=Ee)}return M(q);case H:e:{for($e=$.key;z!==null;){if(z.key===$e)if(z.tag===4&&z.stateNode.containerInfo===$.containerInfo&&z.stateNode.implementation===$.implementation){s(q,z.sibling),z=c(z,$.children||[]),z.return=q,q=z;break e}else{s(q,z);break}else i(q,z);z=z.sibling}z=Qu($,q.mode,Ee),z.return=q,q=z}return M(q);case se:return $e=$._init,Ht(q,z,$e($._payload),Ee)}if(Ge($))return ze(q,z,$,Ee);if(ae($))return Ve(q,z,$,Ee);pa(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,z!==null&&z.tag===6?(s(q,z.sibling),z=c(z,$),z.return=q,q=z):(s(q,z),z=Zu($,q.mode,Ee),z.return=q,q=z),M(q)):s(q,z)}return Ht}var us=Bd(!0),kd=Bd(!1),ma=$i(null),ga=null,cs=null,au=null;function lu(){au=cs=ga=null}function uu(t){var i=ma.current;Ut(ma),t._currentValue=i}function cu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function fs(t,i){ga=t,au=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(An=!0),t.firstContext=null)}function Hn(t){var i=t._currentValue;if(au!==t)if(t={context:t,memoizedValue:i,next:null},cs===null){if(ga===null)throw Error(n(308));cs=t,ga.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return i}var Tr=null;function fu(t){Tr===null?Tr=[t]:Tr.push(t)}function zd(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,fu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ti(t,l)}function Ti(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Qi=!1;function du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,xt&2){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ti(t,s)}return c=l.interleaved,c===null?(i.next=i,fu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ti(t,s)}function _a(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Qt(t,s)}}function Vd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function va(t,i,s,l){var c=t.updateQueue;Qi=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,J=I.next;I.next=null,M===null?h=J:M.next=J,M=I;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,b=_e.lastBaseUpdate,b!==M&&(b===null?_e.firstBaseUpdate=J:b.next=J,_e.lastBaseUpdate=I))}if(h!==null){var xe=c.baseState;M=0,_e=J=I=null,b=h;do{var me=b.lane,De=b.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var ze=t,Ve=b;switch(me=i,De=s,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){xe=ze.call(De,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(De,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:Qi=!0}}b.callback!==null&&b.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[b]:me.push(b))}else De={eventTime:De,lane:me,tag:b.tag,payload:b.payload,callback:b.callback,next:null},_e===null?(J=_e=De,I=xe):_e=_e.next=De,M|=me;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;me=b,b=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(I=xe),c.baseState=I,c.firstBaseUpdate=J,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Rr|=M,t.lanes=M,t.memoizedState=xe}}function Gd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var co={},ui=$i(co),fo=$i(co),ho=$i(co);function wr(t){if(t===co)throw Error(n(174));return t}function hu(t,i){switch(Lt(ho,i),Lt(fo,t),Lt(ui,co),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}Ut(ui),Lt(ui,i)}function ds(){Ut(ui),Ut(fo),Ut(ho)}function Wd(t){wr(ho.current);var i=wr(ui.current),s=We(i,t.type);i!==s&&(Lt(fo,t),Lt(ui,s))}function pu(t){fo.current===t&&(Ut(ui),Ut(fo))}var Ft=$i(0);function xa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mu=[];function gu(){for(var t=0;t<mu.length;t++)mu[t]._workInProgressVersionPrimary=null;mu.length=0}var Sa=L.ReactCurrentDispatcher,_u=L.ReactCurrentBatchConfig,Ar=0,Ot=null,qt=null,Jt=null,ya=!1,po=!1,mo=0,Hg=0;function fn(){throw Error(n(321))}function vu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!jn(t[s],i[s]))return!1;return!0}function xu(t,i,s,l,c,h){if(Ar=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Sa.current=t===null||t.memoizedState===null?Xg:Yg,t=s(l,c),po){h=0;do{if(po=!1,mo=0,25<=h)throw Error(n(301));h+=1,Jt=qt=null,i.updateQueue=null,Sa.current=qg,t=s(l,c)}while(po)}if(Sa.current=Ta,i=qt!==null&&qt.next!==null,Ar=0,Jt=qt=Ot=null,ya=!1,i)throw Error(n(300));return t}function Su(){var t=mo!==0;return mo=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ot.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Vn(){if(qt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=Jt===null?Ot.memoizedState:Jt.next;if(i!==null)Jt=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Jt===null?Ot.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function go(t,i){return typeof i=="function"?i(t):i}function yu(t){var i=Vn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=qt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var b=M=null,I=null,J=h;do{var _e=J.lane;if((Ar&_e)===_e)I!==null&&(I=I.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var xe={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};I===null?(b=I=xe,M=l):I=I.next=xe,Ot.lanes|=_e,Rr|=_e}J=J.next}while(J!==null&&J!==h);I===null?M=l:I.next=b,jn(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=I,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Ot.lanes|=h,Rr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Mu(t){var i=Vn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);jn(h,i.memoizedState)||(An=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Xd(){}function Yd(t,i){var s=Ot,l=Vn(),c=i(),h=!jn(l.memoizedState,c);if(h&&(l.memoizedState=c,An=!0),l=l.queue,Eu($d.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(s.flags|=2048,_o(9,jd.bind(null,s,l,c,i),void 0,null),en===null)throw Error(n(349));Ar&30||qd(s,i,c)}return c}function qd(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function jd(t,i,s,l){i.value=s,i.getSnapshot=l,Kd(i)&&Zd(t)}function $d(t,i,s){return s(function(){Kd(i)&&Zd(t)})}function Kd(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!jn(t,s)}catch{return!0}}function Zd(t){var i=Ti(t,1);i!==null&&Jn(i,t,1,-1)}function Qd(t){var i=ci();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},i.queue=t,t=t.dispatch=Wg.bind(null,Ot,t),[i.memoizedState,t]}function _o(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function Jd(){return Vn().memoizedState}function Ma(t,i,s,l){var c=ci();Ot.flags|=t,c.memoizedState=_o(1|i,s,void 0,l===void 0?null:l)}function Ea(t,i,s,l){var c=Vn();l=l===void 0?null:l;var h=void 0;if(qt!==null){var M=qt.memoizedState;if(h=M.destroy,l!==null&&vu(l,M.deps)){c.memoizedState=_o(i,s,h,l);return}}Ot.flags|=t,c.memoizedState=_o(1|i,s,h,l)}function eh(t,i){return Ma(8390656,8,t,i)}function Eu(t,i){return Ea(2048,8,t,i)}function th(t,i){return Ea(4,2,t,i)}function nh(t,i){return Ea(4,4,t,i)}function ih(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function rh(t,i,s){return s=s!=null?s.concat([t]):null,Ea(4,4,ih.bind(null,i,t),s)}function Tu(){}function sh(t,i){var s=Vn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&vu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function oh(t,i){var s=Vn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&vu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function ah(t,i,s){return Ar&21?(jn(s,i)||(s=Rt(),Ot.lanes|=s,Rr|=s,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=s)}function Vg(t,i){var s=vt;vt=s!==0&&4>s?s:4,t(!0);var l=_u.transition;_u.transition={};try{t(!1),i()}finally{vt=s,_u.transition=l}}function lh(){return Vn().memoizedState}function Gg(t,i,s){var l=ir(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},uh(t))ch(i,s);else if(s=zd(t,i,s,l),s!==null){var c=Sn();Jn(s,t,l,c),fh(s,i,l)}}function Wg(t,i,s){var l=ir(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(uh(t))ch(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,b=h(M,s);if(c.hasEagerState=!0,c.eagerState=b,jn(b,M)){var I=i.interleaved;I===null?(c.next=c,fu(i)):(c.next=I.next,I.next=c),i.interleaved=c;return}}catch{}finally{}s=zd(t,i,c,l),s!==null&&(c=Sn(),Jn(s,t,l,c),fh(s,i,l))}}function uh(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function ch(t,i){po=ya=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function fh(t,i,s){if(s&4194240){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Qt(t,s)}}var Ta={readContext:Hn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},Xg={readContext:Hn,useCallback:function(t,i){return ci().memoizedState=[t,i===void 0?null:i],t},useContext:Hn,useEffect:eh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ma(4194308,4,ih.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ma(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ma(4,2,t,i)},useMemo:function(t,i){var s=ci();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=ci();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Gg.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=ci();return t={current:t},i.memoizedState=t},useState:Qd,useDebugValue:Tu,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=Qd(!1),i=t[0];return t=Vg.bind(null,t[1]),ci().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ot,c=ci();if(Nt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),en===null)throw Error(n(349));Ar&30||qd(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,eh($d.bind(null,l,h,t),[t]),l.flags|=2048,_o(9,jd.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=ci(),i=en.identifierPrefix;if(Nt){var s=Ei,l=Mi;s=(l&~(1<<32-rt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=mo++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Hg++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Yg={readContext:Hn,useCallback:sh,useContext:Hn,useEffect:Eu,useImperativeHandle:rh,useInsertionEffect:th,useLayoutEffect:nh,useMemo:oh,useReducer:yu,useRef:Jd,useState:function(){return yu(go)},useDebugValue:Tu,useDeferredValue:function(t){var i=Vn();return ah(i,qt.memoizedState,t)},useTransition:function(){var t=yu(go)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:Xd,useSyncExternalStore:Yd,useId:lh,unstable_isNewReconciler:!1},qg={readContext:Hn,useCallback:sh,useContext:Hn,useEffect:Eu,useImperativeHandle:rh,useInsertionEffect:th,useLayoutEffect:nh,useMemo:oh,useReducer:Mu,useRef:Jd,useState:function(){return Mu(go)},useDebugValue:Tu,useDeferredValue:function(t){var i=Vn();return qt===null?i.memoizedState=t:ah(i,qt.memoizedState,t)},useTransition:function(){var t=Mu(go)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:Xd,useSyncExternalStore:Yd,useId:lh,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function wu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:re({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var wa={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Sn(),c=ir(t),h=wi(l,c);h.payload=i,s!=null&&(h.callback=s),i=Ji(t,h,c),i!==null&&(Jn(i,t,c,l),_a(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Sn(),c=ir(t),h=wi(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Ji(t,h,c),i!==null&&(Jn(i,t,c,l),_a(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Sn(),l=ir(t),c=wi(s,l);c.tag=2,i!=null&&(c.callback=i),i=Ji(t,c,l),i!==null&&(Jn(i,t,l,s),_a(i,t,l))}};function dh(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!no(s,l)||!no(c,h):!0}function hh(t,i,s){var l=!1,c=Ki,h=i.contextType;return typeof h=="object"&&h!==null?h=Hn(h):(c=wn(i)?yr:cn.current,l=i.contextTypes,h=(l=l!=null)?ss(t,c):Ki),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function ph(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&wa.enqueueReplaceState(i,i.state,null)}function Au(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},du(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Hn(h):(h=wn(i)?yr:cn.current,c.context=ss(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(wu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&wa.enqueueReplaceState(c,c.state,null),va(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,i){try{var s="",l=i;do s+=de(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Ru(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Cu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var jg=typeof WeakMap=="function"?WeakMap:Map;function mh(t,i,s){s=wi(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Da||(Da=!0,Gu=l),Cu(t,i)},s}function gh(t,i,s){s=wi(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Cu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Cu(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function _h(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new jg;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=l_.bind(null,t,i,s),i.then(t,t))}function vh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function xh(t,i,s,l,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=wi(-1,1),i.tag=2,Ji(s,i,1))),s.lanes|=1),t)}var $g=L.ReactCurrentOwner,An=!1;function xn(t,i,s,l){i.child=t===null?kd(i,null,s,l):us(i,t.child,s,l)}function Sh(t,i,s,l,c){s=s.render;var h=i.ref;return fs(i,c),l=xu(t,i,s,l,h,c),s=Su(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ai(t,i,c)):(Nt&&s&&nu(i),i.flags|=1,xn(t,i,l,c),i.child)}function yh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!Ku(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Mh(t,i,h,l,c)):(t=Ba(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:no,s(M,l)&&t.ref===i.ref)return Ai(t,i,c)}return i.flags|=1,t=sr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Mh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(no(h,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=h,(t.lanes&c)!==0)t.flags&131072&&(An=!0);else return i.lanes=t.lanes,Ai(t,i,c)}return Pu(t,i,s,l,c)}function Eh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(ms,Nn),Nn|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(ms,Nn),Nn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Lt(ms,Nn),Nn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Lt(ms,Nn),Nn|=l;return xn(t,i,c,s),i.child}function Th(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Pu(t,i,s,l,c){var h=wn(s)?yr:cn.current;return h=ss(i,h),fs(i,c),s=xu(t,i,s,l,h,c),l=Su(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ai(t,i,c)):(Nt&&l&&nu(i),i.flags|=1,xn(t,i,s,c),i.child)}function wh(t,i,s,l,c){if(wn(s)){var h=!0;ua(i)}else h=!1;if(fs(i,c),i.stateNode===null)Ra(t,i),hh(i,s,l),Au(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,b=i.memoizedProps;M.props=b;var I=M.context,J=s.contextType;typeof J=="object"&&J!==null?J=Hn(J):(J=wn(s)?yr:cn.current,J=ss(i,J));var _e=s.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(b!==l||I!==J)&&ph(i,M,l,J),Qi=!1;var me=i.memoizedState;M.state=me,va(i,l,M,c),I=i.memoizedState,b!==l||me!==I||Tn.current||Qi?(typeof _e=="function"&&(wu(i,s,_e,l),I=i.memoizedState),(b=Qi||dh(i,s,b,l,me,I,J))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=I),M.props=l,M.state=I,M.context=J,l=b):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Hd(t,i),b=i.memoizedProps,J=i.type===i.elementType?b:Kn(i.type,b),M.props=J,xe=i.pendingProps,me=M.context,I=s.contextType,typeof I=="object"&&I!==null?I=Hn(I):(I=wn(s)?yr:cn.current,I=ss(i,I));var De=s.getDerivedStateFromProps;(_e=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(b!==xe||me!==I)&&ph(i,M,l,I),Qi=!1,me=i.memoizedState,M.state=me,va(i,l,M,c);var ze=i.memoizedState;b!==xe||me!==ze||Tn.current||Qi?(typeof De=="function"&&(wu(i,s,De,l),ze=i.memoizedState),(J=Qi||dh(i,s,J,l,me,ze,I)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,I),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,I)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=I,l=J):(typeof M.componentDidUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Lu(t,i,s,l,h,c)}function Lu(t,i,s,l,c,h){Th(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Ld(i,s,!1),Ai(t,i,h);l=i.stateNode,$g.current=i;var b=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=us(i,t.child,null,h),i.child=us(i,null,b,h)):xn(t,i,b,h),i.memoizedState=l.state,c&&Ld(i,s,!0),i.child}function Ah(t){var i=t.stateNode;i.pendingContext?Cd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Cd(t,i.context,!1),hu(t,i.containerInfo)}function Rh(t,i,s,l,c){return ls(),ou(c),i.flags|=256,xn(t,i,s,l),i.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Du(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ch(t,i,s){var l=i.pendingProps,c=Ft.current,h=!1,M=(i.flags&128)!==0,b;if((b=M)||(b=t!==null&&t.memoizedState===null?!1:(c&2)!==0),b?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Lt(Ft,c&1),t===null)return su(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ka(M,l,0,null),t=br(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Du(s),i.memoizedState=bu,t):Uu(i,M));if(c=t.memoizedState,c!==null&&(b=c.dehydrated,b!==null))return Kg(t,i,M,l,b,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,b=c.sibling;var I={mode:"hidden",children:l.children};return!(M&1)&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=I,i.deletions=null):(l=sr(c,I),l.subtreeFlags=c.subtreeFlags&14680064),b!==null?h=sr(b,h):(h=br(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Du(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=bu,l}return h=t.child,t=h.sibling,l=sr(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Uu(t,i){return i=ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Aa(t,i,s,l){return l!==null&&ou(l),us(i,t.child,null,s),t=Uu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Kg(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=Ru(Error(n(422))),Aa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=ka({mode:"visible",children:l.children},c,0,null),h=br(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&us(i,t.child,null,M),i.child.memoizedState=Du(M),i.memoizedState=bu,h);if(!(i.mode&1))return Aa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var b=l.dgst;return l=b,h=Error(n(419)),l=Ru(h,l,void 0),Aa(t,i,M,l)}if(b=(M&t.childLanes)!==0,An||b){if(l=en,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|M)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ti(t,c),Jn(l,t,c,-1))}return $u(),l=Ru(Error(n(421))),Aa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=u_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,In=ji(c.nextSibling),Un=i,Nt=!0,$n=null,t!==null&&(kn[zn++]=Mi,kn[zn++]=Ei,kn[zn++]=Mr,Mi=t.id,Ei=t.overflow,Mr=i),i=Uu(i,l.children),i.flags|=4096,i)}function Ph(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),cu(t.return,i,s)}function Iu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Lh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(xn(t,i,l.children,s),l=Ft.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ph(t,s,i);else if(t.tag===19)Ph(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ft,l),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&xa(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Iu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&xa(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Iu(i,!0,s,null,h);break;case"together":Iu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ra(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ai(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Rr|=i.lanes,!(s&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=sr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=sr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Zg(t,i,s){switch(i.tag){case 3:Ah(i),ls();break;case 5:Wd(i);break;case 1:wn(i.type)&&ua(i);break;case 4:hu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(ma,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ft,Ft.current&1),i.flags|=128,null):s&i.child.childLanes?Ch(t,i,s):(Lt(Ft,Ft.current&1),t=Ai(t,i,s),t!==null?t.sibling:null);Lt(Ft,Ft.current&1);break;case 19:if(l=(s&i.childLanes)!==0,t.flags&128){if(l)return Lh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Eh(t,i,s)}return Ai(t,i,s)}var bh,Nu,Dh,Uh;bh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Nu=function(){},Dh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,wr(ui.current);var h=null;switch(s){case"input":c=F(t,c),l=F(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=oa)}ut(s,l);var M;s=null;for(J in c)if(!l.hasOwnProperty(J)&&c.hasOwnProperty(J)&&c[J]!=null)if(J==="style"){var b=c[J];for(M in b)b.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in l){var I=l[J];if(b=c!=null?c[J]:void 0,l.hasOwnProperty(J)&&I!==b&&(I!=null||b!=null))if(J==="style")if(b){for(M in b)!b.hasOwnProperty(M)||I&&I.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in I)I.hasOwnProperty(M)&&b[M]!==I[M]&&(s||(s={}),s[M]=I[M])}else s||(h||(h=[]),h.push(J,s)),s=I;else J==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,b=b?b.__html:void 0,I!=null&&b!==I&&(h=h||[]).push(J,I)):J==="children"?typeof I!="string"&&typeof I!="number"||(h=h||[]).push(J,""+I):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(I!=null&&J==="onScroll"&&Dt("scroll",t),h||b===I||(h=[])):(h=h||[]).push(J,I))}s&&(h=h||[]).push("style",s);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},Uh=function(t,i,s,l){s!==l&&(i.flags|=4)};function vo(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Qg(t,i,s){var l=i.pendingProps;switch(iu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return wn(i.type)&&la(),dn(i),null;case 3:return l=i.stateNode,ds(),Ut(Tn),Ut(cn),gu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ha(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,$n!==null&&(Yu($n),$n=null))),Nu(t,i),dn(i),null;case 5:pu(i);var c=wr(ho.current);if(s=i.type,t!==null&&i.stateNode!=null)Dh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=wr(ui.current),ha(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[li]=i,l[ao]=h,t=(i.mode&1)!==0,s){case"dialog":Dt("cancel",l),Dt("close",l);break;case"iframe":case"object":case"embed":Dt("load",l);break;case"video":case"audio":for(c=0;c<ro.length;c++)Dt(ro[c],l);break;case"source":Dt("error",l);break;case"img":case"image":case"link":Dt("error",l),Dt("load",l);break;case"details":Dt("toggle",l);break;case"input":gn(l,h),Dt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Dt("invalid",l);break;case"textarea":K(l,h),Dt("invalid",l)}ut(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var b=h[M];M==="children"?typeof b=="string"?l.textContent!==b&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,b,t),c=["children",b]):typeof b=="number"&&l.textContent!==""+b&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,b,t),c=["children",""+b]):a.hasOwnProperty(M)&&b!=null&&M==="onScroll"&&Dt("scroll",l)}switch(s){case"input":Tt(l),Ye(l,h,!0);break;case"textarea":Tt(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=oa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[li]=i,t[ao]=l,bh(t,i,!1,!1),i.stateNode=t;e:{switch(M=nt(s,l),s){case"dialog":Dt("cancel",t),Dt("close",t),c=l;break;case"iframe":case"object":case"embed":Dt("load",t),c=l;break;case"video":case"audio":for(c=0;c<ro.length;c++)Dt(ro[c],t);c=l;break;case"source":Dt("error",t),c=l;break;case"img":case"image":case"link":Dt("error",t),Dt("load",t),c=l;break;case"details":Dt("toggle",t),c=l;break;case"input":gn(t,l),c=F(t,l),Dt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),Dt("invalid",t);break;case"textarea":K(t,l),c=E(t,l),Dt("invalid",t);break;default:c=l}ut(s,c),b=c;for(h in b)if(b.hasOwnProperty(h)){var I=b[h];h==="style"?Je(t,I):h==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&Ne(t,I)):h==="children"?typeof I=="string"?(s!=="textarea"||I!=="")&&at(t,I):typeof I=="number"&&at(t,""+I):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?I!=null&&h==="onScroll"&&Dt("scroll",t):I!=null&&D(t,h,I,M))}switch(s){case"input":Tt(t),Ye(t,l,!1);break;case"textarea":Tt(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?P(t,!!l.multiple,h,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=oa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)Uh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=wr(ho.current),wr(ui.current),ha(i)){if(l=i.stateNode,s=i.memoizedProps,l[li]=i,(h=l.nodeValue!==s)&&(t=Un,t!==null))switch(t.tag){case 3:sa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[li]=i,i.stateNode=l}return dn(i),null;case 13:if(Ut(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Nt&&In!==null&&i.mode&1&&!(i.flags&128))Fd(),ls(),i.flags|=98560,h=!1;else if(h=ha(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[li]=i}else ls(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else $n!==null&&(Yu($n),$n=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||Ft.current&1?jt===0&&(jt=3):$u())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ds(),Nu(t,i),t===null&&so(i.stateNode.containerInfo),dn(i),null;case 10:return uu(i.type._context),dn(i),null;case 17:return wn(i.type)&&la(),dn(i),null;case 19:if(Ut(Ft),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)vo(h,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(M=xa(t),M!==null){for(i.flags|=128,vo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Lt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&j()>gs&&(i.flags|=128,l=!0,vo(h,!1),i.lanes=4194304)}else{if(!l)if(t=xa(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),vo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Nt)return dn(i),null}else 2*j()-h.renderingStartTime>gs&&s!==1073741824&&(i.flags|=128,l=!0,vo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=j(),i.sibling=null,s=Ft.current,Lt(Ft,l?s&1|2:s&1),i):(dn(i),null);case 22:case 23:return ju(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Nn&1073741824&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Jg(t,i){switch(iu(i),i.tag){case 1:return wn(i.type)&&la(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),Ut(Tn),Ut(cn),gu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return pu(i),null;case 13:if(Ut(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ls()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ut(Ft),null;case 4:return ds(),null;case 10:return uu(i.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var Ca=!1,hn=!1,e_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ps(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){zt(t,i,l)}else s.current=null}function Fu(t,i,s){try{s()}catch(l){zt(t,i,l)}}var Ih=!1;function t_(t,i){if(jl=jo,t=dd(),zl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,b=-1,I=-1,J=0,_e=0,xe=t,me=null;t:for(;;){for(var De;xe!==s||c!==0&&xe.nodeType!==3||(b=M+c),xe!==h||l!==0&&xe.nodeType!==3||(I=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===t)break t;if(me===s&&++J===c&&(b=M),me===h&&++_e===l&&(I=M),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}s=b===-1||I===-1?null:{start:b,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for($l={focusedElem:t,selectionRange:s},jo=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Ht=ze.memoizedState,q=i.stateNode,z=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Kn(i.type,Ve),Ht);q.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){zt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=Ih,Ih=!1,ze}function xo(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Fu(i,s,h)}c=c.next}while(c!==l)}}function Pa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Ou(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Nh(t){var i=t.alternate;i!==null&&(t.alternate=null,Nh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[li],delete i[ao],delete i[Jl],delete i[Og],delete i[Bg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fh(t){return t.tag===5||t.tag===3||t.tag===4}function Oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(t=t.child,t!==null))for(Bu(t,i,s),t=t.sibling;t!==null;)Bu(t,i,s),t=t.sibling}function ku(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ku(t,i,s),t=t.sibling;t!==null;)ku(t,i,s),t=t.sibling}var sn=null,Zn=!1;function er(t,i,s){for(s=s.child;s!==null;)Bh(t,i,s),s=s.sibling}function Bh(t,i,s){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,s)}catch{}switch(s.tag){case 5:hn||ps(s,i);case 6:var l=sn,c=Zn;sn=null,er(t,i,s),sn=l,Zn=c,sn!==null&&(Zn?(t=sn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):sn.removeChild(s.stateNode));break;case 18:sn!==null&&(Zn?(t=sn,s=s.stateNode,t.nodeType===8?Ql(t.parentNode,s):t.nodeType===1&&Ql(t,s),Ks(t)):Ql(sn,s.stateNode));break;case 4:l=sn,c=Zn,sn=s.stateNode.containerInfo,Zn=!0,er(t,i,s),sn=l,Zn=c;break;case 0:case 11:case 14:case 15:if(!hn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&(h&2||h&4)&&Fu(s,i,M),c=c.next}while(c!==l)}er(t,i,s);break;case 1:if(!hn&&(ps(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(b){zt(s,i,b)}er(t,i,s);break;case 21:er(t,i,s);break;case 22:s.mode&1?(hn=(l=hn)||s.memoizedState!==null,er(t,i,s),hn=l):er(t,i,s);break;default:er(t,i,s)}}function kh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new e_),i.forEach(function(l){var c=c_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function Qn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,b=M;e:for(;b!==null;){switch(b.tag){case 5:sn=b.stateNode,Zn=!1;break e;case 3:sn=b.stateNode.containerInfo,Zn=!0;break e;case 4:sn=b.stateNode.containerInfo,Zn=!0;break e}b=b.return}if(sn===null)throw Error(n(160));Bh(h,M,c),sn=null,Zn=!1;var I=c.alternate;I!==null&&(I.return=null),c.return=null}catch(J){zt(c,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zh(i,t),i=i.sibling}function zh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(i,t),fi(t),l&4){try{xo(3,t,t.return),Pa(3,t)}catch(Ve){zt(t,t.return,Ve)}try{xo(5,t,t.return)}catch(Ve){zt(t,t.return,Ve)}}break;case 1:Qn(i,t),fi(t),l&512&&s!==null&&ps(s,s.return);break;case 5:if(Qn(i,t),fi(t),l&512&&s!==null&&ps(s,s.return),t.flags&32){var c=t.stateNode;try{at(c,"")}catch(Ve){zt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,b=t.type,I=t.updateQueue;if(t.updateQueue=null,I!==null)try{b==="input"&&h.type==="radio"&&h.name!=null&&ft(c,h),nt(b,M);var J=nt(b,h);for(M=0;M<I.length;M+=2){var _e=I[M],xe=I[M+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ne(c,xe):_e==="children"?at(c,xe):D(c,_e,xe,J)}switch(b){case"input":lt(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var De=h.value;De!=null?P(c,!!h.multiple,De,!1):me!==!!h.multiple&&(h.defaultValue!=null?P(c,!!h.multiple,h.defaultValue,!0):P(c,!!h.multiple,h.multiple?[]:"",!1))}c[ao]=h}catch(Ve){zt(t,t.return,Ve)}}break;case 6:if(Qn(i,t),fi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){zt(t,t.return,Ve)}}break;case 3:if(Qn(i,t),fi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ks(i.containerInfo)}catch(Ve){zt(t,t.return,Ve)}break;case 4:Qn(i,t),fi(t);break;case 13:Qn(i,t),fi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Vu=j())),l&4&&kh(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(hn=(J=hn)||_e,Qn(i,t),hn=J):Qn(i,t),fi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!_e&&t.mode&1)for(Fe=t,_e=t.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,De=me.child,me.tag){case 0:case 11:case 14:case 15:xo(4,me,me.return);break;case 1:ps(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){zt(l,s,Ve)}}break;case 5:ps(me,me.return);break;case 22:if(me.memoizedState!==null){Gh(xe);continue}}De!==null?(De.return=me,Fe=De):Gh(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,J?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(b=xe.stateNode,I=xe.memoizedProps.style,M=I!=null&&I.hasOwnProperty("display")?I.display:null,b.style.display=je("display",M))}catch(Ve){zt(t,t.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=J?"":xe.memoizedProps}catch(Ve){zt(t,t.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Qn(i,t),fi(t),l&4&&kh(t);break;case 21:break;default:Qn(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Fh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(at(c,""),l.flags&=-33);var h=Oh(t);ku(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,b=Oh(t);Bu(t,b,M);break;default:throw Error(n(161))}}catch(I){zt(t,t.return,I)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function n_(t,i,s){Fe=t,Hh(t)}function Hh(t,i,s){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ca;if(!M){var b=c.alternate,I=b!==null&&b.memoizedState!==null||hn;b=Ca;var J=hn;if(Ca=M,(hn=I)&&!J)for(Fe=c;Fe!==null;)M=Fe,I=M.child,M.tag===22&&M.memoizedState!==null?Wh(c):I!==null?(I.return=M,Fe=I):Wh(c);for(;h!==null;)Fe=h,Hh(h),h=h.sibling;Fe=c,Ca=b,hn=J}Vh(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,Fe=h):Vh(t)}}function Vh(t){for(;Fe!==null;){var i=Fe;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:hn||Pa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Kn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Gd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Gd(i,M,s)}break;case 5:var b=i.stateNode;if(s===null&&i.flags&4){s=b;var I=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&s.focus();break;case"img":I.src&&(s.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Ks(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Ou(i)}catch(me){zt(i,i.return,me)}}if(i===t){Fe=null;break}if(s=i.sibling,s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function Gh(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function Wh(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Pa(4,i)}catch(I){zt(i,s,I)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(I){zt(i,c,I)}}var h=i.return;try{Ou(i)}catch(I){zt(i,h,I)}break;case 5:var M=i.return;try{Ou(i)}catch(I){zt(i,M,I)}}}catch(I){zt(i,i.return,I)}if(i===t){Fe=null;break}var b=i.sibling;if(b!==null){b.return=i.return,Fe=b;break}Fe=i.return}}var i_=Math.ceil,La=L.ReactCurrentDispatcher,zu=L.ReactCurrentOwner,Gn=L.ReactCurrentBatchConfig,xt=0,en=null,Gt=null,on=0,Nn=0,ms=$i(0),jt=0,So=null,Rr=0,ba=0,Hu=0,yo=null,Rn=null,Vu=0,gs=1/0,Ri=null,Da=!1,Gu=null,tr=null,Ua=!1,nr=null,Ia=0,Mo=0,Wu=null,Na=-1,Fa=0;function Sn(){return xt&6?j():Na!==-1?Na:Na=j()}function ir(t){return t.mode&1?xt&2&&on!==0?on&-on:zg.transition!==null?(Fa===0&&(Fa=Rt()),Fa):(t=vt,t!==0||(t=window.event,t=t===void 0?16:Yf(t.type)),t):1}function Jn(t,i,s,l){if(50<Mo)throw Mo=0,Wu=null,Error(n(185));Zt(t,s,l),(!(xt&2)||t!==en)&&(t===en&&(!(xt&2)&&(ba|=s),jt===4&&rr(t,on)),Cn(t,l),s===1&&xt===0&&!(i.mode&1)&&(gs=j()+500,ca&&Zi()))}function Cn(t,i){var s=t.callbackNode;vn(t,i);var l=ln(t,t===en?on:0);if(l===0)s!==null&&T(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&T(s),i===1)t.tag===0?kg(Yh.bind(null,t)):bd(Yh.bind(null,t)),Ng(function(){!(xt&6)&&Zi()}),s=null;else{switch(ai(l)){case 1:s=Se;break;case 4:s=Re;break;case 16:s=be;break;case 536870912:s=et;break;default:s=be}s=ep(s,Xh.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Xh(t,i){if(Na=-1,Fa=0,xt&6)throw Error(n(327));var s=t.callbackNode;if(_s()&&t.callbackNode!==s)return null;var l=ln(t,t===en?on:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=Oa(t,l);else{i=l;var c=xt;xt|=2;var h=jh();(en!==t||on!==i)&&(Ri=null,gs=j()+500,Pr(t,i));do try{o_();break}catch(b){qh(t,b)}while(!0);lu(),La.current=h,xt=c,Gt!==null?i=0:(en=null,on=0,i=jt)}if(i!==0){if(i===2&&(c=xi(t),c!==0&&(l=c,i=Xu(t,c))),i===1)throw s=So,Pr(t,0),rr(t,l),Cn(t,j()),s;if(i===6)rr(t,l);else{if(c=t.current.alternate,!(l&30)&&!r_(c)&&(i=Oa(t,l),i===2&&(h=xi(t),h!==0&&(l=h,i=Xu(t,h))),i===1))throw s=So,Pr(t,0),rr(t,l),Cn(t,j()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Lr(t,Rn,Ri);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=Vu+500-j(),10<i)){if(ln(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Sn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Zl(Lr.bind(null,t,Rn,Ri),i);break}Lr(t,Rn,Ri);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-rt(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=j()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*i_(l/1960))-l,10<l){t.timeoutHandle=Zl(Lr.bind(null,t,Rn,Ri),l);break}Lr(t,Rn,Ri);break;case 5:Lr(t,Rn,Ri);break;default:throw Error(n(329))}}}return Cn(t,j()),t.callbackNode===s?Xh.bind(null,t):null}function Xu(t,i){var s=yo;return t.current.memoizedState.isDehydrated&&(Pr(t,i).flags|=256),t=Oa(t,i),t!==2&&(i=Rn,Rn=s,i!==null&&Yu(i)),t}function Yu(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function r_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!jn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~Hu,i&=~ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-rt(i),l=1<<s;t[s]=-1,i&=~l}}function Yh(t){if(xt&6)throw Error(n(327));_s();var i=ln(t,0);if(!(i&1))return Cn(t,j()),null;var s=Oa(t,i);if(t.tag!==0&&s===2){var l=xi(t);l!==0&&(i=l,s=Xu(t,l))}if(s===1)throw s=So,Pr(t,0),rr(t,i),Cn(t,j()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Lr(t,Rn,Ri),Cn(t,j()),null}function qu(t,i){var s=xt;xt|=1;try{return t(i)}finally{xt=s,xt===0&&(gs=j()+500,ca&&Zi())}}function Cr(t){nr!==null&&nr.tag===0&&!(xt&6)&&_s();var i=xt;xt|=1;var s=Gn.transition,l=vt;try{if(Gn.transition=null,vt=1,t)return t()}finally{vt=l,Gn.transition=s,xt=i,!(xt&6)&&Zi()}}function ju(){Nn=ms.current,Ut(ms)}function Pr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Ig(s)),Gt!==null)for(s=Gt.return;s!==null;){var l=s;switch(iu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&la();break;case 3:ds(),Ut(Tn),Ut(cn),gu();break;case 5:pu(l);break;case 4:ds();break;case 13:Ut(Ft);break;case 19:Ut(Ft);break;case 10:uu(l.type._context);break;case 22:case 23:ju()}s=s.return}if(en=t,Gt=t=sr(t.current,null),on=Nn=i,jt=0,So=null,Hu=ba=Rr=0,Rn=yo=null,Tr!==null){for(i=0;i<Tr.length;i++)if(s=Tr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Tr=null}return t}function qh(t,i){do{var s=Gt;try{if(lu(),Sa.current=Ta,ya){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}ya=!1}if(Ar=0,Jt=qt=Ot=null,po=!1,mo=0,zu.current=null,s===null||s.return===null){jt=1,So=i,Gt=null;break}e:{var h=t,M=s.return,b=s,I=i;if(i=on,b.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var J=I,_e=b,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=vh(M);if(De!==null){De.flags&=-257,xh(De,M,b,h,i),De.mode&1&&_h(h,J,i),i=De,I=J;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(I),i.updateQueue=Ve}else ze.add(I);break e}else{if(!(i&1)){_h(h,J,i),$u();break e}I=Error(n(426))}}else if(Nt&&b.mode&1){var Ht=vh(M);if(Ht!==null){!(Ht.flags&65536)&&(Ht.flags|=256),xh(Ht,M,b,h,i),ou(hs(I,b));break e}}h=I=hs(I,b),jt!==4&&(jt=2),yo===null?yo=[h]:yo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=mh(h,I,i);Vd(h,q);break e;case 1:b=I;var z=h.type,$=h.stateNode;if(!(h.flags&128)&&(typeof z.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(tr===null||!tr.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=gh(h,b,i);Vd(h,Ee);break e}}h=h.return}while(h!==null)}Kh(s)}catch(Xe){i=Xe,Gt===s&&s!==null&&(Gt=s=s.return);continue}break}while(!0)}function jh(){var t=La.current;return La.current=Ta,t===null?Ta:t}function $u(){(jt===0||jt===3||jt===2)&&(jt=4),en===null||!(Rr&268435455)&&!(ba&268435455)||rr(en,on)}function Oa(t,i){var s=xt;xt|=2;var l=jh();(en!==t||on!==i)&&(Ri=null,Pr(t,i));do try{s_();break}catch(c){qh(t,c)}while(!0);if(lu(),xt=s,La.current=l,Gt!==null)throw Error(n(261));return en=null,on=0,jt}function s_(){for(;Gt!==null;)$h(Gt)}function o_(){for(;Gt!==null&&!G();)$h(Gt)}function $h(t){var i=Jh(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,i===null?Kh(t):Gt=i,zu.current=null}function Kh(t){var i=t;do{var s=i.alternate;if(t=i.return,i.flags&32768){if(s=Jg(s,i),s!==null){s.flags&=32767,Gt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Gt=null;return}}else if(s=Qg(s,i,Nn),s!==null){Gt=s;return}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);jt===0&&(jt=5)}function Lr(t,i,s){var l=vt,c=Gn.transition;try{Gn.transition=null,vt=1,a_(t,i,s,l)}finally{Gn.transition=c,vt=l}return null}function a_(t,i,s,l){do _s();while(nr!==null);if(xt&6)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(rn(t,h),t===en&&(Gt=en=null,on=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Ua||(Ua=!0,ep(be,function(){return _s(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Gn.transition,Gn.transition=null;var M=vt;vt=1;var b=xt;xt|=4,zu.current=null,t_(t,s),zh(s,t),Rg($l),jo=!!jl,$l=jl=null,t.current=s,n_(s),Q(),xt=b,vt=M,Gn.transition=h}else t.current=s;if(Ua&&(Ua=!1,nr=t,Ia=c),h=t.pendingLanes,h===0&&(tr=null),pt(s.stateNode),Cn(t,j()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Da)throw Da=!1,t=Gu,Gu=null,t;return Ia&1&&t.tag!==0&&_s(),h=t.pendingLanes,h&1?t===Wu?Mo++:(Mo=0,Wu=t):Mo=0,Zi(),null}function _s(){if(nr!==null){var t=ai(Ia),i=Gn.transition,s=vt;try{if(Gn.transition=null,vt=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Ia=0,xt&6)throw Error(n(331));var c=xt;for(xt|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if(Fe.flags&16){var b=h.deletions;if(b!==null){for(var I=0;I<b.length;I++){var J=b[I];for(Fe=J;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:xo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,De=_e.return;if(Nh(_e),_e===J){Fe=null;break}if(me!==null){me.return=De,Fe=me;break}Fe=De}}}var ze=h.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Ht=Ve.sibling;Ve.sibling=null,Ve=Ht}while(Ve!==null)}}Fe=h}}if(h.subtreeFlags&2064&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,h.flags&2048)switch(h.tag){case 0:case 11:case 15:xo(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Fe=q;break e}Fe=h.return}}var z=t.current;for(Fe=z;Fe!==null;){M=Fe;var $=M.child;if(M.subtreeFlags&2064&&$!==null)$.return=M,Fe=$;else e:for(M=z;Fe!==null;){if(b=Fe,b.flags&2048)try{switch(b.tag){case 0:case 11:case 15:Pa(9,b)}}catch(Xe){zt(b,b.return,Xe)}if(b===M){Fe=null;break e}var Ee=b.sibling;if(Ee!==null){Ee.return=b.return,Fe=Ee;break e}Fe=b.return}}if(xt=c,Zi(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,t)}catch{}l=!0}return l}finally{vt=s,Gn.transition=i}}return!1}function Zh(t,i,s){i=hs(s,i),i=mh(t,i,1),t=Ji(t,i,1),i=Sn(),t!==null&&(Zt(t,1,i),Cn(t,i))}function zt(t,i,s){if(t.tag===3)Zh(t,t,s);else for(;i!==null;){if(i.tag===3){Zh(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=hs(s,t),t=gh(i,t,1),i=Ji(i,t,1),t=Sn(),i!==null&&(Zt(i,1,t),Cn(i,t));break}}i=i.return}}function l_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=Sn(),t.pingedLanes|=t.suspendedLanes&s,en===t&&(on&s)===s&&(jt===4||jt===3&&(on&130023424)===on&&500>j()-Vu?Pr(t,0):Hu|=s),Cn(t,i)}function Qh(t,i){i===0&&(t.mode&1?(i=kt,kt<<=1,!(kt&130023424)&&(kt=4194304)):i=1);var s=Sn();t=Ti(t,i),t!==null&&(Zt(t,i,s),Cn(t,s))}function u_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Qh(t,s)}function c_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Qh(t,s)}var Jh;Jh=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if(!(t.lanes&s)&&!(i.flags&128))return An=!1,Zg(t,i,s);An=!!(t.flags&131072)}else An=!1,Nt&&i.flags&1048576&&Dd(i,da,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ra(t,i),t=i.pendingProps;var c=ss(i,cn.current);fs(i,s),c=xu(null,i,l,t,c,s);var h=Su();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(h=!0,ua(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,du(i),c.updater=wa,i.stateNode=c,c._reactInternals=i,Au(i,l,t,s),i=Lu(null,i,l,!0,h,s)):(i.tag=0,Nt&&h&&nu(i),xn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ra(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=d_(l),t=Kn(l,t),c){case 0:i=Pu(null,i,l,t,s);break e;case 1:i=wh(null,i,l,t,s);break e;case 11:i=Sh(null,i,l,t,s);break e;case 14:i=yh(null,i,l,Kn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Pu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),wh(t,i,l,c,s);case 3:e:{if(Ah(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Hd(t,i),va(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=hs(Error(n(423)),i),i=Rh(t,i,l,s,c);break e}else if(l!==c){c=hs(Error(n(424)),i),i=Rh(t,i,l,s,c);break e}else for(In=ji(i.stateNode.containerInfo.firstChild),Un=i,Nt=!0,$n=null,s=kd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ls(),l===c){i=Ai(t,i,s);break e}xn(t,i,l,s)}i=i.child}return i;case 5:return Wd(i),t===null&&su(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,Kl(l,c)?M=null:h!==null&&Kl(l,h)&&(i.flags|=32),Th(t,i),xn(t,i,M,s),i.child;case 6:return t===null&&su(i),null;case 13:return Ch(t,i,s);case 4:return hu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=us(i,null,l,s):xn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Sh(t,i,l,c,s);case 7:return xn(t,i,i.pendingProps,s),i.child;case 8:return xn(t,i,i.pendingProps.children,s),i.child;case 12:return xn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Lt(ma,l._currentValue),l._currentValue=M,h!==null)if(jn(h.value,M)){if(h.children===c.children&&!Tn.current){i=Ai(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var b=h.dependencies;if(b!==null){M=h.child;for(var I=b.firstContext;I!==null;){if(I.context===l){if(h.tag===1){I=wi(-1,s&-s),I.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?I.next=I:(I.next=_e.next,_e.next=I),J.pending=I}}h.lanes|=s,I=h.alternate,I!==null&&(I.lanes|=s),cu(h.return,s,i),b.lanes|=s;break}I=I.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,b=M.alternate,b!==null&&(b.lanes|=s),cu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}xn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,fs(i,s),c=Hn(c),l=l(c),i.flags|=1,xn(t,i,l,s),i.child;case 14:return l=i.type,c=Kn(l,i.pendingProps),c=Kn(l.type,c),yh(t,i,l,c,s);case 15:return Mh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Ra(t,i),i.tag=1,wn(l)?(t=!0,ua(i)):t=!1,fs(i,s),hh(i,l,c),Au(i,l,c,s),Lu(null,i,l,!0,t,s);case 19:return Lh(t,i,s);case 22:return Eh(t,i,s)}throw Error(n(156,i.tag))};function ep(t,i){return Xo(t,i)}function f_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,i,s,l){return new f_(t,i,s,l)}function Ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function d_(t){if(typeof t=="function")return Ku(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===he)return 14}return 2}function sr(t,i){var s=t.alternate;return s===null?(s=Wn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Ba(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")Ku(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return br(s.children,c,h,i);case Y:M=8,c|=8;break;case C:return t=Wn(12,s,i,c|2),t.elementType=C,t.lanes=h,t;case ee:return t=Wn(13,s,i,c),t.elementType=ee,t.lanes=h,t;case ce:return t=Wn(19,s,i,c),t.elementType=ce,t.lanes=h,t;case le:return ka(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case k:M=9;break e;case oe:M=11;break e;case he:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Wn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function br(t,i,s,l){return t=Wn(7,t,l,i),t.lanes=s,t}function ka(t,i,s,l){return t=Wn(22,t,l,i),t.elementType=le,t.lanes=s,t.stateNode={isHidden:!1},t}function Zu(t,i,s){return t=Wn(6,t,null,i),t.lanes=s,t}function Qu(t,i,s){return i=Wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function h_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Ju(t,i,s,l,c,h,M,b,I){return t=new h_(t,i,s,b,I),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Wn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(h),t}function p_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function tp(t){if(!t)return Ki;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(wn(s))return Pd(t,s,i)}return i}function np(t,i,s,l,c,h,M,b,I){return t=Ju(s,l,!0,t,c,h,M,b,I),t.context=tp(null),s=t.current,l=Sn(),c=ir(s),h=wi(l,c),h.callback=i??null,Ji(s,h,c),t.current.lanes=c,Zt(t,c,l),Cn(t,l),t}function za(t,i,s,l){var c=i.current,h=Sn(),M=ir(c);return s=tp(s),i.context===null?i.context=s:i.pendingContext=s,i=wi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(c,i,M),t!==null&&(Jn(t,c,M,h),_a(t,c,M)),M}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ip(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function ec(t,i){ip(t,i),(t=t.alternate)&&ip(t,i)}var rp=typeof reportError=="function"?reportError:function(t){console.error(t)};function tc(t){this._internalRoot=t}Va.prototype.render=tc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));za(t,i,null,null)},Va.prototype.unmount=tc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Cr(function(){za(null,t,null,null)}),i[Si]=null}};function Va(t){this._internalRoot=t}Va.prototype.unstable_scheduleHydration=function(t){if(t){var i=Hf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Xi.length&&i!==0&&i<Xi[s].priority;s++);Xi.splice(s,0,t),s===0&&Wf(t)}};function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ga(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sp(){}function m_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var J=Ha(M);h.call(J)}}var M=np(i,l,t,0,null,!1,!1,"",sp);return t._reactRootContainer=M,t[Si]=M.current,so(t.nodeType===8?t.parentNode:t),Cr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var b=l;l=function(){var J=Ha(I);b.call(J)}}var I=Ju(t,0,!1,null,null,!1,!1,"",sp);return t._reactRootContainer=I,t[Si]=I.current,so(t.nodeType===8?t.parentNode:t),Cr(function(){za(i,I,s,l)}),I}function Wa(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var b=c;c=function(){var I=Ha(M);b.call(I)}}za(i,M,t,c)}else M=m_(s,i,t,c,l);return Ha(M)}kf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=ht(i.pendingLanes);s!==0&&(Qt(i,s|1),Cn(i,j()),!(xt&6)&&(gs=j()+500,Zi()))}break;case 13:Cr(function(){var l=Ti(t,1);if(l!==null){var c=Sn();Jn(l,t,1,c)}}),ec(t,1)}},Rl=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var s=Sn();Jn(i,t,134217728,s)}ec(t,134217728)}},zf=function(t){if(t.tag===13){var i=ir(t),s=Ti(t,i);if(s!==null){var l=Sn();Jn(s,t,i,l)}ec(t,i)}},Hf=function(){return vt},Vf=function(t,i){var s=vt;try{return vt=t,i()}finally{vt=s}},Ae=function(t,i,s){switch(i){case"input":if(lt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=aa(l);if(!c)throw Error(n(90));dt(l),lt(l,c)}}}break;case"textarea":pe(t,s);break;case"select":i=s.value,i!=null&&P(t,!!s.multiple,i,!1)}},bt=qu,Yt=Cr;var g_={usingClientEntryPoint:!1,Events:[lo,is,aa,Pe,it,qu]},Eo={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},__={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Go(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Qe=Xa.inject(__),He=Xa}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g_,Pn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(i))throw Error(n(200));return p_(t,i,null,s)},Pn.createRoot=function(t,i){if(!nc(t))throw Error(n(299));var s=!1,l="",c=rp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=Ju(t,1,!1,null,null,s,!1,l,c),t[Si]=i.current,so(t.nodeType===8?t.parentNode:t),new tc(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Go(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return Cr(t)},Pn.hydrate=function(t,i,s){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!0,s)},Pn.hydrateRoot=function(t,i,s){if(!nc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=rp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=np(i,null,t,1,s??null,c,!1,h,M),t[Si]=i.current,so(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Va(i)},Pn.render=function(t,i,s){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!1,s)},Pn.unmountComponentAtNode=function(t){if(!Ga(t))throw Error(n(40));return t._reactRootContainer?(Cr(function(){Wa(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},Pn.unstable_batchedUpdates=qu,Pn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Ga(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Wa(t,i,s,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var hp;function w_(){if(hp)return sc.exports;hp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),sc.exports=T_(),sc.exports}var pp;function A_(){if(pp)return Ya;pp=1;var o=w_();return Ya.createRoot=o.createRoot,Ya.hydrateRoot=o.hydrateRoot,Ya}var R_=A_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cf="172",C_=0,mp=1,P_=2,fm=1,L_=2,Ui=3,gr=0,bn=1,hi=2,pr=0,Is=1,gp=2,_p=3,vp=4,b_=5,zr=100,D_=101,U_=102,I_=103,N_=104,F_=200,O_=201,B_=202,k_=203,kc=204,zc=205,z_=206,H_=207,V_=208,G_=209,W_=210,X_=211,Y_=212,q_=213,j_=214,Hc=0,Vc=1,Gc=2,Os=3,Wc=4,Xc=5,Yc=6,qc=7,dm=0,$_=1,K_=2,mr=0,Z_=1,Q_=2,J_=3,ev=4,tv=5,nv=6,iv=7,hm=300,Bs=301,ks=302,jc=303,$c=304,El=306,Kc=1e3,Vr=1001,Zc=1002,si=1003,rv=1004,qa=1005,pi=1006,lc=1007,Gr=1008,Oi=1009,pm=1010,mm=1011,bo=1012,Pf=1013,Xr=1014,Ii=1015,Uo=1016,Lf=1017,bf=1018,zs=1020,gm=35902,_m=1021,vm=1022,ri=1023,xm=1024,Sm=1025,Ns=1026,Hs=1027,ym=1028,Df=1029,Mm=1030,Uf=1031,If=1033,ml=33776,gl=33777,_l=33778,vl=33779,Qc=35840,Jc=35841,ef=35842,tf=35843,nf=36196,rf=37492,sf=37496,of=37808,af=37809,lf=37810,uf=37811,cf=37812,ff=37813,df=37814,hf=37815,pf=37816,mf=37817,gf=37818,_f=37819,vf=37820,xf=37821,xl=36492,Sf=36494,yf=36495,Em=36283,Mf=36284,Ef=36285,Tf=36286,sv=3200,ov=3201,av=0,lv=1,hr="",Yn="srgb",Vs="srgb-linear",yl="linear",wt="srgb",vs=7680,xp=519,uv=512,cv=513,fv=514,Tm=515,dv=516,hv=517,pv=518,mv=519,Sp=35044,yp="300 es",Ni=2e3,Ml=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=Math.PI/180,wf=180/Math.PI;function Io(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[o&255]+pn[o>>8&255]+pn[o>>16&255]+pn[o>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function mt(o,e,n){return Math.max(e,Math.min(n,o))}function gv(o,e){return(o%e+e)%e}function cc(o,e,n){return(1-n)*o+n*e}function wo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ln(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],x=r[2],y=r[5],w=r[8],R=a[0],S=a[3],_=a[6],O=a[1],D=a[4],L=a[7],X=a[2],H=a[5],N=a[8];return u[0]=f*R+d*O+p*X,u[3]=f*S+d*D+p*H,u[6]=f*_+d*L+p*N,u[1]=m*R+g*O+v*X,u[4]=m*S+g*D+v*H,u[7]=m*_+g*L+v*N,u[2]=x*R+y*O+w*X,u[5]=x*S+y*D+w*H,u[8]=x*_+y*L+w*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return n*f*g-n*d*m-r*u*g+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*f-d*m,x=d*p-g*u,y=m*u-f*p,w=n*v+r*x+a*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(a*m-g*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(g*n-a*p)*R,e[5]=(a*u-d*n)*R,e[6]=y*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(fc.makeScale(e,n)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,n){return this.premultiply(fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new st;function wm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Do(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _v(){const o=Do("canvas");return o.style.display="block",o}const Mp={};function Ds(o){o in Mp||(Mp[o]=!0,console.warn(o))}function vv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function xv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ep=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tp=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yv(){const o={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===wt&&(a.r=Fi(a.r),a.g=Fi(a.g),a.b=Fi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===wt&&(a.r=Fs(a.r),a.g=Fs(a.g),a.b=Fs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===hr?yl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Vs]:{primaries:e,whitePoint:r,transfer:yl,toXYZ:Ep,fromXYZ:Tp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:r,transfer:wt,toXYZ:Ep,fromXYZ:Tp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),o}const yt=yv();function Fi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xs;class Mv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Do("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Do("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Fi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fi(n[r]/255)*255):n[r]=Fi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ev=0;class Am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(dc(a[f].image)):u.push(dc(a[f]))}else u=dc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function dc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Mv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tv=0;class Mn extends Ws{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,r=Vr,a=Vr,u=pi,f=Gr,d=ri,p=Oi,m=Mn.DEFAULT_ANISOTROPY,g=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Io(),this.name="",this.source=new Am(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kc:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kc:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=hm;Mn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,a=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],g=p[4],v=p[8],x=p[1],y=p[5],w=p[9],R=p[2],S=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(w-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(w+S)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,L=(y+1)/2,X=(_+1)/2,H=(g+x)/4,N=(v+R)/4,Y=(w+S)/4;return D>L&&D>X?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=H/r,u=N/r):L>X?L<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(L),r=H/a,u=Y/a):X<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(X),r=N/u,a=Y/u),this.set(r,a,u,n),this}let O=Math.sqrt((S-w)*(S-w)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(S-w)/O,this.y=(v-R)/O,this.z=(x-g)/O,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this.w=mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this.w=mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wv extends Ws{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Mn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Am(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends wv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Rm extends Mn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=si,this.minFilter=si,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Av extends Mn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=si,this.minFilter=si,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];const x=u[f+0],y=u[f+1],w=u[f+2],R=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=w,e[n+3]=R;return}if(v!==R||p!==x||m!==y||g!==w){let S=1-d;const _=p*x+m*y+g*w+v*R,O=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const X=Math.sqrt(D),H=Math.atan2(X,_*O);S=Math.sin(S*H)/X,d=Math.sin(d*H)/X}const L=d*O;if(p=p*S+x*L,m=m*S+y*L,g=g*S+w*L,v=v*S+R*L,S===1-d){const X=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=X,m*=X,g*=X,v*=X}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],g=r[a+3],v=u[f],x=u[f+1],y=u[f+2],w=u[f+3];return e[n]=d*w+g*v+p*y-m*x,e[n+1]=p*w+g*x+m*v-d*y,e[n+2]=m*w+g*y+d*x-p*v,e[n+3]=g*w-d*v-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(a/2),v=d(u/2),x=p(r/2),y=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*g*v+m*y*w,this._y=m*y*v-x*g*w,this._z=m*g*w+x*y*v,this._w=m*g*v-x*y*w;break;case"YXZ":this._x=x*g*v+m*y*w,this._y=m*y*v-x*g*w,this._z=m*g*w-x*y*v,this._w=m*g*v+x*y*w;break;case"ZXY":this._x=x*g*v-m*y*w,this._y=m*y*v+x*g*w,this._z=m*g*w+x*y*v,this._w=m*g*v-x*y*w;break;case"ZYX":this._x=x*g*v-m*y*w,this._y=m*y*v+x*g*w,this._z=m*g*w-x*y*v,this._w=m*g*v+x*y*w;break;case"YZX":this._x=x*g*v+m*y*w,this._y=m*y*v+x*g*w,this._z=m*g*w-x*y*v,this._w=m*g*v-x*y*w;break;case"XZY":this._x=x*g*v-m*y*w,this._y=m*y*v-x*g*w,this._z=m*g*w+x*y*v,this._w=m*g*v+x*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],g=n[6],v=n[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+f*d+a*m-u*p,this._y=a*g+f*p+u*d-r*m,this._z=u*g+f*m+r*p-a*d,this._w=f*g-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),g=2*(d*n-u*a),v=2*(u*r-f*n);return this.x=n+p*m+f*v-d*g,this.y=r+p*g+d*m-u*v,this.z=a+p*v+u*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new ne,wp=new No;class Fo{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ei):ei.fromBufferAttribute(u,f),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ja.copy(r.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),$a.subVectors(this.max,Ao),Ss.subVectors(e.a,Ao),ys.subVectors(e.b,Ao),Ms.subVectors(e.c,Ao),ar.subVectors(ys,Ss),lr.subVectors(Ms,ys),Dr.subVectors(Ss,Ms);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Dr.z,Dr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Dr.z,0,-Dr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Dr.y,Dr.x,0];return!pc(n,Ss,ys,Ms,$a)||(n=[1,0,0,0,1,0,0,0,1],!pc(n,Ss,ys,Ms,$a))?!1:(Ka.crossVectors(ar,lr),n=[Ka.x,Ka.y,Ka.z],pc(n,Ss,ys,Ms,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ei=new ne,ja=new Fo,Ss=new ne,ys=new ne,Ms=new ne,ar=new ne,lr=new ne,Dr=new ne,Ao=new ne,$a=new ne,Ka=new ne,Ur=new ne;function pc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Ur.fromArray(o,u);const d=a.x*Math.abs(Ur.x)+a.y*Math.abs(Ur.y)+a.z*Math.abs(Ur.z),p=e.dot(Ur),m=n.dot(Ur),g=r.dot(Ur);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const Rv=new Fo,Ro=new ne,mc=new ne;class Nf{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Rv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ro,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(mc)),this.expandByPoint(Ro.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new ne,gc=new ne,Za=new ne,ur=new ne,_c=new ne,Qa=new ne,vc=new ne;class Cv{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){gc.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(gc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Za),d=ur.dot(this.direction),p=-ur.dot(Za),m=ur.lengthSq(),g=Math.abs(1-f*f);let v,x,y,w;if(g>0)if(v=f*p-d,x=f*d-p,w=u*g,v>=0)if(x>=-w)if(x<=w){const R=1/g;v*=R,x*=R,y=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;else x<=-w?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m):x<=w?(v=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(gc).addScaledVector(Za,x),y}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const r=Pi.dot(this.direction),a=Pi.dot(Pi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,r,a,u){_c.subVectors(n,e),Qa.subVectors(r,e),vc.crossVectors(_c,Qa);let f=this.direction.dot(vc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ur.subVectors(this.origin,e);const p=d*this.direction.dot(Qa.crossVectors(ur,Qa));if(p<0)return null;const m=d*this.direction.dot(_c.cross(ur));if(m<0||p+m>f)return null;const g=-d*ur.dot(vc);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,a,u,f,d,p,m,g,v,x,y,w,R,S){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,g,v,x,y,w,R,S)}set(e,n,r,a,u,f,d,p,m,g,v,x,y,w,R,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=w,_[11]=R,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Es.setFromMatrixColumn(e,0).length(),u=1/Es.setFromMatrixColumn(e,1).length(),f=1/Es.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*g,y=f*v,w=d*g,R=d*v;n[0]=p*g,n[4]=-p*v,n[8]=m,n[1]=y+w*m,n[5]=x-R*m,n[9]=-d*p,n[2]=R-x*m,n[6]=w+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*g,y=p*v,w=m*g,R=m*v;n[0]=x+R*d,n[4]=w*d-y,n[8]=f*m,n[1]=f*v,n[5]=f*g,n[9]=-d,n[2]=y*d-w,n[6]=R+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*g,y=p*v,w=m*g,R=m*v;n[0]=x-R*d,n[4]=-f*v,n[8]=w+y*d,n[1]=y+w*d,n[5]=f*g,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*g,y=f*v,w=d*g,R=d*v;n[0]=p*g,n[4]=w*m-y,n[8]=x*m+R,n[1]=p*v,n[5]=R*m+x,n[9]=y*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,w=d*p,R=d*m;n[0]=p*g,n[4]=R-x*v,n[8]=w*v+y,n[1]=v,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=y*v+w,n[10]=x-R*v}else if(e.order==="XZY"){const x=f*p,y=f*m,w=d*p,R=d*m;n[0]=p*g,n[4]=-v,n[8]=m*g,n[1]=x*v+R,n[5]=f*g,n[9]=y*v-w,n[2]=w*v-y,n[6]=d*g,n[10]=R*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pv,e,Lv)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),cr.crossVectors(r,Fn),cr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),cr.crossVectors(r,Fn)),cr.normalize(),Ja.crossVectors(Fn,cr),a[0]=cr.x,a[4]=Ja.x,a[8]=Fn.x,a[1]=cr.y,a[5]=Ja.y,a[9]=Fn.y,a[2]=cr.z,a[6]=Ja.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],x=r[9],y=r[13],w=r[2],R=r[6],S=r[10],_=r[14],O=r[3],D=r[7],L=r[11],X=r[15],H=a[0],N=a[4],Y=a[8],C=a[12],A=a[1],k=a[5],oe=a[9],ee=a[13],ce=a[2],he=a[6],se=a[10],le=a[14],B=a[3],ae=a[7],re=a[11],U=a[15];return u[0]=f*H+d*A+p*ce+m*B,u[4]=f*N+d*k+p*he+m*ae,u[8]=f*Y+d*oe+p*se+m*re,u[12]=f*C+d*ee+p*le+m*U,u[1]=g*H+v*A+x*ce+y*B,u[5]=g*N+v*k+x*he+y*ae,u[9]=g*Y+v*oe+x*se+y*re,u[13]=g*C+v*ee+x*le+y*U,u[2]=w*H+R*A+S*ce+_*B,u[6]=w*N+R*k+S*he+_*ae,u[10]=w*Y+R*oe+S*se+_*re,u[14]=w*C+R*ee+S*le+_*U,u[3]=O*H+D*A+L*ce+X*B,u[7]=O*N+D*k+L*he+X*ae,u[11]=O*Y+D*oe+L*se+X*re,u[15]=O*C+D*ee+L*le+X*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],x=e[10],y=e[14],w=e[3],R=e[7],S=e[11],_=e[15];return w*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*y-r*p*y)+R*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*g-u*p*g)+S*(+n*m*v-n*d*y-u*f*v+r*f*y+u*d*g-r*m*g)+_*(-a*d*g-n*p*v+n*d*x+a*f*v-r*f*x+r*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],x=e[10],y=e[11],w=e[12],R=e[13],S=e[14],_=e[15],O=v*S*m-R*x*m+R*p*y-d*S*y-v*p*_+d*x*_,D=w*x*m-g*S*m-w*p*y+f*S*y+g*p*_-f*x*_,L=g*R*m-w*v*m+w*d*y-f*R*y-g*d*_+f*v*_,X=w*v*p-g*R*p-w*d*x+f*R*x+g*d*S-f*v*S,H=n*O+r*D+a*L+u*X;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/H;return e[0]=O*N,e[1]=(R*x*u-v*S*u-R*a*y+r*S*y+v*a*_-r*x*_)*N,e[2]=(d*S*u-R*p*u+R*a*m-r*S*m-d*a*_+r*p*_)*N,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*y-r*p*y)*N,e[4]=D*N,e[5]=(g*S*u-w*x*u+w*a*y-n*S*y-g*a*_+n*x*_)*N,e[6]=(w*p*u-f*S*u-w*a*m+n*S*m+f*a*_-n*p*_)*N,e[7]=(f*x*u-g*p*u+g*a*m-n*x*m-f*a*y+n*p*y)*N,e[8]=L*N,e[9]=(w*v*u-g*R*u-w*r*y+n*R*y+g*r*_-n*v*_)*N,e[10]=(f*R*u-w*d*u+w*r*m-n*R*m-f*r*_+n*d*_)*N,e[11]=(g*d*u-f*v*u-g*r*m+n*v*m+f*r*y-n*d*y)*N,e[12]=X*N,e[13]=(g*R*a-w*v*a+w*r*x-n*R*x-g*r*S+n*v*S)*N,e[14]=(w*d*a-f*R*a-w*r*p+n*R*p+f*r*S-n*d*S)*N,e[15]=(f*v*a-g*d*a+g*r*p-n*v*p-f*r*x+n*d*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,g=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,g*d+r,g*p-a*f,0,m*p-a*d,g*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,g=f+f,v=d+d,x=u*m,y=u*g,w=u*v,R=f*g,S=f*v,_=d*v,O=p*m,D=p*g,L=p*v,X=r.x,H=r.y,N=r.z;return a[0]=(1-(R+_))*X,a[1]=(y+L)*X,a[2]=(w-D)*X,a[3]=0,a[4]=(y-L)*H,a[5]=(1-(x+_))*H,a[6]=(S+O)*H,a[7]=0,a[8]=(w+D)*N,a[9]=(S-O)*N,a[10]=(1-(x+R))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Es.set(a[0],a[1],a[2]).length();const f=Es.set(a[4],a[5],a[6]).length(),d=Es.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ti.copy(this);const m=1/u,g=1/f,v=1/d;return ti.elements[0]*=m,ti.elements[1]*=m,ti.elements[2]*=m,ti.elements[4]*=g,ti.elements[5]*=g,ti.elements[6]*=g,ti.elements[8]*=v,ti.elements[9]*=v,ti.elements[10]*=v,n.setFromRotationMatrix(ti),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Ni){const p=this.elements,m=2*u/(n-e),g=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let y,w;if(d===Ni)y=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Ml)y=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Ni){const p=this.elements,m=1/(n-e),g=1/(r-a),v=1/(f-u),x=(n+e)*m,y=(r+a)*g;let w,R;if(d===Ni)w=(f+u)*v,R=-2*v;else if(d===Ml)w=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=R,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Es=new ne,ti=new Xt,Pv=new ne(0,0,0),Lv=new ne(1,1,1),cr=new ne,Ja=new ne,Fn=new ne,Ap=new Xt,Rp=new No;class Bi{constructor(e=0,n=0,r=0,a=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],g=a[9],v=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ap,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Cm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bv=0;const Cp=new ne,Ts=new No,Li=new Xt,el=new ne,Co=new ne,Dv=new ne,Uv=new No,Pp=new ne(1,0,0),Lp=new ne(0,1,0),bp=new ne(0,0,1),Dp={type:"added"},Iv={type:"removed"},ws={type:"childadded",child:null},xc={type:"childremoved",child:null};class Bn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new ne,n=new Bi,r=new No,a=new ne(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new st}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Pp,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(bp,e)}translateOnAxis(e,n){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pp,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?el.copy(e):el.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Co,el,this.up):Li.lookAt(el,Co,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),Ts.setFromRotationMatrix(Li),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dp),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Iv),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dp),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,Dv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Uv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),y=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Bn.DEFAULT_UP=new ne(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new ne,bi=new ne,Sc=new ne,Di=new ne,As=new ne,Rs=new ne,Up=new ne,yc=new ne,Mc=new ne,Ec=new ne,Tc=new Vt,wc=new Vt,Ac=new Vt;class ii{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ni.subVectors(e,n),a.cross(ni);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ni.subVectors(a,n),bi.subVectors(r,n),Sc.subVectors(e,n);const f=ni.dot(ni),d=ni.dot(bi),p=ni.dot(Sc),m=bi.dot(bi),g=bi.dot(Sc),v=f*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(m*p-d*g)*x,w=(f*g-d*p)*x;return u.set(1-y-w,w,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Di)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Di.x),p.addScaledVector(f,Di.y),p.addScaledVector(d,Di.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Tc.setScalar(0),wc.setScalar(0),Ac.setScalar(0),Tc.fromBufferAttribute(e,n),wc.fromBufferAttribute(e,r),Ac.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Tc,u.x),f.addScaledVector(wc,u.y),f.addScaledVector(Ac,u.z),f}static isFrontFacing(e,n,r,a){return ni.subVectors(r,n),bi.subVectors(e,n),ni.cross(bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ni.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ii.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;As.subVectors(a,r),Rs.subVectors(u,r),yc.subVectors(e,r);const p=As.dot(yc),m=Rs.dot(yc);if(p<=0&&m<=0)return n.copy(r);Mc.subVectors(e,a);const g=As.dot(Mc),v=Rs.dot(Mc);if(g>=0&&v<=g)return n.copy(a);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(r).addScaledVector(As,f);Ec.subVectors(e,u);const y=As.dot(Ec),w=Rs.dot(Ec);if(w>=0&&y<=w)return n.copy(u);const R=y*m-p*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Rs,d);const S=g*w-y*v;if(S<=0&&v-g>=0&&y-w>=0)return Up.subVectors(u,a),d=(v-g)/(v-g+(y-w)),n.copy(a).addScaledVector(Up,d);const _=1/(S+R+x);return f=R*_,d=x*_,n.copy(r).addScaledVector(As,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Rc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class At{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=yt.workingColorSpace){return this.r=e,this.g=n,this.b=r,yt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=yt.workingColorSpace){if(e=gv(e,1),n=mt(n,0,1),r=mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Rc(f,u,e+1/3),this.g=Rc(f,u,e),this.b=Rc(f,u,e-1/3)}return yt.toWorkingColorSpace(this,a),this}setStyle(e,n=Yn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const r=Pm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return yt.fromWorkingColorSpace(mn.copy(this),e),Math.round(mt(mn.r*255,0,255))*65536+Math.round(mt(mn.g*255,0,255))*256+Math.round(mt(mn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yt.workingColorSpace){yt.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,u=mn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=g<=.5?v/(f+d):v/(2-f-d),f){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=yt.workingColorSpace){return yt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Yn){yt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(tl);const r=cc(fr.h,tl.h,n),a=cc(fr.s,tl.s,n),u=cc(fr.l,tl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new At;At.NAMES=Pm;let Nv=0;class Tl extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=Is,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=zc,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kc&&(r.blendSrc=this.blendSrc),this.blendDst!==zc&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ff extends Tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ne,nl=new Ct;class gi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Sp,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=wo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array),u=Ln(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sp&&(e.usage=this.usage),e}}class Lm extends gi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class bm extends gi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Wr extends gi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Fv=0;const Xn=new Xt,Cc=new Bn,Cs=new ne,On=new Fo,Po=new Fo,nn=new ne;class qr extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wm(e)?bm:Lm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,r){return Xn.makeTranslation(e,n,r),this.applyMatrix4(Xn),this}scale(e,n,r){return Xn.makeScale(e,n,r),this.applyMatrix4(Xn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Wr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];On.setFromBufferAttribute(u),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(On.min,Po.min),On.expandByPoint(nn),nn.addVectors(On.max,Po.max),On.expandByPoint(nn)):(On.expandByPoint(Po.min),On.expandByPoint(Po.max))}On.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)nn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(nn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)nn.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),nn.add(Cs)),a=Math.max(a,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Y=0;Y<r.count;Y++)d[Y]=new ne,p[Y]=new ne;const m=new ne,g=new ne,v=new ne,x=new Ct,y=new Ct,w=new Ct,R=new ne,S=new ne;function _(Y,C,A){m.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,A),x.fromBufferAttribute(u,Y),y.fromBufferAttribute(u,C),w.fromBufferAttribute(u,A),g.sub(m),v.sub(m),y.sub(x),w.sub(x);const k=1/(y.x*w.y-w.x*y.y);isFinite(k)&&(R.copy(g).multiplyScalar(w.y).addScaledVector(v,-y.y).multiplyScalar(k),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-w.x).multiplyScalar(k),d[Y].add(R),d[C].add(R),d[A].add(R),p[Y].add(S),p[C].add(S),p[A].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Y=0,C=O.length;Y<C;++Y){const A=O[Y],k=A.start,oe=A.count;for(let ee=k,ce=k+oe;ee<ce;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const D=new ne,L=new ne,X=new ne,H=new ne;function N(Y){X.fromBufferAttribute(a,Y),H.copy(X);const C=d[Y];D.copy(C),D.sub(X.multiplyScalar(X.dot(C))).normalize(),L.crossVectors(H,C);const k=L.dot(p[Y])<0?-1:1;f.setXYZW(Y,D.x,D.y,D.z,k)}for(let Y=0,C=O.length;Y<C;++Y){const A=O[Y],k=A.start,oe=A.count;for(let ee=k,ce=k+oe;ee<ce;ee+=3)N(e.getX(ee+0)),N(e.getX(ee+1)),N(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new ne,u=new ne,f=new ne,d=new ne,p=new ne,m=new ne,g=new ne,v=new ne;if(e)for(let x=0,y=e.count;x<y;x+=3){const w=e.getX(x+0),R=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,S),g.subVectors(f,u),v.subVectors(a,u),g.cross(v),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,S),d.add(g),p.add(g),m.add(g),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,u),v.subVectors(a,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(p.length*g);let y=0,w=0;for(let R=0,S=p.length;R<S;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*g;for(let _=0;_<g;_++)x[w++]=m[y++]}return new gi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];g.push(y.toJSON(e.data))}g.length>0&&(a[p]=g,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const u=e.morphAttributes;for(const m in u){const g=[],v=u[m];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ip=new Xt,Ir=new Cv,il=new Nf,Np=new ne,rl=new ne,sl=new ne,ol=new ne,Pc=new ne,al=new ne,Fp=new ne,ll=new ne;class mi extends Bn{constructor(e=new qr,n=new Ff){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){al.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(Pc.fromBufferAttribute(v,e),f?al.addScaledVector(Pc,g):al.addScaledVector(Pc.sub(n),g))}n.add(al)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),il.copy(r.boundingSphere),il.applyMatrix4(u),Ir.copy(e.ray).recast(e.near),!(il.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(il,Np)===null||Ir.origin.distanceToSquared(Np)>(e.far-e.near)**2))&&(Ip.copy(u).invert(),Ir.copy(e.ray).applyMatrix4(Ip),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const S=x[w],_=f[S.materialIndex],O=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let L=O,X=D;L<X;L+=3){const H=d.getX(L),N=d.getX(L+1),Y=d.getX(L+2);a=ul(this,_,e,r,m,g,v,H,N,Y),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let S=w,_=R;S<_;S+=3){const O=d.getX(S),D=d.getX(S+1),L=d.getX(S+2);a=ul(this,f,e,r,m,g,v,O,D,L),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const S=x[w],_=f[S.materialIndex],O=Math.max(S.start,y.start),D=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let L=O,X=D;L<X;L+=3){const H=L,N=L+1,Y=L+2;a=ul(this,_,e,r,m,g,v,H,N,Y),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let S=w,_=R;S<_;S+=3){const O=S,D=S+1,L=S+2;a=ul(this,f,e,r,m,g,v,O,D,L),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function Ov(o,e,n,r,a,u,f,d){let p;if(e.side===bn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===gr,d),p===null)return null;ll.copy(d),ll.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(ll);return m<n.near||m>n.far?null:{distance:m,point:ll.clone(),object:o}}function ul(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,rl),o.getVertexPosition(p,sl),o.getVertexPosition(m,ol);const g=Ov(o,e,n,r,rl,sl,ol,Fp);if(g){const v=new ne;ii.getBarycoord(Fp,rl,sl,ol,v),a&&(g.uv=ii.getInterpolatedAttribute(a,d,p,m,v,new Ct)),u&&(g.uv1=ii.getInterpolatedAttribute(u,d,p,m,v,new Ct)),f&&(g.normal=ii.getInterpolatedAttribute(f,d,p,m,v,new ne),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ne,materialIndex:0};ii.getNormal(rl,sl,ol,x.normal),g.face=x,g.barycoord=v}return g}class Oo extends qr{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],v=[];let x=0,y=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Wr(m,3)),this.setAttribute("normal",new Wr(g,3)),this.setAttribute("uv",new Wr(v,2));function w(R,S,_,O,D,L,X,H,N,Y,C){const A=L/N,k=X/Y,oe=L/2,ee=X/2,ce=H/2,he=N+1,se=Y+1;let le=0,B=0;const ae=new ne;for(let re=0;re<se;re++){const U=re*k-ee;for(let te=0;te<he;te++){const Ie=te*A-oe;ae[R]=Ie*O,ae[S]=U*D,ae[_]=ce,m.push(ae.x,ae.y,ae.z),ae[R]=0,ae[S]=0,ae[_]=H>0?1:-1,g.push(ae.x,ae.y,ae.z),v.push(te/N),v.push(1-re/Y),le+=1}}for(let re=0;re<Y;re++)for(let U=0;U<N;U++){const te=x+U+he*re,Ie=x+U+he*(re+1),Z=x+(U+1)+he*(re+1),de=x+(U+1)+he*re;p.push(te,Ie,de),p.push(Ie,Z,de),B+=6}d.addGroup(y,B,C),y+=B,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(o){const e={};for(let n=0;n<o.length;n++){const r=Gs(o[n]);for(const a in r)e[a]=r[a]}return e}function Bv(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Dm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const kv={clone:Gs,merge:yn};var zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=Hv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Bv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Um extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new ne,Op=new Ct,Bp=new Ct;class qn extends Um{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wf*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,Op,Bp),n.subVectors(Bp,Op)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ls=1;class Vv extends Bn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Ps,Ls,e,n);a.layers=this.layers,this.add(a);const u=new qn(Ps,Ls,e,n);u.layers=this.layers,this.add(u);const f=new qn(Ps,Ls,e,n);f.layers=this.layers,this.add(f);const d=new qn(Ps,Ls,e,n);d.layers=this.layers,this.add(d);const p=new qn(Ps,Ls,e,n);p.layers=this.layers,this.add(p);const m=new qn(Ps,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ml)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(v,x,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Im extends Mn{constructor(e,n,r,a,u,f,d,p,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,r,a,u,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gv extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Im(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Oo(5,5,5),u=new _r({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:pr});u.uniforms.tEquirect.value=n;const f=new mi(a,u),d=n.minFilter;return n.minFilter===Gr&&(n.minFilter=pi),new Vv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class Wv extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Lc=new ne,Xv=new ne,Yv=new st;class Br{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Lc.subVectors(r,n).cross(Xv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Lc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Yv.getNormalMatrix(e),a=this.coplanarPoint(Lc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Nf,cl=new ne;class Nm{constructor(e=new Br,n=new Br,r=new Br,a=new Br,u=new Br,f=new Br){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ni){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],g=a[5],v=a[6],x=a[7],y=a[8],w=a[9],R=a[10],S=a[11],_=a[12],O=a[13],D=a[14],L=a[15];if(r[0].setComponents(p-u,x-m,S-y,L-_).normalize(),r[1].setComponents(p+u,x+m,S+y,L+_).normalize(),r[2].setComponents(p+f,x+g,S+w,L+O).normalize(),r[3].setComponents(p-f,x-g,S-w,L-O).normalize(),r[4].setComponents(p-d,x-v,S-R,L-D).normalize(),n===Ni)r[5].setComponents(p+d,x+v,S+R,L+D).normalize();else if(n===Ml)r[5].setComponents(d,v,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(cl.x=a.normal.x>0?e.max.x:e.min.x,cl.y=a.normal.y>0?e.max.y:e.min.y,cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fl extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Fm extends Mn{constructor(e,n,r,a,u,f,d,p,m,g=Ns){if(g!==Ns&&g!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ns&&(r=Xr),r===void 0&&g===Hs&&(r=zs),super(null,a,u,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:si,this.minFilter=p!==void 0?p:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Bo extends qr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,g=p+1,v=e/d,x=n/p,y=[],w=[],R=[],S=[];for(let _=0;_<g;_++){const O=_*x-f;for(let D=0;D<m;D++){const L=D*v-u;w.push(L,-O,0),R.push(0,0,1),S.push(D/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<d;O++){const D=O+m*_,L=O+m*(_+1),X=O+1+m*(_+1),H=O+1+m*_;y.push(D,L,H),y.push(L,X,H)}this.setIndex(y),this.setAttribute("position",new Wr(w,3)),this.setAttribute("normal",new Wr(R,3)),this.setAttribute("uv",new Wr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}class qv extends Tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jv extends Tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kp={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class $v{constructor(e,n,r){const a=this;let u=!1,f=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){d++,u===!1&&a.onStart!==void 0&&a.onStart(g,f,d),u=!0},this.itemEnd=function(g){f++,a.onProgress!==void 0&&a.onProgress(g,f,d),f===d&&(u=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=m.length;v<x;v+=2){const y=m[v],w=m[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return w}return null}}}const Kv=new $v;class Of{constructor(e){this.manager=e!==void 0?e:Kv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,u){r.load(e,a,n,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Of.DEFAULT_MATERIAL_NAME="__DEFAULT";class Zv extends Of{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,f=kp.get(e);if(f!==void 0)return u.manager.itemStart(e),setTimeout(function(){n&&n(f),u.manager.itemEnd(e)},0),f;const d=Do("img");function p(){g(),kp.add(e,this),n&&n(this),u.manager.itemEnd(e)}function m(v){g(),a&&a(v),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class Qv extends Of{constructor(e){super(e)}load(e,n,r,a){const u=new Mn,f=new Zv(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(d){u.image=d,u.needsUpdate=!0,n!==void 0&&n(u)},r,a),u}}class Jv extends Um{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class e0 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function zp(o,e,n,r){const a=t0(r);switch(n){case _m:return o*e;case xm:return o*e;case Sm:return o*e*2;case ym:return o*e/a.components*a.byteLength;case Df:return o*e/a.components*a.byteLength;case Mm:return o*e*2/a.components*a.byteLength;case Uf:return o*e*2/a.components*a.byteLength;case vm:return o*e*3/a.components*a.byteLength;case ri:return o*e*4/a.components*a.byteLength;case If:return o*e*4/a.components*a.byteLength;case ml:case gl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _l:case vl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Jc:case tf:return Math.max(o,16)*Math.max(e,8)/4;case Qc:case ef:return Math.max(o,8)*Math.max(e,8)/2;case nf:case rf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case sf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case lf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case uf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case cf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ff:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case df:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case hf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case pf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case mf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case gf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case _f:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case vf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case xf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xl:case Sf:case yf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Em:case Mf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ef:case Tf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function t0(o){switch(o){case Oi:case pm:return{byteLength:1,components:1};case bo:case mm:case Uo:return{byteLength:2,components:1};case Lf:case bf:return{byteLength:2,components:4};case Xr:case Pf:case Ii:return{byteLength:4,components:1};case gm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Om(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function n0(o){const e=new WeakMap;function n(d,p){const m=d.array,g=d.usage,v=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,g);else{v.sort((y,w)=>y.start-w.start);let x=0;for(let y=1;y<v.length;y++){const w=v[x],R=v[y];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++x,v[x]=R)}v.length=x+1;for(let y=0,w=v.length;y<w;y++){const R=v[y];o.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ex=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ox=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ES=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:i0,alphahash_pars_fragment:r0,alphamap_fragment:s0,alphamap_pars_fragment:o0,alphatest_fragment:a0,alphatest_pars_fragment:l0,aomap_fragment:u0,aomap_pars_fragment:c0,batching_pars_vertex:f0,batching_vertex:d0,begin_vertex:h0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:y0,color_fragment:M0,color_pars_fragment:E0,color_pars_vertex:T0,color_vertex:w0,common:A0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:P0,displacementmap_vertex:L0,emissivemap_fragment:b0,emissivemap_pars_fragment:D0,colorspace_fragment:U0,colorspace_pars_fragment:I0,envmap_fragment:N0,envmap_common_pars_fragment:F0,envmap_pars_fragment:O0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:$0,envmap_vertex:k0,fog_vertex:z0,fog_pars_vertex:H0,fog_fragment:V0,fog_pars_fragment:G0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:q0,lights_pars_begin:j0,lights_toon_fragment:K0,lights_toon_pars_fragment:Z0,lights_phong_fragment:Q0,lights_phong_pars_fragment:J0,lights_physical_fragment:ex,lights_physical_pars_fragment:tx,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:rx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:ox,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:lx,map_fragment:ux,map_pars_fragment:cx,map_particle_fragment:fx,map_particle_pars_fragment:dx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:px,morphinstance_vertex:mx,morphcolor_vertex:gx,morphnormal_vertex:_x,morphtarget_pars_vertex:vx,morphtarget_vertex:xx,normal_fragment_begin:Sx,normal_fragment_maps:yx,normal_pars_fragment:Mx,normal_pars_vertex:Ex,normal_vertex:Tx,normalmap_pars_fragment:wx,clearcoat_normal_fragment_begin:Ax,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Cx,iridescence_pars_fragment:Px,opaque_fragment:Lx,packing:bx,premultiplied_alpha_fragment:Dx,project_vertex:Ux,dithering_fragment:Ix,dithering_pars_fragment:Nx,roughnessmap_fragment:Fx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:Bx,shadowmap_pars_vertex:kx,shadowmap_vertex:zx,shadowmask_pars_fragment:Hx,skinbase_vertex:Vx,skinning_pars_vertex:Gx,skinning_vertex:Wx,skinnormal_vertex:Xx,specularmap_fragment:Yx,specularmap_pars_fragment:qx,tonemapping_fragment:jx,tonemapping_pars_fragment:$x,transmission_fragment:Kx,transmission_pars_fragment:Zx,uv_pars_fragment:Qx,uv_pars_vertex:Jx,uv_vertex:eS,worldpos_vertex:tS,background_vert:nS,background_frag:iS,backgroundCube_vert:rS,backgroundCube_frag:sS,cube_vert:oS,cube_frag:aS,depth_vert:lS,depth_frag:uS,distanceRGBA_vert:cS,distanceRGBA_frag:fS,equirect_vert:dS,equirect_frag:hS,linedashed_vert:pS,linedashed_frag:mS,meshbasic_vert:gS,meshbasic_frag:_S,meshlambert_vert:vS,meshlambert_frag:xS,meshmatcap_vert:SS,meshmatcap_frag:yS,meshnormal_vert:MS,meshnormal_frag:ES,meshphong_vert:TS,meshphong_frag:wS,meshphysical_vert:AS,meshphysical_frag:RS,meshtoon_vert:CS,meshtoon_frag:PS,points_vert:LS,points_frag:bS,shadow_vert:DS,shadow_frag:US,sprite_vert:IS,sprite_frag:NS},Ce={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},di={basic:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:yn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:yn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:yn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:yn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:yn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:yn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:yn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:yn([Ce.lights,Ce.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};di.physical={uniforms:yn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const dl={r:0,b:0,g:0},Fr=new Bi,FS=new Xt;function OS(o,e,n,r,a,u,f){const d=new At(0);let p=u===!0?0:1,m,g,v=null,x=0,y=null;function w(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?n:e).get(L)),L}function R(D){let L=!1;const X=w(D);X===null?_(d,p):X&&X.isColor&&(_(X,1),L=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(D,L){const X=w(L);X&&(X.isCubeTexture||X.mapping===El)?(g===void 0&&(g=new mi(new Oo(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:Gs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,N,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Fr.copy(L.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(FS.makeRotationFromEuler(Fr)),g.material.toneMapped=yt.getTransfer(X.colorSpace)!==wt,(v!==X||x!==X.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=X,x=X.version,y=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new mi(new Bo(2,2),new _r({name:"BackgroundMaterial",uniforms:Gs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=yt.getTransfer(X.colorSpace)!==wt,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||x!==X.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,v=X,x=X.version,y=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,L){D.getRGB(dl,Dm(o)),r.buffers.color.setClear(dl.r,dl.g,dl.b,L,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),p=L,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(d,p)},render:R,addToRenderList:S,dispose:O}}function BS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(A,k,oe,ee,ce){let he=!1;const se=v(ee,oe,k);u!==se&&(u=se,m(u.object)),he=y(A,ee,oe,ce),he&&w(A,ee,oe,ce),ce!==null&&e.update(ce,o.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,L(A,k,oe,ee),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function g(A){return o.deleteVertexArray(A)}function v(A,k,oe){const ee=oe.wireframe===!0;let ce=r[A.id];ce===void 0&&(ce={},r[A.id]=ce);let he=ce[k.id];he===void 0&&(he={},ce[k.id]=he);let se=he[ee];return se===void 0&&(se=x(p()),he[ee]=se),se}function x(A){const k=[],oe=[],ee=[];for(let ce=0;ce<n;ce++)k[ce]=0,oe[ce]=0,ee[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oe,attributeDivisors:ee,object:A,attributes:{},index:null}}function y(A,k,oe,ee){const ce=u.attributes,he=k.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){const re=ce[B];let U=he[B];if(U===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return u.attributesNum!==se||u.index!==ee}function w(A,k,oe,ee){const ce={},he=k.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){let re=he[B];re===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),ce[B]=U,se++}u.attributes=ce,u.attributesNum=se,u.index=ee}function R(){const A=u.newAttributes;for(let k=0,oe=A.length;k<oe;k++)A[k]=0}function S(A){_(A,0)}function _(A,k){const oe=u.newAttributes,ee=u.enabledAttributes,ce=u.attributeDivisors;oe[A]=1,ee[A]===0&&(o.enableVertexAttribArray(A),ee[A]=1),ce[A]!==k&&(o.vertexAttribDivisor(A,k),ce[A]=k)}function O(){const A=u.newAttributes,k=u.enabledAttributes;for(let oe=0,ee=k.length;oe<ee;oe++)k[oe]!==A[oe]&&(o.disableVertexAttribArray(oe),k[oe]=0)}function D(A,k,oe,ee,ce,he,se){se===!0?o.vertexAttribIPointer(A,k,oe,ce,he):o.vertexAttribPointer(A,k,oe,ee,ce,he)}function L(A,k,oe,ee){R();const ce=ee.attributes,he=oe.getAttributes(),se=k.defaultAttributeValues;for(const le in he){const B=he[le];if(B.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const re=ae.normalized,U=ae.itemSize,te=e.get(ae);if(te===void 0)continue;const Ie=te.buffer,Z=te.type,de=te.bytesPerElement,ye=Z===o.INT||Z===o.UNSIGNED_INT||ae.gpuType===Pf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)_(B.location+Ze,ve.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<B.locationSize;Ze++)D(B.location+Ze,U/B.locationSize,Z,re,Te*de,(Ue+U/B.locationSize*Ze)*de,ye)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)_(B.location+ve,ae.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let ve=0;ve<B.locationSize;ve++)D(B.location+ve,U/B.locationSize,Z,re,U*de,U/B.locationSize*ve*de,ye)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(B.location,re);break;case 3:o.vertexAttrib3fv(B.location,re);break;case 4:o.vertexAttrib4fv(B.location,re);break;default:o.vertexAttrib1fv(B.location,re)}}}}O()}function X(){Y();for(const A in r){const k=r[A];for(const oe in k){const ee=k[oe];for(const ce in ee)g(ee[ce].object),delete ee[ce];delete k[oe]}delete r[A]}}function H(A){if(r[A.id]===void 0)return;const k=r[A.id];for(const oe in k){const ee=k[oe];for(const ce in ee)g(ee[ce].object),delete ee[ce];delete k[oe]}delete r[A.id]}function N(A){for(const k in r){const oe=r[k];if(oe[A.id]===void 0)continue;const ee=oe[A.id];for(const ce in ee)g(ee[ce].object),delete ee[ce];delete oe[A.id]}}function Y(){C(),f=!0,u!==a&&(u=a,m(u.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:C,dispose:X,releaseStatesOfGeometry:H,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:S,disableUnusedAttributes:O}}function kS(o,e,n){let r;function a(m){r=m}function u(m,g){o.drawArrays(r,m,g),n.update(g,r,1)}function f(m,g,v){v!==0&&(o.drawArraysInstanced(r,m,g,v),n.update(g,r,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let y=0;for(let w=0;w<v;w++)y+=g[w];n.update(y,r,1)}function p(m,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<m.length;w++)f(m[w],g[w],x[w]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let w=0;for(let R=0;R<v;R++)w+=g[R]*x[R];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function zS(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==ri&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const Y=N===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Oi&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ii&&!Y)}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=w>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:L,vertexTextures:X,maxSamples:H}}function HS(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Br,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||a;return a=x,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,y){const w=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,_=o.get(v);if(!a||w===null||w.length===0||u&&!S)u?g(null):m();else{const O=u?0:r,D=O*4;let L=_.clippingState||null;p.value=L,L=g(w,x,D,y);for(let X=0;X!==D;++X)L[X]=n[X];_.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,w){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=p.value,w!==!0||S===null){const _=y+R*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,L=y;D!==R;++D,L+=4)f.copy(v[D]).applyMatrix4(O,d),f.normal.toArray(S,L),S[L+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}function VS(o){let e=new WeakMap;function n(f,d){return d===jc?f.mapping=Bs:d===$c&&(f.mapping=ks),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===jc||d===$c)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Gv(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Us=4,Hp=[.125,.215,.35,.446,.526,.582],Hr=20,bc=new Jv,Vp=new At;let Dc=null,Uc=0,Ic=0,Nc=!1;const kr=(1+Math.sqrt(5))/2,bs=1/kr,Gp=[new ne(-kr,bs,0),new ne(kr,bs,0),new ne(-bs,0,kr),new ne(bs,0,kr),new ne(0,kr,-bs),new ne(0,kr,bs),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class Wp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Uc,Ic),this._renderer.xr.enabled=Nc,e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Uo,format:ri,colorSpace:Vs,depthBuffer:!1},a=Xp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GS(u)),this._blurMaterial=WS(u,e,n)}return a}_compileMaterial(e){const n=new mi(this._lodPlanes[0],e);this._renderer.compile(n,bc)}_sceneToCubeUV(e,n,r,a){const d=new qn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Vp),g.toneMapping=mr,g.autoClear=!1;const y=new Ff({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),w=new mi(new Oo,y);let R=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,R=!0):(y.color.copy(Vp),R=!0);for(let _=0;_<6;_++){const O=_%3;O===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):O===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const D=this._cubeSize;hl(a,O*D,_>2?D:0,D,D),g.setRenderTarget(a),R&&g.render(w,d),g.render(e,d)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Bs||e.mapping===ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new mi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;hl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,bc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Gp[(a-u-1)%Gp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new mi(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Hr-1),R=u/w,S=isFinite(u)?1+Math.floor(g*R):Hr;S>Hr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Hr}`);const _=[];let O=0;for(let N=0;N<Hr;++N){const Y=N/R,C=Math.exp(-Y*Y/2);_.push(C),N===0?O+=C:N<S&&(O+=2*C)}for(let N=0;N<_.length;N++)_[N]=_[N]/O;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=w,x.mipInt.value=D-r;const L=this._sizeLods[a],X=3*L*(a>D-Us?a-D+Us:0),H=4*(this._cubeSize-L);hl(n,X,H,3*L,2*L),p.setRenderTarget(n),p.render(v,bc)}}function GS(o){const e=[],n=[],r=[];let a=o;const u=o-Us+1+Hp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Us?p=Hp[f-o+Us-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,w=6,R=3,S=2,_=1,O=new Float32Array(R*w*y),D=new Float32Array(S*w*y),L=new Float32Array(_*w*y);for(let H=0;H<y;H++){const N=H%3*2/3-1,Y=H>2?0:-1,C=[N,Y,0,N+2/3,Y,0,N+2/3,Y+1,0,N,Y,0,N+2/3,Y+1,0,N,Y+1,0];O.set(C,R*w*H),D.set(x,S*w*H);const A=[H,H,H,H,H,H];L.set(A,_*w*H)}const X=new qr;X.setAttribute("position",new gi(O,R)),X.setAttribute("uv",new gi(D,S)),X.setAttribute("faceIndex",new gi(L,_)),e.push(X),a>Us&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Xp(o,e,n){const r=new Yr(o,e,n);return r.texture.mapping=El,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function WS(o,e,n){const r=new Float32Array(Hr),a=new ne(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Yp(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function qp(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XS(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===jc||p===$c,g=p===Bs||p===ks;if(m||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Wp(o)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&a(y)?(n===null&&(n=new Wp(o)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function YS(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ds("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function qS(o,e,n,r){const a={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function m(v){const x=[],y=v.index,w=v.attributes.position;let R=0;if(y!==null){const O=y.array;R=y.version;for(let D=0,L=O.length;D<L;D+=3){const X=O[D+0],H=O[D+1],N=O[D+2];x.push(X,H,H,N,N,X)}}else if(w!==void 0){const O=w.array;R=w.version;for(let D=0,L=O.length/3-1;D<L;D+=3){const X=D+0,H=D+1,N=D+2;x.push(X,H,H,N,N,X)}}else return;const S=new(wm(x)?bm:Lm)(x,1);S.version=R;const _=u.get(v);_&&e.remove(_),u.set(v,S)}function g(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function jS(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){o.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,w){w!==0&&(o.drawElementsInstanced(r,y,u,x*f,w),n.update(y,r,w))}function g(x,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,w);let S=0;for(let _=0;_<w;_++)S+=y[_];n.update(S,r,1)}function v(x,y,w,R){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)m(x[_]/f,y[_],R[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,R,0,w);let _=0;for(let O=0;O<w;O++)_+=y[O]*R[O];n.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function $S(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function KS(o,e,n){const r=new WeakMap,a=new Vt;function u(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var y=A;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let L=0;w===!0&&(L=1),R===!0&&(L=2),S===!0&&(L=3);let X=d.attributes.position.count*L,H=1;X>e.maxTextureSize&&(H=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const N=new Float32Array(X*H*4*v),Y=new Rm(N,X,H,v);Y.type=Ii,Y.needsUpdate=!0;const C=L*4;for(let k=0;k<v;k++){const oe=_[k],ee=O[k],ce=D[k],he=X*H*4*k;for(let se=0;se<oe.count;se++){const le=se*C;w===!0&&(a.fromBufferAttribute(oe,se),N[he+le+0]=a.x,N[he+le+1]=a.y,N[he+le+2]=a.z,N[he+le+3]=0),R===!0&&(a.fromBufferAttribute(ee,se),N[he+le+4]=a.x,N[he+le+5]=a.y,N[he+le+6]=a.z,N[he+le+7]=0),S===!0&&(a.fromBufferAttribute(ce,se),N[he+le+8]=a.x,N[he+le+9]=a.y,N[he+le+10]=a.z,N[he+le+11]=ce.itemSize===4?a.w:1)}}x={count:v,texture:Y,size:new Ct(X,H)},r.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let w=0;for(let S=0;S<m.length;S++)w+=m[S];const R=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function ZS(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const Bm=new Mn,jp=new Fm(1,1),km=new Rm,zm=new Av,Hm=new Im,$p=[],Kp=[],Zp=new Float32Array(16),Qp=new Float32Array(9),Jp=new Float32Array(4);function Xs(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=$p[a];if(u===void 0&&(u=new Float32Array(a),$p[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function $t(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Kt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function wl(o,e){let n=Kp[e];n===void 0&&(n=new Int32Array(e),Kp[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function QS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function JS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;o.uniform2fv(this.addr,e),Kt(n,e)}}function ey(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;o.uniform3fv(this.addr,e),Kt(n,e)}}function ty(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;o.uniform4fv(this.addr,e),Kt(n,e)}}function ny(o,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Jp.set(r),o.uniformMatrix2fv(this.addr,!1,Jp),Kt(n,r)}}function iy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Qp.set(r),o.uniformMatrix3fv(this.addr,!1,Qp),Kt(n,r)}}function ry(o,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Zp.set(r),o.uniformMatrix4fv(this.addr,!1,Zp),Kt(n,r)}}function sy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function oy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;o.uniform2iv(this.addr,e),Kt(n,e)}}function ay(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;o.uniform3iv(this.addr,e),Kt(n,e)}}function ly(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;o.uniform4iv(this.addr,e),Kt(n,e)}}function uy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function cy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;o.uniform2uiv(this.addr,e),Kt(n,e)}}function fy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;o.uniform3uiv(this.addr,e),Kt(n,e)}}function dy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;o.uniform4uiv(this.addr,e),Kt(n,e)}}function hy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(jp.compareFunction=Tm,u=jp):u=Bm,n.setTexture2D(e||u,a)}function py(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||zm,a)}function my(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Hm,a)}function gy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||km,a)}function _y(o){switch(o){case 5126:return QS;case 35664:return JS;case 35665:return ey;case 35666:return ty;case 35674:return ny;case 35675:return iy;case 35676:return ry;case 5124:case 35670:return sy;case 35667:case 35671:return oy;case 35668:case 35672:return ay;case 35669:case 35673:return ly;case 5125:return uy;case 36294:return cy;case 36295:return fy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}function vy(o,e){o.uniform1fv(this.addr,e)}function xy(o,e){const n=Xs(e,this.size,2);o.uniform2fv(this.addr,n)}function Sy(o,e){const n=Xs(e,this.size,3);o.uniform3fv(this.addr,n)}function yy(o,e){const n=Xs(e,this.size,4);o.uniform4fv(this.addr,n)}function My(o,e){const n=Xs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Ey(o,e){const n=Xs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Ty(o,e){const n=Xs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function wy(o,e){o.uniform1iv(this.addr,e)}function Ay(o,e){o.uniform2iv(this.addr,e)}function Ry(o,e){o.uniform3iv(this.addr,e)}function Cy(o,e){o.uniform4iv(this.addr,e)}function Py(o,e){o.uniform1uiv(this.addr,e)}function Ly(o,e){o.uniform2uiv(this.addr,e)}function by(o,e){o.uniform3uiv(this.addr,e)}function Dy(o,e){o.uniform4uiv(this.addr,e)}function Uy(o,e,n){const r=this.cache,a=e.length,u=wl(n,a);$t(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Bm,u[f])}function Iy(o,e,n){const r=this.cache,a=e.length,u=wl(n,a);$t(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||zm,u[f])}function Ny(o,e,n){const r=this.cache,a=e.length,u=wl(n,a);$t(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Hm,u[f])}function Fy(o,e,n){const r=this.cache,a=e.length,u=wl(n,a);$t(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||km,u[f])}function Oy(o){switch(o){case 5126:return vy;case 35664:return xy;case 35665:return Sy;case 35666:return yy;case 35674:return My;case 35675:return Ey;case 35676:return Ty;case 5124:case 35670:return wy;case 35667:case 35671:return Ay;case 35668:case 35672:return Ry;case 35669:case 35673:return Cy;case 5125:return Py;case 36294:return Ly;case 36295:return by;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Fy}}class By{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=_y(n.type)}}class ky{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Oy(n.type)}}class zy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function em(o,e){o.seq.push(e),o.map[e.id]=e}function Hy(o,e,n){const r=o.name,a=r.length;for(Fc.lastIndex=0;;){const u=Fc.exec(r),f=Fc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){em(n,m===void 0?new By(d,o,e):new ky(d,o,e));break}else{let v=n.map[d];v===void 0&&(v=new zy(d),em(n,v)),n=v}}}class Sl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);Hy(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function tm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const Vy=37297;let Gy=0;function Wy(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const nm=new st;function Xy(o){yt._getMatrix(nm,yt.workingColorSpace,o);const e=`mat3( ${nm.elements.map(n=>n.toFixed(4))} )`;switch(yt.getTransfer(o)){case yl:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function im(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+Wy(o.getShaderSource(e),f)}else return a}function Yy(o,e){const n=Xy(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function qy(o,e){let n;switch(e){case Z_:n="Linear";break;case Q_:n="Reinhard";break;case J_:n="Cineon";break;case ev:n="ACESFilmic";break;case nv:n="AgX";break;case iv:n="Neutral";break;case tv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new ne;function jy(){yt.getLuminanceCoefficients(pl);const o=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $y(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Ky(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function Zy(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Lo(o){return o!==""}function rm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(o){return o.replace(Qy,eM)}const Jy=new Map;function eM(o,e){let n=ot[e];if(n===void 0){const r=Jy.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Af(n)}const tM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(o){return o.replace(tM,nM)}function nM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function am(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===fm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===L_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function rM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Bs:case ks:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function oM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dm:e="ENVMAP_BLENDING_MULTIPLY";break;case $_:e="ENVMAP_BLENDING_MIX";break;case K_:e="ENVMAP_BLENDING_ADD";break}return e}function aM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function lM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=iM(n),m=rM(n),g=sM(n),v=oM(n),x=aM(n),y=$y(n),w=Ky(u),R=a.createProgram();let S,_,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Lo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(S=[am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?ot.tonemapping_pars_fragment:"",n.toneMapping!==mr?qy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Yy("linearToOutputTexel",n.outputColorSpace),jy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),f=Af(f),f=rm(f,n),f=sm(f,n),d=Af(d),d=rm(d,n),d=sm(d,n),f=om(f),d=om(d),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=O+S+f,L=O+_+d,X=tm(a,a.VERTEX_SHADER,D),H=tm(a,a.FRAGMENT_SHADER,L);a.attachShader(R,X),a.attachShader(R,H),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function N(k){if(o.debug.checkShaderErrors){const oe=a.getProgramInfoLog(R).trim(),ee=a.getShaderInfoLog(X).trim(),ce=a.getShaderInfoLog(H).trim();let he=!0,se=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,R,X,H);else{const le=im(a,X,"vertex"),B=im(a,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+oe+`
`+le+`
`+B)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||ce==="")&&(se=!1);se&&(k.diagnostics={runnable:he,programLog:oe,vertexShader:{log:ee,prefix:S},fragmentShader:{log:ce,prefix:_}})}a.deleteShader(X),a.deleteShader(H),Y=new Sl(a,R),C=Zy(a,R)}let Y;this.getUniforms=function(){return Y===void 0&&N(this),Y};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(R,Vy)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gy++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=X,this.fragmentShader=H,this}let uM=0;class cM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new fM(e),n.set(e,r)),r}}class fM{constructor(e){this.id=uM++,this.code=e,this.usedTimes=0}}function dM(o,e,n,r,a,u,f){const d=new Cm,p=new cM,m=new Set,g=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return m.add(C),C===0?"uv":`uv${C}`}function S(C,A,k,oe,ee){const ce=oe.fog,he=ee.geometry,se=C.isMeshStandardMaterial?oe.environment:null,le=(C.isMeshStandardMaterial?n:e).get(C.envMap||se),B=le&&le.mapping===El?le.image.height:null,ae=w[C.type];C.precision!==null&&(y=a.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=re!==void 0?re.length:0;let te=0;he.morphAttributes.position!==void 0&&(te=1),he.morphAttributes.normal!==void 0&&(te=2),he.morphAttributes.color!==void 0&&(te=3);let Ie,Z,de,ye;if(ae){const _t=di[ae];Ie=_t.vertexShader,Z=_t.fragmentShader}else Ie=C.vertexShader,Z=C.fragmentShader,p.update(C),de=p.getVertexShaderID(C),ye=p.getFragmentShaderID(C);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ue=ee.isInstancedMesh===!0,Ze=ee.isBatchedMesh===!0,Tt=!!C.map,dt=!!C.matcap,Pt=!!le,F=!!C.aoMap,gn=!!C.lightMap,ft=!!C.bumpMap,lt=!!C.normalMap,Ye=!!C.displacementMap,Et=!!C.emissiveMap,Ge=!!C.metalnessMap,P=!!C.roughnessMap,E=C.anisotropy>0,K=C.clearcoat>0,pe=C.dispersion>0,ge=C.iridescence>0,ue=C.sheen>0,We=C.transmission>0,we=E&&!!C.anisotropyMap,Ne=K&&!!C.clearcoatMap,at=K&&!!C.clearcoatNormalMap,Me=K&&!!C.clearcoatRoughnessMap,Oe=ge&&!!C.iridescenceMap,je=ge&&!!C.iridescenceThicknessMap,Je=ue&&!!C.sheenColorMap,Be=ue&&!!C.sheenRoughnessMap,ut=!!C.specularMap,nt=!!C.specularColorMap,Mt=!!C.specularIntensityMap,V=We&&!!C.transmissionMap,Ae=We&&!!C.thicknessMap,ie=!!C.gradientMap,fe=!!C.alphaMap,Le=C.alphaTest>0,Pe=!!C.alphaHash,it=!!C.extensions;let bt=mr;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(bt=o.toneMapping);const Yt={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:Z,defines:C.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Vs,alphaToCoverage:!!C.alphaToCoverage,map:Tt,matcap:dt,envMap:Pt,envMapMode:Pt&&le.mapping,envMapCubeUVHeight:B,aoMap:F,lightMap:gn,bumpMap:ft,normalMap:lt,displacementMap:x&&Ye,emissiveMap:Et,normalMapObjectSpace:lt&&C.normalMapType===lv,normalMapTangentSpace:lt&&C.normalMapType===av,metalnessMap:Ge,roughnessMap:P,anisotropy:E,anisotropyMap:we,clearcoat:K,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:je,sheen:ue,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:ut,specularColorMap:nt,specularIntensityMap:Mt,transmission:We,transmissionMap:V,thicknessMap:Ae,gradientMap:ie,opaque:C.transparent===!1&&C.blending===Is&&C.alphaToCoverage===!1,alphaMap:fe,alphaTest:Le,alphaHash:Pe,combine:C.combine,mapUv:Tt&&R(C.map.channel),aoMapUv:F&&R(C.aoMap.channel),lightMapUv:gn&&R(C.lightMap.channel),bumpMapUv:ft&&R(C.bumpMap.channel),normalMapUv:lt&&R(C.normalMap.channel),displacementMapUv:Ye&&R(C.displacementMap.channel),emissiveMapUv:Et&&R(C.emissiveMap.channel),metalnessMapUv:Ge&&R(C.metalnessMap.channel),roughnessMapUv:P&&R(C.roughnessMap.channel),anisotropyMapUv:we&&R(C.anisotropyMap.channel),clearcoatMapUv:Ne&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:at&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:je&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&R(C.sheenRoughnessMap.channel),specularMapUv:ut&&R(C.specularMap.channel),specularColorMapUv:nt&&R(C.specularColorMap.channel),specularIntensityMapUv:Mt&&R(C.specularIntensityMap.channel),transmissionMapUv:V&&R(C.transmissionMap.channel),thicknessMapUv:Ae&&R(C.thicknessMap.channel),alphaMapUv:fe&&R(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(lt||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!he.attributes.uv&&(Tt||fe),fog:!!ce,useFog:C.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:ee.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:bt,decodeVideoTexture:Tt&&C.map.isVideoTexture===!0&&yt.getTransfer(C.map.colorSpace)===wt,decodeVideoTextureEmissive:Et&&C.emissiveMap.isVideoTexture===!0&&yt.getTransfer(C.emissiveMap.colorSpace)===wt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===hi,flipSided:C.side===bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:it&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&C.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function _(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)A.push(k),A.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(O(A,C),D(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function O(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function D(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function L(C){const A=w[C.type];let k;if(A){const oe=di[A];k=kv.clone(oe.uniforms)}else k=C.uniforms;return k}function X(C,A){let k;for(let oe=0,ee=g.length;oe<ee;oe++){const ce=g[oe];if(ce.cacheKey===A){k=ce,++k.usedTimes;break}}return k===void 0&&(k=new lM(o,A,C,u),g.push(k)),k}function H(C){if(--C.usedTimes===0){const A=g.indexOf(C);g[A]=g[g.length-1],g.pop(),C.destroy()}}function N(C){p.remove(C)}function Y(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:L,acquireProgram:X,releaseProgram:H,releaseShaderCache:N,programs:g,dispose:Y}}function hM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function pM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function lm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function um(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(v,x,y,w,R,S){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:w,renderOrder:v.renderOrder,z:R,group:S},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=w,_.renderOrder=v.renderOrder,_.z=R,_.group=S),e++,_}function d(v,x,y,w,R,S){const _=f(v,x,y,w,R,S);y.transmission>0?r.push(_):y.transparent===!0?a.push(_):n.push(_)}function p(v,x,y,w,R,S){const _=f(v,x,y,w,R,S);y.transmission>0?r.unshift(_):y.transparent===!0?a.unshift(_):n.unshift(_)}function m(v,x){n.length>1&&n.sort(v||pM),r.length>1&&r.sort(x||lm),a.length>1&&a.sort(x||lm)}function g(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:g,sort:m}}function mM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new um,o.set(r,[f])):a>=u.length?(f=new um,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function gM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new At};break;case"SpotLight":n={position:new ne,direction:new ne,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return o[e.id]=n,n}}}function _M(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let vM=0;function xM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function SM(o){const e=new gM,n=_M(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const a=new ne,u=new Xt,f=new Xt;function d(m){let g=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,w=0,R=0,S=0,_=0,O=0,D=0,L=0,X=0,H=0,N=0;m.sort(xM);for(let C=0,A=m.length;C<A;C++){const k=m[C],oe=k.color,ee=k.intensity,ce=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=oe.r*ee,v+=oe.g*ee,x+=oe.b*ee;else if(k.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(k.sh.coefficients[se],ee);N++}else if(k.isDirectionalLight){const se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,B=n.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=he,r.directionalShadowMatrix[y]=k.shadow.matrix,O++}r.directional[y]=se,y++}else if(k.isSpotLight){const se=e.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(oe).multiplyScalar(ee),se.distance=ce,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,r.spot[R]=se;const le=k.shadow;if(k.map&&(r.spotLightMap[X]=k.map,X++,le.updateMatrices(k),k.castShadow&&H++),r.spotLightMatrix[R]=le.matrix,k.castShadow){const B=n.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=he,L++}R++}else if(k.isRectAreaLight){const se=e.get(k);se.color.copy(oe).multiplyScalar(ee),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=se,S++}else if(k.isPointLight){const se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),se.distance=k.distance,se.decay=k.decay,k.castShadow){const le=k.shadow,B=n.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=he,r.pointShadowMatrix[w]=k.shadow.matrix,D++}r.point[w]=se,w++}else if(k.isHemisphereLight){const se=e.get(k);se.skyColor.copy(k.color).multiplyScalar(ee),se.groundColor.copy(k.groundColor).multiplyScalar(ee),r.hemi[_]=se,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==y||Y.pointLength!==w||Y.spotLength!==R||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==O||Y.numPointShadows!==D||Y.numSpotShadows!==L||Y.numSpotMaps!==X||Y.numLightProbes!==N)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=S,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=L+X-H,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=N,Y.directionalLength=y,Y.pointLength=w,Y.spotLength=R,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=O,Y.numPointShadows=D,Y.numSpotShadows=L,Y.numSpotMaps=X,Y.numLightProbes=N,r.version=vM++)}function p(m,g){let v=0,x=0,y=0,w=0,R=0;const S=g.matrixWorldInverse;for(let _=0,O=m.length;_<O;_++){const D=m[_];if(D.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(S),v++}else if(D.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const L=r.rectArea[w];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),f.identity(),u.copy(D.matrixWorld),u.premultiply(S),f.extractRotation(u),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),w++}else if(D.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const L=r.hemi[R];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(S),R++}}}return{setup:d,setupView:p,state:r}}function cm(o){const e=new SM(o),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function d(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function yM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new cm(o),e.set(a,[d])):u>=f.length?(d=new cm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TM(o,e,n){let r=new Nm;const a=new Ct,u=new Ct,f=new Vt,d=new qv({depthPacking:ov}),p=new jv,m={},g=n.maxTextureSize,v={[gr]:bn,[bn]:gr,[hi]:hi},x=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:MM,fragmentShader:EM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const w=new qr;w.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new mi(w,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fm;let _=this.type;this.render=function(H,N,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(pr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=_!==Ui&&this.type===Ui,ce=_===Ui&&this.type!==Ui;for(let he=0,se=H.length;he<se;he++){const le=H[he],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),u.copy(B.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(u.x=Math.floor(g/ae.x),a.x=u.x*ae.x,B.mapSize.x=u.x),a.y>g&&(u.y=Math.floor(g/ae.y),a.y=u.y*ae.y,B.mapSize.y=u.y)),B.map===null||ee===!0||ce===!0){const U=this.type!==Ui?{minFilter:si,magFilter:si}:{};B.map!==null&&B.map.dispose(),B.map=new Yr(a.x,a.y,U),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const re=B.getViewportCount();for(let U=0;U<re;U++){const te=B.getViewport(U);f.set(u.x*te.x,u.y*te.y,u.x*te.z,u.y*te.w),oe.viewport(f),B.updateMatrices(le,U),r=B.getFrustum(),L(N,Y,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Ui&&O(B,Y),B.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(C,A,k)};function O(H,N){const Y=e.update(R);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Yr(a.x,a.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(N,null,Y,x,R,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(N,null,Y,y,R,null)}function D(H,N,Y,C){let A=null;const k=Y.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)A=k;else if(A=Y.isPointLight===!0?p:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const oe=A.uuid,ee=N.uuid;let ce=m[oe];ce===void 0&&(ce={},m[oe]=ce);let he=ce[ee];he===void 0&&(he=A.clone(),ce[ee]=he,N.addEventListener("dispose",X)),A=he}if(A.visible=N.visible,A.wireframe=N.wireframe,C===Ui?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:v[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,Y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const oe=o.properties.get(A);oe.light=Y}return A}function L(H,N,Y,C,A){if(H.visible===!1)return;if(H.layers.test(N.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===Ui)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,H.matrixWorld);const ee=e.update(H),ce=H.material;if(Array.isArray(ce)){const he=ee.groups;for(let se=0,le=he.length;se<le;se++){const B=he[se],ae=ce[B.materialIndex];if(ae&&ae.visible){const re=D(H,ae,C,A);H.onBeforeShadow(o,H,N,Y,ee,re,B),o.renderBufferDirect(Y,null,ee,re,H,B),H.onAfterShadow(o,H,N,Y,ee,re,B)}}}else if(ce.visible){const he=D(H,ce,C,A);H.onBeforeShadow(o,H,N,Y,ee,he,null),o.renderBufferDirect(Y,null,ee,he,H,null),H.onAfterShadow(o,H,N,Y,ee,he,null)}}const oe=H.children;for(let ee=0,ce=oe.length;ee<ce;ee++)L(oe[ee],N,Y,C,A)}function X(H){H.target.removeEventListener("dispose",X);for(const Y in m){const C=m[Y],A=H.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const wM={[Hc]:Vc,[Gc]:Yc,[Wc]:qc,[Os]:Xc,[Vc]:Hc,[Yc]:Gc,[qc]:Wc,[Xc]:Os};function AM(o,e){function n(){let V=!1;const Ae=new Vt;let ie=null;const fe=new Vt(0,0,0,0);return{setMask:function(Le){ie!==Le&&!V&&(o.colorMask(Le,Le,Le,Le),ie=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Pe,it,bt,Yt){Yt===!0&&(Le*=bt,Pe*=bt,it*=bt),Ae.set(Le,Pe,it,bt),fe.equals(Ae)===!1&&(o.clearColor(Le,Pe,it,bt),fe.copy(Ae))},reset:function(){V=!1,ie=null,fe.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,ie=null,fe=null,Le=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const bt=Le;Le=null,this.setClear(bt)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!V&&(o.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=wM[Pe]),fe!==Pe){switch(Pe){case Hc:o.depthFunc(o.NEVER);break;case Vc:o.depthFunc(o.ALWAYS);break;case Gc:o.depthFunc(o.LESS);break;case Os:o.depthFunc(o.LEQUAL);break;case Wc:o.depthFunc(o.EQUAL);break;case Xc:o.depthFunc(o.GEQUAL);break;case Yc:o.depthFunc(o.GREATER);break;case qc:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}fe=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){Le!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),Le=Pe)},reset:function(){V=!1,ie=null,fe=null,Le=null,Ae=!1}}}function a(){let V=!1,Ae=null,ie=null,fe=null,Le=null,Pe=null,it=null,bt=null,Yt=null;return{setTest:function(_t){V||(_t?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(_t){Ae!==_t&&!V&&(o.stencilMask(_t),Ae=_t)},setFunc:function(_t,En,_n){(ie!==_t||fe!==En||Le!==_n)&&(o.stencilFunc(_t,En,_n),ie=_t,fe=En,Le=_n)},setOp:function(_t,En,_n){(Pe!==_t||it!==En||bt!==_n)&&(o.stencilOp(_t,En,_n),Pe=_t,it=En,bt=_n)},setLocked:function(_t){V=_t},setClear:function(_t){Yt!==_t&&(o.clearStencil(_t),Yt=_t)},reset:function(){V=!1,Ae=null,ie=null,fe=null,Le=null,Pe=null,it=null,bt=null,Yt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,y=[],w=null,R=!1,S=null,_=null,O=null,D=null,L=null,X=null,H=null,N=new At(0,0,0),Y=0,C=!1,A=null,k=null,oe=null,ee=null,ce=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=le>=2);let ae=null,re={};const U=o.getParameter(o.SCISSOR_BOX),te=o.getParameter(o.VIEWPORT),Ie=new Vt().fromArray(U),Z=new Vt().fromArray(te);function de(V,Ae,ie,fe){const Le=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(V,Pe),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<ie;it++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,fe,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(Ae+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return Pe}const ye={};ye[o.TEXTURE_2D]=de(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=de(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=de(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=de(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(o.DEPTH_TEST),f.setFunc(Os),ft(!1),lt(mp),ve(o.CULL_FACE),F(pr);function ve(V){g[V]!==!0&&(o.enable(V),g[V]=!0)}function Te(V){g[V]!==!1&&(o.disable(V),g[V]=!1)}function Ue(V,Ae){return v[V]!==Ae?(o.bindFramebuffer(V,Ae),v[V]=Ae,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ae),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(V,Ae){let ie=y,fe=!1;if(V){ie=x.get(Ae),ie===void 0&&(ie=[],x.set(Ae,ie));const Le=V.textures;if(ie.length!==Le.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,it=Le.length;Pe<it;Pe++)ie[Pe]=o.COLOR_ATTACHMENT0+Pe;ie.length=Le.length,fe=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,fe=!0);fe&&o.drawBuffers(ie)}function Tt(V){return w!==V?(o.useProgram(V),w=V,!0):!1}const dt={[zr]:o.FUNC_ADD,[D_]:o.FUNC_SUBTRACT,[U_]:o.FUNC_REVERSE_SUBTRACT};dt[I_]=o.MIN,dt[N_]=o.MAX;const Pt={[F_]:o.ZERO,[O_]:o.ONE,[B_]:o.SRC_COLOR,[kc]:o.SRC_ALPHA,[W_]:o.SRC_ALPHA_SATURATE,[V_]:o.DST_COLOR,[z_]:o.DST_ALPHA,[k_]:o.ONE_MINUS_SRC_COLOR,[zc]:o.ONE_MINUS_SRC_ALPHA,[G_]:o.ONE_MINUS_DST_COLOR,[H_]:o.ONE_MINUS_DST_ALPHA,[X_]:o.CONSTANT_COLOR,[Y_]:o.ONE_MINUS_CONSTANT_COLOR,[q_]:o.CONSTANT_ALPHA,[j_]:o.ONE_MINUS_CONSTANT_ALPHA};function F(V,Ae,ie,fe,Le,Pe,it,bt,Yt,_t){if(V===pr){R===!0&&(Te(o.BLEND),R=!1);return}if(R===!1&&(ve(o.BLEND),R=!0),V!==b_){if(V!==S||_t!==C){if((_!==zr||L!==zr)&&(o.blendEquation(o.FUNC_ADD),_=zr,L=zr),_t)switch(V){case Is:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gp:o.blendFunc(o.ONE,o.ONE);break;case _p:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Is:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case _p:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}O=null,D=null,X=null,H=null,N.set(0,0,0),Y=0,S=V,C=_t}return}Le=Le||Ae,Pe=Pe||ie,it=it||fe,(Ae!==_||Le!==L)&&(o.blendEquationSeparate(dt[Ae],dt[Le]),_=Ae,L=Le),(ie!==O||fe!==D||Pe!==X||it!==H)&&(o.blendFuncSeparate(Pt[ie],Pt[fe],Pt[Pe],Pt[it]),O=ie,D=fe,X=Pe,H=it),(bt.equals(N)===!1||Yt!==Y)&&(o.blendColor(bt.r,bt.g,bt.b,Yt),N.copy(bt),Y=Yt),S=V,C=!1}function gn(V,Ae){V.side===hi?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=V.side===bn;Ae&&(ie=!ie),ft(ie),V.blending===Is&&V.transparent===!1?F(pr):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const fe=V.stencilWrite;d.setTest(fe),fe&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Et(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function ft(V){A!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),A=V)}function lt(V){V!==C_?(ve(o.CULL_FACE),V!==k&&(V===mp?o.cullFace(o.BACK):V===P_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),k=V}function Ye(V){V!==oe&&(se&&o.lineWidth(V),oe=V)}function Et(V,Ae,ie){V?(ve(o.POLYGON_OFFSET_FILL),(ee!==Ae||ce!==ie)&&(o.polygonOffset(Ae,ie),ee=Ae,ce=ie)):Te(o.POLYGON_OFFSET_FILL)}function Ge(V){V?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function P(V){V===void 0&&(V=o.TEXTURE0+he-1),ae!==V&&(o.activeTexture(V),ae=V)}function E(V,Ae,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+he-1:ie=ae);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==V||fe.texture!==Ae)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(V,Ae||ye[V]),fe.type=V,fe.texture=Ae)}function K(){const V=re[ae];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){Ie.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Ie.copy(V))}function Be(V){Z.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function ut(V,Ae){let ie=m.get(Ae);ie===void 0&&(ie=new WeakMap,m.set(Ae,ie));let fe=ie.get(V);fe===void 0&&(fe=o.getUniformBlockIndex(Ae,V.name),ie.set(V,fe))}function nt(V,Ae){const fe=m.get(Ae).get(V);p.get(Ae)!==fe&&(o.uniformBlockBinding(Ae,fe,V.__bindingPointIndex),p.set(Ae,fe))}function Mt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ae=null,re={},v={},x=new WeakMap,y=[],w=null,R=!1,S=null,_=null,O=null,D=null,L=null,X=null,H=null,N=new At(0,0,0),Y=0,C=!1,A=null,k=null,oe=null,ee=null,ce=null,Ie.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Tt,setBlending:F,setMaterial:gn,setFlipSided:ft,setCullFace:lt,setLineWidth:Ye,setPolygonOffset:Et,setScissorTest:Ge,activeTexture:P,bindTexture:E,unbindTexture:K,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:je,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:at,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:We,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:Be,reset:Mt}}function RM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ct,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,E){return y?new OffscreenCanvas(P,E):Do("canvas")}function R(P,E,K){let pe=1;const ge=Ge(P);if((ge.width>K||ge.height>K)&&(pe=K/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);v===void 0&&(v=w(ue,We));const we=E?w(ue,We):v;return we.width=ue,we.height=We,we.getContext("2d").drawImage(P,0,0,ue,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+We+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function S(P){return P.generateMipmaps}function _(P){o.generateMipmap(P)}function O(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(P,E,K,pe,ge=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=E;if(E===o.RED&&(K===o.FLOAT&&(ue=o.R32F),K===o.HALF_FLOAT&&(ue=o.R16F),K===o.UNSIGNED_BYTE&&(ue=o.R8)),E===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.R8UI),K===o.UNSIGNED_SHORT&&(ue=o.R16UI),K===o.UNSIGNED_INT&&(ue=o.R32UI),K===o.BYTE&&(ue=o.R8I),K===o.SHORT&&(ue=o.R16I),K===o.INT&&(ue=o.R32I)),E===o.RG&&(K===o.FLOAT&&(ue=o.RG32F),K===o.HALF_FLOAT&&(ue=o.RG16F),K===o.UNSIGNED_BYTE&&(ue=o.RG8)),E===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RG8UI),K===o.UNSIGNED_SHORT&&(ue=o.RG16UI),K===o.UNSIGNED_INT&&(ue=o.RG32UI),K===o.BYTE&&(ue=o.RG8I),K===o.SHORT&&(ue=o.RG16I),K===o.INT&&(ue=o.RG32I)),E===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),K===o.UNSIGNED_INT&&(ue=o.RGB32UI),K===o.BYTE&&(ue=o.RGB8I),K===o.SHORT&&(ue=o.RGB16I),K===o.INT&&(ue=o.RGB32I)),E===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),K===o.UNSIGNED_INT&&(ue=o.RGBA32UI),K===o.BYTE&&(ue=o.RGBA8I),K===o.SHORT&&(ue=o.RGBA16I),K===o.INT&&(ue=o.RGBA32I)),E===o.RGB&&K===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),E===o.RGBA){const We=ge?yl:yt.getTransfer(pe);K===o.FLOAT&&(ue=o.RGBA32F),K===o.HALF_FLOAT&&(ue=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ue=We===wt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function L(P,E){let K;return P?E===null||E===Xr||E===zs?K=o.DEPTH24_STENCIL8:E===Ii?K=o.DEPTH32F_STENCIL8:E===bo&&(K=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xr||E===zs?K=o.DEPTH_COMPONENT24:E===Ii?K=o.DEPTH_COMPONENT32F:E===bo&&(K=o.DEPTH_COMPONENT16),K}function X(P,E){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==si&&P.minFilter!==pi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function H(P){const E=P.target;E.removeEventListener("dispose",H),Y(E),E.isVideoTexture&&g.delete(E)}function N(P){const E=P.target;E.removeEventListener("dispose",N),A(E)}function Y(P){const E=r.get(P);if(E.__webglInit===void 0)return;const K=P.source,pe=x.get(K);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(P),Object.keys(pe).length===0&&x.delete(K)}r.remove(P)}function C(P){const E=r.get(P);o.deleteTexture(E.__webglTexture);const K=P.source,pe=x.get(K);delete pe[E.__cacheKey],f.memory.textures--}function A(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)o.deleteFramebuffer(E.__webglFramebuffer[pe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=P.textures;for(let pe=0,ge=K.length;pe<ge;pe++){const ue=r.get(K[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove(K[pe])}r.remove(P)}let k=0;function oe(){k=0}function ee(){const P=k;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),k+=1,P}function ce(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function he(P,E){const K=r.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,P,E);return}}n.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+E)}function se(P,E){const K=r.get(P);if(P.version>0&&K.__version!==P.version){Z(K,P,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+E)}function le(P,E){const K=r.get(P);if(P.version>0&&K.__version!==P.version){Z(K,P,E);return}n.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+E)}function B(P,E){const K=r.get(P);if(P.version>0&&K.__version!==P.version){de(K,P,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+E)}const ae={[Kc]:o.REPEAT,[Vr]:o.CLAMP_TO_EDGE,[Zc]:o.MIRRORED_REPEAT},re={[si]:o.NEAREST,[rv]:o.NEAREST_MIPMAP_NEAREST,[qa]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[lc]:o.LINEAR_MIPMAP_NEAREST,[Gr]:o.LINEAR_MIPMAP_LINEAR},U={[uv]:o.NEVER,[mv]:o.ALWAYS,[cv]:o.LESS,[Tm]:o.LEQUAL,[fv]:o.EQUAL,[pv]:o.GEQUAL,[dv]:o.GREATER,[hv]:o.NOTEQUAL};function te(P,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pi||E.magFilter===lc||E.magFilter===qa||E.magFilter===Gr||E.minFilter===pi||E.minFilter===lc||E.minFilter===qa||E.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,ae[E.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,ae[E.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,ae[E.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,re[E.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===si||E.minFilter!==qa&&E.minFilter!==Gr||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(P,E){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",H));const pe=E.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const ue=ce(E);if(ue!==P.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,K=!0),ge[ue].usedTimes++;const We=ge[P.__cacheKey];We!==void 0&&(ge[P.__cacheKey].usedTimes--,We.usedTimes===0&&C(E)),P.__cacheKey=ue,P.__webglTexture=ge[ue].texture}return K}function Z(P,E,K){let pe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ie(P,E),ue=E.source;n.bindTexture(pe,P.__webglTexture,o.TEXTURE0+K);const We=r.get(ue);if(ue.version!==We.__version||ge===!0){n.activeTexture(o.TEXTURE0+K);const we=yt.getPrimaries(yt.workingColorSpace),Ne=E.colorSpace===hr?null:yt.getPrimaries(E.colorSpace),at=E.colorSpace===hr||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Me=R(E.image,!1,a.maxTextureSize);Me=Et(E,Me);const Oe=u.convert(E.format,E.colorSpace),je=u.convert(E.type);let Je=D(E.internalFormat,Oe,je,E.colorSpace,E.isVideoTexture);te(pe,E);let Be;const ut=E.mipmaps,nt=E.isVideoTexture!==!0,Mt=We.__version===void 0||ge===!0,V=ue.dataReady,Ae=X(E,Me);if(E.isDepthTexture)Je=L(E.format===Hs,E.type),Mt&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,je,null));else if(E.isDataTexture)if(ut.length>0){nt&&Mt&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ut[0].width,ut[0].height);for(let ie=0,fe=ut.length;ie<fe;ie++)Be=ut[ie],nt?V&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,Oe,je,Be.data):n.texImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,Oe,je,Be.data);E.generateMipmaps=!1}else nt?(Mt&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height),V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,je,Me.data)):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,je,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&Mt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,ut[0].width,ut[0].height,Me.depth);for(let ie=0,fe=ut.length;ie<fe;ie++)if(Be=ut[ie],E.format!==ri)if(Oe!==null)if(nt){if(V)if(E.layerUpdates.size>0){const Le=zp(Be.width,Be.height,E.format,E.type);for(const Pe of E.layerUpdates){const it=Be.data.subarray(Pe*Le/Be.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,Pe,Be.width,Be.height,1,Oe,it)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,Oe,Be.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Je,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,Oe,je,Be.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ie,Je,Be.width,Be.height,Me.depth,0,Oe,je,Be.data)}else{nt&&Mt&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ut[0].width,ut[0].height);for(let ie=0,fe=ut.length;ie<fe;ie++)Be=ut[ie],E.format!==ri?Oe!==null?nt?V&&n.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,Oe,Be.data):n.compressedTexImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,Oe,je,Be.data):n.texImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,Oe,je,Be.data)}else if(E.isDataArrayTexture)if(nt){if(Mt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,Me.width,Me.height,Me.depth),V)if(E.layerUpdates.size>0){const ie=zp(Me.width,Me.height,E.format,E.type);for(const fe of E.layerUpdates){const Le=Me.data.subarray(fe*ie/Me.data.BYTES_PER_ELEMENT,(fe+1)*ie/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Oe,je,Le)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,je,Me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,je,Me.data);else if(E.isData3DTexture)nt?(Mt&&n.texStorage3D(o.TEXTURE_3D,Ae,Je,Me.width,Me.height,Me.depth),V&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,je,Me.data)):n.texImage3D(o.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,je,Me.data);else if(E.isFramebufferTexture){if(Mt)if(nt)n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height);else{let ie=Me.width,fe=Me.height;for(let Le=0;Le<Ae;Le++)n.texImage2D(o.TEXTURE_2D,Le,Je,ie,fe,0,Oe,je,null),ie>>=1,fe>>=1}}else if(ut.length>0){if(nt&&Mt){const ie=Ge(ut[0]);n.texStorage2D(o.TEXTURE_2D,Ae,Je,ie.width,ie.height)}for(let ie=0,fe=ut.length;ie<fe;ie++)Be=ut[ie],nt?V&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Oe,je,Be):n.texImage2D(o.TEXTURE_2D,ie,Je,Oe,je,Be);E.generateMipmaps=!1}else if(nt){if(Mt){const ie=Ge(Me);n.texStorage2D(o.TEXTURE_2D,Ae,Je,ie.width,ie.height)}V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,je,Me)}else n.texImage2D(o.TEXTURE_2D,0,Je,Oe,je,Me);S(E)&&_(pe),We.__version=ue.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function de(P,E,K){if(E.image.length!==6)return;const pe=Ie(P,E),ge=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+K);const ue=r.get(ge);if(ge.version!==ue.__version||pe===!0){n.activeTexture(o.TEXTURE0+K);const We=yt.getPrimaries(yt.workingColorSpace),we=E.colorSpace===hr?null:yt.getPrimaries(E.colorSpace),Ne=E.colorSpace===hr||We===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let fe=0;fe<6;fe++)!at&&!Me?Oe[fe]=R(E.image[fe],!0,a.maxCubemapSize):Oe[fe]=Me?E.image[fe].image:E.image[fe],Oe[fe]=Et(E,Oe[fe]);const je=Oe[0],Je=u.convert(E.format,E.colorSpace),Be=u.convert(E.type),ut=D(E.internalFormat,Je,Be,E.colorSpace),nt=E.isVideoTexture!==!0,Mt=ue.__version===void 0||pe===!0,V=ge.dataReady;let Ae=X(E,je);te(o.TEXTURE_CUBE_MAP,E);let ie;if(at){nt&&Mt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ut,je.width,je.height);for(let fe=0;fe<6;fe++){ie=Oe[fe].mipmaps;for(let Le=0;Le<ie.length;Le++){const Pe=ie[Le];E.format!==ri?Je!==null?nt?V&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,ut,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,Pe.width,Pe.height,Je,Be,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,ut,Pe.width,Pe.height,0,Je,Be,Pe.data)}}}else{if(ie=E.mipmaps,nt&&Mt){ie.length>0&&Ae++;const fe=Ge(Oe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ut,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe[fe].width,Oe[fe].height,Je,Be,Oe[fe].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,Oe[fe].width,Oe[fe].height,0,Je,Be,Oe[fe].data);for(let Le=0;Le<ie.length;Le++){const it=ie[Le].image[fe].image;nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,it.width,it.height,Je,Be,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,ut,it.width,it.height,0,Je,Be,it.data)}}else{nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,Be,Oe[fe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,Je,Be,Oe[fe]);for(let Le=0;Le<ie.length;Le++){const Pe=ie[Le];nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,Je,Be,Pe.image[fe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,ut,Je,Be,Pe.image[fe])}}}S(E)&&_(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ye(P,E,K,pe,ge,ue){const We=u.convert(K.format,K.colorSpace),we=u.convert(K.type),Ne=D(K.internalFormat,We,we,K.colorSpace),at=r.get(E),Me=r.get(K);if(Me.__renderTarget=E,!at.__hasExternalTextures){const Oe=Math.max(1,E.width>>ue),je=Math.max(1,E.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,ue,Ne,Oe,je,E.depth,0,We,we,null):n.texImage2D(ge,ue,Ne,Oe,je,0,We,we,null)}n.bindFramebuffer(o.FRAMEBUFFER,P),lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,ft(E)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,ue),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(P,E,K){if(o.bindRenderbuffer(o.RENDERBUFFER,P),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=L(E.stencilBuffer,ge),We=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=ft(E);lt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,ue,E.width,E.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,ue,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ue,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,P)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],We=u.convert(ue.format,ue.colorSpace),we=u.convert(ue.type),Ne=D(ue.internalFormat,We,we,ue.colorSpace),at=ft(E);K&&lt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,at,Ne,E.width,E.height):lt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,at,Ne,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const ge=pe.__webglTexture,ue=ft(E);if(E.depthTexture.format===Ns)lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(E.depthTexture.format===Hs)lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(P){const E=r.get(P),K=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,P)}else if(K){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(E.__webglDepthbuffer[pe],P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ve(E.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(P,E,K){const pe=r.get(P);E!==void 0&&ye(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&Ue(P)}function Tt(P){const E=P.texture,K=r.get(P),pe=r.get(E);P.addEventListener("dispose",N);const ge=P.textures,ue=P.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=E.version,f.memory.textures++),ue){K.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[we]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)K.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else K.__webglFramebuffer[we]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)K.__webglFramebuffer[we]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(We)for(let we=0,Ne=ge.length;we<Ne;we++){const at=r.get(ge[we]);at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture(),f.memory.textures++)}if(P.samples>0&&lt(P)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];K.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[we]);const at=u.convert(Ne.format,Ne.colorSpace),Me=u.convert(Ne.type),Oe=D(Ne.internalFormat,at,Me,Ne.colorSpace,P.isXRRenderTarget===!0),je=ft(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Oe,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,K.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(K.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),te(o.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)ye(K.__webglFramebuffer[we][Ne],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else ye(K.__webglFramebuffer[we],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(E)&&_(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let we=0,Ne=ge.length;we<Ne;we++){const at=ge[we],Me=r.get(at);n.bindTexture(o.TEXTURE_2D,Me.__webglTexture),te(o.TEXTURE_2D,at),ye(K.__webglFramebuffer,P,at,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),S(at)&&_(o.TEXTURE_2D)}n.unbindTexture()}else{let we=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),te(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)ye(K.__webglFramebuffer[Ne],P,E,o.COLOR_ATTACHMENT0,we,Ne);else ye(K.__webglFramebuffer,P,E,o.COLOR_ATTACHMENT0,we,0);S(E)&&_(we),n.unbindTexture()}P.depthBuffer&&Ue(P)}function dt(P){const E=P.textures;for(let K=0,pe=E.length;K<pe;K++){const ge=E[K];if(S(ge)){const ue=O(P),We=r.get(ge).__webglTexture;n.bindTexture(ue,We),_(ue),n.unbindTexture()}}}const Pt=[],F=[];function gn(P){if(P.samples>0){if(lt(P)===!1){const E=P.textures,K=P.width,pe=P.height;let ge=o.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=r.get(P),we=E.length>1;if(we)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const at=r.get(E[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,at,0)}o.blitFramebuffer(0,0,K,pe,0,0,K,pe,ge,o.NEAREST),p===!0&&(Pt.length=0,F.length=0,Pt.push(o.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pt.push(ue),F.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const at=r.get(E[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,at,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const E=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ft(P){return Math.min(a.maxSamples,P.samples)}function lt(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(P){const E=f.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Et(P,E){const K=P.colorSpace,pe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==Vs&&K!==hr&&(yt.getTransfer(K)===wt?(pe!==ri||ge!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=lt}function CM(o,e){function n(r,a=hr){let u;const f=yt.getTransfer(a);if(r===Oi)return o.UNSIGNED_BYTE;if(r===Lf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===bf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===gm)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===pm)return o.BYTE;if(r===mm)return o.SHORT;if(r===bo)return o.UNSIGNED_SHORT;if(r===Pf)return o.INT;if(r===Xr)return o.UNSIGNED_INT;if(r===Ii)return o.FLOAT;if(r===Uo)return o.HALF_FLOAT;if(r===_m)return o.ALPHA;if(r===vm)return o.RGB;if(r===ri)return o.RGBA;if(r===xm)return o.LUMINANCE;if(r===Sm)return o.LUMINANCE_ALPHA;if(r===Ns)return o.DEPTH_COMPONENT;if(r===Hs)return o.DEPTH_STENCIL;if(r===ym)return o.RED;if(r===Df)return o.RED_INTEGER;if(r===Mm)return o.RG;if(r===Uf)return o.RG_INTEGER;if(r===If)return o.RGBA_INTEGER;if(r===ml||r===gl||r===_l||r===vl)if(f===wt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===ml)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===ml)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qc||r===Jc||r===ef||r===tf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Qc)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jc)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ef)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nf||r===rf||r===sf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===nf||r===rf)return f===wt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===sf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===of||r===af||r===lf||r===uf||r===cf||r===ff||r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===of)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===af)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ff)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===df)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_f)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xl||r===Sf||r===yf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===xl)return f===wt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Em||r===Mf||r===Ef||r===Tf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===xl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Mf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ef)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const PM={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const S=n.getJointPose(R,r),_=this._getHandJoint(m,R);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,w=.005;m.inputState.pinching&&x>y+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(PM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new fl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const LM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Mn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new _r({vertexShader:LM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mi(new Bo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UM extends Ws{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,g=null,v=null,x=null,y=null,w=null;const R=new DM,S=n.getContextAttributes();let _=null,O=null;const D=[],L=[],X=new Ct;let H=null;const N=new qn;N.viewport=new Vt;const Y=new qn;Y.viewport=new Vt;const C=[N,Y],A=new e0;let k=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=D[Z];return de===void 0&&(de=new Oc,D[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=D[Z];return de===void 0&&(de=new Oc,D[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=D[Z];return de===void 0&&(de=new Oc,D[Z]=de),de.getHandSpace()};function ee(Z){const de=L.indexOf(Z.inputSource);if(de===-1)return;const ye=D[de];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,m||f),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ce(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",he);for(let Z=0;Z<D.length;Z++){const de=L[Z];de!==null&&(L[Z]=null,D[Z].disconnect(de))}k=null,oe=null,R.reset(),e.setRenderTarget(_),y=null,x=null,v=null,a=null,O=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(X),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let ye=null,ve=null,Te=null;S.depth&&(Te=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=S.stencil?Hs:Ns,ve=S.stencil?zs:Xr);const Ue={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Ue),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Yr(x.textureWidth,x.textureHeight,{format:ri,type:Oi,depthTexture:new Fm(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,ye),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Yr(y.framebufferWidth,y.framebufferHeight,{format:ri,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function he(Z){for(let de=0;de<Z.removed.length;de++){const ye=Z.removed[de],ve=L.indexOf(ye);ve>=0&&(L[ve]=null,D[ve].disconnect(ye))}for(let de=0;de<Z.added.length;de++){const ye=Z.added[de];let ve=L.indexOf(ye);if(ve===-1){for(let Ue=0;Ue<D.length;Ue++)if(Ue>=L.length){L.push(ye),ve=Ue;break}else if(L[Ue]===null){L[Ue]=ye,ve=Ue;break}if(ve===-1)break}const Te=D[ve];Te&&Te.connect(ye)}}const se=new ne,le=new ne;function B(Z,de,ye){se.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(ye.matrixWorld);const ve=se.distanceTo(le),Te=de.projectionMatrix.elements,Ue=ye.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Tt=Te[14]/(Te[10]+1),dt=(Te[9]+1)/Te[5],Pt=(Te[9]-1)/Te[5],F=(Te[8]-1)/Te[0],gn=(Ue[8]+1)/Ue[0],ft=Ze*F,lt=Ze*gn,Ye=ve/(-F+gn),Et=Ye*-F;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Et),Z.translateZ(Ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ge=Ze+Ye,P=Tt+Ye,E=ft-Et,K=lt+(ve-Et),pe=dt*Tt/P*Ge,ge=Pt*Tt/P*Ge;Z.projectionMatrix.makePerspective(E,K,pe,ge,Ge,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let de=Z.near,ye=Z.far;R.texture!==null&&(R.depthNear>0&&(de=R.depthNear),R.depthFar>0&&(ye=R.depthFar)),A.near=Y.near=N.near=de,A.far=Y.far=N.far=ye,(k!==A.near||oe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,oe=A.far),N.layers.mask=Z.layers.mask|2,Y.layers.mask=Z.layers.mask|4,A.layers.mask=N.layers.mask|Y.layers.mask;const ve=Z.parent,Te=A.cameras;ae(A,ve);for(let Ue=0;Ue<Te.length;Ue++)ae(Te[Ue],ve);Te.length===2?B(A,N,Y):A.projectionMatrix.copy(N.projectionMatrix),re(Z,A,ve)};function re(Z,de,ye){ye===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=wf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(A)};let U=null;function te(Z,de){if(g=de.getViewerPose(m||f),w=de,g!==null){const ye=g.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let ve=!1;ye.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ue=0;Ue<ye.length;Ue++){const Ze=ye[Ue];let Tt=null;if(y!==null)Tt=y.getViewport(Ze);else{const Pt=v.getViewSubImage(x,Ze);Tt=Pt.viewport,Ue===0&&(e.setRenderTargetTextures(O,Pt.colorTexture,x.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(O))}let dt=C[Ue];dt===void 0&&(dt=new qn,dt.layers.enable(Ue),dt.viewport=new Vt,C[Ue]=dt),dt.matrix.fromArray(Ze.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Ze.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Ue===0&&(A.matrix.copy(dt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(dt)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=v.getDepthInformation(ye[0]);Ue&&Ue.isValid&&Ue.texture&&R.init(e,Ue,a.renderState)}}for(let ye=0;ye<D.length;ye++){const ve=L[ye],Te=D[ye];ve!==null&&Te!==void 0&&Te.update(ve,de,m||f)}U&&U(Z,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),w=null}const Ie=new Om;Ie.setAnimationLoop(te),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const Or=new Bi,IM=new Xt;function NM(o,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Dm(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,O,D,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),v(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,L)):_.isMeshMatcapMaterial?(u(S,_),w(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),R(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,O,D):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===bn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===bn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const O=e.get(_),D=O.envMap,L=O.envMapRotation;D&&(S.envMap.value=D,Or.copy(L),Or.x*=-1,Or.y*=-1,Or.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),S.envMapRotation.value.setFromMatrix4(IM.makeRotationFromEuler(Or)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,O,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*O,S.scale.value=D*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,O){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,_){_.matcap&&(S.matcap.value=_.matcap)}function R(S,_){const O=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function FM(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,D){const L=D.program;r.uniformBlockBinding(O,L)}function m(O,D){let L=a[O.id];L===void 0&&(w(O),L=g(O),a[O.id]=L,O.addEventListener("dispose",S));const X=D.program;r.updateUBOMapping(O,X);const H=e.render.frame;u[O.id]!==H&&(x(O),u[O.id]=H)}function g(O){const D=v();O.__bindingPointIndex=D;const L=o.createBuffer(),X=O.__size,H=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,X,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,L),L}function v(){for(let O=0;O<d;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const D=a[O.id],L=O.uniforms,X=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let H=0,N=L.length;H<N;H++){const Y=Array.isArray(L[H])?L[H]:[L[H]];for(let C=0,A=Y.length;C<A;C++){const k=Y[C];if(y(k,H,C,X)===!0){const oe=k.__offset,ee=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let he=0;he<ee.length;he++){const se=ee[he],le=R(se);typeof se=="number"||typeof se=="boolean"?(k.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+ce,k.__data)):se.isMatrix3?(k.__data[0]=se.elements[0],k.__data[1]=se.elements[1],k.__data[2]=se.elements[2],k.__data[3]=0,k.__data[4]=se.elements[3],k.__data[5]=se.elements[4],k.__data[6]=se.elements[5],k.__data[7]=0,k.__data[8]=se.elements[6],k.__data[9]=se.elements[7],k.__data[10]=se.elements[8],k.__data[11]=0):(se.toArray(k.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(O,D,L,X){const H=O.value,N=D+"_"+L;if(X[N]===void 0)return typeof H=="number"||typeof H=="boolean"?X[N]=H:X[N]=H.clone(),!0;{const Y=X[N];if(typeof H=="number"||typeof H=="boolean"){if(Y!==H)return X[N]=H,!0}else if(Y.equals(H)===!1)return Y.copy(H),!0}return!1}function w(O){const D=O.uniforms;let L=0;const X=16;for(let N=0,Y=D.length;N<Y;N++){const C=Array.isArray(D[N])?D[N]:[D[N]];for(let A=0,k=C.length;A<k;A++){const oe=C[A],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,he=ee.length;ce<he;ce++){const se=ee[ce],le=R(se),B=L%X,ae=B%le.boundary,re=B+ae;L+=ae,re!==0&&X-re<le.storage&&(L+=X-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=L,L+=le.storage}}}const H=L%X;return H>0&&(L+=X-H),O.__size=L,O.__cache={},this}function R(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function S(O){const D=O.target;D.removeEventListener("dispose",S);const L=f.indexOf(D.__bindingPointIndex);f.splice(L,1),o.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function _(){for(const O in a)o.deleteBuffer(a[O]);f=[],a={},u={}}return{bind:p,update:m,dispose:_}}class OM{constructor(e={}){const{canvas:n=_v(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const w=new Uint32Array(4),R=new Int32Array(4);let S=null,_=null;const O=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=mr,this.toneMappingExposure=1;const L=this;let X=!1,H=0,N=0,Y=null,C=-1,A=null;const k=new Vt,oe=new Vt;let ee=null;const ce=new At(0);let he=0,se=n.width,le=n.height,B=1,ae=null,re=null;const U=new Vt(0,0,se,le),te=new Vt(0,0,se,le);let Ie=!1;const Z=new Nm;let de=!1,ye=!1;this.transmissionResolutionScale=1;const ve=new Xt,Te=new Xt,Ue=new ne,Ze=new Vt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Pt(){return Y===null?B:1}let F=r;function gn(T,G){return n.getContext(T,G)}try{const T={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cf}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),F===null){const G="webgl2";if(F=gn(G,T),F===null)throw gn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ft,lt,Ye,Et,Ge,P,E,K,pe,ge,ue,We,we,Ne,at,Me,Oe,je,Je,Be,ut,nt,Mt,V;function Ae(){ft=new YS(F),ft.init(),nt=new CM(F,ft),lt=new zS(F,ft,e,nt),Ye=new AM(F,ft),lt.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Et=new $S(F),Ge=new hM,P=new RM(F,ft,Ye,Ge,lt,nt,Et),E=new VS(L),K=new XS(L),pe=new n0(F),Mt=new BS(F,pe),ge=new qS(F,pe,Et,Mt),ue=new ZS(F,ge,pe,Et),Je=new KS(F,lt,P),Me=new HS(Ge),We=new dM(L,E,K,ft,lt,Mt,Me),we=new NM(L,Ge),Ne=new mM,at=new yM(ft),je=new OS(L,E,K,Ye,ue,y,p),Oe=new TM(L,ue,lt),V=new FM(F,Et,lt,Ye),Be=new kS(F,ft,Et),ut=new jS(F,ft,Et),Et.programs=We.programs,L.capabilities=lt,L.extensions=ft,L.properties=Ge,L.renderLists=Ne,L.shadowMap=Oe,L.state=Ye,L.info=Et}Ae();const ie=new UM(L,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(se,le,!1))},this.getSize=function(T){return T.set(se,le)},this.setSize=function(T,G,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,le=G,n.width=Math.floor(T*B),n.height=Math.floor(G*B),Q===!0&&(n.style.width=T+"px",n.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(se*B,le*B).floor()},this.setDrawingBufferSize=function(T,G,Q){se=T,le=G,B=Q,n.width=Math.floor(T*Q),n.height=Math.floor(G*Q),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(U)},this.setViewport=function(T,G,Q,j){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,G,Q,j),Ye.viewport(k.copy(U).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,G,Q,j){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,G,Q,j),Ye.scissor(oe.copy(te).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){Ye.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(T=!0,G=!0,Q=!0){let j=0;if(T){let W=!1;if(Y!==null){const Se=Y.texture.format;W=Se===If||Se===Uf||Se===Df}if(W){const Se=Y.texture.type,Re=Se===Oi||Se===Xr||Se===bo||Se===zs||Se===Lf||Se===bf,be=je.getClearColor(),ke=je.getClearAlpha(),et=be.r,Qe=be.g,He=be.b;Re?(w[0]=et,w[1]=Qe,w[2]=He,w[3]=ke,F.clearBufferuiv(F.COLOR,0,w)):(R[0]=et,R[1]=Qe,R[2]=He,R[3]=ke,F.clearBufferiv(F.COLOR,0,R))}else j|=F.COLOR_BUFFER_BIT}G&&(j|=F.DEPTH_BUFFER_BIT),Q&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),je.dispose(),Ne.dispose(),at.dispose(),Ge.dispose(),E.dispose(),K.dispose(),ue.dispose(),Mt.dispose(),V.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",jr),ie.removeEventListener("sessionend",ki),_i.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const T=Et.autoReset,G=Oe.enabled,Q=Oe.autoUpdate,j=Oe.needsUpdate,W=Oe.type;Ae(),Et.autoReset=T,Oe.enabled=G,Oe.autoUpdate=Q,Oe.needsUpdate=j,Oe.type=W}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function it(T){const G=T.target;G.removeEventListener("dispose",it),bt(G)}function bt(T){Yt(T),Ge.remove(T)}function Yt(T){const G=Ge.get(T).programs;G!==void 0&&(G.forEach(function(Q){We.releaseProgram(Q)}),T.isShaderMaterial&&We.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,Q,j,W,Se){G===null&&(G=Tt);const Re=W.isMesh&&W.matrixWorld.determinant()<0,be=Ho(T,G,Q,j,W);Ye.setMaterial(j,Re);let ke=Q.index,et=1;if(j.wireframe===!0){if(ke=ge.getWireframeAttribute(Q),ke===void 0)return;et=2}const Qe=Q.drawRange,He=Q.attributes.position;let pt=Qe.start*et,rt=(Qe.start+Qe.count)*et;Se!==null&&(pt=Math.max(pt,Se.start*et),rt=Math.min(rt,(Se.start+Se.count)*et)),ke!==null?(pt=Math.max(pt,0),rt=Math.min(rt,ke.count)):He!=null&&(pt=Math.max(pt,0),rt=Math.min(rt,He.count));const Bt=rt-pt;if(Bt<0||Bt===1/0)return;Mt.setup(W,j,be,Q,ke);let It,gt=Be;if(ke!==null&&(It=pe.get(ke),gt=ut,gt.setIndex(It)),W.isMesh)j.wireframe===!0?(Ye.setLineWidth(j.wireframeLinewidth*Pt()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(W.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Pt()),W.isLineSegments?gt.setMode(F.LINES):W.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else W.isPoints?gt.setMode(F.POINTS):W.isSprite&&gt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)gt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const qe=W._multiDrawStarts,kt=W._multiDrawCounts,ht=W._multiDrawCount,ln=ke?pe.get(ke).bytesPerElement:1,Hi=Ge.get(j).currentProgram.getUniforms();for(let vn=0;vn<ht;vn++)Hi.setValue(F,"_gl_DrawID",vn),gt.render(qe[vn]/ln,kt[vn])}else if(W.isInstancedMesh)gt.renderInstances(pt,Bt,W.count);else if(Q.isInstancedBufferGeometry){const qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,kt=Math.min(Q.instanceCount,qe);gt.renderInstances(pt,Bt,kt)}else gt.render(pt,Bt)};function _t(T,G,Q){T.transparent===!0&&T.side===hi&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,$r(T,G,Q),T.side=gr,T.needsUpdate=!0,$r(T,G,Q),T.side=hi):$r(T,G,Q)}this.compile=function(T,G,Q=null){Q===null&&(Q=T),_=at.get(Q),_.init(G),D.push(_),Q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),T!==Q&&T.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const j=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const be=Se[Re];_t(be,Q,W),j.add(be)}else _t(Se,Q,W),j.add(Se)}),D.pop(),_=null,j},this.compileAsync=function(T,G,Q=null){const j=this.compile(T,G,Q);return new Promise(W=>{function Se(){if(j.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&j.delete(Re)}),j.size===0){W(T);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let En=null;function _n(T){En&&En(T)}function jr(){_i.stop()}function ki(){_i.start()}const _i=new Om;_i.setAnimationLoop(_n),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(T){En=T,ie.setAnimationLoop(T),T===null?_i.stop():_i.start()},ie.addEventListener("sessionstart",jr),ie.addEventListener("sessionend",ki),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,G,Y),_=at.get(T,D.length),_.init(G),D.push(_),Te.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,de=Me.init(this.clippingPlanes,ye),S=Ne.get(T,O.length),S.init(),O.push(S),ie.enabled===!0&&ie.isPresenting===!0){const Se=L.xr.getDepthSensingMesh();Se!==null&&vi(Se,G,-1/0,L.sortObjects)}vi(T,G,0,L.sortObjects),S.finish(),L.sortObjects===!0&&S.sort(ae,re),dt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,dt&&je.addToRenderList(S,T),this.info.render.frame++,de===!0&&Me.beginShadows();const Q=_.state.shadowsArray;Oe.render(Q,T,G),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=S.opaque,W=S.transmissive;if(_.setupLights(),G.isArrayCamera){const Se=G.cameras;if(W.length>0)for(let Re=0,be=Se.length;Re<be;Re++){const ke=Se[Re];xr(j,W,T,ke)}dt&&je.render(T);for(let Re=0,be=Se.length;Re<be;Re++){const ke=Se[Re];vr(S,T,ke,ke.viewport)}}else W.length>0&&xr(j,W,T,G),dt&&je.render(T),vr(S,T,G);Y!==null&&N===0&&(P.updateMultisampleRenderTarget(Y),P.updateRenderTargetMipmap(Y)),T.isScene===!0&&T.onAfterRender(L,T,G),Mt.resetDefaultState(),C=-1,A=null,D.pop(),D.length>0?(_=D[D.length-1],de===!0&&Me.setGlobalState(L.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function vi(T,G,Q,j){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){j&&Ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const Re=ue.update(T),be=T.material;be.visible&&S.push(T,Re,be,Q,Ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const Re=ue.update(T),be=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ze.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(be)){const ke=Re.groups;for(let et=0,Qe=ke.length;et<Qe;et++){const He=ke[et],pt=be[He.materialIndex];pt&&pt.visible&&S.push(T,Re,pt,Q,Ze.z,He)}}else be.visible&&S.push(T,Re,be,Q,Ze.z,null)}}const Se=T.children;for(let Re=0,be=Se.length;Re<be;Re++)vi(Se[Re],G,Q,j)}function vr(T,G,Q,j){const W=T.opaque,Se=T.transmissive,Re=T.transparent;_.setupLightsView(Q),de===!0&&Me.setGlobalState(L.clippingPlanes,Q),j&&Ye.viewport(k.copy(j)),W.length>0&&zi(W,G,Q),Se.length>0&&zi(Se,G,Q),Re.length>0&&zi(Re,G,Q),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function xr(T,G,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[j.id]===void 0&&(_.state.transmissionRenderTarget[j.id]=new Yr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Uo:Oi,minFilter:Gr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const Se=_.state.transmissionRenderTarget[j.id],Re=j.viewport||k;Se.setSize(Re.z*L.transmissionResolutionScale,Re.w*L.transmissionResolutionScale);const be=L.getRenderTarget();L.setRenderTarget(Se),L.getClearColor(ce),he=L.getClearAlpha(),he<1&&L.setClearColor(16777215,.5),L.clear(),dt&&je.render(Q);const ke=L.toneMapping;L.toneMapping=mr;const et=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),_.setupLightsView(j),de===!0&&Me.setGlobalState(L.clippingPlanes,j),zi(T,Q,j),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,pt=G.length;He<pt;He++){const rt=G[He],Bt=rt.object,It=rt.geometry,gt=rt.material,qe=rt.group;if(gt.side===hi&&Bt.layers.test(j.layers)){const kt=gt.side;gt.side=bn,gt.needsUpdate=!0,ko(Bt,Q,j,It,gt,qe),gt.side=kt,gt.needsUpdate=!0,Qe=!0}}Qe===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}L.setRenderTarget(be),L.setClearColor(ce,he),et!==void 0&&(j.viewport=et),L.toneMapping=ke}function zi(T,G,Q){const j=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Se=T.length;W<Se;W++){const Re=T[W],be=Re.object,ke=Re.geometry,et=j===null?Re.material:j,Qe=Re.group;be.layers.test(Q.layers)&&ko(be,G,Q,ke,et,Qe)}}function ko(T,G,Q,j,W,Se){T.onBeforeRender(L,G,Q,j,W,Se),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(L,G,Q,j,T,Se),W.transparent===!0&&W.side===hi&&W.forceSinglePass===!1?(W.side=bn,W.needsUpdate=!0,L.renderBufferDirect(Q,G,j,W,T,Se),W.side=gr,W.needsUpdate=!0,L.renderBufferDirect(Q,G,j,W,T,Se),W.side=hi):L.renderBufferDirect(Q,G,j,W,T,Se),T.onAfterRender(L,G,Q,j,W,Se)}function $r(T,G,Q){G.isScene!==!0&&(G=Tt);const j=Ge.get(T),W=_.state.lights,Se=_.state.shadowsArray,Re=W.state.version,be=We.getParameters(T,W.state,Se,G,Q),ke=We.getProgramCacheKey(be);let et=j.programs;j.environment=T.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(T.isMeshStandardMaterial?K:E).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",it),et=new Map,j.programs=et);let Qe=et.get(ke);if(Qe!==void 0){if(j.currentProgram===Qe&&j.lightsStateVersion===Re)return oi(T,be),Qe}else be.uniforms=We.getUniforms(T),T.onBeforeCompile(be,L),Qe=We.acquireProgram(be,ke),et.set(ke,Qe),j.uniforms=be.uniforms;const He=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=Me.uniform),oi(T,be),j.needsLights=Al(T),j.lightsStateVersion=Re,j.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.directionalShadowMap.value=W.state.directionalShadowMap,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotShadowMap.value=W.state.spotShadowMap,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMap.value=W.state.pointShadowMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Qe,j.uniformsList=null,Qe}function zo(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Sl.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function oi(T,G){const Q=Ge.get(T);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Ho(T,G,Q,j,W){G.isScene!==!0&&(G=Tt),P.resetTextureUnits();const Se=G.fog,Re=j.isMeshStandardMaterial?G.environment:null,be=Y===null?L.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Vs,ke=(j.isMeshStandardMaterial?K:E).get(j.envMap||Re),et=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,rt=!!Q.morphAttributes.color;let Bt=mr;j.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Bt=L.toneMapping);const It=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=It!==void 0?It.length:0,qe=Ge.get(j),kt=_.state.lights;if(de===!0&&(ye===!0||T!==A)){const rn=T===A&&j.id===C;Me.setState(j,T,rn)}let ht=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==kt.state.version||qe.outputColorSpace!==be||W.isBatchedMesh&&qe.batching===!1||!W.isBatchedMesh&&qe.batching===!0||W.isBatchedMesh&&qe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&qe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&qe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&qe.instancingMorph===!1&&W.morphTexture!==null||qe.envMap!==ke||j.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==Qe||qe.morphTargets!==He||qe.morphNormals!==pt||qe.morphColors!==rt||qe.toneMapping!==Bt||qe.morphTargetsCount!==gt)&&(ht=!0):(ht=!0,qe.__version=j.version);let ln=qe.currentProgram;ht===!0&&(ln=$r(j,G,W));let Hi=!1,vn=!1,xi=!1;const Rt=ln.getUniforms(),un=qe.uniforms;if(Ye.useProgram(ln.program)&&(Hi=!0,vn=!0,xi=!0),j.id!==C&&(C=j.id,vn=!0),Hi||A!==T){Ye.buffers.depth.getReversed()?(ve.copy(T.projectionMatrix),xv(ve),Sv(ve),Rt.setValue(F,"projectionMatrix",ve)):Rt.setValue(F,"projectionMatrix",T.projectionMatrix),Rt.setValue(F,"viewMatrix",T.matrixWorldInverse);const Qt=Rt.map.cameraPosition;Qt!==void 0&&Qt.setValue(F,Ue.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&Rt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Rt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,vn=!0,xi=!0)}if(W.isSkinnedMesh){Rt.setOptional(F,W,"bindMatrix"),Rt.setOptional(F,W,"bindMatrixInverse");const rn=W.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Rt.setValue(F,"boneTexture",rn.boneTexture,P))}W.isBatchedMesh&&(Rt.setOptional(F,W,"batchingTexture"),Rt.setValue(F,"batchingTexture",W._matricesTexture,P),Rt.setOptional(F,W,"batchingIdTexture"),Rt.setValue(F,"batchingIdTexture",W._indirectTexture,P),Rt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Rt.setValue(F,"batchingColorTexture",W._colorsTexture,P));const Zt=Q.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Je.update(W,Q,ln),(vn||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,Rt.setValue(F,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(un.envMap.value=ke,un.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(un.envMapIntensity.value=G.environmentIntensity),vn&&(Rt.setValue(F,"toneMappingExposure",L.toneMappingExposure),qe.needsLights&&Vo(un,xi),Se&&j.fog===!0&&we.refreshFogUniforms(un,Se),we.refreshMaterialUniforms(un,j,B,le,_.state.transmissionRenderTarget[T.id]),Sl.upload(F,zo(qe),un,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Sl.upload(F,zo(qe),un,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Rt.setValue(F,"center",W.center),Rt.setValue(F,"modelViewMatrix",W.modelViewMatrix),Rt.setValue(F,"normalMatrix",W.normalMatrix),Rt.setValue(F,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const rn=j.uniformsGroups;for(let Qt=0,vt=rn.length;Qt<vt;Qt++){const ai=rn[Qt];V.update(ai,ln),V.bind(ai,ln)}}return ln}function Vo(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Al(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,G,Q){Ge.get(T.texture).__webglTexture=G,Ge.get(T.depthTexture).__webglTexture=Q;const j=Ge.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Q===void 0,j.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){const Q=Ge.get(T);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0};const Go=F.createFramebuffer();this.setRenderTarget=function(T,G=0,Q=0){Y=T,H=G,N=Q;let j=!0,W=null,Se=!1,Re=!1;if(T){const ke=Ge.get(T);if(ke.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(F.FRAMEBUFFER,null),j=!1;else if(ke.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(ke.__hasExternalTextures)P.rebindTextures(T,Ge.get(T.texture).__webglTexture,Ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(ke.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?W=Qe[G][Q]:W=Qe[G],Se=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?W=Ge.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?W=Qe[Q]:W=Qe,k.copy(T.viewport),oe.copy(T.scissor),ee=T.scissorTest}else k.copy(U).multiplyScalar(B).floor(),oe.copy(te).multiplyScalar(B).floor(),ee=Ie;if(Q!==0&&(W=Go),Ye.bindFramebuffer(F.FRAMEBUFFER,W)&&j&&Ye.drawBuffers(T,W),Ye.viewport(k),Ye.scissor(oe),Ye.setScissorTest(ee),Se){const ke=Ge.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,ke.__webglTexture,Q)}else if(Re){const ke=Ge.get(T.texture),et=G;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.__webglTexture,Q,et)}else if(T!==null&&Q!==0){const ke=Ge.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,Q)}C=-1},this.readRenderTargetPixels=function(T,G,Q,j,W,Se,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(be=be[Re]),be){Ye.bindFramebuffer(F.FRAMEBUFFER,be);try{const ke=T.texture,et=ke.format,Qe=ke.type;if(!lt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-j&&Q>=0&&Q<=T.height-W&&F.readPixels(G,Q,j,W,nt.convert(et),nt.convert(Qe),Se)}finally{const ke=Y!==null?Ge.get(Y).__webglFramebuffer:null;Ye.bindFramebuffer(F.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,G,Q,j,W,Se,Re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(be=be[Re]),be){const ke=T.texture,et=ke.format,Qe=ke.type;if(!lt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=T.width-j&&Q>=0&&Q<=T.height-W){Ye.bindFramebuffer(F.FRAMEBUFFER,be);const He=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,He),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(G,Q,j,W,nt.convert(et),nt.convert(Qe),0);const pt=Y!==null?Ge.get(Y).__webglFramebuffer:null;Ye.bindFramebuffer(F.FRAMEBUFFER,pt);const rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await vv(F,rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,He),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.deleteBuffer(He),F.deleteSync(rt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,Q=0){T.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-Q),W=Math.floor(T.image.width*j),Se=Math.floor(T.image.height*j),Re=G!==null?G.x:0,be=G!==null?G.y:0;P.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Re,be,W,Se),Ye.unbindTexture()};const Wo=F.createFramebuffer(),Xo=F.createFramebuffer();this.copyTextureToTexture=function(T,G,Q=null,j=null,W=0,Se=null){T.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],G=arguments[2],Se=arguments[3]||0,Q=null),Se===null&&(W!==0?(Ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=W,W=0):Se=0);let Re,be,ke,et,Qe,He,pt,rt,Bt;const It=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(Q!==null)Re=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,ke=Q.isBox3?Q.max.z-Q.min.z:1,et=Q.min.x,Qe=Q.min.y,He=Q.isBox3?Q.min.z:0;else{const Zt=Math.pow(2,-W);Re=Math.floor(It.width*Zt),be=Math.floor(It.height*Zt),T.isDataArrayTexture?ke=It.depth:T.isData3DTexture?ke=Math.floor(It.depth*Zt):ke=1,et=0,Qe=0,He=0}j!==null?(pt=j.x,rt=j.y,Bt=j.z):(pt=0,rt=0,Bt=0);const gt=nt.convert(G.format),qe=nt.convert(G.type);let kt;G.isData3DTexture?(P.setTexture3D(G,0),kt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(P.setTexture2DArray(G,0),kt=F.TEXTURE_2D_ARRAY):(P.setTexture2D(G,0),kt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const ht=F.getParameter(F.UNPACK_ROW_LENGTH),ln=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Hi=F.getParameter(F.UNPACK_SKIP_PIXELS),vn=F.getParameter(F.UNPACK_SKIP_ROWS),xi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,It.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,It.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,He);const Rt=T.isDataArrayTexture||T.isData3DTexture,un=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Zt=Ge.get(T),rn=Ge.get(G),Qt=Ge.get(Zt.__renderTarget),vt=Ge.get(rn.__renderTarget);Ye.bindFramebuffer(F.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ai=0;ai<ke;ai++)Rt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.get(T).__webglTexture,W,He+ai),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.get(G).__webglTexture,Se,Bt+ai)),F.blitFramebuffer(et,Qe,Re,be,pt,rt,Re,be,F.DEPTH_BUFFER_BIT,F.NEAREST);Ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Ge.has(T)){const Zt=Ge.get(T),rn=Ge.get(G);Ye.bindFramebuffer(F.READ_FRAMEBUFFER,Wo),Ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,Xo);for(let Qt=0;Qt<ke;Qt++)Rt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.__webglTexture,W,He+Qt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.__webglTexture,W),un?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rn.__webglTexture,Se,Bt+Qt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rn.__webglTexture,Se),W!==0?F.blitFramebuffer(et,Qe,Re,be,pt,rt,Re,be,F.COLOR_BUFFER_BIT,F.NEAREST):un?F.copyTexSubImage3D(kt,Se,pt,rt,Bt+Qt,et,Qe,Re,be):F.copyTexSubImage2D(kt,Se,pt,rt,et,Qe,Re,be);Ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else un?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(kt,Se,pt,rt,Bt,Re,be,ke,gt,qe,It.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(kt,Se,pt,rt,Bt,Re,be,ke,gt,It.data):F.texSubImage3D(kt,Se,pt,rt,Bt,Re,be,ke,gt,qe,It):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,pt,rt,Re,be,gt,qe,It.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,pt,rt,It.width,It.height,gt,It.data):F.texSubImage2D(F.TEXTURE_2D,Se,pt,rt,Re,be,gt,qe,It);F.pixelStorei(F.UNPACK_ROW_LENGTH,ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ln),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Hi),F.pixelStorei(F.UNPACK_SKIP_ROWS,vn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xi),Se===0&&G.generateMipmaps&&F.generateMipmap(kt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(T,G,Q=null,j=null,W=0){return T.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,j=arguments[1]||null,T=arguments[2],G=arguments[3],W=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,G,Q,j,W)},this.initRenderTarget=function(T){Ge.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Ye.unbindTexture()},this.resetState=function(){H=0,N=0,Y=null,Ye.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=yt._getUnpackColorSpace()}}const BM=()=>{const o=Bc.useRef(null);return Bc.useEffect(()=>{const e=new Wv,n=new qn(75,window.innerWidth/window.innerHeight,.1,1e3),r=new OM({alpha:!0});r.setSize(window.innerWidth,window.innerHeight),o.current.appendChild(r.domElement);const u=new Qv().load("/image.png"),f=new Bo(3,3),d=new Ff({map:u,transparent:!0,side:hi}),p=new mi(f,d);e.add(p),n.position.z=5;const m=()=>{requestAnimationFrame(m),p.rotation.y+=.01,r.render(e,n)};m();const g=()=>{const v=window.innerWidth,x=window.innerHeight;r.setSize(v,x),n.aspect=v/x,n.updateProjectionMatrix()};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g),o.current.removeChild(r.domElement)}},[]),an.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,zIndex:-1}})},kM=()=>an.jsx("div",{className:"nav",children:an.jsxs("div",{className:"container",children:[an.jsx("div",{class:"btn",children:"Home"}),an.jsx("div",{class:"btn",children:"Contatanos"}),an.jsx("div",{class:"btn",children:"Prendas"}),an.jsx("div",{class:"btn",children:"FAQ"}),an.jsx("svg",{className:"outline",width:"400",height:"60",viewBox:"0 0 400 60",xmlns:"http://www.w3.org/2000/svg",children:an.jsx("rect",{className:"rect",pathLength:"100",x:"0",y:"0",width:"400",height:"60",fill:"transparent",strokeWidth:"5"})})]})}),zM=()=>an.jsxs("div",{children:[an.jsx(kM,{}),an.jsx(BM,{}),an.jsxs("div",{style:{position:"relative",zIndex:1,color:"white",textAlign:"center",marginTop:"80px"},children:[an.jsx("h1",{children:"Bienvenido"}),an.jsx("p",{children:"Este es mi sitio web"})]})]});R_.createRoot(document.getElementById("root")).render(an.jsx(Bc.StrictMode,{children:an.jsx(zM,{})}));
