(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PhotoPassport"] = factory();
	else
		root["PhotoPassport"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return y; });
/* unused harmony export isValidElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return n; });
var n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),null!=n.vnode&&n.vnode(r),r}function y(){return{current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?_(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!g.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(g)}function g(){for(var n;g.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=i,t=$(f,o,i,l.__n,void 0!==f.ownerSVGElement,null!=o.__h?[r]:null,u,null==r?_(o):r,o.__h),j(u,o),t!=r&&w(o)))})}function m(n,l,u,i,t,o,r,c,s,h){var y,d,w,k,g,m,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(p,{children:k},null,null,null):null!=k.__e||null!=k.__c?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null}g=$(n,k,w=w||f,t,o,r,c,s,h),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||g,k)),null!=g?(null==m&&(m=g),s=x(n,k,w,A,r,g,s),h||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w))}if(u.__e=m,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&L(A[y],A[y]);if(b)for(y=0;y<b.length;y++)I(b[y],b[++y],b[++y])}function b(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){b(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else{for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r}return void 0!==f?f:o.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px"}function C(n,l,u,i,t){var o,r,f;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else"o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l+o]=u,f=o?N:z,u?i||n.addEventListener(l,f,o):n.removeEventListener(l,f,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u))}function z(l){this.l[l.type+!1](n.event?n.event(l):l)}function N(l){this.l[l.type+!0](n.event?n.event(l):l)}function T(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&T(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)))}function $(l,u,i,t,o,r,f,e,c){var a,h,v,y,_,w,k,g,b,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(g,x):(u.__c=h=new d(g,x),h.constructor=P,h.render=M),b&&b.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,P.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,h.__h.length&&f.push(h),T(u,e,l);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,w)})}h.context=x,h.props=g,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),k&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=H(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),n.__e(l,u,i)}return u.__e}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function H(n,l,u,i,t,o,r,c){var s,a,h,v,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1}if(null===l.type)p===d||c&&n.data===d||(n.data=d);else{if(null!=o&&(o=e.slice.call(n.childNodes)),h=(p=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===n.innerHTML)||(n.innerHTML=v&&v.__html||""))}A(n,d,p,t,c),v?l.__k=[]:(s=l.props.children,m(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&(s!==n.value||"progress"===l.type&&!s)&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1))}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&a(o)}function M(n,l,u){return this.constructor(n,u)}function O(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=h(p,null,[l]),c=[],$(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),j(c,l)}function S(n,l){O(n,l,o)}function q(n,l,u){var i,t,o,r=arguments,f=s({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n,u,i){return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t,o=l.__h;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return l.__h=o,u.__E=u}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,o=f,r=0;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(6);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "useState", function() { return /* reexport */ m; });
__webpack_require__.d(__webpack_exports__, "useReducer", function() { return /* reexport */ p; });
__webpack_require__.d(__webpack_exports__, "useEffect", function() { return /* reexport */ y; });
__webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return /* reexport */ l; });
__webpack_require__.d(__webpack_exports__, "useRef", function() { return /* reexport */ h; });
__webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return /* reexport */ s; });
__webpack_require__.d(__webpack_exports__, "useMemo", function() { return /* reexport */ _; });
__webpack_require__.d(__webpack_exports__, "useCallback", function() { return /* reexport */ A; });
__webpack_require__.d(__webpack_exports__, "useContext", function() { return /* reexport */ F; });
__webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return /* reexport */ T; });
__webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return /* reexport */ d; });
__webpack_require__.d(__webpack_exports__, "createElement", function() { return /* reexport */ preact_module["f" /* createElement */]; });
__webpack_require__.d(__webpack_exports__, "createContext", function() { return /* reexport */ preact_module["e" /* createContext */]; });
__webpack_require__.d(__webpack_exports__, "createRef", function() { return /* reexport */ preact_module["g" /* createRef */]; });
__webpack_require__.d(__webpack_exports__, "Fragment", function() { return /* reexport */ preact_module["b" /* Fragment */]; });
__webpack_require__.d(__webpack_exports__, "Component", function() { return /* reexport */ preact_module["a" /* Component */]; });
__webpack_require__.d(__webpack_exports__, "version", function() { return /* binding */ tn; });
__webpack_require__.d(__webpack_exports__, "Children", function() { return /* binding */ O; });
__webpack_require__.d(__webpack_exports__, "render", function() { return /* binding */ H; });
__webpack_require__.d(__webpack_exports__, "hydrate", function() { return /* binding */ Z; });
__webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return /* binding */ on; });
__webpack_require__.d(__webpack_exports__, "createPortal", function() { return /* binding */ P; });
__webpack_require__.d(__webpack_exports__, "createFactory", function() { return /* binding */ en; });
__webpack_require__.d(__webpack_exports__, "cloneElement", function() { return /* binding */ un; });
__webpack_require__.d(__webpack_exports__, "isValidElement", function() { return /* binding */ rn; });
__webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return /* binding */ cn; });
__webpack_require__.d(__webpack_exports__, "PureComponent", function() { return /* binding */ C; });
__webpack_require__.d(__webpack_exports__, "memo", function() { return /* binding */ compat_module_g; });
__webpack_require__.d(__webpack_exports__, "forwardRef", function() { return /* binding */ N; });
__webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return /* binding */ ln; });
__webpack_require__.d(__webpack_exports__, "StrictMode", function() { return /* binding */ fn; });
__webpack_require__.d(__webpack_exports__, "Suspense", function() { return /* binding */ compat_module_F; });
__webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return /* binding */ D; });
__webpack_require__.d(__webpack_exports__, "lazy", function() { return /* binding */ compat_module_j; });
__webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return /* binding */ nn; });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.module.js
var preact_module = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_t,hooks_module_u,hooks_module_r,hooks_module_o=0,hooks_module_i=[],c=preact_module["j" /* options */].__r,f=preact_module["j" /* options */].diffed,hooks_module_e=preact_module["j" /* options */].__c,a=preact_module["j" /* options */].unmount;function v(t,r){preact_module["j" /* options */].__h&&preact_module["j" /* options */].__h(hooks_module_u,t,hooks_module_o||r),hooks_module_o=0;var i=hooks_module_u.__H||(hooks_module_u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function m(n){return hooks_module_o=1,p(k,n)}function p(n,r,o){var i=v(hooks_module_t++,2);return i.t=n,i.__c||(i.__c=hooks_module_u,i.__=[o?o(r):k(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}]),i.__}function y(r,o){var i=v(hooks_module_t++,3);!preact_module["j" /* options */].__s&&j(i.__H,o)&&(i.__=r,i.__H=o,hooks_module_u.__H.__h.push(i))}function l(r,o){var i=v(hooks_module_t++,4);!preact_module["j" /* options */].__s&&j(i.__H,o)&&(i.__=r,i.__H=o,hooks_module_u.__h.push(i))}function h(n){return hooks_module_o=5,_(function(){return{current:n}},[])}function s(n,t,u){hooks_module_o=6,l(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function _(n,u){var r=v(hooks_module_t++,7);return j(r.__H,u)?(r.__H=u,r.__h=n,r.__=n()):r.__}function A(n,t){return hooks_module_o=8,_(function(){return n},t)}function F(n){var r=hooks_module_u.context[n.__c],o=v(hooks_module_t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(hooks_module_u)),r.props.value):n.__}function T(t,u){preact_module["j" /* options */].useDebugValue&&preact_module["j" /* options */].useDebugValue(u?u(t):t)}function d(n){var r=v(hooks_module_t++,10),o=m();return r.__=n,hooks_module_u.componentDidCatch||(hooks_module_u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function q(){hooks_module_i.some(function(t){if(t.__P)try{t.__H.__h.forEach(b),t.__H.__h.forEach(g),t.__H.__h=[]}catch(u){return t.__H.__h=[],preact_module["j" /* options */].__e(u,t.__v),!0}}),hooks_module_i=[]}preact_module["j" /* options */].__r=function(n){c&&c(n),hooks_module_t=0;var r=(hooks_module_u=n.__c).__H;r&&(r.__h.forEach(b),r.__h.forEach(g),r.__h=[])},preact_module["j" /* options */].diffed=function(t){f&&f(t);var u=t.__c;u&&u.__H&&u.__H.__h.length&&(1!==hooks_module_i.push(u)&&hooks_module_r===preact_module["j" /* options */].requestAnimationFrame||((hooks_module_r=preact_module["j" /* options */].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),x&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);x&&(t=requestAnimationFrame(u))})(q))},preact_module["j" /* options */].__c=function(t,u){u.some(function(t){try{t.__h.forEach(b),t.__h=t.__h.filter(function(n){return!n.__||g(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact_module["j" /* options */].__e(r,t.__v)}}),hooks_module_e&&hooks_module_e(t,u)},preact_module["j" /* options */].unmount=function(t){a&&a(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(b)}catch(t){preact_module["j" /* options */].__e(t,u.__v)}};var x="function"==typeof requestAnimationFrame;function b(n){"function"==typeof n.u&&n.u()}function g(n){n.u=n.__()}function j(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function k(n,t){return"function"==typeof t?t(n):t}

// CONCATENATED MODULE: ./node_modules/preact/compat/dist/compat.module.js
function S(n,t){for(var e in t)n[e]=t[e];return n}function w(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function C(n){this.props=n}function compat_module_g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:w(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact_module["f" /* createElement */])(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(C.prototype=new preact_module["a" /* Component */]).isPureReactComponent=!0,C.prototype.shouldComponentUpdate=function(n,t){return w(this.props,n)||w(this.state,t)};var R=preact_module["j" /* options */].__b;preact_module["j" /* options */].__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n)};var compat_module_x="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function N(n){function t(t,e){var r=S({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=compat_module_x,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var compat_module_k=function(n,t){return null==n?null:Object(preact_module["l" /* toChildArray */])(Object(preact_module["l" /* toChildArray */])(n).map(t))},O={map:compat_module_k,forEach:compat_module_k,count:function(n){return n?Object(preact_module["l" /* toChildArray */])(n).length:0},only:function(n){var t=Object(preact_module["l" /* toChildArray */])(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact_module["l" /* toChildArray */]},compat_module_A=preact_module["j" /* options */].__e;function L(n){return n&&((n=S({},n)).__c=null,n.__k=n.__k&&n.__k.map(L)),n}function U(n){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(U)),n}function compat_module_F(){this.__u=0,this.t=null,this.__b=null}function M(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function compat_module_j(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact_module["f" /* createElement */])(e,u)}return u.displayName="Lazy",u.__f=!0,u}function D(){this.u=null,this.o=null}preact_module["j" /* options */].__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t.__c);compat_module_A(n,t,e)},(compat_module_F.prototype=new preact_module["a" /* Component */]).__c=function(n,t){var e=this;null==e.t&&(e.t=[]),e.t.push(t);var r=M(e.__v),u=!1,o=function(){u||(u=!0,t.componentWillUnmount=t.__c,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c()};var i=function(){var n;if(!--e.__u)for(e.__v.__k[0]=U(e.state.__e),e.setState({__e:e.__b=null});n=e.t.pop();)n.forceUpdate()},c=e.__v;c&&!0===c.__h||e.__u++||e.setState({__e:e.__b=e.__v.__k[0]}),n.then(o,o)},compat_module_F.prototype.componentWillUnmount=function(){this.t=[]},compat_module_F.prototype.render=function(n,t){this.__b&&(this.__v.__k&&(this.__v.__k[0]=L(this.__b)),this.__b=null);var e=t.__e&&Object(preact_module["f" /* createElement */])(preact_module["b" /* Fragment */],null,n.fallback);return e&&(e.__h=null),[Object(preact_module["f" /* createElement */])(preact_module["b" /* Fragment */],null,t.__e?null:n.children),e]};var I=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function compat_module_T(n){return this.getChildContext=function(){return n.context},n.children}function W(n){var t=this,e=n.i,r=Object(preact_module["f" /* createElement */])(compat_module_T,{context:t.context},n.__v);t.componentWillUnmount=function(){var n=t.l.parentNode;n&&n.removeChild(t.l),Object(preact_module["c" /* __u */])(t.s)},t.i&&t.i!==e&&(t.componentWillUnmount(),t.h=!1),n.__v?t.h?(e.__k=t.__k,Object(preact_module["k" /* render */])(r,e),t.__k=e.__k):(t.l=document.createTextNode(""),t.__k=e.__k,Object(preact_module["i" /* hydrate */])("",e),e.appendChild(t.l),t.h=!0,t.i=e,Object(preact_module["k" /* render */])(r,e,t.l),e.__k=t.__k,t.__k=t.l.__k):t.h&&t.componentWillUnmount(),t.s=r}function P(n,t){return Object(preact_module["f" /* createElement */])(W,{__v:n,i:t})}(D.prototype=new preact_module["a" /* Component */]).__e=function(n){var t=this,e=M(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),I(t,n,r)):u()};e?e(o):o()}},D.prototype.render=function(n){this.u=null,this.o=new Map;var t=Object(preact_module["l" /* toChildArray */])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){I(n,e,t)})};var z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;function H(n,t,e){return null==t.__k&&(t.textContent=""),Object(preact_module["k" /* render */])(n,t),"function"==typeof e&&e(),n?n.__c:null}function Z(n,t,e){return Object(preact_module["i" /* hydrate */])(n,t),"function"==typeof e&&e(),n?n.__c:null}preact_module["a" /* Component */].prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact_module["a" /* Component */].prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var Y=preact_module["j" /* options */].event;function $(){}function compat_module_q(){return this.cancelBubble}function G(){return this.defaultPrevented}preact_module["j" /* options */].event=function(n){return Y&&(n=Y(n)),n.persist=$,n.isPropagationStopped=compat_module_q,n.isDefaultPrevented=G,n.nativeEvent=n};var J,K={configurable:!0,get:function(){return this.class}},Q=preact_module["j" /* options */].vnode;preact_module["j" /* options */].vnode=function(n){n.$$typeof=z;var t=n.type,e=n.props;if("function"==typeof t)(K.enumerable="className"in e)&&(e.class=e.className),Object.defineProperty(e,"className",K);else if(t){var r={};for(var u in e){var o=e[u];"className"===u&&(r.class=o,K.enumerable=!0),"defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!B.test(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():V.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o}Object.defineProperty(r,"className",K),"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(preact_module["l" /* toChildArray */])(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),n.props=r}Q&&Q(n)};var X=preact_module["j" /* options */].__r;preact_module["j" /* options */].__r=function(n){X&&X(n),J=n.__c};var nn={ReactCurrentDispatcher:{current:{readContext:function(n){return J.__n[n.__c].props.value}}}},tn="16.8.0";function en(n){return preact_module["f" /* createElement */].bind(null,n)}function rn(n){return!!n&&n.$$typeof===z}function un(n){return rn(n)?preact_module["d" /* cloneElement */].apply(null,arguments):n}function on(n){return!!n.__k&&(Object(preact_module["k" /* render */])(null,n),!0)}function cn(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},fn=preact_module["b" /* Fragment */];/* harmony default export */ var compat_module = __webpack_exports__["default"] = ({useState:m,useReducer:p,useEffect:y,useLayoutEffect:l,useRef:h,useImperativeHandle:s,useMemo:_,useCallback:A,useContext:F,useDebugValue:T,version:"16.8.0",Children:O,render:H,hydrate:Z,unmountComponentAtNode:on,createPortal:P,createElement:preact_module["f" /* createElement */],createContext:preact_module["e" /* createContext */],createFactory:en,cloneElement:un,createRef:preact_module["g" /* createRef */],Fragment:preact_module["b" /* Fragment */],isValidElement:rn,findDOMNode:cn,Component:preact_module["a" /* Component */],PureComponent:C,memo:compat_module_g,forwardRef:N,unstable_batchedUpdates:ln,StrictMode:preact_module["b" /* Fragment */],Suspense:compat_module_F,SuspenseList:D,lazy:compat_module_j,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:nn});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* interact.js 1.9.22 | https://raw.github.com/taye/interact.js/master/LICENSE */
!function(t){if(true)module.exports=t();else {}}((function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(t){return!(!t||!t.Window)&&t instanceof t.Window};var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.init=o,e.getWindow=function(e){if((0,t.default)(e))return e;return(e.ownerDocument||e).defaultView||r.window},e.window=e.realWindow=void 0;var n=void 0;e.realWindow=n;var r=void 0;function o(t){e.realWindow=n=t;var o=t.document.createTextNode("");o.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(o)===o&&(t=t.wrap(t)),e.window=r=t}e.window=r,"undefined"!=typeof window&&window&&o(window);var i={};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=function(t){return!!t&&"object"===a(t)},l=function(t){return"function"==typeof t},u={window:function(n){return n===e.window||(0,t.default)(n)},docFrag:function(t){return s(t)&&11===t.nodeType},object:s,func:l,number:function(t){return"number"==typeof t},bool:function(t){return"boolean"==typeof t},string:function(t){return"string"==typeof t},element:function(t){if(!t||"object"!==a(t))return!1;var n=e.getWindow(t)||e.window;return/object|function/.test(a(n.Element))?t instanceof n.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:function(t){return s(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString())},array:function(t){return s(t)&&void 0!==t.length&&l(t.splice)}};i.default=u;var c={};function f(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.prepared.axis;"x"===n?(e.coords.cur.page.y=e.coords.start.page.y,e.coords.cur.client.y=e.coords.start.client.y,e.coords.velocity.client.y=0,e.coords.velocity.page.y=0):"y"===n&&(e.coords.cur.page.x=e.coords.start.page.x,e.coords.cur.client.x=e.coords.start.client.x,e.coords.velocity.client.x=0,e.coords.velocity.page.x=0)}}function d(t){var e=t.iEvent,n=t.interaction;if("drag"===n.prepared.name){var r=n.prepared.axis;if("x"===r||"y"===r){var o="x"===r?"y":"x";e.page[o]=n.coords.start.page[o],e.client[o]=n.coords.start.client[o],e.delta[o]=0}}}Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var p={id:"actions/drag",install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.draggable=p.draggable,e.map.drag=p,e.methodDict.drag="draggable",r.actions.drag=p.defaults},listeners:{"interactions:before-action-move":f,"interactions:action-resume":f,"interactions:action-move":d,"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.buttons,o=n.options.drag;if(o&&o.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(r&n.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===o.lockAxis?o.startAxis:o.lockAxis},!1}},draggable:function(t){return i.default.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):i.default.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:f,move:d,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},v=p;c.default=v;var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=void 0;var g={init:function(t){var e=t;g.document=e.document,g.DocumentFragment=e.DocumentFragment||y,g.SVGElement=e.SVGElement||y,g.SVGSVGElement=e.SVGSVGElement||y,g.SVGElementInstance=e.SVGElementInstance||y,g.Element=e.Element||y,g.HTMLElement=e.HTMLElement||g.Element,g.Event=e.Event,g.Touch=e.Touch||y,g.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function y(){}var m=g;h.default=m;var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var x={init:function(t){var n=h.default.Element,r=e.window.navigator;x.supportsTouch="ontouchstart"in t||i.default.func(t.DocumentTouch)&&h.default.document instanceof t.DocumentTouch,x.supportsPointerEvent=!1!==r.pointerEnabled&&!!h.default.PointerEvent,x.isIOS=/iP(hone|od|ad)/.test(r.platform),x.isIOS7=/iP(hone|od|ad)/.test(r.platform)&&/OS 7[^\d]/.test(r.appVersion),x.isIe9=/MSIE 9/.test(r.userAgent),x.isOperaMobile="Opera"===r.appName&&x.supportsTouch&&/Presto/.test(r.userAgent),x.prefixedMatchesSelector="matches"in n.prototype?"matches":"webkitMatchesSelector"in n.prototype?"webkitMatchesSelector":"mozMatchesSelector"in n.prototype?"mozMatchesSelector":"oMatchesSelector"in n.prototype?"oMatchesSelector":"msMatchesSelector",x.pEventTypes=x.supportsPointerEvent?h.default.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,x.wheelEvent="onmousewheel"in h.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var w=x;b.default=w;var _={};function S(t){var e=t.parentNode;if(i.default.docFrag(e)){for(;(e=e.host)&&i.default.docFrag(e););return e}return e}function P(t,n){return e.window!==e.realWindow&&(n=n.replace(/\/deep\//g," ")),t[b.default.prefixedMatchesSelector](n)}Object.defineProperty(_,"__esModule",{value:!0}),_.nodeContains=function(t,e){if(t.contains)return t.contains(e);for(;e;){if(e===t)return!0;e=e.parentNode}return!1},_.closest=function(t,e){for(;i.default.element(t);){if(P(t,e))return t;t=S(t)}return null},_.parentNode=S,_.matchesSelector=P,_.indexOfDeepestElement=function(t){for(var n,r=[],o=0;o<t.length;o++){var i=t[o],a=t[n];if(i&&o!==n)if(a){var s=O(i),l=O(a);if(s!==i.ownerDocument)if(l!==i.ownerDocument)if(s!==l){r=r.length?r:E(a);var u=void 0;if(a instanceof h.default.HTMLElement&&i instanceof h.default.SVGElement&&!(i instanceof h.default.SVGSVGElement)){if(i===l)continue;u=i.ownerSVGElement}else u=i;for(var c=E(u,a.ownerDocument),f=0;c[f]&&c[f]===r[f];)f++;for(var d=[c[f-1],c[f],r[f]],p=d[0].lastChild;p;){if(p===d[1]){n=o,r=c;break}if(p===d[2])break;p=p.previousSibling}}else v=i,g=a,y=void 0,m=void 0,y=parseInt(e.getWindow(v).getComputedStyle(v).zIndex,10)||0,m=parseInt(e.getWindow(g).getComputedStyle(g).zIndex,10)||0,y>=m&&(n=o);else n=o}else n=o}var v,g,y,m;return n},_.matchesUpTo=function(t,e,n){for(;i.default.element(t);){if(P(t,e))return!0;if((t=S(t))===n)return P(t,e)}return!1},_.getActualElement=function(t){return t.correspondingUseElement||t},_.getScrollXY=T,_.getElementClientRect=M,_.getElementRect=function(t){var n=M(t);if(!b.default.isIOS7&&n){var r=T(e.getWindow(t));n.left+=r.x,n.right+=r.x,n.top+=r.y,n.bottom+=r.y}return n},_.getPath=function(t){var e=[];for(;t;)e.push(t),t=S(t);return e},_.trySelector=function(t){if(!i.default.string(t))return!1;return h.default.document.querySelector(t),!0};var O=function(t){return t.parentNode||t.host};function E(t,e){for(var n,r=[],o=t;(n=O(o))&&o!==e&&n!==o.ownerDocument;)r.unshift(o),o=n;return r}function T(t){return{x:(t=t||e.window).scrollX||t.document.documentElement.scrollLeft,y:t.scrollY||t.document.documentElement.scrollTop}}function M(t){var e=t instanceof h.default.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(t,e){for(var n in e)t[n]=e[n];return t};var k={};function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function D(t,e,n){return"parent"===t?(0,_.parentNode)(n):"self"===t?e.getRect(n):(0,_.closest)(n,t)}Object.defineProperty(k,"__esModule",{value:!0}),k.getStringOptionResult=D,k.resolveRectLike=function(t,e,n,r){var o=t;i.default.string(o)?o=D(o,e,n):i.default.func(o)&&(o=o.apply(void 0,function(t){if(Array.isArray(t))return I(t)}(a=r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(a)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var a;i.default.element(o)&&(o=(0,_.getElementRect)(o));return o},k.rectToXY=function(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}},k.xywhToTlbr=function(t){!t||"left"in t&&"top"in t||((t=(0,j.default)({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height);return t},k.tlbrToXywh=function(t){!t||"x"in t&&"y"in t||((t=(0,j.default)({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y);return t},k.addEdges=function(t,e,n){t.left&&(e.left+=n.x);t.right&&(e.right+=n.x);t.top&&(e.top+=n.y);t.bottom&&(e.bottom+=n.y);e.width=e.right-e.left,e.height=e.bottom-e.top};var A={};Object.defineProperty(A,"__esModule",{value:!0}),A.default=function(t,e,n){var r=t.options[n],o=r&&r.origin||t.options.origin,i=(0,k.resolveRectLike)(o,t,e,[t&&e]);return(0,k.rectToXY)(i)||{x:0,y:0}};var z={};function C(t){return t.trim().split(/ +/)}Object.defineProperty(z,"__esModule",{value:!0}),z.default=function t(e,n,r){r=r||{},i.default.string(e)&&-1!==e.search(" ")&&(e=C(e));if(i.default.array(e))return e.reduce((function(e,o){return(0,j.default)(e,t(o,n,r))}),r);i.default.object(e)&&(n=e,e="");if(i.default.func(n))r[e]=r[e]||[],r[e].push(n);else if(i.default.array(n))for(var o=0;o<n.length;o++){var a;a=n[o],t(e,a,r)}else if(i.default.object(n))for(var s in n){var l=C(s).map((function(t){return"".concat(e).concat(t)}));t(l,n[s],r)}return r};var R={};Object.defineProperty(R,"__esModule",{value:!0}),R.default=void 0;R.default=function(t,e){return Math.sqrt(t*t+e*e)};var F={};function X(t,e){for(var n in e){var r=X.prefixedPropREs,o=!1;for(var i in r)if(0===n.indexOf(i)&&r[i].test(n)){o=!0;break}o||"function"==typeof e[n]||(t[n]=e[n])}return t}Object.defineProperty(F,"__esModule",{value:!0}),F.default=void 0,X.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};var Y=X;F.default=Y;var W={};function L(t){return t instanceof h.default.Event||t instanceof h.default.Touch}function B(t,e,n){return t=t||"page",(n=n||{}).x=e[t+"X"],n.y=e[t+"Y"],n}function U(t,e){return e=e||{x:0,y:0},b.default.isOperaMobile&&L(t)?(B("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):B("page",t,e),e}function N(t,e){return e=e||{},b.default.isOperaMobile&&L(t)?B("screen",t,e):B("client",t,e),e}function V(t){var e=[];return i.default.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function q(t){for(var e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<t.length;n++){var r=t[n];for(var o in e)e[o]+=r[o]}for(var i in e)e[i]/=t.length;return e}Object.defineProperty(W,"__esModule",{value:!0}),W.copyCoords=function(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp},W.setCoordDeltas=function(t,e,n){t.page.x=n.page.x-e.page.x,t.page.y=n.page.y-e.page.y,t.client.x=n.client.x-e.client.x,t.client.y=n.client.y-e.client.y,t.timeStamp=n.timeStamp-e.timeStamp},W.setCoordVelocity=function(t,e){var n=Math.max(e.timeStamp/1e3,.001);t.page.x=e.page.x/n,t.page.y=e.page.y/n,t.client.x=e.client.x/n,t.client.y=e.client.y/n,t.timeStamp=n},W.setZeroCoords=function(t){t.page.x=0,t.page.y=0,t.client.x=0,t.client.y=0},W.isNativePointer=L,W.getXY=B,W.getPageXY=U,W.getClientXY=N,W.getPointerId=function(t){return i.default.number(t.pointerId)?t.pointerId:t.identifier},W.setCoords=function(t,e,n){var r=e.length>1?q(e):e[0];U(r,t.page),N(r,t.client),t.timeStamp=n},W.getTouchPair=V,W.pointerAverage=q,W.touchBBox=function(t){if(!t.length)return null;var e=V(t),n=Math.min(e[0].pageX,e[1].pageX),r=Math.min(e[0].pageY,e[1].pageY),o=Math.max(e[0].pageX,e[1].pageX),i=Math.max(e[0].pageY,e[1].pageY);return{x:n,y:r,left:n,top:r,right:o,bottom:i,width:o-n,height:i-r}},W.touchDistance=function(t,e){var n=e+"X",r=e+"Y",o=V(t),i=o[0][n]-o[1][n],a=o[0][r]-o[1][r];return(0,R.default)(i,a)},W.touchAngle=function(t,e){var n=e+"X",r=e+"Y",o=V(t),i=o[1][n]-o[0][n],a=o[1][r]-o[0][r];return 180*Math.atan2(a,i)/Math.PI},W.getPointerType=function(t){return i.default.string(t.pointerType)?t.pointerType:i.default.number(t.pointerType)?[void 0,void 0,"touch","pen","mouse"][t.pointerType]:/touch/.test(t.type)||t instanceof h.default.Touch?"touch":"mouse"},W.getEventTargets=function(t){var e=i.default.func(t.composedPath)?t.composedPath():t.path;return[_.getActualElement(e?e[0]:t.target),_.getActualElement(t.currentTarget)]},W.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},W.coordsToEvent=function(t){return{coords:t,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},Object.defineProperty(W,"pointerExtend",{enumerable:!0,get:function(){return F.default}});var $={};function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty($,"__esModule",{value:!0}),$.BaseEvent=void 0;var H=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=void 0,this.target=void 0,this.currentTarget=void 0,this.interactable=void 0,this._interaction=void 0,this.timeStamp=void 0,this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=e}var e,n,r;return e=t,(n=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&G(e.prototype,n),r&&G(e,r),t}();$.BaseEvent=H,Object.defineProperty(H.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var K={};Object.defineProperty(K,"__esModule",{value:!0}),K.find=K.findIndex=K.from=K.merge=K.remove=K.contains=void 0;K.contains=function(t,e){return-1!==t.indexOf(e)};K.remove=function(t,e){return t.splice(t.indexOf(e),1)};var Z=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];t.push(r)}return t};K.merge=Z;K.from=function(t){return Z([],t)};var J=function(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return n;return-1};K.findIndex=J;K.find=function(t,e){return t[J(t,e)]};var Q={};function tt(t){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function et(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function nt(t,e){return(nt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=it(t);if(e){var o=it(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ot(this,n)}}function ot(t,e){return!e||"object"!==tt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function it(t){return(it=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Q,"__esModule",{value:!0}),Q.DropEvent=void 0;var at=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&nt(t,e)}(i,t);var e,n,r,o=rt(i);function i(t,e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e._interaction)).target=void 0,r.dropzone=void 0,r.dragEvent=void 0,r.relatedTarget=void 0,r.draggable=void 0,r.timeStamp=void 0,r.propagationStopped=!1,r.immediatePropagationStopped=!1;var a="dragleave"===n?t.prev:t.cur,s=a.element,l=a.dropzone;return r.type=n,r.target=s,r.currentTarget=s,r.dropzone=l,r.dragEvent=e,r.relatedTarget=e.target,r.draggable=e.interactable,r.timeStamp=e.timeStamp,r}return e=i,(n=[{key:"reject",value:function(){var t=this,e=this._interaction.dropState;if("dropactivate"===this.type||this.dropzone&&e.cur.dropzone===this.dropzone&&e.cur.element===this.target)if(e.prev.dropzone=this.dropzone,e.prev.element=this.target,e.rejected=!0,e.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){var n=e.activeDrops,r=K.findIndex(n,(function(e){var n=e.dropzone,r=e.element;return n===t.dropzone&&r===t.target}));e.activeDrops.splice(r,1);var o=new i(e,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new i(e,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&et(e.prototype,n),r&&et(e,r),i}($.BaseEvent);Q.DropEvent=at;var st={};function lt(t,e){for(var n=0;n<t.slice().length;n++){var r=t.slice()[n],o=r.dropzone,i=r.element;e.dropzone=o,e.target=i,o.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}}function ut(t,e){for(var n=function(t,e){for(var n=t.interactables,r=[],o=0;o<n.list.length;o++){var a=n.list[o];if(a.options.drop.enabled){var s=a.options.drop.accept;if(!(i.default.element(s)&&s!==e||i.default.string(s)&&!_.matchesSelector(e,s)||i.default.func(s)&&!s({dropzone:a,draggableElement:e})))for(var l=i.default.string(a.target)?a._context.querySelectorAll(a.target):i.default.array(a.target)?a.target:[a.target],u=0;u<l.length;u++){var c=l[u];c!==e&&r.push({dropzone:a,element:c})}}}return r}(t,e),r=0;r<n.length;r++){var o=n[r];o.rect=o.dropzone.getRect(o.element)}return n}function ct(t,e,n){for(var r=t.dropState,o=t.interactable,i=t.element,a=[],s=0;s<r.activeDrops.length;s++){var l=r.activeDrops[s],u=l.dropzone,c=l.element,f=l.rect;a.push(u.dropCheck(e,n,o,i,c,f)?c:null)}var d=_.indexOfDeepestElement(a);return r.activeDrops[d]||null}function ft(t,e,n){var r=t.dropState,o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(o.activate=new Q.DropEvent(r,n,"dropactivate"),o.activate.target=null,o.activate.dropzone=null),"dragend"===n.type&&(o.deactivate=new Q.DropEvent(r,n,"dropdeactivate"),o.deactivate.target=null,o.deactivate.dropzone=null),r.rejected||(r.cur.element!==r.prev.element&&(r.prev.dropzone&&(o.leave=new Q.DropEvent(r,n,"dragleave"),n.dragLeave=o.leave.target=r.prev.element,n.prevDropzone=o.leave.dropzone=r.prev.dropzone),r.cur.dropzone&&(o.enter=new Q.DropEvent(r,n,"dragenter"),n.dragEnter=r.cur.element,n.dropzone=r.cur.dropzone)),"dragend"===n.type&&r.cur.dropzone&&(o.drop=new Q.DropEvent(r,n,"drop"),n.dropzone=r.cur.dropzone,n.relatedTarget=r.cur.element),"dragmove"===n.type&&r.cur.dropzone&&(o.move=new Q.DropEvent(r,n,"dropmove"),o.move.dragmove=n,n.dropzone=r.cur.dropzone)),o}function dt(t,e){var n=t.dropState,r=n.activeDrops,o=n.cur,i=n.prev;e.leave&&i.dropzone.fire(e.leave),e.enter&&o.dropzone.fire(e.enter),e.move&&o.dropzone.fire(e.move),e.drop&&o.dropzone.fire(e.drop),e.deactivate&&lt(r,e.deactivate),n.prev.dropzone=o.dropzone,n.prev.element=o.element}function pt(t,e){var n=t.interaction,r=t.iEvent,o=t.event;if("dragmove"===r.type||"dragend"===r.type){var i=n.dropState;e.dynamicDrop&&(i.activeDrops=ut(e,n.element));var a=r,s=ct(n,a,o);i.rejected=i.rejected&&!!s&&s.dropzone===i.cur.dropzone&&s.element===i.cur.element,i.cur.dropzone=s&&s.dropzone,i.cur.element=s&&s.element,i.events=ft(n,0,a)}}Object.defineProperty(st,"__esModule",{value:!0}),st.default=void 0;var vt={id:"actions/drop",install:function(t){var e=t.actions,n=t.interactStatic,r=t.Interactable,o=t.defaults;t.usePlugin(c.default),r.prototype.dropzone=function(t){return function(t,e){if(i.default.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){var n=(0,z.default)(e.listeners),r=Object.keys(n).reduce((function(t,e){return t[/^(enter|leave)/.test(e)?"drag".concat(e):/^(activate|deactivate|move)/.test(e)?"drop".concat(e):e]=n[e],t}),{});t.off(t.options.drop.listeners),t.on(r),t.options.drop.listeners=r}return i.default.func(e.ondrop)&&t.on("drop",e.ondrop),i.default.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),i.default.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),i.default.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),i.default.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),i.default.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:i.default.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}if(i.default.bool(e))return t.options.drop.enabled=e,t;return t.options.drop}(this,t)},r.prototype.dropCheck=function(t,e,n,r,o,a){return function(t,e,n,r,o,a,s){var l=!1;if(!(s=s||t.getRect(a)))return!!t.options.drop.checker&&t.options.drop.checker(e,n,l,t,a,r,o);var u=t.options.drop.overlap;if("pointer"===u){var c=(0,A.default)(r,o,"drag"),f=W.getPageXY(e);f.x+=c.x,f.y+=c.y;var d=f.x>s.left&&f.x<s.right,p=f.y>s.top&&f.y<s.bottom;l=d&&p}var v=r.getRect(o);if(v&&"center"===u){var h=v.left+v.width/2,g=v.top+v.height/2;l=h>=s.left&&h<=s.right&&g>=s.top&&g<=s.bottom}if(v&&i.default.number(u)){var y=Math.max(0,Math.min(s.right,v.right)-Math.max(s.left,v.left))*Math.max(0,Math.min(s.bottom,v.bottom)-Math.max(s.top,v.top))/(v.width*v.height);l=y>=u}t.options.drop.checker&&(l=t.options.drop.checker(e,n,l,t,a,r,o));return l}(this,t,e,n,r,o,a)},n.dynamicDrop=function(e){return i.default.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},(0,j.default)(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,o.actions.drop=vt.defaults},listeners:{"interactions:before-action-start":function(t){var e=t.interaction;"drag"===e.prepared.name&&(e.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(t,e){var n=t.interaction,r=(t.event,t.iEvent);if("drag"===n.prepared.name){var o=n.dropState;o.activeDrops=null,o.events=null,o.activeDrops=ut(e,n.element),o.events=ft(n,0,r),o.events.activate&&(lt(o.activeDrops,o.events.activate),e.fire("actions/drop:start",{interaction:n,dragEvent:r}))}},"interactions:action-move":pt,"interactions:after-action-move":function(t,e){var n=t.interaction,r=t.iEvent;"drag"===n.prepared.name&&(dt(n,n.dropState.events),e.fire("actions/drop:move",{interaction:n,dragEvent:r}),n.dropState.events={})},"interactions:action-end":function(t,e){if("drag"===t.interaction.prepared.name){var n=t.interaction,r=t.iEvent;pt(t,e),dt(n,n.dropState.events),e.fire("actions/drop:end",{interaction:n,dragEvent:r})}},"interactions:stop":function(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.dropState;n&&(n.activeDrops=null,n.events=null,n.cur.dropzone=null,n.cur.element=null,n.prev.dropzone=null,n.prev.element=null,n.rejected=!1)}}},getActiveDrops:ut,getDrop:ct,getDropEvents:ft,fireDropEvents:dt,defaults:{enabled:!1,accept:null,overlap:"pointer"}},ht=vt;st.default=ht;var gt={};function yt(t){var e=t.interaction,n=t.iEvent,r=t.phase;if("gesture"===e.prepared.name){var o=e.pointers.map((function(t){return t.pointer})),a="start"===r,s="end"===r,l=e.interactable.options.deltaSource;if(n.touches=[o[0],o[1]],a)n.distance=W.touchDistance(o,l),n.box=W.touchBBox(o),n.scale=1,n.ds=0,n.angle=W.touchAngle(o,l),n.da=0,e.gesture.startDistance=n.distance,e.gesture.startAngle=n.angle;else if(s){var u=e.prevEvent;n.distance=u.distance,n.box=u.box,n.scale=u.scale,n.ds=0,n.angle=u.angle,n.da=0}else n.distance=W.touchDistance(o,l),n.box=W.touchBBox(o),n.scale=n.distance/e.gesture.startDistance,n.angle=W.touchAngle(o,l),n.ds=n.scale-e.gesture.scale,n.da=n.angle-e.gesture.angle;e.gesture.distance=n.distance,e.gesture.angle=n.angle,i.default.number(n.scale)&&n.scale!==1/0&&!isNaN(n.scale)&&(e.gesture.scale=n.scale)}}Object.defineProperty(gt,"__esModule",{value:!0}),gt.default=void 0;var mt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.gesturable=function(t){return i.default.object(t)?(this.options.gesture.enabled=!1!==t.enabled,this.setPerAction("gesture",t),this.setOnEvents("gesture",t),this):i.default.bool(t)?(this.options.gesture.enabled=t,this):this.options.gesture},e.map.gesture=mt,e.methodDict.gesture="gesturable",r.actions.gesture=mt.defaults},listeners:{"interactions:action-start":yt,"interactions:action-move":yt,"interactions:action-end":yt,"interactions:new":function(t){t.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(t){if(!(t.interaction.pointers.length<2)){var e=t.interactable.options.gesture;if(e&&e.enabled)return t.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},bt=mt;gt.default=bt;var xt={};function wt(t,e,n,r,o,a,s){if(!e)return!1;if(!0===e){var l=i.default.number(a.width)?a.width:a.right-a.left,u=i.default.number(a.height)?a.height:a.bottom-a.top;if(s=Math.min(s,Math.abs(("left"===t||"right"===t?l:u)/2)),l<0&&("left"===t?t="right":"right"===t&&(t="left")),u<0&&("top"===t?t="bottom":"bottom"===t&&(t="top")),"left"===t)return n.x<(l>=0?a.left:a.right)+s;if("top"===t)return n.y<(u>=0?a.top:a.bottom)+s;if("right"===t)return n.x>(l>=0?a.right:a.left)-s;if("bottom"===t)return n.y>(u>=0?a.bottom:a.top)-s}return!!i.default.element(r)&&(i.default.element(e)?e===r:_.matchesUpTo(r,e,o))}function _t(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.resizeAxes){var r=e;n.interactable.options.resize.square?("y"===n.resizeAxes?r.delta.x=r.delta.y:r.delta.y=r.delta.x,r.axes="xy"):(r.axes=n.resizeAxes,"x"===n.resizeAxes?r.delta.y=0:"y"===n.resizeAxes&&(r.delta.x=0))}}Object.defineProperty(xt,"__esModule",{value:!0}),xt.default=void 0;var St={id:"actions/resize",before:["actions/drag"],install:function(t){var e=t.actions,n=t.browser,r=t.Interactable,o=t.defaults;St.cursors=function(t){return t.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(n),St.defaultMargin=n.supportsTouch||n.supportsPointerEvent?20:10,r.prototype.resizable=function(e){return function(t,e,n){if(i.default.object(e))return t.options.resize.enabled=!1!==e.enabled,t.setPerAction("resize",e),t.setOnEvents("resize",e),i.default.string(e.axis)&&/^x$|^y$|^xy$/.test(e.axis)?t.options.resize.axis=e.axis:null===e.axis&&(t.options.resize.axis=n.defaults.actions.resize.axis),i.default.bool(e.preserveAspectRatio)?t.options.resize.preserveAspectRatio=e.preserveAspectRatio:i.default.bool(e.square)&&(t.options.resize.square=e.square),t;if(i.default.bool(e))return t.options.resize.enabled=e,t;return t.options.resize}(this,e,t)},e.map.resize=St,e.methodDict.resize="resizable",o.actions.resize=St.defaults},listeners:{"interactions:new":function(t){t.interaction.resizeAxes="xy"},"interactions:action-start":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,o=n.rect;n._rects={start:(0,j.default)({},o),corrected:(0,j.default)({},o),previous:(0,j.default)({},o),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}}(t),_t(t)},"interactions:action-move":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,o=n.interactable.options.resize.invert,i="reposition"===o||"negate"===o,a=n.rect,s=n._rects,l=s.start,u=s.corrected,c=s.delta,f=s.previous;if((0,j.default)(f,u),i){if((0,j.default)(u,a),"reposition"===o){if(u.top>u.bottom){var d=u.top;u.top=u.bottom,u.bottom=d}if(u.left>u.right){var p=u.left;u.left=u.right,u.right=p}}}else u.top=Math.min(a.top,l.bottom),u.bottom=Math.max(a.bottom,l.top),u.left=Math.min(a.left,l.right),u.right=Math.max(a.right,l.left);for(var v in u.width=u.right-u.left,u.height=u.bottom-u.top,u)c[v]=u[v]-f[v];r.edges=n.prepared.edges,r.rect=u,r.deltaRect=c}}(t),_t(t)},"interactions:action-end":function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e;r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}},"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.element,o=t.rect,a=t.buttons;if(o){var s=(0,j.default)({},e.coords.cur.page),l=n.options.resize;if(l&&l.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(a&l.mouseButtons))){if(i.default.object(l.edges)){var u={left:!1,right:!1,top:!1,bottom:!1};for(var c in u)u[c]=wt(c,l.edges[c],s,e._latestPointer.eventTarget,r,o,l.margin||St.defaultMargin);u.left=u.left&&!u.right,u.top=u.top&&!u.bottom,(u.left||u.right||u.top||u.bottom)&&(t.action={name:"resize",edges:u})}else{var f="y"!==l.axis&&s.x>o.right-St.defaultMargin,d="x"!==l.axis&&s.y>o.bottom-St.defaultMargin;(f||d)&&(t.action={name:"resize",axes:(f?"x":"")+(d?"y":"")})}return!t.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(t){var e=t.edges,n=t.axis,r=t.name,o=St.cursors,i=null;if(n)i=o[r+n];else if(e){for(var a="",s=["top","bottom","left","right"],l=0;l<s.length;l++){var u=s[l];e[u]&&(a+=u)}i=o[a]}return i},defaultMargin:null},Pt=St;xt.default=Pt;var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0}),Ot.default=void 0;var Et={id:"actions",install:function(t){t.usePlugin(gt.default),t.usePlugin(xt.default),t.usePlugin(c.default),t.usePlugin(st.default)}};Ot.default=Et;var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0}),Tt.default=void 0;Tt.default={};var Mt={};Object.defineProperty(Mt,"__esModule",{value:!0}),Mt.default=void 0;var jt,kt,It=0;var Dt={request:function(t){return jt(t)},cancel:function(t){return kt(t)},init:function(t){if(jt=t.requestAnimationFrame,kt=t.cancelAnimationFrame,!jt)for(var e=["ms","moz","webkit","o"],n=0;n<e.length;n++){var r=e[n];jt=t["".concat(r,"RequestAnimationFrame")],kt=t["".concat(r,"CancelAnimationFrame")]||t["".concat(r,"CancelRequestAnimationFrame")]}jt=jt&&jt.bind(t),kt=kt&&kt.bind(t),jt||(jt=function(e){var n=Date.now(),r=Math.max(0,16-(n-It)),o=t.setTimeout((function(){e(n+r)}),r);return It=n+r,o},kt=function(t){return clearTimeout(t)})}};Mt.default=Dt;var At={};Object.defineProperty(At,"__esModule",{value:!0}),At.getContainer=Ct,At.getScroll=Rt,At.getScrollSize=function(t){i.default.window(t)&&(t=window.document.body);return{x:t.scrollWidth,y:t.scrollHeight}},At.getScrollSizeDelta=function(t,e){var n=t.interaction,r=t.element,o=n&&n.interactable.options[n.prepared.name].autoScroll;if(!o||!o.enabled)return e(),{x:0,y:0};var i=Ct(o.container,n.interactable,r),a=Rt(i);e();var s=Rt(i);return{x:s.x-a.x,y:s.y-a.y}},At.default=void 0;var zt={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(t){zt.isScrolling=!0,Mt.default.cancel(zt.i),t.autoScroll=zt,zt.interaction=t,zt.prevTime=zt.now(),zt.i=Mt.default.request(zt.scroll)},stop:function(){zt.isScrolling=!1,zt.interaction&&(zt.interaction.autoScroll=null),Mt.default.cancel(zt.i)},scroll:function(){var t=zt.interaction,e=t.interactable,n=t.element,r=t.prepared.name,o=e.options[r].autoScroll,a=Ct(o.container,e,n),s=zt.now(),l=(s-zt.prevTime)/1e3,u=o.speed*l;if(u>=1){var c={x:zt.x*u,y:zt.y*u};if(c.x||c.y){var f=Rt(a);i.default.window(a)?a.scrollBy(c.x,c.y):a&&(a.scrollLeft+=c.x,a.scrollTop+=c.y);var d=Rt(a),p={x:d.x-f.x,y:d.y-f.y};(p.x||p.y)&&e.fire({type:"autoscroll",target:n,interactable:e,delta:p,interaction:t,container:a})}zt.prevTime=s}zt.isScrolling&&(Mt.default.cancel(zt.i),zt.i=Mt.default.request(zt.scroll))},check:function(t,e){var n=t.options;return n[e].autoScroll&&n[e].autoScroll.enabled},onInteractionMove:function(t){var e=t.interaction,n=t.pointer;if(e.interacting()&&zt.check(e.interactable,e.prepared.name))if(e.simulation)zt.x=zt.y=0;else{var r,o,a,s,l=e.interactable,u=e.element,c=e.prepared.name,f=l.options[c].autoScroll,d=Ct(f.container,l,u);if(i.default.window(d))s=n.clientX<zt.margin,r=n.clientY<zt.margin,o=n.clientX>d.innerWidth-zt.margin,a=n.clientY>d.innerHeight-zt.margin;else{var p=_.getElementClientRect(d);s=n.clientX<p.left+zt.margin,r=n.clientY<p.top+zt.margin,o=n.clientX>p.right-zt.margin,a=n.clientY>p.bottom-zt.margin}zt.x=o?1:s?-1:0,zt.y=a?1:r?-1:0,zt.isScrolling||(zt.margin=f.margin,zt.speed=f.speed,zt.start(e))}}};function Ct(t,n,r){return(i.default.string(t)?(0,k.getStringOptionResult)(t,n,r):t)||(0,e.getWindow)(r)}function Rt(t){return i.default.window(t)&&(t=window.document.body),{x:t.scrollLeft,y:t.scrollTop}}var Ft={id:"auto-scroll",install:function(t){var e=t.defaults,n=t.actions;t.autoScroll=zt,zt.now=function(){return t.now()},n.phaselessTypes.autoscroll=!0,e.perAction.autoScroll=zt.defaults},listeners:{"interactions:new":function(t){t.interaction.autoScroll=null},"interactions:destroy":function(t){t.interaction.autoScroll=null,zt.stop(),zt.interaction&&(zt.interaction=null)},"interactions:stop":zt.stop,"interactions:action-move":function(t){return zt.onInteractionMove(t)}}};At.default=Ft;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.warnOnce=function(t,n){var r=!1;return function(){return r||(e.window.console.warn(n),r=!0),t.apply(this,arguments)}},Xt.copyAction=function(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t};var Yt={};function Wt(t){return i.default.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function Lt(t){return i.default.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.default=void 0;var Bt={id:"auto-start/interactableMethods",install:function(t){var e=t.Interactable;e.prototype.getAction=function(e,n,r,o){var i=function(t,e,n,r,o){var i=t.getRect(r),a=e.buttons||{0:1,1:4,3:8,4:16}[e.button],s={action:null,interactable:t,interaction:n,element:r,rect:i,buttons:a};return o.fire("auto-start:check",s),s.action}(this,n,r,o,t);return this.options.actionChecker?this.options.actionChecker(e,n,i,this,o,r):i},e.prototype.ignoreFrom=(0,Xt.warnOnce)((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=(0,Xt.warnOnce)((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=Lt,e.prototype.styleCursor=Wt}};Yt.default=Bt;var Ut={};function Nt(t,e,n,r,o){return e.testIgnoreAllow(e.options[t.name],n,r)&&e.options[t.name].enabled&&Gt(e,n,t,o)?t:null}function Vt(t,e,n,r,o,i,a){for(var s=0,l=r.length;s<l;s++){var u=r[s],c=o[s],f=u.getAction(e,n,t,c);if(f){var d=Nt(f,u,c,i,a);if(d)return{action:d,interactable:u,element:c}}}return{action:null,interactable:null,element:null}}function qt(t,e,n,r,o){var a=[],s=[],l=r;function u(t){a.push(t),s.push(l)}for(;i.default.element(l);){a=[],s=[],o.interactables.forEachMatch(l,u);var c=Vt(t,e,n,a,s,r,o);if(c.action&&!c.interactable.options[c.action.name].manualStart)return c;l=_.parentNode(l)}return{action:null,interactable:null,element:null}}function $t(t,e,n){var r=e.action,o=e.interactable,i=e.element;r=r||{name:null},t.interactable=o,t.element=i,(0,Xt.copyAction)(t.prepared,r),t.rect=o&&r.name?o.getRect(i):null,Zt(t,n),n.fire("autoStart:prepared",{interaction:t})}function Gt(t,e,n,r){var o=t.options,i=o[n.name].max,a=o[n.name].maxPerElement,s=r.autoStart.maxInteractions,l=0,u=0,c=0;if(!(i&&a&&s))return!1;for(var f=0;f<r.interactions.list.length;f++){var d=r.interactions.list[f],p=d.prepared.name;if(d.interacting()){if(++l>=s)return!1;if(d.interactable===t){if((u+=p===n.name?1:0)>=i)return!1;if(d.element===e&&(c++,p===n.name&&c>=a))return!1}}}return s>0}function Ht(t,e){return i.default.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function Kt(t,e,n){var r=n.autoStart.cursorElement;r&&r!==t&&(r.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,n.autoStart.cursorElement=e?t:null}function Zt(t,e){var n=t.interactable,r=t.element,o=t.prepared;if("mouse"===t.pointerType&&n&&n.options.styleCursor){var a="";if(o.name){var s=n.options[o.name].cursorChecker;a=i.default.func(s)?s(o,n,r,t._interacting):e.actions.map[o.name].getCursor(o)}Kt(t.element,a||"",e)}else e.autoStart.cursorElement&&Kt(e.autoStart.cursorElement,"",e)}Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=void 0;var Jt={id:"auto-start/base",before:["actions"],install:function(t){var e=t.interactStatic,n=t.defaults;t.usePlugin(Yt.default),n.base.actionChecker=null,n.base.styleCursor=!0,(0,j.default)(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=function(e){return Ht(e,t)},t.autoStart={maxInteractions:1/0,withinInteractionLimit:Gt,cursorElement:null}},listeners:{"interactions:down":function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;n.interacting()||$t(n,qt(n,r,o,i,e),e)},"interactions:move":function(t,e){!function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;"mouse"!==n.pointerType||n.pointerIsDown||n.interacting()||$t(n,qt(n,r,o,i,e),e)}(t,e),function(t,e){var n=t.interaction;if(n.pointerIsDown&&!n.interacting()&&n.pointerWasMoved&&n.prepared.name){e.fire("autoStart:before-start",t);var r=n.interactable,o=n.prepared.name;o&&r&&(r.options[o].manualStart||!Gt(r,n.element,n.prepared,e)?n.stop():(n.start(n.prepared,r,n.element),Zt(n,e)))}}(t,e)},"interactions:stop":function(t,e){var n=t.interaction,r=n.interactable;r&&r.options.styleCursor&&Kt(n.element,"",e)}},maxInteractions:Ht,withinInteractionLimit:Gt,validateAction:Nt};Ut.default=Jt;var Qt={};Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.default=void 0;var te={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(t,e){var n=t.interaction,r=t.eventTarget,o=t.dx,a=t.dy;if("drag"===n.prepared.name){var s=Math.abs(o),l=Math.abs(a),u=n.interactable.options.drag,c=u.startAxis,f=s>l?"x":s<l?"y":"xy";if(n.prepared.axis="start"===u.lockAxis?f[0]:u.lockAxis,"xy"!==f&&"xy"!==c&&c!==f){n.prepared.name=null;for(var d=r,p=function(t){if(t!==n.interactable){var o=n.interactable.options.drag;if(!o.manualStart&&t.testIgnoreAllow(o,d,r)){var i=t.getAction(n.downPointer,n.downEvent,n,d);if(i&&"drag"===i.name&&function(t,e){if(!e)return!1;var n=e.options.drag.startAxis;return"xy"===t||"xy"===n||n===t}(f,t)&&Ut.default.validateAction(i,t,d,r,e))return t}}};i.default.element(d);){var v=e.interactables.forEachMatch(d,p);if(v){n.prepared.name="drag",n.interactable=v,n.element=d;break}d=(0,_.parentNode)(d)}}}}}};Qt.default=te;var ee={};function ne(t){var e=t.prepared&&t.prepared.name;if(!e)return null;var n=t.interactable.options;return n[e].hold||n[e].delay}Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=void 0;var re={id:"auto-start/hold",install:function(t){var e=t.defaults;t.usePlugin(Ut.default),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":function(t){t.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(t){var e=t.interaction,n=ne(e);n>0&&(e.autoStartHoldTimer=setTimeout((function(){e.start(e.prepared,e.interactable,e.element)}),n))},"interactions:move":function(t){var e=t.interaction,n=t.duplicate;e.autoStartHoldTimer&&e.pointerWasMoved&&!n&&(clearTimeout(e.autoStartHoldTimer),e.autoStartHoldTimer=null)},"autoStart:before-start":function(t){var e=t.interaction;ne(e)>0&&(e.prepared.name=null)}},getHoldDuration:ne};ee.default=re;var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.default=void 0;var ie={id:"auto-start",install:function(t){t.usePlugin(Ut.default),t.usePlugin(ee.default),t.usePlugin(Qt.default)}};oe.default=ie;var ae={};Object.defineProperty(ae,"__esModule",{value:!0}),ae.default=void 0;ae.default={};var se={};function le(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):i.default.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault}function ue(t){var e=t.interaction,n=t.event;e.interactable&&e.interactable.checkAndPreventDefault(n)}function ce(t){var n=t.Interactable;n.prototype.preventDefault=le,n.prototype.checkAndPreventDefault=function(n){return function(t,n,r){var o=t.options.preventDefault;if("never"!==o)if("always"!==o){if(n.events.supportsPassive&&/^touch(start|move)$/.test(r.type)){var a=(0,e.getWindow)(r.target).document,s=n.getDocOptions(a);if(!s||!s.events||!1!==s.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(r.type)||i.default.element(r.target)&&(0,_.matchesSelector)(r.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||r.preventDefault()}else r.preventDefault()}(this,t,n)},t.interactions.docEvents.push({type:"dragstart",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){var r=t.interactions.list[n];if(r.element&&(r.element===e.target||(0,_.nodeContains)(r.element,e.target)))return void r.interactable.checkAndPreventDefault(e)}}})}Object.defineProperty(se,"__esModule",{value:!0}),se.install=ce,se.default=void 0;var fe={id:"core/interactablePreventDefault",install:ce,listeners:["down","move","up","cancel"].reduce((function(t,e){return t["interactions:".concat(e)]=ue,t}),{})};se.default=fe;var de,pe={};function ve(t){return function(t){if(Array.isArray(t))return he(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return he(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function he(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=void 0,function(t){t.touchAction="touchAction",t.boxSizing="boxSizing",t.noListeners="noListeners"}(de||(de={}));var ge={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"};var ye=[{name:de.touchAction,perform:function(t){return!function(t,e,n){var r=t;for(;i.default.element(r);){if(me(r,e,n))return!0;r=(0,_.parentNode)(r)}return!1}(t.element,"touchAction",/pan-|pinch|none/)},getInfo:function(t){return[t.element,ge.touchAction]},text:'Consider adding CSS "touch-action: none" to this element\n'},{name:de.boxSizing,perform:function(t){var e=t.element;return"resize"===t.prepared.name&&e instanceof h.default.HTMLElement&&!me(e,"boxSizing",/border-box/)},text:'Consider adding CSS "box-sizing: border-box" to this resizable element',getInfo:function(t){return[t.element,ge.boxSizing]}},{name:de.noListeners,perform:function(t){var e=t.prepared.name;return!(t.interactable.events.types["".concat(e,"move")]||[]).length},getInfo:function(t){return[t.prepared.name,t.interactable]},text:"There are no listeners set for this action"}];function me(t,n,r){var o=t.style[n]||e.window.getComputedStyle(t)[n];return r.test((o||"").toString())}var be="dev-tools",xe={id:be,install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.logger,r=t.Interactable,o=t.defaults;t.logger=n||console,o.base.devTools={ignore:{}},r.prototype.devTools=function(t){return t?((0,j.default)(this.options.devTools,t),this):this.options.devTools}},listeners:{"interactions:action-start":function(t,e){for(var n=t.interaction,r=0;r<ye.length;r++){var o,i=ye[r],a=n.interactable&&n.interactable.options;if(!(a&&a.devTools&&a.devTools.ignore[i.name])&&i.perform(n))(o=e.logger).warn.apply(o,["[interact.js] "+i.text].concat(ve(i.getInfo(n))))}}},checks:ye,CheckName:de,links:ge,prefix:"[interact.js] "};pe.default=xe;var we={};Object.defineProperty(we,"__esModule",{value:!0}),we.default=void 0;we.default={};var _e={};Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=function t(e){var n={};for(var r in e){var o=e[r];i.default.plainObject(o)?n[r]=t(o):i.default.array(o)?n[r]=K.from(o):n[r]=o}return n};var Se={};function Pe(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Oe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oe(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Oe(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Ee(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Se,"__esModule",{value:!0}),Se.getRectOffset=je,Se.default=void 0;var Te=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=null,this.result=null,this.endResult=null,this.edges=void 0,this.interaction=void 0,this.interaction=e,this.result=Me()}var e,n,r;return e=t,(n=[{key:"start",value:function(t,e){var n=t.phase,r=this.interaction,o=function(t){var e=t.interactable.options[t.prepared.name],n=e.modifiers;return n&&n.length?n:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(t){var n=e[t];return n&&n.enabled&&{options:n,methods:n._methods}})).filter((function(t){return!!t}))}(r);this.prepareStates(o),this.edges=(0,j.default)({},r.edges),this.startOffset=je(r.rect,e),this.startDelta={x:0,y:0};var i={phase:n,pageCoords:e,preEnd:!1};return this.result=Me(),this.startAll(i),this.result=this.setAll(i)}},{key:"fillArg",value:function(t){var e=this.interaction;t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect=t.rect||e.rect,t.edges=this.edges,t.startOffset=this.startOffset}},{key:"startAll",value:function(t){this.fillArg(t);for(var e=0;e<this.states.length;e++){var n=this.states[e];n.methods.start&&(t.state=n,n.methods.start(t))}}},{key:"setAll",value:function(t){this.fillArg(t);var e=t.phase,n=t.preEnd,r=t.skipModifiers,o=t.rect;t.coords=(0,j.default)({},t.pageCoords),t.rect=(0,j.default)({},o);for(var i=r?this.states.slice(r):this.states,a=Me(t.coords,t.rect),s=0;s<i.length;s++){var l=i[s],u=l.options,c=(0,j.default)({},t.coords),f=null;l.methods.set&&this.shouldDo(u,n,e)&&(t.state=l,f=l.methods.set(t),k.addEdges(this.interaction.edges,t.rect,{x:t.coords.x-c.x,y:t.coords.y-c.y})),a.eventProps.push(f)}a.delta.x=t.coords.x-t.pageCoords.x,a.delta.y=t.coords.y-t.pageCoords.y,a.rectDelta.left=t.rect.left-o.left,a.rectDelta.right=t.rect.right-o.right,a.rectDelta.top=t.rect.top-o.top,a.rectDelta.bottom=t.rect.bottom-o.bottom;var d=this.result.coords,p=this.result.rect;if(d&&p){var v=a.rect.left!==p.left||a.rect.right!==p.right||a.rect.top!==p.top||a.rect.bottom!==p.bottom;a.changed=v||d.x!==a.coords.x||d.y!==a.coords.y}return a}},{key:"applyToInteraction",value:function(t){var e=this.interaction,n=t.phase,r=e.coords.cur,o=e.coords.start,i=this.result,a=this.startDelta,s=i.delta;"start"===n&&(0,j.default)(this.startDelta,i.delta);for(var l=[[o,a],[r,s]],u=0;u<l.length;u++){var c=Pe(l[u],2),f=c[0],d=c[1];f.page.x+=d.x,f.page.y+=d.y,f.client.x+=d.x,f.client.y+=d.y}var p=this.result.rectDelta,v=t.rect||e.rect;v.left+=p.left,v.right+=p.right,v.top+=p.top,v.bottom+=p.bottom,v.width=v.right-v.left,v.height=v.bottom-v.top}},{key:"setAndApply",value:function(t){var e=this.interaction,n=t.phase,r=t.preEnd,o=t.skipModifiers,i=this.setAll({preEnd:r,phase:n,pageCoords:t.modifiedCoords||e.coords.cur.page});if(this.result=i,!i.changed&&(!o||o<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){var a=e.coords.cur.page,s={x:t.modifiedCoords.x-a.x,y:t.modifiedCoords.y-a.y};i.coords.x+=s.x,i.coords.y+=s.y,i.delta.x+=s.x,i.delta.y+=s.y}this.applyToInteraction(t)}},{key:"beforeEnd",value:function(t){var e=t.interaction,n=t.event,r=this.states;if(r&&r.length){for(var o=!1,i=0;i<r.length;i++){var a=r[i];t.state=a;var s=a.options,l=a.methods,u=l.beforeEnd&&l.beforeEnd(t);if(u)return this.endResult=u,!1;o=o||!o&&this.shouldDo(s,!0,t.phase,!0)}o&&e.move({event:n,preEnd:!0})}}},{key:"stop",value:function(t){var e=t.interaction;if(this.states&&this.states.length){var n=(0,j.default)({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(n);for(var r=0;r<this.states.length;r++){var o=this.states[r];n.state=o,o.methods.stop&&o.methods.stop(n)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(t){this.states=[];for(var e=0;e<t.length;e++){var n=t[e],r=n.options,o=n.methods,i=n.name;this.states.push({options:r,methods:o,index:e,name:i})}return this.states}},{key:"restoreInteractionCoords",value:function(t){var e=t.interaction,n=e.coords,r=e.rect,o=e.modification;if(o.result){for(var i=o.startDelta,a=o.result,s=a.delta,l=a.rectDelta,u=[[n.start,i],[n.cur,s]],c=0;c<u.length;c++){var f=Pe(u[c],2),d=f[0],p=f[1];d.page.x-=p.x,d.page.y-=p.y,d.client.x-=p.x,d.client.y-=p.y}r.left-=l.left,r.right-=l.right,r.top-=l.top,r.bottom-=l.bottom}}},{key:"shouldDo",value:function(t,e,n,r){return!(!t||!1===t.enabled||r&&!t.endOnly||t.endOnly&&!e||"start"===n&&!t.setStart)}},{key:"copyFrom",value:function(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.edges=t.edges,this.states=t.states.map((function(t){return(0,_e.default)(t)})),this.result=Me((0,j.default)({},t.result.coords),(0,j.default)({},t.result.rect))}},{key:"destroy",value:function(){for(var t in this)this[t]=null}}])&&Ee(e.prototype,n),r&&Ee(e,r),t}();function Me(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function je(t,e){return t?{left:e.x-t.left,top:e.y-t.top,right:t.right-e.x,bottom:t.bottom-e.y}:{left:0,top:0,right:0,bottom:0}}Se.default=Te;var ke={};function Ie(t){var e=t.iEvent,n=t.interaction.modification.result;n&&(e.modifiers=n.eventProps)}Object.defineProperty(ke,"__esModule",{value:!0}),ke.makeModifier=function(t,e){var n=t.defaults,r={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},o=function(t){var o=t||{};for(var i in o.enabled=!1!==o.enabled,n)i in o||(o[i]=n[i]);var a={options:o,methods:r,name:e,enable:function(){return o.enabled=!0,a},disable:function(){return o.enabled=!1,a}};return a};e&&"string"==typeof e&&(o._defaults=n,o._methods=r);return o},ke.addEventModifiers=Ie,ke.default=void 0;var De={id:"modifiers/base",before:["actions"],install:function(t){t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(t){var e=t.interaction;e.modification=new Se.default(e)},"interactions:before-action-start":function(t){var e=t.interaction.modification;e.start(t,t.interaction.coords.start.page),t.interaction.edges=e.edges,e.applyToInteraction(t)},"interactions:before-action-move":function(t){return t.interaction.modification.setAndApply(t)},"interactions:before-action-end":function(t){return t.interaction.modification.beforeEnd(t)},"interactions:action-start":Ie,"interactions:action-move":Ie,"interactions:action-end":Ie,"interactions:after-action-start":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-move":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:stop":function(t){return t.interaction.modification.stop(t)}}};ke.default=De;var Ae={};Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.defaults=void 0;Ae.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var ze={};function Ce(t){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Re(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Fe(t,e){return(Fe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Xe(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Le(t);if(e){var o=Le(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ye(this,n)}}function Ye(t,e){return!e||"object"!==Ce(e)&&"function"!=typeof e?We(t):e}function We(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Le(t){return(Le=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(ze,"__esModule",{value:!0}),ze.InteractEvent=void 0;var Be=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Fe(t,e)}(i,t);var e,n,r,o=Xe(i);function i(t,e,n,r,a,s,l){var u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(u=o.call(this,t)).target=void 0,u.currentTarget=void 0,u.relatedTarget=null,u.screenX=void 0,u.screenY=void 0,u.button=void 0,u.buttons=void 0,u.ctrlKey=void 0,u.shiftKey=void 0,u.altKey=void 0,u.metaKey=void 0,u.page=void 0,u.client=void 0,u.delta=void 0,u.rect=void 0,u.x0=void 0,u.y0=void 0,u.t0=void 0,u.dt=void 0,u.duration=void 0,u.clientX0=void 0,u.clientY0=void 0,u.velocity=void 0,u.speed=void 0,u.swipe=void 0,u.timeStamp=void 0,u.dragEnter=void 0,u.dragLeave=void 0,u.axes=void 0,u.preEnd=void 0,a=a||t.element;var c=t.interactable,f=(c&&c.options||Ae.defaults).deltaSource,d=(0,A.default)(c,a,n),p="start"===r,v="end"===r,h=p?We(u):t.prevEvent,g=p?t.coords.start:v?{page:h.page,client:h.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;return u.page=(0,j.default)({},g.page),u.client=(0,j.default)({},g.client),u.rect=(0,j.default)({},t.rect),u.timeStamp=g.timeStamp,v||(u.page.x-=d.x,u.page.y-=d.y,u.client.x-=d.x,u.client.y-=d.y),u.ctrlKey=e.ctrlKey,u.altKey=e.altKey,u.shiftKey=e.shiftKey,u.metaKey=e.metaKey,u.button=e.button,u.buttons=e.buttons,u.target=a,u.currentTarget=a,u.preEnd=s,u.type=l||n+(r||""),u.interactable=c,u.t0=p?t.pointers[t.pointers.length-1].downTime:h.t0,u.x0=t.coords.start.page.x-d.x,u.y0=t.coords.start.page.y-d.y,u.clientX0=t.coords.start.client.x-d.x,u.clientY0=t.coords.start.client.y-d.y,u.delta=p||v?{x:0,y:0}:{x:u[f].x-h[f].x,y:u[f].y-h[f].y},u.dt=t.coords.delta.timeStamp,u.duration=u.timeStamp-u.t0,u.velocity=(0,j.default)({},t.coords.velocity[f]),u.speed=(0,R.default)(u.velocity.x,u.velocity.y),u.swipe=v||"inertiastart"===r?u.getSwipe():null,u}return e=i,(n=[{key:"getSwipe",value:function(){var t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;var e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);var n=112.5<=e&&e<247.5,r=202.5<=e&&e<337.5;return{up:r,down:!r&&22.5<=e&&e<157.5,left:n,right:!n&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Re(e.prototype,n),r&&Re(e,r),i}($.BaseEvent);ze.InteractEvent=Be,Object.defineProperties(Be.prototype,{pageX:{get:function(){return this.page.x},set:function(t){this.page.x=t}},pageY:{get:function(){return this.page.y},set:function(t){this.page.y=t}},clientX:{get:function(){return this.client.x},set:function(t){this.client.x=t}},clientY:{get:function(){return this.client.y},set:function(t){this.client.y=t}},dx:{get:function(){return this.delta.x},set:function(t){this.delta.x=t}},dy:{get:function(){return this.delta.y},set:function(t){this.delta.y=t}},velocityX:{get:function(){return this.velocity.x},set:function(t){this.velocity.x=t}},velocityY:{get:function(){return this.velocity.y},set:function(t){this.velocity.y=t}}});var Ue={};Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.PointerInfo=void 0;Ue.PointerInfo=function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=e,this.pointer=n,this.event=r,this.downTime=o,this.downTarget=i};var Ne,Ve,qe={};function $e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ge(t,e,n){return e&&$e(t.prototype,e),n&&$e(t,n),t}Object.defineProperty(qe,"__esModule",{value:!0}),Object.defineProperty(qe,"PointerInfo",{enumerable:!0,get:function(){return Ue.PointerInfo}}),qe.default=qe.Interaction=qe._ProxyMethods=qe._ProxyValues=void 0,qe._ProxyValues=Ne,function(t){t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy=""}(Ne||(qe._ProxyValues=Ne={})),qe._ProxyMethods=Ve,function(t){t.start="",t.move="",t.end="",t.stop="",t.interacting=""}(Ve||(qe._ProxyMethods=Ve={}));var He=0,Ke=function(){function t(e){var n=this,r=e.pointerType,o=e.scopeFire;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.interactable=null,this.element=null,this.rect=void 0,this._rects=void 0,this.edges=void 0,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=null,this.simulation=null,this.doMove=(0,Xt.warnOnce)((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:W.newCoords(),prev:W.newCoords(),cur:W.newCoords(),delta:W.newCoords(),velocity:W.newCoords()},this._id=He++,this._scopeFire=o,this.pointerType=r;var i=this;this._proxy={};var a=function(t){Object.defineProperty(n._proxy,t,{get:function(){return i[t]}})};for(var s in Ne)a(s);var l=function(t){Object.defineProperty(n._proxy,t,{value:function(){return i[t].apply(i,arguments)}})};for(var u in Ve)l(u);this._scopeFire("interactions:new",{interaction:this})}return Ge(t,[{key:"pointerMoveTolerance",get:function(){return 1}}]),Ge(t,[{key:"pointerDown",value:function(t,e,n){var r=this.updatePointer(t,e,n,!0),o=this.pointers[r];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:n,pointerIndex:r,pointerInfo:o,type:"down",interaction:this})}},{key:"start",value:function(t,e,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&((0,Xt.copyAction)(this.prepared,t),this.interactable=e,this.element=n,this.rect=e.getRect(n),this.edges=this.prepared.edges?(0,j.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(t,e,n){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,n,!1);var r,o,i=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(r=this.coords.cur.client.x-this.coords.start.client.x,o=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,R.default)(r,o)>this.pointerMoveTolerance);var a=this.getPointerIndex(t),s={pointer:t,pointerIndex:a,pointerInfo:this.pointers[a],event:e,type:"move",eventTarget:n,dx:r,dy:o,duplicate:i,interaction:this};i||W.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",s),i||this.simulation||(this.interacting()&&(s.type=null,this.move(s)),this.pointerWasMoved&&W.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(t){t&&t.event||W.setZeroCoords(this.coords.delta),(t=(0,j.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)}},{key:"pointerUp",value:function(t,e,n,r){var o=this.getPointerIndex(t);-1===o&&(o=this.updatePointer(t,e,n,!1));var i=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire("interactions:".concat(i),{pointer:t,pointerIndex:o,pointerInfo:this.pointers[o],event:e,eventTarget:n,type:i,curEventTarget:r,interaction:this}),this.simulation||this.end(e),this.removePointer(t,e)}},{key:"documentBlur",value:function(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})}},{key:"end",value:function(t){var e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(t){var e=W.getPointerId(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:K.findIndex(this.pointers,(function(t){return t.id===e}))}},{key:"getPointerInfo",value:function(t){return this.pointers[this.getPointerIndex(t)]}},{key:"updatePointer",value:function(t,e,n,r){var o=W.getPointerId(t),i=this.getPointerIndex(t),a=this.pointers[i];return r=!1!==r&&(r||/(down|start)$/i.test(e.type)),a?a.pointer=t:(a=new Ue.PointerInfo(o,t,e,null,null),i=this.pointers.length,this.pointers.push(a)),W.setCoords(this.coords.cur,this.pointers.map((function(t){return t.pointer})),this._now()),W.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),r&&(this.pointerIsDown=!0,a.downTime=this.coords.cur.timeStamp,a.downTarget=n,W.pointerExtend(this.downPointer,t),this.interacting()||(W.copyCoords(this.coords.start,this.coords.cur),W.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,n),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:n,down:r,pointerInfo:a,pointerIndex:i,interaction:this}),i}},{key:"removePointer",value:function(t,e){var n=this.getPointerIndex(t);if(-1!==n){var r=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:n,pointerInfo:r,interaction:this}),this.pointers.splice(n,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(t,e,n){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=n}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(t,e,n,r){return new ze.InteractEvent(this,t,this.prepared.name,e,this.element,n,r)}},{key:"_fireEvent",value:function(t){this.interactable.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)}},{key:"_doPhase",value:function(t){var e=t.event,n=t.phase,r=t.preEnd,o=t.type,i=this.rect;if(i&&"move"===n&&(k.addEdges(this.edges,i,this.coords.delta[this.interactable.options.deltaSource]),i.width=i.right-i.left,i.height=i.bottom-i.top),!1===this._scopeFire("interactions:before-action-".concat(n),t))return!1;var a=t.iEvent=this._createPreparedEvent(e,n,r,o);return this._scopeFire("interactions:action-".concat(n),t),"start"===n&&(this.prevEvent=a),this._fireEvent(a),this._scopeFire("interactions:after-action-".concat(n),t),!0}},{key:"_now",value:function(){return Date.now()}}]),t}();qe.Interaction=Ke;var Ze=Ke;qe.default=Ze;var Je={};function Qe(t){t.pointerIsDown&&(rn(t.coords.cur,t.offset.total),t.offset.pending.x=0,t.offset.pending.y=0)}function tn(t){en(t.interaction)}function en(t){if(!function(t){return!(!t.offset.pending.x&&!t.offset.pending.y)}(t))return!1;var e=t.offset.pending;return rn(t.coords.cur,e),rn(t.coords.delta,e),k.addEdges(t.edges,t.rect,e),e.x=0,e.y=0,!0}function nn(t){var e=t.x,n=t.y;this.offset.pending.x+=e,this.offset.pending.y+=n,this.offset.total.x+=e,this.offset.total.y+=n}function rn(t,e){var n=t.page,r=t.client,o=e.x,i=e.y;n.x+=o,n.y+=i,r.x+=o,r.y+=i}Object.defineProperty(Je,"__esModule",{value:!0}),Je.addTotal=Qe,Je.applyPending=en,Je.default=void 0,qe._ProxyMethods.offsetBy="";var on={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(t){t.Interaction.prototype.offsetBy=nn},listeners:{"interactions:new":function(t){t.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(t){return Qe(t.interaction)},"interactions:before-action-start":tn,"interactions:before-action-move":tn,"interactions:before-action-end":function(t){var e=t.interaction;if(en(e))return e.move({offset:!0}),e.end(),!1},"interactions:stop":function(t){var e=t.interaction;e.offset.total.x=0,e.offset.total.y=0,e.offset.pending.x=0,e.offset.pending.y=0}}};Je.default=on;var an={};function sn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(an,"__esModule",{value:!0}),an.default=an.InertiaState=void 0;var ln=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=null,this.modifierCount=0,this.modifierArg=null,this.startCoords=null,this.t0=0,this.v0=0,this.te=0,this.targetOffset=null,this.modifiedOffset=null,this.currentOffset=null,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=null,this.interaction=void 0,this.interaction=e}var e,n,r;return e=t,(n=[{key:"start",value:function(t){var e=this.interaction,n=un(e);if(!n||!n.enabled)return!1;var r=e.coords.velocity.client,o=(0,R.default)(r.x,r.y),i=this.modification||(this.modification=new Se.default(e));if(i.copyFrom(e.modification),this.t0=e._now(),this.allowResume=n.allowResume,this.v0=o,this.currentOffset={x:0,y:0},this.startCoords=e.coords.cur.page,this.modifierArg={interaction:e,interactable:e.interactable,element:e.element,rect:e.rect,edges:e.edges,pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"},this.t0-e.coords.cur.timeStamp<50&&o>n.minSpeed&&o>n.endSpeed)this.startInertia();else{if(i.result=i.setAll(this.modifierArg),!i.result.changed)return!1;this.startSmoothEnd()}return e.modification.result.rect=null,e.offsetBy(this.targetOffset),e._doPhase({interaction:e,event:t,phase:"inertiastart"}),e.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),e.modification.result.rect=null,this.active=!0,e.simulation=this,!0}},{key:"startInertia",value:function(){var t=this,e=this.interaction.coords.velocity.client,n=un(this.interaction),r=n.resistance,o=-Math.log(n.endSpeed/this.v0)/r;this.targetOffset={x:(e.x-o)/r,y:(e.y-o)/r},this.te=o,this.lambda_v0=r/this.v0,this.one_ve_v0=1-n.endSpeed/this.v0;var i=this.modification,a=this.modifierArg;a.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},i.result=i.setAll(a),i.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+i.result.delta.x,y:this.targetOffset.y+i.result.delta.y}),this.onNextFrame((function(){return t.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var t=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return t.smoothEndTick()}))}},{key:"onNextFrame",value:function(t){var e=this;this.timeout=Mt.default.request((function(){e.active&&t()}))}},{key:"inertiaTick",value:function(){var t,e,n,r,o,i,a,s=this,l=this.interaction,u=un(l).resistance,c=(l._now()-this.t0)/1e3;if(c<this.te){var f,d=1-(Math.exp(-u*c)-this.lambda_v0)/this.one_ve_v0;this.isModified?(t=0,e=0,n=this.targetOffset.x,r=this.targetOffset.y,o=this.modifiedOffset.x,i=this.modifiedOffset.y,f={x:cn(a=d,t,n,o),y:cn(a,e,r,i)}):f={x:this.targetOffset.x*d,y:this.targetOffset.y*d};var p={x:f.x-this.currentOffset.x,y:f.y-this.currentOffset.y};this.currentOffset.x+=p.x,this.currentOffset.y+=p.y,l.offsetBy(p),l.move(),this.onNextFrame((function(){return s.inertiaTick()}))}else l.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var t=this,e=this.interaction,n=e._now()-this.t0,r=un(e).smoothEndDuration;if(n<r){var o={x:fn(n,0,this.targetOffset.x,r),y:fn(n,0,this.targetOffset.y,r)},i={x:o.x-this.currentOffset.x,y:o.y-this.currentOffset.y};this.currentOffset.x+=i.x,this.currentOffset.y+=i.y,e.offsetBy(i),e.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return t.smoothEndTick()}))}else e.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(t){var e=t.pointer,n=t.event,r=t.eventTarget,o=this.interaction;o.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),o.updatePointer(e,n,r,!0),o._doPhase({interaction:o,event:n,phase:"resume"}),(0,W.copyCoords)(o.coords.prev,o.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Mt.default.cancel(this.timeout)}}])&&sn(e.prototype,n),r&&sn(e,r),t}();function un(t){var e=t.interactable,n=t.prepared;return e&&e.options&&n.name&&e.options[n.name].inertia}function cn(t,e,n,r){var o=1-t;return o*o*e+2*o*t*n+t*t*r}function fn(t,e,n,r){return-n*(t/=r)*(t-2)+e}an.InertiaState=ln;var dn={id:"inertia",before:["modifiers","actions"],install:function(t){var e=t.defaults;t.usePlugin(Je.default),t.usePlugin(ke.default),t.actions.phases.inertiastart=!0,t.actions.phases.resume=!0,e.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(t){var e=t.interaction;e.inertia=new ln(e)},"interactions:before-action-end":function(t){var e=t.interaction,n=t.event;return(!e._interacting||e.simulation||!e.inertia.start(n))&&null},"interactions:down":function(t){var e=t.interaction,n=t.eventTarget,r=e.inertia;if(r.active)for(var o=n;i.default.element(o);){if(o===e.element){r.resume(t);break}o=_.parentNode(o)}},"interactions:stop":function(t){var e=t.interaction.inertia;e.active&&e.stop()},"interactions:before-action-resume":function(t){var e=t.interaction.modification;e.stop(t),e.start(t,t.interaction.coords.cur.page),e.applyToInteraction(t)},"interactions:before-action-inertiastart":function(t){return t.interaction.modification.setAndApply(t)},"interactions:action-resume":ke.addEventModifiers,"interactions:action-inertiastart":ke.addEventModifiers,"interactions:after-action-inertiastart":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-resume":function(t){return t.interaction.modification.restoreInteractionCoords(t)}}};an.default=dn;var pn={};function vn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function hn(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(t.immediatePropagationStopped)break;r(t)}}Object.defineProperty(pn,"__esModule",{value:!0}),pn.Eventable=void 0;var gn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=(0,j.default)({},e||{})}var e,n,r;return e=t,(n=[{key:"fire",value:function(t){var e,n=this.global;(e=this.types[t.type])&&hn(t,e),!t.propagationStopped&&n&&(e=n[t.type])&&hn(t,e)}},{key:"on",value:function(t,e){var n=(0,z.default)(t,e);for(t in n)this.types[t]=K.merge(this.types[t]||[],n[t])}},{key:"off",value:function(t,e){var n=(0,z.default)(t,e);for(t in n){var r=this.types[t];if(r&&r.length)for(var o=0;o<n[t].length;o++){var i=n[t][o],a=r.indexOf(i);-1!==a&&r.splice(a,1)}}}},{key:"getRect",value:function(t){return null}}])&&vn(e.prototype,n),r&&vn(e,r),t}();pn.Eventable=gn;var yn={};Object.defineProperty(yn,"__esModule",{value:!0}),yn.default=function(t,e){if(e.phaselessTypes[t])return!0;for(var n in e.map)if(0===t.indexOf(n)&&t.substr(n.length)in e.phases)return!0;return!1};var mn={};function bn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function xn(t,e,n){return e&&bn(t.prototype,e),n&&bn(t,n),t}Object.defineProperty(mn,"__esModule",{value:!0}),mn.Interactable=void 0;var wn=function(){function t(n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=void 0,this._actions=void 0,this.target=void 0,this.events=new pn.Eventable,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._rectChecker=void 0,this._actions=r.actions,this.target=n,this._context=r.context||o,this._win=(0,e.getWindow)((0,_.trySelector)(n)?this._context:n),this._doc=this._win.document,this._scopeEvents=i,this.set(r)}return xn(t,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}}]),xn(t,[{key:"setOnEvents",value:function(t,e){return i.default.func(e.onstart)&&this.on("".concat(t,"start"),e.onstart),i.default.func(e.onmove)&&this.on("".concat(t,"move"),e.onmove),i.default.func(e.onend)&&this.on("".concat(t,"end"),e.onend),i.default.func(e.oninertiastart)&&this.on("".concat(t,"inertiastart"),e.oninertiastart),this}},{key:"updatePerActionListeners",value:function(t,e,n){(i.default.array(e)||i.default.object(e))&&this.off(t,e),(i.default.array(n)||i.default.object(n))&&this.on(t,n)}},{key:"setPerAction",value:function(t,e){var n=this._defaults;for(var r in e){var o=r,a=this.options[t],s=e[o];"listeners"===o&&this.updatePerActionListeners(t,a.listeners,s),i.default.array(s)?a[o]=K.from(s):i.default.plainObject(s)?(a[o]=(0,j.default)(a[o]||{},(0,_e.default)(s)),i.default.object(n.perAction[o])&&"enabled"in n.perAction[o]&&(a[o].enabled=!1!==s.enabled)):i.default.bool(s)&&i.default.object(n.perAction[o])?a[o].enabled=s:a[o]=s}}},{key:"getRect",value:function(t){return t=t||(i.default.element(this.target)?this.target:null),i.default.string(this.target)&&(t=t||this._context.querySelector(this.target)),(0,_.getElementRect)(t)}},{key:"rectChecker",value:function(t){var e=this;return i.default.func(t)?(this._rectChecker=t,this.getRect=function(t){var n=(0,j.default)({},e._rectChecker(t));return"width"in n||(n.width=n.right-n.left,n.height=n.bottom-n.top),n},this):null===t?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(t,e){if((0,_.trySelector)(e)||i.default.object(e)){for(var n in this.options[t]=e,this._actions.map)this.options[n][t]=e;return this}return this.options[t]}},{key:"origin",value:function(t){return this._backCompatOption("origin",t)}},{key:"deltaSource",value:function(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(t){return this._context===t.ownerDocument||(0,_.nodeContains)(this._context,t)}},{key:"testIgnoreAllow",value:function(t,e,n){return!this.testIgnore(t.ignoreFrom,e,n)&&this.testAllow(t.allowFrom,e,n)}},{key:"testAllow",value:function(t,e,n){return!t||!!i.default.element(n)&&(i.default.string(t)?(0,_.matchesUpTo)(n,t,e):!!i.default.element(t)&&(0,_.nodeContains)(t,n))}},{key:"testIgnore",value:function(t,e,n){return!(!t||!i.default.element(n))&&(i.default.string(t)?(0,_.matchesUpTo)(n,t,e):!!i.default.element(t)&&(0,_.nodeContains)(t,n))}},{key:"fire",value:function(t){return this.events.fire(t),this}},{key:"_onOff",value:function(t,e,n,r){i.default.object(e)&&!i.default.array(e)&&(r=n,n=null);var o="on"===t?"add":"remove",a=(0,z.default)(e,n);for(var s in a){"wheel"===s&&(s=b.default.wheelEvent);for(var l=0;l<a[s].length;l++){var u=a[s][l];(0,yn.default)(s,this._actions)?this.events[t](s,u):i.default.string(this.target)?this._scopeEvents["".concat(o,"Delegate")](this.target,this._context,s,u,r):this._scopeEvents[o](this.target,s,u,r)}}return this}},{key:"on",value:function(t,e,n){return this._onOff("on",t,e,n)}},{key:"off",value:function(t,e,n){return this._onOff("off",t,e,n)}},{key:"set",value:function(t){var e=this._defaults;for(var n in i.default.object(t)||(t={}),this.options=(0,_e.default)(e.base),this._actions.methodDict){var r=n,o=this._actions.methodDict[r];this.options[r]={},this.setPerAction(r,(0,j.default)((0,j.default)({},e.perAction),e.actions[r])),this[o](t[r])}for(var a in t)i.default.func(this[a])&&this[a](t[a]);return this}},{key:"unset",value:function(){if(i.default.string(this.target))for(var t in this._scopeEvents.delegatedEvents)for(var e=this._scopeEvents.delegatedEvents[t],n=e.length-1;n>=0;n--){var r=e[n],o=r.selector,a=r.context,s=r.listeners;o===this.target&&a===this._context&&e.splice(n,1);for(var l=s.length-1;l>=0;l--)this._scopeEvents.removeDelegate(this.target,this._context,t,s[l][0],s[l][1])}else this._scopeEvents.remove(this.target,"all")}}]),t}();mn.Interactable=wn;var _n={};function Sn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(_n,"__esModule",{value:!0}),_n.InteractableSet=void 0;var Pn=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=e,e.addListeners({"interactable:unset":function(t){var e=t.interactable,r=e.target,o=e._context,a=i.default.string(r)?n.selectorMap[r]:r[n.scope.id],s=K.findIndex(a,(function(t){return t.context===o}));a[s]&&(a[s].context=null,a[s].interactable=null),a.splice(s,1)}})}var e,n,r;return e=t,(n=[{key:"new",value:function(t,e){e=(0,j.default)(e||{},{actions:this.scope.actions});var n=new this.scope.Interactable(t,e,this.scope.document,this.scope.events),r={context:n._context,interactable:n};return this.scope.addDocument(n._doc),this.list.push(n),i.default.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(r)):(n.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(r)),this.scope.fire("interactable:new",{target:t,options:e,interactable:n,win:this.scope._win}),n}},{key:"get",value:function(t,e){var n=e&&e.context||this.scope.document,r=i.default.string(t),o=r?this.selectorMap[t]:t[this.scope.id];if(!o)return null;var a=K.find(o,(function(e){return e.context===n&&(r||e.interactable.inContext(t))}));return a&&a.interactable}},{key:"forEachMatch",value:function(t,e){for(var n=0;n<this.list.length;n++){var r=this.list[n],o=void 0;if((i.default.string(r.target)?i.default.element(t)&&_.matchesSelector(t,r.target):t===r.target)&&r.inContext(t)&&(o=e(r)),void 0!==o)return o}}}])&&Sn(e.prototype,n),r&&Sn(e,r),t}();_n.InteractableSet=Pn;var On={};function En(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Tn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Mn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Mn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(On,"__esModule",{value:!0}),On.default=void 0;var jn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=e,(0,F.default)(this,e)}var e,n,r;return e=t,(n=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&En(e.prototype,n),r&&En(e,r),t}();function kn(t){if(!i.default.object(t))return{capture:!!t,passive:!1};var e=(0,j.default)({},t);return e.capture=!!t.capture,e.passive=!!t.passive,e}var In={id:"events",install:function(t){var e=[],n={},r=[],o={add:a,remove:s,addDelegate:function(t,e,o,i,s){var c=kn(s);if(!n[o]){n[o]=[];for(var f=0;f<r.length;f++){var d=r[f];a(d,o,l),a(d,o,u,!0)}}var p=n[o],v=K.find(p,(function(n){return n.selector===t&&n.context===e}));v||(v={selector:t,context:e,listeners:[]},p.push(v));v.listeners.push([i,c])},removeDelegate:function(t,e,r,o,i){var a,c=kn(i),f=n[r],d=!1;if(!f)return;for(a=f.length-1;a>=0;a--){var p=f[a];if(p.selector===t&&p.context===e){for(var v=p.listeners,h=v.length-1;h>=0;h--){var g=Tn(v[h],2),y=g[0],m=g[1],b=m.capture,x=m.passive;if(y===o&&b===c.capture&&x===c.passive){v.splice(h,1),v.length||(f.splice(a,1),s(e,r,l),s(e,r,u,!0)),d=!0;break}}if(d)break}}},delegateListener:l,delegateUseCapture:u,delegatedEvents:n,documents:r,targets:e,supportsOptions:!1,supportsPassive:!1};function a(t,n,r,i){var a=kn(i),s=K.find(e,(function(e){return e.eventTarget===t}));s||(s={eventTarget:t,events:{}},e.push(s)),s.events[n]||(s.events[n]=[]),t.addEventListener&&!K.contains(s.events[n],r)&&(t.addEventListener(n,r,o.supportsOptions?a:a.capture),s.events[n].push(r))}function s(t,n,r,i){var a=kn(i),l=K.findIndex(e,(function(e){return e.eventTarget===t})),u=e[l];if(u&&u.events)if("all"!==n){var c=!1,f=u.events[n];if(f){if("all"===r){for(var d=f.length-1;d>=0;d--)s(t,n,f[d],a);return}for(var p=0;p<f.length;p++)if(f[p]===r){t.removeEventListener(n,r,o.supportsOptions?a:a.capture),f.splice(p,1),0===f.length&&(delete u.events[n],c=!0);break}}c&&!Object.keys(u.events).length&&e.splice(l,1)}else for(n in u.events)u.events.hasOwnProperty(n)&&s(t,n,"all")}function l(t,e){for(var r=kn(e),o=new jn(t),a=n[t.type],s=Tn(W.getEventTargets(t),1)[0],l=s;i.default.element(l);){for(var u=0;u<a.length;u++){var c=a[u],f=c.selector,d=c.context;if(_.matchesSelector(l,f)&&_.nodeContains(d,s)&&_.nodeContains(d,l)){var p=c.listeners;o.currentTarget=l;for(var v=0;v<p.length;v++){var h=Tn(p[v],2),g=h[0],y=h[1],m=y.capture,b=y.passive;m===r.capture&&b===r.passive&&g(o)}}}l=_.parentNode(l)}}function u(t){return l(t,!0)}return t.document.createElement("div").addEventListener("test",null,{get capture(){return o.supportsOptions=!0},get passive(){return o.supportsPassive=!0}}),t.events=o,o}};On.default=In;var Dn={};Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.createInteractStatic=function(t){var e=function e(n,r){var o=t.interactables.get(n,r);return o||((o=t.interactables.new(n,r)).events.global=e.globalEvents),o};return e.getPointerAverage=W.pointerAverage,e.getTouchBBox=W.touchBBox,e.getTouchDistance=W.touchDistance,e.getTouchAngle=W.touchAngle,e.getElementRect=_.getElementRect,e.getElementClientRect=_.getElementClientRect,e.matchesSelector=_.matchesSelector,e.closest=_.closest,e.globalEvents={},e.version=void 0,e.scope=t,e.use=function(t,e){return this.scope.usePlugin(t,e),this},e.isSet=function(t,e){return!!this.scope.interactables.get(t,e&&e.context)},e.on=function(t,e,n){if(i.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),i.default.array(t)){for(var r=0;r<t.length;r++){var o=t[r];this.on(o,e,n)}return this}if(i.default.object(t)){for(var a in t)this.on(a,t[a],e);return this}return(0,yn.default)(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:n}),this},e.off=function(t,e,n){if(i.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),i.default.array(t)){for(var r=0;r<t.length;r++){var o=t[r];this.off(o,e,n)}return this}if(i.default.object(t)){for(var a in t)this.off(a,t[a],e);return this}var s;(0,yn.default)(t,this.scope.actions)?t in this.globalEvents&&-1!==(s=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(s,1):this.scope.events.remove(this.scope.document,t,e,n);return this},e.debug=function(){return this.scope},e.supportsTouch=function(){return b.default.supportsTouch},e.supportsPointerEvent=function(){return b.default.supportsPointerEvent},e.stop=function(){for(var t=0;t<this.scope.interactions.list.length;t++){this.scope.interactions.list[t].stop()}return this},e.pointerMoveTolerance=function(t){return i.default.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance},e.addDocument=function(t,e){this.scope.addDocument(t,e)},e.removeDocument=function(t){this.scope.removeDocument(t)},e};var An={};Object.defineProperty(An,"__esModule",{value:!0}),An.default=void 0;var zn={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(t){for(var e=0;e<zn.methodOrder.length;e++){var n;n=zn.methodOrder[e];var r=zn[n](t);if(r)return r}return null},simulationResume:function(t){var e=t.pointerType,n=t.eventType,r=t.eventTarget,o=t.scope;if(!/down|start/i.test(n))return null;for(var i=0;i<o.interactions.list.length;i++){var a=o.interactions.list[i],s=r;if(a.simulation&&a.simulation.allowResume&&a.pointerType===e)for(;s;){if(s===a.element)return a;s=_.parentNode(s)}}return null},mouseOrPen:function(t){var e,n=t.pointerId,r=t.pointerType,o=t.eventType,i=t.scope;if("mouse"!==r&&"pen"!==r)return null;for(var a=0;a<i.interactions.list.length;a++){var s=i.interactions.list[a];if(s.pointerType===r){if(s.simulation&&!Cn(s,n))continue;if(s.interacting())return s;e||(e=s)}}if(e)return e;for(var l=0;l<i.interactions.list.length;l++){var u=i.interactions.list[l];if(!(u.pointerType!==r||/down/i.test(o)&&u.simulation))return u}return null},hasPointer:function(t){for(var e=t.pointerId,n=t.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(Cn(o,e))return o}return null},idle:function(t){for(var e=t.pointerType,n=t.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(1===o.pointers.length){var i=o.interactable;if(i&&(!i.options.gesture||!i.options.gesture.enabled))continue}else if(o.pointers.length>=2)continue;if(!o.interacting()&&e===o.pointerType)return o}return null}};function Cn(t,e){return t.pointers.some((function(t){return t.id===e}))}var Rn=zn;An.default=Rn;var Fn={};function Xn(t){return(Xn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Yn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Wn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Wn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Ln(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Un(t,e){return(Un=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Nn(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=qn(t);if(e){var o=qn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Vn(this,n)}}function Vn(t,e){return!e||"object"!==Xn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function qn(t){return(qn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Fn,"__esModule",{value:!0}),Fn.default=void 0;var $n=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Gn(t,e){return function(n){var r=e.interactions.list,o=W.getPointerType(n),i=Yn(W.getEventTargets(n),2),a=i[0],s=i[1],l=[];if(/^touch/.test(n.type)){e.prevTouchTime=e.now();for(var u=0;u<n.changedTouches.length;u++){var c=n.changedTouches[u],f={pointer:c,pointerId:W.getPointerId(c),pointerType:o,eventType:n.type,eventTarget:a,curEventTarget:s,scope:e},d=Hn(f);l.push([f.pointer,f.eventTarget,f.curEventTarget,d])}}else{var p=!1;if(!b.default.supportsPointerEvent&&/mouse/.test(n.type)){for(var v=0;v<r.length&&!p;v++)p="mouse"!==r[v].pointerType&&r[v].pointerIsDown;p=p||e.now()-e.prevTouchTime<500||0===n.timeStamp}if(!p){var h={pointer:n,pointerId:W.getPointerId(n),pointerType:o,eventType:n.type,curEventTarget:s,eventTarget:a,scope:e},g=Hn(h);l.push([h.pointer,h.eventTarget,h.curEventTarget,g])}}for(var y=0;y<l.length;y++){var m=Yn(l[y],4),x=m[0],w=m[1],_=m[2];m[3][t](x,n,w,_)}}}function Hn(t){var e=t.pointerType,n=t.scope,r={interaction:An.default.search(t),searchDetails:t};return n.fire("interactions:find",r),r.interaction||n.interactions.new({pointerType:e})}function Kn(t,e){var n=t.doc,r=t.scope,o=t.options,i=r.interactions.docEvents,a=r.events,s=a[e];for(var l in r.browser.isIOS&&!o.events&&(o.events={passive:!1}),a.delegatedEvents)s(n,l,a.delegateListener),s(n,l,a.delegateUseCapture,!0);for(var u=o&&o.events,c=0;c<i.length;c++){var f=i[c];s(n,f.type,f.listener,u)}}var Zn={id:"core/interactions",install:function(t){for(var e={},n=0;n<$n.length;n++){var r=$n[n];e[r]=Gn(r,t)}var o,i=b.default.pEventTypes;function a(){for(var e=0;e<t.interactions.list.length;e++){var n=t.interactions.list[e];if(n.pointerIsDown&&"touch"===n.pointerType&&!n._interacting)for(var r=function(){var e=n.pointers[o];t.documents.some((function(t){var n=t.doc;return(0,_.nodeContains)(n,e.downTarget)}))||n.removePointer(e.pointer,e.event)},o=0;o<n.pointers.length;o++){r()}}}(o=h.default.PointerEvent?[{type:i.down,listener:a},{type:i.down,listener:e.pointerDown},{type:i.move,listener:e.pointerMove},{type:i.up,listener:e.pointerUp},{type:i.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:a},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}]).push({type:"blur",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){t.interactions.list[n].documentBlur(e)}}}),t.prevTouchTime=0,t.Interaction=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Un(t,e)}(a,e);var n,r,o,i=Nn(a);function a(){return Ln(this,a),i.apply(this,arguments)}return n=a,(r=[{key:"_now",value:function(){return t.now()}},{key:"pointerMoveTolerance",get:function(){return t.interactions.pointerMoveTolerance},set:function(e){t.interactions.pointerMoveTolerance=e}}])&&Bn(n.prototype,r),o&&Bn(n,o),a}(qe.default),t.interactions={list:[],new:function(e){e.scopeFire=function(e,n){return t.fire(e,n)};var n=new t.Interaction(e);return t.interactions.list.push(n),n},listeners:e,docEvents:o,pointerMoveTolerance:1},t.usePlugin(se.default)},listeners:{"scope:add-document":function(t){return Kn(t,"add")},"scope:remove-document":function(t){return Kn(t,"remove")},"interactable:unset":function(t,e){for(var n=t.interactable,r=e.interactions.list.length-1;r>=0;r--){var o=e.interactions.list[r];o.interactable===n&&(o.stop(),e.fire("interactions:destroy",{interaction:o}),o.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(r,1))}}},onDocSignal:Kn,doOnInteractions:Gn,methodNames:$n};Fn.default=Zn;var Jn={};function Qn(t){return(Qn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function tr(t,e,n){return(tr="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=or(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function er(t,e){return(er=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function nr(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=or(t);if(e){var o=or(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return rr(this,n)}}function rr(t,e){return!e||"object"!==Qn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function or(t){return(or=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ir(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ar(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function sr(t,e,n){return e&&ar(t.prototype,e),n&&ar(t,n),t}Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.initScope=ur,Jn.Scope=void 0;var lr=function(){function t(){var e=this;ir(this,t),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=b.default,this.defaults=(0,_e.default)(Ae.defaults),this.Eventable=pn.Eventable,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(0,Dn.createInteractStatic)(this),this.InteractEvent=ze.InteractEvent,this.Interactable=void 0,this.interactables=new _n.InteractableSet(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(t){return e.removeDocument(t.target)};var n=this;this.Interactable=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&er(t,e)}(r,t);var e=nr(r);function r(){return ir(this,r),e.apply(this,arguments)}return sr(r,[{key:"set",value:function(t){return tr(or(r.prototype),"set",this).call(this,t),n.fire("interactable:set",{options:t,interactable:this}),this}},{key:"unset",value:function(){tr(or(r.prototype),"unset",this).call(this),n.interactables.list.splice(n.interactables.list.indexOf(this),1),n.fire("interactable:unset",{interactable:this})}},{key:"_defaults",get:function(){return n.defaults}}]),r}(mn.Interactable)}return sr(t,[{key:"addListeners",value:function(t,e){this.listenerMaps.push({id:e,map:t})}},{key:"fire",value:function(t,e){for(var n=0;n<this.listenerMaps.length;n++){var r=this.listenerMaps[n].map[t];if(r&&!1===r(e,this,t))return!1}}},{key:"init",value:function(t){return this.isInitialized?this:ur(this,t)}},{key:"pluginIsInstalled",value:function(t){return this._plugins.map[t.id]||-1!==this._plugins.list.indexOf(t)}},{key:"usePlugin",value:function(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){for(var n=0,r=this.listenerMaps.length,o=t.before.reduce((function(t,e){return t[e]=!0,t[cr(e)]=!0,t}),{});n<r;n++){var i=this.listenerMaps[n].id;if(o[i]||o[cr(i)])break}this.listenerMaps.splice(n,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this}},{key:"addDocument",value:function(t,n){if(-1!==this.getDocIndex(t))return!1;var r=e.getWindow(t);n=n?(0,j.default)({},n):{},this.documents.push({doc:t,options:n}),this.events.documents.push(t),t!==this.document&&this.events.add(r,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:r,scope:this,options:n})}},{key:"removeDocument",value:function(t){var n=this.getDocIndex(t),r=e.getWindow(t),o=this.documents[n].options;this.events.remove(r,"unload",this.onWindowUnload),this.documents.splice(n,1),this.events.documents.splice(n,1),this.fire("scope:remove-document",{doc:t,window:r,scope:this,options:o})}},{key:"getDocIndex",value:function(t){for(var e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1}},{key:"getDocOptions",value:function(t){var e=this.getDocIndex(t);return-1===e?null:this.documents[e].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),t}();function ur(t,n){return t.isInitialized=!0,e.init(n),h.default.init(n),b.default.init(n),Mt.default.init(n),t.window=n,t.document=n.document,t.usePlugin(Fn.default),t.usePlugin(On.default),t}function cr(t){return t&&t.replace(/\/.*$/,"")}Jn.Scope=lr;var fr={};function dr(t){return(dr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(fr,"__esModule",{value:!0}),fr.init=fr.default=void 0;var pr=new Jn.Scope,vr=pr.interactStatic;fr.default=vr;var hr=function(t){return pr.init(t)};fr.init=hr,"object"===("undefined"==typeof window?"undefined":dr(window))&&window&&hr(window);var gr={};Object.defineProperty(gr,"__esModule",{value:!0}),gr.default=void 0;gr.default=function(){};var yr={};Object.defineProperty(yr,"__esModule",{value:!0}),yr.default=void 0;yr.default=function(){};var mr={};function br(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return xr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xr(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(mr,"__esModule",{value:!0}),mr.default=void 0;mr.default=function(t){var e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(e){var n=br(e,2),r=n[0],o=n[1];return r in t||o in t})),n=function(n,r){for(var o=t.range,i=t.limits,a=void 0===i?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:i,s=t.offset,l=void 0===s?{x:0,y:0}:s,u={range:o,grid:t,x:null,y:null},c=0;c<e.length;c++){var f=br(e[c],2),d=f[0],p=f[1],v=Math.round((n-l.x)/t[d]),h=Math.round((r-l.y)/t[p]);u[d]=Math.max(a.left,Math.min(a.right,v*t[d]+l.x)),u[p]=Math.max(a.top,Math.min(a.bottom,h*t[p]+l.y))}return u};return n.grid=t,n.coordFields=e,n};var wr={};Object.defineProperty(wr,"__esModule",{value:!0}),Object.defineProperty(wr,"edgeTarget",{enumerable:!0,get:function(){return gr.default}}),Object.defineProperty(wr,"elements",{enumerable:!0,get:function(){return yr.default}}),Object.defineProperty(wr,"grid",{enumerable:!0,get:function(){return mr.default}});var _r={};Object.defineProperty(_r,"__esModule",{value:!0}),_r.default=void 0;var Sr={id:"snappers",install:function(t){var e=t.interactStatic;e.snappers=(0,j.default)(e.snappers||{},wr),e.createSnapGrid=e.snappers.grid}};_r.default=Sr;var Pr={};function Or(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Er(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Or(Object(n),!0).forEach((function(e){Tr(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Or(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Tr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(Pr,"__esModule",{value:!0}),Pr.aspectRatio=Pr.default=void 0;var Mr={start:function(t){var e=t.state,n=t.rect,r=t.edges,o=t.pageCoords,i=e.options.ratio,a=e.options,s=a.equalDelta,l=a.modifiers;"preserve"===i&&(i=n.width/n.height),e.startCoords=(0,j.default)({},o),e.startRect=(0,j.default)({},n),e.ratio=i,e.equalDelta=s;var u=e.linkedEdges={top:r.top||r.left&&!r.bottom,left:r.left||r.top&&!r.right,bottom:r.bottom||r.right&&!r.top,right:r.right||r.bottom&&!r.left};if(e.xIsPrimaryAxis=!(!r.left&&!r.right),e.equalDelta)e.edgeSign=(u.left?1:-1)*(u.top?1:-1);else{var c=e.xIsPrimaryAxis?u.top:u.left;e.edgeSign=c?-1:1}if((0,j.default)(t.edges,u),l&&l.length){var f=new Se.default(t.interaction);f.copyFrom(t.interaction.modification),f.prepareStates(l),e.subModification=f,f.startAll(Er({},t))}},set:function(t){var e=t.state,n=t.rect,r=t.coords,o=(0,j.default)({},r),i=e.equalDelta?jr:kr;if(i(e,e.xIsPrimaryAxis,r,n),!e.subModification)return null;var a=(0,j.default)({},n);(0,k.addEdges)(e.linkedEdges,a,{x:r.x-o.x,y:r.y-o.y});var s=e.subModification.setAll(Er(Er({},t),{},{rect:a,edges:e.linkedEdges,pageCoords:r,prevCoords:r,prevRect:a})),l=s.delta;s.changed&&(i(e,Math.abs(l.x)>Math.abs(l.y),s.coords,s.rect),(0,j.default)(r,s.coords));return s.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function jr(t,e,n){var r=t.startCoords,o=t.edgeSign;e?n.y=r.y+(n.x-r.x)*o:n.x=r.x+(n.y-r.y)*o}function kr(t,e,n,r){var o=t.startRect,i=t.startCoords,a=t.ratio,s=t.edgeSign;if(e){var l=r.width/a;n.y=i.y+(l-o.height)*s}else{var u=r.height*a;n.x=i.x+(u-o.width)*s}}Pr.aspectRatio=Mr;var Ir=(0,ke.makeModifier)(Mr,"aspectRatio");Pr.default=Ir;var Dr={};Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.default=void 0;var Ar=function(){};Ar._defaults={};var zr=Ar;Dr.default=zr;var Cr={};Object.defineProperty(Cr,"__esModule",{value:!0}),Object.defineProperty(Cr,"default",{enumerable:!0,get:function(){return Dr.default}});var Rr={};function Fr(t,e,n){return i.default.func(t)?k.resolveRectLike(t,e.interactable,e.element,[n.x,n.y,e]):k.resolveRectLike(t,e.interactable,e.element)}Object.defineProperty(Rr,"__esModule",{value:!0}),Rr.getRestrictionRect=Fr,Rr.restrict=Rr.default=void 0;var Xr={start:function(t){var e=t.rect,n=t.startOffset,r=t.state,o=t.interaction,i=t.pageCoords,a=r.options,s=a.elementRect,l=(0,j.default)({left:0,top:0,right:0,bottom:0},a.offset||{});if(e&&s){var u=Fr(a.restriction,o,i);if(u){var c=u.right-u.left-e.width,f=u.bottom-u.top-e.height;c<0&&(l.left+=c,l.right+=c),f<0&&(l.top+=f,l.bottom+=f)}l.left+=n.left-e.width*s.left,l.top+=n.top-e.height*s.top,l.right+=n.right-e.width*(1-s.right),l.bottom+=n.bottom-e.height*(1-s.bottom)}r.offset=l},set:function(t){var e=t.coords,n=t.interaction,r=t.state,o=r.options,i=r.offset,a=Fr(o.restriction,n,e);if(a){var s=k.xywhToTlbr(a);e.x=Math.max(Math.min(s.right-i.right,e.x),s.left+i.left),e.y=Math.max(Math.min(s.bottom-i.bottom,e.y),s.top+i.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Rr.restrict=Xr;var Yr=(0,ke.makeModifier)(Xr,"restrict");Rr.default=Yr;var Wr={};Object.defineProperty(Wr,"__esModule",{value:!0}),Wr.restrictEdges=Wr.default=void 0;var Lr={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Br={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Ur(t,e){for(var n=["top","left","bottom","right"],r=0;r<n.length;r++){var o=n[r];o in t||(t[o]=e[o])}return t}var Nr={noInner:Lr,noOuter:Br,start:function(t){var e,n=t.interaction,r=t.startOffset,o=t.state,i=o.options;if(i){var a=(0,Rr.getRestrictionRect)(i.offset,n,n.coords.start.page);e=k.rectToXY(a)}e=e||{x:0,y:0},o.offset={top:e.y+r.top,left:e.x+r.left,bottom:e.y-r.bottom,right:e.x-r.right}},set:function(t){var e=t.coords,n=t.edges,r=t.interaction,o=t.state,i=o.offset,a=o.options;if(n){var s=(0,j.default)({},e),l=(0,Rr.getRestrictionRect)(a.inner,r,s)||{},u=(0,Rr.getRestrictionRect)(a.outer,r,s)||{};Ur(l,Lr),Ur(u,Br),n.top?e.y=Math.min(Math.max(u.top+i.top,s.y),l.top+i.top):n.bottom&&(e.y=Math.max(Math.min(u.bottom+i.bottom,s.y),l.bottom+i.bottom)),n.left?e.x=Math.min(Math.max(u.left+i.left,s.x),l.left+i.left):n.right&&(e.x=Math.max(Math.min(u.right+i.right,s.x),l.right+i.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Wr.restrictEdges=Nr;var Vr=(0,ke.makeModifier)(Nr,"restrictEdges");Wr.default=Vr;var qr={};Object.defineProperty(qr,"__esModule",{value:!0}),qr.restrictRect=qr.default=void 0;var $r=(0,j.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},Rr.restrict.defaults),Gr={start:Rr.restrict.start,set:Rr.restrict.set,defaults:$r};qr.restrictRect=Gr;var Hr=(0,ke.makeModifier)(Gr,"restrictRect");qr.default=Hr;var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.restrictSize=Kr.default=void 0;var Zr={width:-1/0,height:-1/0},Jr={width:1/0,height:1/0};var Qr={start:function(t){return Wr.restrictEdges.start(t)},set:function(t){var e=t.interaction,n=t.state,r=t.rect,o=t.edges,i=n.options;if(o){var a=k.tlbrToXywh((0,Rr.getRestrictionRect)(i.min,e,t.coords))||Zr,s=k.tlbrToXywh((0,Rr.getRestrictionRect)(i.max,e,t.coords))||Jr;n.options={endOnly:i.endOnly,inner:(0,j.default)({},Wr.restrictEdges.noInner),outer:(0,j.default)({},Wr.restrictEdges.noOuter)},o.top?(n.options.inner.top=r.bottom-a.height,n.options.outer.top=r.bottom-s.height):o.bottom&&(n.options.inner.bottom=r.top+a.height,n.options.outer.bottom=r.top+s.height),o.left?(n.options.inner.left=r.right-a.width,n.options.outer.left=r.right-s.width):o.right&&(n.options.inner.right=r.left+a.width,n.options.outer.right=r.left+s.width),Wr.restrictEdges.set(t),n.options=i}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Kr.restrictSize=Qr;var to=(0,ke.makeModifier)(Qr,"restrictSize");Kr.default=to;var eo={};Object.defineProperty(eo,"__esModule",{value:!0}),Object.defineProperty(eo,"default",{enumerable:!0,get:function(){return Dr.default}});var no={};Object.defineProperty(no,"__esModule",{value:!0}),no.snap=no.default=void 0;var ro={start:function(t){var e,n=t.interaction,r=t.interactable,o=t.element,i=t.rect,a=t.state,s=t.startOffset,l=a.options,u=l.offsetWithOrigin?function(t){var e=t.interaction.element;return(0,k.rectToXY)((0,k.resolveRectLike)(t.state.options.origin,null,null,[e]))||(0,A.default)(t.interactable,e,t.interaction.prepared.name)}(t):{x:0,y:0};if("startCoords"===l.offset)e={x:n.coords.start.page.x,y:n.coords.start.page.y};else{var c=(0,k.resolveRectLike)(l.offset,r,o,[n]);(e=(0,k.rectToXY)(c)||{x:0,y:0}).x+=u.x,e.y+=u.y}var f=l.relativePoints;a.offsets=i&&f&&f.length?f.map((function(t,n){return{index:n,relativePoint:t,x:s.left-i.width*t.x+e.x,y:s.top-i.height*t.y+e.y}})):[(0,j.default)({index:0,relativePoint:null},e)]},set:function(t){var e=t.interaction,n=t.coords,r=t.state,o=r.options,a=r.offsets,s=(0,A.default)(e.interactable,e.element,e.prepared.name),l=(0,j.default)({},n),u=[];o.offsetWithOrigin||(l.x-=s.x,l.y-=s.y);for(var c=0;c<a.length;c++)for(var f=a[c],d=l.x-f.x,p=l.y-f.y,v=0,h=o.targets.length;v<h;v++){var g=o.targets[v],y=void 0;(y=i.default.func(g)?g(d,p,e._proxy,f,v):g)&&u.push({x:(i.default.number(y.x)?y.x:d)+f.x,y:(i.default.number(y.y)?y.y:p)+f.y,range:i.default.number(y.range)?y.range:o.range,source:g,index:v,offset:f})}for(var m={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},b=0;b<u.length;b++){var x=u[b],w=x.range,_=x.x-l.x,S=x.y-l.y,P=(0,R.default)(_,S),O=P<=w;w===1/0&&m.inRange&&m.range!==1/0&&(O=!1),m.target&&!(O?m.inRange&&w!==1/0?P/w<m.distance/m.range:w===1/0&&m.range!==1/0||P<m.distance:!m.inRange&&P<m.distance)||(m.target=x,m.distance=P,m.range=w,m.inRange=O,m.delta.x=_,m.delta.y=S)}return m.inRange&&(n.x=m.target.x,n.y=m.target.y),r.closest=m,m},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};no.snap=ro;var oo=(0,ke.makeModifier)(ro,"snap");no.default=oo;var io={};function ao(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return so(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return so(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function so(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(io,"__esModule",{value:!0}),io.snapSize=io.default=void 0;var lo={start:function(t){var e=t.state,n=t.edges,r=e.options;if(!n)return null;t.state={options:{targets:null,relativePoints:[{x:n.left?0:1,y:n.top?0:1}],offset:r.offset||"self",origin:{x:0,y:0},range:r.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],no.snap.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){var e=t.interaction,n=t.state,r=t.coords,o=n.options,a=n.offsets,s={x:r.x-a[0].x,y:r.y-a[0].y};n.options=(0,j.default)({},o),n.options.targets=[];for(var l=0;l<(o.targets||[]).length;l++){var u=(o.targets||[])[l],c=void 0;if(c=i.default.func(u)?u(s.x,s.y,e):u){for(var f=0;f<n.targetFields.length;f++){var d=ao(n.targetFields[f],2),p=d[0],v=d[1];if(p in c||v in c){c.x=c[p],c.y=c[v];break}}n.options.targets.push(c)}}var h=no.snap.set(t);return n.options=o,h},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};io.snapSize=lo;var uo=(0,ke.makeModifier)(lo,"snapSize");io.default=uo;var co={};Object.defineProperty(co,"__esModule",{value:!0}),co.snapEdges=co.default=void 0;var fo={start:function(t){var e=t.edges;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],io.snapSize.start(t)):null},set:io.snapSize.set,defaults:(0,j.default)((0,_e.default)(io.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};co.snapEdges=fo;var po=(0,ke.makeModifier)(fo,"snapEdges");co.default=po;var vo={};Object.defineProperty(vo,"__esModule",{value:!0}),Object.defineProperty(vo,"default",{enumerable:!0,get:function(){return Dr.default}});var ho={};Object.defineProperty(ho,"__esModule",{value:!0}),Object.defineProperty(ho,"default",{enumerable:!0,get:function(){return Dr.default}});var go={};Object.defineProperty(go,"__esModule",{value:!0}),go.default=void 0;var yo={aspectRatio:Pr.default,restrictEdges:Wr.default,restrict:Rr.default,restrictRect:qr.default,restrictSize:Kr.default,snapEdges:co.default,snap:no.default,snapSize:io.default,spring:vo.default,avoid:Cr.default,transform:ho.default,rubberband:eo.default};go.default=yo;var mo={};Object.defineProperty(mo,"__esModule",{value:!0}),mo.default=void 0;var bo={id:"modifiers",install:function(t){var e=t.interactStatic;for(var n in t.usePlugin(ke.default),t.usePlugin(_r.default),e.modifiers=go.default,go.default){var r=go.default[n],o=r._defaults,i=r._methods;o._methods=i,t.defaults.perAction[n]=o}}};mo.default=bo;var xo={};Object.defineProperty(xo,"__esModule",{value:!0}),xo.default=void 0;xo.default={};var wo={};function _o(t){return(_o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function So(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Po(t,e){return(Po=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Oo(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Mo(t);if(e){var o=Mo(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Eo(this,n)}}function Eo(t,e){return!e||"object"!==_o(e)&&"function"!=typeof e?To(t):e}function To(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Mo(t){return(Mo=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(wo,"__esModule",{value:!0}),wo.PointerEvent=wo.default=void 0;var jo=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Po(t,e)}(i,t);var e,n,r,o=Oo(i);function i(t,e,n,r,a,s){var l;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(l=o.call(this,a)).type=void 0,l.originalEvent=void 0,l.pointerId=void 0,l.pointerType=void 0,l.double=void 0,l.pageX=void 0,l.pageY=void 0,l.clientX=void 0,l.clientY=void 0,l.dt=void 0,l.eventable=void 0,W.pointerExtend(To(l),n),n!==e&&W.pointerExtend(To(l),e),l.timeStamp=s,l.originalEvent=n,l.type=t,l.pointerId=W.getPointerId(e),l.pointerType=W.getPointerType(e),l.target=r,l.currentTarget=null,"tap"===t){var u=a.getPointerIndex(e);l.dt=l.timeStamp-a.pointers[u].downTime;var c=l.timeStamp-a.tapTime;l.double=!!(a.prevTap&&"doubletap"!==a.prevTap.type&&a.prevTap.target===l.target&&c<500)}else"doubletap"===t&&(l.dt=e.timeStamp-a.tapTime);return l}return e=i,(n=[{key:"_subtractOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX-=e,this.pageY-=n,this.clientX-=e,this.clientY-=n,this}},{key:"_addOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX+=e,this.pageY+=n,this.clientX+=e,this.clientY+=n,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&So(e.prototype,n),r&&So(e,r),i}($.BaseEvent);wo.PointerEvent=wo.default=jo;var ko={};Object.defineProperty(ko,"__esModule",{value:!0}),ko.default=void 0;var Io={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(t){t.pointerEvents=Io,t.defaults.actions.pointerEvents=Io.defaults,(0,j.default)(t.actions.phaselessTypes,Io.types)},listeners:{"interactions:new":function(t){var e=t.interaction;e.prevTap=null,e.tapTime=0},"interactions:update-pointer":function(t){var e=t.down,n=t.pointerInfo;if(!e&&n.hold)return;n.hold={duration:1/0,timeout:null}},"interactions:move":function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;t.duplicate||n.pointerIsDown&&!n.pointerWasMoved||(n.pointerIsDown&&zo(t),Do({interaction:n,pointer:r,event:o,eventTarget:i,type:"move"},e))},"interactions:down":function(t,e){!function(t,e){for(var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.pointerIndex,s=n.pointers[a].hold,l=_.getPath(i),u={interaction:n,pointer:r,event:o,eventTarget:i,type:"hold",targets:[],path:l,node:null},c=0;c<l.length;c++){var f=l[c];u.node=f,e.fire("pointerEvents:collect-targets",u)}if(!u.targets.length)return;for(var d=1/0,p=0;p<u.targets.length;p++){var v=u.targets[p].eventable.options.holdDuration;v<d&&(d=v)}s.duration=d,s.timeout=setTimeout((function(){Do({interaction:n,eventTarget:i,pointer:r,event:o,type:"hold"},e)}),d)}(t,e),Do(t,e)},"interactions:up":function(t,e){zo(t),Do(t,e),function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;n.pointerWasMoved||Do({interaction:n,eventTarget:i,pointer:r,event:o,type:"tap"},e)}(t,e)},"interactions:cancel":function(t,e){zo(t),Do(t,e)}},PointerEvent:wo.PointerEvent,fire:Do,collectEventTargets:Ao,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Do(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.type,s=t.targets,l=void 0===s?Ao(t,e):s,u=new wo.PointerEvent(a,r,o,i,n,e.now());e.fire("pointerEvents:new",{pointerEvent:u});for(var c={interaction:n,pointer:r,event:o,eventTarget:i,targets:l,type:a,pointerEvent:u},f=0;f<l.length;f++){var d=l[f];for(var p in d.props||{})u[p]=d.props[p];var v=(0,A.default)(d.eventable,d.node);if(u._subtractOrigin(v),u.eventable=d.eventable,u.currentTarget=d.node,d.eventable.fire(u),u._addOrigin(v),u.immediatePropagationStopped||u.propagationStopped&&f+1<l.length&&l[f+1].node!==u.currentTarget)break}if(e.fire("pointerEvents:fired",c),"tap"===a){var h=u.double?Do({interaction:n,pointer:r,event:o,eventTarget:i,type:"doubletap"},e):u;n.prevTap=h,n.tapTime=h.timeStamp}return u}function Ao(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.type,s=n.getPointerIndex(r),l=n.pointers[s];if("tap"===a&&(n.pointerWasMoved||!l||l.downTarget!==i))return[];for(var u=_.getPath(i),c={interaction:n,pointer:r,event:o,eventTarget:i,type:a,path:u,targets:[],node:null},f=0;f<u.length;f++){var d=u[f];c.node=d,e.fire("pointerEvents:collect-targets",c)}return"hold"===a&&(c.targets=c.targets.filter((function(t){return t.eventable.options.holdDuration===n.pointers[s].hold.duration}))),c.targets}function zo(t){var e=t.interaction,n=t.pointerIndex,r=e.pointers[n].hold;r&&r.timeout&&(clearTimeout(r.timeout),r.timeout=null)}var Co=Io;ko.default=Co;var Ro={};function Fo(t){var e=t.interaction;e.holdIntervalHandle&&(clearInterval(e.holdIntervalHandle),e.holdIntervalHandle=null)}Object.defineProperty(Ro,"__esModule",{value:!0}),Ro.default=void 0;var Xo={id:"pointer-events/holdRepeat",install:function(t){t.usePlugin(ko.default);var e=t.pointerEvents;e.defaults.holdRepeatInterval=0,e.types.holdrepeat=t.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(t,e){return t["pointerEvents:".concat(e)]=Fo,t}),{"pointerEvents:new":function(t){var e=t.pointerEvent;"hold"===e.type&&(e.count=(e.count||0)+1)},"pointerEvents:fired":function(t,e){var n=t.interaction,r=t.pointerEvent,o=t.eventTarget,i=t.targets;if("hold"===r.type&&i.length){var a=i[0].eventable.options.holdRepeatInterval;a<=0||(n.holdIntervalHandle=setTimeout((function(){e.pointerEvents.fire({interaction:n,eventTarget:o,type:"hold",pointer:r,event:r},e)}),a))}}})};Ro.default=Xo;var Yo={};function Wo(t){return(0,j.default)(this.events.options,t),this}Object.defineProperty(Yo,"__esModule",{value:!0}),Yo.default=void 0;var Lo={id:"pointer-events/interactableTargets",install:function(t){var e=t.Interactable;e.prototype.pointerEvents=Wo;var n=e.prototype._backCompatOption;e.prototype._backCompatOption=function(t,e){var r=n.call(this,t,e);return r===this&&(this.events.options[t]=e),r}},listeners:{"pointerEvents:collect-targets":function(t,e){var n=t.targets,r=t.node,o=t.type,i=t.eventTarget;e.interactables.forEachMatch(r,(function(t){var e=t.events,a=e.options;e.types[o]&&e.types[o].length&&t.testIgnoreAllow(a,r,i)&&n.push({node:r,eventable:e,props:{interactable:t}})}))},"interactable:new":function(t){var e=t.interactable;e.events.getRect=function(t){return e.getRect(t)}},"interactable:set":function(t,e){var n=t.interactable,r=t.options;(0,j.default)(n.events.options,e.pointerEvents.defaults),(0,j.default)(n.events.options,r.pointerEvents||{})}}};Yo.default=Lo;var Bo={};Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.default=void 0;var Uo={id:"pointer-events",install:function(t){t.usePlugin(ko),t.usePlugin(Ro.default),t.usePlugin(Yo.default)}};Bo.default=Uo;var No={};Object.defineProperty(No,"__esModule",{value:!0}),No.default=void 0;No.default={};var Vo={};function qo(t){var e=t.Interactable;t.actions.phases.reflow=!0,e.prototype.reflow=function(e){return function(t,e,n){for(var r=i.default.string(t.target)?K.from(t._context.querySelectorAll(t.target)):[t.target],o=n.window.Promise,a=o?[]:null,s=function(){var i=r[l],s=t.getRect(i);if(!s)return"break";var u=K.find(n.interactions.list,(function(n){return n.interacting()&&n.interactable===t&&n.element===i&&n.prepared.name===e.name})),c=void 0;if(u)u.move(),a&&(c=u._reflowPromise||new o((function(t){u._reflowResolve=t})));else{var f=(0,k.tlbrToXywh)(s),d={page:{x:f.x,y:f.y},client:{x:f.x,y:f.y},timeStamp:n.now()},p=W.coordsToEvent(d);c=function(t,e,n,r,o){var i=t.interactions.new({pointerType:"reflow"}),a={interaction:i,event:o,pointer:o,eventTarget:n,phase:"reflow"};i.interactable=e,i.element=n,i.prevEvent=o,i.updatePointer(o,o,n,!0),W.setZeroCoords(i.coords.delta),(0,Xt.copyAction)(i.prepared,r),i._doPhase(a);var s=t.window.Promise,l=s?new s((function(t){i._reflowResolve=t})):void 0;i._reflowPromise=l,i.start(r,e,n),i._interacting?(i.move(a),i.end(o)):(i.stop(),i._reflowResolve());return i.removePointer(o,o),l}(n,t,i,e,p)}a&&a.push(c)},l=0;l<r.length;l++){if("break"===s())break}return a&&o.all(a).then((function(){return t}))}(this,e,t)}}Object.defineProperty(Vo,"__esModule",{value:!0}),Vo.install=qo,Vo.default=void 0;var $o={id:"reflow",install:qo,listeners:{"interactions:stop":function(t,e){var n=t.interaction;"reflow"===n.pointerType&&(n._reflowResolve&&n._reflowResolve(),K.remove(e.interactions.list,n))}}};Vo.default=$o;var Go={};Object.defineProperty(Go,"__esModule",{value:!0}),Go.default=void 0;Go.default={};var Ho={};Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.exchange=void 0;Ho.exchange={};var Ko={};Object.defineProperty(Ko,"__esModule",{value:!0}),Ko.default=void 0;Ko.default={};var Zo={exports:{}};function Jo(t){return(Jo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(Zo.exports,"__esModule",{value:!0}),Zo.exports.default=void 0,fr.default.use(xo.default),fr.default.use(se.default),fr.default.use(Je.default),fr.default.use(ae.default),fr.default.use(Tt.default),fr.default.use(Bo.default),fr.default.use(an.default),fr.default.use(mo.default),fr.default.use(oe.default),fr.default.use(Ot.default),fr.default.use(At.default),fr.default.use(Vo.default),fr.default.use(we.default),fr.default.use(Ko.default),fr.default.use(No.default),fr.default.__utils={exchange:Ho.exchange,displace:Go,pointer:W},fr.default.use(pe.default);var Qo=fr.default;if(Zo.exports.default=Qo,"object"===Jo(Zo)&&Zo)try{Zo.exports=fr.default}catch(t){}fr.default.default=fr.default,Zo=Zo.exports;var ti={exports:{}};function ei(t){return(ei="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(ti.exports,"__esModule",{value:!0}),ti.exports.default=void 0;var ni=Zo.default;if(ti.exports.default=ni,"object"===ei(ti)&&ti)try{ti.exports=Zo.default}catch(t){}return Zo.default.default=Zo.default,ti=ti.exports}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var normalizeHeaderName = __webpack_require__(26);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(10);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(10);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var settle = __webpack_require__(27);
var cookies = __webpack_require__(29);
var buildURL = __webpack_require__(7);
var buildFullPath = __webpack_require__(30);
var parseHeaders = __webpack_require__(33);
var isURLSameOrigin = __webpack_require__(34);
var createError = __webpack_require__(11);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if (
      (utils.isBlob(requestData) || utils.isFile(requestData)) &&
      requestData.type
    ) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(28);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(2)):undefined}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(0),o=n.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p,y,d,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,n,r,c=f(l);function l(){return i(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.loading,n=e.prefixCls,r=e.indicator,c=this.props.loadingText,i=t?n:"".concat(n,"-hide"),a=this.props,u=a.className,f=a.style,l="".concat(u," ").concat(i);return o.a.createElement("div",{className:l,style:f},o.a.createElement("div",{className:"".concat(n,"-mask")},o.a.createElement("div",{className:"".concat(n,"-icon")},r),o.a.createElement("div",{className:"".concat(n,"-text")},c)),o.a.createElement("div",{className:"".concat(n,"-content")},this.props.children))}}])&&a(t.prototype,n),r&&a(t,r),l}(o.a.PureComponent);p=b,y="defaultProps",d={loading:!1,text:"",prefixCls:"rc-loading",className:"",style:{},indicator:o.a.createElement("span",{className:"rc-loading-icon-default"})},y in p?Object.defineProperty(p,y,{value:d,enumerable:!0,configurable:!0,writable:!0}):p[y]=d}])}));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(17);
            var content = __webpack_require__(18);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(19);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n@keyframes fade-in-move-down {\r\n  0% {\r\n    left: 0;\r\n  }\r\n  100% {\r\n    left: 100%;\r\n  }\r\n}\r\n\r\n.rc-loading,\r\n.rc-loading-hide {\r\n  position: relative;\r\n}\r\n\r\n.rc-loading::before {\r\n  content: \"\";\r\n  display: table;\r\n}\r\n\r\n.rc-loading::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #000;\r\n  opacity: 0.5;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.rc-loading-mask {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: center;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n}\r\n.rc-loading .rc-loading-content {\r\n  opacity: 0.5;\r\n}\r\n\r\n.rc-loading-hide .rc-loading-mask {\r\n  display: none;\r\n}\r\n\r\n.rc-loading .rc-loading-mask {\r\n  z-index: 2;\r\n}\r\n\r\n.rc-loading .rc-loading-icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  z-index: 2;\r\n  width: 100%;\r\n  cursor: default;\r\n  margin-top: -12px;\r\n  color: #fff;\r\n}\r\n\r\n.rc-loading-icon-default {\r\n  border-width: 3px;\r\n  border-style: solid;\r\n  border-color: transparent #fff #fff #fff;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  animation: 3s linear 0s normal none infinite running spin;\r\n  filter: drop-shadow(0 0 2 rgba(0, 0, 0, 0.33));\r\n  display: inline-block;\r\n}\r\n\r\n.rc-loading .rc-loading-text {\r\n  position: absolute;\r\n  width: 100%;\r\n  color: #fff;\r\n  top: 50%;\r\n  padding-top: 24px;\r\n  font-size: 14px;\r\n  opacity: 1;\r\n}\r\n\r\n.rc-loading-spin {\r\n  animation: spin 2s infinite linear;\r\n}\r\n\r\n.rc-loading-move-right {\r\n  position: absolute;\r\n  animation: fade-in-move-down 5s linear infinite;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var bind = __webpack_require__(6);
var Axios = __webpack_require__(21);
var mergeConfig = __webpack_require__(12);
var defaults = __webpack_require__(9);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(13);
axios.CancelToken = __webpack_require__(35);
axios.isCancel = __webpack_require__(8);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(36);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var buildURL = __webpack_require__(7);
var InterceptorManager = __webpack_require__(22);
var dispatchRequest = __webpack_require__(23);
var mergeConfig = __webpack_require__(12);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var transformData = __webpack_require__(24);
var isCancel = __webpack_require__(8);
var defaults = __webpack_require__(9);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(11);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(31);
var combineURLs = __webpack_require__(32);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(13);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/style/styles.scss
/* harmony default export */ var styles = (__webpack_require__.p + "styles.css");
// EXTERNAL MODULE: ./node_modules/react-loadingmask/dist/react-loadingmask.css
var react_loadingmask = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.module.js
var preact_module = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(3);
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);

// EXTERNAL MODULE: ./node_modules/interactjs/dist/interact.min.js
var interact_min = __webpack_require__(5);
var interact_min_default = /*#__PURE__*/__webpack_require__.n(interact_min);

// CONCATENATED MODULE: ./src/model/point.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Point = /*#__PURE__*/function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "equals",
    value: function equals(pt) {
      return pt.x === this.x && pt.y === this.y;
    }
  }, {
    key: "norm",
    value: function norm() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "add",
    value: function add(pt) {
      return new Point(this.x + pt.x, this.y + pt.y);
    }
  }, {
    key: "sub",
    value: function sub(pt) {
      return new Point(this.x - pt.x, this.y - pt.y);
    }
  }, {
    key: "mult",
    value: function mult(scalar) {
      return new Point(this.x * scalar, this.y * scalar);
    }
  }, {
    key: "div",
    value: function div(scalar) {
      return new Point(this.x / scalar, this.y / scalar);
    }
  }, {
    key: "distTo",
    value: function distTo(pt) {
      var dx = this.x - pt.x;
      var dy = this.y - pt.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, {
    key: "angle",
    value: function angle(pt) {
      var dx = this.x - pt.x;
      var dy = this.y - pt.y;
      return Math.atan2(dy, dx);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Point(x:".concat(this.x, ", y:").concat(this.y, ")");
    }
  }]);

  return Point;
}();
function middlePoint(pt1, pt2) {
  return new Point((pt1.x + pt2.x) / 2, (pt1.y + pt2.y) / 2);
}
function pointAtDistance(p0, p1, dist) {
  if (p1.equals(p0)) {
    throw new Error('Input points cannot be equal');
  }

  var ratio = dist / p1.sub(p0).norm();
  return p0.add(p1.sub(p0).mult(ratio));
}
function pointsAtDistanceNorm(p1, p2, d) {
  var p0 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (p1.equals(p2)) {
    throw new Error('Input points cannot be equal');
  }

  if (p0 == null) {
    p0 = p1.add(p2).div(2.0);
  }

  var pa = new Point(0, 0);
  var pb = new Point(0, 0); // Points at distance d from the normal line passing from the center of p1 and p2 (i.e. p0)

  if (p1.x === p2.x) {
    pa.y = pb.y = p0.y;
    pa.x -= d;
    pb.x += d;
  } else if (p1.y === p2.y) {
    pa.x = pb.x = p0.x;
    pa.y -= d;
    pb.y += d;
  } else {
    var ddx = p2.x - p1.x;
    var ddy = p2.y - p1.y;
    var m = -ddx / ddy; // m' = -1/m

    var dx = d / Math.sqrt(1 + m * m);

    if (ddy < 0) {
      dx = -dx;
    }

    pa.x = p0.x + dx;
    pb.x = p0.x - dx;
    pa.y = m * (pa.x - p0.x) + p0.y;
    pb.y = m * (pb.x - p0.x) + p0.y;
  }

  return [pa, pb];
}
function translateSegmentParallel(p1, p2, d) {
  var p1s = pointsAtDistanceNorm(p1, p2, d, p1);
  var p2s = pointsAtDistanceNorm(p1, p2, d, p2);
  return [p1s[0], p2s[0]];
}
function toMillimeters(v, units) {
  switch (units) {
    case 'mm':
      return v;

    case 'inch':
      return v * 25.4;

    case 'cm':
      return v * 10.0;

    default:
      throw new Error('Unknown input units when creating the photo standard definition');
  }
}
function rotatedRectangle(center, width, height, angle) {
  var w2 = width / 2;
  var h2 = height / 2;
  var cosAngle = Math.cos(angle);
  var sinAngle = Math.sin(angle);
  var corners = [];

  for (var _i = 0, _arr = [[-w2, -h2], [-w2, h2], [w2, h2], [w2, -h2]]; _i < _arr.length; _i++) {
    var p = _arr[_i];
    var x = center.x + p[0] * cosAngle - p[1] * sinAngle;
    var y = center.y + p[0] * sinAngle + p[1] * cosAngle;
    corners.push(new Point(x, y));
  }

  return corners;
}
// CONCATENATED MODULE: ./src/model/photodimensions.js
function photodimensions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var PhotoDimensions = function PhotoDimensions() {
  photodimensions_classCallCheck(this, PhotoDimensions);

  this.pictureWidth = void 0;
  this.pictureHeight = void 0;
  this.units = void 0;
  this.faceHeight = void 0;
  this.crownTop = void 0;
  this.dpi = void 0;
};
function getCroppingCenter(p, crownPoint, chinPoint) {
  if (!(p.crownTop > 0)) {
    // Estimate the center of the picture to be the median point between the crown point and the chin point
    return middlePoint(crownPoint, chinPoint);
  }

  var crownToBottom = p.pictureHeight - p.crownTop;
  var crownToCenter = crownToBottom - p.pictureHeight / 2;
  var mmToPixRatio = crownPoint.sub(chinPoint).norm() / p.faceHeight;
  var crownToCenterPix = mmToPixRatio * crownToCenter;
  return pointAtDistance(crownPoint, chinPoint, crownToCenterPix);
}
function getCroppingRectangle(p, crownPoint, chinPoint) {
  var centerPic = getCroppingCenter(p, crownPoint, chinPoint);
  var faceHeightPix = crownPoint.distTo(chinPoint);
  var normal = crownPoint.angle(chinPoint);
  var scale = faceHeightPix / p.faceHeight;
  var cropHeightPix = p.pictureHeight * scale;
  var cropWidthPix = p.pictureWidth * scale;
  return rotatedRectangle(centerPic, cropWidthPix, cropHeightPix, normal);
}
// CONCATENATED MODULE: ./src/shared/event-emitter/events.js
var Events = {
  UPDATE_LANDMARK: 'update_landmark',
  LOADED_IMAGE: 'loaded_image'
};
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(4);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/components/editor/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function editor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function editor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function editor_createClass(Constructor, protoProps, staticProps) { if (protoProps) editor_defineProperties(Constructor.prototype, protoProps); if (staticProps) editor_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var editor_Editor = /*#__PURE__*/function (_Component) {
  _inherits(Editor, _Component);

  var _super = _createSuper(Editor);

  function Editor() {
    var _this;

    editor_classCallCheck(this, Editor);

    _this = _super.call(this); // size of circle markers

    _this.toDataURL = function (url) {
      return fetch(url).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();

          reader.onloadend = function () {
            return resolve(reader.result);
          };

          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      });
    };

    _this._crownChinMarkSize = 16;
    _this.state = {
      crownPosition: {},
      chinPosition: {},
      landmarkVisibility: true,
      image: null
    };
    return _this;
  }

  editor_createClass(Editor, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      console.log(prevProps);
      console.log(this.props);

      if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
        console.log('loadAndRenderImage');
        this.loadAndRenderImage(this.props.imageUrl);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._imgElmt = document.querySelector('#inputPhoto');
      this._viewPortElmt = document.querySelector('#viewport');
      this._crownMarkElmt = document.querySelector('#crownMark');
      this._chinMarkElmt = document.querySelector('#chinMark');
      var lmSize = '' + this._crownChinMarkSize + 'px';
      this._crownMarkElmt.style.width = lmSize;
      this._crownMarkElmt.style.height = lmSize;
      this._chinMarkElmt.style.width = lmSize;
      this._chinMarkElmt.style.height = lmSize;
      this._middleLine = document.querySelector('#middleLine');
      this._crownLine = document.querySelector('#crownLine');
      this._chinLine = document.querySelector('#chinLine');
      this._faceEllipse = document.querySelector('#faceEllipse');
      this._cropArea = document.querySelector('#cropArea');
      this._imageArea = document.querySelector('#imageArea');
      this._cropRect = document.querySelector('#cropRect');
      var standard = {
        'id': 'ua_visa_photo',
        'text': 'Ukraine Visa 3x4 cm (30x40 mm)',
        'country': 'Ukraine',
        'docType': 'Visa',
        'dimensions': {
          'pictureWidth': 30.0,
          'pictureHeight': 40.0,
          'units': 'mm',
          'dpi': 600.0,
          'faceHeight': 31.0,
          'crownTop': 2.5
        },
        'backgroundColor': '#eeeeee',
        'printable': true,
        'officialLinks': ['http://mfa.gov.ua/ua/consular-affairs/entering-ukraine/visa-mfa-branches'],
        'comments': ''
      };
      this._photoDimensions = standard.dimensions;
      interact_min_default()('.landmark').draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [interact_min_default.a.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true,
          elementRect: {
            top: 0.5,
            left: 0.5,
            bottom: 1,
            right: 1
          }
        })],
        // call this function on every dragmove event
        onmove: function onmove(event) {
          var target = event.target; // keep the dragged position in the x/y attributes

          var x = (parseFloat(target.getAttribute('x')) || 0) + event.dx;
          var y = (parseFloat(target.getAttribute('y')) || 0) + event.dy; // translate the element

          _this2.translateElement(target, new Point(x, y));

          _this2.renderSvgFrame();
        },
        // call this function on every dragend event
        onend: function onend(event) {
          _this2.updateLandMarks();
        }
      });
    }
  }, {
    key: "loadAndRenderImage",
    value: function loadAndRenderImage(url) {
      var _this3 = this;

      this.toDataURL(url).then(function (data) {
        _this3.setState({
          image: data
        });
      });
    }
  }, {
    key: "onLoadImage",
    value: function onLoadImage() {
      this._imageWidth = this._imgElmt.naturalWidth;
      this._imageHeight = this._imgElmt.naturalHeight;

      if (this._imageWidth > 100 && this._imageHeight > 100) {
        this._imgElmt.style.visibility = 'visible';
        this.calculateViewPort();
        this.zoomFit();
        this.renderImage();
        this.setLandMarks(new Point(161, 50), new Point(150, 150));
      }

      this.props.emitter.emit(Events.LOADED_IMAGE, {
        viewPortWidth: this._viewPortWidth,
        viewPortHeight: this._viewPortHeight
      });
      this.scaledImageWidth = this._imageArea.getAttribute('width');
      this.scaledImageHeight = this._imageArea.getAttribute('height');
      console.log(this.scaledImageWidth);
    }
  }, {
    key: "calculateViewPort",
    value: function calculateViewPort() {
      if (!this._viewPortElmt) {
        return;
      }

      this._viewPortWidth = this._viewPortElmt.clientWidth;
      this._viewPortHeight = this._viewPortElmt.clientHeight;
    }
  }, {
    key: "zoomFit",
    value: function zoomFit() {
      if (!(this._imageWidth > 0) || !(this._imageHeight > 0)) {
        return;
      }

      var xRatio = this._viewPortWidth / this._imageWidth;
      var yRatio = this._viewPortHeight / this._imageHeight;
      this._ratio = xRatio < yRatio ? xRatio : yRatio;
      this._xLeft = this._viewPortWidth / 2 - this._ratio * this._imageWidth / 2;
      this._yTop = this._viewPortHeight / 2 - this._ratio * this._imageHeight / 2;
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var xw = this._imageWidth * this._ratio;
      var yh = this._imageHeight * this._ratio;
      this._imgElmt.width = xw;
      this._imgElmt.height = yh;
      this.translateElement(this._imgElmt, new Point(this._xLeft, this._yTop));
    }
  }, {
    key: "setLandMarks",
    value: function setLandMarks(crownPoint, chinPoint) {
      this.crownPoint = crownPoint;
      this.chinPoint = chinPoint;
      this.renderLandMarks();
    }
  }, {
    key: "updateLandMarks",
    value: function updateLandMarks() {
      this.crownPoint = this.screenToPixel(this._crownMarkElmt, true);
      this.chinPoint = this.screenToPixel(this._chinMarkElmt, true);
      this.setState({
        crownPosition: this.crownPoint,
        chinPosition: this.chinPoint
      });
      var height = parseInt(this._cropArea.getAttribute('height'));
      var width = parseInt(this._cropArea.getAttribute('width'));
      var imageHeight = parseInt(this._imgElmt.getAttribute('height'));
      var imageWidth = parseInt(this._imgElmt.getAttribute('width')); //console.log(imageWidth, imageHeight);

      var crownPoint = {
        x: this.crownPoint.x * this._ratio / imageWidth * 100,
        y: this.crownPoint.y * this._ratio / imageHeight * 100
      };
      var chinPoint = {
        x: this.chinPoint.x * this._ratio / imageWidth * 100,
        y: this.chinPoint.y * this._ratio / imageHeight * 100
      };
      console.log("x:".concat(crownPoint.x, "%, y:").concat(crownPoint.y, "%"));
      this.props.emitter.emit(Events.UPDATE_LANDMARK, {
        crownPosition: crownPoint,
        chinPosition: chinPoint
      });
    }
  }, {
    key: "renderLandMarks",
    value: function renderLandMarks() {
      if (this.crownPoint && this.crownPoint.x && this.crownPoint.y && this.chinPoint && this.chinPoint.x && this.chinPoint.y && this._imageWidth > 100 && this._imageHeight > 100) {
        var p1 = this.pixelToScreen(this.crownPoint);
        var p2 = this.pixelToScreen(this.chinPoint);
        this.translateElement(this._crownMarkElmt, p1);
        this.translateElement(this._chinMarkElmt, p2);
        this.renderSvgFrame();
        this.landmarkVisibility = 'visible';
      } else {
        this.landmarkVisibility = 'hidden';
      }
    }
  }, {
    key: "pixelToScreen",
    value: function pixelToScreen(pt) {
      return new Point(this._xLeft + pt.x
      /** this._ratio*/
      - this._crownChinMarkSize / 2, this._yTop + pt.y
      /** this._ratio*/
      - this._crownChinMarkSize / 2);
    }
  }, {
    key: "screenToPixel",
    value: function screenToPixel(pt) {
      var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (pt.x === undefined || pt.y === undefined) {
        pt = this.getMarkScreenCenter(pt);
      }

      var xPrime = (pt.x - this._xLeft) / this._ratio;
      var yPrime = (pt.y - this._yTop) / this._ratio;

      if (round) {
        return new Point(Math.round(xPrime), Math.round(yPrime));
      }

      return new Point(xPrime, yPrime);
    }
  }, {
    key: "getMarkScreenCenter",
    value: function getMarkScreenCenter(elmt) {
      var x = parseFloat(elmt.getAttribute('x')) + this._crownChinMarkSize / 2.0;
      var y = parseFloat(elmt.getAttribute('y')) + this._crownChinMarkSize / 2.0;
      return new Point(x, y);
    }
  }, {
    key: "translateElement",
    value: function translateElement(elmt, pt) {
      // Translate the element position
      elmt.style.transform = elmt.style.webkitTransform = "translate(".concat(pt.x, "px, ").concat(pt.y, "px)"); // Store it in attached properties

      elmt.setAttribute('x', pt.x);
      elmt.setAttribute('y', pt.y);
    }
  }, {
    key: "renderSvgFrame",
    value: function renderSvgFrame() {
      var _this4 = this;

      var p1 = this.getMarkScreenCenter(this._crownMarkElmt);
      var p2 = this.getMarkScreenCenter(this._chinMarkElmt); // Render middle line

      this._renderSegment(this._middleLine, p1, p2);

      var faceHeight = p1.distTo(p2);
      var crownSegment = pointsAtDistanceNorm(p1, p2, faceHeight * 0.5, p1);

      this._renderSegment(this._crownLine, crownSegment[0], crownSegment[1]);

      var chinSegment = pointsAtDistanceNorm(p1, p2, faceHeight * 0.5, p2);

      this._renderSegment(this._chinLine, chinSegment[0], chinSegment[1]); // Render face ellipse


      var ra = faceHeight / 2;
      var rb = 0.68 * ra;
      var pc = middlePoint(p1, p2);
      var angleRad = p2.angle(p1);
      var angleDeg = angleRad * 180 / Math.PI;

      this._faceEllipse.setAttribute('rx', ra);

      this._faceEllipse.setAttribute('ry', rb);

      this._faceEllipse.setAttribute('cx', pc.x);

      this._faceEllipse.setAttribute('cy', pc.y);

      this._faceEllipse.setAttribute('transform', "rotate(".concat(angleDeg, ", ").concat(pc.x, ", ").concat(pc.y, ")")); // Render photo cropping rectangle


      if (!this._photoDimensions) {
        return;
      }

      var cropCenter = getCroppingCenter(this._photoDimensions, p1, p2);
      var scale = faceHeight / this._photoDimensions.faceHeight;
      var dx = this._photoDimensions.pictureHeight * scale;
      var dy = this._photoDimensions.pictureWidth * scale;
      var svgElmt = this._imageArea;
      svgElmt.setAttribute('x', this._xLeft);
      svgElmt.setAttribute('y', this._yTop);
      svgElmt.setAttribute('width', this._imageWidth * this._ratio);
      svgElmt.setAttribute('height', this._imageHeight * this._ratio);

      this._setRotatedRect(this._cropArea, cropCenter, dx, dy, angleDeg);

      this._setRotatedRect(this._cropRect, cropCenter, dx, dy, angleDeg);

      var points = rotatedRectangle(cropCenter, dx, dy, angleRad);
      this.frameCoords = points;
      var invalidCrop = points.some(function (pt) {
        var ptPix = _this4.screenToPixel(pt);

        return ptPix.x < 0 || ptPix.x > _this4._imageWidth || ptPix.y < 0 || ptPix.y > _this4._imageHeight;
      });

      this._cropRect.setAttribute('stroke', invalidCrop ? 'red' : 'green');
    }
  }, {
    key: "_setRotatedRect",
    value: function _setRotatedRect(svgElmt, center, w, h, angle) {
      svgElmt.setAttribute('x', center.x - w / 2);
      svgElmt.setAttribute('y', center.y - h / 2);
      svgElmt.setAttribute('width', w);
      svgElmt.setAttribute('height', h);
      svgElmt.setAttribute('transform', "rotate(".concat(angle, ", ").concat(center.x, ", ").concat(center.y, ")"));
    }
  }, {
    key: "_renderSegment",
    value: function _renderSegment(svdElmt, p1, p2) {
      svdElmt.setAttribute('x1', p1.x);
      svdElmt.setAttribute('y1', p1.y);
      svdElmt.setAttribute('x2', p2.x);
      svdElmt.setAttribute('y2', p2.y);
    }
  }, {
    key: "imageLoadFailed",
    value: function imageLoadFailed() {}
  }, {
    key: "render",
    value: function render(props, state, context) {
      return Object(preact_module["h"])("div", {
        id: "viewport"
      }, Object(preact_module["h"])("img", {
        id: "inputPhoto",
        alt: "Input Image",
        title: "Input picture",
        src: this.state.image,
        onLoad: this.onLoadImage.bind(this),
        onError: this.imageLoadFailed.bind(this)
      }), Object(preact_module["h"])("svg", {
        className: "box",
        style: {
          visibility: this.state.landmarkVisibility ? 'visible' : 'hidden'
        },
        "pointer-events": "none"
      }, Object(preact_module["h"])("image", {
        "class": "inputPhoto",
        "xlink:href": this.state.image,
        x: "0",
        y: "0",
        height: "0",
        width: "0"
      }), Object(preact_module["h"])("defs", null, Object(preact_module["h"])("mask", {
        id: "mask",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%"
      }, Object(preact_module["h"])("rect", {
        id: "imageArea",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: "#ffffff"
      }), Object(preact_module["h"])("rect", {
        id: "cropArea",
        x: "0",
        y: "0",
        width: "200",
        height: "200",
        fill: "#000"
      }))), Object(preact_module["h"])("rect", {
        x: "0",
        y: "0",
        width: "1000",
        height: "1000",
        "fill-opacity": "0.4",
        mask: "url(#mask)"
      }), Object(preact_module["h"])("rect", {
        id: "cropRect",
        x: "0",
        y: "0",
        width: "200",
        height: "200",
        fill: "none"
      }), Object(preact_module["h"])("line", {
        id: "heightLine",
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "0",
        className: "dimension-line"
      }), Object(preact_module["h"])("line", {
        id: "widthLine",
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "0",
        className: "dimension-line"
      }), Object(preact_module["h"])("line", {
        id: "middleLine",
        x1: "0",
        y1: "0",
        x2: "200",
        y2: "200",
        className: "annotation"
      }), Object(preact_module["h"])("line", {
        id: "crownLine",
        x1: "0",
        y1: "0",
        x2: "200",
        y2: "200",
        className: "annotation"
      }), Object(preact_module["h"])("line", {
        id: "chinLine",
        x1: "0",
        y1: "0",
        x2: "200",
        y2: "200",
        className: "annotation"
      }), Object(preact_module["h"])("ellipse", {
        id: "faceEllipse",
        cx: "100",
        cy: "50",
        rx: "100",
        ry: "50",
        fill: "none",
        className: "annotation"
      })), Object(preact_module["h"])("div", {
        className: "landmark",
        id: "crownMark",
        style: {
          visibility: this.state.landmarkVisibility ? 'visible' : 'hidden'
        }
      }), Object(preact_module["h"])("div", {
        className: "landmark",
        id: "chinMark",
        style: {
          visibility: this.state.landmarkVisibility ? 'visible' : 'hidden'
        }
      }));
    }
  }]);

  return Editor;
}(preact_module["a" /* Component */]);

/* harmony default export */ var editor = (editor_Editor);
// EXTERNAL MODULE: ./node_modules/react-loadingmask/dist/react-loadingmask.js
var dist_react_loadingmask = __webpack_require__(14);
var dist_react_loadingmask_default = /*#__PURE__*/__webpack_require__.n(dist_react_loadingmask);

// CONCATENATED MODULE: ./src/components/preview/index.js
function preview_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { preview_typeof = function _typeof(obj) { return typeof obj; }; } else { preview_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return preview_typeof(obj); }

function preview_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function preview_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function preview_createClass(Constructor, protoProps, staticProps) { if (protoProps) preview_defineProperties(Constructor.prototype, protoProps); if (staticProps) preview_defineProperties(Constructor, staticProps); return Constructor; }

function preview_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) preview_setPrototypeOf(subClass, superClass); }

function preview_setPrototypeOf(o, p) { preview_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return preview_setPrototypeOf(o, p); }

function preview_createSuper(Derived) { var hasNativeReflectConstruct = preview_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = preview_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = preview_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return preview_possibleConstructorReturn(this, result); }; }

function preview_possibleConstructorReturn(self, call) { if (call && (preview_typeof(call) === "object" || typeof call === "function")) { return call; } return preview_assertThisInitialized(self); }

function preview_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function preview_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function preview_getPrototypeOf(o) { preview_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return preview_getPrototypeOf(o); }






var preview_Preview = /*#__PURE__*/function (_Component) {
  preview_inherits(Preview, _Component);

  var _super = preview_createSuper(Preview);

  function Preview() {
    var _this;

    preview_classCallCheck(this, Preview);

    _this = _super.call(this);
    _this.image = new Image();
    _this.state = {
      preview: null,
      cropArea: {
        x: 50,
        y: 50,
        w: 50,
        h: 50
      }
    };
    return _this;
  }

  preview_createClass(Preview, [{
    key: "emitted",
    value: function emitted(dATA) {
      console.log(dATA); // true
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.emitter.on(Events.LOADED_IMAGE, function (data) {
        console.log(data);
      });
      this.props.emitter.on(Events.UPDATE_LANDMARK, function (data) {
        console.log(data);

        _this2.setState({
          cropArea: {
            x: data.crownPosition.x,
            y: data.crownPosition.y,
            w: data.chinPosition.x,
            h: data.chinPosition.y
          }
        });
      });
      this.canvas = document.querySelector("#canvasPreview");
      this.ctx = this.canvas.getContext('2d');
      this.canvas.style.width = '300px';
      this.canvas.style.height = '400px';
      this.image.src = "https://image.shutterstock.com/image-photo/beauty-woman-face-portrait-beautiful-260nw-323982494.jpg";

      this.image.onload = function () {
        _this2.ctx.drawImage(_this2.image, _this2.state.cropArea.x, _this2.state.cropArea.y, // Start at 70/20 pixels from the left and the top of the image (crop),
        50, _this2.state.cropArea.h, // "Get" a `50 * 50` (w * h) area from the source image (crop),
        0, 0, // Place the result at 0, 0 in the canvas,
        400, 300); // With as width / height: 100 * 100 (scale)

      }; //https://image.shutterstock.com/image-photo/beauty-woman-face-portrait-beautiful-260nw-323982494.jpg

    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, nextContext) {
      var _this3 = this;

      console.log();

      if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
        console.log(this.props.imageUrl);
        axios_default.a.post('http://localhost:5000/api/render-photo', {
          url: this.props.imageUrl,
          size: this.props.previewSize
        }).then(function (response) {
          // handle success
          console.log(response.data);

          _this3.setState({
            preview: 'data:image/png;base64, ' + response.data
          });
        })["catch"](function (error) {
          // handle error
          console.log(error);
        });
      }
    }
  }, {
    key: "render",
    value: function render(props, state, context) {
      return Object(preact_module["h"])(dist_react_loadingmask_default.a, {
        loading: this.state.preview == null,
        text: "loading..."
      }, Object(preact_module["h"])("div", {
        style: {
          width: '200px',
          height: '200px'
        }
      }, Object(preact_module["h"])("canvas", {
        id: "canvasPreview",
        style: {
          display: "none"
        }
      }), Object(preact_module["h"])("svg", {
        width: "3cm",
        height: "4cm",
        version: "1.1"
      }, Object(preact_module["h"])("image", {
        "xlink:href": this.state.preview,
        x: "0",
        y: "0",
        height: "100%",
        width: "100%"
      }))));
    }
  }]);

  return Preview;
}(preact_module["a" /* Component */]);

/* harmony default export */ var preview = (preview_Preview);
// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 1 modules
var compat_module = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/app.js
function app_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { app_typeof = function _typeof(obj) { return typeof obj; }; } else { app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return app_typeof(obj); }

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }

function app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) app_setPrototypeOf(subClass, superClass); }

function app_setPrototypeOf(o, p) { app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return app_setPrototypeOf(o, p); }

function app_createSuper(Derived) { var hasNativeReflectConstruct = app_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = app_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = app_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return app_possibleConstructorReturn(this, result); }; }

function app_possibleConstructorReturn(self, call) { if (call && (app_typeof(call) === "object" || typeof call === "function")) { return call; } return app_assertThisInitialized(self); }

function app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function app_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function app_getPrototypeOf(o) { app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return app_getPrototypeOf(o); }







var app_App = /*#__PURE__*/function (_Component) {
  app_inherits(App, _Component);

  var _super = app_createSuper(App);

  function App() {
    var _this;

    app_classCallCheck(this, App);

    _this = _super.call(this);

    _this.switchView = function () {
      _this.setState({
        view: _this.state.view === 'editor' ? 'preview' : 'editor',
        imageUrl: _this.state.imageUrl
      });
    };

    _this.setImageUrl = function (url) {
      _this.setState({
        imageUrl: url
      });
    };

    _this.state = {
      view: 'editor'
    };
    return _this;
  }

  app_createClass(App, [{
    key: "render",
    value: function render(props, state, context) {
      this.emitter = new eventemitter3_default.a();
      return Object(preact_module["h"])("div", {
        "class": "",
        style: {
          display: "flex"
        }
      }, Object(preact_module["h"])(editor, {
        emitter: this.emitter,
        imageUrl: this.state.imageUrl
      }), Object(preact_module["h"])(preview, {
        emitter: this.emitter,
        imageUrl: this.state.imageUrl,
        previewSize: this.props.options.preview.size
      }), Object(preact_module["h"])("button", {
        style: {
          'margin': '0 auto'
        },
        onClick: this.switchView.bind(this)
      }, this.state.view === 'editor' ? 'Preview' : 'Edit'));
    }
  }]);

  return App;
}(preact_module["a" /* Component */]);


// CONCATENATED MODULE: ./src/index.js
function src_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { src_typeof = function _typeof(obj) { return typeof obj; }; } else { src_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return src_typeof(obj); }

function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) src_setPrototypeOf(subClass, superClass); }

function src_setPrototypeOf(o, p) { src_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return src_setPrototypeOf(o, p); }

function src_createSuper(Derived) { var hasNativeReflectConstruct = src_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = src_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = src_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return src_possibleConstructorReturn(this, result); }; }

function src_possibleConstructorReturn(self, call) { if (call && (src_typeof(call) === "object" || typeof call === "function")) { return call; } return src_assertThisInitialized(self); }

function src_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function src_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function src_getPrototypeOf(o) { src_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return src_getPrototypeOf(o); }







var src_PhotoPassport = /*#__PURE__*/function (_Component) {
  src_inherits(PhotoPassport, _Component);

  var _super = src_createSuper(PhotoPassport);

  function PhotoPassport(options) {
    var _this;

    src_classCallCheck(this, PhotoPassport);

    _this = _super.call(this);

    _this.setImage = function (imageUrl) {
      _this.child.current.setImageUrl(imageUrl);
    };

    _this.child = Object(preact_module["g" /* createRef */])();
    var defaults = {
      preview: {
        size: 250
      }
    }; //options = {...options, defaults};

    options = Object.assign({}, defaults, options);
    console.log(options);
    var container = document.getElementById(options.container) || document.body; //container.addEventListener('contextmenu', event => event.preventDefault());

    Object(preact_module["k" /* render */])(Object(preact_module["h"])(app_App, {
      ref: _this.child,
      options: options
    }), container);
    return _this;
  }

  return PhotoPassport;
}(preact_module["a" /* Component */]);

/* harmony default export */ var src = __webpack_exports__["default"] = (src_PhotoPassport);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=bundle.js.map