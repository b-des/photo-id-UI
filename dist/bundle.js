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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return p; });
/* unused harmony export isValidElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return n; });
var n,l,u,t,i,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var t,i=arguments,o={};for(t in l)"key"!==t&&"ref"!==t&&(o[t]=l[t]);if(arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(i[t]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(t in n.defaultProps)void 0===o[t]&&(o[t]=n.defaultProps[t]);return v(n,o,l&&l.key,l&&l.ref)}function v(l,u,t,i){var o={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return{}}function y(n){return n.children}function d(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__?m(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&((i=n.debounceRendering)||t)(k)}function k(){var n,l,t,i,o,r,f;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(t=void 0,i=void 0,r=(o=(l=n).__v).__e,(f=l.__P)&&(t=[],i=T(f,o,s({},o),l.__n,void 0!==f.ownerSVGElement,null,t,null==r?m(o):r),$(t,o),i!=r&&w(o)))}function _(n,l,u,t,i,o,r,c,s){var h,v,p,y,d,w,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=o?o[0]:_?m(u,0):null),h=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null}if(y=T(n,u,p=p||f,t,i,o,r,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(v,u.__c||y,u)),null!=y){if(null==w&&(w=y),null!=u.__d)y=u.__d,u.__d=null;else if(o==p||y!=c||null==y.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(y);else{for(d=c,v=0;(d=d.nextSibling)&&v<_;v+=2)if(d==y)break n;n.insertBefore(y,c)}"option"==l.type&&(n.value="")}c=y.nextSibling,"function"==typeof l.type&&(l.__d=y)}}return h++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&a(o[h]);for(h=_;h--;)null!=k[h]&&A(k[h],k[h]);if(g)for(h=0;h<g.length;h++)z(g[h],g[++h],g[++h])}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)b(n[t],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,t,i){var o;for(o in u)o in l||P(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||P(n,o,l[o],u[o],t)}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function P(n,l,u,t,i){var o,r,f,e,c;if(i?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof t&&(o.cssText="",t=null),t)for(r in t)u&&r in u||C(o,r,"");if(u)for(f in u)t&&u[f]===t[f]||C(o,f,u[f])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function T(l,u,t,i,o,r,f,e,c){var a,h,v,p,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,x=(a=P.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new d(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=i,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,P.getDerivedStateFromProps(k,h.__s))),p=h.props,m=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=t.__e,u.__k=t.__k,h.__h.length&&f.push(h),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,m,w)})}h.context=C,h.props=k,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),u.__k=b(null!=a&&a.type==y&&null==a.key?a.props.children:a),null!=h.getChildContext&&(i=s(s({},i),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(p,m)),_(l,u,t,i,o,r,f,e,c),h.base=u.__e,h.__h.length&&f.push(h),g&&(h.__E=h.__=null),h.__e=null}else u.__e=j(t.__e,u,t,i,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,t)}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,t,i,o,r,c){var s,a,h,v,p,y=u.props,d=l.props;if(i="svg"===l.type||i,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),y!==d&&n.data!=d&&(n.data=d);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),h=(y=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!c){if(y===f)for(y={},p=0;p<n.attributes.length;p++)y[n.attributes[p].name]=n.attributes[p].value;(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||""))}x(n,d,y,i,c),l.__k=l.props.children,v||_(n,l,u,t,"foreignObject"!==l.type&&i,o,r,f,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))}return n}function z(l,u,t){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function A(l,u,t){var i,o,r;if(n.unmount&&n.unmount(l),(i=l.ref)&&(i.current&&i.current!==l.__e||z(i,null,u)),t||"function"==typeof l.type||(t=null!=(o=l.__e)),l.__e=l.__d=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(r=0;r<i.length;r++)i[r]&&A(i[r],u,t);null!=o&&a(o)}function D(n,l,u){return this.constructor(n,u)}function E(l,u,t){var i,r,c;n.__&&n.__(l,u),r=(i=t===o)?null:t&&t.__k||u.__k,l=h(y,null,[l]),c=[],T(u,(i?u:t||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:r?null:e.slice.call(u.childNodes),c,t||f,i),$(c,l)}function H(n,l){E(n,l,o)}function I(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)}function L(n){var l={},u={__c:"__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&t.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u,t;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(t=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(t=!0,u.componentDidCatch(n)),t)return g(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},d.prototype.render=y,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,r=0;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.module.js
var preact_module = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_t,hooks_module_u,hooks_module_r,i=[],hooks_module_o=preact_module["j" /* options */].__r,f=preact_module["j" /* options */].diffed,c=preact_module["j" /* options */].__c,hooks_module_e=preact_module["j" /* options */].unmount;function a(t){preact_module["j" /* options */].__h&&preact_module["j" /* options */].__h(hooks_module_u);var r=hooks_module_u.__H||(hooks_module_u.__H={t:[],u:[]});return t>=r.t.length&&r.t.push({}),r.t[t]}function v(n){return m(E,n)}function m(n,r,i){var o=a(hooks_module_t++);return o.__c||(o.__c=hooks_module_u,o.i=[i?i(r):E(void 0,r),function(t){var u=n(o.i[0],t);o.i[0]!==u&&(o.i[0]=u,o.__c.setState({}))}]),o.i}function p(n,r){var i=a(hooks_module_t++);x(i.o,r)&&(i.i=n,i.o=r,hooks_module_u.__H.u.push(i))}function l(n,r){var i=a(hooks_module_t++);x(i.o,r)&&(i.i=n,i.o=r,hooks_module_u.__h.push(i))}function d(n){return y(function(){return{current:n}},[])}function s(n,t,u){l(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function y(n,u){var r=a(hooks_module_t++);return x(r.o,u)?(r.o=u,r.v=n,r.i=n()):r.i}function T(n,t){return y(function(){return n},t)}function w(n){var r=hooks_module_u.context[n.__c];if(!r)return n.__;var i=a(hooks_module_t++);return null==i.i&&(i.i=!0,r.sub(hooks_module_u)),r.props.value}function A(t,u){preact_module["j" /* options */].useDebugValue&&preact_module["j" /* options */].useDebugValue(u?u(t):t)}function F(n){var r=a(hooks_module_t++),i=v();return r.i=n,hooks_module_u.componentDidCatch||(hooks_module_u.componentDidCatch=function(n){r.i&&r.i(n),i[1](n)}),[i[0],function(){i[1](void 0)}]}function _(){i.some(function(n){n.__P&&(n.__H.u.forEach(g),n.__H.u.forEach(q),n.__H.u=[])}),i=[]}function g(n){n.m&&n.m()}function q(n){var t=n.i();"function"==typeof t&&(n.m=t)}function x(n,t){return!n||t.some(function(t,u){return t!==n[u]})}function E(n,t){return"function"==typeof t?t(n):t}preact_module["j" /* options */].__r=function(n){hooks_module_o&&hooks_module_o(n),hooks_module_t=0,(hooks_module_u=n.__c).__H&&(hooks_module_u.__H.u.forEach(g),hooks_module_u.__H.u.forEach(q),hooks_module_u.__H.u=[])},preact_module["j" /* options */].diffed=function(t){f&&f(t);var u=t.__c;if(u){var o=u.__H;o&&o.u.length&&(1!==i.push(u)&&hooks_module_r===preact_module["j" /* options */].requestAnimationFrame||((hooks_module_r=preact_module["j" /* options */].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);"undefined"!=typeof window&&(t=requestAnimationFrame(u))})(_))}},preact_module["j" /* options */].__c=function(n,t){t.some(function(n){n.__h.forEach(g),n.__h=n.__h.filter(function(n){return!n.i||q(n)})}),c&&c(n,t)},preact_module["j" /* options */].unmount=function(n){hooks_module_e&&hooks_module_e(n);var t=n.__c;if(t){var u=t.__H;u&&u.t.forEach(function(n){return n.m&&n.m()})}};

// CONCATENATED MODULE: ./node_modules/preact/compat/dist/compat.module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return compat_module_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return compat_module_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return O; });
/* concated harmony reexport useState */__webpack_require__.d(__webpack_exports__, "useState", function() { return v; });
/* concated harmony reexport useReducer */__webpack_require__.d(__webpack_exports__, "useReducer", function() { return m; });
/* concated harmony reexport useEffect */__webpack_require__.d(__webpack_exports__, "useEffect", function() { return p; });
/* concated harmony reexport useLayoutEffect */__webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return l; });
/* concated harmony reexport useRef */__webpack_require__.d(__webpack_exports__, "useRef", function() { return d; });
/* concated harmony reexport useImperativeHandle */__webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return s; });
/* concated harmony reexport useMemo */__webpack_require__.d(__webpack_exports__, "useMemo", function() { return y; });
/* concated harmony reexport useCallback */__webpack_require__.d(__webpack_exports__, "useCallback", function() { return T; });
/* concated harmony reexport useContext */__webpack_require__.d(__webpack_exports__, "useContext", function() { return w; });
/* concated harmony reexport useDebugValue */__webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return A; });
/* concated harmony reexport useErrorBoundary */__webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return F; });
/* concated harmony reexport createElement */__webpack_require__.d(__webpack_exports__, "createElement", function() { return preact_module["f" /* createElement */]; });
/* concated harmony reexport createContext */__webpack_require__.d(__webpack_exports__, "createContext", function() { return preact_module["e" /* createContext */]; });
/* concated harmony reexport createRef */__webpack_require__.d(__webpack_exports__, "createRef", function() { return preact_module["g" /* createRef */]; });
/* concated harmony reexport Fragment */__webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact_module["b" /* Fragment */]; });
/* concated harmony reexport Component */__webpack_require__.d(__webpack_exports__, "Component", function() { return preact_module["a" /* Component */]; });
function compat_module_E(n,t){for(var e in t)n[e]=t[e];return n}function compat_module_w(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}var C=function(n){var t,e;function r(t){var e;return(e=n.call(this,t)||this).isPureReactComponent=!0,e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.shouldComponentUpdate=function(n,t){return compat_module_w(this.props,n)||compat_module_w(this.state,t)},r}(preact_module["a" /* Component */]);function compat_module_(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:compat_module_w(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact_module["f" /* createElement */])(n,compat_module_E({},t))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(n.displayName||n.name)+")",r.t=!0,r}var compat_module_A=preact_module["j" /* options */].vnode;function S(n){function t(t){var e=compat_module_E({},t);return delete e.ref,n(e,t.ref)}return t.prototype.isReactComponent=!0,t.t=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}preact_module["j" /* options */].vnode=function(n){n.type&&n.type.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),compat_module_A&&compat_module_A(n)};var k=function(n,t){return n?Object(preact_module["l" /* toChildArray */])(n).map(t):null},compat_module_F={map:k,forEach:k,count:function(n){return n?Object(preact_module["l" /* toChildArray */])(n).length:0},only:function(n){if(1!==(n=Object(preact_module["l" /* toChildArray */])(n)).length)throw new Error("Children.only() expects only one child.");return n[0]},toArray:preact_module["l" /* toChildArray */]},N=preact_module["j" /* options */].__e;function R(n){return n&&((n=compat_module_E({},n)).__c=null,n.__k=n.__k&&n.__k.map(R)),n}function M(n){this.__u=0,this.__b=null}function U(n){var t=n.__.__c;return t&&t.o&&t.o(n)}function O(n){var t,e,r;function o(o){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact_module["f" /* createElement */])(e,o)}return o.displayName="Lazy",o.t=!0,o}function j(){this.u=null,this.i=null}preact_module["j" /* options */].__e=function(n,t,e){if(n.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.l)return r.l(n,t.__c);N(n,t,e)},(M.prototype=new preact_module["a" /* Component */]).l=function(n,t){var e=this,r=U(e.__v),o=!1,u=function(){o||(o=!0,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){u(),t.__c&&t.__c()};var i=function(){--e.__u||(e.__v.__k[0]=e.state.o,e.setState({o:e.__b=null}))};e.__u++||e.setState({o:e.__b=e.__v.__k[0]}),n.then(u,u)},M.prototype.render=function(n,t){return this.__b&&(this.__v.__k[0]=R(this.__b),this.__b=null),[Object(preact_module["f" /* createElement */])(preact_module["a" /* Component */],null,t.o?null:n.children),t.o&&n.fallback]};var z=function(n,t,e){if(++e[1]===e[0]&&n.i.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.i.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};(j.prototype=new preact_module["a" /* Component */]).o=function(n){var t=this,e=U(t.__v),r=t.i.get(n);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),z(t,n,r)):o()};e?e(u):u()}},j.prototype.render=function(n){this.u=null,this.i=new Map;var t=Object(preact_module["l" /* toChildArray */])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.i.set(t[e],this.u=[1,0,this.u]);return n.children},j.prototype.componentDidUpdate=j.prototype.componentDidMount=function(){var n=this;n.i.forEach(function(t,e){z(n,e,t)})};var L=function(){function n(){}var t=n.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},n}();function P(n){var t=this,e=n.container,r=Object(preact_module["f" /* createElement */])(L,{context:t.context},n.vnode);return t.s&&t.s!==e&&(t.h.parentNode&&t.s.removeChild(t.h),Object(preact_module["c" /* _unmount */])(t.v),t.p=!1),n.vnode?t.p?(e.__k=t.__k,Object(preact_module["k" /* render */])(r,e),t.__k=e.__k):(t.h=document.createTextNode(""),Object(preact_module["i" /* hydrate */])("",e),e.appendChild(t.h),t.p=!0,t.s=e,Object(preact_module["k" /* render */])(r,e,t.h),t.__k=this.h.__k):t.p&&(t.h.parentNode&&t.s.removeChild(t.h),Object(preact_module["c" /* _unmount */])(t.v)),t.v=r,t.componentWillUnmount=function(){t.h.parentNode&&t.s.removeChild(t.h),Object(preact_module["c" /* _unmount */])(t.v)},null}function W(n,t){return Object(preact_module["f" /* createElement */])(P,{vnode:n,container:t})}var D=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;preact_module["a" /* Component */].prototype.isReactComponent={};var compat_module_T="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function V(n,t,e){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return Z(n,t,e)}function Z(n,t,e){return Object(preact_module["k" /* render */])(n,t),"function"==typeof e&&e(),n?n.__c:null}var H=preact_module["j" /* options */].event;function I(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n}})}preact_module["j" /* options */].event=function(n){return H&&(n=H(n)),n.persist=function(){},n.nativeEvent=n};var $={configurable:!0,get:function(){return this.class}},compat_module_q=preact_module["j" /* options */].vnode;preact_module["j" /* options */].vnode=function(n){n.$$typeof=compat_module_T;var t=n.type,e=n.props;if("function"!=typeof t){var r,o,u;for(u in e.defaultValue&&(e.value||0===e.value||(e.value=e.defaultValue),delete e.defaultValue),Array.isArray(e.value)&&e.multiple&&"select"===t&&(Object(preact_module["l" /* toChildArray */])(e.children).forEach(function(n){-1!=e.value.indexOf(n.props.value)&&(n.props.selected=!0)}),delete e.value),e)if(r=D.test(u))break;if(r)for(u in o=n.props={},e)o[D.test(u)?u.replace(/([A-Z0-9])/,"-$1").toLowerCase():u]=e[u]}(e.class||e.className)&&($.enumerable="className"in e,e.className&&(e.class=e.className),Object.defineProperty(e,"className",$)),function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(I(t.prototype,"componentWillMount"),I(t.prototype,"componentWillReceiveProps"),I(t.prototype,"componentWillUpdate"),t.m=!0),compat_module_q&&compat_module_q(n)};var B="16.8.0";function G(n){return preact_module["f" /* createElement */].bind(null,n)}function J(n){return!!n&&n.$$typeof===compat_module_T}function K(n){return J(n)?preact_module["d" /* cloneElement */].apply(null,arguments):n}function Q(n){return!!n.__k&&(Object(preact_module["k" /* render */])(null,n),!0)}function X(n){return n&&(n.base||1===n.nodeType&&n)||null}var Y=function(n,t){return n(t)};/* harmony default export */ var compat_module = __webpack_exports__["default"] = ({useState:v,useReducer:m,useEffect:p,useLayoutEffect:l,useRef:d,useImperativeHandle:s,useMemo:y,useCallback:T,useContext:w,useDebugValue:A,version:"16.8.0",Children:compat_module_F,render:V,hydrate:V,unmountComponentAtNode:Q,createPortal:W,createElement:preact_module["f" /* createElement */],createContext:preact_module["e" /* createContext */],createFactory:G,cloneElement:K,createRef:preact_module["g" /* createRef */],Fragment:preact_module["b" /* Fragment */],isValidElement:J,findDOMNode:X,Component:preact_module["a" /* Component */],PureComponent:C,memo:compat_module_,forwardRef:S,unstable_batchedUpdates:Y,Suspense:M,SuspenseList:j,lazy:O});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(23)();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(8);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(1)):undefined}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(0),o=n.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p,y,d,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,n,r,c=f(l);function l(){return i(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.loading,n=e.prefixCls,r=e.indicator,c=this.props.loadingText,i=t?n:"".concat(n,"-hide"),a=this.props,u=a.className,f=a.style,l="".concat(u," ").concat(i);return o.a.createElement("div",{className:l,style:f},o.a.createElement("div",{className:"".concat(n,"-mask")},o.a.createElement("div",{className:"".concat(n,"-icon")},r),o.a.createElement("div",{className:"".concat(n,"-text")},c)),o.a.createElement("div",{className:"".concat(n,"-content")},this.props.children))}}])&&a(t.prototype,n),r&&a(t,r),l}(o.a.PureComponent);p=b,y="defaultProps",d={loading:!1,text:"",prefixCls:"rc-loading",className:"",style:{},indicator:o.a.createElement("span",{className:"rc-loading-icon-default"})},y in p?Object.defineProperty(p,y,{value:d,enumerable:!0,configurable:!0,writable:!0}):p[y]=d}])}));

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* interact.js 1.8.2 | https://raw.github.com/taye/interact.js/master/LICENSE */
!function(e){if(true)module.exports=e();else {}}(function(){function e(t){var n;return function(e){return n||t(n={exports:{},parent:e},n.exports),n.exports}}var O=e(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scope=t.ActionName=void 0;var n=f(k),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt),i=f(It),a=f(Ct),u=f(Ut),s=f(fn),l=f(Tn),r=f(E({}));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w,P=o.win,_=o.browser,x=o.raf,S=o.events;(t.ActionName=w)||(t.ActionName=w={});var j=function(){function e(){var t=this;g(this,e),O(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),O(this,"listenerMaps",[]),O(this,"browser",_),O(this,"events",S),O(this,"utils",o),O(this,"defaults",o.clone(i.default)),O(this,"Eventable",a.default),O(this,"actions",{names:[],methodDict:{},eventTypes:[]}),O(this,"InteractEvent",l.default),O(this,"Interactable",void 0),O(this,"interactables",new s.default(this)),O(this,"_win",void 0),O(this,"document",void 0),O(this,"window",void 0),O(this,"documents",[]),O(this,"_plugins",{list:[],map:{}}),O(this,"onWindowUnload",function(e){return t.removeDocument(e.target)});var r=this;this.Interactable=function(){function n(){return g(this,n),d(this,y(n).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(n,u["default"]),b(n,[{key:"set",value:function(e){return v(y(n.prototype),"set",this).call(this,e),r.fire("interactable:set",{options:e,interactable:this}),this}},{key:"unset",value:function(){v(y(n.prototype),"unset",this).call(this);for(var e=r.interactions.list.length-1;0<=e;e--){var t=r.interactions.list[e];t.interactable===this&&(t.stop(),r.fire("interactions:destroy",{interaction:t}),t.destroy(),2<r.interactions.list.length&&r.interactions.list.splice(e,1))}r.fire("interactable:unset",{interactable:this})}},{key:"_defaults",get:function(){return r.defaults}}]),n}()}return b(e,[{key:"addListeners",value:function(e,t){this.listenerMaps.push({id:t,map:e})}},{key:"fire",value:function(e,t){for(var n=0;n<this.listenerMaps.length;n++){var r=this.listenerMaps[n].map[e];if(r&&!1===r(t,this,e))return!1}}},{key:"init",value:function(e){return M(this,e)}},{key:"pluginIsInstalled",value:function(e){return this._plugins.map[e.id]||-1!==this._plugins.list.indexOf(e)}},{key:"usePlugin",value:function(e,t){if(this.pluginIsInstalled(e))return this;if(e.id&&(this._plugins.map[e.id]=e),this._plugins.list.push(e),e.install&&e.install(this,t),e.listeners&&e.before){for(var n=0,r=this.listenerMaps.length,o=e.before.reduce(function(e,t){return e[t]=!0,e},{});n<r;n++){if(o[this.listenerMaps[n].id])break}this.listenerMaps.splice(n,0,{id:e.id,map:e.listeners})}else e.listeners&&this.listenerMaps.push({id:e.id,map:e.listeners});return this}},{key:"addDocument",value:function(e,t){if(-1!==this.getDocIndex(e))return!1;var n=P.getWindow(e);t=t?o.extend({},t):{},this.documents.push({doc:e,options:t}),S.documents.push(e),e!==this.document&&S.add(n,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:e,window:n,scope:this,options:t})}},{key:"removeDocument",value:function(e){var t=this.getDocIndex(e),n=P.getWindow(e),r=this.documents[t].options;S.remove(n,"unload",this.onWindowUnload),this.documents.splice(t,1),S.documents.splice(t,1),this.fire("scope:remove-document",{doc:e,window:n,scope:this,options:r})}},{key:"getDocIndex",value:function(e){for(var t=0;t<this.documents.length;t++)if(this.documents[t].doc===e)return t;return-1}},{key:"getDocOptions",value:function(e){var t=this.getDocIndex(e);return-1===t?null:this.documents[t].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),e}();function M(e,t){return P.init(t),n.default.init(t),_.init(t),x.init(t),S.init(t),e.usePlugin(r.default),e.document=t.document,e.window=t,e}t.Scope=j}),E=e(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var P=n(j),u=n(k),f=n(De),_=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(J),s=n(g({})),o=n(Qn);O({});function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function m(O,w){return function(e){var t=w.interactions.list,n=_.getPointerType(e),r=x(_.getEventTargets(e),2),o=r[0],i=r[1],a=[];if(/^touch/.test(e.type)){w.prevTouchTime=w.now();for(var u=0;u<e.changedTouches.length;u++){var s=e.changedTouches[u],l={pointer:s,pointerId:_.getPointerId(s),pointerType:n,eventType:e.type,eventTarget:o,curEventTarget:i,scope:w},c=S(l);a.push([l.pointer,l.eventTarget,l.curEventTarget,c])}}else{var f=!1;if(!P.default.supportsPointerEvent&&/mouse/.test(e.type)){for(var p=0;p<t.length&&!f;p++)f="mouse"!==t[p].pointerType&&t[p].pointerIsDown;f=f||w.now()-w.prevTouchTime<500||0===e.timeStamp}if(!f){var d={pointer:e,pointerId:_.getPointerId(e),pointerType:n,eventType:e.type,curEventTarget:i,eventTarget:o,scope:w},v=S(d);a.push([d.pointer,d.eventTarget,d.curEventTarget,v])}}for(var y=0;y<a.length;y++){var m=x(a[y],4),g=m[0],h=m[1],b=m[2];m[3][O](g,e,h,b)}}}function S(e){var t=e.pointerType,n=e.scope,r={interaction:o.default.search(e),searchDetails:e};return n.fire("interactions:find",r),r.interaction||n.interactions.new({pointerType:t})}function r(e,t){var n=e.doc,r=e.scope,o=e.options,i=r.interactions.docEvents,a=f.default[t];for(var u in r.browser.isIOS&&!o.events&&(o.events={passive:!1}),f.default.delegatedEvents)a(n,u,f.default.delegateListener),a(n,u,f.default.delegateUseCapture,!0);for(var s=o&&o.events,l=0;l<i.length;l++){var c=i[l];a(n,c.type,c.listener,s)}}var i={id:"core/interactions",install:function(o){for(var e={},t=0;t<y.length;t++){var n=y[t];e[n]=m(n,o)}var r,i=P.default.pEventTypes;function a(){for(var e=0;e<o.interactions.list.length;e++){var t=o.interactions.list[e];if(t.pointerIsDown&&"touch"===t.pointerType&&!t._interacting)for(var n=function(){var n=t.pointers[r];o.documents.some(function(e){var t=e.doc;return(0,C.nodeContains)(t,n.downTarget)})||t.removePointer(n.pointer,n.event)},r=0;r<t.pointers.length;r++){n()}}}(r=u.default.PointerEvent?[{type:i.down,listener:a},{type:i.down,listener:e.pointerDown},{type:i.move,listener:e.pointerMove},{type:i.up,listener:e.pointerUp},{type:i.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:a},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}]).push({type:"blur",listener:function(e){for(var t=0;t<o.interactions.list.length;t++){o.interactions.list[t].documentBlur(e)}}}),o.prevTouchTime=0,o.Interaction=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,d(e).apply(this,arguments))}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(e,s["default"]),t=e,(n=[{key:"_now",value:function(){return o.now()}},{key:"pointerMoveTolerance",get:function(){return o.interactions.pointerMoveTolerance},set:function(e){o.interactions.pointerMoveTolerance=e}}])&&c(t.prototype,n),r&&c(t,r),e}(),o.interactions={list:[],new:function(e){e.scopeFire=function(e,t){return o.fire(e,t)};var t=new o.Interaction(e);return o.interactions.list.push(t),t},listeners:e,docEvents:r,pointerMoveTolerance:1}},listeners:{"scope:add-document":function(e){return r(e,"add")},"scope:remove-document":function(e){return r(e,"remove")}},onDocSignal:r,doOnInteractions:m,methodNames:y};t.default=i}),g=e(function(e,t){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PointerInfo",{enumerable:!0,get:function(){return u.default}}),t.default=t.Interaction=t._ProxyMethods=t._ProxyValues=void 0;var n,c,r,f,o,p=l(pt),d=l(Tn),u=(n=Hn)&&n.__esModule?n:{default:n},i=O({});function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t._ProxyValues=c,(r=c||(t._ProxyValues=c={})).interactable="",r.element="",r.prepared="",r.pointerIsDown="",r.pointerWasMoved="",r._proxy="",t._ProxyMethods=f,(o=f||(t._ProxyMethods=f={})).start="",o.move="",o.end="",o.stop="",o.interacting="";var g=0,h=function(){function l(e){var t=this,n=e.pointerType,r=e.scopeFire;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),m(this,"interactable",null),m(this,"element",null),m(this,"rect",void 0),m(this,"_rects",void 0),m(this,"edges",void 0),m(this,"_scopeFire",void 0),m(this,"prepared",{name:null,axis:null,edges:null}),m(this,"pointerType",void 0),m(this,"pointers",[]),m(this,"downEvent",null),m(this,"downPointer",{}),m(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),m(this,"prevEvent",null),m(this,"pointerIsDown",!1),m(this,"pointerWasMoved",!1),m(this,"_interacting",!1),m(this,"_ending",!1),m(this,"_stopped",!0),m(this,"_proxy",null),m(this,"simulation",null),m(this,"doMove",p.warnOnce(function(e){this.move(e)},"The interaction.doMove() method has been renamed to interaction.move()")),m(this,"coords",{start:p.pointer.newCoords(),prev:p.pointer.newCoords(),cur:p.pointer.newCoords(),delta:p.pointer.newCoords(),velocity:p.pointer.newCoords()}),m(this,"_id",g++),this._scopeFire=r,this.pointerType=n;var o=this;this._proxy={};function i(e){Object.defineProperty(t._proxy,e,{get:function(){return o[e]}})}for(var a in c)i(a);function u(e){Object.defineProperty(t._proxy,e,{value:function(){return o[e].apply(o,arguments)}})}for(var s in f)u(s);this._scopeFire("interactions:new",{interaction:this})}return y(l,[{key:"pointerMoveTolerance",get:function(){return 1}}]),y(l,[{key:"pointerDown",value:function(e,t,n){var r=this.updatePointer(e,t,n,!0);this._scopeFire("interactions:down",{pointer:e,event:t,eventTarget:n,pointerIndex:r,type:"down",interaction:this})}},{key:"start",value:function(e,t,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(e.name===i.ActionName.Gesture?2:1)||!t.options[e.name].enabled)&&(p.copyAction(this.prepared,e),this.interactable=t,this.element=n,this.rect=t.getRect(n),this.edges=p.extend({},this.prepared.edges),this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:d.EventPhase.Start})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(e,t,n){this.simulation||this.modifiers&&this.modifiers.endResult||(this.updatePointer(e,t,n,!1),p.pointer.setCoords(this.coords.cur,this.pointers.map(function(e){return e.pointer}),this._now()));var r,o,i=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(r=this.coords.cur.client.x-this.coords.start.client.x,o=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=p.hypot(r,o)>this.pointerMoveTolerance);var a={pointer:e,pointerIndex:this.getPointerIndex(e),event:t,type:"move",eventTarget:n,dx:r,dy:o,duplicate:i,interaction:this};i||(p.pointer.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),p.pointer.setCoordVelocity(this.coords.velocity,this.coords.delta)),this._scopeFire("interactions:move",a),i||(this.interacting()&&(a.type=null,this.move(a)),this.pointerWasMoved&&p.pointer.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(e){e&&e.event||p.pointer.setZeroCoords(this.coords.delta),(e=p.extend({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},e||{})).phase=d.EventPhase.Move,this._doPhase(e)}},{key:"pointerUp",value:function(e,t,n,r){var o=this.getPointerIndex(e);-1===o&&(o=this.updatePointer(e,t,n,!1));var i=/cancel$/i.test(t.type)?"cancel":"up";this._scopeFire("interactions:".concat(i),{pointer:e,pointerIndex:o,event:t,eventTarget:n,type:i,curEventTarget:r,interaction:this}),this.simulation||this.end(t),this.pointerIsDown=!1,this.removePointer(e,t)}},{key:"documentBlur",value:function(e){this.end(e),this._scopeFire("interactions:blur",{event:e,type:"blur",interaction:this})}},{key:"end",value:function(e){var t;this._ending=!0,e=e||this._latestPointer.event,this.interacting()&&(t=this._doPhase({event:e,interaction:this,phase:d.EventPhase.End})),!(this._ending=!1)===t&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(e){var t=p.pointer.getPointerId(e);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:p.arr.findIndex(this.pointers,function(e){return e.id===t})}},{key:"getPointerInfo",value:function(e){return this.pointers[this.getPointerIndex(e)]}},{key:"updatePointer",value:function(e,t,n,r){var o=p.pointer.getPointerId(e),i=this.getPointerIndex(e),a=this.pointers[i];return r=!1!==r&&(r||/(down|start)$/i.test(t.type)),a?a.pointer=e:(a=new u.default(o,e,t,null,null),i=this.pointers.length,this.pointers.push(a)),r&&(this.pointerIsDown=!0,this.interacting()||(p.pointer.setCoords(this.coords.start,this.pointers.map(function(e){return e.pointer}),this._now()),p.pointer.copyCoords(this.coords.cur,this.coords.start),p.pointer.copyCoords(this.coords.prev,this.coords.start),p.pointer.pointerExtend(this.downPointer,e),this.downEvent=t,a.downTime=this.coords.cur.timeStamp,a.downTarget=n,this.pointerWasMoved=!1)),this._updateLatestPointer(e,t,n),this._scopeFire("interactions:update-pointer",{pointer:e,event:t,eventTarget:n,down:r,pointerInfo:a,pointerIndex:i,interaction:this}),i}},{key:"removePointer",value:function(e,t){var n=this.getPointerIndex(e);if(-1!==n){var r=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:e,event:t,eventTarget:null,pointerIndex:n,pointerInfo:r,interaction:this}),this.pointers.splice(n,1)}}},{key:"_updateLatestPointer",value:function(e,t,n){this._latestPointer.pointer=e,this._latestPointer.event=t,this._latestPointer.eventTarget=n}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(e,t,n,r){var o=this.prepared.name;return new d.default(this,e,o,t,this.element,null,n,r)}},{key:"_fireEvent",value:function(e){this.interactable.fire(e),(!this.prevEvent||e.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=e)}},{key:"_doPhase",value:function(e){var t=e.event,n=e.phase,r=e.preEnd,o=e.type,i=this.rect,a=this.coords.delta;if(i&&n===d.EventPhase.Move){var u=this.edges||this.prepared.edges||{left:!0,right:!0,top:!0,bottom:!0};p.rect.addEdges(u,i,a[this.interactable.options.deltaSource]),i.width=i.right-i.left,i.height=i.bottom-i.top}if(!1===this._scopeFire("interactions:before-action-".concat(n),e))return!1;var s=e.iEvent=this._createPreparedEvent(t,n,r,o);return this._scopeFire("interactions:action-".concat(n),e),this._fireEvent(s),this._scopeFire("interactions:after-action-".concat(n),e),!0}},{key:"_now",value:function(){return Date.now()}}]),l}(),b=t.Interaction=h;t.default=b}),k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=void 0;var n={init:function(e){var t=e;n.document=t.document,n.DocumentFragment=t.DocumentFragment||r,n.SVGElement=t.SVGElement||r,n.SVGSVGElement=t.SVGSVGElement||r,n.SVGElementInstance=t.SVGElementInstance||r,n.Element=t.Element||r,n.HTMLElement=t.HTMLElement||n.Element,n.Event=t.Event,n.Touch=t.Touch||r,n.PointerEvent=t.PointerEvent||t.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function r(){}var t=n;k.default=t;var u={};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.push(r)}return e}function i(e,t){for(var n=0;n<e.length;n++)if(t(e[n],n,e))return n;return-1}Object.defineProperty(u,"__esModule",{value:!0}),u.contains=function(e,t){return-1!==e.indexOf(t)},u.remove=function(e,t){return e.splice(e.indexOf(t),1)},u.merge=o,u.from=function(e){return o([],e)},u.findIndex=i,u.find=function(e,t){return e[i(e,t)]};var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e){return!(!e||!e.Window)&&e instanceof e.Window};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.init=p,s.getWindow=d,s.default=void 0;var l,c=(l=a)&&l.__esModule?l:{default:l};var f={realWindow:void 0,window:void 0,getWindow:d,init:p};function p(e){var t=(f.realWindow=e).document.createTextNode("");t.ownerDocument!==e.document&&"function"==typeof e.wrap&&e.wrap(t)===t&&(e=e.wrap(e)),f.window=e}function d(e){return(0,c.default)(e)?e:(e.ownerDocument||e).defaultView||f.window}"undefined"==typeof window?(f.window=void 0,f.realWindow=void 0):p(window),f.init=p;var v=f;s.default=v;var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.array=y.plainObject=y.element=y.string=y.bool=y.number=y.func=y.object=y.docFrag=y.window=void 0;var m=b(a),h=b(s);function b(e){return e&&e.__esModule?e:{default:e}}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}y.window=function(e){return e===h.default.window||(0,m.default)(e)};y.docFrag=function(e){return P(e)&&11===e.nodeType};var P=function(e){return!!e&&"object"===w(e)};y.object=P;function _(e){return"function"==typeof e}y.func=_;y.number=function(e){return"number"==typeof e};y.bool=function(e){return"boolean"==typeof e};y.string=function(e){return"string"==typeof e};y.element=function(e){if(!e||"object"!==w(e))return!1;var t=h.default.getWindow(e)||h.default.window;return/object|function/.test(w(t.Element))?e instanceof t.Element:1===e.nodeType&&"string"==typeof e.nodeName};y.plainObject=function(e){return P(e)&&!!e.constructor&&/function Object\b/.test(e.constructor.toString())};y.array=function(e){return P(e)&&void 0!==e.length&&_(e.splice)};var j={};function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var S=I(k),M=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==x(e)&&"function"!=typeof e)return{default:e};var t=T();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y),D=I(s);function T(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return T=function(){return e},e}function I(e){return e&&e.__esModule?e:{default:e}}var A={init:function(e){var t=S.default.Element,n=D.default.window.navigator;A.supportsTouch="ontouchstart"in e||M.func(e.DocumentTouch)&&S.default.document instanceof e.DocumentTouch,A.supportsPointerEvent=!1!==n.pointerEnabled&&!!S.default.PointerEvent,A.isIOS=/iP(hone|od|ad)/.test(n.platform),A.isIOS7=/iP(hone|od|ad)/.test(n.platform)&&/OS 7[^\d]/.test(n.appVersion),A.isIe9=/MSIE 9/.test(n.userAgent),A.isOperaMobile="Opera"===n.appName&&A.supportsTouch&&/Presto/.test(n.userAgent),A.prefixedMatchesSelector="matches"in t.prototype?"matches":"webkitMatchesSelector"in t.prototype?"webkitMatchesSelector":"mozMatchesSelector"in t.prototype?"mozMatchesSelector":"oMatchesSelector"in t.prototype?"oMatchesSelector":"msMatchesSelector",A.pEventTypes=A.supportsPointerEvent?S.default.PointerEvent===e.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,A.wheelEvent="onmousewheel"in S.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var z=A;j.default=z;var C={};function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(C,"__esModule",{value:!0}),C.nodeContains=function(e,t){for(;t;){if(t===e)return!0;t=t.parentNode}return!1},C.closest=function(e,t){for(;N.element(e);){if(G(e,t))return e;e=V(e)}return null},C.parentNode=V,C.matchesSelector=G,C.indexOfDeepestElement=function(e){var t,n,r=[],o=e[0],i=o?0:-1;for(t=1;t<e.length;t++){var a=e[t];if(a&&a!==o)if(o){if(a.parentNode!==a.ownerDocument)if(o.parentNode!==a.ownerDocument)if(a.parentNode!==o.parentNode){if(!r.length)for(var u=o,s=void 0;(s=U(u))&&s!==u.ownerDocument;)r.unshift(u),u=s;var l=void 0;if(o instanceof X.default.HTMLElement&&a instanceof X.default.SVGElement&&!(a instanceof X.default.SVGSVGElement)){if(a===o.parentNode)continue;l=a.ownerSVGElement}else l=a;for(var c=[];l.parentNode!==l.ownerDocument;)c.unshift(l),l=U(l);for(n=0;c[n]&&c[n]===r[n];)n++;for(var f=[c[n-1],c[n],r[n]],p=f[0].lastChild;p;){if(p===f[1]){o=a,i=t,r=c;break}if(p===f[2])break;p=p.previousSibling}}else{var d=parseInt((0,Y.getWindow)(o).getComputedStyle(o).zIndex,10)||0,v=parseInt((0,Y.getWindow)(a).getComputedStyle(a).zIndex,10)||0;d<=v&&(o=a,i=t)}else o=a,i=t}else o=a,i=t}return i},C.matchesUpTo=function(e,t,n){for(;N.element(e);){if(G(e,t))return!0;if((e=V(e))===n)return G(e,t)}return!1},C.getActualElement=function(e){return e instanceof X.default.SVGElementInstance?e.correspondingUseElement:e},C.getScrollXY=B,C.getElementClientRect=H,C.getElementRect=function(e){var t=H(e);if(!W.default.isIOS7&&t){var n=B(Y.default.getWindow(e));t.left+=n.x,t.right+=n.x,t.top+=n.y,t.bottom+=n.y}return t},C.getPath=function(e){var t=[];for(;e;)t.push(e),e=V(e);return t},C.trySelector=function(e){return!!N.string(e)&&(X.default.document.querySelector(e),!0)};var W=q(j),X=q(k),N=L(y),Y=L(s);function F(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return F=function(){return e},e}function L(e){if(e&&e.__esModule)return e;if(null===e||"object"!==R(e)&&"function"!=typeof e)return{default:e};var t=F();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function q(e){return e&&e.__esModule?e:{default:e}}function V(e){var t=e.parentNode;if(N.docFrag(t)){for(;(t=t.host)&&N.docFrag(t););return t}return t}function G(e,t){return Y.default.window!==Y.default.realWindow&&(t=t.replace(/\/deep\//g," ")),e[W.default.prefixedMatchesSelector](t)}var U=function(e){return e.parentNode?e.parentNode:e.host};function B(e){return{x:(e=e||Y.default.window).scrollX||e.document.documentElement.scrollLeft,y:e.scrollY||e.document.documentElement.scrollTop}}function H(e){var t=e instanceof X.default.SVGElement?e.getBoundingClientRect():e.getClientRects()[0];return t&&{left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width||t.right-t.left,height:t.height||t.bottom-t.top}}var K={};Object.defineProperty(K,"__esModule",{value:!0}),K.default=void 0;K.default=function(e,t){return Math.sqrt(e*e+t*t)};var $={};function Q(e,t){for(var n in t){var r=Q.prefixedPropREs,o=!1;for(var i in r)if(0===n.indexOf(i)&&r[i].test(n)){o=!0;break}o||"function"==typeof t[n]||(e[n]=t[n])}return e}Object.defineProperty($,"__esModule",{value:!0}),$.default=void 0,Q.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};var Z=Q;$.default=Z;var J={};function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(J,"__esModule",{value:!0}),J.copyCoords=function(e,t){e.page=e.page||{},e.page.x=t.page.x,e.page.y=t.page.y,e.client=e.client||{},e.client.x=t.client.x,e.client.y=t.client.y,e.timeStamp=t.timeStamp},J.setCoordDeltas=function(e,t,n){e.page.x=n.page.x-t.page.x,e.page.y=n.page.y-t.page.y,e.client.x=n.client.x-t.client.x,e.client.y=n.client.y-t.client.y,e.timeStamp=n.timeStamp-t.timeStamp},J.setCoordVelocity=function(e,t){var n=Math.max(t.timeStamp/1e3,.001);e.page.x=t.page.x/n,e.page.y=t.page.y/n,e.client.x=t.client.x/n,e.client.y=t.client.y/n,e.timeStamp=n},J.setZeroCoords=function(e){e.page.x=0,e.page.y=0,e.client.x=0,e.client.y=0},J.isNativePointer=ce,J.getXY=fe,J.getPageXY=pe,J.getClientXY=de,J.getPointerId=function(e){return ie.number(e.pointerId)?e.pointerId:e.identifier},J.setCoords=function(e,t,n){var r=1<t.length?ye(t):t[0],o={};pe(r,o),e.page.x=o.x,e.page.y=o.y,de(r,o),e.client.x=o.x,e.client.y=o.y,e.timeStamp=n},J.getTouchPair=ve,J.pointerAverage=ye,J.touchBBox=function(e){if(!(e.length||e.touches&&1<e.touches.length))return null;var t=ve(e),n=Math.min(t[0].pageX,t[1].pageX),r=Math.min(t[0].pageY,t[1].pageY),o=Math.max(t[0].pageX,t[1].pageX),i=Math.max(t[0].pageY,t[1].pageY);return{x:n,y:r,left:n,top:r,right:o,bottom:i,width:o-n,height:i-r}},J.touchDistance=function(e,t){var n=t+"X",r=t+"Y",o=ve(e),i=o[0][n]-o[1][n],a=o[0][r]-o[1][r];return(0,oe.default)(i,a)},J.touchAngle=function(e,t){var n=t+"X",r=t+"Y",o=ve(e),i=o[1][n]-o[0][n],a=o[1][r]-o[0][r];return 180*Math.atan2(a,i)/Math.PI},J.getPointerType=function(e){return ie.string(e.pointerType)?e.pointerType:ie.number(e.pointerType)?[void 0,void 0,"touch","pen","mouse"][e.pointerType]:/touch/.test(e.type)||e instanceof ne.default.Touch?"touch":"mouse"},J.getEventTargets=function(e){var t=ie.func(e.composedPath)?e.composedPath():e.path;return[re.getActualElement(t?t[0]:e.target),re.getActualElement(e.currentTarget)]},J.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},J.coordsToEvent=function(e){return{coords:e,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons}}},Object.defineProperty(J,"pointerExtend",{enumerable:!0,get:function(){return ae.default}});var te=le(j),ne=le(k),re=se(C),oe=le(K),ie=se(y),ae=le($);function ue(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return ue=function(){return e},e}function se(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ee(e)&&"function"!=typeof e)return{default:e};var t=ue();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function le(e){return e&&e.__esModule?e:{default:e}}function ce(e){return e instanceof ne.default.Event||e instanceof ne.default.Touch}function fe(e,t,n){return(n=n||{}).x=t[(e=e||"page")+"X"],n.y=t[e+"Y"],n}function pe(e,t){return t=t||{x:0,y:0},te.default.isOperaMobile&&ce(e)?(fe("screen",e,t),t.x+=window.scrollX,t.y+=window.scrollY):fe("page",e,t),t}function de(e,t){return t=t||{},te.default.isOperaMobile&&ce(e)?fe("screen",e,t):fe("client",e,t),t}function ve(e){var t=[];return ie.array(e)?(t[0]=e[0],t[1]=e[1]):"touchend"===e.type?1===e.touches.length?(t[0]=e.touches[0],t[1]=e.changedTouches[0]):0===e.touches.length&&(t[0]=e.changedTouches[0],t[1]=e.changedTouches[1]):(t[0]=e.touches[0],t[1]=e.touches[1]),t}function ye(e){for(var t={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<e.length;n++){var r=e[n];for(var o in t)t[o]+=r[o]}for(var i in t)t[i]/=e.length;return t}var me={};Object.defineProperty(me,"__esModule",{value:!0}),me.default=function(e,t){for(var n in t)e[n]=t[n];return e};var ge={};function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(ge,"__esModule",{value:!0}),ge.getStringOptionResult=_e,ge.resolveRectLike=function(e,t,n,r){var o=e;we.string(o)?o=_e(o,t,n):we.func(o)&&(o=o.apply(void 0,function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(r)));we.element(o)&&(o=(0,C.getElementRect)(o));return o},ge.rectToXY=function(e){return e&&{x:"x"in e?e.x:e.left,y:"y"in e?e.y:e.top}},ge.xywhToTlbr=function(e){!e||"left"in e&&"top"in e||((e=(0,Oe.default)({},e)).left=e.x||0,e.top=e.y||0,e.right=e.right||e.left+e.width,e.bottom=e.bottom||e.top+e.height);return e},ge.tlbrToXywh=function(e){!e||"x"in e&&"y"in e||((e=(0,Oe.default)({},e)).x=e.left||0,e.y=e.top||0,e.width=e.width||e.right||0-e.x,e.height=e.height||e.bottom||0-e.y);return e},ge.addEdges=function(e,t,n){e.left&&(t.left+=n.x);e.right&&(t.right+=n.x);e.top&&(t.top+=n.y);e.bottom&&(t.bottom+=n.y);t.width=t.right-t.left,t.height=t.bottom-t.top};var be,Oe=(be=me)&&be.__esModule?be:{default:be},we=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==he(e)&&"function"!=typeof e)return{default:e};var t=Pe();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y);function Pe(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Pe=function(){return e},e}function _e(e,t,n){return"parent"===e?(0,C.parentNode)(n):"self"===e?t.getRect(n):(0,C.closest)(n,e)}var xe={};function Se(e){return(Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(xe,"__esModule",{value:!0}),xe.default=function e(t){var n={};for(var r in t){var o=t[r];Me.plainObject(o)?n[r]=e(o):Me.array(o)?n[r]=je.from(o):n[r]=o}return n};var je=ke(u),Me=ke(y);function Ee(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ee=function(){return e},e}function ke(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Se(e)&&"function"!=typeof e)return{default:e};var t=Ee();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}var De={};function Te(e){return(Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(De,"__esModule",{value:!0}),De.default=De.FakeEvent=void 0;var Ie,Ae=Xe(C),ze=Xe(y),Ce=(Ie=$)&&Ie.__esModule?Ie:{default:Ie},Re=Xe(J);function We(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return We=function(){return e},e}function Xe(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Te(e)&&"function"!=typeof e)return{default:e};var t=We();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Fe=[],Le=[],qe={},Ve=[];function Ge(e,t,n,r){var o=Ke(r),i=Fe.indexOf(e),a=Le[i];a||(a={events:{},typeCount:0},i=Fe.push(e)-1,Le.push(a)),a.events[t]||(a.events[t]=[],a.typeCount++),e.removeEventListener&&!(0,u.contains)(a.events[t],n)&&(e.addEventListener(t,n,Qe.supportsOptions?o:!!o.capture),a.events[t].push(n))}function Ue(e,t,n,r){var o=Ke(r),i=Fe.indexOf(e),a=Le[i];if(a&&a.events)if("all"!==t){if(a.events[t]){var u=a.events[t].length;if("all"===n){for(var s=0;s<u;s++)Ue(e,t,a.events[t][s],o);return}for(var l=0;l<u;l++)if(e.removeEventListener&&a.events[t][l]===n){e.removeEventListener(t,n,Qe.supportsOptions?o:!!o.capture),a.events[t].splice(l,1);break}a.events[t]&&0===a.events[t].length&&(a.events[t]=null,a.typeCount--)}a.typeCount||(Le.splice(i,1),Fe.splice(i,1))}else for(t in a.events)a.events.hasOwnProperty(t)&&Ue(e,t,"all")}function Be(e,t){for(var n=Ke(t),r=new $e(e),o=qe[e.type],i=Ye(Re.getEventTargets(e),1)[0],a=i;ze.element(a);){for(var u=0;u<o.selectors.length;u++){var s=o.selectors[u],l=o.contexts[u];if(Ae.matchesSelector(a,s)&&Ae.nodeContains(l,i)&&Ae.nodeContains(l,a)){var c=o.listeners[u];r.currentTarget=a;for(var f=0;f<c.length;f++){var p=Ye(c[f],3),d=p[0],v=p[1],y=p[2];v===!!n.capture&&y===n.passive&&d(r)}}}a=Ae.parentNode(a)}}function He(e){return Be.call(this,e,!0)}function Ke(e){return ze.object(e)?e:{capture:e}}var $e=function(){function o(e){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.originalEvent=e,r=void 0,(n="currentTarget")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,(0,Ce.default)(this,e)}var e,t,n;return e=o,(t=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&Ne(e.prototype,t),n&&Ne(e,n),o}();De.FakeEvent=$e;var Qe={add:Ge,remove:Ue,addDelegate:function(e,t,n,r,o){var i=Ke(o);if(!qe[n]){qe[n]={contexts:[],listeners:[],selectors:[]};for(var a=0;a<Ve.length;a++){var u=Ve[a];Ge(u,n,Be),Ge(u,n,He,!0)}}var s,l=qe[n];for(s=l.selectors.length-1;0<=s&&(l.selectors[s]!==e||l.contexts[s]!==t);s--);-1===s&&(s=l.selectors.length,l.selectors.push(e),l.contexts.push(t),l.listeners.push([])),l.listeners[s].push([r,!!i.capture,i.passive])},removeDelegate:function(e,t,n,r,o){var i,a=Ke(o),u=qe[n],s=!1;if(u)for(i=u.selectors.length-1;0<=i;i--)if(u.selectors[i]===e&&u.contexts[i]===t){for(var l=u.listeners[i],c=l.length-1;0<=c;c--){var f=Ye(l[c],3),p=f[0],d=f[1],v=f[2];if(p===r&&d===!!a.capture&&v===a.passive){l.splice(c,1),l.length||(u.selectors.splice(i,1),u.contexts.splice(i,1),u.listeners.splice(i,1),Ue(t,n,Be),Ue(t,n,He,!0),u.selectors.length||(qe[n]=null)),s=!0;break}}if(s)break}},delegateListener:Be,delegateUseCapture:He,delegatedEvents:qe,documents:Ve,supportsOptions:!1,supportsPassive:!1,_elements:Fe,_targets:Le,init:function(e){e.document.createElement("div").addEventListener("test",null,{get capture(){return Qe.supportsOptions=!0},get passive(){return Qe.supportsPassive=!0}})}},Ze=Qe;De.default=Ze;var Je={};Object.defineProperty(Je,"__esModule",{value:!0}),Je.default=function(e,t,n){var r=e.options[n],o=r&&r.origin||e.options.origin,i=(0,ge.resolveRectLike)(o,e,t,[e&&t]);return(0,ge.rectToXY)(i)||{x:0,y:0}};var et={};function tt(e){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(et,"__esModule",{value:!0}),et.default=function n(t,r,o){o=o||{};ot.string(t)&&-1!==t.search(" ")&&(t=at(t));if(ot.array(t))return t.reduce(function(e,t){return(0,rt.default)(e,n(t,r,o))},o);ot.object(t)&&(r=t,t="");if(ot.func(r))o[t]=o[t]||[],o[t].push(r);else if(ot.array(r))for(var e=0;e<r.length;e++){var i=r[e];n(t,i,o)}else if(ot.object(r))for(var a in r){var u=at(a).map(function(e){return"".concat(t).concat(e)});n(u,r[a],o)}return o};var nt,rt=(nt=me)&&nt.__esModule?nt:{default:nt},ot=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==tt(e)&&"function"!=typeof e)return{default:e};var t=it();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y);function it(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return it=function(){return e},e}function at(e){return e.trim().split(/ +/)}var ut={};Object.defineProperty(ut,"__esModule",{value:!0}),ut.default=void 0;var st,lt,ct=0;var ft={request:function(e){return st(e)},cancel:function(e){return lt(e)},init:function(e){if(st=e.requestAnimationFrame,lt=e.cancelAnimationFrame,!st)for(var t=["ms","moz","webkit","o"],n=0;n<t.length;n++){var r=t[n];st=e["".concat(r,"RequestAnimationFrame")],lt=e["".concat(r,"CancelAnimationFrame")]||e["".concat(r,"CancelRequestAnimationFrame")]}st||(st=function(e){var t=Date.now(),n=Math.max(0,16-(t-ct)),r=setTimeout(function(){e(t+n)},n);return ct=t+n,r},lt=function(e){return clearTimeout(e)})}};ut.default=ft;var pt={};function dt(e){return(dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(pt,"__esModule",{value:!0}),pt.warnOnce=function(e,t){var n=!1;return function(){return n||(bt.default.window.console.warn(t),n=!0),e.apply(this,arguments)}},pt._getQBezierValue=Tt,pt.getQuadraticCurvePoint=function(e,t,n,r,o,i,a){return{x:Tt(a,e,n,o),y:Tt(a,t,r,i)}},pt.easeOutQuad=function(e,t,n,r){return-n*(e/=r)*(e-2)+t},pt.copyAction=function(e,t){return e.name=t.name,e.axis=t.axis,e.edges=t.edges,e},Object.defineProperty(pt,"win",{enumerable:!0,get:function(){return bt.default}}),Object.defineProperty(pt,"browser",{enumerable:!0,get:function(){return Ot.default}}),Object.defineProperty(pt,"clone",{enumerable:!0,get:function(){return wt.default}}),Object.defineProperty(pt,"events",{enumerable:!0,get:function(){return Pt.default}}),Object.defineProperty(pt,"extend",{enumerable:!0,get:function(){return _t.default}}),Object.defineProperty(pt,"getOriginXY",{enumerable:!0,get:function(){return xt.default}}),Object.defineProperty(pt,"hypot",{enumerable:!0,get:function(){return St.default}}),Object.defineProperty(pt,"normalizeListeners",{enumerable:!0,get:function(){return jt.default}}),Object.defineProperty(pt,"raf",{enumerable:!0,get:function(){return Mt.default}}),pt.rect=pt.pointer=pt.is=pt.dom=pt.arr=void 0;var vt=Dt(u);pt.arr=vt;var yt=Dt(C);pt.dom=yt;var mt=Dt(y);pt.is=mt;var gt=Dt(J);pt.pointer=gt;var ht=Dt(ge);pt.rect=ht;var bt=Et(s),Ot=Et(j),wt=Et(xe),Pt=Et(De),_t=Et(me),xt=Et(Je),St=Et(K),jt=Et(et),Mt=Et(ut);function Et(e){return e&&e.__esModule?e:{default:e}}function kt(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return kt=function(){return e},e}function Dt(e){if(e&&e.__esModule)return e;if(null===e||"object"!==dt(e)&&"function"!=typeof e)return{default:e};var t=kt();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Tt(e,t,n,r){var o=1-e;return o*o*t+2*o*e*n+e*e*r}var It={};Object.defineProperty(It,"__esModule",{value:!0}),It.default=It.defaults=void 0;var At={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},zt=It.defaults=At;It.default=zt;var Ct={};function Rt(e){return(Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Ct,"__esModule",{value:!0}),Ct.default=void 0;var Wt=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Rt(e)&&"function"!=typeof e)return{default:e};var t=Ft();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(u),Xt=Yt(me),Nt=Yt(et);function Yt(e){return e&&e.__esModule?e:{default:e}}function Ft(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ft=function(){return e},e}function Lt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vt(e,t){for(var n=0;n<t.length;n++){var r=t[n];if(e.immediatePropagationStopped)break;r(e)}}var Gt=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),qt(this,"options",void 0),qt(this,"types",{}),qt(this,"propagationStopped",!1),qt(this,"immediatePropagationStopped",!1),qt(this,"global",void 0),this.options=(0,Xt.default)({},e||{})}var e,n,r;return e=t,(n=[{key:"fire",value:function(e){var t,n=this.global;(t=this.types[e.type])&&Vt(e,t),!e.propagationStopped&&n&&(t=n[e.type])&&Vt(e,t)}},{key:"on",value:function(e,t){var n=(0,Nt.default)(e,t);for(e in n)this.types[e]=Wt.merge(this.types[e]||[],n[e])}},{key:"off",value:function(e,t){var n=(0,Nt.default)(e,t);for(e in n){var r=this.types[e];if(r&&r.length)for(var o=0;o<n[e].length;o++){var i=n[e][o],a=r.indexOf(i);-1!==a&&r.splice(a,1)}}}},{key:"getRect",value:function(){return null}}])&&Lt(e.prototype,n),r&&Lt(e,r),t}();Ct.default=Gt;var Ut={};function Bt(e){return(Bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=Ut.Interactable=void 0;var Ht=on(u),Kt=nn(j),$t=nn(xe),Qt=nn(De),Zt=nn(me),Jt=on(y),en=nn(et),tn=nn(Ct);function nn(e){return e&&e.__esModule?e:{default:e}}function rn(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return rn=function(){return e},e}function on(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Bt(e)&&"function"!=typeof e)return{default:e};var t=rn();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function an(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function un(e,t,n){return t&&an(e.prototype,t),n&&an(e,n),e}function sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ln=function(){function r(e,t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),sn(this,"options",void 0),sn(this,"_actions",void 0),sn(this,"target",void 0),sn(this,"events",new tn.default),sn(this,"_context",void 0),sn(this,"_win",void 0),sn(this,"_doc",void 0),this._actions=t.actions,this.target=e,this._context=t.context||n,this._win=(0,s.getWindow)((0,C.trySelector)(e)?this._context:e),this._doc=this._win.document,this.set(t)}return un(r,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}}]),un(r,[{key:"setOnEvents",value:function(e,t){return Jt.func(t.onstart)&&this.on("".concat(e,"start"),t.onstart),Jt.func(t.onmove)&&this.on("".concat(e,"move"),t.onmove),Jt.func(t.onend)&&this.on("".concat(e,"end"),t.onend),Jt.func(t.oninertiastart)&&this.on("".concat(e,"inertiastart"),t.oninertiastart),this}},{key:"updatePerActionListeners",value:function(e,t,n){(Jt.array(t)||Jt.object(t))&&this.off(e,t),(Jt.array(n)||Jt.object(n))&&this.on(e,n)}},{key:"setPerAction",value:function(e,t){var n=this._defaults;for(var r in t){var o=r,i=this.options[e],a=t[o];"listeners"===o&&this.updatePerActionListeners(e,i.listeners,a),Jt.array(a)?i[o]=Ht.from(a):Jt.plainObject(a)?(i[o]=(0,Zt.default)(i[o]||{},(0,$t.default)(a)),Jt.object(n.perAction[o])&&"enabled"in n.perAction[o]&&(i[o].enabled=!1!==a.enabled)):Jt.bool(a)&&Jt.object(n.perAction[o])?i[o].enabled=a:i[o]=a}}},{key:"getRect",value:function(e){return e=e||(Jt.element(this.target)?this.target:null),Jt.string(this.target)&&(e=e||this._context.querySelector(this.target)),(0,C.getElementRect)(e)}},{key:"rectChecker",value:function(e){return Jt.func(e)?(this.getRect=e,this):null===e?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(e,t){if((0,C.trySelector)(t)||Jt.object(t)){this.options[e]=t;for(var n=0;n<this._actions.names.length;n++){var r=this._actions.names[n];this.options[r][e]=t}return this}return this.options[e]}},{key:"origin",value:function(e){return this._backCompatOption("origin",e)}},{key:"deltaSource",value:function(e){return"page"===e||"client"===e?(this.options.deltaSource=e,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(e){return this._context===e.ownerDocument||(0,C.nodeContains)(this._context,e)}},{key:"testIgnoreAllow",value:function(e,t,n){return!this.testIgnore(e.ignoreFrom,t,n)&&this.testAllow(e.allowFrom,t,n)}},{key:"testAllow",value:function(e,t,n){return!e||!!Jt.element(n)&&(Jt.string(e)?(0,C.matchesUpTo)(n,e,t):!!Jt.element(e)&&(0,C.nodeContains)(e,n))}},{key:"testIgnore",value:function(e,t,n){return!(!e||!Jt.element(n))&&(Jt.string(e)?(0,C.matchesUpTo)(n,e,t):!!Jt.element(e)&&(0,C.nodeContains)(e,n))}},{key:"fire",value:function(e){return this.events.fire(e),this}},{key:"_onOff",value:function(e,t,n,r){Jt.object(t)&&!Jt.array(t)&&(r=n,n=null);var o="on"===e?"add":"remove",i=(0,en.default)(t,n);for(var a in i){"wheel"===a&&(a=Kt.default.wheelEvent);for(var u=0;u<i[a].length;u++){var s=i[a][u];Ht.contains(this._actions.eventTypes,a)?this.events[e](a,s):Jt.string(this.target)?Qt.default["".concat(o,"Delegate")](this.target,this._context,a,s,r):Qt.default[o](this.target,a,s,r)}}return this}},{key:"on",value:function(e,t,n){return this._onOff("on",e,t,n)}},{key:"off",value:function(e,t,n){return this._onOff("off",e,t,n)}},{key:"set",value:function(e){var t=this._defaults;for(var n in Jt.object(e)||(e={}),this.options=(0,$t.default)(t.base),this._actions.methodDict){var r=n,o=this._actions.methodDict[r];this.options[r]={},this.setPerAction(r,(0,Zt.default)((0,Zt.default)({},t.perAction),t.actions[r])),this[o](e[r])}for(var i in e)Jt.func(this[i])&&this[i](e[i]);return this}},{key:"unset",value:function(){if(Qt.default.remove(this.target,"all"),Jt.string(this.target))for(var e in Qt.default.delegatedEvents){var t=Qt.default.delegatedEvents[e];t.selectors[0]===this.target&&t.contexts[0]===this._context&&(t.selectors.splice(0,1),t.contexts.splice(0,1),t.listeners.splice(0,1)),Qt.default.remove(this._context,e,Qt.default.delegateListener),Qt.default.remove(this._context,e,Qt.default.delegateUseCapture,!0)}else Qt.default.remove(this.target,"all")}}]),r}(),cn=Ut.Interactable=ln;Ut.default=cn;var fn={};function pn(e){return(pn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(fn,"__esModule",{value:!0}),fn.default=void 0;var dn,vn=bn(u),yn=bn(C),mn=(dn=me)&&dn.__esModule?dn:{default:dn},gn=bn(y);function hn(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return hn=function(){return e},e}function bn(e){if(e&&e.__esModule)return e;if(null===e||"object"!==pn(e)&&"function"!=typeof e)return{default:e};var t=hn();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function On(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Pn=function(){function t(e){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope=e,wn(this,"list",[]),wn(this,"selectorMap",{}),e.addListeners({"interactable:unset":function(e){var t=e.interactable,n=t.target,r=t._context,o=gn.string(n)?a.selectorMap[n]:n[a.scope.id],i=o.findIndex(function(e){return e.context===r});o[i]&&(o[i].context=null,o[i].interactable=null),o.splice(i,1)}})}var e,n,r;return e=t,(n=[{key:"new",value:function(e,t){t=(0,mn.default)(t||{},{actions:this.scope.actions});var n=new this.scope.Interactable(e,t,this.scope.document),r={context:n._context,interactable:n};return this.scope.addDocument(n._doc),this.list.push(n),gn.string(e)?(this.selectorMap[e]||(this.selectorMap[e]=[]),this.selectorMap[e].push(r)):(n.target[this.scope.id]||Object.defineProperty(e,this.scope.id,{value:[],configurable:!0}),e[this.scope.id].push(r)),this.scope.fire("interactable:new",{target:e,options:t,interactable:n,win:this.scope._win}),n}},{key:"get",value:function(t,e){var n=e&&e.context||this.scope.document,r=gn.string(t),o=r?this.selectorMap[t]:t[this.scope.id];if(!o)return null;var i=vn.find(o,function(e){return e.context===n&&(r||e.interactable.inContext(t))});return i&&i.interactable}},{key:"forEachMatch",value:function(e,t){for(var n=0;n<this.list.length;n++){var r=this.list[n],o=void 0;if((gn.string(r.target)?gn.element(e)&&yn.matchesSelector(e,r.target):e===r.target)&&r.inContext(e)&&(o=t(r)),void 0!==o)return o}}}])&&On(e.prototype,n),r&&On(e,r),t}();fn.default=Pn;var _n,xn,Sn={};function jn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Mn(e,t,n){return t&&jn(e.prototype,t),n&&jn(e,n),e}function En(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.default=Sn.BaseEvent=Sn.EventPhase=void 0,Sn.EventPhase=_n,(xn=_n||(Sn.EventPhase=_n={})).Start="start",xn.Move="move",xn.End="end",xn._NONE="";var kn=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),En(this,"type",void 0),En(this,"target",void 0),En(this,"currentTarget",void 0),En(this,"interactable",void 0),En(this,"_interaction",void 0),En(this,"timeStamp",void 0),En(this,"immediatePropagationStopped",!1),En(this,"propagationStopped",!1),this._interaction=e}return Mn(t,[{key:"interaction",get:function(){return this._interaction._proxy}}]),Mn(t,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),t}(),Dn=Sn.BaseEvent=kn;Sn.default=Dn;var Tn={};Object.defineProperty(Tn,"__esModule",{value:!0}),Tn.default=Tn.InteractEvent=Tn.EventPhase=void 0;var In,An,zn=Nn(me),Cn=Nn(Je),Rn=Nn(K),Wn=Nn(Sn),Xn=Nn(It);function Nn(e){return e&&e.__esModule?e:{default:e}}function Yn(e){return(Yn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ln(e){return(Ln=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function qn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Vn(e,t){return(Vn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Gn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Tn.EventPhase=In,(An=In||(Tn.EventPhase=In={})).Start="start",An.Move="move",An.End="end",An._NONE="";var Un=function(){function h(e,t,n,r,o,i,a,u){var s,l,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),l=this,s=!(c=Ln(h).call(this,e))||"object"!==Yn(c)&&"function"!=typeof c?qn(l):c,Gn(qn(s),"target",void 0),Gn(qn(s),"currentTarget",void 0),Gn(qn(s),"relatedTarget",void 0),Gn(qn(s),"screenX",void 0),Gn(qn(s),"screenY",void 0),Gn(qn(s),"button",void 0),Gn(qn(s),"buttons",void 0),Gn(qn(s),"ctrlKey",void 0),Gn(qn(s),"shiftKey",void 0),Gn(qn(s),"altKey",void 0),Gn(qn(s),"metaKey",void 0),Gn(qn(s),"page",void 0),Gn(qn(s),"client",void 0),Gn(qn(s),"delta",void 0),Gn(qn(s),"rect",void 0),Gn(qn(s),"x0",void 0),Gn(qn(s),"y0",void 0),Gn(qn(s),"t0",void 0),Gn(qn(s),"dt",void 0),Gn(qn(s),"duration",void 0),Gn(qn(s),"clientX0",void 0),Gn(qn(s),"clientY0",void 0),Gn(qn(s),"velocity",void 0),Gn(qn(s),"speed",void 0),Gn(qn(s),"swipe",void 0),Gn(qn(s),"timeStamp",void 0),Gn(qn(s),"dragEnter",void 0),Gn(qn(s),"dragLeave",void 0),Gn(qn(s),"axes",void 0),Gn(qn(s),"preEnd",void 0),o=o||e.element;var f=e.interactable,p=(f&&f.options||Xn.default).deltaSource,d=(0,Cn.default)(f,o,n),v="start"===r,y="end"===r,m=v?qn(s):e.prevEvent,g=v?e.coords.start:y?{page:m.page,client:m.client,timeStamp:e.coords.cur.timeStamp}:e.coords.cur;return s.page=(0,zn.default)({},g.page),s.client=(0,zn.default)({},g.client),s.rect=(0,zn.default)({},e.rect),s.timeStamp=g.timeStamp,y||(s.page.x-=d.x,s.page.y-=d.y,s.client.x-=d.x,s.client.y-=d.y),s.ctrlKey=t.ctrlKey,s.altKey=t.altKey,s.shiftKey=t.shiftKey,s.metaKey=t.metaKey,s.button=t.button,s.buttons=t.buttons,s.target=o,s.currentTarget=o,s.relatedTarget=i||null,s.preEnd=a,s.type=u||n+(r||""),s.interactable=f,s.t0=v?e.pointers[e.pointers.length-1].downTime:m.t0,s.x0=e.coords.start.page.x-d.x,s.y0=e.coords.start.page.y-d.y,s.clientX0=e.coords.start.client.x-d.x,s.clientY0=e.coords.start.client.y-d.y,s.delta=v||y?{x:0,y:0}:{x:s[p].x-m[p].x,y:s[p].y-m[p].y},s.dt=e.coords.delta.timeStamp,s.duration=s.timeStamp-s.t0,s.velocity=(0,zn.default)({},e.coords.velocity[p]),s.speed=(0,Rn.default)(s.velocity.x,s.velocity.y),s.swipe=y||"inertiastart"===r?s.getSwipe():null,s}var e,t,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Vn(e,t)}(h,Wn["default"]),e=h,(t=[{key:"getSwipe",value:function(){var e=this._interaction;if(e.prevEvent.speed<600||150<this.timeStamp-e.prevEvent.timeStamp)return null;var t=180*Math.atan2(e.prevEvent.velocityY,e.prevEvent.velocityX)/Math.PI;t<0&&(t+=360);var n=112.5<=t&&t<247.5,r=202.5<=t&&t<337.5;return{up:r,down:!r&&22.5<=t&&t<157.5,left:n,right:!n&&(292.5<=t||t<67.5),angle:t,speed:e.prevEvent.speed,velocity:{x:e.prevEvent.velocityX,y:e.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"pageX",get:function(){return this.page.x},set:function(e){this.page.x=e}},{key:"pageY",get:function(){return this.page.y},set:function(e){this.page.y=e}},{key:"clientX",get:function(){return this.client.x},set:function(e){this.client.x=e}},{key:"clientY",get:function(){return this.client.y},set:function(e){this.client.y=e}},{key:"dx",get:function(){return this.delta.x},set:function(e){this.delta.x=e}},{key:"dy",get:function(){return this.delta.y},set:function(e){this.delta.y=e}},{key:"velocityX",get:function(){return this.velocity.x},set:function(e){this.velocity.x=e}},{key:"velocityY",get:function(){return this.velocity.y},set:function(e){this.velocity.y=e}}])&&Fn(e.prototype,t),n&&Fn(e,n),h}(),Bn=Tn.InteractEvent=Un;Tn.default=Bn;var Hn={};Object.defineProperty(Hn,"__esModule",{value:!0}),Hn.default=Hn.PointerInfo=void 0;function Kn(e,t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Kn),this.id=e,this.pointer=t,this.event=n,this.downTime=r,this.downTarget=o}var $n=Hn.PointerInfo=Kn;Hn.default=$n;var Qn={};function Zn(e){return(Zn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Qn,"__esModule",{value:!0}),Qn.default=void 0;var Jn=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Zn(e)&&"function"!=typeof e)return{default:e};var t=er();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(C);function er(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return er=function(){return e},e}var tr={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(e){for(var t=0;t<tr.methodOrder.length;t++){var n;n=tr.methodOrder[t];var r=tr[n](e);if(r)return r}return null},simulationResume:function(e){var t=e.pointerType,n=e.eventType,r=e.eventTarget,o=e.scope;if(!/down|start/i.test(n))return null;for(var i=0;i<o.interactions.list.length;i++){var a=o.interactions.list[i],u=r;if(a.simulation&&a.simulation.allowResume&&a.pointerType===t)for(;u;){if(u===a.element)return a;u=Jn.parentNode(u)}}return null},mouseOrPen:function(e){var t,n=e.pointerId,r=e.pointerType,o=e.eventType,i=e.scope;if("mouse"!==r&&"pen"!==r)return null;for(var a=0;a<i.interactions.list.length;a++){var u=i.interactions.list[a];if(u.pointerType===r){if(u.simulation&&!nr(u,n))continue;if(u.interacting())return u;t=t||u}}if(t)return t;for(var s=0;s<i.interactions.list.length;s++){var l=i.interactions.list[s];if(!(l.pointerType!==r||/down/i.test(o)&&l.simulation))return l}return null},hasPointer:function(e){for(var t=e.pointerId,n=e.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(nr(o,t))return o}return null},idle:function(e){for(var t=e.pointerType,n=e.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(1===o.pointers.length){var i=o.interactable;if(i&&(!i.options.gesture||!i.options.gesture.enabled))continue}else if(2<=o.pointers.length)continue;if(!o.interacting()&&t===o.pointerType)return o}return null}};function nr(e,t){return e.pointers.some(function(e){return e.id===t})}var rr=tr;Qn.default=rr;var or={};function ir(e){return(ir="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(or,"__esModule",{value:!0}),or.default=void 0;var ar=O({}),ur=cr(u),sr=cr(y);function lr(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return lr=function(){return e},e}function cr(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ir(e)&&"function"!=typeof e)return{default:e};var t=lr();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function fr(e){var t=e.interaction;if("drag"===t.prepared.name){var n=t.prepared.axis;"x"===n?(t.coords.cur.page.y=t.coords.start.page.y,t.coords.cur.client.y=t.coords.start.client.y,t.coords.velocity.client.y=0,t.coords.velocity.page.y=0):"y"===n&&(t.coords.cur.page.x=t.coords.start.page.x,t.coords.cur.client.x=t.coords.start.client.x,t.coords.velocity.client.x=0,t.coords.velocity.page.x=0)}}function pr(e){var t=e.iEvent,n=e.interaction;if("drag"===n.prepared.name){var r=n.prepared.axis;if("x"===r||"y"===r){var o="x"===r?"y":"x";t.page[o]=n.coords.start.page[o],t.client[o]=n.coords.start.client[o],t.delta[o]=0}}}ar.ActionName.Drag="drag";var dr={id:"actions/drag",install:function(e){var t=e.actions,n=e.Interactable,r=e.defaults;n.prototype.draggable=dr.draggable,t[ar.ActionName.Drag]=dr,t.names.push(ar.ActionName.Drag),ur.merge(t.eventTypes,["dragstart","dragmove","draginertiastart","dragresume","dragend"]),t.methodDict.drag="draggable",r.actions.drag=dr.defaults},listeners:{"interactions:before-action-move":fr,"interactions:action-resume":fr,"interactions:action-move":pr,"auto-start:check":function(e){var t=e.interaction,n=e.interactable,r=e.buttons,o=n.options.drag;if(o&&o.enabled&&(!t.pointerIsDown||!/mouse|pointer/.test(t.pointerType)||0!=(r&n.options.drag.mouseButtons)))return!(e.action={name:ar.ActionName.Drag,axis:"start"===o.lockAxis?o.startAxis:o.lockAxis})}},draggable:function(e){return sr.object(e)?(this.options.drag.enabled=!1!==e.enabled,this.setPerAction(ar.ActionName.Drag,e),this.setOnEvents(ar.ActionName.Drag,e),/^(xy|x|y|start)$/.test(e.lockAxis)&&(this.options.drag.lockAxis=e.lockAxis),/^(xy|x|y)$/.test(e.startAxis)&&(this.options.drag.startAxis=e.startAxis),this):sr.bool(e)?(this.options.drag.enabled=e,this):this.options.drag},beforeMove:fr,move:pr,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},vr=dr;or.default=vr;var yr={};Object.defineProperty(yr,"__esModule",{value:!0}),yr.default=void 0;var mr,gr=(mr=Sn)&&mr.__esModule?mr:{default:mr},hr=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Or(e)&&"function"!=typeof e)return{default:e};var t=br();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(u);function br(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return br=function(){return e},e}function Or(e){return(Or="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function wr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pr(e){return(Pr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xr(e,t){return(xr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Sr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var jr=function(){function l(e,t,n){var r,o,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),o=this,r=!(i=Pr(l).call(this,t._interaction))||"object"!==Or(i)&&"function"!=typeof i?_r(o):i,Sr(_r(r),"target",void 0),Sr(_r(r),"dropzone",void 0),Sr(_r(r),"dragEvent",void 0),Sr(_r(r),"relatedTarget",void 0),Sr(_r(r),"draggable",void 0),Sr(_r(r),"timeStamp",void 0),Sr(_r(r),"propagationStopped",!1),Sr(_r(r),"immediatePropagationStopped",!1);var a="dragleave"===n?e.prev:e.cur,u=a.element,s=a.dropzone;return r.type=n,r.target=u,r.currentTarget=u,r.dropzone=s,r.dragEvent=t,r.relatedTarget=t.target,r.draggable=t.interactable,r.timeStamp=t.timeStamp,r}var e,t,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xr(e,t)}(l,gr["default"]),e=l,(t=[{key:"reject",value:function(){var r=this,e=this._interaction.dropState;if("dropactivate"===this.type||this.dropzone&&e.cur.dropzone===this.dropzone&&e.cur.element===this.target)if(e.prev.dropzone=this.dropzone,e.prev.element=this.target,e.rejected=!0,e.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){var t=e.activeDrops,n=hr.findIndex(t,function(e){var t=e.dropzone,n=e.element;return t===r.dropzone&&n===r.target});e.activeDrops.splice(n,1);var o=new l(e,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new l(e,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&wr(e.prototype,t),n&&wr(e,n),l}();yr.default=jr;var Mr={};function Er(e){return(Er="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Mr,"__esModule",{value:!0}),Mr.default=void 0;zr(Ut);var kr=O({}),Dr=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Er(e)&&"function"!=typeof e)return{default:e};var t=Ar();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt),Tr=zr(or),Ir=zr(yr);function Ar(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ar=function(){return e},e}function zr(e){return e&&e.__esModule?e:{default:e}}function Cr(e,t){for(var n=0;n<e.slice().length;n++){var r=e.slice()[n],o=r.dropzone,i=r.element;t.dropzone=o,t.target=i,o.fire(t),t.propagationStopped=t.immediatePropagationStopped=!1}}function Rr(e,t){for(var n=function(e,t){for(var n=e.interactables,r=[],o=0;o<n.list.length;o++){var i=n.list[o];if(i.options.drop.enabled){var a=i.options.drop.accept;if(!(Dr.is.element(a)&&a!==t||Dr.is.string(a)&&!Dr.dom.matchesSelector(t,a)||Dr.is.func(a)&&!a({dropzone:i,draggableElement:t})))for(var u=Dr.is.string(i.target)?i._context.querySelectorAll(i.target):Dr.is.array(i.target)?i.target:[i.target],s=0;s<u.length;s++){var l=u[s];l!==t&&r.push({dropzone:i,element:l})}}}return r}(e,t),r=0;r<n.length;r++){var o=n[r];o.rect=o.dropzone.getRect(o.element)}return n}function Wr(e,t,n){for(var r=e.dropState,o=e.interactable,i=e.element,a=[],u=0;u<r.activeDrops.length;u++){var s=r.activeDrops[u],l=s.dropzone,c=s.element,f=s.rect;a.push(l.dropCheck(t,n,o,i,c,f)?c:null)}var p=Dr.dom.indexOfDeepestElement(a);return r.activeDrops[p]||null}function Xr(e,t,n){var r=e.dropState,o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(o.activate=new Ir.default(r,n,"dropactivate"),o.activate.target=null,o.activate.dropzone=null),"dragend"===n.type&&(o.deactivate=new Ir.default(r,n,"dropdeactivate"),o.deactivate.target=null,o.deactivate.dropzone=null),r.rejected||(r.cur.element!==r.prev.element&&(r.prev.dropzone&&(o.leave=new Ir.default(r,n,"dragleave"),n.dragLeave=o.leave.target=r.prev.element,n.prevDropzone=o.leave.dropzone=r.prev.dropzone),r.cur.dropzone&&(o.enter=new Ir.default(r,n,"dragenter"),n.dragEnter=r.cur.element,n.dropzone=r.cur.dropzone)),"dragend"===n.type&&r.cur.dropzone&&(o.drop=new Ir.default(r,n,"drop"),n.dropzone=r.cur.dropzone,n.relatedTarget=r.cur.element),"dragmove"===n.type&&r.cur.dropzone&&(o.move=new Ir.default(r,n,"dropmove"),(o.move.dragmove=n).dropzone=r.cur.dropzone)),o}function Nr(e,t){var n=e.dropState,r=n.activeDrops,o=n.cur,i=n.prev;t.leave&&i.dropzone.fire(t.leave),t.move&&o.dropzone.fire(t.move),t.enter&&o.dropzone.fire(t.enter),t.drop&&o.dropzone.fire(t.drop),t.deactivate&&Cr(r,t.deactivate),n.prev.dropzone=o.dropzone,n.prev.element=o.element}function Yr(e,t){var n=e.interaction,r=e.iEvent,o=e.event;if("dragmove"===r.type||"dragend"===r.type){var i=n.dropState;t.dynamicDrop&&(i.activeDrops=Rr(t,n.element));var a=r,u=Wr(n,a,o);i.rejected=i.rejected&&!!u&&u.dropzone===i.cur.dropzone&&u.element===i.cur.element,i.cur.dropzone=u&&u.dropzone,i.cur.element=u&&u.element,i.events=Xr(n,0,a)}}var Fr={id:"actions/drop",install:function(t){var e=t.actions,n=t.interact,r=t.Interactable,o=t.defaults;t.usePlugin(Tr.default),r.prototype.dropzone=function(e){return function(e,t){if(Dr.is.object(t)){if(e.options.drop.enabled=!1!==t.enabled,t.listeners){var n=Dr.normalizeListeners(t.listeners),r=Object.keys(n).reduce(function(e,t){return e[/^(enter|leave)/.test(t)?"drag".concat(t):/^(activate|deactivate|move)/.test(t)?"drop".concat(t):t]=n[t],e},{});e.off(e.options.drop.listeners),e.on(r),e.options.drop.listeners=r}return Dr.is.func(t.ondrop)&&e.on("drop",t.ondrop),Dr.is.func(t.ondropactivate)&&e.on("dropactivate",t.ondropactivate),Dr.is.func(t.ondropdeactivate)&&e.on("dropdeactivate",t.ondropdeactivate),Dr.is.func(t.ondragenter)&&e.on("dragenter",t.ondragenter),Dr.is.func(t.ondragleave)&&e.on("dragleave",t.ondragleave),Dr.is.func(t.ondropmove)&&e.on("dropmove",t.ondropmove),/^(pointer|center)$/.test(t.overlap)?e.options.drop.overlap=t.overlap:Dr.is.number(t.overlap)&&(e.options.drop.overlap=Math.max(Math.min(1,t.overlap),0)),"accept"in t&&(e.options.drop.accept=t.accept),"checker"in t&&(e.options.drop.checker=t.checker),e}if(Dr.is.bool(t))return e.options.drop.enabled=t,e;return e.options.drop}(this,e)},r.prototype.dropCheck=function(e,t,n,r,o,i){return function(e,t,n,r,o,i,a){var u=!1;if(!(a=a||e.getRect(i)))return!!e.options.drop.checker&&e.options.drop.checker(t,n,u,e,i,r,o);var s=e.options.drop.overlap;if("pointer"===s){var l=Dr.getOriginXY(r,o,kr.ActionName.Drag),c=Dr.pointer.getPageXY(t);c.x+=l.x,c.y+=l.y;var f=c.x>a.left&&c.x<a.right,p=c.y>a.top&&c.y<a.bottom;u=f&&p}var d=r.getRect(o);if(d&&"center"===s){var v=d.left+d.width/2,y=d.top+d.height/2;u=v>=a.left&&v<=a.right&&y>=a.top&&y<=a.bottom}if(d&&Dr.is.number(s)){var m=Math.max(0,Math.min(a.right,d.right)-Math.max(a.left,d.left))*Math.max(0,Math.min(a.bottom,d.bottom)-Math.max(a.top,d.top))/(d.width*d.height);u=s<=m}e.options.drop.checker&&(u=e.options.drop.checker(t,n,u,e,i,r,o));return u}(this,e,t,n,r,o,i)},n.dynamicDrop=function(e){return Dr.is.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},Dr.arr.merge(e.eventTypes,["dragenter","dragleave","dropactivate","dropdeactivate","dropmove","drop"]),e.methodDict.drop="dropzone",t.dynamicDrop=!1,o.actions.drop=Fr.defaults},listeners:{"interactions:before-action-start":function(e){var t=e.interaction;"drag"===t.prepared.name&&(t.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:null})},"interactions:after-action-start":function(e,t){var n=e.interaction,r=(e.event,e.iEvent);if("drag"===n.prepared.name){var o=n.dropState;o.activeDrops=null,o.events=null,o.activeDrops=Rr(t,n.element),o.events=Xr(n,0,r),o.events.activate&&(Cr(o.activeDrops,o.events.activate),t.fire("actions/drop:start",{interaction:n,dragEvent:r}))}},"interactions:action-move":Yr,"interactions:action-end":Yr,"interactions:after-action-move":function(e,t){var n=e.interaction,r=e.iEvent;"drag"===n.prepared.name&&(Nr(n,n.dropState.events),t.fire("actions/drop:move",{interaction:n,dragEvent:r}),n.dropState.events={})},"interactions:after-action-end":function(e,t){var n=e.interaction,r=e.iEvent;"drag"===n.prepared.name&&(Nr(n,n.dropState.events),t.fire("actions/drop:end",{interaction:n,dragEvent:r}))},"interactions:stop":function(e){var t=e.interaction;if("drag"===t.prepared.name){var n=t.dropState;n&&(n.activeDrops=null,n.events=null,n.cur.dropzone=null,n.cur.element=null,n.prev.dropzone=null,n.prev.element=null,n.rejected=!1)}}},getActiveDrops:Rr,getDrop:Wr,getDropEvents:Xr,fireDropEvents:Nr,defaults:{enabled:!1,accept:null,overlap:"pointer"}},Lr=Fr;Mr.default=Lr;var qr={};function Vr(e){return(Vr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(qr,"__esModule",{value:!0}),qr.default=void 0;var Gr,Ur=(Gr=Tn)&&Gr.__esModule?Gr:{default:Gr},Br=O({}),Hr=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Vr(e)&&"function"!=typeof e)return{default:e};var t=Kr();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt);function Kr(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Kr=function(){return e},e}function $r(e){var t=e.interaction,n=e.iEvent,r=e.event,o=e.phase;if("gesture"===t.prepared.name){var i=t.pointers.map(function(e){return e.pointer}),a="start"===o,u="end"===o,s=t.interactable.options.deltaSource;if(n.touches=[i[0],i[1]],a)n.distance=Hr.pointer.touchDistance(i,s),n.box=Hr.pointer.touchBBox(i),n.scale=1,n.ds=0,n.angle=Hr.pointer.touchAngle(i,s),n.da=0,t.gesture.startDistance=n.distance,t.gesture.startAngle=n.angle;else if(u||r instanceof Ur.default){var l=t.prevEvent;n.distance=l.distance,n.box=l.box,n.scale=l.scale,n.ds=0,n.angle=l.angle,n.da=0}else n.distance=Hr.pointer.touchDistance(i,s),n.box=Hr.pointer.touchBBox(i),n.scale=n.distance/t.gesture.startDistance,n.angle=Hr.pointer.touchAngle(i,s),n.ds=n.scale-t.gesture.scale,n.da=n.angle-t.gesture.angle;t.gesture.distance=n.distance,t.gesture.angle=n.angle,Hr.is.number(n.scale)&&n.scale!==1/0&&!isNaN(n.scale)&&(t.gesture.scale=n.scale)}}Br.ActionName.Gesture="gesture";var Qr={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(e){var t=e.actions,n=e.Interactable,r=e.defaults;n.prototype.gesturable=function(e){return Hr.is.object(e)?(this.options.gesture.enabled=!1!==e.enabled,this.setPerAction(Br.ActionName.Gesture,e),this.setOnEvents(Br.ActionName.Gesture,e),this):Hr.is.bool(e)?(this.options.gesture.enabled=e,this):this.options.gesture},t[Br.ActionName.Gesture]=Qr,t.names.push(Br.ActionName.Gesture),Hr.arr.merge(t.eventTypes,["gesturestart","gesturemove","gestureend"]),t.methodDict.gesture="gesturable",r.actions.gesture=Qr.defaults},listeners:{"interactions:action-start":$r,"interactions:action-move":$r,"interactions:action-end":$r,"interactions:new":function(e){e.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(e){if(!(e.interaction.pointers.length<2)){var t=e.interactable.options.gesture;if(t&&t.enabled)return!(e.action={name:Br.ActionName.Gesture})}}},defaults:{},getCursor:function(){return""}},Zr=Qr;qr.default=Zr;var Jr={};function eo(e){return(eo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.default=void 0;g({});var to,no=O({}),ro=so(u),oo=so(C),io=(to=me)&&to.__esModule?to:{default:to},ao=so(y);function uo(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return uo=function(){return e},e}function so(e){if(e&&e.__esModule)return e;if(null===e||"object"!==eo(e)&&"function"!=typeof e)return{default:e};var t=uo();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function lo(e,t,n,r,o,i,a){if(!t)return!1;if(!0===t){var u=ao.number(i.width)?i.width:i.right-i.left,s=ao.number(i.height)?i.height:i.bottom-i.top;if(a=Math.min(a,("left"===e||"right"===e?u:s)/2),u<0&&("left"===e?e="right":"right"===e&&(e="left")),s<0&&("top"===e?e="bottom":"bottom"===e&&(e="top")),"left"===e)return n.x<(0<=u?i.left:i.right)+a;if("top"===e)return n.y<(0<=s?i.top:i.bottom)+a;if("right"===e)return n.x>(0<=u?i.right:i.left)-a;if("bottom"===e)return n.y>(0<=s?i.bottom:i.top)-a}return!!ao.element(r)&&(ao.element(t)?t===r:oo.matchesUpTo(r,t,o))}function co(e){var t=e.iEvent,n=e.interaction;n.prepared.name===no.ActionName.Resize&&n.resizeAxes&&(n.interactable.options.resize.square?("y"===n.resizeAxes?t.delta.x=t.delta.y:t.delta.y=t.delta.x,t.axes="xy"):(t.axes=n.resizeAxes,"x"===n.resizeAxes?t.delta.y=0:"y"===n.resizeAxes&&(t.delta.x=0)))}var fo={id:"actions/resize",before:["actions/drag"],install:function(t){var e=t.actions,n=t.browser,r=t.Interactable,o=t.defaults;fo.cursors=n.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"},fo.defaultMargin=n.supportsTouch||n.supportsPointerEvent?20:10,r.prototype.resizable=function(e){return function(e,t,n){if(ao.object(t))return e.options.resize.enabled=!1!==t.enabled,e.setPerAction(no.ActionName.Resize,t),e.setOnEvents(no.ActionName.Resize,t),ao.string(t.axis)&&/^x$|^y$|^xy$/.test(t.axis)?e.options.resize.axis=t.axis:null===t.axis&&(e.options.resize.axis=n.defaults.actions.resize.axis),ao.bool(t.preserveAspectRatio)?e.options.resize.preserveAspectRatio=t.preserveAspectRatio:ao.bool(t.square)&&(e.options.resize.square=t.square),e;if(ao.bool(t))return e.options.resize.enabled=t,e;return e.options.resize}(this,e,t)},e[no.ActionName.Resize]=fo,e.names.push(no.ActionName.Resize),ro.merge(e.eventTypes,["resizestart","resizemove","resizeinertiastart","resizeresume","resizeend"]),e.methodDict.resize="resizable",o.actions.resize=fo.defaults},listeners:{"interactions:new":function(e){e.interaction.resizeAxes="xy"},"interactions:action-start":function(e){!function(e){var t=e.iEvent,n=e.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=n.rect;n._rects={start:(0,io.default)({},r),corrected:(0,io.default)({},r),previous:(0,io.default)({},r),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},t.edges=n.prepared.edges,t.rect=n._rects.corrected,t.deltaRect=n._rects.delta}}(e),co(e)},"interactions:action-move":function(e){!function(e){var t=e.iEvent,n=e.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=n.interactable.options.resize.invert,o="reposition"===r||"negate"===r,i=n.rect,a=n._rects,u=a.start,s=a.corrected,l=a.delta,c=a.previous;if((0,io.default)(c,s),o){if((0,io.default)(s,i),"reposition"===r){if(s.top>s.bottom){var f=s.top;s.top=s.bottom,s.bottom=f}if(s.left>s.right){var p=s.left;s.left=s.right,s.right=p}}}else s.top=Math.min(i.top,u.bottom),s.bottom=Math.max(i.bottom,u.top),s.left=Math.min(i.left,u.right),s.right=Math.max(i.right,u.left);for(var d in s.width=s.right-s.left,s.height=s.bottom-s.top,s)l[d]=s[d]-c[d];t.edges=n.prepared.edges,t.rect=s,t.deltaRect=l}}(e),co(e)},"interactions:action-end":function(e){var t=e.iEvent,n=e.interaction;"resize"===n.prepared.name&&n.prepared.edges&&(t.edges=n.prepared.edges,t.rect=n._rects.corrected,t.deltaRect=n._rects.delta)},"auto-start:check":function(e){var t=e.interaction,n=e.interactable,r=e.element,o=e.rect,i=e.buttons;if(o){var a=(0,io.default)({},t.coords.cur.page),u=n.options.resize;if(u&&u.enabled&&(!t.pointerIsDown||!/mouse|pointer/.test(t.pointerType)||0!=(i&u.mouseButtons))){if(ao.object(u.edges)){var s={left:!1,right:!1,top:!1,bottom:!1};for(var l in s)s[l]=lo(l,u.edges[l],a,t._latestPointer.eventTarget,r,o,u.margin||fo.defaultMargin);s.left=s.left&&!s.right,s.top=s.top&&!s.bottom,(s.left||s.right||s.top||s.bottom)&&(e.action={name:no.ActionName.Resize,edges:s})}else{var c="y"!==u.axis&&a.x>o.right-fo.defaultMargin,f="x"!==u.axis&&a.y>o.bottom-fo.defaultMargin;(c||f)&&(e.action={name:"resize",axes:(c?"x":"")+(f?"y":"")})}return!e.action&&void 0}}}},defaults:{square:!(no.ActionName.Resize="resize"),preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(e){var t=e.edges,n=e.axis,r=e.name,o=fo.cursors,i=null;if(n)i=o[r+n];else if(t){for(var a="",u=["top","bottom","left","right"],s=0;s<u.length;s++){var l=u[s];t[l]&&(a+=l)}i=o[a]}return i},defaultMargin:null},po=fo;Jr.default=po;var vo={};Object.defineProperty(vo,"__esModule",{value:!0}),vo.install=function(e){e.usePlugin(go.default),e.usePlugin(ho.default),e.usePlugin(yo.default),e.usePlugin(mo.default)},Object.defineProperty(vo,"drag",{enumerable:!0,get:function(){return yo.default}}),Object.defineProperty(vo,"drop",{enumerable:!0,get:function(){return mo.default}}),Object.defineProperty(vo,"gesture",{enumerable:!0,get:function(){return go.default}}),Object.defineProperty(vo,"resize",{enumerable:!0,get:function(){return ho.default}}),vo.id=void 0;var yo=bo(or),mo=bo(Mr),go=bo(qr),ho=bo(Jr);function bo(e){return e&&e.__esModule?e:{default:e}}vo.id="actions";var Oo={};function wo(e){return(wo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Oo,"__esModule",{value:!0}),Oo.getContainer=ko,Oo.getScroll=Do,Oo.getScrollSize=function(e){xo.window(e)&&(e=window.document.body);return{x:e.scrollWidth,y:e.scrollHeight}},Oo.getScrollSizeDelta=function(e,t){var n=e.interaction,r=e.element,o=n&&n.interactable.options[n.prepared.name].autoScroll;if(!o||!o.enabled)return t(),{x:0,y:0};var i=ko(o.container,n.interactable,r),a=Do(i);t();var u=Do(i);return{x:u.x-a.x,y:u.y-a.y}},Oo.default=void 0;var Po,_o=Mo(C),xo=Mo(y),So=(Po=ut)&&Po.__esModule?Po:{default:Po};function jo(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return jo=function(){return e},e}function Mo(e){if(e&&e.__esModule)return e;if(null===e||"object"!==wo(e)&&"function"!=typeof e)return{default:e};var t=jo();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}var Eo={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(e){Eo.isScrolling=!0,So.default.cancel(Eo.i),(e.autoScroll=Eo).interaction=e,Eo.prevTime=Eo.now(),Eo.i=So.default.request(Eo.scroll)},stop:function(){Eo.isScrolling=!1,Eo.interaction&&(Eo.interaction.autoScroll=null),So.default.cancel(Eo.i)},scroll:function(){var e=Eo.interaction,t=e.interactable,n=e.element,r=e.prepared.name,o=t.options[r].autoScroll,i=ko(o.container,t,n),a=Eo.now(),u=(a-Eo.prevTime)/1e3,s=o.speed*u;if(1<=s){var l={x:Eo.x*s,y:Eo.y*s};if(l.x||l.y){var c=Do(i);xo.window(i)?i.scrollBy(l.x,l.y):i&&(i.scrollLeft+=l.x,i.scrollTop+=l.y);var f=Do(i),p={x:f.x-c.x,y:f.y-c.y};(p.x||p.y)&&t.fire({type:"autoscroll",target:n,interactable:t,delta:p,interaction:e,container:i})}Eo.prevTime=a}Eo.isScrolling&&(So.default.cancel(Eo.i),Eo.i=So.default.request(Eo.scroll))},check:function(e,t){var n=e.options;return n[t].autoScroll&&n[t].autoScroll.enabled},onInteractionMove:function(e){var t=e.interaction,n=e.pointer;if(t.interacting()&&Eo.check(t.interactable,t.prepared.name))if(t.simulation)Eo.x=Eo.y=0;else{var r,o,i,a,u=t.interactable,s=t.element,l=t.prepared.name,c=u.options[l].autoScroll,f=ko(c.container,u,s);if(xo.window(f))a=n.clientX<Eo.margin,r=n.clientY<Eo.margin,o=n.clientX>f.innerWidth-Eo.margin,i=n.clientY>f.innerHeight-Eo.margin;else{var p=_o.getElementClientRect(f);a=n.clientX<p.left+Eo.margin,r=n.clientY<p.top+Eo.margin,o=n.clientX>p.right-Eo.margin,i=n.clientY>p.bottom-Eo.margin}Eo.x=o?1:a?-1:0,Eo.y=i?1:r?-1:0,Eo.isScrolling||(Eo.margin=c.margin,Eo.speed=c.speed,Eo.start(t))}}};function ko(e,t,n){return(xo.string(e)?(0,ge.getStringOptionResult)(e,t,n):e)||(0,s.getWindow)(n)}function Do(e){return xo.window(e)&&(e=window.document.body),{x:e.scrollLeft,y:e.scrollTop}}var To={id:"auto-scroll",install:function(e){var t=e.defaults,n=e.actions;(e.autoScroll=Eo).now=function(){return e.now()},n.eventTypes.push("autoscroll"),t.perAction.autoScroll=Eo.defaults},listeners:{"interactions:new":function(e){e.interaction.autoScroll=null},"interactions:destroy":function(e){e.interaction.autoScroll=null,Eo.stop(),Eo.interaction&&(Eo.interaction=null)},"interactions:stop":Eo.stop,"interactions:action-move":function(e){return Eo.onInteractionMove(e)}}};Oo.default=To;var Io={};function Ao(e){return(Ao="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Io,"__esModule",{value:!0}),Io.default=void 0;var zo=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Ao(e)&&"function"!=typeof e)return{default:e};var t=Co();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y);function Co(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Co=function(){return e},e}function Ro(e){return zo.bool(e)?(this.options.styleCursor=e,this):null===e?(delete this.options.styleCursor,this):this.options.styleCursor}function Wo(e){return zo.func(e)?(this.options.actionChecker=e,this):null===e?(delete this.options.actionChecker,this):this.options.actionChecker}var Xo={id:"auto-start/interactableMethods",install:function(d){var e=d.Interactable;e.prototype.getAction=function(e,t,n,r){var o,i,a,u,s,l,c,f,p=(i=t,a=n,u=r,s=d,l=(o=this).getRect(u),c=i.buttons||{0:1,1:4,3:8,4:16}[i.button],f={action:null,interactable:o,interaction:a,element:u,rect:l,buttons:c},s.fire("auto-start:check",f),f.action);return this.options.actionChecker?this.options.actionChecker(e,t,p,this,r,n):p},e.prototype.ignoreFrom=(0,pt.warnOnce)(function(e){return this._backCompatOption("ignoreFrom",e)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=(0,pt.warnOnce)(function(e){return this._backCompatOption("allowFrom",e)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=Wo,e.prototype.styleCursor=Ro}};Io.default=Xo;var No={};function Yo(e){return(Yo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(No,"__esModule",{value:!0}),No.default=void 0;var Fo,Lo=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Yo(e)&&"function"!=typeof e)return{default:e};var t=Vo();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt),qo=(Fo=Io)&&Fo.__esModule?Fo:{default:Fo};function Vo(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Vo=function(){return e},e}function Go(e,t,n,r,o){return t.testIgnoreAllow(t.options[e.name],n,r)&&t.options[e.name].enabled&&Ko(t,n,e,o)?e:null}function Uo(e,t,n,r,o,i,a){for(var u=0,s=r.length;u<s;u++){var l=r[u],c=o[u],f=l.getAction(t,n,e,c);if(f){var p=Go(f,l,c,i,a);if(p)return{action:p,interactable:l,element:c}}}return{action:null,interactable:null,element:null}}function Bo(e,t,n,r,o){var i=[],a=[],u=r;function s(e){i.push(e),a.push(u)}for(;Lo.is.element(u);){i=[],a=[],o.interactables.forEachMatch(u,s);var l=Uo(e,t,n,i,a,r,o);if(l.action&&!l.interactable.options[l.action.name].manualStart)return l;u=Lo.dom.parentNode(u)}return{action:null,interactable:null,element:null}}function Ho(e,t,n){var r=t.action,o=t.interactable,i=t.element;r=r||{name:null},e.interactable=o,e.element=i,Lo.copyAction(e.prepared,r),e.rect=o&&r.name?o.getRect(i):null,Zo(e,n),n.fire("autoStart:prepared",{interaction:e})}function Ko(e,t,n,r){var o=e.options,i=o[n.name].max,a=o[n.name].maxPerElement,u=r.autoStart.maxInteractions,s=0,l=0,c=0;if(!(i&&a&&u))return!1;for(var f=0;f<r.interactions.list.length;f++){var p=r.interactions.list[f],d=p.prepared.name;if(p.interacting()){if(u<=++s)return!1;if(p.interactable===e){if(i<=(l+=d===n.name?1:0))return!1;if(p.element===t&&(c++,d===n.name&&a<=c))return!1}}}return 0<u}function $o(e,t){return Lo.is.number(e)?(t.autoStart.maxInteractions=e,this):t.autoStart.maxInteractions}function Qo(e,t,n){var r=n.autoStart.cursorElement;r&&r!==e&&(r.style.cursor=""),e.ownerDocument.documentElement.style.cursor=t,e.style.cursor=t,n.autoStart.cursorElement=t?e:null}function Zo(e,t){var n=e.interactable,r=e.element,o=e.prepared;if("mouse"===e.pointerType&&n&&n.options.styleCursor){var i="";if(o.name){var a=n.options[o.name].cursorChecker;i=Lo.is.func(a)?a(o,n,r,e._interacting):t.actions[o.name].getCursor(o)}Qo(e.element,i||"",t)}else t.autoStart.cursorElement&&Qo(t.autoStart.cursorElement,"",t)}var Jo={id:"auto-start/base",before:["actions","action/drag","actions/resize","actions/gesture"],install:function(t){var e=t.interact,n=t.defaults;t.usePlugin(qo.default),n.base.actionChecker=null,n.base.styleCursor=!0,Lo.extend(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=function(e){return $o(e,t)},t.autoStart={maxInteractions:1/0,withinInteractionLimit:Ko,cursorElement:null}},listeners:{"interactions:down":function(e,t){var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget;n.interacting()||Ho(n,Bo(n,r,o,i,t),t)},"interactions:move":function(e,t){var n,r,o,i,a,u;r=t,o=(n=e).interaction,i=n.pointer,a=n.event,u=n.eventTarget,"mouse"!==o.pointerType||o.pointerIsDown||o.interacting()||Ho(o,Bo(o,i,a,u,r),r),function(e,t){var n=e.interaction;if(n.pointerIsDown&&!n.interacting()&&n.pointerWasMoved&&n.prepared.name){t.fire("autoStart:before-start",e);var r=n.interactable,o=n.prepared.name;o&&r&&(r.options[o].manualStart||!Ko(r,n.element,n.prepared,t)?n.stop():(n.start(n.prepared,r,n.element),Zo(n,t)))}}(e,t)},"interactions:stop":function(e,t){var n=e.interaction,r=n.interactable;r&&r.options.styleCursor&&Qo(n.element,"",t)}},maxInteractions:$o,withinInteractionLimit:Ko,validateAction:Go};No.default=Jo;var ei={};function ti(e){return(ti="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(ei,"__esModule",{value:!0}),ei.default=void 0;var ni,ri=O({}),oi=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ti(e)&&"function"!=typeof e)return{default:e};var t=ai();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y),ii=(ni=No)&&ni.__esModule?ni:{default:ni};function ai(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return ai=function(){return e},e}var ui={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(e,r){var o=e.interaction,i=e.eventTarget,t=e.dx,n=e.dy;if("drag"===o.prepared.name){var a=Math.abs(t),u=Math.abs(n),s=o.interactable.options.drag,l=s.startAxis,c=u<a?"x":a<u?"y":"xy";if(o.prepared.axis="start"===s.lockAxis?c[0]:s.lockAxis,"xy"!=c&&"xy"!==l&&l!==c){o.prepared.name=null;function f(e){if(e!==o.interactable){var t=o.interactable.options.drag;if(!t.manualStart&&e.testIgnoreAllow(t,p,i)){var n=e.getAction(o.downPointer,o.downEvent,o,p);if(n&&n.name===ri.ActionName.Drag&&function(e,t){if(!t)return!1;var n=t.options[ri.ActionName.Drag].startAxis;return"xy"===e||"xy"===n||n===e}(c,e)&&ii.default.validateAction(n,e,p,i,r))return e}}}for(var p=i;oi.element(p);){var d=r.interactables.forEachMatch(p,f);if(d){o.prepared.name=ri.ActionName.Drag,o.interactable=d,o.element=p;break}p=(0,C.parentNode)(p)}}}}}};ei.default=ui;var si={};Object.defineProperty(si,"__esModule",{value:!0}),si.default=void 0;var li,ci=(li=No)&&li.__esModule?li:{default:li};function fi(e){var t=e.prepared&&e.prepared.name;if(!t)return null;var n=e.interactable.options;return n[t].hold||n[t].delay}var pi={id:"auto-start/hold",install:function(e){var t=e.defaults;e.usePlugin(ci.default),t.perAction.hold=0,t.perAction.delay=0},listeners:{"interactions:new":function(e){e.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(e){var t=e.interaction,n=fi(t);0<n&&(t.autoStartHoldTimer=setTimeout(function(){t.start(t.prepared,t.interactable,t.element)},n))},"interactions:move":function(e){var t=e.interaction,n=e.duplicate;t.pointerWasMoved&&!n&&clearTimeout(t.autoStartHoldTimer)},"autoStart:before-start":function(e){var t=e.interaction;0<fi(t)&&(t.prepared.name=null)}},getHoldDuration:fi};si.default=pi;var di={};Object.defineProperty(di,"__esModule",{value:!0}),di.install=function(e){e.usePlugin(vi.default),e.usePlugin(mi.default),e.usePlugin(yi.default)},Object.defineProperty(di,"autoStart",{enumerable:!0,get:function(){return vi.default}}),Object.defineProperty(di,"dragAxis",{enumerable:!0,get:function(){return yi.default}}),Object.defineProperty(di,"hold",{enumerable:!0,get:function(){return mi.default}}),di.id=void 0;var vi=gi(No),yi=gi(ei),mi=gi(si);function gi(e){return e&&e.__esModule?e:{default:e}}di.id="auto-start";var hi={};function bi(e){return(bi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(hi,"__esModule",{value:!0}),hi.install=ji,hi.default=void 0;var Oi,wi=(Oi=De)&&Oi.__esModule?Oi:{default:Oi},Pi=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==bi(e)&&"function"!=typeof e)return{default:e};var t=_i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y);function _i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _i=function(){return e},e}function xi(e){return/^(always|never|auto)$/.test(e)?(this.options.preventDefault=e,this):Pi.bool(e)?(this.options.preventDefault=e?"always":"never",this):this.options.preventDefault}function Si(e){var t=e.interaction,n=e.event;t.interactable&&t.interactable.checkAndPreventDefault(n)}function ji(r){var e=r.Interactable;e.prototype.preventDefault=xi,e.prototype.checkAndPreventDefault=function(e){return function(e,t,n){var r=e.options.preventDefault;if("never"!==r)if("always"!==r){if(wi.default.supportsPassive&&/^touch(start|move)$/.test(n.type)){var o=(0,s.getWindow)(n.target).document,i=t.getDocOptions(o);if(!i||!i.events||!1!==i.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(n.type)||Pi.element(n.target)&&(0,C.matchesSelector)(n.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||n.preventDefault()}else n.preventDefault()}(this,r,e)},r.interactions.docEvents.push({type:"dragstart",listener:function(e){for(var t=0;t<r.interactions.list.length;t++){var n=r.interactions.list[t];if(n.element&&(n.element===e.target||(0,C.nodeContains)(n.element,e.target)))return void n.interactable.checkAndPreventDefault(e)}}})}var Mi={id:"core/interactablePreventDefault",install:ji,listeners:["down","move","up","cancel"].reduce(function(e,t){return e["interactions:".concat(t)]=Si,e},{})};hi.default=Mi;var Ei={};function ki(e){return(ki="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.default=void 0;var Di,Ti,Ii=Ri(k),Ai=(Ri(me),function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ki(e)&&"function"!=typeof e)return{default:e};var t=Ci();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y)),zi=Ri(s);function Ci(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ci=function(){return e},e}function Ri(e){return e&&e.__esModule?e:{default:e}}(Ti=Di=Di||{}).touchAction="touchAction",Ti.boxSizing="boxSizing",Ti.noListeners="noListeners";var Wi={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"};Di.touchAction,Di.boxSizing,Di.noListeners;function Xi(e,t,n){return n.test(e.style[t]||zi.default.window.getComputedStyle(e)[t])}var Ni="dev-tools",Yi={id:Ni,install:function(){}};Ei.default=Yi;var Fi={};function Li(e){return(Li="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Fi,"__esModule",{value:!0}),Fi.startAll=Ki,Fi.setAll=$i,Fi.prepareStates=ta,Fi.setCoords=na,Fi.restoreCoords=ra,Fi.makeModifier=aa,Fi.default=void 0;var qi,Vi=(qi=me)&&qi.__esModule?qi:{default:qi},Gi=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Li(e)&&"function"!=typeof e)return{default:e};var t=Ui();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(ge);function Ui(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ui=function(){return e},e}function Bi(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Hi(e,t,n,r){var o=e.interaction,i=e.phase,a=o.interactable,u=o.element,s=o.edges,l=ta(ea(o)),c=(0,Vi.default)({},o.rect),f=ia(c,t);o.modifiers.startOffset=f,o.modifiers.startDelta={x:0,y:0};var p={interaction:o,interactable:a,element:u,pageCoords:t,phase:i,rect:c,edges:s,startOffset:f,states:l,preEnd:!1,requireEndOnly:!1,prevCoords:n,prevRect:r};return o.modifiers.states=l,o.modifiers.result=null,Ki(p),o.modifiers.result=$i(p)}function Ki(e){for(var t=e.states,n=0;n<t.length;n++){var r=t[n];r.methods.start&&(e.state=r).methods.start(e)}e.interaction.edges=e.edges}function $i(e){var t=e.prevCoords,n=e.prevRect,r=e.phase,o=e.preEnd,i=e.requireEndOnly,a=e.states,u=e.rect;e.coords=(0,Vi.default)({},e.pageCoords),e.rect=(0,Vi.default)({},u);for(var s={delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},coords:e.coords,rect:e.rect,eventProps:[],changed:!0},l=e.edges||{left:!0,right:!0,top:!0,bottom:!0},c=0;c<a.length;c++){var f=a[c],p=f.options,d=(0,Vi.default)({},e.coords),v=null;f.methods.set&&oa(p,o,i,r)&&(v=(e.state=f).methods.set(e),Gi.addEdges(l,e.rect,{x:e.coords.x-d.x,y:e.coords.y-d.y})),s.eventProps.push(v)}s.delta.x=e.coords.x-e.pageCoords.x,s.delta.y=e.coords.y-e.pageCoords.y,s.rectDelta.left=e.rect.left-u.left,s.rectDelta.right=e.rect.right-u.right,s.rectDelta.top=e.rect.top-u.top,s.rectDelta.bottom=e.rect.bottom-u.bottom;var y=!n||s.rect.left!==n.left||s.rect.right!==n.right||s.rect.top!==n.top||s.rect.bottom!==n.bottom;return s.changed=!t||t.x!==s.coords.x||t.y!==s.coords.y||y,s}function Qi(e){var t=e.interaction,n=e.phase,r=e.preEnd,o=e.skipModifiers,i=t.interactable,a=t.element,u=o?t.modifiers.states.slice(o):t.modifiers.states,s=e.prevCoords||(t.modifiers.result?t.modifiers.result.coords:null),l=e.prevRect||(t.modifiers.result?t.modifiers.result.rect:null),c=$i({interaction:t,interactable:i,element:a,preEnd:r,phase:n,pageCoords:e.modifiedCoords||t.coords.cur.page,prevCoords:s,rect:t.rect,edges:t.edges,prevRect:l,states:u,requireEndOnly:!1});if(!(t.modifiers.result=c).changed&&t.interacting())return!1;if(e.modifiedCoords){var f=t.coords.cur.page,p=e.modifiedCoords.x-f.x,d=e.modifiedCoords.y-f.y;c.coords.x+=p,c.coords.y+=d,c.delta.x+=p,c.delta.y+=d}na(e)}function Zi(e){var t=e.interaction,n=e.event,r=e.noPreEnd,o=t.modifiers.states;if(!r&&o&&o.length)for(var i=!1,a=0;a<o.length;a++){var u=o[a],s=(e.state=u).options,l=u.methods,c=l.beforeEnd&&l.beforeEnd(e);if(c)return t.modifiers.endResult=c,!1;!i&&oa(s,!0,!0)&&(t.move({event:n,preEnd:!0}),i=!0)}}function Ji(e){var t=e.interaction,n=t.modifiers.states;if(n&&n.length){for(var r=(0,Vi.default)({states:n,interactable:t.interactable,element:t.element,rect:null},e),o=0;o<n.length;o++){var i=n[o];(r.state=i).methods.stop&&i.methods.stop(r)}e.interaction.modifiers.states=null,e.interaction.modifiers.endResult=null}}function ea(e){var n=e.interactable.options[e.prepared.name],t=n.modifiers;return t&&t.length?t.filter(function(e){return!e.options||!1!==e.options.enabled}):["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(e){var t=n[e];return t&&t.enabled&&{options:t,methods:t._methods}}).filter(function(e){return!!e})}function ta(e){for(var t=[],n=0;n<e.length;n++){var r=e[n],o=r.options,i=r.methods,a=r.name;o&&!1===o.enabled||t.push({options:o,methods:i,index:n,name:a})}return t}function na(e){var t=e.interaction,n=e.phase,r=t.coords.cur,o=t.coords.start,i=t.modifiers,a=i.result,u=i.startDelta,s=a.delta;"start"===n&&(0,Vi.default)(t.modifiers.startDelta,a.delta);for(var l=0;l<[[o,u],[r,s]].length;l++){var c=Bi([[o,u],[r,s]][l],2),f=c[0],p=c[1];f.page.x+=p.x,f.page.y+=p.y,f.client.x+=p.x,f.client.y+=p.y}var d=t.modifiers.result.rectDelta,v=e.rect||t.rect;v.left+=d.left,v.right+=d.right,v.top+=d.top,v.bottom+=d.bottom,v.width=v.right-v.left,v.height=v.bottom-v.top}function ra(e){var t=e.interaction,n=t.coords,r=t.rect,o=t.modifiers;if(o.result){for(var i=o.startDelta,a=o.result,u=a.delta,s=a.rectDelta,l=[[n.start,i],[n.cur,u]],c=0;c<l.length;c++){var f=Bi(l[c],2),p=f[0],d=f[1];p.page.x-=d.x,p.page.y-=d.y,p.client.x-=d.x,p.client.y-=d.y}r.left-=s.left,r.right-=s.right,r.top-=s.top,r.bottom-=s.bottom}}function oa(e,t,n,r){return e?!1!==e.enabled&&(t||!e.endOnly)&&(!n||e.endOnly||e.alwaysOnEnd)&&(e.setStart||"start"!==r):!n}function ia(e,t){return e?{left:t.x-e.left,top:t.y-e.top,right:e.right-t.x,bottom:e.bottom-t.y}:{left:0,top:0,right:0,bottom:0}}function aa(e,r){function t(e){var t=e||{};for(var n in t.enabled=!1!==t.enabled,o)n in t||(t[n]=o[n]);return{options:t,methods:i,name:r}}var o=e.defaults,i={start:e.start,set:e.set,beforeEnd:e.beforeEnd,stop:e.stop};return r&&"string"==typeof r&&(t._defaults=o,t._methods=i),t}function ua(e){var t=e.iEvent,n=e.interaction.modifiers.result;n&&(t.modifiers=n.eventProps)}var sa={id:"modifiers/base",install:function(e){e.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(e){e.interaction.modifiers={startOffset:{left:0,right:0,top:0,bottom:0},states:null,result:null,endResult:null,startDelta:null}},"interactions:before-action-start":function(e){Hi(e,e.interaction.coords.start.page,null,null),na(e)},"interactions:after-action-start":ra,"interactions:before-action-move":Qi,"interactions:after-action-move":ra,"interactions:action-resume":function(e){var t=e.interaction.modifiers.result,n=t.coords,r=t.rect;Ji(e),Hi(e,e.interaction.coords.cur.page,n,r),Qi(e)},"interactions:before-action-end":Zi,"interactions:action-start":ua,"interactions:action-move":ua,"interactions:action-end":ua,"interactions:stop":Ji},before:["actions","action/drag","actions/resize","actions/gesture"],startAll:Ki,setAll:$i,prepareStates:ta,start:Hi,beforeMove:Qi,beforeEnd:Zi,stop:Ji,shouldDo:oa,getModifierList:ea,getRectOffset:ia,makeModifier:aa};Fi.default=sa;var la={};function ca(e){return(ca="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(la,"__esModule",{value:!0}),la.default=void 0;var fa,pa=ma(Fi),da=ma(pt),va=(fa=ut)&&fa.__esModule?fa:{default:fa};function ya(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return ya=function(){return e},e}function ma(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ca(e)&&"function"!=typeof e)return{default:e};var t=ya();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function ga(e,t){var n=wa(e),r=n.resistance,o=-Math.log(n.endSpeed/t.v0)/r;t.x0=e.prevEvent.page.x,t.y0=e.prevEvent.page.y,t.t0=t.startEvent.timeStamp/1e3,t.sx=t.sy=0,t.modifiedXe=t.xe=(t.vx0-o)/r,t.modifiedYe=t.ye=(t.vy0-o)/r,t.te=o,t.lambda_v0=r/t.v0,t.one_ve_v0=1-n.endSpeed/t.v0}function ha(e){Oa(e),da.pointer.setCoordDeltas(e.coords.delta,e.coords.prev,e.coords.cur),da.pointer.setCoordVelocity(e.coords.velocity,e.coords.delta);var t=e.inertia,n=wa(e).resistance,r=e._now()/1e3-t.t0;if(r<t.te){var o=1-(Math.exp(-n*r)-t.lambda_v0)/t.one_ve_v0;if(t.modifiedXe===t.xe&&t.modifiedYe===t.ye)t.sx=t.xe*o,t.sy=t.ye*o;else{var i=da.getQuadraticCurvePoint(0,0,t.xe,t.ye,t.modifiedXe,t.modifiedYe,o);t.sx=i.x,t.sy=i.y}e.move({event:t.startEvent}),t.timeout=va.default.request(function(){return ha(e)})}else t.sx=t.modifiedXe,t.sy=t.modifiedYe,e.move({event:t.startEvent}),e.end(t.startEvent),t.active=!1,e.simulation=null;da.pointer.copyCoords(e.coords.prev,e.coords.cur)}function ba(e){Oa(e);var t=e.inertia,n=e._now()-t.t0,r=wa(e).smoothEndDuration;n<r?(t.sx=da.easeOutQuad(n,0,t.xe,r),t.sy=da.easeOutQuad(n,0,t.ye,r),e.move({event:t.startEvent}),t.timeout=va.default.request(function(){return ba(e)})):(t.sx=t.xe,t.sy=t.ye,e.move({event:t.startEvent}),e.end(t.startEvent),t.smoothEnd=t.active=!1,e.simulation=null)}function Oa(e){var t=e.inertia;if(t.active){var n=t.upCoords.page,r=t.upCoords.client;da.pointer.setCoords(e.coords.cur,[{pageX:n.x+t.sx,pageY:n.y+t.sy,clientX:r.x+t.sx,clientY:r.y+t.sy}],e._now())}}function wa(e){var t=e.interactable,n=e.prepared;return t&&t.options&&n.name&&t.options[n.name].inertia}Tn.EventPhase.Resume="resume",Tn.EventPhase.InertiaStart="inertiastart";var Pa={id:"inertia",install:function(e){var t=e.defaults;e.usePlugin(pa.default),t.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(e){e.interaction.inertia={active:!1,smoothEnd:!1,allowResume:!1,upCoords:{},timeout:null}},"interactions:before-action-end":function(e,t){var n=e.interaction,r=e.event,o=e.noPreEnd,i=n.inertia;if(!n.interacting()||n.simulation&&n.simulation.active||o)return null;var a,u=wa(n),s=n._now(),l=n.coords.velocity.client,c=da.hypot(l.x,l.y),f=!1,p=u&&u.enabled&&"gesture"!==n.prepared.name&&r!==i.startEvent,d=p&&s-n.coords.cur.timeStamp<50&&c>u.minSpeed&&c>u.endSpeed,v={interaction:n,interactable:n.interactable,element:n.element,rect:n.rect,edges:n.edges,pageCoords:n.coords.cur.page,states:p&&n.modifiers.states.map(function(e){return da.extend({},e)}),preEnd:!0,prevCoords:null,prevRect:null,requireEndOnly:null,phase:Tn.EventPhase.InertiaStart};return p&&!d&&(v.prevCoords=n.modifiers.result.coords,v.prevRect=n.modifiers.result.rect,v.requireEndOnly=!1,f=(a=pa.default.setAll(v)).changed),d||f?(da.pointer.copyCoords(i.upCoords,n.coords.cur),(0,pa.setCoords)(v),n.pointers[0].pointer=i.startEvent=new t.InteractEvent(n,r,n.prepared.name,Tn.EventPhase.InertiaStart,n.element),(0,pa.restoreCoords)(v),i.t0=s,i.active=!0,i.allowResume=u.allowResume,n.simulation=i,n.interactable.fire(i.startEvent),d?(i.vx0=n.coords.velocity.client.x,i.vy0=n.coords.velocity.client.y,i.v0=c,ga(n,i),da.extend(v.pageCoords,n.coords.cur.page),v.pageCoords.x+=i.xe,v.pageCoords.y+=i.ye,v.prevCoords=null,v.prevRect=null,v.requireEndOnly=!0,a=pa.default.setAll(v),i.modifiedXe+=a.delta.x,i.modifiedYe+=a.delta.y,i.timeout=va.default.request(function(){return ha(n)})):(i.smoothEnd=!0,i.xe=a.delta.x,i.ye=a.delta.y,i.sx=i.sy=0,i.timeout=va.default.request(function(){return ba(n)})),!1):null},"interactions:down":function(e,t){var n=e.interaction,r=e.event,o=e.pointer,i=e.eventTarget,a=n.inertia;if(a.active)for(var u=i;da.is.element(u);){if(u===n.element){va.default.cancel(a.timeout),a.active=!1,n.simulation=null,n.updatePointer(o,r,i,!0),da.pointer.setCoords(n.coords.cur,n.pointers.map(function(e){return e.pointer}),n._now());var s={interaction:n,phase:Tn.EventPhase.Resume};t.fire("interactions:action-resume",s);var l=new t.InteractEvent(n,r,n.prepared.name,Tn.EventPhase.Resume,n.element);n._fireEvent(l),da.pointer.copyCoords(n.coords.prev,n.coords.cur);break}u=da.dom.parentNode(u)}},"interactions:stop":function(e){var t=e.interaction,n=t.inertia;n.active&&(va.default.cancel(n.timeout),n.active=!1,t.simulation=null)}},before:["modifiers/base"],calcInertia:ga,inertiaTick:ha,smothEndTick:ba,updateInertiaCoords:Oa};la.default=Pa;var _a={};function xa(e){return(xa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(_a,"__esModule",{value:!0}),_a.default=void 0;var Sa,ja=(Sa=me)&&Sa.__esModule?Sa:{default:Sa},Ma=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==xa(e)&&"function"!=typeof e)return{default:e};var t=Ea();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(Fi);function Ea(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ea=function(){return e},e}function ka(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function Da(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ka(Object(n),!0).forEach(function(e){Ta(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ka(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function Ta(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ia(e,t,n){var r=e.startCoords,o=e.edgeSign;t?n.y=r.y+(n.x-r.x)*o:n.x=r.x+(n.y-r.y)*o}function Aa(e,t,n,r){var o=e.startRect,i=e.startCoords,a=e.ratio,u=e.edgeSign;if(t){var s=r.width/a;n.y=i.y+(s-o.height)*u}else{var l=r.height*a;n.x=i.x+(l-o.width)*u}}var za={start:function(e){var t=e.state,n=e.rect,r=e.edges,o=e.pageCoords,i=t.options.ratio,a=t.options,u=a.equalDelta,s=a.modifiers;"preserve"===i&&(i=n.width/n.height),t.startCoords=(0,ja.default)({},o),t.startRect=(0,ja.default)({},n),t.ratio=i,t.equalDelta=u;var l=t.linkedEdges={top:r.top||r.left&&!r.bottom,left:r.left||r.top&&!r.right,bottom:r.bottom||r.right&&!r.top,right:r.right||r.bottom&&!r.left};if(t.xIsPrimaryAxis=!(!r.left&&!r.right),t.equalDelta)t.edgeSign=(l.left?1:-1)*(l.top?1:-1);else{var c=t.xIsPrimaryAxis?l.top:l.left;t.edgeSign=c?-1:1}if((0,ja.default)(e.edges,l),s&&s.length)return t.subStates=Ma.default.prepareStates(s).map(function(e){return e.options=Da({},e.options),e}),(0,Ma.startAll)(Da({},e,{states:t.subStates}))},set:function(e){var t=e.state,n=e.rect,r=e.coords,o=(0,ja.default)({},r),i=t.equalDelta?Ia:Aa;if(i(t,t.xIsPrimaryAxis,r,n),!t.subStates)return null;var a=(0,ja.default)({},n);(0,ge.addEdges)(t.linkedEdges,a,{x:r.x-o.x,y:r.y-o.y});var u=(0,Ma.setAll)(Da({},e,{rect:a,edges:t.linkedEdges,pageCoords:r,states:t.subStates,prevCoords:r,prevRect:a})),s=u.delta;u.changed&&(i(t,Math.abs(s.x)>Math.abs(s.y),u.coords,u.rect),(0,ja.default)(r,u.coords));return u.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};_a.default=za;var Ca={};function Ra(e){return(Ra="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Ca,"__esModule",{value:!0}),Ca.getRestrictionRect=qa,Ca.default=void 0;var Wa,Xa=(Wa=me)&&Wa.__esModule?Wa:{default:Wa},Na=La(y),Ya=La(ge);function Fa(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Fa=function(){return e},e}function La(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Ra(e)&&"function"!=typeof e)return{default:e};var t=Fa();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function qa(e,t,n){return Na.func(e)?Ya.resolveRectLike(e,t.interactable,t.element,[n.x,n.y,t]):Ya.resolveRectLike(e,t.interactable,t.element)}var Va={start:function(e){var t=e.rect,n=e.startOffset,r=e.state,o=e.interaction,i=e.pageCoords,a=r.options,u=a.elementRect,s=(0,Xa.default)({left:0,top:0,right:0,bottom:0},a.offset||{});if(t&&u){var l=qa(a.restriction,o,i);if(l){var c=l.right-l.left-t.width,f=l.bottom-l.top-t.height;c<0&&(s.left+=c,s.right+=c),f<0&&(s.top+=f,s.bottom+=f)}s.left+=n.left-t.width*u.left,s.top+=n.top-t.height*u.top,s.right+=n.right-t.width*(1-u.right),s.bottom+=n.bottom-t.height*(1-u.bottom)}r.offset=s},set:function(e){var t=e.coords,n=e.interaction,r=e.state,o=r.options,i=r.offset,a=qa(o.restriction,n,t);if(a){var u=Ya.xywhToTlbr(a);t.x=Math.max(Math.min(u.right-i.right,t.x),u.left+i.left),t.y=Math.max(Math.min(u.bottom-i.bottom,t.y),u.top+i.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Ca.default=Va;var Ga={};function Ua(e){return(Ua="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Ga,"__esModule",{value:!0}),Ga.default=void 0;var Ba,Ha=(Ba=me)&&Ba.__esModule?Ba:{default:Ba},Ka=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Ua(e)&&"function"!=typeof e)return{default:e};var t=$a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(ge);function $a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return $a=function(){return e},e}var Qa={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Za={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Ja(e,t){for(var n=["top","left","bottom","right"],r=0;r<n.length;r++){var o=n[r];o in e||(e[o]=t[o])}return e}var eu={noInner:Qa,noOuter:Za,start:function(e){var t,n=e.interaction,r=e.startOffset,o=e.state,i=o.options;if(i){var a=(0,Ca.getRestrictionRect)(i.offset,n,n.coords.start.page);t=Ka.rectToXY(a)}t=t||{x:0,y:0},o.offset={top:t.y+r.top,left:t.x+r.left,bottom:t.y-r.bottom,right:t.x-r.right}},set:function(e){var t=e.coords,n=e.edges,r=e.interaction,o=e.state,i=o.offset,a=o.options;if(n){var u=(0,Ha.default)({},t),s=(0,Ca.getRestrictionRect)(a.inner,r,u)||{},l=(0,Ca.getRestrictionRect)(a.outer,r,u)||{};Ja(s,Qa),Ja(l,Za),n.top?t.y=Math.min(Math.max(l.top+i.top,u.y),s.top+i.top):n.bottom&&(t.y=Math.max(Math.min(l.bottom+i.bottom,u.y),s.bottom+i.bottom)),n.left?t.x=Math.min(Math.max(l.left+i.left,u.x),s.left+i.left):n.right&&(t.x=Math.max(Math.min(l.right+i.right,u.x),s.right+i.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Ga.default=eu;var tu={};Object.defineProperty(tu,"__esModule",{value:!0}),tu.default=void 0;var nu=ou(me),ru=ou(Ca);function ou(e){return e&&e.__esModule?e:{default:e}}var iu=(0,nu.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(e){}},ru.default.defaults),au={start:ru.default.start,set:ru.default.set,defaults:iu};tu.default=au;var uu={};function su(e){return(su="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(uu,"__esModule",{value:!0}),uu.default=void 0;var lu=du(me),cu=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==su(e)&&"function"!=typeof e)return{default:e};var t=pu();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(ge),fu=du(Ga);function pu(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return pu=function(){return e},e}function du(e){return e&&e.__esModule?e:{default:e}}var vu={width:-1/0,height:-1/0},yu={width:1/0,height:1/0};var mu={start:function(e){return fu.default.start(e)},set:function(e){var t=e.interaction,n=e.state,r=e.rect,o=e.edges,i=n.options;if(o){var a=cu.tlbrToXywh((0,Ca.getRestrictionRect)(i.min,t,e.coords))||vu,u=cu.tlbrToXywh((0,Ca.getRestrictionRect)(i.max,t,e.coords))||yu;n.options={endOnly:i.endOnly,inner:(0,lu.default)({},fu.default.noInner),outer:(0,lu.default)({},fu.default.noOuter)},o.top?(n.options.inner.top=r.bottom-a.height,n.options.outer.top=r.bottom-u.height):o.bottom&&(n.options.inner.bottom=r.top+a.height,n.options.outer.bottom=r.top+u.height),o.left?(n.options.inner.left=r.right-a.width,n.options.outer.left=r.right-u.width):o.right&&(n.options.inner.right=r.left+a.width,n.options.outer.right=r.left+u.width),fu.default.set(e),n.options=i}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};uu.default=mu;var gu={};function hu(e){return(hu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(gu,"__esModule",{value:!0}),gu.default=void 0;var bu=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==hu(e)&&"function"!=typeof e)return{default:e};var t=Ou();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt);function Ou(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ou=function(){return e},e}var wu={start:function(e){var t,n,r,o=e.interaction,i=e.interactable,a=e.element,u=e.rect,s=e.state,l=e.startOffset,c=s.options,f=c.offsetWithOrigin?(n=(t=e).interaction.element,bu.rect.rectToXY(bu.rect.resolveRectLike(t.state.options.origin,null,null,[n]))||bu.getOriginXY(t.interactable,n,t.interaction.prepared.name)):{x:0,y:0};if("startCoords"===c.offset)r={x:o.coords.start.page.x,y:o.coords.start.page.y};else{var p=bu.rect.resolveRectLike(c.offset,i,a,[o]);(r=bu.rect.rectToXY(p)||{x:0,y:0}).x+=f.x,r.y+=f.y}var d=c.relativePoints;s.offsets=u&&d&&d.length?d.map(function(e,t){return{index:t,relativePoint:e,x:l.left-u.width*e.x+r.x,y:l.top-u.height*e.y+r.y}}):[bu.extend({index:0,relativePoint:null},r)]},set:function(e){var t=e.interaction,n=e.coords,r=e.state,o=r.options,i=r.offsets,a=bu.getOriginXY(t.interactable,t.element,t.prepared.name),u=bu.extend({},n),s=[];o.offsetWithOrigin||(u.x-=a.x,u.y-=a.y);for(var l=0;l<i.length;l++)for(var c=i[l],f=u.x-c.x,p=u.y-c.y,d=0,v=o.targets.length;d<v;d++){var y=o.targets[d],m=void 0;(m=bu.is.func(y)?y(f,p,t,c,d):y)&&s.push({x:(bu.is.number(m.x)?m.x:f)+c.x,y:(bu.is.number(m.y)?m.y:p)+c.y,range:bu.is.number(m.range)?m.range:o.range,source:y,index:d,offset:c})}for(var g={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},h=0;h<s.length;h++){var b=s[h],O=b.range,w=b.x-u.x,P=b.y-u.y,_=bu.hypot(w,P),x=_<=O;O===1/0&&g.inRange&&g.range!==1/0&&(x=!1),g.target&&!(x?g.inRange&&O!==1/0?_/O<g.distance/g.range:O===1/0&&g.range!==1/0||_<g.distance:!g.inRange&&_<g.distance)||(g.target=b,g.distance=_,g.range=O,g.inRange=x,g.delta.x=w,g.delta.y=P)}return g.inRange&&(n.x=g.target.x,n.y=g.target.y),r.closest=g},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};gu.default=wu;var Pu={};function _u(e){return(_u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Pu,"__esModule",{value:!0}),Pu.default=void 0;var xu=Eu(me),Su=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_u(e)&&"function"!=typeof e)return{default:e};var t=Mu();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y),ju=Eu(gu);function Mu(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Mu=function(){return e},e}function Eu(e){return e&&e.__esModule?e:{default:e}}function ku(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Du={start:function(e){var t=e.state,n=e.edges,r=t.options;if(!n)return null;e.state={options:{targets:null,relativePoints:[{x:n.left?0:1,y:n.top?0:1}],offset:r.offset||"self",origin:{x:0,y:0},range:r.range}},t.targetFields=t.targetFields||[["width","height"],["x","y"]],ju.default.start(e),t.offsets=e.state.offsets,e.state=t},set:function(e){var t=e.interaction,n=e.state,r=e.coords,o=n.options,i=n.offsets,a={x:r.x-i[0].x,y:r.y-i[0].y};n.options=(0,xu.default)({},o),n.options.targets=[];for(var u=0;u<(o.targets||[]).length;u++){var s=(o.targets||[])[u],l=void 0;if(l=Su.func(s)?s(a.x,a.y,t):s){for(var c=0;c<n.targetFields.length;c++){var f=ku(n.targetFields[c],2),p=f[0],d=f[1];if(p in l||d in l){l.x=l[p],l.y=l[d];break}}n.options.targets.push(l)}}var v=ju.default.set(e);return n.options=o,v},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};Pu.default=Du;var Tu={};Object.defineProperty(Tu,"__esModule",{value:!0}),Tu.default=void 0;var Iu=Cu(xe),Au=Cu(me),zu=Cu(Pu);function Cu(e){return e&&e.__esModule?e:{default:e}}var Ru={start:function(e){var t=e.edges;return t?(e.state.targetFields=e.state.targetFields||[[t.left?"left":"right",t.top?"top":"bottom"]],zu.default.start(e)):null},set:zu.default.set,defaults:(0,Au.default)((0,Iu.default)(zu.default.defaults),{offset:{x:0,y:0}})};Tu.default=Ru;var Wu={};Object.defineProperty(Wu,"__esModule",{value:!0}),Wu.aspectRatio=Wu.restrictSize=Wu.restrictEdges=Wu.restrictRect=Wu.restrict=Wu.snapEdges=Wu.snapSize=Wu.snap=void 0;var Xu=Bu(_a),Nu=Bu(Fi),Yu=Bu(Ga),Fu=Bu(Ca),Lu=Bu(tu),qu=Bu(uu),Vu=Bu(Tu),Gu=Bu(gu),Uu=Bu(Pu);function Bu(e){return e&&e.__esModule?e:{default:e}}var Hu=Nu.default.makeModifier,Ku=Hu(Gu.default,"snap");Wu.snap=Ku;var $u=Hu(Uu.default,"snapSize");Wu.snapSize=$u;var Qu=Hu(Vu.default,"snapEdges");Wu.snapEdges=Qu;var Zu=Hu(Fu.default,"restrict");Wu.restrict=Zu;var Ju=Hu(Lu.default,"restrictRect");Wu.restrictRect=Ju;var es=Hu(Yu.default,"restrictEdges");Wu.restrictEdges=es;var ts=Hu(qu.default,"restrictSize");Wu.restrictSize=ts;var ns=Hu(Xu.default,"aspectRatio");Wu.aspectRatio=ns;var rs={};Object.defineProperty(rs,"__esModule",{value:!0}),rs.PointerEvent=rs.default=void 0;var os,is=(os=Sn)&&os.__esModule?os:{default:os},as=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ss(e)&&"function"!=typeof e)return{default:e};var t=us();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(J);function us(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return us=function(){return e},e}function ss(e){return(ss="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ls(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cs(e){return(cs=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fs(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ps(e,t){return(ps=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ds(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var vs=function(){function f(e,t,n,r,o,i){var a,u,s;if(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),u=this,a=!(s=cs(f).call(this,o))||"object"!==ss(s)&&"function"!=typeof s?fs(u):s,ds(fs(a),"type",void 0),ds(fs(a),"originalEvent",void 0),ds(fs(a),"pointerId",void 0),ds(fs(a),"pointerType",void 0),ds(fs(a),"double",void 0),ds(fs(a),"pageX",void 0),ds(fs(a),"pageY",void 0),ds(fs(a),"clientX",void 0),ds(fs(a),"clientY",void 0),ds(fs(a),"dt",void 0),ds(fs(a),"eventable",void 0),as.pointerExtend(fs(a),n),n!==t&&as.pointerExtend(fs(a),t),a.timeStamp=i,a.originalEvent=n,a.type=e,a.pointerId=as.getPointerId(t),a.pointerType=as.getPointerType(t),a.target=r,a.currentTarget=null,"tap"===e){var l=o.getPointerIndex(t);a.dt=a.timeStamp-o.pointers[l].downTime;var c=a.timeStamp-o.tapTime;a.double=!!(o.prevTap&&"doubletap"!==o.prevTap.type&&o.prevTap.target===a.target&&c<500)}else"doubletap"===e&&(a.dt=t.timeStamp-o.tapTime);return a}var e,t,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ps(e,t)}(f,is["default"]),e=f,(t=[{key:"_subtractOrigin",value:function(e){var t=e.x,n=e.y;return this.pageX-=t,this.pageY-=n,this.clientX-=t,this.clientY-=n,this}},{key:"_addOrigin",value:function(e){var t=e.x,n=e.y;return this.pageX+=t,this.pageY+=n,this.clientX+=t,this.clientY+=n,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&ls(e.prototype,t),n&&ls(e,n),f}();rs.PointerEvent=rs.default=vs;var ys={};function ms(e){return(ms="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(ys,"__esModule",{value:!0}),ys.default=void 0;Os(g({})),O({});var gs=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ms(e)&&"function"!=typeof e)return{default:e};var t=bs();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt),hs=Os(rs);function bs(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return bs=function(){return e},e}function Os(e){return e&&e.__esModule?e:{default:e}}var ws={id:"pointer-events/base",install:function(e){e.pointerEvents=ws,e.defaults.actions.pointerEvents=ws.defaults},listeners:{"interactions:new":function(e){var t=e.interaction;t.prevTap=null,t.tapTime=0},"interactions:update-pointer":function(e){var t=e.down,n=e.pointerInfo;if(!t&&n.hold)return;n.hold={duration:1/0,timeout:null}},"interactions:move":function(e,t){var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget,a=e.duplicate,u=n.getPointerIndex(r);a||n.pointerIsDown&&!n.pointerWasMoved||(n.pointerIsDown&&clearTimeout(n.pointers[u].hold.timeout),Ps({interaction:n,pointer:r,event:o,eventTarget:i,type:"move"},t))},"interactions:down":function(e,t){!function(e,t){for(var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget,a=e.pointerIndex,u=n.pointers[a].hold,s=gs.dom.getPath(i),l={interaction:n,pointer:r,event:o,eventTarget:i,type:"hold",targets:[],path:s,node:null},c=0;c<s.length;c++){var f=s[c];l.node=f,t.fire("pointerEvents:collect-targets",l)}if(!l.targets.length)return;for(var p=1/0,d=0;d<l.targets.length;d++){var v=l.targets[d].eventable.options.holdDuration;v<p&&(p=v)}u.duration=p,u.timeout=setTimeout(function(){Ps({interaction:n,eventTarget:i,pointer:r,event:o,type:"hold"},t)},p)}(e,t),Ps(e,t)},"interactions:up":function(e,t){var n,r,o,i,a,u;xs(e),Ps(e,t),r=t,o=(n=e).interaction,i=n.pointer,a=n.event,u=n.eventTarget,o.pointerWasMoved||Ps({interaction:o,eventTarget:u,pointer:i,event:a,type:"tap"},r)},"interactions:cancel":function(e,t){xs(e),Ps(e,t)}},PointerEvent:hs.default,fire:Ps,collectEventTargets:_s,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:["down","move","up","cancel","tap","doubletap","hold"]};function Ps(e,t){var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget,a=e.type,u=e.targets,s=void 0===u?_s(e,t):u,l=new hs.default(a,r,o,i,n,t.now());t.fire("pointerEvents:new",{pointerEvent:l});for(var c={interaction:n,pointer:r,event:o,eventTarget:i,targets:s,type:a,pointerEvent:l},f=0;f<s.length;f++){var p=s[f];for(var d in p.props||{})l[d]=p.props[d];var v=gs.getOriginXY(p.eventable,p.node);if(l._subtractOrigin(v),l.eventable=p.eventable,l.currentTarget=p.node,p.eventable.fire(l),l._addOrigin(v),l.immediatePropagationStopped||l.propagationStopped&&f+1<s.length&&s[f+1].node!==l.currentTarget)break}if(t.fire("pointerEvents:fired",c),"tap"===a){var y=l.double?Ps({interaction:n,pointer:r,event:o,eventTarget:i,type:"doubletap"},t):l;n.prevTap=y,n.tapTime=y.timeStamp}return l}function _s(e,t){var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget,a=e.type,u=n.getPointerIndex(r),s=n.pointers[u];if("tap"===a&&(n.pointerWasMoved||!s||s.downTarget!==i))return[];for(var l=gs.dom.getPath(i),c={interaction:n,pointer:r,event:o,eventTarget:i,type:a,path:l,targets:[],node:null},f=0;f<l.length;f++){var p=l[f];c.node=p,t.fire("pointerEvents:collect-targets",c)}return"hold"===a&&(c.targets=c.targets.filter(function(e){return e.eventable.options.holdDuration===n.pointers[u].hold.duration})),c.targets}function xs(e){var t=e.interaction,n=e.pointerIndex;t.pointers[n].hold&&clearTimeout(t.pointers[n].hold.timeout)}var Ss=ws;ys.default=Ss;var js={};Object.defineProperty(js,"__esModule",{value:!0}),js.default=void 0;var Ms=Es(ys);Es(rs);function Es(e){return e&&e.__esModule?e:{default:e}}function ks(e){var t=e.interaction;t.holdIntervalHandle&&(clearInterval(t.holdIntervalHandle),t.holdIntervalHandle=null)}var Ds={id:"pointer-events/holdRepeat",install:function(e){e.usePlugin(Ms.default);var t=e.pointerEvents;t.defaults.holdRepeatInterval=0,t.types.push("holdrepeat")},listeners:["move","up","cancel","endall"].reduce(function(e,t){return e["pointerEvents:".concat(t)]=ks,e},{"pointerEvents:new":function(e){var t=e.pointerEvent;"hold"===t.type&&(t.count=(t.count||0)+1)},"pointerEvents:fired":function(e,t){var n=e.interaction,r=e.pointerEvent,o=e.eventTarget,i=e.targets;if("hold"===r.type&&i.length){var a=i[0].eventable.options.holdRepeatInterval;a<=0||(n.holdIntervalHandle=setTimeout(function(){t.pointerEvents.fire({interaction:n,eventTarget:o,type:"hold",pointer:r,event:r},t)},a))}}})};js.default=Ds;var Ts={};Object.defineProperty(Ts,"__esModule",{value:!0}),Ts.default=void 0;var Is,As=(Is=me)&&Is.__esModule?Is:{default:Is};function zs(e){return(0,As.default)(this.events.options,e),this}var Cs={id:"pointer-events/interactableTargets",install:function(e){var t=e.pointerEvents,n=e.actions,r=e.Interactable;(0,u.merge)(n.eventTypes,t.types),r.prototype.pointerEvents=zs;var o=r.prototype._backCompatOption;r.prototype._backCompatOption=function(e,t){var n=o.call(this,e,t);return n===this&&(this.events.options[e]=t),n}},listeners:{"pointerEvents:collect-targets":function(e,t){var r=e.targets,o=e.node,i=e.type,a=e.eventTarget;t.interactables.forEachMatch(o,function(e){var t=e.events,n=t.options;t.types[i]&&t.types[i].length&&e.testIgnoreAllow(n,o,a)&&r.push({node:o,eventable:t,props:{interactable:e}})})},"interactable:new":function(e){var t=e.interactable;t.events.getRect=function(e){return t.getRect(e)}},"interactable:set":function(e,t){var n=e.interactable,r=e.options;(0,As.default)(n.events.options,t.pointerEvents.defaults),(0,As.default)(n.events.options,r.pointerEvents||{})}}};Ts.default=Cs;var Rs={};function Ws(e){return(Ws="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Rs,"__esModule",{value:!0}),Rs.install=function(e){e.usePlugin(Xs),e.usePlugin(Ns.default),e.usePlugin(Ys.default)},Object.defineProperty(Rs,"holdRepeat",{enumerable:!0,get:function(){return Ns.default}}),Object.defineProperty(Rs,"interactableTargets",{enumerable:!0,get:function(){return Ys.default}}),Rs.pointerEvents=Rs.id=void 0;var Xs=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Ws(e)&&"function"!=typeof e)return{default:e};var t=Ls();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(ys);Rs.pointerEvents=Xs;var Ns=Fs(js),Ys=Fs(Ts);function Fs(e){return e&&e.__esModule?e:{default:e}}function Ls(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ls=function(){return e},e}Rs.id="pointer-events";var qs={};Object.defineProperty(qs,"__esModule",{value:!0}),qs.install=Gs,qs.default=void 0;var Vs;(Vs=Ut)&&Vs.__esModule,g({});function Gs(t){for(var e=t.actions,n=t.Interactable,r=0;r<e.names.length;r++){var o=e.names[r];e.eventTypes.push("".concat(o,"reflow"))}n.prototype.reflow=function(e){return function(u,s,l){function e(){var t=c[d],e=u.getRect(t);if(!e)return"break";var n=pt.arr.find(l.interactions.list,function(e){return e.interacting()&&e.interactable===u&&e.element===t&&e.prepared.name===s.name}),r=void 0;if(n)n.move(),p&&(r=n._reflowPromise||new f(function(e){n._reflowResolve=e}));else{var o=pt.rect.tlbrToXywh(e),i={page:{x:o.x,y:o.y},client:{x:o.x,y:o.y},timeStamp:l.now()},a=pt.pointer.coordsToEvent(i);r=function(e,t,n,r,o){var i=e.interactions.new({pointerType:"reflow"}),a={interaction:i,event:o,pointer:o,eventTarget:n,phase:Tn.EventPhase.Reflow};i.interactable=t,i.element=n,i.prepared=(0,pt.extend)({},r),i.prevEvent=o,i.updatePointer(o,o,n,!0),i._doPhase(a);var u=pt.win.window.Promise?new pt.win.window.Promise(function(e){i._reflowResolve=e}):null;i._reflowPromise=u,i.start(r,t,n),i._interacting?(i.move(a),i.end(o)):i.stop();return i.removePointer(o,o),i.pointerIsDown=!1,u}(l,u,t,s,a)}p&&p.push(r)}for(var c=pt.is.string(u.target)?pt.arr.from(u._context.querySelectorAll(u.target)):[u.target],f=pt.win.window.Promise,p=f?[]:null,d=0;d<c.length;d++){if("break"===e())break}return p&&f.all(p).then(function(){return u})}(this,e,t)}}var Us={id:Tn.EventPhase.Reflow="reflow",install:Gs,listeners:{"interactions:stop":function(e,t){var n=e.interaction;n.pointerType===Tn.EventPhase.Reflow&&(n._reflowResolve&&n._reflowResolve(),pt.arr.remove(t.interactions.list,n))}}};qs.default=Us;var Bs={};function Hs(e){return(Hs="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Bs,"__esModule",{value:!0}),Bs.default=Bs.scope=Bs.interact=void 0;var Ks=O({}),$s=el(j),Qs=el(De),Zs=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Hs(e)&&"function"!=typeof e)return{default:e};var t=Js();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt);function Js(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Js=function(){return e},e}function el(e){return e&&e.__esModule?e:{default:e}}var tl={},nl=new Ks.Scope;Bs.scope=nl;function rl(e,t){var n=nl.interactables.get(e,t);return n||((n=nl.interactables.new(e,t)).events.global=tl),n}(Bs.interact=rl).use=function(e,t){return nl.usePlugin(e,t),rl},rl.isSet=function(e,t){return!!nl.interactables.get(e,t&&t.context)},rl.on=function(e,t,n){Zs.is.string(e)&&-1!==e.search(" ")&&(e=e.trim().split(/ +/));if(Zs.is.array(e)){for(var r=0;r<e.length;r++){var o;o=e[r],rl.on(o,t,n)}return rl}if(Zs.is.object(e)){for(var i in e)rl.on(i,e[i],t);return rl}Zs.arr.contains(nl.actions.eventTypes,e)?tl[e]?tl[e].push(t):tl[e]=[t]:Qs.default.add(nl.document,e,t,{options:n});return rl},rl.off=function(e,t,n){Zs.is.string(e)&&-1!==e.search(" ")&&(e=e.trim().split(/ +/));if(Zs.is.array(e)){for(var r=0;r<e.length;r++){var o;o=e[r],rl.off(o,t,n)}return rl}if(Zs.is.object(e)){for(var i in e)rl.off(i,e[i],t);return rl}var a;Zs.arr.contains(nl.actions.eventTypes,e)?e in tl&&-1!==(a=tl[e].indexOf(t))&&tl[e].splice(a,1):Qs.default.remove(nl.document,e,t,n);return rl},rl.debug=function(){return nl},rl.getPointerAverage=Zs.pointer.pointerAverage,rl.getTouchBBox=Zs.pointer.touchBBox,rl.getTouchDistance=Zs.pointer.touchDistance,rl.getTouchAngle=Zs.pointer.touchAngle,rl.getElementRect=Zs.dom.getElementRect,rl.getElementClientRect=Zs.dom.getElementClientRect,rl.matchesSelector=Zs.dom.matchesSelector,rl.closest=Zs.dom.closest,rl.supportsTouch=function(){return $s.default.supportsTouch},rl.supportsPointerEvent=function(){return $s.default.supportsPointerEvent},rl.stop=function(){for(var e=0;e<nl.interactions.list.length;e++){nl.interactions.list[e].stop()}return rl},rl.pointerMoveTolerance=function(e){if(Zs.is.number(e))return nl.interactions.pointerMoveTolerance=e,rl;return nl.interactions.pointerMoveTolerance},nl.addListeners({"interactable:unset":function(e){var t=e.interactable;nl.interactables.list.splice(nl.interactables.list.indexOf(t),1);for(var n=0;n<nl.interactions.list.length;n++){var r=nl.interactions.list[n];r.interactable===t&&r.interacting()&&!r._ending&&r.stop()}}}),rl.addDocument=function(e,t){return nl.addDocument(e,t)},rl.removeDocument=function(e){return nl.removeDocument(e)};var ol=nl.interact=rl;Bs.default=ol;var il={};function al(e){return(al="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(il,"__esModule",{value:!0}),il.init=function(e){for(var t in ml.scope.init(e),ml.default.use(cl.default),ml.default.use(vl),ml.default.use(fl.default),ml.default.use(pl.default),ml.default.use(ll),ml.default.use(ul),dl){var n=dl[t],r=n._defaults,o=n._methods;r._methods=o,ml.scope.defaults.perAction[t]=r}ml.default.use(sl.default),ml.default.use(yl.default),0;return ml.default},il.default=void 0;var ul=bl(vo),sl=gl(Oo),ll=bl(di),cl=gl(hi),fl=(gl(Ei),gl(la)),pl=gl(Fi),dl=bl(Wu),vl=bl(Rs),yl=gl(qs),ml=bl(Bs);function gl(e){return e&&e.__esModule?e:{default:e}}function hl(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return hl=function(){return e},e}function bl(e){if(e&&e.__esModule)return e;if(null===e||"object"!==al(e)&&"function"!=typeof e)return{default:e};var t=hl();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}ml.default.version="1.8.2";var Ol=ml.default;il.default=Ol;var wl={};function Pl(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(wl,"__esModule",{value:!0}),wl.default=void 0;function _l(v){function e(e,t){for(var n=v.range,r=v.limits,o=void 0===r?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:r,i=v.offset,a=void 0===i?{x:0,y:0}:i,u={range:n,grid:v,x:null,y:null},s=0;s<y.length;s++){var l=Pl(y[s],2),c=l[0],f=l[1],p=Math.round((e-a.x)/v[c]),d=Math.round((t-a.y)/v[f]);u[c]=Math.max(o.left,Math.min(o.right,p*v[c]+a.x)),u[f]=Math.max(o.top,Math.min(o.bottom,d*v[f]+a.y))}return u}var y=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(e){var t=Pl(e,2),n=t[0],r=t[1];return n in v||r in v});return e.grid=v,e.coordFields=y,e}wl.default=_l;var xl={};Object.defineProperty(xl,"__esModule",{value:!0}),Object.defineProperty(xl,"grid",{enumerable:!0,get:function(){return jl.default}});var Sl,jl=(Sl=wl)&&Sl.__esModule?Sl:{default:Sl};var Ml={};Object.defineProperty(Ml,"__esModule",{value:!0}),Ml.init=Rl,Ml.default=void 0;var El,kl=zl(il),Dl=zl(Wu),Tl=(El=me)&&El.__esModule?El:{default:El},Il=zl(xl);function Al(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Al=function(){return e},e}function zl(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Cl(e)&&"function"!=typeof e)return{default:e};var t=Al();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Cl(e){return(Cl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Rl(e){return(0,kl.init)(e),kl.default.use({id:"interactjs",install:function(){kl.default.modifiers=(0,Tl.default)({},Dl),kl.default.snappers=Il,kl.default.createSnapGrid=kl.default.snappers.grid}})}"object"===("undefined"==typeof window?"undefined":Cl(window))&&window&&Rl(window);var Wl=kl.default;Ml.default=Wl;var Xl={exports:{}};Object.defineProperty(Xl.exports,"__esModule",{value:!0});var Nl={};Xl.exports.default=void 0;var Yl=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Ll(e)&&"function"!=typeof e)return{default:e};var t=Fl();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(Ml);function Fl(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Fl=function(){return e},e}function Ll(e){return(Ll="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}if(Object.keys(Yl).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(Nl,e)||Object.defineProperty(Xl.exports,e,{enumerable:!0,get:function(){return Yl[e]}}))}),"object"===Ll(Xl)&&Xl)try{Xl.exports=Yl.default}catch(e){}Yl.default.default=Yl.default,Yl.default.init=Yl.init;var ql=Yl.default;return Xl.exports.default=ql,Xl=Xl.exports});



/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(3);
var normalizeHeaderName = __webpack_require__(31);

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
    adapter = __webpack_require__(12);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var settle = __webpack_require__(32);
var cookies = __webpack_require__(34);
var buildURL = __webpack_require__(9);
var buildFullPath = __webpack_require__(35);
var parseHeaders = __webpack_require__(38);
var isURLSameOrigin = __webpack_require__(39);
var createError = __webpack_require__(13);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(33);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var fabric=fabric||{version:"4.2.0"};if( true?exports.fabric=fabric:undefined,"undefined"!=typeof document&&"undefined"!=typeof window)document instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document)?fabric.document=document:fabric.document=document.implementation.createHTMLDocument(""),fabric.window=window;else{var jsdom=__webpack_require__(47),virtualWindow=new jsdom.JSDOM(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"),{features:{FetchExternalResources:["img"]},resources:"usable"}).window;fabric.document=virtualWindow.document,fabric.jsdomImplForWrapper=__webpack_require__(48).implForWrapper,fabric.nodeCanvas=__webpack_require__(49).Canvas,fabric.window=virtualWindow,DOMParser=fabric.window.DOMParser}function resizeCanvasIfNeeded(t){var e=t.targetCanvas,i=e.width,r=e.height,n=t.destinationWidth,s=t.destinationHeight;i===n&&r===s||(e.width=n,e.height=s)}function copyGLTo2DDrawImage(t,e){var i=t.canvas,r=e.targetCanvas,n=r.getContext("2d");n.translate(0,r.height),n.scale(1,-1);var s=i.height-r.height;n.drawImage(i,0,s,r.width,r.height,0,0,r.width,r.height)}function copyGLTo2DPutImageData(t,e){var i=e.targetCanvas.getContext("2d"),r=e.destinationWidth,n=e.destinationHeight,s=r*n*4,o=new Uint8Array(this.imageBuffer,0,s),a=new Uint8ClampedArray(this.imageBuffer,0,s);t.readPixels(0,0,r,n,t.RGBA,t.UNSIGNED_BYTE,o);var c=new ImageData(a,r,n);i.putImageData(c,0,0)}fabric.isTouchSupported="ontouchstart"in fabric.window||"ontouchstart"in fabric.document||fabric.window&&fabric.window.navigator&&0<fabric.window.navigator.maxTouchPoints,fabric.isLikelyNode="undefined"!=typeof Buffer&&"undefined"==typeof window,fabric.SHARED_ATTRIBUTES=["display","transform","fill","fill-opacity","fill-rule","opacity","stroke","stroke-dasharray","stroke-linecap","stroke-dashoffset","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id","paint-order","vector-effect","instantiated_by_use","clip-path"],fabric.DPI=96,fabric.reNum="(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)",fabric.commaWsp="(?:\\s+,?\\s*|,\\s*)",fabric.rePathCommand=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi,fabric.reNonWord=/[ \n\.,;!\?\-]/,fabric.fontPaths={},fabric.iMatrix=[1,0,0,1,0,0],fabric.svgNS="http://www.w3.org/2000/svg",fabric.perfLimitSizeTotal=2097152,fabric.maxCacheSideLimit=4096,fabric.minCacheSideLimit=256,fabric.charWidthsCache={},fabric.textureSize=2048,fabric.disableStyleCopyPaste=!1,fabric.enableGLFiltering=!0,fabric.devicePixelRatio=fabric.window.devicePixelRatio||fabric.window.webkitDevicePixelRatio||fabric.window.mozDevicePixelRatio||1,fabric.browserShadowBlurConstant=1,fabric.arcToSegmentsCache={},fabric.boundsOfCurveCache={},fabric.cachesBoundsOfCurve=!0,fabric.forceGLPutImageData=!1,fabric.initFilterBackend=function(){return fabric.enableGLFiltering&&fabric.isWebglSupported&&fabric.isWebglSupported(fabric.textureSize)?(console.log("max texture size: "+fabric.maxTextureSize),new fabric.WebglFilterBackend({tileSize:fabric.textureSize})):fabric.Canvas2dFilterBackend?new fabric.Canvas2dFilterBackend:void 0},"undefined"!=typeof document&&"undefined"!=typeof window&&(window.fabric=fabric),function(){function r(t,e){if(this.__eventListeners[t]){var i=this.__eventListeners[t];e?i[i.indexOf(e)]=!1:fabric.util.array.fill(i,!1)}}fabric.Observable={fire:function(t,e){if(!this.__eventListeners)return this;var i=this.__eventListeners[t];if(!i)return this;for(var r=0,n=i.length;r<n;r++)i[r]&&i[r].call(this,e||{});return this.__eventListeners[t]=i.filter(function(t){return!1!==t}),this},on:function(t,e){if(this.__eventListeners||(this.__eventListeners={}),1===arguments.length)for(var i in t)this.on(i,t[i]);else this.__eventListeners[t]||(this.__eventListeners[t]=[]),this.__eventListeners[t].push(e);return this},off:function(t,e){if(!this.__eventListeners)return this;if(0===arguments.length)for(t in this.__eventListeners)r.call(this,t);else if(1===arguments.length&&"object"==typeof t)for(var i in t)r.call(this,i,t[i]);else r.call(this,t,e);return this}}}(),fabric.Collection={_objects:[],add:function(){if(this._objects.push.apply(this._objects,arguments),this._onObjectAdded)for(var t=0,e=arguments.length;t<e;t++)this._onObjectAdded(arguments[t]);return this.renderOnAddRemove&&this.requestRenderAll(),this},insertAt:function(t,e,i){var r=this._objects;return i?r[e]=t:r.splice(e,0,t),this._onObjectAdded&&this._onObjectAdded(t),this.renderOnAddRemove&&this.requestRenderAll(),this},remove:function(){for(var t,e=this._objects,i=!1,r=0,n=arguments.length;r<n;r++)-1!==(t=e.indexOf(arguments[r]))&&(i=!0,e.splice(t,1),this._onObjectRemoved&&this._onObjectRemoved(arguments[r]));return this.renderOnAddRemove&&i&&this.requestRenderAll(),this},forEachObject:function(t,e){for(var i=this.getObjects(),r=0,n=i.length;r<n;r++)t.call(e,i[r],r,i);return this},getObjects:function(e){return void 0===e?this._objects.concat():this._objects.filter(function(t){return t.type===e})},item:function(t){return this._objects[t]},isEmpty:function(){return 0===this._objects.length},size:function(){return this._objects.length},contains:function(t){return-1<this._objects.indexOf(t)},complexity:function(){return this._objects.reduce(function(t,e){return t+=e.complexity?e.complexity():0},0)}},fabric.CommonMethods={_setOptions:function(t){for(var e in t)this.set(e,t[e])},_initGradient:function(t,e){!t||!t.colorStops||t instanceof fabric.Gradient||this.set(e,new fabric.Gradient(t))},_initPattern:function(t,e,i){!t||!t.source||t instanceof fabric.Pattern?i&&i():this.set(e,new fabric.Pattern(t,i))},_setObject:function(t){for(var e in t)this._set(e,t[e])},set:function(t,e){return"object"==typeof t?this._setObject(t):this._set(t,e),this},_set:function(t,e){this[t]=e},toggle:function(t){var e=this.get(t);return"boolean"==typeof e&&this.set(t,!e),this},get:function(t){return this[t]}},function(s){var d=Math.sqrt,g=Math.atan2,o=Math.pow,a=Math.PI/180,i=Math.PI/2;fabric.util={cos:function(t){if(0===t)return 1;switch(t<0&&(t=-t),t/i){case 1:case 3:return 0;case 2:return-1}return Math.cos(t)},sin:function(t){if(0===t)return 0;var e=1;switch(t<0&&(e=-1),t/i){case 1:return e;case 2:return 0;case 3:return-e}return Math.sin(t)},removeFromArray:function(t,e){var i=t.indexOf(e);return-1!==i&&t.splice(i,1),t},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},degreesToRadians:function(t){return t*a},radiansToDegrees:function(t){return t/a},rotatePoint:function(t,e,i){t.subtractEquals(e);var r=fabric.util.rotateVector(t,i);return new fabric.Point(r.x,r.y).addEquals(e)},rotateVector:function(t,e){var i=fabric.util.sin(e),r=fabric.util.cos(e);return{x:t.x*r-t.y*i,y:t.x*i+t.y*r}},transformPoint:function(t,e,i){return i?new fabric.Point(e[0]*t.x+e[2]*t.y,e[1]*t.x+e[3]*t.y):new fabric.Point(e[0]*t.x+e[2]*t.y+e[4],e[1]*t.x+e[3]*t.y+e[5])},makeBoundingBoxFromPoints:function(t,e){if(e)for(var i=0;i<t.length;i++)t[i]=fabric.util.transformPoint(t[i],e);var r=[t[0].x,t[1].x,t[2].x,t[3].x],n=fabric.util.array.min(r),s=fabric.util.array.max(r)-n,o=[t[0].y,t[1].y,t[2].y,t[3].y],a=fabric.util.array.min(o);return{left:n,top:a,width:s,height:fabric.util.array.max(o)-a}},invertTransform:function(t){var e=1/(t[0]*t[3]-t[1]*t[2]),i=[e*t[3],-e*t[1],-e*t[2],e*t[0]],r=fabric.util.transformPoint({x:t[4],y:t[5]},i,!0);return i[4]=-r.x,i[5]=-r.y,i},toFixed:function(t,e){return parseFloat(Number(t).toFixed(e))},parseUnit:function(t,e){var i=/\D{0,2}$/.exec(t),r=parseFloat(t);switch(e||(e=fabric.Text.DEFAULT_SVG_FONT_SIZE),i[0]){case"mm":return r*fabric.DPI/25.4;case"cm":return r*fabric.DPI/2.54;case"in":return r*fabric.DPI;case"pt":return r*fabric.DPI/72;case"pc":return r*fabric.DPI/72*12;case"em":return r*e;default:return r}},falseFunction:function(){return!1},getKlass:function(t,e){return t=fabric.util.string.camelize(t.charAt(0).toUpperCase()+t.slice(1)),fabric.util.resolveNamespace(e)[t]},getSvgAttributes:function(t){var e=["instantiated_by_use","style","id","class"];switch(t){case"linearGradient":e=e.concat(["x1","y1","x2","y2","gradientUnits","gradientTransform"]);break;case"radialGradient":e=e.concat(["gradientUnits","gradientTransform","cx","cy","r","fx","fy","fr"]);break;case"stop":e=e.concat(["offset","stop-color","stop-opacity"])}return e},resolveNamespace:function(t){if(!t)return fabric;var e,i=t.split("."),r=i.length,n=s||fabric.window;for(e=0;e<r;++e)n=n[i[e]];return n},loadImage:function(t,e,i,r){if(t){var n=fabric.util.createImage(),s=function(){e&&e.call(i,n,!1),n=n.onload=n.onerror=null};n.onload=s,n.onerror=function(){fabric.log("Error loading "+n.src),e&&e.call(i,null,!0),n=n.onload=n.onerror=null},0!==t.indexOf("data")&&null!=r&&(n.crossOrigin=r),"data:image/svg"===t.substring(0,14)&&(n.onload=null,fabric.util.loadImageInDom(n,s)),n.src=t}else e&&e.call(i,t)},loadImageInDom:function(t,e){var i=fabric.document.createElement("div");i.style.width=i.style.height="1px",i.style.left=i.style.top="-100%",i.style.position="absolute",i.appendChild(t),fabric.document.querySelector("body").appendChild(i),t.onload=function(){e(),i.parentNode.removeChild(i),i=null}},enlivenObjects:function(t,e,n,s){var o=[],i=0,r=(t=t||[]).length;function a(){++i===r&&e&&e(o.filter(function(t){return t}))}r?t.forEach(function(i,r){i&&i.type?fabric.util.getKlass(i.type,n).fromObject(i,function(t,e){e||(o[r]=t),s&&s(i,t,e),a()}):a()}):e&&e(o)},enlivenPatterns:function(t,e){function i(){++n===s&&e&&e(r)}var r=[],n=0,s=(t=t||[]).length;s?t.forEach(function(t,e){t&&t.source?new fabric.Pattern(t,function(t){r[e]=t,i()}):(r[e]=t,i())}):e&&e(r)},groupSVGElements:function(t,e,i){var r;return t&&1===t.length?t[0]:(e&&(e.width&&e.height?e.centerPoint={x:e.width/2,y:e.height/2}:(delete e.width,delete e.height)),r=new fabric.Group(t,e),void 0!==i&&(r.sourcePath=i),r)},populateWithProperties:function(t,e,i){if(i&&"[object Array]"===Object.prototype.toString.call(i))for(var r=0,n=i.length;r<n;r++)i[r]in t&&(e[i[r]]=t[i[r]])},drawDashedLine:function(t,e,i,r,n,s){var o=r-e,a=n-i,c=d(o*o+a*a),h=g(a,o),l=s.length,u=0,f=!0;for(t.save(),t.translate(e,i),t.moveTo(0,0),t.rotate(h),e=0;e<c;)c<(e+=s[u++%l])&&(e=c),t[f?"lineTo":"moveTo"](e,0),f=!f;t.restore()},createCanvasElement:function(){return fabric.document.createElement("canvas")},copyCanvasElement:function(t){var e=fabric.util.createCanvasElement();return e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0),e},toDataURL:function(t,e,i){return t.toDataURL("image/"+e,i)},createImage:function(){return fabric.document.createElement("img")},multiplyTransformMatrices:function(t,e,i){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],i?0:t[0]*e[4]+t[2]*e[5]+t[4],i?0:t[1]*e[4]+t[3]*e[5]+t[5]]},qrDecompose:function(t){var e=g(t[1],t[0]),i=o(t[0],2)+o(t[1],2),r=d(i),n=(t[0]*t[3]-t[2]*t[1])/r,s=g(t[0]*t[2]+t[1]*t[3],i);return{angle:e/a,scaleX:r,scaleY:n,skewX:s/a,skewY:0,translateX:t[4],translateY:t[5]}},calcRotateMatrix:function(t){if(!t.angle)return fabric.iMatrix.concat();var e=fabric.util.degreesToRadians(t.angle),i=fabric.util.cos(e),r=fabric.util.sin(e);return[i,r,-r,i,0,0]},calcDimensionsMatrix:function(t){var e=void 0===t.scaleX?1:t.scaleX,i=void 0===t.scaleY?1:t.scaleY,r=[t.flipX?-e:e,0,0,t.flipY?-i:i,0,0],n=fabric.util.multiplyTransformMatrices,s=fabric.util.degreesToRadians;return t.skewX&&(r=n(r,[1,0,Math.tan(s(t.skewX)),1],!0)),t.skewY&&(r=n(r,[1,Math.tan(s(t.skewY)),0,1],!0)),r},composeMatrix:function(t){var e=[1,0,0,1,t.translateX||0,t.translateY||0],i=fabric.util.multiplyTransformMatrices;return t.angle&&(e=i(e,fabric.util.calcRotateMatrix(t))),(1!==t.scaleX||1!==t.scaleY||t.skewX||t.skewY||t.flipX||t.flipY)&&(e=i(e,fabric.util.calcDimensionsMatrix(t))),e},resetObjectTransform:function(t){t.scaleX=1,t.scaleY=1,t.skewX=0,t.skewY=0,t.flipX=!1,t.flipY=!1,t.rotate(0)},saveObjectTransform:function(t){return{scaleX:t.scaleX,scaleY:t.scaleY,skewX:t.skewX,skewY:t.skewY,angle:t.angle,left:t.left,flipX:t.flipX,flipY:t.flipY,top:t.top}},isTransparent:function(t,e,i,r){0<r&&(r<e?e-=r:e=0,r<i?i-=r:i=0);var n,s=!0,o=t.getImageData(e,i,2*r||1,2*r||1),a=o.data.length;for(n=3;n<a&&!1!==(s=o.data[n]<=0);n+=4);return o=null,s},parsePreserveAspectRatioAttribute:function(t){var e,i="meet",r=t.split(" ");return r&&r.length&&("meet"!==(i=r.pop())&&"slice"!==i?(e=i,i="meet"):r.length&&(e=r.pop())),{meetOrSlice:i,alignX:"none"!==e?e.slice(1,4):"none",alignY:"none"!==e?e.slice(5,8):"none"}},clearFabricFontCache:function(t){(t=(t||"").toLowerCase())?fabric.charWidthsCache[t]&&delete fabric.charWidthsCache[t]:fabric.charWidthsCache={}},limitDimsByArea:function(t,e){var i=Math.sqrt(e*t),r=Math.floor(e/i);return{x:Math.floor(i),y:r}},capValue:function(t,e,i){return Math.max(t,Math.min(e,i))},findScaleToFit:function(t,e){return Math.min(e.width/t.width,e.height/t.height)},findScaleToCover:function(t,e){return Math.max(e.width/t.width,e.height/t.height)},matrixToSVG:function(t){return"matrix("+t.map(function(t){return fabric.util.toFixed(t,fabric.Object.NUM_FRACTION_DIGITS)}).join(" ")+")"},sizeAfterTransform:function(t,e,i){var r=t/2,n=e/2,s=[{x:-r,y:-n},{x:r,y:-n},{x:-r,y:n},{x:r,y:n}],o=fabric.util.calcDimensionsMatrix(i),a=fabric.util.makeBoundingBoxFromPoints(s,o);return{x:a.width,y:a.height}}}}( true?exports:undefined),function(){var E=Array.prototype.join,w={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},T={m:"l",M:"L"};function v(t,e,i,r,n,s,o){var a=Math.PI,c=o*a/180,h=fabric.util.sin(c),l=fabric.util.cos(c),u=0,f=0,d=-l*t*.5-h*e*.5,g=-l*e*.5+h*t*.5,p=(i=Math.abs(i))*i,v=(r=Math.abs(r))*r,m=g*g,b=d*d,_=p*v-p*m-v*b,y=0;if(_<0){var x=Math.sqrt(1-_/(p*v));i*=x,r*=x}else y=(n===s?-1:1)*Math.sqrt(_/(p*m+v*b));var C=y*i*g/r,S=-y*r*d/i,w=l*C-h*S+.5*t,T=h*C+l*S+.5*e,O=$(1,0,(d-C)/i,(g-S)/r),k=$((d-C)/i,(g-S)/r,(-d-C)/i,(-g-S)/r);0===s&&0<k?k-=2*a:1===s&&k<0&&(k+=2*a);for(var D,P,E,A,j,M,F,I,L,R,B,X,W,Y,H,z,G,U=Math.ceil(Math.abs(k/a*2)),N=[],V=k/U,q=8/3*Math.sin(V/4)*Math.sin(V/4)/Math.sin(V/2),K=O+V,J=0;J<U;J++)N[J]=(D=O,P=K,E=l,A=h,j=i,M=r,F=w,I=T,L=q,R=u,B=f,void 0,X=fabric.util.cos(D),W=fabric.util.sin(D),Y=fabric.util.cos(P),H=fabric.util.sin(P),["C",R+L*(-E*j*W-A*M*X),B+L*(-A*j*W+E*M*X),(z=E*j*Y-A*M*H+F)+L*(E*j*H+A*M*Y),(G=A*j*Y+E*M*H+I)+L*(A*j*H-E*M*Y),z,G]),u=N[J][5],f=N[J][6],O=K,K+=V;return N}function $(t,e,i,r){var n=Math.atan2(e,t),s=Math.atan2(r,i);return n<=s?s-n:2*Math.PI-(n-s)}function m(t,e,i,r,n,s,o,a){var c;if(fabric.cachesBoundsOfCurve&&(c=E.call(arguments),fabric.boundsOfCurveCache[c]))return fabric.boundsOfCurveCache[c];var h,l,u,f,d,g,p,v,m=Math.sqrt,b=Math.min,_=Math.max,y=Math.abs,x=[],C=[[],[]];l=6*t-12*i+6*n,h=-3*t+9*i-9*n+3*o,u=3*i-3*t;for(var S=0;S<2;++S)if(0<S&&(l=6*e-12*r+6*s,h=-3*e+9*r-9*s+3*a,u=3*r-3*e),y(h)<1e-12){if(y(l)<1e-12)continue;0<(f=-u/l)&&f<1&&x.push(f)}else(p=l*l-4*u*h)<0||(0<(d=(-l+(v=m(p)))/(2*h))&&d<1&&x.push(d),0<(g=(-l-v)/(2*h))&&g<1&&x.push(g));for(var w,T,O,k=x.length,D=k;k--;)w=(O=1-(f=x[k]))*O*O*t+3*O*O*f*i+3*O*f*f*n+f*f*f*o,C[0][k]=w,T=O*O*O*e+3*O*O*f*r+3*O*f*f*s+f*f*f*a,C[1][k]=T;C[0][D]=t,C[1][D]=e,C[0][D+1]=o,C[1][D+1]=a;var P=[{x:b.apply(null,C[0]),y:b.apply(null,C[1])},{x:_.apply(null,C[0]),y:_.apply(null,C[1])}];return fabric.cachesBoundsOfCurve&&(fabric.boundsOfCurveCache[c]=P),P}function d(t,e,i){for(var r=i[1],n=i[2],s=i[3],o=i[4],a=i[5],c=v(i[6]-t,i[7]-e,r,n,o,a,s),h=0,l=c.length;h<l;h++)c[h][1]+=t,c[h][2]+=e,c[h][3]+=t,c[h][4]+=e,c[h][5]+=t,c[h][6]+=e;return c}function f(t,e,i,r){return Math.sqrt((i-t)*(i-t)+(r-e)*(r-e))}function g(h,l,u,f,d,g,p,v){return function(t){var e,i,r,n,s=(n=t)*n*n,o=3*(r=t)*r*(1-r),a=3*(i=t)*(1-i)*(1-i),c=(1-(e=t))*(1-e)*(1-e);return{x:p*s+d*o+u*a+h*c,y:v*s+g*o+f*a+l*c}}}function p(a,c,h,l,u,f){return function(t){var e,i,r,n=(r=t)*r,s=2*(i=t)*(1-i),o=(1-(e=t))*(1-e);return{x:u*n+h*s+a*o,y:f*n+l*s+c*o}}}function b(t,e,i){var r,n,s={x:e,y:i},o=0;for(n=.01;n<=1;n+=.01)r=t(n),o+=f(s.x,s.y,r.x,r.y),s=r;return o}function h(t){for(var e,i,r,n=0,s=t.length,o=0,a=0,c=0,h=0,l=[],u=0;u<s;u++){switch(r={x:o,y:a,command:(e=t[u])[0]},e[0]){case"M":r.length=0,c=o=e[1],h=a=e[2];break;case"L":r.length=f(o,a,e[1],e[2]),o=e[1],a=e[2];break;case"C":i=g(o,a,e[1],e[2],e[3],e[4],e[5],e[6]),r.length=b(i,o,a),o=e[5],a=e[6];break;case"Q":i=p(o,a,e[1],e[2],e[3],e[4]),r.length=b(i,o,a),o=e[3],a=e[4];break;case"Z":case"z":r.destX=c,r.destY=h,r.length=f(o,a,c,h),o=c,a=h}n+=r.length,l.push(r)}return l.push({length:n,x:o,y:a}),l}fabric.util.parsePath=function(t){var e,i,r,n,s,o=[],a=[],c=fabric.rePathCommand,h="[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*",l="("+h+")"+fabric.commaWsp,u="([01])"+fabric.commaWsp+"?",f=new RegExp(l+"?"+l+"?"+l+u+u+l+"?("+h+")","g");if(!t||!t.match)return o;for(var d,g=0,p=(s=t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length;g<p;g++){n=(e=s[g]).slice(1).trim(),a.length=0;var v=e.charAt(0);if(d=[v],"a"===v.toLowerCase())for(var m;m=f.exec(n);)for(var b=1;b<m.length;b++)a.push(m[b]);else for(;r=c.exec(n);)a.push(r[0]);b=0;for(var _=a.length;b<_;b++)i=parseFloat(a[b]),isNaN(i)||d.push(i);var y=w[v.toLowerCase()],x=T[v]||v;if(d.length-1>y)for(var C=1,S=d.length;C<S;C+=y)o.push([v].concat(d.slice(C,C+y))),v=x;else o.push(d)}return o},fabric.util.makePathSimpler=function(t){var e,i,r,n,s,o,a=0,c=0,h=t.length,l=0,u=0,f=[];for(i=0;i<h;++i){switch(r=!1,(e=t[i].slice(0))[0]){case"l":e[0]="L",e[1]+=a,e[2]+=c;case"L":a=e[1],c=e[2];break;case"h":e[1]+=a;case"H":e[0]="L",e[2]=c,a=e[1];break;case"v":e[1]+=c;case"V":e[0]="L",c=e[1],e[1]=a,e[2]=c;break;case"m":e[0]="M",e[1]+=a,e[2]+=c;case"M":a=e[1],c=e[2],l=e[1],u=e[2];break;case"c":e[0]="C",e[1]+=a,e[2]+=c,e[3]+=a,e[4]+=c,e[5]+=a,e[6]+=c;case"C":s=e[3],o=e[4],a=e[5],c=e[6];break;case"s":e[0]="S",e[1]+=a,e[2]+=c,e[3]+=a,e[4]+=c;case"S":"C"===n?(s=2*a-s,o=2*c-o):(s=a,o=c),a=e[3],c=e[4],e[0]="C",e[5]=e[3],e[6]=e[4],e[3]=e[1],e[4]=e[2],e[1]=s,e[2]=o,s=e[3],o=e[4];break;case"q":e[0]="Q",e[1]+=a,e[2]+=c,e[3]+=a,e[4]+=c;case"Q":s=e[1],o=e[2],a=e[3],c=e[4];break;case"t":e[0]="T",e[1]+=a,e[2]+=c;case"T":"Q"===n?(s=2*a-s,o=2*c-o):(s=a,o=c),e[0]="Q",a=e[1],c=e[2],e[1]=s,e[2]=o,e[3]=a,e[4]=c;break;case"a":e[0]="A",e[6]+=a,e[7]+=c;case"A":r=!0,f=f.concat(d(a,c,e)),a=e[6],c=e[7];break;case"z":case"Z":a=l,c=u}r||f.push(e),n=e[0]}return f},fabric.util.getPathSegmentsInfo=h,fabric.util.fromArcToBeizers=d,fabric.util.getBoundsOfCurve=m,fabric.util.getPointOnPath=function(t,e,i){i||(i=h(t));for(var r=i[i.length-1]*e,n=0;0<r-i[n]&&n<i.length;)r-=i[n],n++;var s=i[n],o=r/s.length,a=s.length,c=t[n];switch(a){case"Z":case"z":return new fabric.Point(s.x,s.y).lerp(new fabric.Point(s.destX,s.destY),o);case"L":return new fabric.Point(s.x,s.y).lerp(new fabric.Point(c[1],c[2]),o);case"C":return g(s.x,s.y,c[1],c[2],c[3],c[4],c[5],c[6])(o);case"Q":return p(s.x,s.y,c[1],c[2],c[3],c[4])(o)}},fabric.util.getBoundsOfArc=function(t,e,i,r,n,s,o,a,c){for(var h,l=0,u=0,f=[],d=v(a-t,c-e,i,r,s,o,n),g=0,p=d.length;g<p;g++)h=m(l,u,d[g][1],d[g][2],d[g][3],d[g][4],d[g][5],d[g][6]),f.push({x:h[0].x+t,y:h[0].y+e}),f.push({x:h[1].x+t,y:h[1].y+e}),l=d[g][5],u=d[g][6];return f},fabric.util.drawArc=function(e,t,i,r){d(t,i,r=r.slice(0).unshift("X")).forEach(function(t){e.bezierCurveTo.apply(e,t.slice(1))})}}(),function(){var o=Array.prototype.slice;function i(t,e,i){if(t&&0!==t.length){var r=t.length-1,n=e?t[r][e]:t[r];if(e)for(;r--;)i(t[r][e],n)&&(n=t[r][e]);else for(;r--;)i(t[r],n)&&(n=t[r]);return n}}fabric.util.array={fill:function(t,e){for(var i=t.length;i--;)t[i]=e;return t},invoke:function(t,e){for(var i=o.call(arguments,2),r=[],n=0,s=t.length;n<s;n++)r[n]=i.length?t[n][e].apply(t[n],i):t[n][e].call(t[n]);return r},min:function(t,e){return i(t,e,function(t,e){return t<e})},max:function(t,e){return i(t,e,function(t,e){return e<=t})}}}(),function(){function o(t,e,i){if(i)if(!fabric.isLikelyNode&&e instanceof Element)t=e;else if(e instanceof Array){t=[];for(var r=0,n=e.length;r<n;r++)t[r]=o({},e[r],i)}else if(e&&"object"==typeof e)for(var s in e)"canvas"===s||"group"===s?t[s]=null:e.hasOwnProperty(s)&&(t[s]=o({},e[s],i));else t=e;else for(var s in e)t[s]=e[s];return t}fabric.util.object={extend:o,clone:function(t,e){return o({},t,e)}},fabric.util.object.extend(fabric.util,fabric.Observable)}(),function(){function n(t,e){var i=t.charCodeAt(e);if(isNaN(i))return"";if(i<55296||57343<i)return t.charAt(e);if(55296<=i&&i<=56319){if(t.length<=e+1)throw"High surrogate without following low surrogate";var r=t.charCodeAt(e+1);if(r<56320||57343<r)throw"High surrogate without following low surrogate";return t.charAt(e)+t.charAt(e+1)}if(0===e)throw"Low surrogate without preceding high surrogate";var n=t.charCodeAt(e-1);if(n<55296||56319<n)throw"Low surrogate without preceding high surrogate";return!1}fabric.util.string={camelize:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},capitalize:function(t,e){return t.charAt(0).toUpperCase()+(e?t.slice(1):t.slice(1).toLowerCase())},escapeXml:function(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},graphemeSplit:function(t){var e,i=0,r=[];for(i=0;i<t.length;i++)!1!==(e=n(t,i))&&r.push(e);return r}}}(),function(){var s=Array.prototype.slice,o=function(){},i=function(){for(var t in{toString:1})if("toString"===t)return!1;return!0}(),a=function(t,r,n){for(var e in r)e in t.prototype&&"function"==typeof t.prototype[e]&&-1<(r[e]+"").indexOf("callSuper")?t.prototype[e]=function(i){return function(){var t=this.constructor.superclass;this.constructor.superclass=n;var e=r[i].apply(this,arguments);if(this.constructor.superclass=t,"initialize"!==i)return e}}(e):t.prototype[e]=r[e],i&&(r.toString!==Object.prototype.toString&&(t.prototype.toString=r.toString),r.valueOf!==Object.prototype.valueOf&&(t.prototype.valueOf=r.valueOf))};function c(){}function h(t){for(var e=null,i=this;i.constructor.superclass;){var r=i.constructor.superclass.prototype[t];if(i[t]!==r){e=r;break}i=i.constructor.superclass.prototype}return e?1<arguments.length?e.apply(this,s.call(arguments,1)):e.call(this):console.log("tried to callSuper "+t+", method not found in prototype chain",this)}fabric.util.createClass=function(){var t=null,e=s.call(arguments,0);function i(){this.initialize.apply(this,arguments)}"function"==typeof e[0]&&(t=e.shift()),i.superclass=t,i.subclasses=[],t&&(c.prototype=t.prototype,i.prototype=new c,t.subclasses.push(i));for(var r=0,n=e.length;r<n;r++)a(i,e[r],t);return i.prototype.initialize||(i.prototype.initialize=o),(i.prototype.constructor=i).prototype.callSuper=h,i}}(),function(){var n=!!fabric.document.createElement("div").attachEvent,e=["touchstart","touchmove","touchend"];fabric.util.addListener=function(t,e,i,r){t&&t.addEventListener(e,i,!n&&r)},fabric.util.removeListener=function(t,e,i,r){t&&t.removeEventListener(e,i,!n&&r)},fabric.util.getPointer=function(t){var e,i,r=t.target,n=fabric.util.getScrollLeftTop(r),s=(i=(e=t).changedTouches)&&i[0]?i[0]:e;return{x:s.clientX+n.left,y:s.clientY+n.top}},fabric.util.isTouchEvent=function(t){return-1<e.indexOf(t.type)||"touch"===t.pointerType}}(),function(){var t=fabric.document.createElement("div"),e="string"==typeof t.style.opacity,i="string"==typeof t.style.filter,r=/alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,n=function(t){return t};e?n=function(t,e){return t.style.opacity=e,t}:i&&(n=function(t,e){var i=t.style;return t.currentStyle&&!t.currentStyle.hasLayout&&(i.zoom=1),r.test(i.filter)?(e=.9999<=e?"":"alpha(opacity="+100*e+")",i.filter=i.filter.replace(r,e)):i.filter+=" alpha(opacity="+100*e+")",t}),fabric.util.setStyle=function(t,e){var i=t.style;if(!i)return t;if("string"==typeof e)return t.style.cssText+=";"+e,-1<e.indexOf("opacity")?n(t,e.match(/opacity:\s*(\d?\.?\d*)/)[1]):t;for(var r in e)"opacity"===r?n(t,e[r]):i["float"===r||"cssFloat"===r?void 0===i.styleFloat?"cssFloat":"styleFloat":r]=e[r];return t}}(),function(){var e=Array.prototype.slice;var t,c,i,r,n=function(t){return e.call(t,0)};try{t=n(fabric.document.childNodes)instanceof Array}catch(t){}function s(t,e){var i=fabric.document.createElement(t);for(var r in e)"class"===r?i.className=e[r]:"for"===r?i.htmlFor=e[r]:i.setAttribute(r,e[r]);return i}function h(t){for(var e=0,i=0,r=fabric.document.documentElement,n=fabric.document.body||{scrollLeft:0,scrollTop:0};t&&(t.parentNode||t.host)&&((t=t.parentNode||t.host)===fabric.document?(e=n.scrollLeft||r.scrollLeft||0,i=n.scrollTop||r.scrollTop||0):(e+=t.scrollLeft||0,i+=t.scrollTop||0),1!==t.nodeType||"fixed"!==t.style.position););return{left:e,top:i}}t||(n=function(t){for(var e=new Array(t.length),i=t.length;i--;)e[i]=t[i];return e}),c=fabric.document.defaultView&&fabric.document.defaultView.getComputedStyle?function(t,e){var i=fabric.document.defaultView.getComputedStyle(t,null);return i?i[e]:void 0}:function(t,e){var i=t.style[e];return!i&&t.currentStyle&&(i=t.currentStyle[e]),i},i=fabric.document.documentElement.style,r="userSelect"in i?"userSelect":"MozUserSelect"in i?"MozUserSelect":"WebkitUserSelect"in i?"WebkitUserSelect":"KhtmlUserSelect"in i?"KhtmlUserSelect":"",fabric.util.makeElementUnselectable=function(t){return void 0!==t.onselectstart&&(t.onselectstart=fabric.util.falseFunction),r?t.style[r]="none":"string"==typeof t.unselectable&&(t.unselectable="on"),t},fabric.util.makeElementSelectable=function(t){return void 0!==t.onselectstart&&(t.onselectstart=null),r?t.style[r]="":"string"==typeof t.unselectable&&(t.unselectable=""),t},fabric.util.setImageSmoothing=function(t,e){t.imageSmoothingEnabled=t.imageSmoothingEnabled||t.webkitImageSmoothingEnabled||t.mozImageSmoothingEnabled||t.msImageSmoothingEnabled||t.oImageSmoothingEnabled,t.imageSmoothingEnabled=e},fabric.util.getById=function(t){return"string"==typeof t?fabric.document.getElementById(t):t},fabric.util.toArray=n,fabric.util.addClass=function(t,e){t&&-1===(" "+t.className+" ").indexOf(" "+e+" ")&&(t.className+=(t.className?" ":"")+e)},fabric.util.makeElement=s,fabric.util.wrapElement=function(t,e,i){return"string"==typeof e&&(e=s(e,i)),t.parentNode&&t.parentNode.replaceChild(e,t),e.appendChild(t),e},fabric.util.getScrollLeftTop=h,fabric.util.getElementOffset=function(t){var e,i,r=t&&t.ownerDocument,n={left:0,top:0},s={left:0,top:0},o={borderLeftWidth:"left",borderTopWidth:"top",paddingLeft:"left",paddingTop:"top"};if(!r)return s;for(var a in o)s[o[a]]+=parseInt(c(t,a),10)||0;return e=r.documentElement,void 0!==t.getBoundingClientRect&&(n=t.getBoundingClientRect()),i=h(t),{left:n.left+i.left-(e.clientLeft||0)+s.left,top:n.top+i.top-(e.clientTop||0)+s.top}},fabric.util.getNodeCanvas=function(t){var e=fabric.jsdomImplForWrapper(t);return e._canvas||e._image},fabric.util.cleanUpJsdomNode=function(t){if(fabric.isLikelyNode){var e=fabric.jsdomImplForWrapper(t);e&&(e._image=null,e._canvas=null,e._currentSrc=null,e._attributes=null,e._classList=null)}}}(),function(){function c(){}fabric.util.request=function(t,e){e||(e={});var i,r,n=e.method?e.method.toUpperCase():"GET",s=e.onComplete||function(){},o=new fabric.window.XMLHttpRequest,a=e.body||e.parameters;return o.onreadystatechange=function(){4===o.readyState&&(s(o),o.onreadystatechange=c)},"GET"===n&&(a=null,"string"==typeof e.parameters&&(i=t,r=e.parameters,t=i+(/\?/.test(i)?"&":"?")+r)),o.open(n,t,!0),"POST"!==n&&"PUT"!==n||o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(a),o}}(),fabric.log=console.log,fabric.warn=console.warn,function(){function i(){return!1}function r(t,e,i,r){return-i*Math.cos(t/r*(Math.PI/2))+i+e}var t=fabric.window.requestAnimationFrame||fabric.window.webkitRequestAnimationFrame||fabric.window.mozRequestAnimationFrame||fabric.window.oRequestAnimationFrame||fabric.window.msRequestAnimationFrame||function(t){return fabric.window.setTimeout(t,1e3/60)},e=fabric.window.cancelAnimationFrame||fabric.window.clearTimeout;function m(){return t.apply(fabric.window,arguments)}fabric.util.animate=function(e){m(function(t){e||(e={});var o,a=t||+new Date,c=e.duration||500,h=a+c,l=e.onChange||i,u=e.abort||i,f=e.onComplete||i,d=e.easing||r,g="startValue"in e?e.startValue:0,p="endValue"in e?e.endValue:100,v=e.byValue||p-g;e.onStart&&e.onStart(),function t(e){o=e||+new Date;var i=h<o?c:o-a,r=i/c,n=d(i,g,v,c),s=Math.abs((n-g)/v);if(!u())return h<o?(l(p,1,1),void f(p,1,1)):(l(n,s,r),void m(t));f(p,1,1)}(a)})},fabric.util.requestAnimFrame=m,fabric.util.cancelAnimFrame=function(){return e.apply(fabric.window,arguments)}}(),function(){function c(t,e,i){var r="rgba("+parseInt(t[0]+i*(e[0]-t[0]),10)+","+parseInt(t[1]+i*(e[1]-t[1]),10)+","+parseInt(t[2]+i*(e[2]-t[2]),10);return r+=","+(t&&e?parseFloat(t[3]+i*(e[3]-t[3])):1),r+=")"}fabric.util.animateColor=function(t,e,i,n){var r=new fabric.Color(t).getSource(),s=new fabric.Color(e).getSource(),o=n.onComplete,a=n.onChange;n=n||{},fabric.util.animate(fabric.util.object.extend(n,{duration:i||500,startValue:r,endValue:s,byValue:s,easing:function(t,e,i,r){return c(e,i,n.colorEasing?n.colorEasing(t,r):1-Math.cos(t/r*(Math.PI/2)))},onComplete:function(t,e,i){if(o)return o(c(s,s,0),e,i)},onChange:function(t,e,i){if(a){if(Array.isArray(t))return a(c(t,t,0),e,i);a(t,e,i)}}}))}}(),function(){function o(t,e,i,r){return t<Math.abs(e)?(t=e,r=i/4):r=0===e&&0===t?i/(2*Math.PI)*Math.asin(1):i/(2*Math.PI)*Math.asin(e/t),{a:t,c:e,p:i,s:r}}function a(t,e,i){return t.a*Math.pow(2,10*(e-=1))*Math.sin((e*i-t.s)*(2*Math.PI)/t.p)}function n(t,e,i,r){return i-s(r-t,0,i,r)+e}function s(t,e,i,r){return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e}fabric.util.ease={easeInQuad:function(t,e,i,r){return i*(t/=r)*t+e},easeOutQuad:function(t,e,i,r){return-i*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,i,r){return i*(t/=r)*t*t+e},easeOutCubic:function(t,e,i,r){return i*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,i,r){return i*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,i,r){return-i*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,i,r){return i*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,i,r){return i*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,i,r){return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,i,r){return i*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,i,r){return-i/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,i,r){return 0===t?e:i*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,i,r){return t===r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,i,r){return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,i,r){return-i*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,i,r){return i*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,i,r){return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,i,r){var n=0;return 0===t?e:1==(t/=r)?e+i:(n||(n=.3*r),-a(o(i,i,n,1.70158),t,r)+e)},easeOutElastic:function(t,e,i,r){var n=0;if(0===t)return e;if(1==(t/=r))return e+i;n||(n=.3*r);var s=o(i,i,n,1.70158);return s.a*Math.pow(2,-10*t)*Math.sin((t*r-s.s)*(2*Math.PI)/s.p)+s.c+e},easeInOutElastic:function(t,e,i,r){var n=0;if(0===t)return e;if(2==(t/=r/2))return e+i;n||(n=r*(.3*1.5));var s=o(i,i,n,1.70158);return t<1?-.5*a(s,t,r)+e:s.a*Math.pow(2,-10*(t-=1))*Math.sin((t*r-s.s)*(2*Math.PI)/s.p)*.5+s.c+e},easeInBack:function(t,e,i,r,n){return void 0===n&&(n=1.70158),i*(t/=r)*t*((n+1)*t-n)+e},easeOutBack:function(t,e,i,r,n){return void 0===n&&(n=1.70158),i*((t=t/r-1)*t*((n+1)*t+n)+1)+e},easeInOutBack:function(t,e,i,r,n){return void 0===n&&(n=1.70158),(t/=r/2)<1?i/2*(t*t*((1+(n*=1.525))*t-n))+e:i/2*((t-=2)*t*((1+(n*=1.525))*t+n)+2)+e},easeInBounce:n,easeOutBounce:s,easeInOutBounce:function(t,e,i,r){return t<r/2?.5*n(2*t,0,i,r)+e:.5*s(2*t-r,0,i,r)+.5*i+e}}}(),function(t){"use strict";var C=t.fabric||(t.fabric={}),p=C.util.object.extend,f=C.util.object.clone,v=C.util.toFixed,S=C.util.parseUnit,c=C.util.multiplyTransformMatrices,m={cx:"left",x:"left",r:"radius",cy:"top",y:"top",display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","letter-spacing":"charSpacing","paint-order":"paintFirst","stroke-dasharray":"strokeDashArray","stroke-dashoffset":"strokeDashOffset","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"textAnchor",opacity:"opacity","clip-path":"clipPath","clip-rule":"clipRule","vector-effect":"strokeUniform","image-rendering":"imageSmoothing"},b={stroke:"strokeOpacity",fill:"fillOpacity"},_="font-size",y="clip-path";function x(t,e,i,r){var n,s="[object Array]"===Object.prototype.toString.call(e);if("fill"!==t&&"stroke"!==t||"none"!==e){if("strokeUniform"===t)return"non-scaling-stroke"===e;if("strokeDashArray"===t)e="none"===e?null:e.replace(/,/g," ").split(/\s+/).map(parseFloat);else if("transformMatrix"===t)e=i&&i.transformMatrix?c(i.transformMatrix,C.parseTransformAttribute(e)):C.parseTransformAttribute(e);else if("visible"===t)e="none"!==e&&"hidden"!==e,i&&!1===i.visible&&(e=!1);else if("opacity"===t)e=parseFloat(e),i&&void 0!==i.opacity&&(e*=i.opacity);else if("textAnchor"===t)e="start"===e?"left":"end"===e?"right":"center";else if("charSpacing"===t)n=S(e,r)/r*1e3;else if("paintFirst"===t){var o=e.indexOf("fill"),a=e.indexOf("stroke");e="fill";-1<o&&-1<a&&a<o?e="stroke":-1===o&&-1<a&&(e="stroke")}else{if("href"===t||"xlink:href"===t||"font"===t)return e;if("imageSmoothing"===t)return"optimizeQuality"===e;n=s?e.map(S):S(e,r)}}else e="";return!s&&isNaN(n)?e:n}function e(t){return new RegExp("^("+t.join("|")+")\\b","i")}function w(t,e){var i,r,n,s,o=[];for(n=0,s=e.length;n<s;n++)i=e[n],r=t.getElementsByTagName(i),o=o.concat(Array.prototype.slice.call(r));return o}function T(t,e){var i,r=!0;return(i=n(t,e.pop()))&&e.length&&(r=function(t,e){var i,r=!0;for(;t.parentNode&&1===t.parentNode.nodeType&&e.length;)r&&(i=e.pop()),t=t.parentNode,r=n(t,i);return 0===e.length}(t,e)),i&&r&&0===e.length}function n(t,e){var i,r,n=t.nodeName,s=t.getAttribute("class"),o=t.getAttribute("id");if(i=new RegExp("^"+n,"i"),e=e.replace(i,""),o&&e.length&&(i=new RegExp("#"+o+"(?![a-zA-Z\\-]+)","i"),e=e.replace(i,"")),s&&e.length)for(r=(s=s.split(" ")).length;r--;)i=new RegExp("\\."+s[r]+"(?![a-zA-Z\\-]+)","i"),e=e.replace(i,"");return 0===e.length}function O(t,e){var i;if(t.getElementById&&(i=t.getElementById(e)),i)return i;var r,n,s,o=t.getElementsByTagName("*");for(n=0,s=o.length;n<s;n++)if(e===(r=o[n]).getAttribute("id"))return r}C.svgValidTagNamesRegEx=e(["path","circle","polygon","polyline","ellipse","rect","line","image","text"]),C.svgViewBoxElementsRegEx=e(["symbol","image","marker","pattern","view","svg"]),C.svgInvalidAncestorsRegEx=e(["pattern","defs","symbol","metadata","clipPath","mask","desc"]),C.svgValidParentsRegEx=e(["symbol","g","a","svg","clipPath","defs"]),C.cssRules={},C.gradientDefs={},C.clipPaths={},C.parseTransformAttribute=function(){function b(t,e,i){t[i]=Math.tan(C.util.degreesToRadians(e[0]))}var _=C.iMatrix,t=C.reNum,e=C.commaWsp,y="(?:"+("(?:(matrix)\\s*\\(\\s*("+t+")"+e+"("+t+")"+e+"("+t+")"+e+"("+t+")"+e+"("+t+")"+e+"("+t+")\\s*\\))")+"|"+("(?:(translate)\\s*\\(\\s*("+t+")(?:"+e+"("+t+"))?\\s*\\))")+"|"+("(?:(scale)\\s*\\(\\s*("+t+")(?:"+e+"("+t+"))?\\s*\\))")+"|"+("(?:(rotate)\\s*\\(\\s*("+t+")(?:"+e+"("+t+")"+e+"("+t+"))?\\s*\\))")+"|"+("(?:(skewX)\\s*\\(\\s*("+t+")\\s*\\))")+"|"+("(?:(skewY)\\s*\\(\\s*("+t+")\\s*\\))")+")",i=new RegExp("^\\s*(?:"+("(?:"+y+"(?:"+e+"*"+y+")*)")+"?)\\s*$"),r=new RegExp(y,"g");return function(t){var v=_.concat(),m=[];if(!t||t&&!i.test(t))return v;t.replace(r,function(t){var e,i,r,n,s,o,a,c,h,l,u,f,d=new RegExp(y).exec(t).filter(function(t){return!!t}),g=d[1],p=d.slice(2).map(parseFloat);switch(g){case"translate":f=p,(u=v)[4]=f[0],2===f.length&&(u[5]=f[1]);break;case"rotate":p[0]=C.util.degreesToRadians(p[0]),s=v,o=p,a=C.util.cos(o[0]),c=C.util.sin(o[0]),l=h=0,3===o.length&&(h=o[1],l=o[2]),s[0]=a,s[1]=c,s[2]=-c,s[3]=a,s[4]=h-(a*h-c*l),s[5]=l-(c*h+a*l);break;case"scale":e=v,r=(i=p)[0],n=2===i.length?i[1]:i[0],e[0]=r,e[3]=n;break;case"skewX":b(v,p,2);break;case"skewY":b(v,p,1);break;case"matrix":v=p}m.push(v.concat()),v=_.concat()});for(var e=m[0];1<m.length;)m.shift(),e=C.util.multiplyTransformMatrices(e,m[0]);return e}}();var k=new RegExp("^\\s*("+C.reNum+"+)\\s*,?\\s*("+C.reNum+"+)\\s*,?\\s*("+C.reNum+"+)\\s*,?\\s*("+C.reNum+"+)\\s*$");function D(t){if(C.svgViewBoxElementsRegEx.test(t.nodeName)){var e,i,r,n,s,o,a=t.getAttribute("viewBox"),c=1,h=1,l=t.getAttribute("width"),u=t.getAttribute("height"),f=t.getAttribute("x")||0,d=t.getAttribute("y")||0,g=t.getAttribute("preserveAspectRatio")||"",p=!a||!(a=a.match(k)),v=!l||!u||"100%"===l||"100%"===u,m=p&&v,b={},_="",y=0,x=0;if(b.width=0,b.height=0,b.toBeParsed=m,p&&(f||d)&&"#document"!==t.parentNode.nodeName&&(_=" translate("+S(f)+" "+S(d)+") ",s=(t.getAttribute("transform")||"")+_,t.setAttribute("transform",s),t.removeAttribute("x"),t.removeAttribute("y")),m)return b;if(p)return b.width=S(l),b.height=S(u),b;if(e=-parseFloat(a[1]),i=-parseFloat(a[2]),r=parseFloat(a[3]),n=parseFloat(a[4]),b.minX=e,b.minY=i,b.viewBoxWidth=r,b.viewBoxHeight=n,v?(b.width=r,b.height=n):(b.width=S(l),b.height=S(u),c=b.width/r,h=b.height/n),"none"!==(g=C.util.parsePreserveAspectRatioAttribute(g)).alignX&&("meet"===g.meetOrSlice&&(h=c=h<c?h:c),"slice"===g.meetOrSlice&&(h=c=h<c?c:h),y=b.width-r*c,x=b.height-n*c,"Mid"===g.alignX&&(y/=2),"Mid"===g.alignY&&(x/=2),"Min"===g.alignX&&(y=0),"Min"===g.alignY&&(x=0)),1===c&&1===h&&0===e&&0===i&&0===f&&0===d)return b;if((f||d)&&"#document"!==t.parentNode.nodeName&&(_=" translate("+S(f)+" "+S(d)+") "),s=_+" matrix("+c+" 0 0 "+h+" "+(e*c+y)+" "+(i*h+x)+") ","svg"===t.nodeName){for(o=t.ownerDocument.createElementNS(C.svgNS,"g");t.firstChild;)o.appendChild(t.firstChild);t.appendChild(o)}else(o=t).removeAttribute("x"),o.removeAttribute("y"),s=o.getAttribute("transform")+s;return o.setAttribute("transform",s),b}}function s(t,e){var i="xlink:href",r=O(t,e.getAttribute(i).substr(1));if(r&&r.getAttribute(i)&&s(t,r),["gradientTransform","x1","x2","y1","y2","gradientUnits","cx","cy","r","fx","fy"].forEach(function(t){r&&!e.hasAttribute(t)&&r.hasAttribute(t)&&e.setAttribute(t,r.getAttribute(t))}),!e.children.length)for(var n=r.cloneNode(!0);n.firstChild;)e.appendChild(n.firstChild);e.removeAttribute(i)}C.parseSVGDocument=function(t,i,e,r){if(t){!function(t){for(var e=w(t,["use","svg:use"]),i=0;e.length&&i<e.length;){var r,n,s,o,a=e[i],c=(a.getAttribute("xlink:href")||a.getAttribute("href")).substr(1),h=a.getAttribute("x")||0,l=a.getAttribute("y")||0,u=O(t,c).cloneNode(!0),f=(u.getAttribute("transform")||"")+" translate("+h+", "+l+")",d=e.length,g=C.svgNS;if(D(u),/^svg$/i.test(u.nodeName)){var p=u.ownerDocument.createElementNS(g,"g");for(n=0,o=(s=u.attributes).length;n<o;n++)r=s.item(n),p.setAttributeNS(g,r.nodeName,r.nodeValue);for(;u.firstChild;)p.appendChild(u.firstChild);u=p}for(n=0,o=(s=a.attributes).length;n<o;n++)"x"!==(r=s.item(n)).nodeName&&"y"!==r.nodeName&&"xlink:href"!==r.nodeName&&"href"!==r.nodeName&&("transform"===r.nodeName?f=r.nodeValue+" "+f:u.setAttribute(r.nodeName,r.nodeValue));u.setAttribute("transform",f),u.setAttribute("instantiated_by_use","1"),u.removeAttribute("id"),a.parentNode.replaceChild(u,a),e.length===d&&i++}}(t);var n,s,o=C.Object.__uid++,a=D(t),c=C.util.toArray(t.getElementsByTagName("*"));if(a.crossOrigin=r&&r.crossOrigin,a.svgUid=o,0===c.length&&C.isLikelyNode){var h=[];for(n=0,s=(c=t.selectNodes('//*[name(.)!="svg"]')).length;n<s;n++)h[n]=c[n];c=h}var l=c.filter(function(t){return D(t),C.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:",""))&&!function(t,e){for(;t&&(t=t.parentNode);)if(t.nodeName&&e.test(t.nodeName.replace("svg:",""))&&!t.getAttribute("instantiated_by_use"))return!0;return!1}(t,C.svgInvalidAncestorsRegEx)});if(!l||l&&!l.length)i&&i([],{});else{var u={};c.filter(function(t){return"clipPath"===t.nodeName.replace("svg:","")}).forEach(function(t){var e=t.getAttribute("id");u[e]=C.util.toArray(t.getElementsByTagName("*")).filter(function(t){return C.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:",""))})}),C.gradientDefs[o]=C.getGradientDefs(t),C.cssRules[o]=C.getCSSRules(t),C.clipPaths[o]=u,C.parseElements(l,function(t,e){i&&(i(t,a,e,c),delete C.gradientDefs[o],delete C.cssRules[o],delete C.clipPaths[o])},f(a),e,r)}}};var h=new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+C.reNum+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+C.reNum+"))?\\s+(.*)");p(C,{parseFontDeclaration:function(t,e){var i=t.match(h);if(i){var r=i[1],n=i[3],s=i[4],o=i[5],a=i[6];r&&(e.fontStyle=r),n&&(e.fontWeight=isNaN(parseFloat(n))?n:parseFloat(n)),s&&(e.fontSize=S(s)),a&&(e.fontFamily=a),o&&(e.lineHeight="normal"===o?1:o)}},getGradientDefs:function(t){var e,i=w(t,["linearGradient","radialGradient","svg:linearGradient","svg:radialGradient"]),r=0,n={};for(r=i.length;r--;)(e=i[r]).getAttribute("xlink:href")&&s(t,e),n[e.getAttribute("id")]=e;return n},parseAttributes:function(i,t,e){if(i){var r,n,s,o={};void 0===e&&(e=i.getAttribute("svgUid")),i.parentNode&&C.svgValidParentsRegEx.test(i.parentNode.nodeName)&&(o=C.parseAttributes(i.parentNode,t,e));var a=t.reduce(function(t,e){return(r=i.getAttribute(e))&&(t[e]=r),t},{}),c=p(function(t,e){var i={};for(var r in C.cssRules[e])if(T(t,r.split(" ")))for(var n in C.cssRules[e][r])i[n]=C.cssRules[e][r][n];return i}(i,e),C.parseStyleAttribute(i));a=p(a,c),c[y]&&i.setAttribute(y,c[y]),n=s=o.fontSize||C.Text.DEFAULT_SVG_FONT_SIZE,a[_]&&(a[_]=n=S(a[_],s));var h,l,u,f={};for(var d in a)l=x(h=(u=d)in m?m[u]:u,a[d],o,n),f[h]=l;f&&f.font&&C.parseFontDeclaration(f.font,f);var g=p(o,f);return C.svgValidParentsRegEx.test(i.nodeName)?g:function(t){for(var e in b)if(void 0!==t[b[e]]&&""!==t[e]){if(void 0===t[e]){if(!C.Object.prototype[e])continue;t[e]=C.Object.prototype[e]}if(0!==t[e].indexOf("url(")){var i=new C.Color(t[e]);t[e]=i.setAlpha(v(i.getAlpha()*t[b[e]],2)).toRgba()}}return t}(g)}},parseElements:function(t,e,i,r,n){new C.ElementsParser(t,e,i,r,n).parse()},parseStyleAttribute:function(t){var i,r,n,e={},s=t.getAttribute("style");return s&&("string"==typeof s?(i=e,s.replace(/;\s*$/,"").split(";").forEach(function(t){var e=t.split(":");r=e[0].trim().toLowerCase(),n=e[1].trim(),i[r]=n})):function(t,e){var i,r;for(var n in t)void 0!==t[n]&&(i=n.toLowerCase(),r=t[n],e[i]=r)}(s,e)),e},parsePointsAttribute:function(t){if(!t)return null;var e,i,r=[];for(e=0,i=(t=(t=t.replace(/,/g," ").trim()).split(/\s+/)).length;e<i;e+=2)r.push({x:parseFloat(t[e]),y:parseFloat(t[e+1])});return r},getCSSRules:function(t){var a,c,e=t.getElementsByTagName("style"),h={};for(a=0,c=e.length;a<c;a++){var i=e[a].textContent||"";""!==(i=i.replace(/\/\*[\s\S]*?\*\//g,"")).trim()&&i.match(/[^{]*\{[\s\S]*?\}/g).map(function(t){return t.trim()}).forEach(function(t){var e=t.match(/([\s\S]*?)\s*\{([^}]*)\}/),i={},r=e[2].trim().replace(/;$/,"").split(/\s*;\s*/);for(a=0,c=r.length;a<c;a++){var n=r[a].split(/\s*:\s*/),s=n[0],o=n[1];i[s]=o}(t=e[1]).split(",").forEach(function(t){""!==(t=t.replace(/^svg/i,"").trim())&&(h[t]?C.util.object.extend(h[t],i):h[t]=C.util.object.clone(i))})})}return h},loadSVGFromURL:function(t,n,i,r){t=t.replace(/^\n\s*/,"").trim(),new C.util.request(t,{method:"get",onComplete:function(t){var e=t.responseXML;if(!e||!e.documentElement)return n&&n(null),!1;C.parseSVGDocument(e.documentElement,function(t,e,i,r){n&&n(t,e,i,r)},i,r)}})},loadSVGFromString:function(t,n,e,i){var r=(new C.window.DOMParser).parseFromString(t.trim(),"text/xml");C.parseSVGDocument(r.documentElement,function(t,e,i,r){n(t,e,i,r)},e,i)}})}( true?exports:undefined),fabric.ElementsParser=function(t,e,i,r,n,s){this.elements=t,this.callback=e,this.options=i,this.reviver=r,this.svgUid=i&&i.svgUid||0,this.parsingOptions=n,this.regexUrl=/^url\(['"]?#([^'"]+)['"]?\)/g,this.doc=s},function(t){t.parse=function(){this.instances=new Array(this.elements.length),this.numElements=this.elements.length,this.createObjects()},t.createObjects=function(){var i=this;this.elements.forEach(function(t,e){t.setAttribute("svgUid",i.svgUid),i.createObject(t,e)})},t.findTag=function(t){return fabric[fabric.util.string.capitalize(t.tagName.replace("svg:",""))]},t.createObject=function(t,e){var i=this.findTag(t);if(i&&i.fromElement)try{i.fromElement(t,this.createCallback(e,t),this.options)}catch(t){fabric.log(t)}else this.checkIfDone()},t.createCallback=function(i,r){var n=this;return function(t){var e;n.resolveGradient(t,r,"fill"),n.resolveGradient(t,r,"stroke"),t instanceof fabric.Image&&t._originalElement&&(e=t.parsePreserveAspectRatioAttribute(r)),t._removeTransformMatrix(e),n.resolveClipPath(t,r),n.reviver&&n.reviver(r,t),n.instances[i]=t,n.checkIfDone()}},t.extractPropertyDefinition=function(t,e,i){var r=t[e],n=this.regexUrl;if(n.test(r)){n.lastIndex=0;var s=n.exec(r)[1];return n.lastIndex=0,fabric[i][this.svgUid][s]}},t.resolveGradient=function(t,e,i){var r=this.extractPropertyDefinition(t,i,"gradientDefs");if(r){var n=e.getAttribute(i+"-opacity"),s=fabric.Gradient.fromElement(r,t,n,this.options);t.set(i,s)}},t.createClipPathCallback=function(t,e){return function(t){t._removeTransformMatrix(),t.fillRule=t.clipRule,e.push(t)}},t.resolveClipPath=function(t,e){var i,r,n,s,o=this.extractPropertyDefinition(t,"clipPath","clipPaths");if(o){n=[],r=fabric.util.invertTransform(t.calcTransformMatrix());for(var a=o[0].parentNode,c=e;c.parentNode&&c.getAttribute("clip-path")!==t.clipPath;)c=c.parentNode;c.parentNode.appendChild(a);for(var h=0;h<o.length;h++)i=o[h],this.findTag(i).fromElement(i,this.createClipPathCallback(t,n),this.options);o=1===n.length?n[0]:new fabric.Group(n),s=fabric.util.multiplyTransformMatrices(r,o.calcTransformMatrix()),o.clipPath&&this.resolveClipPath(o,c);var l=fabric.util.qrDecompose(s);o.flipX=!1,o.flipY=!1,o.set("scaleX",l.scaleX),o.set("scaleY",l.scaleY),o.angle=l.angle,o.skewX=l.skewX,o.skewY=0,o.setPositionByOrigin({x:l.translateX,y:l.translateY},"center","center"),t.clipPath=o}else delete t.clipPath},t.checkIfDone=function(){0==--this.numElements&&(this.instances=this.instances.filter(function(t){return null!=t}),this.callback(this.instances,this.elements))}}(fabric.ElementsParser.prototype),function(t){"use strict";var e=t.fabric||(t.fabric={});function i(t,e){this.x=t,this.y=e}e.Point?e.warn("fabric.Point is already defined"):(e.Point=i).prototype={type:"point",constructor:i,add:function(t){return new i(this.x+t.x,this.y+t.y)},addEquals:function(t){return this.x+=t.x,this.y+=t.y,this},scalarAdd:function(t){return new i(this.x+t,this.y+t)},scalarAddEquals:function(t){return this.x+=t,this.y+=t,this},subtract:function(t){return new i(this.x-t.x,this.y-t.y)},subtractEquals:function(t){return this.x-=t.x,this.y-=t.y,this},scalarSubtract:function(t){return new i(this.x-t,this.y-t)},scalarSubtractEquals:function(t){return this.x-=t,this.y-=t,this},multiply:function(t){return new i(this.x*t,this.y*t)},multiplyEquals:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return new i(this.x/t,this.y/t)},divideEquals:function(t){return this.x/=t,this.y/=t,this},eq:function(t){return this.x===t.x&&this.y===t.y},lt:function(t){return this.x<t.x&&this.y<t.y},lte:function(t){return this.x<=t.x&&this.y<=t.y},gt:function(t){return this.x>t.x&&this.y>t.y},gte:function(t){return this.x>=t.x&&this.y>=t.y},lerp:function(t,e){return void 0===e&&(e=.5),e=Math.max(Math.min(1,e),0),new i(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)},distanceFrom:function(t){var e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)},midPointFrom:function(t){return this.lerp(t)},min:function(t){return new i(Math.min(this.x,t.x),Math.min(this.y,t.y))},max:function(t){return new i(Math.max(this.x,t.x),Math.max(this.y,t.y))},toString:function(){return this.x+","+this.y},setXY:function(t,e){return this.x=t,this.y=e,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setFromPoint:function(t){return this.x=t.x,this.y=t.y,this},swap:function(t){var e=this.x,i=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=i},clone:function(){return new i(this.x,this.y)}}}( true?exports:undefined),function(t){"use strict";var f=t.fabric||(t.fabric={});function d(t){this.status=t,this.points=[]}f.Intersection?f.warn("fabric.Intersection is already defined"):(f.Intersection=d,f.Intersection.prototype={constructor:d,appendPoint:function(t){return this.points.push(t),this},appendPoints:function(t){return this.points=this.points.concat(t),this}},f.Intersection.intersectLineLine=function(t,e,i,r){var n,s=(r.x-i.x)*(t.y-i.y)-(r.y-i.y)*(t.x-i.x),o=(e.x-t.x)*(t.y-i.y)-(e.y-t.y)*(t.x-i.x),a=(r.y-i.y)*(e.x-t.x)-(r.x-i.x)*(e.y-t.y);if(0!==a){var c=s/a,h=o/a;0<=c&&c<=1&&0<=h&&h<=1?(n=new d("Intersection")).appendPoint(new f.Point(t.x+c*(e.x-t.x),t.y+c*(e.y-t.y))):n=new d}else n=new d(0===s||0===o?"Coincident":"Parallel");return n},f.Intersection.intersectLinePolygon=function(t,e,i){var r,n,s,o,a=new d,c=i.length;for(o=0;o<c;o++)r=i[o],n=i[(o+1)%c],s=d.intersectLineLine(t,e,r,n),a.appendPoints(s.points);return 0<a.points.length&&(a.status="Intersection"),a},f.Intersection.intersectPolygonPolygon=function(t,e){var i,r=new d,n=t.length;for(i=0;i<n;i++){var s=t[i],o=t[(i+1)%n],a=d.intersectLinePolygon(s,o,e);r.appendPoints(a.points)}return 0<r.points.length&&(r.status="Intersection"),r},f.Intersection.intersectPolygonRectangle=function(t,e,i){var r=e.min(i),n=e.max(i),s=new f.Point(n.x,r.y),o=new f.Point(r.x,n.y),a=d.intersectLinePolygon(r,s,t),c=d.intersectLinePolygon(s,n,t),h=d.intersectLinePolygon(n,o,t),l=d.intersectLinePolygon(o,r,t),u=new d;return u.appendPoints(a.points),u.appendPoints(c.points),u.appendPoints(h.points),u.appendPoints(l.points),0<u.points.length&&(u.status="Intersection"),u})}( true?exports:undefined),function(t){"use strict";var h=t.fabric||(t.fabric={});function l(t){t?this._tryParsingColor(t):this.setSource([0,0,0,1])}function u(t,e,i){return i<0&&(i+=1),1<i&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}h.Color?h.warn("fabric.Color is already defined."):(h.Color=l,h.Color.prototype={_tryParsingColor:function(t){var e;t in l.colorNameMap&&(t=l.colorNameMap[t]),"transparent"===t&&(e=[255,255,255,0]),e||(e=l.sourceFromHex(t)),e||(e=l.sourceFromRgb(t)),e||(e=l.sourceFromHsl(t)),e||(e=[0,0,0,1]),e&&this.setSource(e)},_rgbToHsl:function(t,e,i){t/=255,e/=255,i/=255;var r,n,s,o=h.util.array.max([t,e,i]),a=h.util.array.min([t,e,i]);if(s=(o+a)/2,o===a)r=n=0;else{var c=o-a;switch(n=.5<s?c/(2-o-a):c/(o+a),o){case t:r=(e-i)/c+(e<i?6:0);break;case e:r=(i-t)/c+2;break;case i:r=(t-e)/c+4}r/=6}return[Math.round(360*r),Math.round(100*n),Math.round(100*s)]},getSource:function(){return this._source},setSource:function(t){this._source=t},toRgb:function(){var t=this.getSource();return"rgb("+t[0]+","+t[1]+","+t[2]+")"},toRgba:function(){var t=this.getSource();return"rgba("+t[0]+","+t[1]+","+t[2]+","+t[3]+")"},toHsl:function(){var t=this.getSource(),e=this._rgbToHsl(t[0],t[1],t[2]);return"hsl("+e[0]+","+e[1]+"%,"+e[2]+"%)"},toHsla:function(){var t=this.getSource(),e=this._rgbToHsl(t[0],t[1],t[2]);return"hsla("+e[0]+","+e[1]+"%,"+e[2]+"%,"+t[3]+")"},toHex:function(){var t,e,i,r=this.getSource();return t=1===(t=r[0].toString(16)).length?"0"+t:t,e=1===(e=r[1].toString(16)).length?"0"+e:e,i=1===(i=r[2].toString(16)).length?"0"+i:i,t.toUpperCase()+e.toUpperCase()+i.toUpperCase()},toHexa:function(){var t,e=this.getSource();return t=1===(t=(t=Math.round(255*e[3])).toString(16)).length?"0"+t:t,this.toHex()+t.toUpperCase()},getAlpha:function(){return this.getSource()[3]},setAlpha:function(t){var e=this.getSource();return e[3]=t,this.setSource(e),this},toGrayscale:function(){var t=this.getSource(),e=parseInt((.3*t[0]+.59*t[1]+.11*t[2]).toFixed(0),10),i=t[3];return this.setSource([e,e,e,i]),this},toBlackWhite:function(t){var e=this.getSource(),i=(.3*e[0]+.59*e[1]+.11*e[2]).toFixed(0),r=e[3];return t=t||127,i=Number(i)<Number(t)?0:255,this.setSource([i,i,i,r]),this},overlayWith:function(t){t instanceof l||(t=new l(t));var e,i=[],r=this.getAlpha(),n=this.getSource(),s=t.getSource();for(e=0;e<3;e++)i.push(Math.round(.5*n[e]+.5*s[e]));return i[3]=r,this.setSource(i),this}},h.Color.reRGBa=/^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i,h.Color.reHSLa=/^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i,h.Color.reHex=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,h.Color.colorNameMap={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},h.Color.fromRgb=function(t){return l.fromSource(l.sourceFromRgb(t))},h.Color.sourceFromRgb=function(t){var e=t.match(l.reRGBa);if(e){var i=parseInt(e[1],10)/(/%$/.test(e[1])?100:1)*(/%$/.test(e[1])?255:1),r=parseInt(e[2],10)/(/%$/.test(e[2])?100:1)*(/%$/.test(e[2])?255:1),n=parseInt(e[3],10)/(/%$/.test(e[3])?100:1)*(/%$/.test(e[3])?255:1);return[parseInt(i,10),parseInt(r,10),parseInt(n,10),e[4]?parseFloat(e[4]):1]}},h.Color.fromRgba=l.fromRgb,h.Color.fromHsl=function(t){return l.fromSource(l.sourceFromHsl(t))},h.Color.sourceFromHsl=function(t){var e=t.match(l.reHSLa);if(e){var i,r,n,s=(parseFloat(e[1])%360+360)%360/360,o=parseFloat(e[2])/(/%$/.test(e[2])?100:1),a=parseFloat(e[3])/(/%$/.test(e[3])?100:1);if(0===o)i=r=n=a;else{var c=a<=.5?a*(o+1):a+o-a*o,h=2*a-c;i=u(h,c,s+1/3),r=u(h,c,s),n=u(h,c,s-1/3)}return[Math.round(255*i),Math.round(255*r),Math.round(255*n),e[4]?parseFloat(e[4]):1]}},h.Color.fromHsla=l.fromHsl,h.Color.fromHex=function(t){return l.fromSource(l.sourceFromHex(t))},h.Color.sourceFromHex=function(t){if(t.match(l.reHex)){var e=t.slice(t.indexOf("#")+1),i=3===e.length||4===e.length,r=8===e.length||4===e.length,n=i?e.charAt(0)+e.charAt(0):e.substring(0,2),s=i?e.charAt(1)+e.charAt(1):e.substring(2,4),o=i?e.charAt(2)+e.charAt(2):e.substring(4,6),a=r?i?e.charAt(3)+e.charAt(3):e.substring(6,8):"FF";return[parseInt(n,16),parseInt(s,16),parseInt(o,16),parseFloat((parseInt(a,16)/255).toFixed(2))]}},h.Color.fromSource=function(t){var e=new l;return e.setSource(t),e})}( true?exports:undefined),function(t){"use strict";var l=t.fabric||(t.fabric={}),o=["e","se","s","sw","w","nw","n","ne","e"],s=["ns","nesw","ew","nwse"],n={},f="left",d="top",g="right",p="bottom",c="center",w={top:p,bottom:d,left:g,right:f,center:c},v=l.util.radiansToDegrees,T=Math.sign||function(t){return(0<t)-(t<0)||+t};function a(t,e){var i=t.angle+v(Math.atan2(e.y,e.x))+360;return Math.round(i%360/45)}function O(t,e){var i=e.transform.target,r=i.canvas,n=l.util.object.clone(e);n.target=i,r&&r.fire("object:"+t,n),i.fire(t,e)}function k(t,e){var i=e.canvas,r=t[i.uniScaleKey];return i.uniformScaling&&!r||!i.uniformScaling&&r}function D(t){return t.originX===c&&t.originY===c}function P(t,e,i){var r=t.lockScalingX,n=t.lockScalingY;return!(!r||!n)||(!(e||!r&&!n||!i)||(!(!r||"x"!==e)||!(!n||"y"!==e)))}function E(t,e,i,r){return{e:t,transform:e,pointer:{x:i,y:r}}}function h(c){return function(t,e,i,r){var n=e.target,s=n.getCenterPoint(),o=n.translateToOriginPoint(s,e.originX,e.originY),a=c(t,e,i,r);return n.setPositionByOrigin(o,e.originX,e.originY),a}}function A(t,e,i,r,n){var s=t.target,o=s.controls[t.corner],a=s.canvas.getZoom(),c=s.padding/a,h=s.toLocalPoint(new l.Point(r,n),e,i);return h.x>=c&&(h.x-=c),h.x<=-c&&(h.x+=c),h.y>=c&&(h.y-=c),h.y<=c&&(h.y+=c),h.x-=o.offsetX,h.y-=o.offsetY,h}function m(t){return t.flipX&&!t.flipY||!t.flipX&&t.flipY}function b(t,e,i,r,n){if(0!==t[e]){var s=n/t._getTransformedDimensions()[r]*t[i];t.set(i,s)}}function u(t,e,i,r){var n,s=e.target,o=s._getTransformedDimensions(0,s.skewY),a=A(e,e.originX,e.originY,i,r),c=Math.abs(2*a.x)-o.x,h=s.skewX;c<2?n=0:(n=v(Math.atan2(c/s.scaleX,o.y/s.scaleY)),e.originX===f&&e.originY===p&&(n=-n),e.originX===g&&e.originY===d&&(n=-n),m(s)&&(n=-n));var l=h!==n;if(l){var u=s._getTransformedDimensions().y;s.set("skewX",n),b(s,"skewY","scaleY","y",u),O("skewing",E(t,e,i,r))}return l}function _(t,e,i,r){var n,s=e.target,o=s._getTransformedDimensions(s.skewX,0),a=A(e,e.originX,e.originY,i,r),c=Math.abs(2*a.y)-o.y,h=s.skewY;c<2?n=0:(n=v(Math.atan2(c/s.scaleY,o.x/s.scaleX)),e.originX===f&&e.originY===p&&(n=-n),e.originX===g&&e.originY===d&&(n=-n),m(s)&&(n=-n));var l=h!==n;if(l){var u=s._getTransformedDimensions().x;s.set("skewY",n),b(s,"skewX","scaleX","x",u),O("skewing",E(t,e,i,r))}return l}function y(t,e,i,r,n){n=n||{};var s,o,a,c,h,l,u=e.target,f=u.lockScalingX,d=u.lockScalingY,g=n.by,p=k(t,u),v=P(u,g,p),m=e.gestureScale;if(v)return!1;if(m)o=e.scaleX*m,a=e.scaleY*m;else{if(s=A(e,e.originX,e.originY,i,r),h="y"!==g?T(s.x):1,l="x"!==g?T(s.y):1,e.signX||(e.signX=h),e.signY||(e.signY=l),u.lockScalingFlip&&(e.signX!==h||e.signY!==l))return!1;if(c=u._getTransformedDimensions(),p&&!g){var b,_=Math.abs(s.x)+Math.abs(s.y),y=e.original,x=_/(Math.abs(c.x*y.scaleX/u.scaleX)+Math.abs(c.y*y.scaleY/u.scaleY));o=y.scaleX*x,a=y.scaleY*x}else o=Math.abs(s.x*u.scaleX/c.x),a=Math.abs(s.y*u.scaleY/c.y);D(e)&&(o*=2,a*=2),e.signX!==h&&"y"!==g&&(e.originX=w[e.originX],o*=-1,e.signX=h),e.signY!==l&&"x"!==g&&(e.originY=w[e.originY],a*=-1,e.signY=l)}var C=u.scaleX,S=u.scaleY;return g?("x"===g&&u.set("scaleX",o),"y"===g&&u.set("scaleY",a)):(!f&&u.set("scaleX",o),!d&&u.set("scaleY",a)),(b=C!==u.scaleX||S!==u.scaleY)&&O("scaling",E(t,e,i,r)),b}n.scaleCursorStyleHandler=function(t,e,i){var r=k(t,i),n="";if(0!==e.x&&0===e.y?n="x":0===e.x&&0!==e.y&&(n="y"),P(i,n,r))return"not-allowed";var s=a(i,e);return o[s]+"-resize"},n.skewCursorStyleHandler=function(t,e,i){var r="not-allowed";if(0!==e.x&&i.lockSkewingY)return r;if(0!==e.y&&i.lockSkewingX)return r;var n=a(i,e)%4;return s[n]+"-resize"},n.scaleSkewCursorStyleHandler=function(t,e,i){return t[i.canvas.altActionKey]?n.skewCursorStyleHandler(t,e,i):n.scaleCursorStyleHandler(t,e,i)},n.rotationWithSnapping=h(function(t,e,i,r){var n=e,s=n.target,o=s.translateToOriginPoint(s.getCenterPoint(),n.originX,n.originY);if(s.lockRotation)return!1;var a,c=Math.atan2(n.ey-o.y,n.ex-o.x),h=Math.atan2(r-o.y,i-o.x),l=v(h-c+n.theta);if(0<s.snapAngle){var u=s.snapAngle,f=s.snapThreshold||u,d=Math.ceil(l/u)*u,g=Math.floor(l/u)*u;Math.abs(l-g)<f?l=g:Math.abs(l-d)<f&&(l=d)}return l<0&&(l=360+l),l%=360,a=s.angle!==l,s.angle=l,a&&O("rotating",E(t,e,i,r)),a}),n.scalingEqually=h(function(t,e,i,r){return y(t,e,i,r)}),n.scalingX=h(function(t,e,i,r){return y(t,e,i,r,{by:"x"})}),n.scalingY=h(function(t,e,i,r){return y(t,e,i,r,{by:"y"})}),n.scalingYOrSkewingX=function(t,e,i,r){return t[e.target.canvas.altActionKey]?n.skewHandlerX(t,e,i,r):n.scalingY(t,e,i,r)},n.scalingXOrSkewingY=function(t,e,i,r){return t[e.target.canvas.altActionKey]?n.skewHandlerY(t,e,i,r):n.scalingX(t,e,i,r)},n.changeWidth=h(function(t,e,i,r){var n,s=e.target,o=A(e,e.originX,e.originY,i,r),a=s.strokeWidth/(s.strokeUniform?s.scaleX:1),c=D(e)?2:1,h=s.width,l=Math.abs(o.x*c/s.scaleX)-a;return s.set("width",Math.max(l,0)),(n=h!==l)&&O("resizing",E(t,e,i,r)),n}),n.skewHandlerX=function(t,e,i,r){var n,s=e.target,o=s.skewX,a=e.originY;return!s.lockSkewingX&&(0===o?n=0<A(e,c,c,i,r).x?f:g:(0<o&&(n=a===d?f:g),o<0&&(n=a===d?g:f),m(s)&&(n=n===f?g:f)),e.originX=n,h(u)(t,e,i,r))},n.skewHandlerY=function(t,e,i,r){var n,s=e.target,o=s.skewY,a=e.originX;return!s.lockSkewingY&&(0===o?n=0<A(e,c,c,i,r).y?d:p:(0<o&&(n=a===f?d:p),o<0&&(n=a===f?p:d),m(s)&&(n=n===d?p:d)),e.originY=n,h(_)(t,e,i,r))},n.dragHandler=function(t,e,i,r){var n=e.target,s=i-e.offsetX,o=r-e.offsetY,a=!n.get("lockMovementX")&&n.left!==s,c=!n.get("lockMovementY")&&n.top!==o;return a&&n.set("left",s),c&&n.set("top",o),(a||c)&&O("moving",E(t,e,i,r)),a||c},n.scaleOrSkewActionName=function(t,e,i){var r=t[i.canvas.altActionKey];return 0===e.x?r?"skewX":"scaleY":0===e.y?r?"skewY":"scaleX":void 0},n.rotationStyleHandler=function(t,e,i){return i.lockRotation?"not-allowed":e.cursorStyle},n.fireEvent=O,n.wrapWithFixedAnchor=h,n.getLocalPoint=A,l.controlsUtils=n}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),l=e.util.degreesToRadians,i=e.controlsUtils;i.renderCircleControl=function(t,e,i,r,n){var s=(r=r||{}).cornerSize||n.cornerSize,o=void 0!==r.transparentCorners?r.transparentCorners:this.transparentCorners,a=o?"stroke":"fill",c=!o&&(r.cornerStrokeColor||n.cornerStrokeColor);t.save(),t.fillStyle=r.cornerColor||n.cornerColor,t.strokeStyle=r.cornerStrokeColor||n.cornerStrokeColor,t.lineWidth=1,t.beginPath(),t.arc(e,i,s/2,0,2*Math.PI,!1),t[a](),c&&t.stroke(),t.restore()},i.renderSquareControl=function(t,e,i,r,n){var s=(r=r||{}).cornerSize||n.cornerSize,o=void 0!==r.transparentCorners?r.transparentCorners:n.transparentCorners,a=o?"stroke":"fill",c=!o&&(r.cornerStrokeColor||n.cornerStrokeColor),h=s/2;t.save(),t.fillStyle=r.cornerColor||n.cornerColor,t.strokeStyle=r.strokeCornerColor||n.strokeCornerColor,t.lineWidth=1,t.translate(e,i),t.rotate(l(n.angle)),t[a+"Rect"](-h,-h,s,s),c&&t.strokeRect(-h,-h,s,s),t.restore()}}( true?exports:undefined),function(t){"use strict";var s=t.fabric||(t.fabric={});s.Control=function(t){for(var e in t)this[e]=t[e]},s.Control.prototype={visible:!0,actionName:"scale",angle:0,x:0,y:0,offsetX:0,offsetY:0,cursorStyle:"crosshair",withConnection:!1,actionHandler:function(){},mouseDownHandler:function(){},mouseUpHandler:function(){},getActionHandler:function(){return this.actionHandler},getMouseDownHandler:function(){return this.mouseDownHandler},getMouseUpHandler:function(){return this.mouseUpHandler},cursorStyleHandler:function(t,e){return e.cursorStyle},getActionName:function(t,e){return e.actionName},getVisibility:function(t,e){var i=t._controlsVisibility;return i&&void 0!==i[e]?i[e]:this.visible},setVisibility:function(t){this.visible=t},positionHandler:function(t,e){return s.util.transformPoint({x:this.x*t.x+this.offsetX,y:this.y*t.y+this.offsetY},e)},render:function(t,e,i,r,n){switch((r=r||{}).cornerStyle||n.cornerStyle){case"circle":s.controlsUtils.renderCircleControl.call(this,t,e,i,r,n);break;default:s.controlsUtils.renderSquareControl.call(this,t,e,i,r,n)}}}}( true?exports:undefined),function(){function C(t,e){var i,r,n,s,o=t.getAttribute("style"),a=t.getAttribute("offset")||0;if(a=(a=parseFloat(a)/(/%$/.test(a)?100:1))<0?0:1<a?1:a,o){var c=o.split(/\s*;\s*/);for(""===c[c.length-1]&&c.pop(),s=c.length;s--;){var h=c[s].split(/\s*:\s*/),l=h[0].trim(),u=h[1].trim();"stop-color"===l?i=u:"stop-opacity"===l&&(n=u)}}return i||(i=t.getAttribute("stop-color")||"rgb(0,0,0)"),n||(n=t.getAttribute("stop-opacity")),r=(i=new fabric.Color(i)).getAlpha(),n=isNaN(parseFloat(n))?1:parseFloat(n),n*=r*e,{offset:a,color:i.toRgb(),opacity:n}}var m=fabric.util.object.clone;fabric.Gradient=fabric.util.createClass({offsetX:0,offsetY:0,gradientTransform:null,gradientUnits:"pixels",type:"linear",initialize:function(e){e||(e={}),e.coords||(e.coords={});var t,i=this;Object.keys(e).forEach(function(t){i[t]=e[t]}),this.id?this.id+="_"+fabric.Object.__uid++:this.id=fabric.Object.__uid++,t={x1:e.coords.x1||0,y1:e.coords.y1||0,x2:e.coords.x2||0,y2:e.coords.y2||0},"radial"===this.type&&(t.r1=e.coords.r1||0,t.r2=e.coords.r2||0),this.coords=t,this.colorStops=e.colorStops.slice()},addColorStop:function(t){for(var e in t){var i=new fabric.Color(t[e]);this.colorStops.push({offset:parseFloat(e),color:i.toRgb(),opacity:i.getAlpha()})}return this},toObject:function(t){var e={type:this.type,coords:this.coords,colorStops:this.colorStops,offsetX:this.offsetX,offsetY:this.offsetY,gradientUnits:this.gradientUnits,gradientTransform:this.gradientTransform?this.gradientTransform.concat():this.gradientTransform};return fabric.util.populateWithProperties(this,e,t),e},toSVG:function(t,e){var i,r,n,s,o=m(this.coords,!0),a=(e=e||{},m(this.colorStops,!0)),c=o.r1>o.r2,h=this.gradientTransform?this.gradientTransform.concat():fabric.iMatrix.concat(),l=-this.offsetX,u=-this.offsetY,f=!!e.additionalTransform,d="pixels"===this.gradientUnits?"userSpaceOnUse":"objectBoundingBox";if(a.sort(function(t,e){return t.offset-e.offset}),"objectBoundingBox"===d?(l/=t.width,u/=t.height):(l+=t.width/2,u+=t.height/2),"path"===t.type&&(l-=t.pathOffset.x,u-=t.pathOffset.y),h[4]-=l,h[5]-=u,s='id="SVGID_'+this.id+'" gradientUnits="'+d+'"',s+=' gradientTransform="'+(f?e.additionalTransform+" ":"")+fabric.util.matrixToSVG(h)+'" ',"linear"===this.type?n=["<linearGradient ",s,' x1="',o.x1,'" y1="',o.y1,'" x2="',o.x2,'" y2="',o.y2,'">\n']:"radial"===this.type&&(n=["<radialGradient ",s,' cx="',c?o.x1:o.x2,'" cy="',c?o.y1:o.y2,'" r="',c?o.r1:o.r2,'" fx="',c?o.x2:o.x1,'" fy="',c?o.y2:o.y1,'">\n']),"radial"===this.type){if(c)for((a=a.concat()).reverse(),i=0,r=a.length;i<r;i++)a[i].offset=1-a[i].offset;var g=Math.min(o.r1,o.r2);if(0<g){var p=g/Math.max(o.r1,o.r2);for(i=0,r=a.length;i<r;i++)a[i].offset+=p*(1-a[i].offset)}}for(i=0,r=a.length;i<r;i++){var v=a[i];n.push("<stop ",'offset="',100*v.offset+"%",'" style="stop-color:',v.color,void 0!==v.opacity?";stop-opacity: "+v.opacity:";",'"/>\n')}return n.push("linear"===this.type?"</linearGradient>\n":"</radialGradient>\n"),n.join("")},toLive:function(t){var e,i,r,n=fabric.util.object.clone(this.coords);if(this.type){for("linear"===this.type?e=t.createLinearGradient(n.x1,n.y1,n.x2,n.y2):"radial"===this.type&&(e=t.createRadialGradient(n.x1,n.y1,n.r1,n.x2,n.y2,n.r2)),i=0,r=this.colorStops.length;i<r;i++){var s=this.colorStops[i].color,o=this.colorStops[i].opacity,a=this.colorStops[i].offset;void 0!==o&&(s=new fabric.Color(s).setAlpha(o).toRgba()),e.addColorStop(a,s)}return e}}}),fabric.util.object.extend(fabric.Gradient,{fromElement:function(t,e,i,r){var n=parseFloat(i)/(/%$/.test(i)?100:1);n=n<0?0:1<n?1:n,isNaN(n)&&(n=1);var s,o,a,c,h,l,u,f,d,g,p,v=t.getElementsByTagName("stop"),m="userSpaceOnUse"===t.getAttribute("gradientUnits")?"pixels":"percentage",b=t.getAttribute("gradientTransform")||"",_=[],y=0,x=0;for("linearGradient"===t.nodeName||"LINEARGRADIENT"===t.nodeName?(s="linear",o={x1:(l=t).getAttribute("x1")||0,y1:l.getAttribute("y1")||0,x2:l.getAttribute("x2")||"100%",y2:l.getAttribute("y2")||0}):(s="radial",o={x1:(h=t).getAttribute("fx")||h.getAttribute("cx")||"50%",y1:h.getAttribute("fy")||h.getAttribute("cy")||"50%",r1:0,x2:h.getAttribute("cx")||"50%",y2:h.getAttribute("cy")||"50%",r2:h.getAttribute("r")||"50%"}),a=v.length;a--;)_.push(C(v[a],n));return c=fabric.parseTransformAttribute(b),u=o,f=r,d=m,Object.keys(u).forEach(function(t){"Infinity"===(g=u[t])?p=1:"-Infinity"===g?p=0:(p=parseFloat(u[t],10),"string"==typeof g&&/^(\d+\.\d+)%|(\d+)%$/.test(g)&&(p*=.01,"pixels"===d&&("x1"!==t&&"x2"!==t&&"r2"!==t||(p*=f.viewBoxWidth||f.width),"y1"!==t&&"y2"!==t||(p*=f.viewBoxHeight||f.height)))),u[t]=p}),"pixels"===m&&(y=-e.left,x=-e.top),new fabric.Gradient({id:t.getAttribute("id"),type:s,coords:o,colorStops:_,gradientUnits:m,gradientTransform:c,offsetX:y,offsetY:x})}})}(),function(){"use strict";var n=fabric.util.toFixed;fabric.Pattern=fabric.util.createClass({repeat:"repeat",offsetX:0,offsetY:0,crossOrigin:"",patternTransform:null,initialize:function(t,i){if(t||(t={}),this.id=fabric.Object.__uid++,this.setOptions(t),!t.source||t.source&&"string"!=typeof t.source)i&&i(this);else{var r=this;this.source=fabric.util.createImage(),fabric.util.loadImage(t.source,function(t,e){r.source=t,i&&i(r,e)},null,this.crossOrigin)}},toObject:function(t){var e,i,r=fabric.Object.NUM_FRACTION_DIGITS;return"string"==typeof this.source.src?e=this.source.src:"object"==typeof this.source&&this.source.toDataURL&&(e=this.source.toDataURL()),i={type:"pattern",source:e,repeat:this.repeat,crossOrigin:this.crossOrigin,offsetX:n(this.offsetX,r),offsetY:n(this.offsetY,r),patternTransform:this.patternTransform?this.patternTransform.concat():null},fabric.util.populateWithProperties(this,i,t),i},toSVG:function(t){var e="function"==typeof this.source?this.source():this.source,i=e.width/t.width,r=e.height/t.height,n=this.offsetX/t.width,s=this.offsetY/t.height,o="";return"repeat-x"!==this.repeat&&"no-repeat"!==this.repeat||(r=1,s&&(r+=Math.abs(s))),"repeat-y"!==this.repeat&&"no-repeat"!==this.repeat||(i=1,n&&(i+=Math.abs(n))),e.src?o=e.src:e.toDataURL&&(o=e.toDataURL()),'<pattern id="SVGID_'+this.id+'" x="'+n+'" y="'+s+'" width="'+i+'" height="'+r+'">\n<image x="0" y="0" width="'+e.width+'" height="'+e.height+'" xlink:href="'+o+'"></image>\n</pattern>\n'},setOptions:function(t){for(var e in t)this[e]=t[e]},toLive:function(t){var e=this.source;if(!e)return"";if(void 0!==e.src){if(!e.complete)return"";if(0===e.naturalWidth||0===e.naturalHeight)return""}return t.createPattern(e,this.repeat)}})}(),function(t){"use strict";var o=t.fabric||(t.fabric={}),a=o.util.toFixed;o.Shadow?o.warn("fabric.Shadow is already defined."):(o.Shadow=o.util.createClass({color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,nonScaling:!1,initialize:function(t){for(var e in"string"==typeof t&&(t=this._parseShadow(t)),t)this[e]=t[e];this.id=o.Object.__uid++},_parseShadow:function(t){var e=t.trim(),i=o.Shadow.reOffsetsAndBlur.exec(e)||[];return{color:(e.replace(o.Shadow.reOffsetsAndBlur,"")||"rgb(0,0,0)").trim(),offsetX:parseInt(i[1],10)||0,offsetY:parseInt(i[2],10)||0,blur:parseInt(i[3],10)||0}},toString:function(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")},toSVG:function(t){var e=40,i=40,r=o.Object.NUM_FRACTION_DIGITS,n=o.util.rotateVector({x:this.offsetX,y:this.offsetY},o.util.degreesToRadians(-t.angle)),s=new o.Color(this.color);return t.width&&t.height&&(e=100*a((Math.abs(n.x)+this.blur)/t.width,r)+20,i=100*a((Math.abs(n.y)+this.blur)/t.height,r)+20),t.flipX&&(n.x*=-1),t.flipY&&(n.y*=-1),'<filter id="SVGID_'+this.id+'" y="-'+i+'%" height="'+(100+2*i)+'%" x="-'+e+'%" width="'+(100+2*e)+'%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="'+a(this.blur?this.blur/2:0,r)+'"></feGaussianBlur>\n\t<feOffset dx="'+a(n.x,r)+'" dy="'+a(n.y,r)+'" result="oBlur" ></feOffset>\n\t<feFlood flood-color="'+s.toRgb()+'" flood-opacity="'+s.getAlpha()+'"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'},toObject:function(){if(this.includeDefaultValues)return{color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke,nonScaling:this.nonScaling};var e={},i=o.Shadow.prototype;return["color","blur","offsetX","offsetY","affectStroke","nonScaling"].forEach(function(t){this[t]!==i[t]&&(e[t]=this[t])},this),e}}),o.Shadow.reOffsetsAndBlur=/(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/)}( true?exports:undefined),function(){"use strict";if(fabric.StaticCanvas)fabric.warn("fabric.StaticCanvas is already defined.");else{var n=fabric.util.object.extend,t=fabric.util.getElementOffset,h=fabric.util.removeFromArray,a=fabric.util.toFixed,s=fabric.util.transformPoint,o=fabric.util.invertTransform,i=fabric.util.getNodeCanvas,r=fabric.util.createCanvasElement,e=new Error("Could not initialize `canvas` element");fabric.StaticCanvas=fabric.util.createClass(fabric.CommonMethods,{initialize:function(t,e){e||(e={}),this.renderAndResetBound=this.renderAndReset.bind(this),this.requestRenderAllBound=this.requestRenderAll.bind(this),this._initStatic(t,e)},backgroundColor:"",backgroundImage:null,overlayColor:"",overlayImage:null,includeDefaultValues:!0,stateful:!1,renderOnAddRemove:!0,controlsAboveOverlay:!1,allowTouchScrolling:!1,imageSmoothingEnabled:!0,viewportTransform:fabric.iMatrix.concat(),backgroundVpt:!0,overlayVpt:!0,enableRetinaScaling:!0,vptCoords:{},skipOffscreen:!0,clipPath:void 0,_initStatic:function(t,e){var i=this.requestRenderAllBound;this._objects=[],this._createLowerCanvas(t),this._initOptions(e),this.interactive||this._initRetinaScaling(),e.overlayImage&&this.setOverlayImage(e.overlayImage,i),e.backgroundImage&&this.setBackgroundImage(e.backgroundImage,i),e.backgroundColor&&this.setBackgroundColor(e.backgroundColor,i),e.overlayColor&&this.setOverlayColor(e.overlayColor,i),this.calcOffset()},_isRetinaScaling:function(){return 1!==fabric.devicePixelRatio&&this.enableRetinaScaling},getRetinaScaling:function(){return this._isRetinaScaling()?fabric.devicePixelRatio:1},_initRetinaScaling:function(){if(this._isRetinaScaling()){var t=fabric.devicePixelRatio;this.__initRetinaScaling(t,this.lowerCanvasEl,this.contextContainer),this.upperCanvasEl&&this.__initRetinaScaling(t,this.upperCanvasEl,this.contextTop)}},__initRetinaScaling:function(t,e,i){e.setAttribute("width",this.width*t),e.setAttribute("height",this.height*t),i.scale(t,t)},calcOffset:function(){return this._offset=t(this.lowerCanvasEl),this},setOverlayImage:function(t,e,i){return this.__setBgOverlayImage("overlayImage",t,e,i)},setBackgroundImage:function(t,e,i){return this.__setBgOverlayImage("backgroundImage",t,e,i)},setOverlayColor:function(t,e){return this.__setBgOverlayColor("overlayColor",t,e)},setBackgroundColor:function(t,e){return this.__setBgOverlayColor("backgroundColor",t,e)},__setBgOverlayImage:function(r,t,n,s){return"string"==typeof t?fabric.util.loadImage(t,function(t,e){if(t){var i=new fabric.Image(t,s);(this[r]=i).canvas=this}n&&n(t,e)},this,s&&s.crossOrigin):(s&&t.setOptions(s),(this[r]=t)&&(t.canvas=this),n&&n(t,!1)),this},__setBgOverlayColor:function(t,e,i){return this[t]=e,this._initGradient(e,t),this._initPattern(e,t,i),this},_createCanvasElement:function(){var t=r();if(!t)throw e;if(t.style||(t.style={}),void 0===t.getContext)throw e;return t},_initOptions:function(t){var e=this.lowerCanvasEl;this._setOptions(t),this.width=this.width||parseInt(e.width,10)||0,this.height=this.height||parseInt(e.height,10)||0,this.lowerCanvasEl.style&&(e.width=this.width,e.height=this.height,e.style.width=this.width+"px",e.style.height=this.height+"px",this.viewportTransform=this.viewportTransform.slice())},_createLowerCanvas:function(t){t&&t.getContext?this.lowerCanvasEl=t:this.lowerCanvasEl=fabric.util.getById(t)||this._createCanvasElement(),fabric.util.addClass(this.lowerCanvasEl,"lower-canvas"),this.interactive&&this._applyCanvasStyle(this.lowerCanvasEl),this.contextContainer=this.lowerCanvasEl.getContext("2d")},getWidth:function(){return this.width},getHeight:function(){return this.height},setWidth:function(t,e){return this.setDimensions({width:t},e)},setHeight:function(t,e){return this.setDimensions({height:t},e)},setDimensions:function(t,e){var i;for(var r in e=e||{},t)i=t[r],e.cssOnly||(this._setBackstoreDimension(r,t[r]),i+="px",this.hasLostContext=!0),e.backstoreOnly||this._setCssDimension(r,i);return this._isCurrentlyDrawing&&this.freeDrawingBrush&&this.freeDrawingBrush._setBrushStyles(),this._initRetinaScaling(),this.calcOffset(),e.cssOnly||this.requestRenderAll(),this},_setBackstoreDimension:function(t,e){return this.lowerCanvasEl[t]=e,this.upperCanvasEl&&(this.upperCanvasEl[t]=e),this.cacheCanvasEl&&(this.cacheCanvasEl[t]=e),this[t]=e,this},_setCssDimension:function(t,e){return this.lowerCanvasEl.style[t]=e,this.upperCanvasEl&&(this.upperCanvasEl.style[t]=e),this.wrapperEl&&(this.wrapperEl.style[t]=e),this},getZoom:function(){return this.viewportTransform[0]},setViewportTransform:function(t){var e,i,r,n=this._activeObject;for(this.viewportTransform=t,i=0,r=this._objects.length;i<r;i++)(e=this._objects[i]).group||e.setCoords(!0);return n&&n.setCoords(),this.calcViewportBoundaries(),this.renderOnAddRemove&&this.requestRenderAll(),this},zoomToPoint:function(t,e){var i=t,r=this.viewportTransform.slice(0);t=s(t,o(this.viewportTransform)),r[0]=e,r[3]=e;var n=s(t,r);return r[4]+=i.x-n.x,r[5]+=i.y-n.y,this.setViewportTransform(r)},setZoom:function(t){return this.zoomToPoint(new fabric.Point(0,0),t),this},absolutePan:function(t){var e=this.viewportTransform.slice(0);return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)},relativePan:function(t){return this.absolutePan(new fabric.Point(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))},getElement:function(){return this.lowerCanvasEl},_onObjectAdded:function(t){this.stateful&&t.setupState(),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added")},_onObjectRemoved:function(t){this.fire("object:removed",{target:t}),t.fire("removed"),delete t.canvas},clearContext:function(t){return t.clearRect(0,0,this.width,this.height),this},getContext:function(){return this.contextContainer},clear:function(){return this._objects.length=0,this.backgroundImage=null,this.overlayImage=null,this.backgroundColor="",this.overlayColor="",this._hasITextHandlers&&(this.off("mouse:up",this._mouseUpITextHandler),this._iTextInstances=null,this._hasITextHandlers=!1),this.clearContext(this.contextContainer),this.fire("canvas:cleared"),this.renderOnAddRemove&&this.requestRenderAll(),this},renderAll:function(){var t=this.contextContainer;return this.renderCanvas(t,this._objects),this},renderAndReset:function(){this.isRendering=0,this.renderAll()},requestRenderAll:function(){return this.isRendering||(this.isRendering=fabric.util.requestAnimFrame(this.renderAndResetBound)),this},calcViewportBoundaries:function(){var t={},e=this.width,i=this.height,r=o(this.viewportTransform);return t.tl=s({x:0,y:0},r),t.br=s({x:e,y:i},r),t.tr=new fabric.Point(t.br.x,t.tl.y),t.bl=new fabric.Point(t.tl.x,t.br.y),this.vptCoords=t},cancelRequestedRender:function(){this.isRendering&&(fabric.util.cancelAnimFrame(this.isRendering),this.isRendering=0)},renderCanvas:function(t,e){var i=this.viewportTransform,r=this.clipPath;this.cancelRequestedRender(),this.calcViewportBoundaries(),this.clearContext(t),fabric.util.setImageSmoothing(t,this.imageSmoothingEnabled),this.fire("before:render",{ctx:t}),this._renderBackground(t),t.save(),t.transform(i[0],i[1],i[2],i[3],i[4],i[5]),this._renderObjects(t,e),t.restore(),!this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),r&&(r.canvas=this,r.shouldCache(),r._transformDone=!0,r.renderCache({forClipping:!0}),this.drawClipPathOnCanvas(t)),this._renderOverlay(t),this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),this.fire("after:render",{ctx:t})},drawClipPathOnCanvas:function(t){var e=this.viewportTransform,i=this.clipPath;t.save(),t.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t.globalCompositeOperation="destination-in",i.transform(t),t.scale(1/i.zoomX,1/i.zoomY),t.drawImage(i._cacheCanvas,-i.cacheTranslationX,-i.cacheTranslationY),t.restore()},_renderObjects:function(t,e){var i,r;for(i=0,r=e.length;i<r;++i)e[i]&&e[i].render(t)},_renderBackgroundOrOverlay:function(t,e){var i=this[e+"Color"],r=this[e+"Image"],n=this.viewportTransform,s=this[e+"Vpt"];if(i||r){if(i){t.save(),t.beginPath(),t.moveTo(0,0),t.lineTo(this.width,0),t.lineTo(this.width,this.height),t.lineTo(0,this.height),t.closePath(),t.fillStyle=i.toLive?i.toLive(t,this):i,s&&t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),t.transform(1,0,0,1,i.offsetX||0,i.offsetY||0);var o=i.gradientTransform||i.patternTransform;o&&t.transform(o[0],o[1],o[2],o[3],o[4],o[5]),t.fill(),t.restore()}r&&(t.save(),s&&t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),r.render(t),t.restore())}},_renderBackground:function(t){this._renderBackgroundOrOverlay(t,"background")},_renderOverlay:function(t){this._renderBackgroundOrOverlay(t,"overlay")},getCenter:function(){return{top:this.height/2,left:this.width/2}},centerObjectH:function(t){return this._centerObject(t,new fabric.Point(this.getCenter().left,t.getCenterPoint().y))},centerObjectV:function(t){return this._centerObject(t,new fabric.Point(t.getCenterPoint().x,this.getCenter().top))},centerObject:function(t){var e=this.getCenter();return this._centerObject(t,new fabric.Point(e.left,e.top))},viewportCenterObject:function(t){var e=this.getVpCenter();return this._centerObject(t,e)},viewportCenterObjectH:function(t){var e=this.getVpCenter();return this._centerObject(t,new fabric.Point(e.x,t.getCenterPoint().y)),this},viewportCenterObjectV:function(t){var e=this.getVpCenter();return this._centerObject(t,new fabric.Point(t.getCenterPoint().x,e.y))},getVpCenter:function(){var t=this.getCenter(),e=o(this.viewportTransform);return s({x:t.left,y:t.top},e)},_centerObject:function(t,e){return t.setPositionByOrigin(e,"center","center"),t.setCoords(),this.renderOnAddRemove&&this.requestRenderAll(),this},toDatalessJSON:function(t){return this.toDatalessObject(t)},toObject:function(t){return this._toObjectMethod("toObject",t)},toDatalessObject:function(t){return this._toObjectMethod("toDatalessObject",t)},_toObjectMethod:function(t,e){var i=this.clipPath,r={version:fabric.version,objects:this._toObjects(t,e)};return i&&(r.clipPath=this._toObject(this.clipPath,t,e)),n(r,this.__serializeBgOverlay(t,e)),fabric.util.populateWithProperties(this,r,e),r},_toObjects:function(e,i){return this._objects.filter(function(t){return!t.excludeFromExport}).map(function(t){return this._toObject(t,e,i)},this)},_toObject:function(t,e,i){var r;this.includeDefaultValues||(r=t.includeDefaultValues,t.includeDefaultValues=!1);var n=t[e](i);return this.includeDefaultValues||(t.includeDefaultValues=r),n},__serializeBgOverlay:function(t,e){var i={},r=this.backgroundImage,n=this.overlayImage;return this.backgroundColor&&(i.background=this.backgroundColor.toObject?this.backgroundColor.toObject(e):this.backgroundColor),this.overlayColor&&(i.overlay=this.overlayColor.toObject?this.overlayColor.toObject(e):this.overlayColor),r&&!r.excludeFromExport&&(i.backgroundImage=this._toObject(r,t,e)),n&&!n.excludeFromExport&&(i.overlayImage=this._toObject(n,t,e)),i},svgViewportTransformation:!0,toSVG:function(t,e){t||(t={}),t.reviver=e;var i=[];return this._setSVGPreamble(i,t),this._setSVGHeader(i,t),this.clipPath&&i.push('<g clip-path="url(#'+this.clipPath.clipPathId+')" >\n'),this._setSVGBgOverlayColor(i,"background"),this._setSVGBgOverlayImage(i,"backgroundImage",e),this._setSVGObjects(i,e),this.clipPath&&i.push("</g>\n"),this._setSVGBgOverlayColor(i,"overlay"),this._setSVGBgOverlayImage(i,"overlayImage",e),i.push("</svg>"),i.join("")},_setSVGPreamble:function(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",'" standalone="no" ?>\n','<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ','"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')},_setSVGHeader:function(t,e){var i,r=e.width||this.width,n=e.height||this.height,s='viewBox="0 0 '+this.width+" "+this.height+'" ',o=fabric.Object.NUM_FRACTION_DIGITS;e.viewBox?s='viewBox="'+e.viewBox.x+" "+e.viewBox.y+" "+e.viewBox.width+" "+e.viewBox.height+'" ':this.svgViewportTransformation&&(i=this.viewportTransform,s='viewBox="'+a(-i[4]/i[0],o)+" "+a(-i[5]/i[3],o)+" "+a(this.width/i[0],o)+" "+a(this.height/i[3],o)+'" '),t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',r,'" ','height="',n,'" ',s,'xml:space="preserve">\n',"<desc>Created with Fabric.js ",fabric.version,"</desc>\n","<defs>\n",this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),this.createSVGClipPathMarkup(e),"</defs>\n")},createSVGClipPathMarkup:function(t){var e=this.clipPath;return e?(e.clipPathId="CLIPPATH_"+fabric.Object.__uid++,'<clipPath id="'+e.clipPathId+'" >\n'+this.clipPath.toClipPathSVG(t.reviver)+"</clipPath>\n"):""},createSVGRefElementsMarkup:function(){var s=this;return["background","overlay"].map(function(t){var e=s[t+"Color"];if(e&&e.toLive){var i=s[t+"Vpt"],r=s.viewportTransform,n={width:s.width/(i?r[0]:1),height:s.height/(i?r[3]:1)};return e.toSVG(n,{additionalTransform:i?fabric.util.matrixToSVG(r):""})}}).join("")},createSVGFontFacesMarkup:function(){var t,e,i,r,n,s,o,a,c="",h={},l=fabric.fontPaths,u=[];for(this._objects.forEach(function t(e){u.push(e),e._objects&&e._objects.forEach(t)}),o=0,a=u.length;o<a;o++)if(e=(t=u[o]).fontFamily,-1!==t.type.indexOf("text")&&!h[e]&&l[e]&&(h[e]=!0,t.styles))for(n in i=t.styles)for(s in r=i[n])!h[e=r[s].fontFamily]&&l[e]&&(h[e]=!0);for(var f in h)c+=["\t\t@font-face {\n","\t\t\tfont-family: '",f,"';\n","\t\t\tsrc: url('",l[f],"');\n","\t\t}\n"].join("");return c&&(c=['\t<style type="text/css">',"<![CDATA[\n",c,"]]>","</style>\n"].join("")),c},_setSVGObjects:function(t,e){var i,r,n,s=this._objects;for(r=0,n=s.length;r<n;r++)(i=s[r]).excludeFromExport||this._setSVGObject(t,i,e)},_setSVGObject:function(t,e,i){t.push(e.toSVG(i))},_setSVGBgOverlayImage:function(t,e,i){this[e]&&!this[e].excludeFromExport&&this[e].toSVG&&t.push(this[e].toSVG(i))},_setSVGBgOverlayColor:function(t,e){var i=this[e+"Color"],r=this.viewportTransform,n=this.width,s=this.height;if(i)if(i.toLive){var o=i.repeat,a=fabric.util.invertTransform(r),c=this[e+"Vpt"]?fabric.util.matrixToSVG(a):"";t.push('<rect transform="'+c+" translate(",n/2,",",s/2,')"',' x="',i.offsetX-n/2,'" y="',i.offsetY-s/2,'" ','width="',"repeat-y"===o||"no-repeat"===o?i.source.width:n,'" height="',"repeat-x"===o||"no-repeat"===o?i.source.height:s,'" fill="url(#SVGID_'+i.id+')"',"></rect>\n")}else t.push('<rect x="0" y="0" width="100%" height="100%" ','fill="',i,'"',"></rect>\n")},sendToBack:function(t){if(!t)return this;var e,i,r,n=this._activeObject;if(t===n&&"activeSelection"===t.type)for(e=(r=n._objects).length;e--;)i=r[e],h(this._objects,i),this._objects.unshift(i);else h(this._objects,t),this._objects.unshift(t);return this.renderOnAddRemove&&this.requestRenderAll(),this},bringToFront:function(t){if(!t)return this;var e,i,r,n=this._activeObject;if(t===n&&"activeSelection"===t.type)for(r=n._objects,e=0;e<r.length;e++)i=r[e],h(this._objects,i),this._objects.push(i);else h(this._objects,t),this._objects.push(t);return this.renderOnAddRemove&&this.requestRenderAll(),this},sendBackwards:function(t,e){if(!t)return this;var i,r,n,s,o,a=this._activeObject,c=0;if(t===a&&"activeSelection"===t.type)for(o=a._objects,i=0;i<o.length;i++)r=o[i],0+c<(n=this._objects.indexOf(r))&&(s=n-1,h(this._objects,r),this._objects.splice(s,0,r)),c++;else 0!==(n=this._objects.indexOf(t))&&(s=this._findNewLowerIndex(t,n,e),h(this._objects,t),this._objects.splice(s,0,t));return this.renderOnAddRemove&&this.requestRenderAll(),this},_findNewLowerIndex:function(t,e,i){var r,n;if(i)for(n=(r=e)-1;0<=n;--n){if(t.intersectsWithObject(this._objects[n])||t.isContainedWithinObject(this._objects[n])||this._objects[n].isContainedWithinObject(t)){r=n;break}}else r=e-1;return r},bringForward:function(t,e){if(!t)return this;var i,r,n,s,o,a=this._activeObject,c=0;if(t===a&&"activeSelection"===t.type)for(i=(o=a._objects).length;i--;)r=o[i],(n=this._objects.indexOf(r))<this._objects.length-1-c&&(s=n+1,h(this._objects,r),this._objects.splice(s,0,r)),c++;else(n=this._objects.indexOf(t))!==this._objects.length-1&&(s=this._findNewUpperIndex(t,n,e),h(this._objects,t),this._objects.splice(s,0,t));return this.renderOnAddRemove&&this.requestRenderAll(),this},_findNewUpperIndex:function(t,e,i){var r,n,s;if(i)for(n=(r=e)+1,s=this._objects.length;n<s;++n){if(t.intersectsWithObject(this._objects[n])||t.isContainedWithinObject(this._objects[n])||this._objects[n].isContainedWithinObject(t)){r=n;break}}else r=e+1;return r},moveTo:function(t,e){return h(this._objects,t),this._objects.splice(e,0,t),this.renderOnAddRemove&&this.requestRenderAll()},dispose:function(){return this.isRendering&&(fabric.util.cancelAnimFrame(this.isRendering),this.isRendering=0),this.forEachObject(function(t){t.dispose&&t.dispose()}),this._objects=[],this.backgroundImage&&this.backgroundImage.dispose&&this.backgroundImage.dispose(),this.backgroundImage=null,this.overlayImage&&this.overlayImage.dispose&&this.overlayImage.dispose(),this.overlayImage=null,this._iTextInstances=null,this.contextContainer=null,fabric.util.cleanUpJsdomNode(this.lowerCanvasEl),this.lowerCanvasEl=void 0,this},toString:function(){return"#<fabric.Canvas ("+this.complexity()+"): { objects: "+this._objects.length+" }>"}}),n(fabric.StaticCanvas.prototype,fabric.Observable),n(fabric.StaticCanvas.prototype,fabric.Collection),n(fabric.StaticCanvas.prototype,fabric.DataURLExporter),n(fabric.StaticCanvas,{EMPTY_JSON:'{"objects": [], "background": "white"}',supports:function(t){var e=r();if(!e||!e.getContext)return null;var i=e.getContext("2d");if(!i)return null;switch(t){case"setLineDash":return void 0!==i.setLineDash;default:return null}}}),fabric.StaticCanvas.prototype.toJSON=fabric.StaticCanvas.prototype.toObject,fabric.isLikelyNode&&(fabric.StaticCanvas.prototype.createPNGStream=function(){var t=i(this.lowerCanvasEl);return t&&t.createPNGStream()},fabric.StaticCanvas.prototype.createJPEGStream=function(t){var e=i(this.lowerCanvasEl);return e&&e.createJPEGStream(t)})}}(),fabric.BaseBrush=fabric.util.createClass({color:"rgb(0, 0, 0)",width:1,shadow:null,strokeLineCap:"round",strokeLineJoin:"round",strokeMiterLimit:10,strokeDashArray:null,_setBrushStyles:function(){var t=this.canvas.contextTop;t.strokeStyle=this.color,t.lineWidth=this.width,t.lineCap=this.strokeLineCap,t.miterLimit=this.strokeMiterLimit,t.lineJoin=this.strokeLineJoin,fabric.StaticCanvas.supports("setLineDash")&&t.setLineDash(this.strokeDashArray||[])},_saveAndTransform:function(t){var e=this.canvas.viewportTransform;t.save(),t.transform(e[0],e[1],e[2],e[3],e[4],e[5])},_setShadow:function(){if(this.shadow){var t=this.canvas,e=this.shadow,i=t.contextTop,r=t.getZoom();t&&t._isRetinaScaling()&&(r*=fabric.devicePixelRatio),i.shadowColor=e.color,i.shadowBlur=e.blur*r,i.shadowOffsetX=e.offsetX*r,i.shadowOffsetY=e.offsetY*r}},needsFullRender:function(){return new fabric.Color(this.color).getAlpha()<1||!!this.shadow},_resetShadow:function(){var t=this.canvas.contextTop;t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0}}),fabric.PencilBrush=fabric.util.createClass(fabric.BaseBrush,{decimate:.4,initialize:function(t){this.canvas=t,this._points=[]},_drawSegment:function(t,e,i){var r=e.midPointFrom(i);return t.quadraticCurveTo(e.x,e.y,r.x,r.y),r},onMouseDown:function(t,e){this.canvas._isMainEvent(e.e)&&(this._prepareForDrawing(t),this._captureDrawingPath(t),this._render())},onMouseMove:function(t,e){if(this.canvas._isMainEvent(e.e)&&this._captureDrawingPath(t)&&1<this._points.length)if(this.needsFullRender())this.canvas.clearContext(this.canvas.contextTop),this._render();else{var i=this._points,r=i.length,n=this.canvas.contextTop;this._saveAndTransform(n),this.oldEnd&&(n.beginPath(),n.moveTo(this.oldEnd.x,this.oldEnd.y)),this.oldEnd=this._drawSegment(n,i[r-2],i[r-1],!0),n.stroke(),n.restore()}},onMouseUp:function(t){return!this.canvas._isMainEvent(t.e)||(this.oldEnd=void 0,this._finalizeAndAddPath(),!1)},_prepareForDrawing:function(t){var e=new fabric.Point(t.x,t.y);this._reset(),this._addPoint(e),this.canvas.contextTop.moveTo(e.x,e.y)},_addPoint:function(t){return!(1<this._points.length&&t.eq(this._points[this._points.length-1])||(this._points.push(t),0))},_reset:function(){this._points=[],this._setBrushStyles(),this._setShadow()},_captureDrawingPath:function(t){var e=new fabric.Point(t.x,t.y);return this._addPoint(e)},_render:function(){var t,e,i=this.canvas.contextTop,r=this._points[0],n=this._points[1];if(this._saveAndTransform(i),i.beginPath(),2===this._points.length&&r.x===n.x&&r.y===n.y){var s=this.width/1e3;r=new fabric.Point(r.x,r.y),n=new fabric.Point(n.x,n.y),r.x-=s,n.x+=s}for(i.moveTo(r.x,r.y),t=1,e=this._points.length;t<e;t++)this._drawSegment(i,r,n),r=this._points[t],n=this._points[t+1];i.lineTo(r.x,r.y),i.stroke(),i.restore()},convertPointsToSVGPath:function(t){var e,i=[],r=this.width/1e3,n=new fabric.Point(t[0].x,t[0].y),s=new fabric.Point(t[1].x,t[1].y),o=t.length,a=1,c=0,h=2<o;for(h&&(a=t[2].x<s.x?-1:t[2].x===s.x?0:1,c=t[2].y<s.y?-1:t[2].y===s.y?0:1),i.push("M ",n.x-a*r," ",n.y-c*r," "),e=1;e<o;e++){if(!n.eq(s)){var l=n.midPointFrom(s);i.push("Q ",n.x," ",n.y," ",l.x," ",l.y," ")}n=t[e],e+1<t.length&&(s=t[e+1])}return h&&(a=n.x>t[e-2].x?1:n.x===t[e-2].x?0:-1,c=n.y>t[e-2].y?1:n.y===t[e-2].y?0:-1),i.push("L ",n.x+a*r," ",n.y+c*r),i},createPath:function(t){var e=new fabric.Path(t,{fill:null,stroke:this.color,strokeWidth:this.width,strokeLineCap:this.strokeLineCap,strokeMiterLimit:this.strokeMiterLimit,strokeLineJoin:this.strokeLineJoin,strokeDashArray:this.strokeDashArray});return this.shadow&&(this.shadow.affectStroke=!0,e.shadow=new fabric.Shadow(this.shadow)),e},decimatePoints:function(t,e){if(t.length<=2)return t;var i,r=this.canvas.getZoom(),n=Math.pow(e/r,2),s=t.length-1,o=t[0],a=[o];for(i=1;i<s;i++)n<=Math.pow(o.x-t[i].x,2)+Math.pow(o.y-t[i].y,2)&&(o=t[i],a.push(o));return 1===a.length&&a.push(new fabric.Point(a[0].x,a[0].y)),a},_finalizeAndAddPath:function(){this.canvas.contextTop.closePath(),this.decimate&&(this._points=this.decimatePoints(this._points,this.decimate));var t=this.convertPointsToSVGPath(this._points).join("");if("M 0 0 Q 0 0 0 0 L 0 0"!==t){var e=this.createPath(t);this.canvas.clearContext(this.canvas.contextTop),this.canvas.fire("before:path:created",{path:e}),this.canvas.add(e),this.canvas.requestRenderAll(),e.setCoords(),this._resetShadow(),this.canvas.fire("path:created",{path:e})}else this.canvas.requestRenderAll()}}),fabric.CircleBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,initialize:function(t){this.canvas=t,this.points=[]},drawDot:function(t){var e=this.addPoint(t),i=this.canvas.contextTop;this._saveAndTransform(i),this.dot(i,e),i.restore()},dot:function(t,e){t.fillStyle=e.fill,t.beginPath(),t.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),t.closePath(),t.fill()},onMouseDown:function(t){this.points.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.drawDot(t)},_render:function(){var t,e,i=this.canvas.contextTop,r=this.points;for(this._saveAndTransform(i),t=0,e=r.length;t<e;t++)this.dot(i,r[t]);i.restore()},onMouseMove:function(t){this.needsFullRender()?(this.canvas.clearContext(this.canvas.contextTop),this.addPoint(t),this._render()):this.drawDot(t)},onMouseUp:function(){var t,e,i=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;var r=[];for(t=0,e=this.points.length;t<e;t++){var n=this.points[t],s=new fabric.Circle({radius:n.radius,left:n.x,top:n.y,originX:"center",originY:"center",fill:n.fill});this.shadow&&(s.shadow=new fabric.Shadow(this.shadow)),r.push(s)}var o=new fabric.Group(r);o.canvas=this.canvas,this.canvas.fire("before:path:created",{path:o}),this.canvas.add(o),this.canvas.fire("path:created",{path:o}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=i,this.canvas.requestRenderAll()},addPoint:function(t){var e=new fabric.Point(t.x,t.y),i=fabric.util.getRandomInt(Math.max(0,this.width-20),this.width+20)/2,r=new fabric.Color(this.color).setAlpha(fabric.util.getRandomInt(0,100)/100).toRgba();return e.radius=i,e.fill=r,this.points.push(e),e}}),fabric.SprayBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,density:20,dotWidth:1,dotWidthVariance:1,randomOpacity:!1,optimizeOverlapping:!0,initialize:function(t){this.canvas=t,this.sprayChunks=[]},onMouseDown:function(t){this.sprayChunks.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.addSprayChunk(t),this.render(this.sprayChunkPoints)},onMouseMove:function(t){this.addSprayChunk(t),this.render(this.sprayChunkPoints)},onMouseUp:function(){var t=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;for(var e=[],i=0,r=this.sprayChunks.length;i<r;i++)for(var n=this.sprayChunks[i],s=0,o=n.length;s<o;s++){var a=new fabric.Rect({width:n[s].width,height:n[s].width,left:n[s].x+1,top:n[s].y+1,originX:"center",originY:"center",fill:this.color});e.push(a)}this.optimizeOverlapping&&(e=this._getOptimizedRects(e));var c=new fabric.Group(e);this.shadow&&c.set("shadow",new fabric.Shadow(this.shadow)),this.canvas.fire("before:path:created",{path:c}),this.canvas.add(c),this.canvas.fire("path:created",{path:c}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=t,this.canvas.requestRenderAll()},_getOptimizedRects:function(t){var e,i,r,n={};for(i=0,r=t.length;i<r;i++)n[e=t[i].left+""+t[i].top]||(n[e]=t[i]);var s=[];for(e in n)s.push(n[e]);return s},render:function(t){var e,i,r=this.canvas.contextTop;for(r.fillStyle=this.color,this._saveAndTransform(r),e=0,i=t.length;e<i;e++){var n=t[e];void 0!==n.opacity&&(r.globalAlpha=n.opacity),r.fillRect(n.x,n.y,n.width,n.width)}r.restore()},_render:function(){var t,e,i=this.canvas.contextTop;for(i.fillStyle=this.color,this._saveAndTransform(i),t=0,e=this.sprayChunks.length;t<e;t++)this.render(this.sprayChunks[t]);i.restore()},addSprayChunk:function(t){this.sprayChunkPoints=[];var e,i,r,n,s=this.width/2;for(n=0;n<this.density;n++){e=fabric.util.getRandomInt(t.x-s,t.x+s),i=fabric.util.getRandomInt(t.y-s,t.y+s),r=this.dotWidthVariance?fabric.util.getRandomInt(Math.max(1,this.dotWidth-this.dotWidthVariance),this.dotWidth+this.dotWidthVariance):this.dotWidth;var o=new fabric.Point(e,i);o.width=r,this.randomOpacity&&(o.opacity=fabric.util.getRandomInt(0,100)/100),this.sprayChunkPoints.push(o)}this.sprayChunks.push(this.sprayChunkPoints)}}),fabric.PatternBrush=fabric.util.createClass(fabric.PencilBrush,{getPatternSrc:function(){var t=fabric.util.createCanvasElement(),e=t.getContext("2d");return t.width=t.height=25,e.fillStyle=this.color,e.beginPath(),e.arc(10,10,10,0,2*Math.PI,!1),e.closePath(),e.fill(),t},getPatternSrcFunction:function(){return String(this.getPatternSrc).replace("this.color",'"'+this.color+'"')},getPattern:function(){return this.canvas.contextTop.createPattern(this.source||this.getPatternSrc(),"repeat")},_setBrushStyles:function(){this.callSuper("_setBrushStyles"),this.canvas.contextTop.strokeStyle=this.getPattern()},createPath:function(t){var e=this.callSuper("createPath",t),i=e._getLeftTopCoords().scalarAdd(e.strokeWidth/2);return e.stroke=new fabric.Pattern({source:this.source||this.getPatternSrcFunction(),offsetX:-i.x,offsetY:-i.y}),e}}),function(){var h=fabric.util.getPointer,l=fabric.util.degreesToRadians,c=Math.abs,u=fabric.StaticCanvas.supports("setLineDash"),f=fabric.util.isTouchEvent;for(var t in fabric.Canvas=fabric.util.createClass(fabric.StaticCanvas,{initialize:function(t,e){e||(e={}),this.renderAndResetBound=this.renderAndReset.bind(this),this.requestRenderAllBound=this.requestRenderAll.bind(this),this._initStatic(t,e),this._initInteractive(),this._createCacheCanvas()},uniformScaling:!0,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",interactive:!0,selection:!0,selectionKey:"shiftKey",altSelectionKey:null,selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,selectionFullyContained:!1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",rotationCursor:"crosshair",notAllowedCursor:"not-allowed",containerClass:"canvas-container",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,isDrawingMode:!1,preserveObjectStacking:!1,snapAngle:0,snapThreshold:null,stopContextMenu:!1,fireRightClick:!1,fireMiddleClick:!1,targets:[],_hoveredTarget:null,_hoveredTargets:[],_initInteractive:function(){this._currentTransform=null,this._groupSelector=null,this._initWrapperElement(),this._createUpperCanvas(),this._initEventListeners(),this._initRetinaScaling(),this.freeDrawingBrush=fabric.PencilBrush&&new fabric.PencilBrush(this),this.calcOffset()},_chooseObjectsToRender:function(){var t,e,i,r=this.getActiveObjects();if(0<r.length&&!this.preserveObjectStacking){e=[],i=[];for(var n=0,s=this._objects.length;n<s;n++)t=this._objects[n],-1===r.indexOf(t)?e.push(t):i.push(t);1<r.length&&(this._activeObject._objects=i),e.push.apply(e,i)}else e=this._objects;return e},renderAll:function(){!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1),this.hasLostContext&&this.renderTopLayer(this.contextTop);var t=this.contextContainer;return this.renderCanvas(t,this._chooseObjectsToRender()),this},renderTopLayer:function(t){t.save(),this.isDrawingMode&&this._isCurrentlyDrawing&&(this.freeDrawingBrush&&this.freeDrawingBrush._render(),this.contextTopDirty=!0),this.selection&&this._groupSelector&&(this._drawSelection(t),this.contextTopDirty=!0),t.restore()},renderTop:function(){var t=this.contextTop;return this.clearContext(t),this.renderTopLayer(t),this.fire("after:render"),this},_normalizePointer:function(t,e){var i=t.calcTransformMatrix(),r=fabric.util.invertTransform(i),n=this.restorePointerVpt(e);return fabric.util.transformPoint(n,r)},isTargetTransparent:function(t,e,i){if(t.shouldCache()&&t._cacheCanvas&&t!==this._activeObject){var r=this._normalizePointer(t,{x:e,y:i}),n=Math.max(t.cacheTranslationX+r.x*t.zoomX,0),s=Math.max(t.cacheTranslationY+r.y*t.zoomY,0);return fabric.util.isTransparent(t._cacheContext,Math.round(n),Math.round(s),this.targetFindTolerance)}var o=this.contextCache,a=t.selectionBackgroundColor,c=this.viewportTransform;return t.selectionBackgroundColor="",this.clearContext(o),o.save(),o.transform(c[0],c[1],c[2],c[3],c[4],c[5]),t.render(o),o.restore(),t===this._activeObject&&t._renderControls(o,{hasBorders:!1,transparentCorners:!1},{hasBorders:!1}),t.selectionBackgroundColor=a,fabric.util.isTransparent(o,e,i,this.targetFindTolerance)},_isSelectionKeyPressed:function(e){return"[object Array]"===Object.prototype.toString.call(this.selectionKey)?!!this.selectionKey.find(function(t){return!0===e[t]}):e[this.selectionKey]},_shouldClearSelection:function(t,e){var i=this.getActiveObjects(),r=this._activeObject;return!e||e&&r&&1<i.length&&-1===i.indexOf(e)&&r!==e&&!this._isSelectionKeyPressed(t)||e&&!e.evented||e&&!e.selectable&&r&&r!==e},_shouldCenterTransform:function(t,e,i){var r;if(t)return"scale"===e||"scaleX"===e||"scaleY"===e||"resizing"===e?r=this.centeredScaling||t.centeredScaling:"rotate"===e&&(r=this.centeredRotation||t.centeredRotation),r?!i:i},_getOriginFromCorner:function(t,e){var i={x:t.originX,y:t.originY};return"ml"===e||"tl"===e||"bl"===e?i.x="right":"mr"!==e&&"tr"!==e&&"br"!==e||(i.x="left"),"tl"===e||"mt"===e||"tr"===e?i.y="bottom":"bl"===e||"mb"===e||"br"===e?i.y="top":"mtr"===e&&(i.x="center",i.y="center"),i},_getActionFromCorner:function(t,e,i,r){if(!e||!t)return"drag";var n=r.controls[e];return n.getActionName(i,n,r)},_setupCurrentTransform:function(t,e,i){if(e){var r=this.getPointer(t),n=e.__corner,s=i&&n?e.controls[n].getActionHandler():fabric.controlsUtils.dragHandler,o=this._getActionFromCorner(i,n,t,e),a=this._getOriginFromCorner(e,n),c=t[this.centeredKey],h={target:e,action:o,actionHandler:s,corner:n,scaleX:e.scaleX,scaleY:e.scaleY,skewX:e.skewX,skewY:e.skewY,offsetX:r.x-e.left,offsetY:r.y-e.top,originX:a.x,originY:a.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,theta:l(e.angle),width:e.width*e.scaleX,shiftKey:t.shiftKey,altKey:c,original:fabric.util.saveObjectTransform(e)};this._shouldCenterTransform(e,o,c)&&(h.originX="center",h.originY="center"),h.original.originX=a.x,h.original.originY=a.y,this._currentTransform=h,this._beforeTransform(t)}},setCursor:function(t){this.upperCanvasEl.style.cursor=t},_drawSelection:function(t){var e=this._groupSelector,i=e.left,r=e.top,n=c(i),s=c(r);if(this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(e.ex-(0<i?0:-i),e.ey-(0<r?0:-r),n,s)),this.selectionLineWidth&&this.selectionBorderColor)if(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,1<this.selectionDashArray.length&&!u){var o=e.ex+.5-(0<i?0:n),a=e.ey+.5-(0<r?0:s);t.beginPath(),fabric.util.drawDashedLine(t,o,a,o+n,a,this.selectionDashArray),fabric.util.drawDashedLine(t,o,a+s-1,o+n,a+s-1,this.selectionDashArray),fabric.util.drawDashedLine(t,o,a,o,a+s,this.selectionDashArray),fabric.util.drawDashedLine(t,o+n-1,a,o+n-1,a+s,this.selectionDashArray),t.closePath(),t.stroke()}else fabric.Object.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(e.ex+.5-(0<i?0:n),e.ey+.5-(0<r?0:s),n,s)},findTarget:function(t,e){if(!this.skipTargetFind){var i,r,n=this.getPointer(t,!0),s=this._activeObject,o=this.getActiveObjects(),a=f(t);if(this.targets=[],1<o.length&&!e&&s===this._searchPossibleTargets([s],n))return s;if(1===o.length&&s._findTargetCorner(n,a))return s;if(1===o.length&&s===this._searchPossibleTargets([s],n)){if(!this.preserveObjectStacking)return s;i=s,r=this.targets,this.targets=[]}var c=this._searchPossibleTargets(this._objects,n);return t[this.altSelectionKey]&&c&&i&&c!==i&&(c=i,this.targets=r),c}},_checkTarget:function(t,e,i){if(e&&e.visible&&e.evented&&(e.containsPoint(t)||e._findTargetCorner(t))){if(!this.perPixelTargetFind&&!e.perPixelTargetFind||e.isEditing)return!0;if(!this.isTargetTransparent(e,i.x,i.y))return!0}},_searchPossibleTargets:function(t,e){for(var i,r,n=t.length;n--;){var s=t[n],o=s.group?this._normalizePointer(s.group,e):e;if(this._checkTarget(o,s,e)){(i=t[n]).subTargetCheck&&i instanceof fabric.Group&&(r=this._searchPossibleTargets(i._objects,e))&&this.targets.push(r);break}}return i},restorePointerVpt:function(t){return fabric.util.transformPoint(t,fabric.util.invertTransform(this.viewportTransform))},getPointer:function(t,e){if(this._absolutePointer&&!e)return this._absolutePointer;if(this._pointer&&e)return this._pointer;var i,r=h(t),n=this.upperCanvasEl,s=n.getBoundingClientRect(),o=s.width||0,a=s.height||0;o&&a||("top"in s&&"bottom"in s&&(a=Math.abs(s.top-s.bottom)),"right"in s&&"left"in s&&(o=Math.abs(s.right-s.left))),this.calcOffset(),r.x=r.x-this._offset.left,r.y=r.y-this._offset.top,e||(r=this.restorePointerVpt(r));var c=this.getRetinaScaling();return 1!==c&&(r.x/=c,r.y/=c),i=0===o||0===a?{width:1,height:1}:{width:n.width/o,height:n.height/a},{x:r.x*i.width,y:r.y*i.height}},_createUpperCanvas:function(){var t=this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/,""),e=this.lowerCanvasEl,i=this.upperCanvasEl;i?i.className="":(i=this._createCanvasElement(),this.upperCanvasEl=i),fabric.util.addClass(i,"upper-canvas "+t),this.wrapperEl.appendChild(i),this._copyCanvasStyle(e,i),this._applyCanvasStyle(i),this.contextTop=i.getContext("2d")},_createCacheCanvas:function(){this.cacheCanvasEl=this._createCanvasElement(),this.cacheCanvasEl.setAttribute("width",this.width),this.cacheCanvasEl.setAttribute("height",this.height),this.contextCache=this.cacheCanvasEl.getContext("2d")},_initWrapperElement:function(){this.wrapperEl=fabric.util.wrapElement(this.lowerCanvasEl,"div",{class:this.containerClass}),fabric.util.setStyle(this.wrapperEl,{width:this.width+"px",height:this.height+"px",position:"relative"}),fabric.util.makeElementUnselectable(this.wrapperEl)},_applyCanvasStyle:function(t){var e=this.width||t.width,i=this.height||t.height;fabric.util.setStyle(t,{position:"absolute",width:e+"px",height:i+"px",left:0,top:0,"touch-action":this.allowTouchScrolling?"manipulation":"none","-ms-touch-action":this.allowTouchScrolling?"manipulation":"none"}),t.width=e,t.height=i,fabric.util.makeElementUnselectable(t)},_copyCanvasStyle:function(t,e){e.style.cssText=t.style.cssText},getSelectionContext:function(){return this.contextTop},getSelectionElement:function(){return this.upperCanvasEl},getActiveObject:function(){return this._activeObject},getActiveObjects:function(){var t=this._activeObject;return t?"activeSelection"===t.type&&t._objects?t._objects.slice(0):[t]:[]},_onObjectRemoved:function(t){t===this._activeObject&&(this.fire("before:selection:cleared",{target:t}),this._discardActiveObject(),this.fire("selection:cleared",{target:t}),t.fire("deselected")),t===this._hoveredTarget&&(this._hoveredTarget=null,this._hoveredTargets=[]),this.callSuper("_onObjectRemoved",t)},_fireSelectionEvents:function(e,t){var i=!1,r=this.getActiveObjects(),n=[],s=[],o={e:t};e.forEach(function(t){-1===r.indexOf(t)&&(i=!0,t.fire("deselected",o),s.push(t))}),r.forEach(function(t){-1===e.indexOf(t)&&(i=!0,t.fire("selected",o),n.push(t))}),0<e.length&&0<r.length?(o.selected=n,o.deselected=s,o.updated=n[0]||s[0],o.target=this._activeObject,i&&this.fire("selection:updated",o)):0<r.length?(o.selected=n,o.target=this._activeObject,this.fire("selection:created",o)):0<e.length&&(o.deselected=s,this.fire("selection:cleared",o))},setActiveObject:function(t,e){var i=this.getActiveObjects();return this._setActiveObject(t,e),this._fireSelectionEvents(i,e),this},_setActiveObject:function(t,e){return this._activeObject!==t&&(!!this._discardActiveObject(e,t)&&(!t.onSelect({e:e})&&(this._activeObject=t,!0)))},_discardActiveObject:function(t,e){var i=this._activeObject;if(i){if(i.onDeselect({e:t,object:e}))return!1;this._activeObject=null}return!0},discardActiveObject:function(t){var e=this.getActiveObjects(),i=this.getActiveObject();return e.length&&this.fire("before:selection:cleared",{target:i,e:t}),this._discardActiveObject(t),this._fireSelectionEvents(e,t),this},dispose:function(){var t=this.wrapperEl;return this.removeListeners(),t.removeChild(this.upperCanvasEl),t.removeChild(this.lowerCanvasEl),this.contextCache=null,this.contextTop=null,["upperCanvasEl","cacheCanvasEl"].forEach(function(t){fabric.util.cleanUpJsdomNode(this[t]),this[t]=void 0}.bind(this)),t.parentNode&&t.parentNode.replaceChild(this.lowerCanvasEl,this.wrapperEl),delete this.wrapperEl,fabric.StaticCanvas.prototype.dispose.call(this),this},clear:function(){return this.discardActiveObject(),this.clearContext(this.contextTop),this.callSuper("clear")},drawControls:function(t){var e=this._activeObject;e&&e._renderControls(t)},_toObject:function(t,e,i){var r=this._realizeGroupTransformOnObject(t),n=this.callSuper("_toObject",t,e,i);return this._unwindGroupTransformOnObject(t,r),n},_realizeGroupTransformOnObject:function(e){if(e.group&&"activeSelection"===e.group.type&&this._activeObject===e.group){var i={};return["angle","flipX","flipY","left","scaleX","scaleY","skewX","skewY","top"].forEach(function(t){i[t]=e[t]}),this._activeObject.realizeTransform(e),i}return null},_unwindGroupTransformOnObject:function(t,e){e&&t.set(e)},_setSVGObject:function(t,e,i){var r=this._realizeGroupTransformOnObject(e);this.callSuper("_setSVGObject",t,e,i),this._unwindGroupTransformOnObject(e,r)},setViewportTransform:function(t){this.renderOnAddRemove&&this._activeObject&&this._activeObject.isEditing&&this._activeObject.clearContextTop(),fabric.StaticCanvas.prototype.setViewportTransform.call(this,t)}}),fabric.StaticCanvas)"prototype"!==t&&(fabric.Canvas[t]=fabric.StaticCanvas[t])}(),function(){var r=fabric.util.addListener,n=fabric.util.removeListener,s={passive:!1};function l(t,e){return t.button&&t.button===e-1}fabric.util.object.extend(fabric.Canvas.prototype,{mainTouchId:null,_initEventListeners:function(){this.removeListeners(),this._bindEvents(),this.addOrRemove(r,"add")},_getEventPrefix:function(){return this.enablePointerEvents?"pointer":"mouse"},addOrRemove:function(t,e){var i=this.upperCanvasEl,r=this._getEventPrefix();t(fabric.window,"resize",this._onResize),t(i,r+"down",this._onMouseDown),t(i,r+"move",this._onMouseMove,s),t(i,r+"out",this._onMouseOut),t(i,r+"enter",this._onMouseEnter),t(i,"wheel",this._onMouseWheel),t(i,"contextmenu",this._onContextMenu),t(i,"dblclick",this._onDoubleClick),t(i,"dragover",this._onDragOver),t(i,"dragenter",this._onDragEnter),t(i,"dragleave",this._onDragLeave),t(i,"drop",this._onDrop),this.enablePointerEvents||t(i,"touchstart",this._onTouchStart,s),"undefined"!=typeof eventjs&&e in eventjs&&(eventjs[e](i,"gesture",this._onGesture),eventjs[e](i,"drag",this._onDrag),eventjs[e](i,"orientation",this._onOrientationChange),eventjs[e](i,"shake",this._onShake),eventjs[e](i,"longpress",this._onLongPress))},removeListeners:function(){this.addOrRemove(n,"remove");var t=this._getEventPrefix();n(fabric.document,t+"up",this._onMouseUp),n(fabric.document,"touchend",this._onTouchEnd,s),n(fabric.document,t+"move",this._onMouseMove,s),n(fabric.document,"touchmove",this._onMouseMove,s)},_bindEvents:function(){this.eventsBound||(this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onResize=this._onResize.bind(this),this._onGesture=this._onGesture.bind(this),this._onDrag=this._onDrag.bind(this),this._onShake=this._onShake.bind(this),this._onLongPress=this._onLongPress.bind(this),this._onOrientationChange=this._onOrientationChange.bind(this),this._onMouseWheel=this._onMouseWheel.bind(this),this._onMouseOut=this._onMouseOut.bind(this),this._onMouseEnter=this._onMouseEnter.bind(this),this._onContextMenu=this._onContextMenu.bind(this),this._onDoubleClick=this._onDoubleClick.bind(this),this._onDragOver=this._onDragOver.bind(this),this._onDragEnter=this._simpleEventHandler.bind(this,"dragenter"),this._onDragLeave=this._simpleEventHandler.bind(this,"dragleave"),this._onDrop=this._simpleEventHandler.bind(this,"drop"),this.eventsBound=!0)},_onGesture:function(t,e){this.__onTransformGesture&&this.__onTransformGesture(t,e)},_onDrag:function(t,e){this.__onDrag&&this.__onDrag(t,e)},_onMouseWheel:function(t){this.__onMouseWheel(t)},_onMouseOut:function(e){var i=this._hoveredTarget;this.fire("mouse:out",{target:i,e:e}),this._hoveredTarget=null,i&&i.fire("mouseout",{e:e});var r=this;this._hoveredTargets.forEach(function(t){r.fire("mouse:out",{target:i,e:e}),t&&i.fire("mouseout",{e:e})}),this._hoveredTargets=[],this._iTextInstances&&this._iTextInstances.forEach(function(t){t.isEditing&&t.hiddenTextarea.focus()})},_onMouseEnter:function(t){this._currentTransform||this.findTarget(t)||(this.fire("mouse:over",{target:null,e:t}),this._hoveredTarget=null,this._hoveredTargets=[])},_onOrientationChange:function(t,e){this.__onOrientationChange&&this.__onOrientationChange(t,e)},_onShake:function(t,e){this.__onShake&&this.__onShake(t,e)},_onLongPress:function(t,e){this.__onLongPress&&this.__onLongPress(t,e)},_onDragOver:function(t){t.preventDefault();var e=this._simpleEventHandler("dragover",t);this._fireEnterLeaveEvents(e,t)},_onContextMenu:function(t){return this.stopContextMenu&&(t.stopPropagation(),t.preventDefault()),!1},_onDoubleClick:function(t){this._cacheTransformEventData(t),this._handleEvent(t,"dblclick"),this._resetTransformEventData(t)},getPointerId:function(t){var e=t.changedTouches;return e?e[0]&&e[0].identifier:this.enablePointerEvents?t.pointerId:-1},_isMainEvent:function(t){return!0===t.isPrimary||!1!==t.isPrimary&&("touchend"===t.type&&0===t.touches.length||(!t.changedTouches||t.changedTouches[0].identifier===this.mainTouchId))},_onTouchStart:function(t){t.preventDefault(),null===this.mainTouchId&&(this.mainTouchId=this.getPointerId(t)),this.__onMouseDown(t),this._resetTransformEventData();var e=this.upperCanvasEl,i=this._getEventPrefix();r(fabric.document,"touchend",this._onTouchEnd,s),r(fabric.document,"touchmove",this._onMouseMove,s),n(e,i+"down",this._onMouseDown)},_onMouseDown:function(t){this.__onMouseDown(t),this._resetTransformEventData();var e=this.upperCanvasEl,i=this._getEventPrefix();n(e,i+"move",this._onMouseMove,s),r(fabric.document,i+"up",this._onMouseUp),r(fabric.document,i+"move",this._onMouseMove,s)},_onTouchEnd:function(t){if(!(0<t.touches.length)){this.__onMouseUp(t),this._resetTransformEventData(),this.mainTouchId=null;var e=this._getEventPrefix();n(fabric.document,"touchend",this._onTouchEnd,s),n(fabric.document,"touchmove",this._onMouseMove,s);var i=this;this._willAddMouseDown&&clearTimeout(this._willAddMouseDown),this._willAddMouseDown=setTimeout(function(){r(i.upperCanvasEl,e+"down",i._onMouseDown),i._willAddMouseDown=0},400)}},_onMouseUp:function(t){this.__onMouseUp(t),this._resetTransformEventData();var e=this.upperCanvasEl,i=this._getEventPrefix();this._isMainEvent(t)&&(n(fabric.document,i+"up",this._onMouseUp),n(fabric.document,i+"move",this._onMouseMove,s),r(e,i+"move",this._onMouseMove,s))},_onMouseMove:function(t){!this.allowTouchScrolling&&t.preventDefault&&t.preventDefault(),this.__onMouseMove(t)},_onResize:function(){this.calcOffset()},_shouldRender:function(t){var e=this._activeObject;return!!(!!e!=!!t||e&&t&&e!==t)||(e&&e.isEditing,!1)},__onMouseUp:function(t){var e,i=this._currentTransform,r=this._groupSelector,n=!1,s=!r||0===r.left&&0===r.top;if(this._cacheTransformEventData(t),e=this._target,this._handleEvent(t,"up:before"),l(t,3))this.fireRightClick&&this._handleEvent(t,"up",3,s);else{if(l(t,2))return this.fireMiddleClick&&this._handleEvent(t,"up",2,s),void this._resetTransformEventData();if(this.isDrawingMode&&this._isCurrentlyDrawing)this._onMouseUpInDrawingMode(t);else if(this._isMainEvent(t)){if(i&&(this._finalizeCurrentTransform(t),n=i.actionPerformed),!s){var o=e===this._activeObject;this._maybeGroupObjects(t),n||(n=this._shouldRender(e)||!o&&e===this._activeObject)}if(e){var a=e._findTargetCorner(this.getPointer(t,!0),fabric.util.isTouchEvent(t)),c=e.controls[a],h=c&&c.getMouseUpHandler(t,e,c);h&&h(t,e,c),e.isMoving=!1}this._setCursorFromEvent(t,e),this._handleEvent(t,"up",1,s),this._groupSelector=null,this._currentTransform=null,e&&(e.__corner=0),n?this.requestRenderAll():s||this.renderTop()}}},_simpleEventHandler:function(t,e){var i=this.findTarget(e),r=this.targets,n={e:e,target:i,subTargets:r};if(this.fire(t,n),i&&i.fire(t,n),!r)return i;for(var s=0;s<r.length;s++)r[s].fire(t,n);return i},_handleEvent:function(t,e,i,r){var n=this._target,s=this.targets||[],o={e:t,target:n,subTargets:s,button:i||1,isClick:r||!1,pointer:this._pointer,absolutePointer:this._absolutePointer,transform:this._currentTransform};"up"===e&&(o.currentTarget=this.findTarget(t),o.currentSubTargets=this.targets),this.fire("mouse:"+e,o),n&&n.fire("mouse"+e,o);for(var a=0;a<s.length;a++)s[a].fire("mouse"+e,o)},_finalizeCurrentTransform:function(t){var e,i=this._currentTransform,r=i.target,n={e:t,target:r,transform:i,action:i.action};r._scaling&&(r._scaling=!1),r.setCoords(),(i.actionPerformed||this.stateful&&r.hasStateChanged())&&(i.actionPerformed&&(e=this._addEventOptions(n,i),this._fire(e,n)),this._fire("modified",n))},_addEventOptions:function(t,e){var i,r;switch(e.action){case"scaleX":i="scaled",r="x";break;case"scaleY":i="scaled",r="y";break;case"skewX":i="skewed",r="x";break;case"skewY":i="skewed",r="y";break;case"scale":i="scaled",r="equally";break;case"rotate":i="rotated";break;case"drag":i="moved"}return t.by=r,i},_onMouseDownInDrawingMode:function(t){this._isCurrentlyDrawing=!0,this.getActiveObject()&&this.discardActiveObject(t).requestRenderAll();var e=this.getPointer(t);this.freeDrawingBrush.onMouseDown(e,{e:t,pointer:e}),this._handleEvent(t,"down")},_onMouseMoveInDrawingMode:function(t){if(this._isCurrentlyDrawing){var e=this.getPointer(t);this.freeDrawingBrush.onMouseMove(e,{e:t,pointer:e})}this.setCursor(this.freeDrawingCursor),this._handleEvent(t,"move")},_onMouseUpInDrawingMode:function(t){var e=this.getPointer(t);this._isCurrentlyDrawing=this.freeDrawingBrush.onMouseUp({e:t,pointer:e}),this._handleEvent(t,"up")},__onMouseDown:function(t){this._cacheTransformEventData(t),this._handleEvent(t,"down:before");var e=this._target;if(l(t,3))this.fireRightClick&&this._handleEvent(t,"down",3);else if(l(t,2))this.fireMiddleClick&&this._handleEvent(t,"down",2);else if(this.isDrawingMode)this._onMouseDownInDrawingMode(t);else if(this._isMainEvent(t)&&!this._currentTransform){var i=this._pointer;this._previousPointer=i;var r=this._shouldRender(e),n=this._shouldGroup(t,e);if(this._shouldClearSelection(t,e)?this.discardActiveObject(t):n&&(this._handleGrouping(t,e),e=this._activeObject),!this.selection||e&&(e.selectable||e.isEditing||e===this._activeObject)||(this._groupSelector={ex:i.x,ey:i.y,top:0,left:0}),e){var s=e===this._activeObject;e.selectable&&this.setActiveObject(e,t);var o=e._findTargetCorner(this.getPointer(t,!0),fabric.util.isTouchEvent(t));if(e.__corner=o,e===this._activeObject&&(o||!n)){var a=e.controls[o],c=a&&a.getMouseDownHandler(t,e,a);c&&c(t,e,a),this._setupCurrentTransform(t,e,s)}}this._handleEvent(t,"down"),(r||n)&&this.requestRenderAll()}},_resetTransformEventData:function(){this._target=null,this._pointer=null,this._absolutePointer=null},_cacheTransformEventData:function(t){this._resetTransformEventData(),this._pointer=this.getPointer(t,!0),this._absolutePointer=this.restorePointerVpt(this._pointer),this._target=this._currentTransform?this._currentTransform.target:this.findTarget(t)||null},_beforeTransform:function(t){var e=this._currentTransform;this.stateful&&e.target.saveState(),this.fire("before:transform",{e:t,transform:e})},__onMouseMove:function(t){var e,i;if(this._handleEvent(t,"move:before"),this._cacheTransformEventData(t),this.isDrawingMode)this._onMouseMoveInDrawingMode(t);else if(this._isMainEvent(t)){var r=this._groupSelector;r?(i=this._pointer,r.left=i.x-r.ex,r.top=i.y-r.ey,this.renderTop()):this._currentTransform?this._transformObject(t):(e=this.findTarget(t)||null,this._setCursorFromEvent(t,e),this._fireOverOutEvents(e,t)),this._handleEvent(t,"move"),this._resetTransformEventData()}},_fireOverOutEvents:function(t,e){var i=this._hoveredTarget,r=this._hoveredTargets,n=this.targets,s=Math.max(r.length,n.length);this.fireSyntheticInOutEvents(t,e,{oldTarget:i,evtOut:"mouseout",canvasEvtOut:"mouse:out",evtIn:"mouseover",canvasEvtIn:"mouse:over"});for(var o=0;o<s;o++)this.fireSyntheticInOutEvents(n[o],e,{oldTarget:r[o],evtOut:"mouseout",evtIn:"mouseover"});this._hoveredTarget=t,this._hoveredTargets=this.targets.concat()},_fireEnterLeaveEvents:function(t,e){var i=this._draggedoverTarget,r=this._hoveredTargets,n=this.targets,s=Math.max(r.length,n.length);this.fireSyntheticInOutEvents(t,e,{oldTarget:i,evtOut:"dragleave",evtIn:"dragenter"});for(var o=0;o<s;o++)this.fireSyntheticInOutEvents(n[o],e,{oldTarget:r[o],evtOut:"dragleave",evtIn:"dragenter"});this._draggedoverTarget=t},fireSyntheticInOutEvents:function(t,e,i){var r,n,s,o=i.oldTarget,a=o!==t,c=i.canvasEvtIn,h=i.canvasEvtOut;a&&(r={e:e,target:t,previousTarget:o},n={e:e,target:o,nextTarget:t}),s=t&&a,o&&a&&(h&&this.fire(h,n),o.fire(i.evtOut,n)),s&&(c&&this.fire(c,r),t.fire(i.evtIn,r))},__onMouseWheel:function(t){this._cacheTransformEventData(t),this._handleEvent(t,"wheel"),this._resetTransformEventData()},_transformObject:function(t){var e=this.getPointer(t),i=this._currentTransform;i.reset=!1,i.target.isMoving=!0,i.shiftKey=t.shiftKey,i.altKey=t[this.centeredKey],this._performTransformAction(t,i,e),i.actionPerformed&&this.requestRenderAll()},_performTransformAction:function(t,e,i){var r=i.x,n=i.y,s=e.action,o=!1,a=e.actionHandler;a&&(o=a(t,e,r,n)),"drag"===s&&o&&this.setCursor(e.target.moveCursor||this.moveCursor),e.actionPerformed=e.actionPerformed||o},_fire:fabric.controlsUtils.fireEvent,_setCursorFromEvent:function(t,e){if(!e)return this.setCursor(this.defaultCursor),!1;var i=e.hoverCursor||this.hoverCursor,r=this._activeObject&&"activeSelection"===this._activeObject.type?this._activeObject:null,n=(!r||!r.contains(e))&&e._findTargetCorner(this.getPointer(t,!0));n?this.setCursor(this.getCornerCursor(n,e,t)):(e.subTargetCheck&&this.targets.concat().reverse().map(function(t){i=t.hoverCursor||i}),this.setCursor(i))},getCornerCursor:function(t,e,i){var r=e.controls[t];return r.cursorStyleHandler(i,r,e)}})}(),function(){var f=Math.min,d=Math.max;fabric.util.object.extend(fabric.Canvas.prototype,{_shouldGroup:function(t,e){var i=this._activeObject;return i&&this._isSelectionKeyPressed(t)&&e&&e.selectable&&this.selection&&(i!==e||"activeSelection"===i.type)&&!e.onSelect({e:t})},_handleGrouping:function(t,e){var i=this._activeObject;i.__corner||(e!==i||(e=this.findTarget(t,!0))&&e.selectable)&&(i&&"activeSelection"===i.type?this._updateActiveSelection(e,t):this._createActiveSelection(e,t))},_updateActiveSelection:function(t,e){var i=this._activeObject,r=i._objects.slice(0);i.contains(t)?(i.removeWithUpdate(t),this._hoveredTarget=t,this._hoveredTargets=this.targets.concat(),1===i.size()&&this._setActiveObject(i.item(0),e)):(i.addWithUpdate(t),this._hoveredTarget=i,this._hoveredTargets=this.targets.concat()),this._fireSelectionEvents(r,e)},_createActiveSelection:function(t,e){var i=this.getActiveObjects(),r=this._createGroup(t);this._hoveredTarget=r,this._setActiveObject(r,e),this._fireSelectionEvents(i,e)},_createGroup:function(t){var e=this._objects,i=e.indexOf(this._activeObject)<e.indexOf(t)?[this._activeObject,t]:[t,this._activeObject];return this._activeObject.isEditing&&this._activeObject.exitEditing(),new fabric.ActiveSelection(i,{canvas:this})},_groupSelectedObjects:function(t){var e,i=this._collectObjects(t);1===i.length?this.setActiveObject(i[0],t):1<i.length&&(e=new fabric.ActiveSelection(i.reverse(),{canvas:this}),this.setActiveObject(e,t))},_collectObjects:function(e){for(var t,i=[],r=this._groupSelector.ex,n=this._groupSelector.ey,s=r+this._groupSelector.left,o=n+this._groupSelector.top,a=new fabric.Point(f(r,s),f(n,o)),c=new fabric.Point(d(r,s),d(n,o)),h=!this.selectionFullyContained,l=r===s&&n===o,u=this._objects.length;u--&&!((t=this._objects[u])&&t.selectable&&t.visible&&(h&&t.intersectsWithRect(a,c)||t.isContainedWithinRect(a,c)||h&&t.containsPoint(a)||h&&t.containsPoint(c))&&(i.push(t),l)););return 1<i.length&&(i=i.filter(function(t){return!t.onSelect({e:e})})),i},_maybeGroupObjects:function(t){this.selection&&this._groupSelector&&this._groupSelectedObjects(t),this.setCursor(this.defaultCursor),this._groupSelector=null}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{toDataURL:function(t){t||(t={});var e=t.format||"png",i=t.quality||1,r=(t.multiplier||1)*(t.enableRetinaScaling?this.getRetinaScaling():1),n=this.toCanvasElement(r,t);return fabric.util.toDataURL(n,e,i)},toCanvasElement:function(t,e){t=t||1;var i=((e=e||{}).width||this.width)*t,r=(e.height||this.height)*t,n=this.getZoom(),s=this.width,o=this.height,a=n*t,c=this.viewportTransform,h=(c[4]-(e.left||0))*t,l=(c[5]-(e.top||0))*t,u=this.interactive,f=[a,0,0,a,h,l],d=this.enableRetinaScaling,g=fabric.util.createCanvasElement(),p=this.contextTop;return g.width=i,g.height=r,this.contextTop=null,this.enableRetinaScaling=!1,this.interactive=!1,this.viewportTransform=f,this.width=i,this.height=r,this.calcViewportBoundaries(),this.renderCanvas(g.getContext("2d"),this._objects),this.viewportTransform=c,this.width=s,this.height=o,this.calcViewportBoundaries(),this.interactive=u,this.enableRetinaScaling=d,this.contextTop=p,g}}),fabric.util.object.extend(fabric.StaticCanvas.prototype,{loadFromJSON:function(t,i,e){if(t){var r="string"==typeof t?JSON.parse(t):fabric.util.object.clone(t),n=this,s=r.clipPath,o=this.renderOnAddRemove;return this.renderOnAddRemove=!1,delete r.clipPath,this._enlivenObjects(r.objects,function(e){n.clear(),n._setBgOverlay(r,function(){s?n._enlivenObjects([s],function(t){n.clipPath=t[0],n.__setupCanvas.call(n,r,e,o,i)}):n.__setupCanvas.call(n,r,e,o,i)})},e),this}},__setupCanvas:function(t,e,i,r){var n=this;e.forEach(function(t,e){n.insertAt(t,e)}),this.renderOnAddRemove=i,delete t.objects,delete t.backgroundImage,delete t.overlayImage,delete t.background,delete t.overlay,this._setOptions(t),this.renderAll(),r&&r()},_setBgOverlay:function(t,e){var i={backgroundColor:!1,overlayColor:!1,backgroundImage:!1,overlayImage:!1};if(t.backgroundImage||t.overlayImage||t.background||t.overlay){var r=function(){i.backgroundImage&&i.overlayImage&&i.backgroundColor&&i.overlayColor&&e&&e()};this.__setBgOverlay("backgroundImage",t.backgroundImage,i,r),this.__setBgOverlay("overlayImage",t.overlayImage,i,r),this.__setBgOverlay("backgroundColor",t.background,i,r),this.__setBgOverlay("overlayColor",t.overlay,i,r)}else e&&e()},__setBgOverlay:function(e,t,i,r){var n=this;if(!t)return i[e]=!0,void(r&&r());"backgroundImage"===e||"overlayImage"===e?fabric.util.enlivenObjects([t],function(t){n[e]=t[0],i[e]=!0,r&&r()}):this["set"+fabric.util.string.capitalize(e,!0)](t,function(){i[e]=!0,r&&r()})},_enlivenObjects:function(t,e,i){t&&0!==t.length?fabric.util.enlivenObjects(t,function(t){e&&e(t)},null,i):e&&e([])},_toDataURL:function(e,i){this.clone(function(t){i(t.toDataURL(e))})},_toDataURLWithMultiplier:function(e,i,r){this.clone(function(t){r(t.toDataURLWithMultiplier(e,i))})},clone:function(e,t){var i=JSON.stringify(this.toJSON(t));this.cloneWithoutData(function(t){t.loadFromJSON(i,function(){e&&e(t)})})},cloneWithoutData:function(t){var e=fabric.util.createCanvasElement();e.width=this.width,e.height=this.height;var i=new fabric.Canvas(e);this.backgroundImage?(i.setBackgroundImage(this.backgroundImage.src,function(){i.renderAll(),t&&t(i)}),i.backgroundImageOpacity=this.backgroundImageOpacity,i.backgroundImageStretch=this.backgroundImageStretch):t&&t(i)}}),function(t){"use strict";var x=t.fabric||(t.fabric={}),e=x.util.object.extend,o=x.util.object.clone,r=x.util.toFixed,i=x.util.string.capitalize,a=x.util.degreesToRadians,n=x.StaticCanvas.supports("setLineDash"),s=!x.isLikelyNode;x.Object||(x.Object=x.util.createClass(x.CommonMethods,{type:"object",originX:"left",originY:"top",top:0,left:0,width:0,height:0,scaleX:1,scaleY:1,flipX:!1,flipY:!1,opacity:1,angle:0,skewX:0,skewY:0,cornerSize:13,touchCornerSize:24,transparentCorners:!0,hoverCursor:null,moveCursor:null,padding:0,borderColor:"rgb(178,204,255)",borderDashArray:null,cornerColor:"rgb(178,204,255)",cornerStrokeColor:null,cornerStyle:"rect",cornerDashArray:null,centeredScaling:!1,centeredRotation:!0,fill:"rgb(0,0,0)",fillRule:"nonzero",globalCompositeOperation:"source-over",backgroundColor:"",selectionBackgroundColor:"",stroke:null,strokeWidth:1,strokeDashArray:null,strokeDashOffset:0,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:4,shadow:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,minScaleLimit:0,selectable:!0,evented:!0,visible:!0,hasControls:!0,hasBorders:!0,perPixelTargetFind:!1,includeDefaultValues:!0,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,excludeFromExport:!1,objectCaching:s,statefullCache:!1,noScaleCache:!0,strokeUniform:!1,dirty:!0,__corner:0,paintFirst:"fill",stateProperties:"top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "),cacheProperties:"fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "),colorProperties:"fill stroke backgroundColor".split(" "),clipPath:void 0,inverted:!1,absolutePositioned:!1,initialize:function(t){t&&this.setOptions(t)},_createCacheCanvas:function(){this._cacheProperties={},this._cacheCanvas=x.util.createCanvasElement(),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas(),this.dirty=!0},_limitCacheSize:function(t){var e=x.perfLimitSizeTotal,i=t.width,r=t.height,n=x.maxCacheSideLimit,s=x.minCacheSideLimit;if(i<=n&&r<=n&&i*r<=e)return i<s&&(t.width=s),r<s&&(t.height=s),t;var o=i/r,a=x.util.limitDimsByArea(o,e),c=x.util.capValue,h=c(s,a.x,n),l=c(s,a.y,n);return h<i&&(t.zoomX/=i/h,t.width=h,t.capped=!0),l<r&&(t.zoomY/=r/l,t.height=l,t.capped=!0),t},_getCacheCanvasDimensions:function(){var t=this.getTotalObjectScaling(),e=this._getTransformedDimensions(0,0),i=e.x*t.scaleX/this.scaleX,r=e.y*t.scaleY/this.scaleY;return{width:i+2,height:r+2,zoomX:t.scaleX,zoomY:t.scaleY,x:i,y:r}},_updateCacheCanvas:function(){var t=this.canvas;if(this.noScaleCache&&t&&t._currentTransform){var e=t._currentTransform.target,i=t._currentTransform.action;if(this===e&&i.slice&&"scale"===i.slice(0,5))return!1}var r,n,s=this._cacheCanvas,o=this._limitCacheSize(this._getCacheCanvasDimensions()),a=x.minCacheSideLimit,c=o.width,h=o.height,l=o.zoomX,u=o.zoomY,f=c!==this.cacheWidth||h!==this.cacheHeight,d=this.zoomX!==l||this.zoomY!==u,g=f||d,p=0,v=0,m=!1;if(f){var b=this._cacheCanvas.width,_=this._cacheCanvas.height,y=b<c||_<h;m=y||(c<.9*b||h<.9*_)&&a<b&&a<_,y&&!o.capped&&(a<c||a<h)&&(p=.1*c,v=.1*h)}return!!g&&(m?(s.width=Math.ceil(c+p),s.height=Math.ceil(h+v)):(this._cacheContext.setTransform(1,0,0,1,0,0),this._cacheContext.clearRect(0,0,s.width,s.height)),r=o.x/2,n=o.y/2,this.cacheTranslationX=Math.round(s.width/2-r)+r,this.cacheTranslationY=Math.round(s.height/2-n)+n,this.cacheWidth=c,this.cacheHeight=h,this._cacheContext.translate(this.cacheTranslationX,this.cacheTranslationY),this._cacheContext.scale(l,u),this.zoomX=l,this.zoomY=u,!0)},setOptions:function(t){this._setOptions(t),this._initGradient(t.fill,"fill"),this._initGradient(t.stroke,"stroke"),this._initPattern(t.fill,"fill"),this._initPattern(t.stroke,"stroke")},transform:function(t){var e=this.group&&!this.group._transformDone||this.group&&this.canvas&&t===this.canvas.contextTop,i=this.calcTransformMatrix(!e);t.transform(i[0],i[1],i[2],i[3],i[4],i[5])},toObject:function(t){var e=x.Object.NUM_FRACTION_DIGITS,i={type:this.type,version:x.version,originX:this.originX,originY:this.originY,left:r(this.left,e),top:r(this.top,e),width:r(this.width,e),height:r(this.height,e),fill:this.fill&&this.fill.toObject?this.fill.toObject():this.fill,stroke:this.stroke&&this.stroke.toObject?this.stroke.toObject():this.stroke,strokeWidth:r(this.strokeWidth,e),strokeDashArray:this.strokeDashArray?this.strokeDashArray.concat():this.strokeDashArray,strokeLineCap:this.strokeLineCap,strokeDashOffset:this.strokeDashOffset,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:r(this.strokeMiterLimit,e),scaleX:r(this.scaleX,e),scaleY:r(this.scaleY,e),angle:r(this.angle,e),flipX:this.flipX,flipY:this.flipY,opacity:r(this.opacity,e),shadow:this.shadow&&this.shadow.toObject?this.shadow.toObject():this.shadow,visible:this.visible,backgroundColor:this.backgroundColor,fillRule:this.fillRule,paintFirst:this.paintFirst,globalCompositeOperation:this.globalCompositeOperation,skewX:r(this.skewX,e),skewY:r(this.skewY,e)};return this.clipPath&&(i.clipPath=this.clipPath.toObject(t),i.clipPath.inverted=this.clipPath.inverted,i.clipPath.absolutePositioned=this.clipPath.absolutePositioned),x.util.populateWithProperties(this,i,t),this.includeDefaultValues||(i=this._removeDefaultValues(i)),i},toDatalessObject:function(t){return this.toObject(t)},_removeDefaultValues:function(e){var i=x.util.getKlass(e.type).prototype;return i.stateProperties.forEach(function(t){"left"!==t&&"top"!==t&&(e[t]===i[t]&&delete e[t],"[object Array]"===Object.prototype.toString.call(e[t])&&"[object Array]"===Object.prototype.toString.call(i[t])&&0===e[t].length&&0===i[t].length&&delete e[t])}),e},toString:function(){return"#<fabric."+i(this.type)+">"},getObjectScaling:function(){var t=x.util.qrDecompose(this.calcTransformMatrix());return{scaleX:Math.abs(t.scaleX),scaleY:Math.abs(t.scaleY)}},getTotalObjectScaling:function(){var t=this.getObjectScaling(),e=t.scaleX,i=t.scaleY;if(this.canvas){var r=this.canvas.getZoom(),n=this.canvas.getRetinaScaling();e*=r*n,i*=r*n}return{scaleX:e,scaleY:i}},getObjectOpacity:function(){var t=this.opacity;return this.group&&(t*=this.group.getObjectOpacity()),t},_set:function(t,e){var i="scaleX"===t||"scaleY"===t,r=this[t]!==e,n=!1;return i&&(e=this._constrainScale(e)),"scaleX"===t&&e<0?(this.flipX=!this.flipX,e*=-1):"scaleY"===t&&e<0?(this.flipY=!this.flipY,e*=-1):"shadow"!==t||!e||e instanceof x.Shadow?"dirty"===t&&this.group&&this.group.set("dirty",e):e=new x.Shadow(e),this[t]=e,r&&(n=this.group&&this.group.isOnACache(),-1<this.cacheProperties.indexOf(t)?(this.dirty=!0,n&&this.group.set("dirty",!0)):n&&-1<this.stateProperties.indexOf(t)&&this.group.set("dirty",!0)),this},setOnGroup:function(){},getViewportTransform:function(){return this.canvas&&this.canvas.viewportTransform?this.canvas.viewportTransform:x.iMatrix.concat()},isNotVisible:function(){return 0===this.opacity||!this.width&&!this.height&&0===this.strokeWidth||!this.visible},render:function(t){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),this.transform(t),this._setOpacity(t),this._setShadow(t,this),this.shouldCache()?(this.renderCache(),this.drawCacheOnCanvas(t)):(this._removeCacheCanvas(),this.dirty=!1,this.drawObject(t),this.objectCaching&&this.statefullCache&&this.saveState({propertySet:"cacheProperties"})),t.restore())},renderCache:function(t){t=t||{},this._cacheCanvas||this._createCacheCanvas(),this.isCacheDirty()&&(this.statefullCache&&this.saveState({propertySet:"cacheProperties"}),this.drawObject(this._cacheContext,t.forClipping),this.dirty=!1)},_removeCacheCanvas:function(){this._cacheCanvas=null,this.cacheWidth=0,this.cacheHeight=0},hasStroke:function(){return this.stroke&&"transparent"!==this.stroke&&0!==this.strokeWidth},hasFill:function(){return this.fill&&"transparent"!==this.fill},needsItsOwnCache:function(){return!("stroke"!==this.paintFirst||!this.hasFill()||!this.hasStroke()||"object"!=typeof this.shadow)||!!this.clipPath},shouldCache:function(){return this.ownCaching=this.needsItsOwnCache()||this.objectCaching&&(!this.group||!this.group.isOnACache()),this.ownCaching},willDrawShadow:function(){return!!this.shadow&&(0!==this.shadow.offsetX||0!==this.shadow.offsetY)},drawClipPathOnCache:function(t){var e=this.clipPath;if(t.save(),e.inverted?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="destination-in",e.absolutePositioned){var i=x.util.invertTransform(this.calcTransformMatrix());t.transform(i[0],i[1],i[2],i[3],i[4],i[5])}e.transform(t),t.scale(1/e.zoomX,1/e.zoomY),t.drawImage(e._cacheCanvas,-e.cacheTranslationX,-e.cacheTranslationY),t.restore()},drawObject:function(t,e){var i=this.fill,r=this.stroke;e?(this.fill="black",this.stroke="",this._setClippingProperties(t)):(this._renderBackground(t),this._setStrokeStyles(t,this),this._setFillStyles(t,this)),this._render(t),this._drawClipPath(t),this.fill=i,this.stroke=r},_drawClipPath:function(t){var e=this.clipPath;e&&(e.canvas=this.canvas,e.shouldCache(),e._transformDone=!0,e.renderCache({forClipping:!0}),this.drawClipPathOnCache(t))},drawCacheOnCanvas:function(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)},isCacheDirty:function(t){if(this.isNotVisible())return!1;if(this._cacheCanvas&&!t&&this._updateCacheCanvas())return!0;if(this.dirty||this.clipPath&&this.clipPath.absolutePositioned||this.statefullCache&&this.hasStateChanged("cacheProperties")){if(this._cacheCanvas&&!t){var e=this.cacheWidth/this.zoomX,i=this.cacheHeight/this.zoomY;this._cacheContext.clearRect(-e/2,-i/2,e,i)}return!0}return!1},_renderBackground:function(t){if(this.backgroundColor){var e=this._getNonTransformedDimensions();t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}},_setOpacity:function(t){this.group&&!this.group._transformDone?t.globalAlpha=this.getObjectOpacity():t.globalAlpha*=this.opacity},_setStrokeStyles:function(t,e){e.stroke&&(t.lineWidth=e.strokeWidth,t.lineCap=e.strokeLineCap,t.lineDashOffset=e.strokeDashOffset,t.lineJoin=e.strokeLineJoin,t.miterLimit=e.strokeMiterLimit,t.strokeStyle=e.stroke.toLive?e.stroke.toLive(t,this):e.stroke)},_setFillStyles:function(t,e){e.fill&&(t.fillStyle=e.fill.toLive?e.fill.toLive(t,this):e.fill)},_setClippingProperties:function(t){t.globalAlpha=1,t.strokeStyle="transparent",t.fillStyle="#000000"},_setLineDash:function(t,e,i){e&&0!==e.length&&(1&e.length&&e.push.apply(e,e),n?t.setLineDash(e):i&&i(t))},_renderControls:function(t,e){var i,r,n,s=this.getViewportTransform(),o=this.calcTransformMatrix();r=void 0!==(e=e||{}).hasBorders?e.hasBorders:this.hasBorders,n=void 0!==e.hasControls?e.hasControls:this.hasControls,o=x.util.multiplyTransformMatrices(s,o),i=x.util.qrDecompose(o),t.save(),t.translate(i.translateX,i.translateY),t.lineWidth=1*this.borderScaleFactor,this.group||(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),e.forActiveSelection?(t.rotate(a(i.angle)),r&&this.drawBordersInGroup(t,i,e)):(t.rotate(a(this.angle)),r&&this.drawBorders(t,e)),n&&this.drawControls(t,e),t.restore()},_setShadow:function(t){if(this.shadow){var e,i=this.shadow,r=this.canvas,n=r&&r.viewportTransform[0]||1,s=r&&r.viewportTransform[3]||1;e=i.nonScaling?{scaleX:1,scaleY:1}:this.getObjectScaling(),r&&r._isRetinaScaling()&&(n*=x.devicePixelRatio,s*=x.devicePixelRatio),t.shadowColor=i.color,t.shadowBlur=i.blur*x.browserShadowBlurConstant*(n+s)*(e.scaleX+e.scaleY)/4,t.shadowOffsetX=i.offsetX*n*e.scaleX,t.shadowOffsetY=i.offsetY*s*e.scaleY}},_removeShadow:function(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)},_applyPatternGradientTransform:function(t,e){if(!e||!e.toLive)return{offsetX:0,offsetY:0};var i=e.gradientTransform||e.patternTransform,r=-this.width/2+e.offsetX||0,n=-this.height/2+e.offsetY||0;return"percentage"===e.gradientUnits?t.transform(this.width,0,0,this.height,r,n):t.transform(1,0,0,1,r,n),i&&t.transform(i[0],i[1],i[2],i[3],i[4],i[5]),{offsetX:r,offsetY:n}},_renderPaintInOrder:function(t){"stroke"===this.paintFirst?(this._renderStroke(t),this._renderFill(t)):(this._renderFill(t),this._renderStroke(t))},_render:function(){},_renderFill:function(t){this.fill&&(t.save(),this._applyPatternGradientTransform(t,this.fill),"evenodd"===this.fillRule?t.fill("evenodd"):t.fill(),t.restore())},_renderStroke:function(t){if(this.stroke&&0!==this.strokeWidth){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this.strokeUniform&&this.group){var e=this.getObjectScaling();t.scale(1/e.scaleX,1/e.scaleY)}else this.strokeUniform&&t.scale(1/this.scaleX,1/this.scaleY);this._setLineDash(t,this.strokeDashArray,this._renderDashedStroke),this.stroke.toLive&&"percentage"===this.stroke.gradientUnits?this._applyPatternForTransformedGradient(t,this.stroke):this._applyPatternGradientTransform(t,this.stroke),t.stroke(),t.restore()}},_applyPatternForTransformedGradient:function(t,e){var i,r=this._limitCacheSize(this._getCacheCanvasDimensions()),n=x.util.createCanvasElement(),s=this.canvas.getRetinaScaling(),o=r.x/this.scaleX/s,a=r.y/this.scaleY/s;n.width=o,n.height=a,(i=n.getContext("2d")).beginPath(),i.moveTo(0,0),i.lineTo(o,0),i.lineTo(o,a),i.lineTo(0,a),i.closePath(),i.translate(o/2,a/2),i.scale(r.zoomX/this.scaleX/s,r.zoomY/this.scaleY/s),this._applyPatternGradientTransform(i,e),i.fillStyle=e.toLive(t),i.fill(),t.translate(-this.width/2-this.strokeWidth/2,-this.height/2-this.strokeWidth/2),t.scale(s*this.scaleX/r.zoomX,s*this.scaleY/r.zoomY),t.strokeStyle=i.createPattern(n,"no-repeat")},_findCenterFromElement:function(){return{x:this.left+this.width/2,y:this.top+this.height/2}},_assignTransformMatrixProps:function(){if(this.transformMatrix){var t=x.util.qrDecompose(this.transformMatrix);this.flipX=!1,this.flipY=!1,this.set("scaleX",t.scaleX),this.set("scaleY",t.scaleY),this.angle=t.angle,this.skewX=t.skewX,this.skewY=0}},_removeTransformMatrix:function(t){var e=this._findCenterFromElement();this.transformMatrix&&(this._assignTransformMatrixProps(),e=x.util.transformPoint(e,this.transformMatrix)),this.transformMatrix=null,t&&(this.scaleX*=t.scaleX,this.scaleY*=t.scaleY,this.cropX=t.cropX,this.cropY=t.cropY,e.x+=t.offsetLeft,e.y+=t.offsetTop,this.width=t.width,this.height=t.height),this.setPositionByOrigin(e,"center","center")},clone:function(t,e){var i=this.toObject(e);this.constructor.fromObject?this.constructor.fromObject(i,t):x.Object._fromObject("Object",i,t)},cloneAsImage:function(t,e){var i=this.toCanvasElement(e);return t&&t(new x.Image(i)),this},toCanvasElement:function(t){t||(t={});var e=x.util,i=e.saveObjectTransform(this),r=this.group,n=this.shadow,s=Math.abs,o=(t.multiplier||1)*(t.enableRetinaScaling?x.devicePixelRatio:1);delete this.group,t.withoutTransform&&e.resetObjectTransform(this),t.withoutShadow&&(this.shadow=null);var a,c,h,l,u=x.util.createCanvasElement(),f=this.getBoundingRect(!0,!0),d=this.shadow,g={x:0,y:0};d&&(c=d.blur,a=d.nonScaling?{scaleX:1,scaleY:1}:this.getObjectScaling(),g.x=2*Math.round(s(d.offsetX)+c)*s(a.scaleX),g.y=2*Math.round(s(d.offsetY)+c)*s(a.scaleY)),h=f.width+g.x,l=f.height+g.y,u.width=Math.ceil(h),u.height=Math.ceil(l);var p=new x.StaticCanvas(u,{enableRetinaScaling:!1,renderOnAddRemove:!1,skipOffscreen:!1});"jpeg"===t.format&&(p.backgroundColor="#fff"),this.setPositionByOrigin(new x.Point(p.width/2,p.height/2),"center","center");var v=this.canvas;p.add(this);var m=p.toCanvasElement(o||1,t);return this.shadow=n,this.set("canvas",v),r&&(this.group=r),this.set(i).setCoords(),p._objects=[],p.dispose(),p=null,m},toDataURL:function(t){return t||(t={}),x.util.toDataURL(this.toCanvasElement(t),t.format||"png",t.quality||1)},isType:function(t){return this.type===t},complexity:function(){return 1},toJSON:function(t){return this.toObject(t)},rotate:function(t){var e=("center"!==this.originX||"center"!==this.originY)&&this.centeredRotation;return e&&this._setOriginToCenter(),this.set("angle",t),e&&this._resetOrigin(),this},centerH:function(){return this.canvas&&this.canvas.centerObjectH(this),this},viewportCenterH:function(){return this.canvas&&this.canvas.viewportCenterObjectH(this),this},centerV:function(){return this.canvas&&this.canvas.centerObjectV(this),this},viewportCenterV:function(){return this.canvas&&this.canvas.viewportCenterObjectV(this),this},center:function(){return this.canvas&&this.canvas.centerObject(this),this},viewportCenter:function(){return this.canvas&&this.canvas.viewportCenterObject(this),this},getLocalPointer:function(t,e){e=e||this.canvas.getPointer(t);var i=new x.Point(e.x,e.y),r=this._getLeftTopCoords();return this.angle&&(i=x.util.rotatePoint(i,r,a(-this.angle))),{x:i.x-r.x,y:i.y-r.y}},_setupCompositeOperation:function(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}}),x.util.createAccessors&&x.util.createAccessors(x.Object),e(x.Object.prototype,x.Observable),x.Object.NUM_FRACTION_DIGITS=2,x.Object._fromObject=function(t,i,r,n){var s=x[t];i=o(i,!0),x.util.enlivenPatterns([i.fill,i.stroke],function(t){void 0!==t[0]&&(i.fill=t[0]),void 0!==t[1]&&(i.stroke=t[1]),x.util.enlivenObjects([i.clipPath],function(t){i.clipPath=t[0];var e=n?new s(i[n],i):new s(i);r&&r(e)})})},x.Object.__uid=0)}( true?exports:undefined),function(){var a=fabric.util.degreesToRadians,l={left:-.5,center:0,right:.5},u={top:-.5,center:0,bottom:.5};fabric.util.object.extend(fabric.Object.prototype,{translateToGivenOrigin:function(t,e,i,r,n){var s,o,a,c=t.x,h=t.y;return"string"==typeof e?e=l[e]:e-=.5,"string"==typeof r?r=l[r]:r-=.5,"string"==typeof i?i=u[i]:i-=.5,"string"==typeof n?n=u[n]:n-=.5,o=n-i,((s=r-e)||o)&&(a=this._getTransformedDimensions(),c=t.x+s*a.x,h=t.y+o*a.y),new fabric.Point(c,h)},translateToCenterPoint:function(t,e,i){var r=this.translateToGivenOrigin(t,e,i,"center","center");return this.angle?fabric.util.rotatePoint(r,t,a(this.angle)):r},translateToOriginPoint:function(t,e,i){var r=this.translateToGivenOrigin(t,"center","center",e,i);return this.angle?fabric.util.rotatePoint(r,t,a(this.angle)):r},getCenterPoint:function(){var t=new fabric.Point(this.left,this.top);return this.translateToCenterPoint(t,this.originX,this.originY)},getPointByOrigin:function(t,e){var i=this.getCenterPoint();return this.translateToOriginPoint(i,t,e)},toLocalPoint:function(t,e,i){var r,n,s=this.getCenterPoint();return r=void 0!==e&&void 0!==i?this.translateToGivenOrigin(s,"center","center",e,i):new fabric.Point(this.left,this.top),n=new fabric.Point(t.x,t.y),this.angle&&(n=fabric.util.rotatePoint(n,s,-a(this.angle))),n.subtractEquals(r)},setPositionByOrigin:function(t,e,i){var r=this.translateToCenterPoint(t,e,i),n=this.translateToOriginPoint(r,this.originX,this.originY);this.set("left",n.x),this.set("top",n.y)},adjustPosition:function(t){var e,i,r=a(this.angle),n=this.getScaledWidth(),s=fabric.util.cos(r)*n,o=fabric.util.sin(r)*n;e="string"==typeof this.originX?l[this.originX]:this.originX-.5,i="string"==typeof t?l[t]:t-.5,this.left+=s*(i-e),this.top+=o*(i-e),this.setCoords(),this.originX=t},_setOriginToCenter:function(){this._originalOriginX=this.originX,this._originalOriginY=this.originY;var t=this.getCenterPoint();this.originX="center",this.originY="center",this.left=t.x,this.top=t.y},_resetOrigin:function(){var t=this.translateToOriginPoint(this.getCenterPoint(),this._originalOriginX,this._originalOriginY);this.originX=this._originalOriginX,this.originY=this._originalOriginY,this.left=t.x,this.top=t.y,this._originalOriginX=null,this._originalOriginY=null},_getLeftTopCoords:function(){return this.translateToOriginPoint(this.getCenterPoint(),"left","top")}})}(),function(){var h=fabric.util,l=h.degreesToRadians,a=h.multiplyTransformMatrices,u=h.transformPoint;h.object.extend(fabric.Object.prototype,{oCoords:null,aCoords:null,lineCoords:null,ownMatrixCache:null,matrixCache:null,controls:{},_getCoords:function(t,e){return e?t?this.calcACoords():this.calcLineCoords():(this.aCoords&&this.lineCoords||this.setCoords(!0),t?this.aCoords:this.lineCoords)},getCoords:function(t,e){return i=this._getCoords(t,e),[new fabric.Point(i.tl.x,i.tl.y),new fabric.Point(i.tr.x,i.tr.y),new fabric.Point(i.br.x,i.br.y),new fabric.Point(i.bl.x,i.bl.y)];var i},intersectsWithRect:function(t,e,i,r){var n=this.getCoords(i,r);return"Intersection"===fabric.Intersection.intersectPolygonRectangle(n,t,e).status},intersectsWithObject:function(t,e,i){return"Intersection"===fabric.Intersection.intersectPolygonPolygon(this.getCoords(e,i),t.getCoords(e,i)).status||t.isContainedWithinObject(this,e,i)||this.isContainedWithinObject(t,e,i)},isContainedWithinObject:function(t,e,i){for(var r=this.getCoords(e,i),n=e?t.aCoords:t.lineCoords,s=0,o=t._getImageLines(n);s<4;s++)if(!t.containsPoint(r[s],o))return!1;return!0},isContainedWithinRect:function(t,e,i,r){var n=this.getBoundingRect(i,r);return n.left>=t.x&&n.left+n.width<=e.x&&n.top>=t.y&&n.top+n.height<=e.y},containsPoint:function(t,e,i,r){var n=this._getCoords(i,r),s=(e=e||this._getImageLines(n),this._findCrossPoints(t,e));return 0!==s&&s%2==1},isOnScreen:function(t){if(!this.canvas)return!1;var e=this.canvas.vptCoords.tl,i=this.canvas.vptCoords.br;return!!this.getCoords(!0,t).some(function(t){return t.x<=i.x&&t.x>=e.x&&t.y<=i.y&&t.y>=e.y})||(!!this.intersectsWithRect(e,i,!0,t)||this._containsCenterOfCanvas(e,i,t))},_containsCenterOfCanvas:function(t,e,i){var r={x:(t.x+e.x)/2,y:(t.y+e.y)/2};return!!this.containsPoint(r,null,!0,i)},isPartiallyOnScreen:function(t){if(!this.canvas)return!1;var e=this.canvas.vptCoords.tl,i=this.canvas.vptCoords.br;return!!this.intersectsWithRect(e,i,!0,t)||this.getCoords(!0,t).every(function(t){return(t.x>=i.x||t.x<=e.x)&&(t.y>=i.y||t.y<=e.y)})&&this._containsCenterOfCanvas(e,i,t)},_getImageLines:function(t){return{topline:{o:t.tl,d:t.tr},rightline:{o:t.tr,d:t.br},bottomline:{o:t.br,d:t.bl},leftline:{o:t.bl,d:t.tl}}},_findCrossPoints:function(t,e){var i,r,n,s=0;for(var o in e)if(!((n=e[o]).o.y<t.y&&n.d.y<t.y||n.o.y>=t.y&&n.d.y>=t.y||(n.o.x===n.d.x&&n.o.x>=t.x?r=n.o.x:(0,i=(n.d.y-n.o.y)/(n.d.x-n.o.x),r=-(t.y-0*t.x-(n.o.y-i*n.o.x))/(0-i)),r>=t.x&&(s+=1),2!==s)))break;return s},getBoundingRect:function(t,e){var i=this.getCoords(t,e);return h.makeBoundingBoxFromPoints(i)},getScaledWidth:function(){return this._getTransformedDimensions().x},getScaledHeight:function(){return this._getTransformedDimensions().y},_constrainScale:function(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:0===t?1e-4:t},scale:function(t){return this._set("scaleX",t),this._set("scaleY",t),this.setCoords()},scaleToWidth:function(t,e){var i=this.getBoundingRect(e).width/this.getScaledWidth();return this.scale(t/this.width/i)},scaleToHeight:function(t,e){var i=this.getBoundingRect(e).height/this.getScaledHeight();return this.scale(t/this.height/i)},calcCoords:function(t){return t?this.calcACoords():this.calcOCoords()},calcLineCoords:function(){var t=this.getViewportTransform(),e=this.padding,i=l(this.angle),r=h.cos(i)*e,n=h.sin(i)*e,s=r+n,o=r-n,a=this.calcACoords(),c={tl:u(a.tl,t),tr:u(a.tr,t),bl:u(a.bl,t),br:u(a.br,t)};return e&&(c.tl.x-=o,c.tl.y-=s,c.tr.x+=s,c.tr.y-=o,c.bl.x-=s,c.bl.y+=o,c.br.x+=o,c.br.y+=s),c},calcOCoords:function(){var t=this._calcRotateMatrix(),e=this._calcTranslateMatrix(),i=this.getViewportTransform(),r=a(i,e),n=a(r,t),s=(n=a(n,[1/i[0],0,0,1/i[3],0,0]),this._calculateCurrentDimensions()),o={};return this.forEachControl(function(t,e,i){o[e]=t.positionHandler(s,n,i)}),o},calcACoords:function(){var t=this._calcRotateMatrix(),e=this._calcTranslateMatrix(),i=a(e,t),r=this._getTransformedDimensions(),n=r.x/2,s=r.y/2;return{tl:u({x:-n,y:-s},i),tr:u({x:n,y:-s},i),bl:u({x:-n,y:s},i),br:u({x:n,y:s},i)}},setCoords:function(t){return this.aCoords=this.calcACoords(),this.lineCoords=this.group?this.aCoords:this.calcLineCoords(),t||(this.oCoords=this.calcOCoords(),this._setCornerCoords&&this._setCornerCoords()),this},_calcRotateMatrix:function(){return h.calcRotateMatrix(this)},_calcTranslateMatrix:function(){var t=this.getCenterPoint();return[1,0,0,1,t.x,t.y]},transformMatrixKey:function(t){var e="_",i="";return!t&&this.group&&(i=this.group.transformMatrixKey(t)+e),i+this.top+e+this.left+e+this.scaleX+e+this.scaleY+e+this.skewX+e+this.skewY+e+this.angle+e+this.originX+e+this.originY+e+this.width+e+this.height+e+this.strokeWidth+this.flipX+this.flipY},calcTransformMatrix:function(t){var e=this.calcOwnMatrix();if(t||!this.group)return e;var i=this.transformMatrixKey(t),r=this.matrixCache||(this.matrixCache={});return r.key===i?r.value:(this.group&&(e=a(this.group.calcTransformMatrix(!1),e)),r.key=i,r.value=e)},calcOwnMatrix:function(){var t=this.transformMatrixKey(!0),e=this.ownMatrixCache||(this.ownMatrixCache={});if(e.key===t)return e.value;var i=this._calcTranslateMatrix(),r={angle:this.angle,translateX:i[4],translateY:i[5],scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,flipX:this.flipX,flipY:this.flipY};return e.key=t,e.value=h.composeMatrix(r),e.value},_calcDimensionsTransformMatrix:function(t,e,i){return h.calcDimensionsMatrix({skewX:t,skewY:e,scaleX:this.scaleX*(i&&this.flipX?-1:1),scaleY:this.scaleY*(i&&this.flipY?-1:1)})},_getNonTransformedDimensions:function(){var t=this.strokeWidth;return{x:this.width+t,y:this.height+t}},_getTransformedDimensions:function(t,e){void 0===t&&(t=this.skewX),void 0===e&&(e=this.skewY);var i,r,n=this._getNonTransformedDimensions(),s=0===t&&0===e;if(this.strokeUniform?(i=this.width,r=this.height):(i=n.x,r=n.y),s)return this._finalizeDimensions(i*this.scaleX,r*this.scaleY);var o=h.sizeAfterTransform(i,r,{scaleX:this.scaleX,scaleY:this.scaleY,skewX:t,skewY:e});return this._finalizeDimensions(o.x,o.y)},_finalizeDimensions:function(t,e){return this.strokeUniform?{x:t+this.strokeWidth,y:e+this.strokeWidth}:{x:t,y:e}},_calculateCurrentDimensions:function(){var t=this.getViewportTransform(),e=this._getTransformedDimensions();return u(e,t,!0).scalarAdd(2*this.padding)}})}(),fabric.util.object.extend(fabric.Object.prototype,{sendToBack:function(){return this.group?fabric.StaticCanvas.prototype.sendToBack.call(this.group,this):this.canvas&&this.canvas.sendToBack(this),this},bringToFront:function(){return this.group?fabric.StaticCanvas.prototype.bringToFront.call(this.group,this):this.canvas&&this.canvas.bringToFront(this),this},sendBackwards:function(t){return this.group?fabric.StaticCanvas.prototype.sendBackwards.call(this.group,this,t):this.canvas&&this.canvas.sendBackwards(this,t),this},bringForward:function(t){return this.group?fabric.StaticCanvas.prototype.bringForward.call(this.group,this,t):this.canvas&&this.canvas.bringForward(this,t),this},moveTo:function(t){return this.group&&"activeSelection"!==this.group.type?fabric.StaticCanvas.prototype.moveTo.call(this.group,this,t):this.canvas&&this.canvas.moveTo(this,t),this}}),function(){function f(t,e){if(e){if(e.toLive)return t+": url(#SVGID_"+e.id+"); ";var i=new fabric.Color(e),r=t+": "+i.toRgb()+"; ",n=i.getAlpha();return 1!==n&&(r+=t+"-opacity: "+n.toString()+"; "),r}return t+": none; "}var i=fabric.util.toFixed;fabric.util.object.extend(fabric.Object.prototype,{getSvgStyles:function(t){var e=this.fillRule?this.fillRule:"nonzero",i=this.strokeWidth?this.strokeWidth:"0",r=this.strokeDashArray?this.strokeDashArray.join(" "):"none",n=this.strokeDashOffset?this.strokeDashOffset:"0",s=this.strokeLineCap?this.strokeLineCap:"butt",o=this.strokeLineJoin?this.strokeLineJoin:"miter",a=this.strokeMiterLimit?this.strokeMiterLimit:"4",c=void 0!==this.opacity?this.opacity:"1",h=this.visible?"":" visibility: hidden;",l=t?"":this.getSvgFilter(),u=f("fill",this.fill);return[f("stroke",this.stroke),"stroke-width: ",i,"; ","stroke-dasharray: ",r,"; ","stroke-linecap: ",s,"; ","stroke-dashoffset: ",n,"; ","stroke-linejoin: ",o,"; ","stroke-miterlimit: ",a,"; ",u,"fill-rule: ",e,"; ","opacity: ",c,";",l,h].join("")},getSvgSpanStyles:function(t,e){var i="; ",r=t.fontFamily?"font-family: "+(-1===t.fontFamily.indexOf("'")&&-1===t.fontFamily.indexOf('"')?"'"+t.fontFamily+"'":t.fontFamily)+i:"",n=t.strokeWidth?"stroke-width: "+t.strokeWidth+i:"",s=(r=r,t.fontSize?"font-size: "+t.fontSize+"px"+i:""),o=t.fontStyle?"font-style: "+t.fontStyle+i:"",a=t.fontWeight?"font-weight: "+t.fontWeight+i:"",c=t.fill?f("fill",t.fill):"",h=t.stroke?f("stroke",t.stroke):"",l=this.getSvgTextDecoration(t);return l&&(l="text-decoration: "+l+i),[h,n,r,s,o,a,l,c,t.deltaY?"baseline-shift: "+-t.deltaY+"; ":"",e?"white-space: pre; ":""].join("")},getSvgTextDecoration:function(e){return["overline","underline","line-through"].filter(function(t){return e[t.replace("-","")]}).join(" ")},getSvgFilter:function(){return this.shadow?"filter: url(#SVGID_"+this.shadow.id+");":""},getSvgCommons:function(){return[this.id?'id="'+this.id+'" ':"",this.clipPath?'clip-path="url(#'+this.clipPath.clipPathId+')" ':""].join("")},getSvgTransform:function(t,e){var i=t?this.calcTransformMatrix():this.calcOwnMatrix();return'transform="'+fabric.util.matrixToSVG(i)+(e||"")+'" '},_setSVGBg:function(t){if(this.backgroundColor){var e=fabric.Object.NUM_FRACTION_DIGITS;t.push("\t\t<rect ",this._getFillAttributes(this.backgroundColor),' x="',i(-this.width/2,e),'" y="',i(-this.height/2,e),'" width="',i(this.width,e),'" height="',i(this.height,e),'"></rect>\n')}},toSVG:function(t){return this._createBaseSVGMarkup(this._toSVG(t),{reviver:t})},toClipPathSVG:function(t){return"\t"+this._createBaseClipPathSVGMarkup(this._toSVG(t),{reviver:t})},_createBaseClipPathSVGMarkup:function(t,e){var i=(e=e||{}).reviver,r=e.additionalTransform||"",n=[this.getSvgTransform(!0,r),this.getSvgCommons()].join(""),s=t.indexOf("COMMON_PARTS");return t[s]=n,i?i(t.join("")):t.join("")},_createBaseSVGMarkup:function(t,e){var i,r,n=(e=e||{}).noStyle,s=e.reviver,o=n?"":'style="'+this.getSvgStyles()+'" ',a=e.withShadow?'style="'+this.getSvgFilter()+'" ':"",c=this.clipPath,h=this.strokeUniform?'vector-effect="non-scaling-stroke" ':"",l=c&&c.absolutePositioned,u=this.stroke,f=this.fill,d=this.shadow,g=[],p=t.indexOf("COMMON_PARTS"),v=e.additionalTransform;return c&&(c.clipPathId="CLIPPATH_"+fabric.Object.__uid++,r='<clipPath id="'+c.clipPathId+'" >\n'+c.toClipPathSVG(s)+"</clipPath>\n"),l&&g.push("<g ",a,this.getSvgCommons()," >\n"),g.push("<g ",this.getSvgTransform(!1),l?"":a+this.getSvgCommons()," >\n"),i=[o,h,n?"":this.addPaintOrder()," ",v?'transform="'+v+'" ':""].join(""),t[p]=i,f&&f.toLive&&g.push(f.toSVG(this)),u&&u.toLive&&g.push(u.toSVG(this)),d&&g.push(d.toSVG(this)),c&&g.push(r),g.push(t.join("")),g.push("</g>\n"),l&&g.push("</g>\n"),s?s(g.join("")):g.join("")},addPaintOrder:function(){return"fill"!==this.paintFirst?' paint-order="'+this.paintFirst+'" ':""}})}(),function(){var n=fabric.util.object.extend,r="stateProperties";function s(e,t,i){var r={};i.forEach(function(t){r[t]=e[t]}),n(e[t],r,!0)}fabric.util.object.extend(fabric.Object.prototype,{hasStateChanged:function(t){var e="_"+(t=t||r);return Object.keys(this[e]).length<this[t].length||!function t(e,i,r){if(e===i)return!0;if(Array.isArray(e)){if(!Array.isArray(i)||e.length!==i.length)return!1;for(var n=0,s=e.length;n<s;n++)if(!t(e[n],i[n]))return!1;return!0}if(e&&"object"==typeof e){var o,a=Object.keys(e);if(!i||"object"!=typeof i||!r&&a.length!==Object.keys(i).length)return!1;for(n=0,s=a.length;n<s;n++)if("canvas"!==(o=a[n])&&"group"!==o&&!t(e[o],i[o]))return!1;return!0}}(this[e],this,!0)},saveState:function(t){var e=t&&t.propertySet||r,i="_"+e;return this[i]?(s(this,i,this[e]),t&&t.stateProperties&&s(this,i,t.stateProperties),this):this.setupState(t)},setupState:function(t){var e=(t=t||{}).propertySet||r;return this["_"+(t.propertySet=e)]={},this.saveState(t),this}})}(),function(){var d=fabric.util.degreesToRadians;fabric.util.object.extend(fabric.Object.prototype,{_findTargetCorner:function(t,e){if(!this.hasControls||this.group||!this.canvas||this.canvas._activeObject!==this)return!1;var i,r,n,s=t.x,o=t.y,a=Object.keys(this.oCoords),c=a.length-1;for(this.__corner=0;0<=c;c--)if(n=a[c],this.isControlVisible(n)&&(r=this._getImageLines(e?this.oCoords[n].touchCorner:this.oCoords[n].corner),0!==(i=this._findCrossPoints({x:s,y:o},r))&&i%2==1))return this.__corner=n;return!1},forEachControl:function(t){for(var e in this.controls)t(this.controls[e],e,this)},_setCornerCoords:function(){var t,e,i=this.oCoords,r=d(45-this.angle),n=fabric.util.cos(r),s=fabric.util.sin(r),o=.707106*this.cornerSize,a=.707106*this.touchCornerSize,c=o*n,h=o*s,l=a*n,u=a*s;for(var f in i)t=i[f].x,e=i[f].y,i[f].corner={tl:{x:t-h,y:e-c},tr:{x:t+c,y:e-h},bl:{x:t-c,y:e+h},br:{x:t+h,y:e+c}},i[f].touchCorner={tl:{x:t-u,y:e-l},tr:{x:t+l,y:e-u},bl:{x:t-l,y:e+u},br:{x:t+u,y:e+l}}},drawSelectionBackground:function(t){if(!this.selectionBackgroundColor||this.canvas&&!this.canvas.interactive||this.canvas&&this.canvas._activeObject!==this)return this;t.save();var e=this.getCenterPoint(),i=this._calculateCurrentDimensions(),r=this.canvas.viewportTransform;return t.translate(e.x,e.y),t.scale(1/r[0],1/r[3]),t.rotate(d(this.angle)),t.fillStyle=this.selectionBackgroundColor,t.fillRect(-i.x/2,-i.y/2,i.x,i.y),t.restore(),this},drawBorders:function(r,t){t=t||{};var e=this._calculateCurrentDimensions(),i=this.borderScaleFactor,n=e.x+i,s=e.y+i,o=void 0!==t.hasControls?t.hasControls:this.hasControls,a=!1;return r.save(),r.strokeStyle=t.borderColor||this.borderColor,this._setLineDash(r,t.borderDashArray||this.borderDashArray,null),r.strokeRect(-n/2,-s/2,n,s),o&&(r.beginPath(),this.forEachControl(function(t,e,i){t.withConnection&&t.getVisibility(i,e)&&(a=!0,r.moveTo(t.x*n,t.y*s),r.lineTo(t.x*n+t.offsetX,t.y*s+t.offsetY))}),a&&r.stroke()),r.restore(),this},drawBordersInGroup:function(t,e,i){i=i||{};var r=fabric.util.sizeAfterTransform(this.width,this.height,e),n=this.strokeWidth,s=this.strokeUniform,o=this.borderScaleFactor,a=r.x+n*(s?this.canvas.getZoom():e.scaleX)+o,c=r.y+n*(s?this.canvas.getZoom():e.scaleY)+o;return t.save(),this._setLineDash(t,i.borderDashArray||this.borderDashArray,null),t.strokeStyle=i.borderColor||this.borderColor,t.strokeRect(-a/2,-c/2,a,c),t.restore(),this},drawControls:function(r,n){return n=n||{},r.save(),r.setTransform(this.canvas.getRetinaScaling(),0,0,this.canvas.getRetinaScaling(),0,0),r.strokeStyle=r.fillStyle=n.cornerColor||this.cornerColor,this.transparentCorners||(r.strokeStyle=n.cornerStrokeColor||this.cornerStrokeColor),this._setLineDash(r,n.cornerDashArray||this.cornerDashArray,null),this.setCoords(),this.forEachControl(function(t,e,i){t.getVisibility(i,e)&&t.render(r,i.oCoords[e].x,i.oCoords[e].y,n,i)}),r.restore(),this},isControlVisible:function(t){return this.controls[t]&&this.controls[t].getVisibility(this,t)},setControlVisible:function(t,e){return this._controlsVisibility||(this._controlsVisibility={}),this._controlsVisibility[t]=e,this},setControlsVisibility:function(t){for(var e in t||(t={}),t)this.setControlVisible(e,t[e]);return this},onDeselect:function(){},onSelect:function(){}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{FX_DURATION:500,fxCenterObjectH:function(e,t){var i=function(){},r=(t=t||{}).onComplete||i,n=t.onChange||i,s=this;return fabric.util.animate({startValue:e.left,endValue:this.getCenter().left,duration:this.FX_DURATION,onChange:function(t){e.set("left",t),s.requestRenderAll(),n()},onComplete:function(){e.setCoords(),r()}}),this},fxCenterObjectV:function(e,t){var i=function(){},r=(t=t||{}).onComplete||i,n=t.onChange||i,s=this;return fabric.util.animate({startValue:e.top,endValue:this.getCenter().top,duration:this.FX_DURATION,onChange:function(t){e.set("top",t),s.requestRenderAll(),n()},onComplete:function(){e.setCoords(),r()}}),this},fxRemove:function(e,t){var i=function(){},r=(t=t||{}).onComplete||i,n=t.onChange||i,s=this;return fabric.util.animate({startValue:e.opacity,endValue:0,duration:this.FX_DURATION,onChange:function(t){e.set("opacity",t),s.requestRenderAll(),n()},onComplete:function(){s.remove(e),r()}}),this}}),fabric.util.object.extend(fabric.Object.prototype,{animate:function(){if(arguments[0]&&"object"==typeof arguments[0]){var t,e,i=[];for(t in arguments[0])i.push(t);for(var r=0,n=i.length;r<n;r++)t=i[r],e=r!==n-1,this._animate(t,arguments[0][t],arguments[1],e)}else this._animate.apply(this,arguments);return this},_animate:function(r,t,n,s){var o,a=this;t=t.toString(),n=n?fabric.util.object.clone(n):{},~r.indexOf(".")&&(o=r.split("."));var e=-1<a.colorProperties.indexOf(r)||o&&-1<a.colorProperties.indexOf(o[1]),i=o?this.get(o[0])[o[1]]:this.get(r);"from"in n||(n.from=i),e||(t=~t.indexOf("=")?i+parseFloat(t.replace("=","")):parseFloat(t));var c={startValue:n.from,endValue:t,byValue:n.by,easing:n.easing,duration:n.duration,abort:n.abort&&function(){return n.abort.call(a)},onChange:function(t,e,i){o?a[o[0]][o[1]]=t:a.set(r,t),s||n.onChange&&n.onChange(t,e,i)},onComplete:function(t,e,i){s||(a.setCoords(),n.onComplete&&n.onComplete(t,e,i))}};e?fabric.util.animateColor(c.startValue,c.endValue,c.duration,c):fabric.util.animate(c)}}),function(t){"use strict";var s=t.fabric||(t.fabric={}),o=s.util.object.extend,r=s.util.object.clone,i={x1:1,x2:1,y1:1,y2:1},n=s.StaticCanvas.supports("setLineDash");function e(t,e){var i=t.origin,r=t.axis1,n=t.axis2,s=t.dimension,o=e.nearest,a=e.center,c=e.farthest;return function(){switch(this.get(i)){case o:return Math.min(this.get(r),this.get(n));case a:return Math.min(this.get(r),this.get(n))+.5*this.get(s);case c:return Math.max(this.get(r),this.get(n))}}}s.Line?s.warn("fabric.Line is already defined"):(s.Line=s.util.createClass(s.Object,{type:"line",x1:0,y1:0,x2:0,y2:0,cacheProperties:s.Object.prototype.cacheProperties.concat("x1","x2","y1","y2"),initialize:function(t,e){t||(t=[0,0,0,0]),this.callSuper("initialize",e),this.set("x1",t[0]),this.set("y1",t[1]),this.set("x2",t[2]),this.set("y2",t[3]),this._setWidthHeight(e)},_setWidthHeight:function(t){t||(t={}),this.width=Math.abs(this.x2-this.x1),this.height=Math.abs(this.y2-this.y1),this.left="left"in t?t.left:this._getLeftToOriginX(),this.top="top"in t?t.top:this._getTopToOriginY()},_set:function(t,e){return this.callSuper("_set",t,e),void 0!==i[t]&&this._setWidthHeight(),this},_getLeftToOriginX:e({origin:"originX",axis1:"x1",axis2:"x2",dimension:"width"},{nearest:"left",center:"center",farthest:"right"}),_getTopToOriginY:e({origin:"originY",axis1:"y1",axis2:"y2",dimension:"height"},{nearest:"top",center:"center",farthest:"bottom"}),_render:function(t){if(t.beginPath(),!this.strokeDashArray||this.strokeDashArray&&n){var e=this.calcLinePoints();t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2)}t.lineWidth=this.strokeWidth;var i=t.strokeStyle;t.strokeStyle=this.stroke||t.fillStyle,this.stroke&&this._renderStroke(t),t.strokeStyle=i},_renderDashedStroke:function(t){var e=this.calcLinePoints();t.beginPath(),s.util.drawDashedLine(t,e.x1,e.y1,e.x2,e.y2,this.strokeDashArray),t.closePath()},_findCenterFromElement:function(){return{x:(this.x1+this.x2)/2,y:(this.y1+this.y2)/2}},toObject:function(t){return o(this.callSuper("toObject",t),this.calcLinePoints())},_getNonTransformedDimensions:function(){var t=this.callSuper("_getNonTransformedDimensions");return"butt"===this.strokeLineCap&&(0===this.width&&(t.y-=this.strokeWidth),0===this.height&&(t.x-=this.strokeWidth)),t},calcLinePoints:function(){var t=this.x1<=this.x2?-1:1,e=this.y1<=this.y2?-1:1,i=t*this.width*.5,r=e*this.height*.5;return{x1:i,x2:t*this.width*-.5,y1:r,y2:e*this.height*-.5}},_toSVG:function(){var t=this.calcLinePoints();return["<line ","COMMON_PARTS",'x1="',t.x1,'" y1="',t.y1,'" x2="',t.x2,'" y2="',t.y2,'" />\n']}}),s.Line.ATTRIBUTE_NAMES=s.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")),s.Line.fromElement=function(t,e,i){i=i||{};var r=s.parseAttributes(t,s.Line.ATTRIBUTE_NAMES),n=[r.x1||0,r.y1||0,r.x2||0,r.y2||0];e(new s.Line(n,o(r,i)))},s.Line.fromObject=function(t,e){var i=r(t,!0);i.points=[t.x1,t.y1,t.x2,t.y2],s.Object._fromObject("Line",i,function(t){delete t.points,e&&e(t)},"points")})}( true?exports:undefined),function(t){"use strict";var a=t.fabric||(t.fabric={}),c=Math.PI;a.Circle?a.warn("fabric.Circle is already defined."):(a.Circle=a.util.createClass(a.Object,{type:"circle",radius:0,startAngle:0,endAngle:2*c,cacheProperties:a.Object.prototype.cacheProperties.concat("radius","startAngle","endAngle"),_set:function(t,e){return this.callSuper("_set",t,e),"radius"===t&&this.setRadius(e),this},toObject:function(t){return this.callSuper("toObject",["radius","startAngle","endAngle"].concat(t))},_toSVG:function(){var t,e=(this.endAngle-this.startAngle)%(2*c);if(0===e)t=["<circle ","COMMON_PARTS",'cx="0" cy="0" ','r="',this.radius,'" />\n'];else{var i=a.util.cos(this.startAngle)*this.radius,r=a.util.sin(this.startAngle)*this.radius,n=a.util.cos(this.endAngle)*this.radius,s=a.util.sin(this.endAngle)*this.radius,o=c<e?"1":"0";t=['<path d="M '+i+" "+r," A "+this.radius+" "+this.radius," 0 ",+o+" 1"," "+n+" "+s,'" ',"COMMON_PARTS"," />\n"]}return t},_render:function(t){t.beginPath(),t.arc(0,0,this.radius,this.startAngle,this.endAngle,!1),this._renderPaintInOrder(t)},getRadiusX:function(){return this.get("radius")*this.get("scaleX")},getRadiusY:function(){return this.get("radius")*this.get("scaleY")},setRadius:function(t){return this.radius=t,this.set("width",2*t).set("height",2*t)}}),a.Circle.ATTRIBUTE_NAMES=a.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")),a.Circle.fromElement=function(t,e){var i,r=a.parseAttributes(t,a.Circle.ATTRIBUTE_NAMES);if(!("radius"in(i=r)&&0<=i.radius))throw new Error("value of `r` attribute is required and can not be negative");r.left=(r.left||0)-r.radius,r.top=(r.top||0)-r.radius,e(new a.Circle(r))},a.Circle.fromObject=function(t,e){return a.Object._fromObject("Circle",t,e)})}( true?exports:undefined),function(t){"use strict";var r=t.fabric||(t.fabric={});r.Triangle?r.warn("fabric.Triangle is already defined"):(r.Triangle=r.util.createClass(r.Object,{type:"triangle",width:100,height:100,_render:function(t){var e=this.width/2,i=this.height/2;t.beginPath(),t.moveTo(-e,i),t.lineTo(0,-i),t.lineTo(e,i),t.closePath(),this._renderPaintInOrder(t)},_renderDashedStroke:function(t){var e=this.width/2,i=this.height/2;t.beginPath(),r.util.drawDashedLine(t,-e,i,0,-i,this.strokeDashArray),r.util.drawDashedLine(t,0,-i,e,i,this.strokeDashArray),r.util.drawDashedLine(t,e,i,-e,i,this.strokeDashArray),t.closePath()},_toSVG:function(){var t=this.width/2,e=this.height/2;return["<polygon ","COMMON_PARTS",'points="',[-t+" "+e,"0 "+-e,t+" "+e].join(","),'" />']}}),r.Triangle.fromObject=function(t,e){return r.Object._fromObject("Triangle",t,e)})}( true?exports:undefined),function(t){"use strict";var r=t.fabric||(t.fabric={}),e=2*Math.PI;r.Ellipse?r.warn("fabric.Ellipse is already defined."):(r.Ellipse=r.util.createClass(r.Object,{type:"ellipse",rx:0,ry:0,cacheProperties:r.Object.prototype.cacheProperties.concat("rx","ry"),initialize:function(t){this.callSuper("initialize",t),this.set("rx",t&&t.rx||0),this.set("ry",t&&t.ry||0)},_set:function(t,e){switch(this.callSuper("_set",t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this},getRx:function(){return this.get("rx")*this.get("scaleX")},getRy:function(){return this.get("ry")*this.get("scaleY")},toObject:function(t){return this.callSuper("toObject",["rx","ry"].concat(t))},_toSVG:function(){return["<ellipse ","COMMON_PARTS",'cx="0" cy="0" ','rx="',this.rx,'" ry="',this.ry,'" />\n']},_render:function(t){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(0,0,this.rx,0,e,!1),t.restore(),this._renderPaintInOrder(t)}}),r.Ellipse.ATTRIBUTE_NAMES=r.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")),r.Ellipse.fromElement=function(t,e){var i=r.parseAttributes(t,r.Ellipse.ATTRIBUTE_NAMES);i.left=(i.left||0)-i.rx,i.top=(i.top||0)-i.ry,e(new r.Ellipse(i))},r.Ellipse.fromObject=function(t,e){return r.Object._fromObject("Ellipse",t,e)})}( true?exports:undefined),function(t){"use strict";var s=t.fabric||(t.fabric={}),o=s.util.object.extend;s.Rect?s.warn("fabric.Rect is already defined"):(s.Rect=s.util.createClass(s.Object,{stateProperties:s.Object.prototype.stateProperties.concat("rx","ry"),type:"rect",rx:0,ry:0,cacheProperties:s.Object.prototype.cacheProperties.concat("rx","ry"),initialize:function(t){this.callSuper("initialize",t),this._initRxRy()},_initRxRy:function(){this.rx&&!this.ry?this.ry=this.rx:this.ry&&!this.rx&&(this.rx=this.ry)},_render:function(t){var e=this.rx?Math.min(this.rx,this.width/2):0,i=this.ry?Math.min(this.ry,this.height/2):0,r=this.width,n=this.height,s=-this.width/2,o=-this.height/2,a=0!==e||0!==i,c=.4477152502;t.beginPath(),t.moveTo(s+e,o),t.lineTo(s+r-e,o),a&&t.bezierCurveTo(s+r-c*e,o,s+r,o+c*i,s+r,o+i),t.lineTo(s+r,o+n-i),a&&t.bezierCurveTo(s+r,o+n-c*i,s+r-c*e,o+n,s+r-e,o+n),t.lineTo(s+e,o+n),a&&t.bezierCurveTo(s+c*e,o+n,s,o+n-c*i,s,o+n-i),t.lineTo(s,o+i),a&&t.bezierCurveTo(s,o+c*i,s+c*e,o,s+e,o),t.closePath(),this._renderPaintInOrder(t)},_renderDashedStroke:function(t){var e=-this.width/2,i=-this.height/2,r=this.width,n=this.height;t.beginPath(),s.util.drawDashedLine(t,e,i,e+r,i,this.strokeDashArray),s.util.drawDashedLine(t,e+r,i,e+r,i+n,this.strokeDashArray),s.util.drawDashedLine(t,e+r,i+n,e,i+n,this.strokeDashArray),s.util.drawDashedLine(t,e,i+n,e,i,this.strokeDashArray),t.closePath()},toObject:function(t){return this.callSuper("toObject",["rx","ry"].concat(t))},_toSVG:function(){return["<rect ","COMMON_PARTS",'x="',-this.width/2,'" y="',-this.height/2,'" rx="',this.rx,'" ry="',this.ry,'" width="',this.width,'" height="',this.height,'" />\n']}}),s.Rect.ATTRIBUTE_NAMES=s.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")),s.Rect.fromElement=function(t,e,i){if(!t)return e(null);i=i||{};var r=s.parseAttributes(t,s.Rect.ATTRIBUTE_NAMES);r.left=r.left||0,r.top=r.top||0,r.height=r.height||0,r.width=r.width||0;var n=new s.Rect(o(i?s.util.object.clone(i):{},r));n.visible=n.visible&&0<n.width&&0<n.height,e(n)},s.Rect.fromObject=function(t,e){return s.Object._fromObject("Rect",t,e)})}( true?exports:undefined),function(t){"use strict";var o=t.fabric||(t.fabric={}),a=o.util.object.extend,r=o.util.array.min,n=o.util.array.max,c=o.util.toFixed;o.Polyline?o.warn("fabric.Polyline is already defined"):(o.Polyline=o.util.createClass(o.Object,{type:"polyline",points:null,cacheProperties:o.Object.prototype.cacheProperties.concat("points"),initialize:function(t,e){e=e||{},this.points=t||[],this.callSuper("initialize",e),this._setPositionDimensions(e)},_setPositionDimensions:function(t){var e,i=this._calcDimensions(t);this.width=i.width,this.height=i.height,t.fromSVG||(e=this.translateToGivenOrigin({x:i.left-this.strokeWidth/2,y:i.top-this.strokeWidth/2},"left","top",this.originX,this.originY)),void 0===t.left&&(this.left=t.fromSVG?i.left:e.x),void 0===t.top&&(this.top=t.fromSVG?i.top:e.y),this.pathOffset={x:i.left+this.width/2,y:i.top+this.height/2}},_calcDimensions:function(){var t=this.points,e=r(t,"x")||0,i=r(t,"y")||0;return{left:e,top:i,width:(n(t,"x")||0)-e,height:(n(t,"y")||0)-i}},toObject:function(t){return a(this.callSuper("toObject",t),{points:this.points.concat()})},_toSVG:function(){for(var t=[],e=this.pathOffset.x,i=this.pathOffset.y,r=o.Object.NUM_FRACTION_DIGITS,n=0,s=this.points.length;n<s;n++)t.push(c(this.points[n].x-e,r),",",c(this.points[n].y-i,r)," ");return["<"+this.type+" ","COMMON_PARTS",'points="',t.join(""),'" />\n']},commonRender:function(t){var e,i=this.points.length,r=this.pathOffset.x,n=this.pathOffset.y;if(!i||isNaN(this.points[i-1].y))return!1;t.beginPath(),t.moveTo(this.points[0].x-r,this.points[0].y-n);for(var s=0;s<i;s++)e=this.points[s],t.lineTo(e.x-r,e.y-n);return!0},_render:function(t){this.commonRender(t)&&this._renderPaintInOrder(t)},_renderDashedStroke:function(t){var e,i;t.beginPath();for(var r=0,n=this.points.length;r<n;r++)e=this.points[r],i=this.points[r+1]||e,o.util.drawDashedLine(t,e.x,e.y,i.x,i.y,this.strokeDashArray)},complexity:function(){return this.get("points").length}}),o.Polyline.ATTRIBUTE_NAMES=o.SHARED_ATTRIBUTES.concat(),o.Polyline.fromElementGenerator=function(s){return function(t,e,i){if(!t)return e(null);i||(i={});var r=o.parsePointsAttribute(t.getAttribute("points")),n=o.parseAttributes(t,o[s].ATTRIBUTE_NAMES);n.fromSVG=!0,e(new o[s](r,a(n,i)))}},o.Polyline.fromElement=o.Polyline.fromElementGenerator("Polyline"),o.Polyline.fromObject=function(t,e){return o.Object._fromObject("Polyline",t,e,"points")})}( true?exports:undefined),function(t){"use strict";var i=t.fabric||(t.fabric={});i.Polygon?i.warn("fabric.Polygon is already defined"):(i.Polygon=i.util.createClass(i.Polyline,{type:"polygon",_render:function(t){this.commonRender(t)&&(t.closePath(),this._renderPaintInOrder(t))},_renderDashedStroke:function(t){this.callSuper("_renderDashedStroke",t),t.closePath()}}),i.Polygon.ATTRIBUTE_NAMES=i.SHARED_ATTRIBUTES.concat(),i.Polygon.fromElement=i.Polyline.fromElementGenerator("Polygon"),i.Polygon.fromObject=function(t,e){return i.Object._fromObject("Polygon",t,e,"points")})}( true?exports:undefined),function(t){"use strict";var f=t.fabric||(t.fabric={}),d=f.util.array.min,g=f.util.array.max,n=f.util.object.extend,r=Object.prototype.toString,e=f.util.toFixed;f.Path?f.warn("fabric.Path is already defined"):(f.Path=f.util.createClass(f.Object,{type:"path",path:null,cacheProperties:f.Object.prototype.cacheProperties.concat("path","fillRule"),stateProperties:f.Object.prototype.stateProperties.concat("path"),initialize:function(t,e){e=e||{},this.callSuper("initialize",e),t||(t=[]);var i="[object Array]"===r.call(t);this.path=i?f.util.makePathSimpler(t):f.util.makePathSimpler(f.util.parsePath(t)),this.path&&f.Polyline.prototype._setPositionDimensions.call(this,e)},_renderPathCommands:function(t){var e,i=0,r=0,n=0,s=0,o=0,a=0,c=-this.pathOffset.x,h=-this.pathOffset.y;t.beginPath();for(var l=0,u=this.path.length;l<u;++l)switch((e=this.path[l])[0]){case"L":n=e[1],s=e[2],t.lineTo(n+c,s+h);break;case"M":i=n=e[1],r=s=e[2],t.moveTo(n+c,s+h);break;case"C":n=e[5],s=e[6],o=e[3],a=e[4],t.bezierCurveTo(e[1]+c,e[2]+h,o+c,a+h,n+c,s+h);break;case"Q":t.quadraticCurveTo(e[1]+c,e[2]+h,e[3]+c,e[4]+h),n=e[3],s=e[4],o=e[1],a=e[2];break;case"z":case"Z":n=i,s=r,t.closePath()}},_render:function(t){this._renderPathCommands(t),this._renderPaintInOrder(t)},toString:function(){return"#<fabric.Path ("+this.complexity()+'): { "top": '+this.top+', "left": '+this.left+" }>"},toObject:function(t){return n(this.callSuper("toObject",t),{path:this.path.map(function(t){return t.slice()})})},toDatalessObject:function(t){var e=this.toObject(["sourcePath"].concat(t));return e.sourcePath&&delete e.path,e},_toSVG:function(){return["<path ","COMMON_PARTS",'d="',this.path.map(function(t){return t.join(" ")}).join(" "),'" stroke-linecap="round" ',"/>\n"]},_getOffsetTransform:function(){var t=f.Object.NUM_FRACTION_DIGITS;return" translate("+e(-this.pathOffset.x,t)+", "+e(-this.pathOffset.y,t)+")"},toClipPathSVG:function(t){var e=this._getOffsetTransform();return"\t"+this._createBaseClipPathSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})},toSVG:function(t){var e=this._getOffsetTransform();return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})},complexity:function(){return this.path.length},_calcDimensions:function(){for(var t,e,i=[],r=[],n=0,s=0,o=0,a=0,c=0,h=this.path.length;c<h;++c){switch((t=this.path[c])[0]){case"L":o=t[1],a=t[2],e=[];break;case"M":n=o=t[1],s=a=t[2],e=[];break;case"C":e=f.util.getBoundsOfCurve(o,a,t[1],t[2],t[3],t[4],t[5],t[6]),o=t[5],a=t[6];break;case"Q":e=f.util.getBoundsOfCurve(o,a,t[1],t[2],t[1],t[2],t[3],t[4]),o=t[3],a=t[4];break;case"z":case"Z":o=n,a=s}e.forEach(function(t){i.push(t.x),r.push(t.y)}),i.push(o),r.push(a)}var l=d(i)||0,u=d(r)||0;return{left:l,top:u,width:(g(i)||0)-l,height:(g(r)||0)-u}}}),f.Path.fromObject=function(i,r){if("string"==typeof i.sourcePath){var t=i.sourcePath;f.loadSVGFromURL(t,function(t){var e=t[0];e.setOptions(i),r&&r(e)})}else f.Object._fromObject("Path",i,r,"path")},f.Path.ATTRIBUTE_NAMES=f.SHARED_ATTRIBUTES.concat(["d"]),f.Path.fromElement=function(t,e,i){var r=f.parseAttributes(t,f.Path.ATTRIBUTE_NAMES);r.fromSVG=!0,e(new f.Path(r.d,n(r,i)))})}( true?exports:undefined),function(t){"use strict";var h=t.fabric||(t.fabric={}),l=h.util.array.min,u=h.util.array.max;h.Group||(h.Group=h.util.createClass(h.Object,h.Collection,{type:"group",strokeWidth:0,subTargetCheck:!1,cacheProperties:[],useSetOnGroup:!1,initialize:function(t,e,i){e=e||{},this._objects=[],i&&this.callSuper("initialize",e),this._objects=t||[];for(var r=this._objects.length;r--;)this._objects[r].group=this;if(i)this._updateObjectsACoords();else{var n=e&&e.centerPoint;void 0!==e.originX&&(this.originX=e.originX),void 0!==e.originY&&(this.originY=e.originY),n||this._calcBounds(),this._updateObjectsCoords(n),delete e.centerPoint,this.callSuper("initialize",e)}this.setCoords()},_updateObjectsACoords:function(){for(var t=this._objects.length;t--;)this._objects[t].setCoords(!0)},_updateObjectsCoords:function(t){t=t||this.getCenterPoint();for(var e=this._objects.length;e--;)this._updateObjectCoords(this._objects[e],t)},_updateObjectCoords:function(t,e){var i=t.left,r=t.top;t.set({left:i-e.x,top:r-e.y}),t.group=this,t.setCoords(!0)},toString:function(){return"#<fabric.Group: ("+this.complexity()+")>"},addWithUpdate:function(t){return this._restoreObjectsState(),h.util.resetObjectTransform(this),t&&(this._objects.push(t),t.group=this,t._set("canvas",this.canvas)),this._calcBounds(),this._updateObjectsCoords(),this.setCoords(),this.dirty=!0,this},removeWithUpdate:function(t){return this._restoreObjectsState(),h.util.resetObjectTransform(this),this.remove(t),this._calcBounds(),this._updateObjectsCoords(),this.setCoords(),this.dirty=!0,this},_onObjectAdded:function(t){this.dirty=!0,t.group=this,t._set("canvas",this.canvas)},_onObjectRemoved:function(t){this.dirty=!0,delete t.group},_set:function(t,e){var i=this._objects.length;if(this.useSetOnGroup)for(;i--;)this._objects[i].setOnGroup(t,e);if("canvas"===t)for(;i--;)this._objects[i]._set(t,e);h.Object.prototype._set.call(this,t,e)},toObject:function(r){var n=this.includeDefaultValues,t=this._objects.map(function(t){var e=t.includeDefaultValues;t.includeDefaultValues=n;var i=t.toObject(r);return t.includeDefaultValues=e,i}),e=h.Object.prototype.toObject.call(this,r);return e.objects=t,e},toDatalessObject:function(r){var t,e=this.sourcePath;if(e)t=e;else{var n=this.includeDefaultValues;t=this._objects.map(function(t){var e=t.includeDefaultValues;t.includeDefaultValues=n;var i=t.toDatalessObject(r);return t.includeDefaultValues=e,i})}var i=h.Object.prototype.toDatalessObject.call(this,r);return i.objects=t,i},render:function(t){this._transformDone=!0,this.callSuper("render",t),this._transformDone=!1},shouldCache:function(){var t=h.Object.prototype.shouldCache.call(this);if(t)for(var e=0,i=this._objects.length;e<i;e++)if(this._objects[e].willDrawShadow())return this.ownCaching=!1;return t},willDrawShadow:function(){if(h.Object.prototype.willDrawShadow.call(this))return!0;for(var t=0,e=this._objects.length;t<e;t++)if(this._objects[t].willDrawShadow())return!0;return!1},isOnACache:function(){return this.ownCaching||this.group&&this.group.isOnACache()},drawObject:function(t){for(var e=0,i=this._objects.length;e<i;e++)this._objects[e].render(t);this._drawClipPath(t)},isCacheDirty:function(t){if(this.callSuper("isCacheDirty",t))return!0;if(!this.statefullCache)return!1;for(var e=0,i=this._objects.length;e<i;e++)if(this._objects[e].isCacheDirty(!0)){if(this._cacheCanvas){var r=this.cacheWidth/this.zoomX,n=this.cacheHeight/this.zoomY;this._cacheContext.clearRect(-r/2,-n/2,r,n)}return!0}return!1},_restoreObjectsState:function(){return this._objects.forEach(this._restoreObjectState,this),this},realizeTransform:function(t){var e=t.calcTransformMatrix(),i=h.util.qrDecompose(e),r=new h.Point(i.translateX,i.translateY);return t.flipX=!1,t.flipY=!1,t.set("scaleX",i.scaleX),t.set("scaleY",i.scaleY),t.skewX=i.skewX,t.skewY=i.skewY,t.angle=i.angle,t.setPositionByOrigin(r,"center","center"),t},_restoreObjectState:function(t){return this.realizeTransform(t),delete t.group,t.setCoords(),this},destroy:function(){return this._objects.forEach(function(t){t.set("dirty",!0)}),this._restoreObjectsState()},toActiveSelection:function(){if(this.canvas){var t=this._objects,e=this.canvas;this._objects=[];var i=this.toObject();delete i.objects;var r=new h.ActiveSelection([]);return r.set(i),r.type="activeSelection",e.remove(this),t.forEach(function(t){t.group=r,t.dirty=!0,e.add(t)}),r.canvas=e,r._objects=t,(e._activeObject=r).setCoords(),r}},ungroupOnCanvas:function(){return this._restoreObjectsState()},setObjectsCoords:function(){return this.forEachObject(function(t){t.setCoords(!0)}),this},_calcBounds:function(t){for(var e,i,r,n=[],s=[],o=["tr","br","bl","tl"],a=0,c=this._objects.length,h=o.length;a<c;++a)for((e=this._objects[a]).aCoords=e.calcACoords(),r=0;r<h;r++)i=o[r],n.push(e.aCoords[i].x),s.push(e.aCoords[i].y);this._getBounds(n,s,t)},_getBounds:function(t,e,i){var r=new h.Point(l(t),l(e)),n=new h.Point(u(t),u(e)),s=r.y||0,o=r.x||0,a=n.x-r.x||0,c=n.y-r.y||0;this.width=a,this.height=c,i||this.setPositionByOrigin({x:o,y:s},"left","top")},_toSVG:function(t){for(var e=["<g ","COMMON_PARTS"," >\n"],i=0,r=this._objects.length;i<r;i++)e.push("\t\t",this._objects[i].toSVG(t));return e.push("</g>\n"),e},getSvgStyles:function(){var t=void 0!==this.opacity&&1!==this.opacity?"opacity: "+this.opacity+";":"",e=this.visible?"":" visibility: hidden;";return[t,this.getSvgFilter(),e].join("")},toClipPathSVG:function(t){for(var e=[],i=0,r=this._objects.length;i<r;i++)e.push("\t",this._objects[i].toClipPathSVG(t));return this._createBaseClipPathSVGMarkup(e,{reviver:t})}}),h.Group.fromObject=function(r,n){var i=r.objects,s=h.util.object.clone(r,!0);delete s.objects,"string"!=typeof i?h.util.enlivenObjects(i,function(i){h.util.enlivenObjects([r.clipPath],function(t){var e=h.util.object.clone(r,!0);e.clipPath=t[0],delete e.objects,n&&n(new h.Group(i,e,!0))})}):h.loadSVGFromURL(i,function(t){var e=h.util.groupSVGElements(t,r,i);e.set(s),n&&n(e)})})}( true?exports:undefined),function(t){"use strict";var n=t.fabric||(t.fabric={});n.ActiveSelection||(n.ActiveSelection=n.util.createClass(n.Group,{type:"activeSelection",initialize:function(t,e){e=e||{},this._objects=t||[];for(var i=this._objects.length;i--;)this._objects[i].group=this;e.originX&&(this.originX=e.originX),e.originY&&(this.originY=e.originY),this._calcBounds(),this._updateObjectsCoords(),n.Object.prototype.initialize.call(this,e),this.setCoords()},toGroup:function(){var t=this._objects.concat();this._objects=[];var e=n.Object.prototype.toObject.call(this),i=new n.Group([]);if(delete e.type,i.set(e),t.forEach(function(t){t.canvas.remove(t),t.group=i}),i._objects=t,!this.canvas)return i;var r=this.canvas;return r.add(i),(r._activeObject=i).setCoords(),i},onDeselect:function(){return this.destroy(),!1},toString:function(){return"#<fabric.ActiveSelection: ("+this.complexity()+")>"},shouldCache:function(){return!1},isOnACache:function(){return!1},_renderControls:function(t,e,i){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,this.callSuper("_renderControls",t,e),void 0===(i=i||{}).hasControls&&(i.hasControls=!1),i.forActiveSelection=!0;for(var r=0,n=this._objects.length;r<n;r++)this._objects[r]._renderControls(t,i);t.restore()}}),n.ActiveSelection.fromObject=function(e,i){n.util.enlivenObjects(e.objects,function(t){delete e.objects,i&&i(new n.ActiveSelection(t,e,!0))})})}( true?exports:undefined),function(t){"use strict";var n=fabric.util.object.extend;t.fabric||(t.fabric={}),t.fabric.Image?fabric.warn("fabric.Image is already defined."):(fabric.Image=fabric.util.createClass(fabric.Object,{type:"image",strokeWidth:0,srcFromAttribute:!1,_lastScaleX:1,_lastScaleY:1,_filterScalingX:1,_filterScalingY:1,minimumScaleTrigger:.5,stateProperties:fabric.Object.prototype.stateProperties.concat("cropX","cropY"),cacheKey:"",cropX:0,cropY:0,imageSmoothing:!0,initialize:function(t,e){e||(e={}),this.filters=[],this.cacheKey="texture"+fabric.Object.__uid++,this.callSuper("initialize",e),this._initElement(t,e)},getElement:function(){return this._element||{}},setElement:function(t,e){return this.removeTexture(this.cacheKey),this.removeTexture(this.cacheKey+"_filtered"),this._element=t,this._originalElement=t,this._initConfig(e),0!==this.filters.length&&this.applyFilters(),this.resizeFilter&&this.applyResizeFilters(),this},removeTexture:function(t){var e=fabric.filterBackend;e&&e.evictCachesForKey&&e.evictCachesForKey(t)},dispose:function(){this.removeTexture(this.cacheKey),this.removeTexture(this.cacheKey+"_filtered"),this._cacheContext=void 0,["_originalElement","_element","_filteredEl","_cacheCanvas"].forEach(function(t){fabric.util.cleanUpJsdomNode(this[t]),this[t]=void 0}.bind(this))},getCrossOrigin:function(){return this._originalElement&&(this._originalElement.crossOrigin||null)},getOriginalSize:function(){var t=this.getElement();return{width:t.naturalWidth||t.width,height:t.naturalHeight||t.height}},_stroke:function(t){if(this.stroke&&0!==this.strokeWidth){var e=this.width/2,i=this.height/2;t.beginPath(),t.moveTo(-e,-i),t.lineTo(e,-i),t.lineTo(e,i),t.lineTo(-e,i),t.lineTo(-e,-i),t.closePath()}},_renderDashedStroke:function(t){var e=-this.width/2,i=-this.height/2,r=this.width,n=this.height;t.save(),this._setStrokeStyles(t,this),t.beginPath(),fabric.util.drawDashedLine(t,e,i,e+r,i,this.strokeDashArray),fabric.util.drawDashedLine(t,e+r,i,e+r,i+n,this.strokeDashArray),fabric.util.drawDashedLine(t,e+r,i+n,e,i+n,this.strokeDashArray),fabric.util.drawDashedLine(t,e,i+n,e,i,this.strokeDashArray),t.closePath(),t.restore()},toObject:function(t){var e=[];this.filters.forEach(function(t){t&&e.push(t.toObject())});var i=n(this.callSuper("toObject",["cropX","cropY"].concat(t)),{src:this.getSrc(),crossOrigin:this.getCrossOrigin(),filters:e});return this.resizeFilter&&(i.resizeFilter=this.resizeFilter.toObject()),i},hasCrop:function(){return this.cropX||this.cropY||this.width<this._element.width||this.height<this._element.height},_toSVG:function(){var t,e=[],i=[],r=this._element,n=-this.width/2,s=-this.height/2,o="",a="";if(!r)return[];if(this.hasCrop()){var c=fabric.Object.__uid++;e.push('<clipPath id="imageCrop_'+c+'">\n','\t<rect x="'+n+'" y="'+s+'" width="'+this.width+'" height="'+this.height+'" />\n',"</clipPath>\n"),o=' clip-path="url(#imageCrop_'+c+')" '}if(this.imageSmoothing||(a='" image-rendering="optimizeSpeed'),i.push("\t<image ","COMMON_PARTS",'xlink:href="',this.getSvgSrc(!0),'" x="',n-this.cropX,'" y="',s-this.cropY,'" width="',r.width||r.naturalWidth,'" height="',r.height||r.height,a,'"',o,"></image>\n"),this.stroke||this.strokeDashArray){var h=this.fill;this.fill=null,t=["\t<rect ",'x="',n,'" y="',s,'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'"/>\n'],this.fill=h}return e="fill"!==this.paintFirst?e.concat(t,i):e.concat(i,t)},getSrc:function(t){var e=t?this._element:this._originalElement;return e?e.toDataURL?e.toDataURL():this.srcFromAttribute?e.getAttribute("src"):e.src:this.src||""},setSrc:function(t,i,r){return fabric.util.loadImage(t,function(t,e){this.setElement(t,r),this._setWidthHeight(),i&&i(this,e)},this,r&&r.crossOrigin),this},toString:function(){return'#<fabric.Image: { src: "'+this.getSrc()+'" }>'},applyResizeFilters:function(){var t=this.resizeFilter,e=this.minimumScaleTrigger,i=this.getTotalObjectScaling(),r=i.scaleX,n=i.scaleY,s=this._filteredEl||this._originalElement;if(this.group&&this.set("dirty",!0),!t||e<r&&e<n)return this._element=s,this._filterScalingX=1,this._filterScalingY=1,this._lastScaleX=r,void(this._lastScaleY=n);fabric.filterBackend||(fabric.filterBackend=fabric.initFilterBackend());var o=fabric.util.createCanvasElement(),a=this._filteredEl?this.cacheKey+"_filtered":this.cacheKey,c=s.width,h=s.height;o.width=c,o.height=h,this._element=o,this._lastScaleX=t.scaleX=r,this._lastScaleY=t.scaleY=n,fabric.filterBackend.applyFilters([t],s,c,h,this._element,a),this._filterScalingX=o.width/this._originalElement.width,this._filterScalingY=o.height/this._originalElement.height},applyFilters:function(t){if(t=(t=t||this.filters||[]).filter(function(t){return t&&!t.isNeutralState()}),this.set("dirty",!0),this.removeTexture(this.cacheKey+"_filtered"),0===t.length)return this._element=this._originalElement,this._filteredEl=null,this._filterScalingX=1,this._filterScalingY=1,this;var e=this._originalElement,i=e.naturalWidth||e.width,r=e.naturalHeight||e.height;if(this._element===this._originalElement){var n=fabric.util.createCanvasElement();n.width=i,n.height=r,this._element=n,this._filteredEl=n}else this._element=this._filteredEl,this._filteredEl.getContext("2d").clearRect(0,0,i,r),this._lastScaleX=1,this._lastScaleY=1;return fabric.filterBackend||(fabric.filterBackend=fabric.initFilterBackend()),fabric.filterBackend.applyFilters(t,this._originalElement,i,r,this._element,this.cacheKey),this._originalElement.width===this._element.width&&this._originalElement.height===this._element.height||(this._filterScalingX=this._element.width/this._originalElement.width,this._filterScalingY=this._element.height/this._originalElement.height),this},_render:function(t){fabric.util.setImageSmoothing(t,this.imageSmoothing),!0!==this.isMoving&&this.resizeFilter&&this._needsResize()&&this.applyResizeFilters(),this._stroke(t),this._renderPaintInOrder(t)},drawCacheOnCanvas:function(t){fabric.util.setImageSmoothing(t,this.imageSmoothing),fabric.Object.prototype.drawCacheOnCanvas.call(this,t)},shouldCache:function(){return this.needsItsOwnCache()},_renderFill:function(t){var e=this._element;if(e){var i=this._filterScalingX,r=this._filterScalingY,n=this.width,s=this.height,o=Math.min,a=Math.max,c=a(this.cropX,0),h=a(this.cropY,0),l=e.naturalWidth||e.width,u=e.naturalHeight||e.height,f=c*i,d=h*r,g=o(n*i,l-f),p=o(s*r,u-d),v=-n/2,m=-s/2,b=o(n,l/i-c),_=o(s,u/i-h);e&&t.drawImage(e,f,d,g,p,v,m,b,_)}},_needsResize:function(){var t=this.getTotalObjectScaling();return t.scaleX!==this._lastScaleX||t.scaleY!==this._lastScaleY},_resetWidthHeight:function(){this.set(this.getOriginalSize())},_initElement:function(t,e){this.setElement(fabric.util.getById(t),e),fabric.util.addClass(this.getElement(),fabric.Image.CSS_CANVAS)},_initConfig:function(t){t||(t={}),this.setOptions(t),this._setWidthHeight(t)},_initFilters:function(t,e){t&&t.length?fabric.util.enlivenObjects(t,function(t){e&&e(t)},"fabric.Image.filters"):e&&e()},_setWidthHeight:function(t){t||(t={});var e=this.getElement();this.width=t.width||e.naturalWidth||e.width||0,this.height=t.height||e.naturalHeight||e.height||0},parsePreserveAspectRatioAttribute:function(){var t,e=fabric.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio||""),i=this._element.width,r=this._element.height,n=1,s=1,o=0,a=0,c=0,h=0,l=this.width,u=this.height,f={width:l,height:u};return!e||"none"===e.alignX&&"none"===e.alignY?(n=l/i,s=u/r):("meet"===e.meetOrSlice&&(t=(l-i*(n=s=fabric.util.findScaleToFit(this._element,f)))/2,"Min"===e.alignX&&(o=-t),"Max"===e.alignX&&(o=t),t=(u-r*s)/2,"Min"===e.alignY&&(a=-t),"Max"===e.alignY&&(a=t)),"slice"===e.meetOrSlice&&(t=i-l/(n=s=fabric.util.findScaleToCover(this._element,f)),"Mid"===e.alignX&&(c=t/2),"Max"===e.alignX&&(c=t),t=r-u/s,"Mid"===e.alignY&&(h=t/2),"Max"===e.alignY&&(h=t),i=l/n,r=u/s)),{width:i,height:r,scaleX:n,scaleY:s,offsetLeft:o,offsetTop:a,cropX:c,cropY:h}}}),fabric.Image.CSS_CANVAS="canvas-img",fabric.Image.prototype.getSvgSrc=fabric.Image.prototype.getSrc,fabric.Image.fromObject=function(t,r){var n=fabric.util.object.clone(t);fabric.util.loadImage(n.src,function(i,t){t?r&&r(null,!0):fabric.Image.prototype._initFilters.call(n,n.filters,function(t){n.filters=t||[],fabric.Image.prototype._initFilters.call(n,[n.resizeFilter],function(t){n.resizeFilter=t[0],fabric.util.enlivenObjects([n.clipPath],function(t){n.clipPath=t[0];var e=new fabric.Image(i,n);r(e,!1)})})})},null,n.crossOrigin)},fabric.Image.fromURL=function(t,i,r){fabric.util.loadImage(t,function(t,e){i&&i(new fabric.Image(t,r),e)},null,r&&r.crossOrigin)},fabric.Image.ATTRIBUTE_NAMES=fabric.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")),fabric.Image.fromElement=function(t,e,i){var r=fabric.parseAttributes(t,fabric.Image.ATTRIBUTE_NAMES);fabric.Image.fromURL(r["xlink:href"],e,n(i?fabric.util.object.clone(i):{},r))})}( true?exports:undefined),fabric.util.object.extend(fabric.Object.prototype,{_getAngleValueForStraighten:function(){var t=this.angle%360;return 0<t?90*Math.round((t-1)/90):90*Math.round(t/90)},straighten:function(){return this.rotate(this._getAngleValueForStraighten()),this},fxStraighten:function(t){var e=function(){},i=(t=t||{}).onComplete||e,r=t.onChange||e,n=this;return fabric.util.animate({startValue:this.get("angle"),endValue:this._getAngleValueForStraighten(),duration:this.FX_DURATION,onChange:function(t){n.rotate(t),r()},onComplete:function(){n.setCoords(),i()}}),this}}),fabric.util.object.extend(fabric.StaticCanvas.prototype,{straightenObject:function(t){return t.straighten(),this.requestRenderAll(),this},fxStraightenObject:function(t){return t.fxStraighten({onChange:this.requestRenderAllBound}),this}}),function(){"use strict";function t(t){t&&t.tileSize&&(this.tileSize=t.tileSize),this.setupGLContext(this.tileSize,this.tileSize),this.captureGPUInfo()}fabric.isWebglSupported=function(t){if(fabric.isLikelyNode)return!1;t=t||fabric.WebglFilterBackend.prototype.tileSize;var e,i,r,n=document.createElement("canvas"),s=n.getContext("webgl")||n.getContext("experimental-webgl"),o=!1;if(s){fabric.maxTextureSize=s.getParameter(s.MAX_TEXTURE_SIZE),o=fabric.maxTextureSize>=t;for(var a=["highp","mediump","lowp"],c=0;c<3;c++)if(void 0,i="precision "+a[c]+" float;\nvoid main(){}",r=(e=s).createShader(e.FRAGMENT_SHADER),e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)){fabric.webGlPrecision=a[c];break}}return this.isSupported=o},(fabric.WebglFilterBackend=t).prototype={tileSize:2048,resources:{},setupGLContext:function(t,e){this.dispose(),this.createWebGLCanvas(t,e),this.aPosition=new Float32Array([0,0,0,1,1,0,1,1]),this.chooseFastestCopyGLTo2DMethod(t,e)},chooseFastestCopyGLTo2DMethod:function(t,e){var i,r=void 0!==window.performance;try{new ImageData(1,1),i=!0}catch(t){i=!1}var n="undefined"!=typeof ArrayBuffer,s="undefined"!=typeof Uint8ClampedArray;if(r&&i&&n&&s){var o=fabric.util.createCanvasElement(),a=new ArrayBuffer(t*e*4);if(fabric.forceGLPutImageData)return this.imageBuffer=a,void(this.copyGLTo2D=copyGLTo2DPutImageData);var c,h,l={imageBuffer:a,destinationWidth:t,destinationHeight:e,targetCanvas:o};o.width=t,o.height=e,c=window.performance.now(),copyGLTo2DDrawImage.call(l,this.gl,l),h=window.performance.now()-c,c=window.performance.now(),copyGLTo2DPutImageData.call(l,this.gl,l),window.performance.now()-c<h?(this.imageBuffer=a,this.copyGLTo2D=copyGLTo2DPutImageData):this.copyGLTo2D=copyGLTo2DDrawImage}},createWebGLCanvas:function(t,e){var i=fabric.util.createCanvasElement();i.width=t,i.height=e;var r={alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1},n=i.getContext("webgl",r);n||(n=i.getContext("experimental-webgl",r)),n&&(n.clearColor(0,0,0,0),this.canvas=i,this.gl=n)},applyFilters:function(t,e,i,r,n,s){var o,a=this.gl;s&&(o=this.getCachedTexture(s,e));var c={originalWidth:e.width||e.originalWidth,originalHeight:e.height||e.originalHeight,sourceWidth:i,sourceHeight:r,destinationWidth:i,destinationHeight:r,context:a,sourceTexture:this.createTexture(a,i,r,!o&&e),targetTexture:this.createTexture(a,i,r),originalTexture:o||this.createTexture(a,i,r,!o&&e),passes:t.length,webgl:!0,aPosition:this.aPosition,programCache:this.programCache,pass:0,filterBackend:this,targetCanvas:n},h=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,h),t.forEach(function(t){t&&t.applyTo(c)}),resizeCanvasIfNeeded(c),this.copyGLTo2D(a,c),a.bindTexture(a.TEXTURE_2D,null),a.deleteTexture(c.sourceTexture),a.deleteTexture(c.targetTexture),a.deleteFramebuffer(h),n.getContext("2d").setTransform(1,0,0,1,0,0),c},dispose:function(){this.canvas&&(this.canvas=null,this.gl=null),this.clearWebGLCaches()},clearWebGLCaches:function(){this.programCache={},this.textureCache={}},createTexture:function(t,e,i,r){var n=t.createTexture();return t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r?t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r):t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e,i,0,t.RGBA,t.UNSIGNED_BYTE,null),n},getCachedTexture:function(t,e){if(this.textureCache[t])return this.textureCache[t];var i=this.createTexture(this.gl,e.width,e.height,e);return this.textureCache[t]=i},evictCachesForKey:function(t){this.textureCache[t]&&(this.gl.deleteTexture(this.textureCache[t]),delete this.textureCache[t])},copyGLTo2D:copyGLTo2DDrawImage,captureGPUInfo:function(){if(this.gpuInfo)return this.gpuInfo;var t=this.gl,e={renderer:"",vendor:""};if(!t)return e;var i=t.getExtension("WEBGL_debug_renderer_info");if(i){var r=t.getParameter(i.UNMASKED_RENDERER_WEBGL),n=t.getParameter(i.UNMASKED_VENDOR_WEBGL);r&&(e.renderer=r.toLowerCase()),n&&(e.vendor=n.toLowerCase())}return this.gpuInfo=e}}}(),function(){"use strict";var t=function(){};function e(){}(fabric.Canvas2dFilterBackend=e).prototype={evictCachesForKey:t,dispose:t,clearWebGLCaches:t,resources:{},applyFilters:function(t,e,i,r,n){var s=n.getContext("2d");s.drawImage(e,0,0,i,r);var o={sourceWidth:i,sourceHeight:r,imageData:s.getImageData(0,0,i,r),originalEl:e,originalImageData:s.getImageData(0,0,i,r),canvasEl:n,ctx:s,filterBackend:this};return t.forEach(function(t){t.applyTo(o)}),o.imageData.width===i&&o.imageData.height===r||(n.width=o.imageData.width,n.height=o.imageData.height),s.putImageData(o.imageData,0,0),o}}}(),fabric.Image=fabric.Image||{},fabric.Image.filters=fabric.Image.filters||{},fabric.Image.filters.BaseFilter=fabric.util.createClass({type:"BaseFilter",vertexSource:"attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvoid main() {\nvTexCoord = aPosition;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",fragmentSource:"precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D uTexture;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\n}",initialize:function(t){t&&this.setOptions(t)},setOptions:function(t){for(var e in t)this[e]=t[e]},createProgram:function(t,e,i){e=e||this.fragmentSource,i=i||this.vertexSource,"highp"!==fabric.webGlPrecision&&(e=e.replace(/precision highp float/g,"precision "+fabric.webGlPrecision+" float"));var r=t.createShader(t.VERTEX_SHADER);if(t.shaderSource(r,i),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw new Error("Vertex shader compile error for "+this.type+": "+t.getShaderInfoLog(r));var n=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(n,e),t.compileShader(n),!t.getShaderParameter(n,t.COMPILE_STATUS))throw new Error("Fragment shader compile error for "+this.type+": "+t.getShaderInfoLog(n));var s=t.createProgram();if(t.attachShader(s,r),t.attachShader(s,n),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))throw new Error('Shader link error for "${this.type}" '+t.getProgramInfoLog(s));var o=this.getAttributeLocations(t,s),a=this.getUniformLocations(t,s)||{};return a.uStepW=t.getUniformLocation(s,"uStepW"),a.uStepH=t.getUniformLocation(s,"uStepH"),{program:s,attributeLocations:o,uniformLocations:a}},getAttributeLocations:function(t,e){return{aPosition:t.getAttribLocation(e,"aPosition")}},getUniformLocations:function(){return{}},sendAttributeData:function(t,e,i){var r=e.aPosition,n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n),t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,i,t.STATIC_DRAW)},_setupFrameBuffer:function(t){var e,i,r=t.context;1<t.passes?(e=t.destinationWidth,i=t.destinationHeight,t.sourceWidth===e&&t.sourceHeight===i||(r.deleteTexture(t.targetTexture),t.targetTexture=t.filterBackend.createTexture(r,e,i)),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t.targetTexture,0)):(r.bindFramebuffer(r.FRAMEBUFFER,null),r.finish())},_swapTextures:function(t){t.passes--,t.pass++;var e=t.targetTexture;t.targetTexture=t.sourceTexture,t.sourceTexture=e},isNeutralState:function(){var t=this.mainParameter,e=fabric.Image.filters[this.type].prototype;if(t){if(Array.isArray(e[t])){for(var i=e[t].length;i--;)if(this[t][i]!==e[t][i])return!1;return!0}return e[t]===this[t]}return!1},applyTo:function(t){t.webgl?(this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)},retrieveShader:function(t){return t.programCache.hasOwnProperty(this.type)||(t.programCache[this.type]=this.createProgram(t.context)),t.programCache[this.type]},applyToWebGL:function(t){var e=t.context,i=this.retrieveShader(t);0===t.pass&&t.originalTexture?e.bindTexture(e.TEXTURE_2D,t.originalTexture):e.bindTexture(e.TEXTURE_2D,t.sourceTexture),e.useProgram(i.program),this.sendAttributeData(e,i.attributeLocations,t.aPosition),e.uniform1f(i.uniformLocations.uStepW,1/t.sourceWidth),e.uniform1f(i.uniformLocations.uStepH,1/t.sourceHeight),this.sendUniformData(e,i.uniformLocations),e.viewport(0,0,t.destinationWidth,t.destinationHeight),e.drawArrays(e.TRIANGLE_STRIP,0,4)},bindAdditionalTexture:function(t,e,i){t.activeTexture(i),t.bindTexture(t.TEXTURE_2D,e),t.activeTexture(t.TEXTURE0)},unbindAdditionalTexture:function(t,e){t.activeTexture(e),t.bindTexture(t.TEXTURE_2D,null),t.activeTexture(t.TEXTURE0)},getMainParameter:function(){return this[this.mainParameter]},setMainParameter:function(t){this[this.mainParameter]=t},sendUniformData:function(){},createHelpLayer:function(t){if(!t.helpLayer){var e=document.createElement("canvas");e.width=t.sourceWidth,e.height=t.sourceHeight,t.helpLayer=e}},toObject:function(){var t={type:this.type},e=this.mainParameter;return e&&(t[e]=this[e]),t},toJSON:function(){return this.toObject()}}),fabric.Image.filters.BaseFilter.fromObject=function(t,e){var i=new fabric.Image.filters[t.type](t);return e&&e(i),i},function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.ColorMatrix=r(i.BaseFilter,{type:"ColorMatrix",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nuniform mat4 uColorMatrix;\nuniform vec4 uConstants;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor *= uColorMatrix;\ncolor += uConstants;\ngl_FragColor = color;\n}",matrix:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],mainParameter:"matrix",colorsOnly:!0,initialize:function(t){this.callSuper("initialize",t),this.matrix=this.matrix.slice(0)},applyTo2d:function(t){var e,i,r,n,s,o=t.imageData.data,a=o.length,c=this.matrix,h=this.colorsOnly;for(s=0;s<a;s+=4)e=o[s],i=o[s+1],r=o[s+2],h?(o[s]=e*c[0]+i*c[1]+r*c[2]+255*c[4],o[s+1]=e*c[5]+i*c[6]+r*c[7]+255*c[9],o[s+2]=e*c[10]+i*c[11]+r*c[12]+255*c[14]):(n=o[s+3],o[s]=e*c[0]+i*c[1]+r*c[2]+n*c[3]+255*c[4],o[s+1]=e*c[5]+i*c[6]+r*c[7]+n*c[8]+255*c[9],o[s+2]=e*c[10]+i*c[11]+r*c[12]+n*c[13]+255*c[14],o[s+3]=e*c[15]+i*c[16]+r*c[17]+n*c[18]+255*c[19])},getUniformLocations:function(t,e){return{uColorMatrix:t.getUniformLocation(e,"uColorMatrix"),uConstants:t.getUniformLocation(e,"uConstants")}},sendUniformData:function(t,e){var i=this.matrix,r=[i[0],i[1],i[2],i[3],i[5],i[6],i[7],i[8],i[10],i[11],i[12],i[13],i[15],i[16],i[17],i[18]],n=[i[4],i[9],i[14],i[19]];t.uniformMatrix4fv(e.uColorMatrix,!1,r),t.uniform4fv(e.uConstants,n)}}),e.Image.filters.ColorMatrix.fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Brightness=r(i.BaseFilter,{type:"Brightness",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uBrightness;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += uBrightness;\ngl_FragColor = color;\n}",brightness:0,mainParameter:"brightness",applyTo2d:function(t){if(0!==this.brightness){var e,i=t.imageData.data,r=i.length,n=Math.round(255*this.brightness);for(e=0;e<r;e+=4)i[e]=i[e]+n,i[e+1]=i[e+1]+n,i[e+2]=i[e+2]+n}},getUniformLocations:function(t,e){return{uBrightness:t.getUniformLocation(e,"uBrightness")}},sendUniformData:function(t,e){t.uniform1f(e.uBrightness,this.brightness)}}),e.Image.filters.Brightness.fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Convolute=n(r.BaseFilter,{type:"Convolute",opaque:!1,matrix:[0,0,0,0,1,0,0,0,0],fragmentSource:{Convolute_3_1:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n}\n}\ngl_FragColor = color;\n}",Convolute_3_0:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",Convolute_5_1:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n}\n}\ngl_FragColor = color;\n}",Convolute_5_0:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",Convolute_7_1:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n}\n}\ngl_FragColor = color;\n}",Convolute_7_0:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",Convolute_9_1:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n}\n}\ngl_FragColor = color;\n}",Convolute_9_0:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}"},retrieveShader:function(t){var e=Math.sqrt(this.matrix.length),i=this.type+"_"+e+"_"+(this.opaque?1:0),r=this.fragmentSource[i];return t.programCache.hasOwnProperty(i)||(t.programCache[i]=this.createProgram(t.context,r)),t.programCache[i]},applyTo2d:function(t){var e,i,r,n,s,o,a,c,h,l,u,f,d,g=t.imageData,p=g.data,v=this.matrix,m=Math.round(Math.sqrt(v.length)),b=Math.floor(m/2),_=g.width,y=g.height,x=t.ctx.createImageData(_,y),C=x.data,S=this.opaque?1:0;for(u=0;u<y;u++)for(l=0;l<_;l++){for(s=4*(u*_+l),d=n=r=i=e=0;d<m;d++)for(f=0;f<m;f++)o=l+f-b,(a=u+d-b)<0||y<=a||o<0||_<=o||(c=4*(a*_+o),h=v[d*m+f],e+=p[c]*h,i+=p[c+1]*h,r+=p[c+2]*h,S||(n+=p[c+3]*h));C[s]=e,C[s+1]=i,C[s+2]=r,C[s+3]=S?p[s+3]:n}t.imageData=x},getUniformLocations:function(t,e){return{uMatrix:t.getUniformLocation(e,"uMatrix"),uOpaque:t.getUniformLocation(e,"uOpaque"),uHalfSize:t.getUniformLocation(e,"uHalfSize"),uSize:t.getUniformLocation(e,"uSize")}},sendUniformData:function(t,e){t.uniform1fv(e.uMatrix,this.matrix)},toObject:function(){return i(this.callSuper("toObject"),{opaque:this.opaque,matrix:this.matrix})}}),e.Image.filters.Convolute.fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Grayscale=r(i.BaseFilter,{type:"Grayscale",fragmentSource:{average:"precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat average = (color.r + color.b + color.g) / 3.0;\ngl_FragColor = vec4(average, average, average, color.a);\n}",lightness:"precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\ngl_FragColor = vec4(average, average, average, col.a);\n}",luminosity:"precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\ngl_FragColor = vec4(average, average, average, col.a);\n}"},mode:"average",mainParameter:"mode",applyTo2d:function(t){var e,i,r=t.imageData.data,n=r.length,s=this.mode;for(e=0;e<n;e+=4)"average"===s?i=(r[e]+r[e+1]+r[e+2])/3:"lightness"===s?i=(Math.min(r[e],r[e+1],r[e+2])+Math.max(r[e],r[e+1],r[e+2]))/2:"luminosity"===s&&(i=.21*r[e]+.72*r[e+1]+.07*r[e+2]),r[e]=i,r[e+1]=i,r[e+2]=i},retrieveShader:function(t){var e=this.type+"_"+this.mode;if(!t.programCache.hasOwnProperty(e)){var i=this.fragmentSource[this.mode];t.programCache[e]=this.createProgram(t.context,i)}return t.programCache[e]},getUniformLocations:function(t,e){return{uMode:t.getUniformLocation(e,"uMode")}},sendUniformData:function(t,e){t.uniform1i(e.uMode,1)},isNeutralState:function(){return!1}}),e.Image.filters.Grayscale.fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Invert=r(i.BaseFilter,{type:"Invert",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform int uInvert;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nif (uInvert == 1) {\ngl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n} else {\ngl_FragColor = color;\n}\n}",invert:!0,mainParameter:"invert",applyTo2d:function(t){var e,i=t.imageData.data,r=i.length;for(e=0;e<r;e+=4)i[e]=255-i[e],i[e+1]=255-i[e+1],i[e+2]=255-i[e+2]},isNeutralState:function(){return!this.invert},getUniformLocations:function(t,e){return{uInvert:t.getUniformLocation(e,"uInvert")}},sendUniformData:function(t,e){t.uniform1i(e.uInvert,this.invert)}}),e.Image.filters.Invert.fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Noise=n(r.BaseFilter,{type:"Noise",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uStepH;\nuniform float uNoise;\nuniform float uSeed;\nvarying vec2 vTexCoord;\nfloat rand(vec2 co, float seed, float vScale) {\nreturn fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n}\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\ngl_FragColor = color;\n}",mainParameter:"noise",noise:0,applyTo2d:function(t){if(0!==this.noise){var e,i,r=t.imageData.data,n=r.length,s=this.noise;for(e=0,n=r.length;e<n;e+=4)i=(.5-Math.random())*s,r[e]+=i,r[e+1]+=i,r[e+2]+=i}},getUniformLocations:function(t,e){return{uNoise:t.getUniformLocation(e,"uNoise"),uSeed:t.getUniformLocation(e,"uSeed")}},sendUniformData:function(t,e){t.uniform1f(e.uNoise,this.noise/255),t.uniform1f(e.uSeed,Math.random())},toObject:function(){return i(this.callSuper("toObject"),{noise:this.noise})}}),e.Image.filters.Noise.fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Pixelate=r(i.BaseFilter,{type:"Pixelate",blocksize:4,mainParameter:"blocksize",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uBlocksize;\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nfloat blockW = uBlocksize * uStepW;\nfloat blockH = uBlocksize * uStepW;\nint posX = int(vTexCoord.x / blockW);\nint posY = int(vTexCoord.y / blockH);\nfloat fposX = float(posX);\nfloat fposY = float(posY);\nvec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\nvec4 color = texture2D(uTexture, squareCoords);\ngl_FragColor = color;\n}",applyTo2d:function(t){var e,i,r,n,s,o,a,c,h,l,u,f=t.imageData,d=f.data,g=f.height,p=f.width;for(i=0;i<g;i+=this.blocksize)for(r=0;r<p;r+=this.blocksize)for(n=d[e=4*i*p+4*r],s=d[e+1],o=d[e+2],a=d[e+3],l=Math.min(i+this.blocksize,g),u=Math.min(r+this.blocksize,p),c=i;c<l;c++)for(h=r;h<u;h++)d[e=4*c*p+4*h]=n,d[e+1]=s,d[e+2]=o,d[e+3]=a},isNeutralState:function(){return 1===this.blocksize},getUniformLocations:function(t,e){return{uBlocksize:t.getUniformLocation(e,"uBlocksize"),uStepW:t.getUniformLocation(e,"uStepW"),uStepH:t.getUniformLocation(e,"uStepH")}},sendUniformData:function(t,e){t.uniform1f(e.uBlocksize,this.blocksize)}}),e.Image.filters.Pixelate.fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var l=t.fabric||(t.fabric={}),e=l.util.object.extend,i=l.Image.filters,r=l.util.createClass;i.RemoveColor=r(i.BaseFilter,{type:"RemoveColor",color:"#FFFFFF",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\nif(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\ngl_FragColor.a = 0.0;\n}\n}",distance:.02,useAlpha:!1,applyTo2d:function(t){var e,i,r,n,s=t.imageData.data,o=255*this.distance,a=new l.Color(this.color).getSource(),c=[a[0]-o,a[1]-o,a[2]-o],h=[a[0]+o,a[1]+o,a[2]+o];for(e=0;e<s.length;e+=4)i=s[e],r=s[e+1],n=s[e+2],c[0]<i&&c[1]<r&&c[2]<n&&i<h[0]&&r<h[1]&&n<h[2]&&(s[e+3]=0)},getUniformLocations:function(t,e){return{uLow:t.getUniformLocation(e,"uLow"),uHigh:t.getUniformLocation(e,"uHigh")}},sendUniformData:function(t,e){var i=new l.Color(this.color).getSource(),r=parseFloat(this.distance),n=[0+i[0]/255-r,0+i[1]/255-r,0+i[2]/255-r,1],s=[i[0]/255+r,i[1]/255+r,i[2]/255+r,1];t.uniform4fv(e.uLow,n),t.uniform4fv(e.uHigh,s)},toObject:function(){return e(this.callSuper("toObject"),{color:this.color,distance:this.distance})}}),l.Image.filters.RemoveColor.fromObject=l.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass,n={Brownie:[.5997,.34553,-.27082,0,.186,-.0377,.86095,.15059,0,-.1449,.24113,-.07441,.44972,0,-.02965,0,0,0,1,0],Vintage:[.62793,.32021,-.03965,0,.03784,.02578,.64411,.03259,0,.02926,.0466,-.08512,.52416,0,.02023,0,0,0,1,0],Kodachrome:[1.12855,-.39673,-.03992,0,.24991,-.16404,1.08352,-.05498,0,.09698,-.16786,-.56034,1.60148,0,.13972,0,0,0,1,0],Technicolor:[1.91252,-.85453,-.09155,0,.04624,-.30878,1.76589,-.10601,0,-.27589,-.2311,-.75018,1.84759,0,.12137,0,0,0,1,0],Polaroid:[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0],Sepia:[.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0],BlackWhite:[1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,0,0,0,1,0]};for(var s in n)i[s]=r(i.ColorMatrix,{type:s,matrix:n[s],mainParameter:!1,colorsOnly:!0}),e.Image.filters[s].fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var f=t.fabric,e=f.Image.filters,i=f.util.createClass;e.BlendColor=i(e.BaseFilter,{type:"BlendColor",color:"#F95C63",mode:"multiply",alpha:1,fragmentSource:{multiply:"gl_FragColor.rgb *= uColor.rgb;\n",screen:"gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",add:"gl_FragColor.rgb += uColor.rgb;\n",diff:"gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",subtract:"gl_FragColor.rgb -= uColor.rgb;\n",lighten:"gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",darken:"gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",exclusion:"gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",overlay:"if (uColor.r < 0.5) {\ngl_FragColor.r *= 2.0 * uColor.r;\n} else {\ngl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n}\nif (uColor.g < 0.5) {\ngl_FragColor.g *= 2.0 * uColor.g;\n} else {\ngl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n}\nif (uColor.b < 0.5) {\ngl_FragColor.b *= 2.0 * uColor.b;\n} else {\ngl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n}\n",tint:"gl_FragColor.rgb *= (1.0 - uColor.a);\ngl_FragColor.rgb += uColor.rgb;\n"},buildSource:function(t){return"precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ngl_FragColor = color;\nif (color.a > 0.0) {\n"+this.fragmentSource[t]+"}\n}"},retrieveShader:function(t){var e,i=this.type+"_"+this.mode;return t.programCache.hasOwnProperty(i)||(e=this.buildSource(this.mode),t.programCache[i]=this.createProgram(t.context,e)),t.programCache[i]},applyTo2d:function(t){var e,i,r,n,s,o,a,c=t.imageData.data,h=c.length,l=1-this.alpha;e=(a=new f.Color(this.color).getSource())[0]*this.alpha,i=a[1]*this.alpha,r=a[2]*this.alpha;for(var u=0;u<h;u+=4)switch(n=c[u],s=c[u+1],o=c[u+2],this.mode){case"multiply":c[u]=n*e/255,c[u+1]=s*i/255,c[u+2]=o*r/255;break;case"screen":c[u]=255-(255-n)*(255-e)/255,c[u+1]=255-(255-s)*(255-i)/255,c[u+2]=255-(255-o)*(255-r)/255;break;case"add":c[u]=n+e,c[u+1]=s+i,c[u+2]=o+r;break;case"diff":case"difference":c[u]=Math.abs(n-e),c[u+1]=Math.abs(s-i),c[u+2]=Math.abs(o-r);break;case"subtract":c[u]=n-e,c[u+1]=s-i,c[u+2]=o-r;break;case"darken":c[u]=Math.min(n,e),c[u+1]=Math.min(s,i),c[u+2]=Math.min(o,r);break;case"lighten":c[u]=Math.max(n,e),c[u+1]=Math.max(s,i),c[u+2]=Math.max(o,r);break;case"overlay":c[u]=e<128?2*n*e/255:255-2*(255-n)*(255-e)/255,c[u+1]=i<128?2*s*i/255:255-2*(255-s)*(255-i)/255,c[u+2]=r<128?2*o*r/255:255-2*(255-o)*(255-r)/255;break;case"exclusion":c[u]=e+n-2*e*n/255,c[u+1]=i+s-2*i*s/255,c[u+2]=r+o-2*r*o/255;break;case"tint":c[u]=e+n*l,c[u+1]=i+s*l,c[u+2]=r+o*l}},getUniformLocations:function(t,e){return{uColor:t.getUniformLocation(e,"uColor")}},sendUniformData:function(t,e){var i=new f.Color(this.color).getSource();i[0]=this.alpha*i[0]/255,i[1]=this.alpha*i[1]/255,i[2]=this.alpha*i[2]/255,i[3]=this.alpha,t.uniform4fv(e.uColor,i)},toObject:function(){return{type:this.type,color:this.color,mode:this.mode,alpha:this.alpha}}}),f.Image.filters.BlendColor.fromObject=f.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var y=t.fabric,e=y.Image.filters,i=y.util.createClass;e.BlendImage=i(e.BaseFilter,{type:"BlendImage",image:null,mode:"multiply",alpha:1,vertexSource:"attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nuniform mat3 uTransformMatrix;\nvoid main() {\nvTexCoord = aPosition;\nvTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",fragmentSource:{multiply:"precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.rgba *= color2.rgba;\ngl_FragColor = color;\n}",mask:"precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.a = color2.a;\ngl_FragColor = color;\n}"},retrieveShader:function(t){var e=this.type+"_"+this.mode,i=this.fragmentSource[this.mode];return t.programCache.hasOwnProperty(e)||(t.programCache[e]=this.createProgram(t.context,i)),t.programCache[e]},applyToWebGL:function(t){var e=t.context,i=this.createTexture(t.filterBackend,this.image);this.bindAdditionalTexture(e,i,e.TEXTURE1),this.callSuper("applyToWebGL",t),this.unbindAdditionalTexture(e,e.TEXTURE1)},createTexture:function(t,e){return t.getCachedTexture(e.cacheKey,e._element)},calculateMatrix:function(){var t=this.image,e=t._element.width,i=t._element.height;return[1/t.scaleX,0,0,0,1/t.scaleY,0,-t.left/e,-t.top/i,1]},applyTo2d:function(t){var e,i,r,n,s,o,a,c,h,l,u,f=t.imageData,d=t.filterBackend.resources,g=f.data,p=g.length,v=f.width,m=f.height,b=this.image;d.blendImage||(d.blendImage=y.util.createCanvasElement()),l=(h=d.blendImage).getContext("2d"),h.width!==v||h.height!==m?(h.width=v,h.height=m):l.clearRect(0,0,v,m),l.setTransform(b.scaleX,0,0,b.scaleY,b.left,b.top),l.drawImage(b._element,0,0,v,m),u=l.getImageData(0,0,v,m).data;for(var _=0;_<p;_+=4)switch(s=g[_],o=g[_+1],a=g[_+2],c=g[_+3],e=u[_],i=u[_+1],r=u[_+2],n=u[_+3],this.mode){case"multiply":g[_]=s*e/255,g[_+1]=o*i/255,g[_+2]=a*r/255,g[_+3]=c*n/255;break;case"mask":g[_+3]=n}},getUniformLocations:function(t,e){return{uTransformMatrix:t.getUniformLocation(e,"uTransformMatrix"),uImage:t.getUniformLocation(e,"uImage")}},sendUniformData:function(t,e){var i=this.calculateMatrix();t.uniform1i(e.uImage,1),t.uniformMatrix3fv(e.uTransformMatrix,!1,i)},toObject:function(){return{type:this.type,image:this.image&&this.image.toObject(),mode:this.mode,alpha:this.alpha}}}),y.Image.filters.BlendImage.fromObject=function(i,r){y.Image.fromObject(i.image,function(t){var e=y.util.object.clone(i);e.image=t,r(new y.Image.filters.BlendImage(e))})}}( true?exports:undefined),function(t){"use strict";var m=t.fabric||(t.fabric={}),A=Math.pow,j=Math.floor,M=Math.sqrt,F=Math.abs,h=Math.round,r=Math.sin,I=Math.ceil,e=m.Image.filters,i=m.util.createClass;e.Resize=i(e.BaseFilter,{type:"Resize",resizeType:"hermite",scaleX:1,scaleY:1,lanczosLobes:3,getUniformLocations:function(t,e){return{uDelta:t.getUniformLocation(e,"uDelta"),uTaps:t.getUniformLocation(e,"uTaps")}},sendUniformData:function(t,e){t.uniform2fv(e.uDelta,this.horizontal?[1/this.width,0]:[0,1/this.height]),t.uniform1fv(e.uTaps,this.taps)},retrieveShader:function(t){var e=this.getFilterWindow(),i=this.type+"_"+e;if(!t.programCache.hasOwnProperty(i)){var r=this.generateShader(e);t.programCache[i]=this.createProgram(t.context,r)}return t.programCache[i]},getFilterWindow:function(){var t=this.tempScale;return Math.ceil(this.lanczosLobes/t)},getTaps:function(){for(var t=this.lanczosCreate(this.lanczosLobes),e=this.tempScale,i=this.getFilterWindow(),r=new Array(i),n=1;n<=i;n++)r[n-1]=t(n*e);return r},generateShader:function(t){for(var e=new Array(t),i=this.fragmentSourceTOP,r=1;r<=t;r++)e[r-1]=r+".0 * uDelta";return i+="uniform float uTaps["+t+"];\n",i+="void main() {\n",i+="  vec4 color = texture2D(uTexture, vTexCoord);\n",i+="  float sum = 1.0;\n",e.forEach(function(t,e){i+="  color += texture2D(uTexture, vTexCoord + "+t+") * uTaps["+e+"];\n",i+="  color += texture2D(uTexture, vTexCoord - "+t+") * uTaps["+e+"];\n",i+="  sum += 2.0 * uTaps["+e+"];\n"}),i+="  gl_FragColor = color / sum;\n",i+="}"},fragmentSourceTOP:"precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\n",applyTo:function(t){t.webgl?(t.passes++,this.width=t.sourceWidth,this.horizontal=!0,this.dW=Math.round(this.width*this.scaleX),this.dH=t.sourceHeight,this.tempScale=this.dW/this.width,this.taps=this.getTaps(),t.destinationWidth=this.dW,this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t),t.sourceWidth=t.destinationWidth,this.height=t.sourceHeight,this.horizontal=!1,this.dH=Math.round(this.height*this.scaleY),this.tempScale=this.dH/this.height,this.taps=this.getTaps(),t.destinationHeight=this.dH,this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t),t.sourceHeight=t.destinationHeight):this.applyTo2d(t)},isNeutralState:function(){return 1===this.scaleX&&1===this.scaleY},lanczosCreate:function(i){return function(t){if(i<=t||t<=-i)return 0;if(t<1.1920929e-7&&-1.1920929e-7<t)return 1;var e=(t*=Math.PI)/i;return r(t)/t*r(e)/e}},applyTo2d:function(t){var e=t.imageData,i=this.scaleX,r=this.scaleY;this.rcpScaleX=1/i,this.rcpScaleY=1/r;var n,s=e.width,o=e.height,a=h(s*i),c=h(o*r);"sliceHack"===this.resizeType?n=this.sliceByTwo(t,s,o,a,c):"hermite"===this.resizeType?n=this.hermiteFastResize(t,s,o,a,c):"bilinear"===this.resizeType?n=this.bilinearFiltering(t,s,o,a,c):"lanczos"===this.resizeType&&(n=this.lanczosResize(t,s,o,a,c)),t.imageData=n},sliceByTwo:function(t,e,i,r,n){var s,o,a=t.imageData,c=!1,h=!1,l=.5*e,u=.5*i,f=m.filterBackend.resources,d=0,g=0,p=e,v=0;for(f.sliceByTwo||(f.sliceByTwo=document.createElement("canvas")),((s=f.sliceByTwo).width<1.5*e||s.height<i)&&(s.width=1.5*e,s.height=i),(o=s.getContext("2d")).clearRect(0,0,1.5*e,i),o.putImageData(a,0,0),r=j(r),n=j(n);!c||!h;)i=u,r<j(.5*(e=l))?l=j(.5*l):(l=r,c=!0),n<j(.5*u)?u=j(.5*u):(u=n,h=!0),o.drawImage(s,d,g,e,i,p,v,l,u),d=p,g=v,v+=u;return o.getImageData(d,g,r,n)},lanczosResize:function(t,g,p,v,m){var b=t.imageData.data,_=t.ctx.createImageData(v,m),y=_.data,x=this.lanczosCreate(this.lanczosLobes),C=this.rcpScaleX,S=this.rcpScaleY,w=2/this.rcpScaleX,T=2/this.rcpScaleY,O=I(C*this.lanczosLobes/2),k=I(S*this.lanczosLobes/2),D={},P={},E={};return function t(e){var i,r,n,s,o,a,c,h,l,u,f;for(P.x=(e+.5)*C,E.x=j(P.x),i=0;i<m;i++){for(P.y=(i+.5)*S,E.y=j(P.y),l=h=c=a=o=0,r=E.x-O;r<=E.x+O;r++)if(!(r<0||g<=r)){u=j(1e3*F(r-P.x)),D[u]||(D[u]={});for(var d=E.y-k;d<=E.y+k;d++)d<0||p<=d||(f=j(1e3*F(d-P.y)),D[u][f]||(D[u][f]=x(M(A(u*w,2)+A(f*T,2))/1e3)),0<(n=D[u][f])&&(o+=n,a+=n*b[s=4*(d*g+r)],c+=n*b[s+1],h+=n*b[s+2],l+=n*b[s+3]))}y[s=4*(i*v+e)]=a/o,y[s+1]=c/o,y[s+2]=h/o,y[s+3]=l/o}return++e<v?t(e):_}(0)},bilinearFiltering:function(t,e,i,r,n){var s,o,a,c,h,l,u,f,d,g=0,p=this.rcpScaleX,v=this.rcpScaleY,m=4*(e-1),b=t.imageData.data,_=t.ctx.createImageData(r,n),y=_.data;for(a=0;a<n;a++)for(c=0;c<r;c++)for(h=p*c-(s=j(p*c)),l=v*a-(o=j(v*a)),d=4*(o*e+s),u=0;u<4;u++)f=b[d+u]*(1-h)*(1-l)+b[d+4+u]*h*(1-l)+b[d+m+u]*l*(1-h)+b[d+m+4+u]*h*l,y[g++]=f;return _},hermiteFastResize:function(t,e,i,r,n){for(var s=this.rcpScaleX,o=this.rcpScaleY,a=I(s/2),c=I(o/2),h=t.imageData.data,l=t.ctx.createImageData(r,n),u=l.data,f=0;f<n;f++)for(var d=0;d<r;d++){for(var g=4*(d+f*r),p=0,v=0,m=0,b=0,_=0,y=0,x=0,C=(f+.5)*o,S=j(f*o);S<(f+1)*o;S++)for(var w=F(C-(S+.5))/c,T=(d+.5)*s,O=w*w,k=j(d*s);k<(d+1)*s;k++){var D=F(T-(k+.5))/a,P=M(O+D*D);1<P&&P<-1||0<(p=2*P*P*P-3*P*P+1)&&(x+=p*h[(D=4*(k+S*e))+3],m+=p,h[D+3]<255&&(p=p*h[D+3]/250),b+=p*h[D],_+=p*h[D+1],y+=p*h[D+2],v+=p)}u[g]=b/v,u[g+1]=_/v,u[g+2]=y/v,u[g+3]=x/m}return l},toObject:function(){return{type:this.type,scaleX:this.scaleX,scaleY:this.scaleY,resizeType:this.resizeType,lanczosLobes:this.lanczosLobes}}}),m.Image.filters.Resize.fromObject=m.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Contrast=r(i.BaseFilter,{type:"Contrast",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uContrast;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\ncolor.rgb = contrastF * (color.rgb - 0.5) + 0.5;\ngl_FragColor = color;\n}",contrast:0,mainParameter:"contrast",applyTo2d:function(t){if(0!==this.contrast){var e,i=t.imageData.data,r=i.length,n=Math.floor(255*this.contrast),s=259*(n+255)/(255*(259-n));for(e=0;e<r;e+=4)i[e]=s*(i[e]-128)+128,i[e+1]=s*(i[e+1]-128)+128,i[e+2]=s*(i[e+2]-128)+128}},getUniformLocations:function(t,e){return{uContrast:t.getUniformLocation(e,"uContrast")}},sendUniformData:function(t,e){t.uniform1f(e.uContrast,this.contrast)}}),e.Image.filters.Contrast.fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Saturation=r(i.BaseFilter,{type:"Saturation",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uSaturation;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat rgMax = max(color.r, color.g);\nfloat rgbMax = max(rgMax, color.b);\ncolor.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\ncolor.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\ncolor.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\ngl_FragColor = color;\n}",saturation:0,mainParameter:"saturation",applyTo2d:function(t){if(0!==this.saturation){var e,i,r=t.imageData.data,n=r.length,s=-this.saturation;for(e=0;e<n;e+=4)i=Math.max(r[e],r[e+1],r[e+2]),r[e]+=i!==r[e]?(i-r[e])*s:0,r[e+1]+=i!==r[e+1]?(i-r[e+1])*s:0,r[e+2]+=i!==r[e+2]?(i-r[e+2])*s:0}},getUniformLocations:function(t,e){return{uSaturation:t.getUniformLocation(e,"uSaturation")}},sendUniformData:function(t,e){t.uniform1f(e.uSaturation,-this.saturation)}}),e.Image.filters.Saturation.fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var g=t.fabric||(t.fabric={}),e=g.Image.filters,i=g.util.createClass;e.Blur=i(e.BaseFilter,{type:"Blur",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\nconst float nSamples = 15.0;\nvec3 v3offset = vec3(12.9898, 78.233, 151.7182);\nfloat random(vec3 scale) {\nreturn fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n}\nvoid main() {\nvec4 color = vec4(0.0);\nfloat total = 0.0;\nfloat offset = random(v3offset);\nfor (float t = -nSamples; t <= nSamples; t++) {\nfloat percent = (t + offset - 0.5) / nSamples;\nfloat weight = 1.0 - abs(percent);\ncolor += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\ntotal += weight;\n}\ngl_FragColor = color / total;\n}",blur:0,mainParameter:"blur",applyTo:function(t){t.webgl?(this.aspectRatio=t.sourceWidth/t.sourceHeight,t.passes++,this._setupFrameBuffer(t),this.horizontal=!0,this.applyToWebGL(t),this._swapTextures(t),this._setupFrameBuffer(t),this.horizontal=!1,this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)},applyTo2d:function(t){t.imageData=this.simpleBlur(t)},simpleBlur:function(t){var e,i,r=t.filterBackend.resources,n=t.imageData.width,s=t.imageData.height;r.blurLayer1||(r.blurLayer1=g.util.createCanvasElement(),r.blurLayer2=g.util.createCanvasElement()),e=r.blurLayer1,i=r.blurLayer2,e.width===n&&e.height===s||(i.width=e.width=n,i.height=e.height=s);var o,a,c,h,l=e.getContext("2d"),u=i.getContext("2d"),f=.06*this.blur*.5;for(l.putImageData(t.imageData,0,0),u.clearRect(0,0,n,s),h=-15;h<=15;h++)c=f*(a=h/15)*n+(o=(Math.random()-.5)/4),u.globalAlpha=1-Math.abs(a),u.drawImage(e,c,o),l.drawImage(i,0,0),u.globalAlpha=1,u.clearRect(0,0,i.width,i.height);for(h=-15;h<=15;h++)c=f*(a=h/15)*s+(o=(Math.random()-.5)/4),u.globalAlpha=1-Math.abs(a),u.drawImage(e,o,c),l.drawImage(i,0,0),u.globalAlpha=1,u.clearRect(0,0,i.width,i.height);t.ctx.drawImage(e,0,0);var d=t.ctx.getImageData(0,0,e.width,e.height);return l.globalAlpha=1,l.clearRect(0,0,e.width,e.height),d},getUniformLocations:function(t,e){return{delta:t.getUniformLocation(e,"uDelta")}},sendUniformData:function(t,e){var i=this.chooseRightDelta();t.uniform2fv(e.delta,i)},chooseRightDelta:function(){var t,e=1,i=[0,0];return this.horizontal?1<this.aspectRatio&&(e=1/this.aspectRatio):this.aspectRatio<1&&(e=this.aspectRatio),t=e*this.blur*.12,this.horizontal?i[0]=t:i[1]=t,i}}),e.Blur.fromObject=g.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Gamma=r(i.BaseFilter,{type:"Gamma",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform vec3 uGamma;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec3 correction = (1.0 / uGamma);\ncolor.r = pow(color.r, correction.r);\ncolor.g = pow(color.g, correction.g);\ncolor.b = pow(color.b, correction.b);\ngl_FragColor = color;\ngl_FragColor.rgb *= color.a;\n}",gamma:[1,1,1],mainParameter:"gamma",initialize:function(t){this.gamma=[1,1,1],i.BaseFilter.prototype.initialize.call(this,t)},applyTo2d:function(t){var e,i=t.imageData.data,r=this.gamma,n=i.length,s=1/r[0],o=1/r[1],a=1/r[2];for(this.rVals||(this.rVals=new Uint8Array(256),this.gVals=new Uint8Array(256),this.bVals=new Uint8Array(256)),e=0,n=256;e<n;e++)this.rVals[e]=255*Math.pow(e/255,s),this.gVals[e]=255*Math.pow(e/255,o),this.bVals[e]=255*Math.pow(e/255,a);for(e=0,n=i.length;e<n;e+=4)i[e]=this.rVals[i[e]],i[e+1]=this.gVals[i[e+1]],i[e+2]=this.bVals[i[e+2]]},getUniformLocations:function(t,e){return{uGamma:t.getUniformLocation(e,"uGamma")}},sendUniformData:function(t,e){t.uniform3fv(e.uGamma,this.gamma)}}),e.Image.filters.Gamma.fromObject=e.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var n=t.fabric||(t.fabric={}),e=n.Image.filters,i=n.util.createClass;e.Composed=i(e.BaseFilter,{type:"Composed",subFilters:[],initialize:function(t){this.callSuper("initialize",t),this.subFilters=this.subFilters.slice(0)},applyTo:function(e){e.passes+=this.subFilters.length-1,this.subFilters.forEach(function(t){t.applyTo(e)})},toObject:function(){return n.util.object.extend(this.callSuper("toObject"),{subFilters:this.subFilters.map(function(t){return t.toObject()})})},isNeutralState:function(){return!this.subFilters.some(function(t){return!t.isNeutralState()})}}),n.Image.filters.Composed.fromObject=function(t,e){var i=(t.subFilters||[]).map(function(t){return new n.Image.filters[t.type](t)}),r=new n.Image.filters.Composed({subFilters:i});return e&&e(r),r}}( true?exports:undefined),function(t){"use strict";var s=t.fabric||(t.fabric={}),e=s.Image.filters,i=s.util.createClass;e.HueRotation=i(e.ColorMatrix,{type:"HueRotation",rotation:0,mainParameter:"rotation",calculateMatrix:function(){var t=this.rotation*Math.PI,e=s.util.cos(t),i=s.util.sin(t),r=Math.sqrt(1/3)*i,n=1-e;this.matrix=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],this.matrix[0]=e+n/3,this.matrix[1]=1/3*n-r,this.matrix[2]=1/3*n+r,this.matrix[5]=1/3*n+r,this.matrix[6]=e+1/3*n,this.matrix[7]=1/3*n-r,this.matrix[10]=1/3*n-r,this.matrix[11]=1/3*n+r,this.matrix[12]=e+1/3*n},isNeutralState:function(t){return this.calculateMatrix(),e.BaseFilter.prototype.isNeutralState.call(this,t)},applyTo:function(t){this.calculateMatrix(),e.BaseFilter.prototype.applyTo.call(this,t)}}),s.Image.filters.HueRotation.fromObject=s.Image.filters.BaseFilter.fromObject}( true?exports:undefined),function(t){"use strict";var d=t.fabric||(t.fabric={}),g=d.util.object.clone;d.Text?d.warn("fabric.Text is already defined"):(d.Text=d.util.createClass(d.Object,{_dimensionAffectingProps:["fontSize","fontWeight","fontFamily","fontStyle","lineHeight","text","charSpacing","textAlign","styles"],_reNewline:/\r?\n/,_reSpacesAndTabs:/[ \t\r]/g,_reSpaceAndTab:/[ \t\r]/,_reWords:/\S+/g,type:"text",fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",underline:!1,overline:!1,linethrough:!1,textAlign:"left",fontStyle:"normal",lineHeight:1.16,superscript:{size:.6,baseline:-.35},subscript:{size:.6,baseline:.11},textBackgroundColor:"",stateProperties:d.Object.prototype.stateProperties.concat("fontFamily","fontWeight","fontSize","text","underline","overline","linethrough","textAlign","fontStyle","lineHeight","textBackgroundColor","charSpacing","styles"),cacheProperties:d.Object.prototype.cacheProperties.concat("fontFamily","fontWeight","fontSize","text","underline","overline","linethrough","textAlign","fontStyle","lineHeight","textBackgroundColor","charSpacing","styles"),stroke:null,shadow:null,_fontSizeFraction:.222,offsets:{underline:.1,linethrough:-.315,overline:-.88},_fontSizeMult:1.13,charSpacing:0,styles:null,_measuringContext:null,deltaY:0,_styleProperties:["stroke","strokeWidth","fill","fontFamily","fontSize","fontWeight","fontStyle","underline","overline","linethrough","deltaY","textBackgroundColor"],__charBounds:[],CACHE_FONT_SIZE:400,MIN_TEXT_WIDTH:2,initialize:function(t,e){this.styles=e&&e.styles||{},this.text=t,this.__skipDimension=!0,this.callSuper("initialize",e),this.__skipDimension=!1,this.initDimensions(),this.setCoords(),this.setupState({propertySet:"_dimensionAffectingProps"})},getMeasuringContext:function(){return d._measuringContext||(d._measuringContext=this.canvas&&this.canvas.contextCache||d.util.createCanvasElement().getContext("2d")),d._measuringContext},_splitText:function(){var t=this._splitTextIntoLines(this.text);return this.textLines=t.lines,this._textLines=t.graphemeLines,this._unwrappedTextLines=t._unwrappedLines,this._text=t.graphemeText,t},initDimensions:function(){this.__skipDimension||(this._splitText(),this._clearCache(),this.width=this.calcTextWidth()||this.cursorWidth||this.MIN_TEXT_WIDTH,-1!==this.textAlign.indexOf("justify")&&this.enlargeSpaces(),this.height=this.calcTextHeight(),this.saveState({propertySet:"_dimensionAffectingProps"}))},enlargeSpaces:function(){for(var t,e,i,r,n,s,o,a=0,c=this._textLines.length;a<c;a++)if(("justify"===this.textAlign||a!==c-1&&!this.isEndOfWrapping(a))&&(r=0,n=this._textLines[a],(e=this.getLineWidth(a))<this.width&&(o=this.textLines[a].match(this._reSpacesAndTabs)))){i=o.length,t=(this.width-e)/i;for(var h=0,l=n.length;h<=l;h++)s=this.__charBounds[a][h],this._reSpaceAndTab.test(n[h])?(s.width+=t,s.kernedWidth+=t,s.left+=r,r+=t):s.left+=r}},isEndOfWrapping:function(t){return t===this._textLines.length-1},missingNewlineOffset:function(){return 1},toString:function(){return"#<fabric.Text ("+this.complexity()+'): { "text": "'+this.text+'", "fontFamily": "'+this.fontFamily+'" }>'},_getCacheCanvasDimensions:function(){var t=this.callSuper("_getCacheCanvasDimensions"),e=this.fontSize;return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t},_render:function(t){this._setTextStyles(t),this._renderTextLinesBackground(t),this._renderTextDecoration(t,"underline"),this._renderText(t),this._renderTextDecoration(t,"overline"),this._renderTextDecoration(t,"linethrough")},_renderText:function(t){"stroke"===this.paintFirst?(this._renderTextStroke(t),this._renderTextFill(t)):(this._renderTextFill(t),this._renderTextStroke(t))},_setTextStyles:function(t,e,i){t.textBaseline="alphabetic",t.font=this._getFontDeclaration(e,i)},calcTextWidth:function(){for(var t=this.getLineWidth(0),e=1,i=this._textLines.length;e<i;e++){var r=this.getLineWidth(e);t<r&&(t=r)}return t},_renderTextLine:function(t,e,i,r,n,s){this._renderChars(t,e,i,r,n,s)},_renderTextLinesBackground:function(t){if(this.textBackgroundColor||this.styleHas("textBackgroundColor")){for(var e,i,r,n,s,o,a=0,c=t.fillStyle,h=this._getLeftOffset(),l=this._getTopOffset(),u=0,f=0,d=0,g=this._textLines.length;d<g;d++)if(e=this.getHeightOfLine(d),this.textBackgroundColor||this.styleHas("textBackgroundColor",d)){r=this._textLines[d],i=this._getLineLeftOffset(d),u=f=0,n=this.getValueOfPropertyAt(d,0,"textBackgroundColor");for(var p=0,v=r.length;p<v;p++)s=this.__charBounds[d][p],(o=this.getValueOfPropertyAt(d,p,"textBackgroundColor"))!==n?((t.fillStyle=n)&&t.fillRect(h+i+u,l+a,f,e/this.lineHeight),u=s.left,f=s.width,n=o):f+=s.kernedWidth;o&&(t.fillStyle=o,t.fillRect(h+i+u,l+a,f,e/this.lineHeight)),a+=e}else a+=e;t.fillStyle=c,this._removeShadow(t)}},getFontCache:function(t){var e=t.fontFamily.toLowerCase();d.charWidthsCache[e]||(d.charWidthsCache[e]={});var i=d.charWidthsCache[e],r=t.fontStyle.toLowerCase()+"_"+(t.fontWeight+"").toLowerCase();return i[r]||(i[r]={}),i[r]},_applyCharStyles:function(t,e,i,r,n){this._setFillStyles(e,n),this._setStrokeStyles(e,n),e.font=this._getFontDeclaration(n)},_measureChar:function(t,e,i,r){var n,s,o,a,c=this.getFontCache(e),h=i+t,l=this._getFontDeclaration(e)===this._getFontDeclaration(r),u=e.fontSize/this.CACHE_FONT_SIZE;if(i&&void 0!==c[i]&&(o=c[i]),void 0!==c[t]&&(a=n=c[t]),l&&void 0!==c[h]&&(a=(s=c[h])-o),void 0===n||void 0===o||void 0===s){var f=this.getMeasuringContext();this._setTextStyles(f,e,!0)}return void 0===n&&(a=n=f.measureText(t).width,c[t]=n),void 0===o&&l&&i&&(o=f.measureText(i).width,c[i]=o),l&&void 0===s&&(s=f.measureText(h).width,a=(c[h]=s)-o),{width:n*u,kernedWidth:a*u}},getHeightOfChar:function(t,e){return this.getValueOfPropertyAt(t,e,"fontSize")},measureLine:function(t){var e=this._measureLine(t);return 0!==this.charSpacing&&(e.width-=this._getWidthOfCharSpacing()),e.width<0&&(e.width=0),e},_measureLine:function(t){var e,i,r,n,s=0,o=this._textLines[t],a=new Array(o.length);for(this.__charBounds[t]=a,e=0;e<o.length;e++)i=o[e],n=this._getGraphemeBox(i,t,e,r),s+=(a[e]=n).kernedWidth,r=i;return a[e]={left:n?n.left+n.width:0,width:0,kernedWidth:0,height:this.fontSize},{width:s,numOfSpaces:0}},_getGraphemeBox:function(t,e,i,r,n){var s,o=this.getCompleteStyleDeclaration(e,i),a=r?this.getCompleteStyleDeclaration(e,i-1):{},c=this._measureChar(t,o,r,a),h=c.kernedWidth,l=c.width;0!==this.charSpacing&&(l+=s=this._getWidthOfCharSpacing(),h+=s);var u={width:l,left:0,height:o.fontSize,kernedWidth:h,deltaY:o.deltaY};if(0<i&&!n){var f=this.__charBounds[e][i-1];u.left=f.left+f.width+c.kernedWidth-c.width}return u},getHeightOfLine:function(t){if(this.__lineHeights[t])return this.__lineHeights[t];for(var e=this._textLines[t],i=this.getHeightOfChar(t,0),r=1,n=e.length;r<n;r++)i=Math.max(this.getHeightOfChar(t,r),i);return this.__lineHeights[t]=i*this.lineHeight*this._fontSizeMult},calcTextHeight:function(){for(var t,e=0,i=0,r=this._textLines.length;i<r;i++)t=this.getHeightOfLine(i),e+=i===r-1?t/this.lineHeight:t;return e},_getLeftOffset:function(){return-this.width/2},_getTopOffset:function(){return-this.height/2},_renderTextCommon:function(t,e){t.save();for(var i=0,r=this._getLeftOffset(),n=this._getTopOffset(),s=this._applyPatternGradientTransform(t,"fillText"===e?this.fill:this.stroke),o=0,a=this._textLines.length;o<a;o++){var c=this.getHeightOfLine(o),h=c/this.lineHeight,l=this._getLineLeftOffset(o);this._renderTextLine(e,t,this._textLines[o],r+l-s.offsetX,n+i+h-s.offsetY,o),i+=c}t.restore()},_renderTextFill:function(t){(this.fill||this.styleHas("fill"))&&this._renderTextCommon(t,"fillText")},_renderTextStroke:function(t){(this.stroke&&0!==this.strokeWidth||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())},_renderChars:function(t,e,i,r,n,s){var o,a,c,h,l=this.getHeightOfLine(s),u=-1!==this.textAlign.indexOf("justify"),f="",d=0,g=!u&&0===this.charSpacing&&this.isEmptyStyles(s);if(e.save(),n-=l*this._fontSizeFraction/this.lineHeight,g)return this._renderChar(t,e,s,0,i.join(""),r,n,l),void e.restore();for(var p=0,v=i.length-1;p<=v;p++)h=p===v||this.charSpacing,f+=i[p],c=this.__charBounds[s][p],0===d?(r+=c.kernedWidth-c.width,d+=c.width):d+=c.kernedWidth,u&&!h&&this._reSpaceAndTab.test(i[p])&&(h=!0),h||(o=o||this.getCompleteStyleDeclaration(s,p),a=this.getCompleteStyleDeclaration(s,p+1),h=this._hasStyleChanged(o,a)),h&&(this._renderChar(t,e,s,p,f,r,n,l),f="",o=a,r+=d,d=0);e.restore()},_renderChar:function(t,e,i,r,n,s,o){var a=this._getStyleDeclaration(i,r),c=this.getCompleteStyleDeclaration(i,r),h="fillText"===t&&c.fill,l="strokeText"===t&&c.stroke&&c.strokeWidth;(l||h)&&(a&&e.save(),this._applyCharStyles(t,e,i,r,c),a&&a.textBackgroundColor&&this._removeShadow(e),a&&a.deltaY&&(o+=a.deltaY),h&&e.fillText(n,s,o),l&&e.strokeText(n,s,o),a&&e.restore())},setSuperscript:function(t,e){return this._setScript(t,e,this.superscript)},setSubscript:function(t,e){return this._setScript(t,e,this.subscript)},_setScript:function(t,e,i){var r=this.get2DCursorLocation(t,!0),n=this.getValueOfPropertyAt(r.lineIndex,r.charIndex,"fontSize"),s=this.getValueOfPropertyAt(r.lineIndex,r.charIndex,"deltaY"),o={fontSize:n*i.size,deltaY:s+n*i.baseline};return this.setSelectionStyles(o,t,e),this},_hasStyleChanged:function(t,e){return t.fill!==e.fill||t.stroke!==e.stroke||t.strokeWidth!==e.strokeWidth||t.fontSize!==e.fontSize||t.fontFamily!==e.fontFamily||t.fontWeight!==e.fontWeight||t.fontStyle!==e.fontStyle||t.deltaY!==e.deltaY},_hasStyleChangedForSvg:function(t,e){return this._hasStyleChanged(t,e)||t.overline!==e.overline||t.underline!==e.underline||t.linethrough!==e.linethrough},_getLineLeftOffset:function(t){var e=this.getLineWidth(t);return"center"===this.textAlign?(this.width-e)/2:"right"===this.textAlign?this.width-e:"justify-center"===this.textAlign&&this.isEndOfWrapping(t)?(this.width-e)/2:"justify-right"===this.textAlign&&this.isEndOfWrapping(t)?this.width-e:0},_clearCache:function(){this.__lineWidths=[],this.__lineHeights=[],this.__charBounds=[]},_shouldClearDimensionCache:function(){var t=this._forceClearCache;return t||(t=this.hasStateChanged("_dimensionAffectingProps")),t&&(this.dirty=!0,this._forceClearCache=!1),t},getLineWidth:function(t){return this.__lineWidths[t]?this.__lineWidths[t]:(e=""===this._textLines[t]?0:this.measureLine(t).width,this.__lineWidths[t]=e);var e},_getWidthOfCharSpacing:function(){return 0!==this.charSpacing?this.fontSize*this.charSpacing/1e3:0},getValueOfPropertyAt:function(t,e,i){var r=this._getStyleDeclaration(t,e);return r&&void 0!==r[i]?r[i]:this[i]},_renderTextDecoration:function(t,e){if(this[e]||this.styleHas(e)){for(var i,r,n,s,o,a,c,h,l,u,f,d,g,p,v,m,b=this._getLeftOffset(),_=this._getTopOffset(),y=this._getWidthOfCharSpacing(),x=0,C=this._textLines.length;x<C;x++)if(i=this.getHeightOfLine(x),this[e]||this.styleHas(e,x)){c=this._textLines[x],p=i/this.lineHeight,s=this._getLineLeftOffset(x),f=u=0,h=this.getValueOfPropertyAt(x,0,e),m=this.getValueOfPropertyAt(x,0,"fill"),l=_+p*(1-this._fontSizeFraction),r=this.getHeightOfChar(x,0),o=this.getValueOfPropertyAt(x,0,"deltaY");for(var S=0,w=c.length;S<w;S++)d=this.__charBounds[x][S],g=this.getValueOfPropertyAt(x,S,e),v=this.getValueOfPropertyAt(x,S,"fill"),n=this.getHeightOfChar(x,S),a=this.getValueOfPropertyAt(x,S,"deltaY"),(g!==h||v!==m||n!==r||a!==o)&&0<f?(t.fillStyle=m,h&&m&&t.fillRect(b+s+u,l+this.offsets[e]*r+o,f,this.fontSize/15),u=d.left,f=d.width,h=g,m=v,r=n,o=a):f+=d.kernedWidth;t.fillStyle=v,g&&v&&t.fillRect(b+s+u,l+this.offsets[e]*r+o,f-y,this.fontSize/15),_+=i}else _+=i;this._removeShadow(t)}},_getFontDeclaration:function(t,e){var i=t||this,r=this.fontFamily,n=-1<d.Text.genericFonts.indexOf(r.toLowerCase()),s=void 0===r||-1<r.indexOf("'")||-1<r.indexOf(",")||-1<r.indexOf('"')||n?i.fontFamily:'"'+i.fontFamily+'"';return[d.isLikelyNode?i.fontWeight:i.fontStyle,d.isLikelyNode?i.fontStyle:i.fontWeight,e?this.CACHE_FONT_SIZE+"px":i.fontSize+"px",s].join(" ")},render:function(t){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._shouldClearDimensionCache()&&this.initDimensions(),this.callSuper("render",t)))},_splitTextIntoLines:function(t){for(var e=t.split(this._reNewline),i=new Array(e.length),r=["\n"],n=[],s=0;s<e.length;s++)i[s]=d.util.string.graphemeSplit(e[s]),n=n.concat(i[s],r);return n.pop(),{_unwrappedLines:i,lines:e,graphemeText:n,graphemeLines:i}},toObject:function(t){var e=["text","fontSize","fontWeight","fontFamily","fontStyle","lineHeight","underline","overline","linethrough","textAlign","textBackgroundColor","charSpacing"].concat(t),i=this.callSuper("toObject",e);return i.styles=g(this.styles,!0),i},set:function(t,e){this.callSuper("set",t,e);var i=!1;if("object"==typeof t)for(var r in t)i=i||-1!==this._dimensionAffectingProps.indexOf(r);else i=-1!==this._dimensionAffectingProps.indexOf(t);return i&&(this.initDimensions(),this.setCoords()),this},complexity:function(){return 1}}),d.Text.ATTRIBUTE_NAMES=d.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")),d.Text.DEFAULT_SVG_FONT_SIZE=16,d.Text.fromElement=function(t,e,i){if(!t)return e(null);var r=d.parseAttributes(t,d.Text.ATTRIBUTE_NAMES),n=r.textAnchor||"left";if((i=d.util.object.extend(i?g(i):{},r)).top=i.top||0,i.left=i.left||0,r.textDecoration){var s=r.textDecoration;-1!==s.indexOf("underline")&&(i.underline=!0),-1!==s.indexOf("overline")&&(i.overline=!0),-1!==s.indexOf("line-through")&&(i.linethrough=!0),delete i.textDecoration}"dx"in r&&(i.left+=r.dx),"dy"in r&&(i.top+=r.dy),"fontSize"in i||(i.fontSize=d.Text.DEFAULT_SVG_FONT_SIZE);var o="";"textContent"in t?o=t.textContent:"firstChild"in t&&null!==t.firstChild&&"data"in t.firstChild&&null!==t.firstChild.data&&(o=t.firstChild.data),o=o.replace(/^\s+|\s+$|\n+/g,"").replace(/\s+/g," ");var a=i.strokeWidth;i.strokeWidth=0;var c=new d.Text(o,i),h=c.getScaledHeight()/c.height,l=((c.height+c.strokeWidth)*c.lineHeight-c.height)*h,u=c.getScaledHeight()+l,f=0;"center"===n&&(f=c.getScaledWidth()/2),"right"===n&&(f=c.getScaledWidth()),c.set({left:c.left-f,top:c.top-(u-c.fontSize*(.07+c._fontSizeFraction))/c.lineHeight,strokeWidth:void 0!==a?a:1}),e(c)},d.Text.fromObject=function(t,e){return d.Object._fromObject("Text",t,e,"text")},d.Text.genericFonts=["sans-serif","serif","cursive","fantasy","monospace"],d.util.createAccessors&&d.util.createAccessors(d.Text))}( true?exports:undefined),fabric.util.object.extend(fabric.Text.prototype,{isEmptyStyles:function(t){if(!this.styles)return!0;if(void 0!==t&&!this.styles[t])return!0;var e=void 0===t?this.styles:{line:this.styles[t]};for(var i in e)for(var r in e[i])for(var n in e[i][r])return!1;return!0},styleHas:function(t,e){if(!this.styles||!t||""===t)return!1;if(void 0!==e&&!this.styles[e])return!1;var i=void 0===e?this.styles:{0:this.styles[e]};for(var r in i)for(var n in i[r])if(void 0!==i[r][n][t])return!0;return!1},cleanStyle:function(t){if(!this.styles||!t||""===t)return!1;var e,i,r=this.styles,n=0,s=!0,o=0;for(var a in r){for(var c in e=0,r[a]){var h;n++,(h=r[a][c]).hasOwnProperty(t)?(i?h[t]!==i&&(s=!1):i=h[t],h[t]===this[t]&&delete h[t]):s=!1,0!==Object.keys(h).length?e++:delete r[a][c]}0===e&&delete r[a]}for(var l=0;l<this._textLines.length;l++)o+=this._textLines[l].length;s&&n===o&&(this[t]=i,this.removeStyle(t))},removeStyle:function(t){if(this.styles&&t&&""!==t){var e,i,r,n=this.styles;for(i in n){for(r in e=n[i])delete e[r][t],0===Object.keys(e[r]).length&&delete e[r];0===Object.keys(e).length&&delete n[i]}}},_extendStyles:function(t,e){var i=this.get2DCursorLocation(t);this._getLineStyle(i.lineIndex)||this._setLineStyle(i.lineIndex),this._getStyleDeclaration(i.lineIndex,i.charIndex)||this._setStyleDeclaration(i.lineIndex,i.charIndex,{}),fabric.util.object.extend(this._getStyleDeclaration(i.lineIndex,i.charIndex),e)},get2DCursorLocation:function(t,e){void 0===t&&(t=this.selectionStart);for(var i=e?this._unwrappedTextLines:this._textLines,r=i.length,n=0;n<r;n++){if(t<=i[n].length)return{lineIndex:n,charIndex:t};t-=i[n].length+this.missingNewlineOffset(n)}return{lineIndex:n-1,charIndex:i[n-1].length<t?i[n-1].length:t}},getSelectionStyles:function(t,e,i){void 0===t&&(t=this.selectionStart||0),void 0===e&&(e=this.selectionEnd||t);for(var r=[],n=t;n<e;n++)r.push(this.getStyleAtPosition(n,i));return r},getStyleAtPosition:function(t,e){var i=this.get2DCursorLocation(t);return(e?this.getCompleteStyleDeclaration(i.lineIndex,i.charIndex):this._getStyleDeclaration(i.lineIndex,i.charIndex))||{}},setSelectionStyles:function(t,e,i){void 0===e&&(e=this.selectionStart||0),void 0===i&&(i=this.selectionEnd||e);for(var r=e;r<i;r++)this._extendStyles(r,t);return this._forceClearCache=!0,this},_getStyleDeclaration:function(t,e){var i=this.styles&&this.styles[t];return i?i[e]:null},getCompleteStyleDeclaration:function(t,e){for(var i,r=this._getStyleDeclaration(t,e)||{},n={},s=0;s<this._styleProperties.length;s++)n[i=this._styleProperties[s]]=void 0===r[i]?this[i]:r[i];return n},_setStyleDeclaration:function(t,e,i){this.styles[t][e]=i},_deleteStyleDeclaration:function(t,e){delete this.styles[t][e]},_getLineStyle:function(t){return!!this.styles[t]},_setLineStyle:function(t){this.styles[t]={}},_deleteLineStyle:function(t){delete this.styles[t]}}),function(){function n(t){t.textDecoration&&(-1<t.textDecoration.indexOf("underline")&&(t.underline=!0),-1<t.textDecoration.indexOf("line-through")&&(t.linethrough=!0),-1<t.textDecoration.indexOf("overline")&&(t.overline=!0),delete t.textDecoration)}fabric.IText=fabric.util.createClass(fabric.Text,fabric.Observable,{type:"i-text",selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"",cursorDelay:1e3,cursorDuration:600,caching:!0,_reSpace:/\s|\n/,_currentCursorOpacity:0,_selectionDirection:null,_abortCursorAnimation:!1,__widthOfSpace:[],inCompositionMode:!1,initialize:function(t,e){this.callSuper("initialize",t,e),this.initBehavior()},setSelectionStart:function(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)},setSelectionEnd:function(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)},_updateAndFire:function(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()},_fireSelectionChanged:function(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},initDimensions:function(){this.isEditing&&this.initDelayedCursor(),this.clearContextTop(),this.callSuper("initDimensions")},render:function(t){this.clearContextTop(),this.callSuper("render",t),this.cursorOffsetCache={},this.renderCursorOrSelection()},_render:function(t){this.callSuper("_render",t)},clearContextTop:function(t){if(this.isEditing&&this.canvas&&this.canvas.contextTop){var e=this.canvas.contextTop,i=this.canvas.viewportTransform;e.save(),e.transform(i[0],i[1],i[2],i[3],i[4],i[5]),this.transform(e),this._clearTextArea(e),t||e.restore()}},renderCursorOrSelection:function(){if(this.isEditing&&this.canvas&&this.canvas.contextTop){var t=this._getCursorBoundaries(),e=this.canvas.contextTop;this.clearContextTop(!0),this.selectionStart===this.selectionEnd?this.renderCursor(t,e):this.renderSelection(t,e),e.restore()}},_clearTextArea:function(t){var e=this.width+4,i=this.height+4;t.clearRect(-e/2,-i/2,e,i)},_getCursorBoundaries:function(t){void 0===t&&(t=this.selectionStart);var e=this._getLeftOffset(),i=this._getTopOffset(),r=this._getCursorBoundariesOffsets(t);return{left:e,top:i,leftOffset:r.left,topOffset:r.top}},_getCursorBoundariesOffsets:function(t){if(this.cursorOffsetCache&&"top"in this.cursorOffsetCache)return this.cursorOffsetCache;var e,i,r,n,s=0,o=0,a=this.get2DCursorLocation(t);r=a.charIndex,i=a.lineIndex;for(var c=0;c<i;c++)s+=this.getHeightOfLine(c);e=this._getLineLeftOffset(i);var h=this.__charBounds[i][r];return h&&(o=h.left),0!==this.charSpacing&&r===this._textLines[i].length&&(o-=this._getWidthOfCharSpacing()),n={top:s,left:e+(0<o?o:0)},this.cursorOffsetCache=n,this.cursorOffsetCache},renderCursor:function(t,e){var i=this.get2DCursorLocation(),r=i.lineIndex,n=0<i.charIndex?i.charIndex-1:0,s=this.getValueOfPropertyAt(r,n,"fontSize"),o=this.scaleX*this.canvas.getZoom(),a=this.cursorWidth/o,c=t.topOffset,h=this.getValueOfPropertyAt(r,n,"deltaY");c+=(1-this._fontSizeFraction)*this.getHeightOfLine(r)/this.lineHeight-s*(1-this._fontSizeFraction),this.inCompositionMode&&this.renderSelection(t,e),e.fillStyle=this.cursorColor||this.getValueOfPropertyAt(r,n,"fill"),e.globalAlpha=this.__isMousedown?1:this._currentCursorOpacity,e.fillRect(t.left+t.leftOffset-a/2,c+t.top+h,a,s)},renderSelection:function(t,e){for(var i=this.inCompositionMode?this.hiddenTextarea.selectionStart:this.selectionStart,r=this.inCompositionMode?this.hiddenTextarea.selectionEnd:this.selectionEnd,n=-1!==this.textAlign.indexOf("justify"),s=this.get2DCursorLocation(i),o=this.get2DCursorLocation(r),a=s.lineIndex,c=o.lineIndex,h=s.charIndex<0?0:s.charIndex,l=o.charIndex<0?0:o.charIndex,u=a;u<=c;u++){var f,d=this._getLineLeftOffset(u)||0,g=this.getHeightOfLine(u),p=0,v=0;if(u===a&&(p=this.__charBounds[a][h].left),a<=u&&u<c)v=n&&!this.isEndOfWrapping(u)?this.width:this.getLineWidth(u)||5;else if(u===c)if(0===l)v=this.__charBounds[c][l].left;else{var m=this._getWidthOfCharSpacing();v=this.__charBounds[c][l-1].left+this.__charBounds[c][l-1].width-m}f=g,(this.lineHeight<1||u===c&&1<this.lineHeight)&&(g/=this.lineHeight),this.inCompositionMode?(e.fillStyle=this.compositionColor||"black",e.fillRect(t.left+d+p,t.top+t.topOffset+g,v-p,1)):(e.fillStyle=this.selectionColor,e.fillRect(t.left+d+p,t.top+t.topOffset,v-p,g)),t.topOffset+=f}},getCurrentCharFontSize:function(){var t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fontSize")},getCurrentCharColor:function(){var t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fill")},_getCurrentCharIndex:function(){var t=this.get2DCursorLocation(this.selectionStart,!0),e=0<t.charIndex?t.charIndex-1:0;return{l:t.lineIndex,c:e}}}),fabric.IText.fromObject=function(t,e){if(n(t),t.styles)for(var i in t.styles)for(var r in t.styles[i])n(t.styles[i][r]);fabric.Object._fromObject("IText",t,e,"text")}}(),function(){var u=fabric.util.object.clone;fabric.util.object.extend(fabric.IText.prototype,{initBehavior:function(){this.initAddedHandler(),this.initRemovedHandler(),this.initCursorSelectionHandlers(),this.initDoubleClickSimulation(),this.mouseMoveHandler=this.mouseMoveHandler.bind(this)},onDeselect:function(){this.isEditing&&this.exitEditing(),this.selected=!1},initAddedHandler:function(){var e=this;this.on("added",function(){var t=e.canvas;t&&(t._hasITextHandlers||(t._hasITextHandlers=!0,e._initCanvasHandlers(t)),t._iTextInstances=t._iTextInstances||[],t._iTextInstances.push(e))})},initRemovedHandler:function(){var e=this;this.on("removed",function(){var t=e.canvas;t&&(t._iTextInstances=t._iTextInstances||[],fabric.util.removeFromArray(t._iTextInstances,e),0===t._iTextInstances.length&&(t._hasITextHandlers=!1,e._removeCanvasHandlers(t)))})},_initCanvasHandlers:function(t){t._mouseUpITextHandler=function(){t._iTextInstances&&t._iTextInstances.forEach(function(t){t.__isMousedown=!1})},t.on("mouse:up",t._mouseUpITextHandler)},_removeCanvasHandlers:function(t){t.off("mouse:up",t._mouseUpITextHandler)},_tick:function(){this._currentTickState=this._animateCursor(this,1,this.cursorDuration,"_onTickComplete")},_animateCursor:function(t,e,i,r){var n;return n={isAborted:!1,abort:function(){this.isAborted=!0}},t.animate("_currentCursorOpacity",e,{duration:i,onComplete:function(){n.isAborted||t[r]()},onChange:function(){t.canvas&&t.selectionStart===t.selectionEnd&&t.renderCursorOrSelection()},abort:function(){return n.isAborted}}),n},_onTickComplete:function(){var t=this;this._cursorTimeout1&&clearTimeout(this._cursorTimeout1),this._cursorTimeout1=setTimeout(function(){t._currentTickCompleteState=t._animateCursor(t,0,this.cursorDuration/2,"_tick")},100)},initDelayedCursor:function(t){var e=this,i=t?0:this.cursorDelay;this.abortCursorAnimation(),this._currentCursorOpacity=1,this._cursorTimeout2=setTimeout(function(){e._tick()},i)},abortCursorAnimation:function(){var t=this._currentTickState||this._currentTickCompleteState,e=this.canvas;this._currentTickState&&this._currentTickState.abort(),this._currentTickCompleteState&&this._currentTickCompleteState.abort(),clearTimeout(this._cursorTimeout1),clearTimeout(this._cursorTimeout2),this._currentCursorOpacity=0,t&&e&&e.clearContext(e.contextTop||e.contextContainer)},selectAll:function(){return this.selectionStart=0,this.selectionEnd=this._text.length,this._fireSelectionChanged(),this._updateTextarea(),this},getSelectedText:function(){return this._text.slice(this.selectionStart,this.selectionEnd).join("")},findWordBoundaryLeft:function(t){var e=0,i=t-1;if(this._reSpace.test(this._text[i]))for(;this._reSpace.test(this._text[i]);)e++,i--;for(;/\S/.test(this._text[i])&&-1<i;)e++,i--;return t-e},findWordBoundaryRight:function(t){var e=0,i=t;if(this._reSpace.test(this._text[i]))for(;this._reSpace.test(this._text[i]);)e++,i++;for(;/\S/.test(this._text[i])&&i<this._text.length;)e++,i++;return t+e},findLineBoundaryLeft:function(t){for(var e=0,i=t-1;!/\n/.test(this._text[i])&&-1<i;)e++,i--;return t-e},findLineBoundaryRight:function(t){for(var e=0,i=t;!/\n/.test(this._text[i])&&i<this._text.length;)e++,i++;return t+e},searchWordBoundary:function(t,e){for(var i=this._text,r=this._reSpace.test(i[t])?t-1:t,n=i[r],s=fabric.reNonWord;!s.test(n)&&0<r&&r<i.length;)n=i[r+=e];return s.test(n)&&(r+=1===e?0:1),r},selectWord:function(t){t=t||this.selectionStart;var e=this.searchWordBoundary(t,-1),i=this.searchWordBoundary(t,1);this.selectionStart=e,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()},selectLine:function(t){t=t||this.selectionStart;var e=this.findLineBoundaryLeft(t),i=this.findLineBoundaryRight(t);return this.selectionStart=e,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this},enterEditing:function(t){if(!this.isEditing&&this.editable)return this.canvas&&(this.canvas.calcOffset(),this.exitEditingOnOthers(this.canvas)),this.isEditing=!0,this.initHiddenTextarea(t),this.hiddenTextarea.focus(),this.hiddenTextarea.value=this.text,this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick(),this.fire("editing:entered"),this._fireSelectionChanged(),this.canvas&&(this.canvas.fire("text:editing:entered",{target:this}),this.initMouseMoveHandler(),this.canvas.requestRenderAll()),this},exitEditingOnOthers:function(t){t._iTextInstances&&t._iTextInstances.forEach(function(t){t.selected=!1,t.isEditing&&t.exitEditing()})},initMouseMoveHandler:function(){this.canvas.on("mouse:move",this.mouseMoveHandler)},mouseMoveHandler:function(t){if(this.__isMousedown&&this.isEditing){var e=this.getSelectionStartFromPointer(t.e),i=this.selectionStart,r=this.selectionEnd;(e===this.__selectionStartOnMouseDown&&i!==r||i!==e&&r!==e)&&(e>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=e):(this.selectionStart=e,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===i&&this.selectionEnd===r||(this.restartCursorIfNeeded(),this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}},_setEditingProps:function(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0},fromStringToGraphemeSelection:function(t,e,i){var r=i.slice(0,t),n=fabric.util.string.graphemeSplit(r).length;if(t===e)return{selectionStart:n,selectionEnd:n};var s=i.slice(t,e);return{selectionStart:n,selectionEnd:n+fabric.util.string.graphemeSplit(s).length}},fromGraphemeToStringSelection:function(t,e,i){var r=i.slice(0,t).join("").length;return t===e?{selectionStart:r,selectionEnd:r}:{selectionStart:r,selectionEnd:r+i.slice(t,e).join("").length}},_updateTextarea:function(){if(this.cursorOffsetCache={},this.hiddenTextarea){if(!this.inCompositionMode){var t=this.fromGraphemeToStringSelection(this.selectionStart,this.selectionEnd,this._text);this.hiddenTextarea.selectionStart=t.selectionStart,this.hiddenTextarea.selectionEnd=t.selectionEnd}this.updateTextareaPosition()}},updateFromTextArea:function(){if(this.hiddenTextarea){this.cursorOffsetCache={},this.text=this.hiddenTextarea.value,this._shouldClearDimensionCache()&&(this.initDimensions(),this.setCoords());var t=this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart,this.hiddenTextarea.selectionEnd,this.hiddenTextarea.value);this.selectionEnd=this.selectionStart=t.selectionEnd,this.inCompositionMode||(this.selectionStart=t.selectionStart),this.updateTextareaPosition()}},updateTextareaPosition:function(){if(this.selectionStart===this.selectionEnd){var t=this._calcTextareaPosition();this.hiddenTextarea.style.left=t.left,this.hiddenTextarea.style.top=t.top}},_calcTextareaPosition:function(){if(!this.canvas)return{x:1,y:1};var t=this.inCompositionMode?this.compositionStart:this.selectionStart,e=this._getCursorBoundaries(t),i=this.get2DCursorLocation(t),r=i.lineIndex,n=i.charIndex,s=this.getValueOfPropertyAt(r,n,"fontSize")*this.lineHeight,o=e.leftOffset,a=this.calcTransformMatrix(),c={x:e.left+o,y:e.top+e.topOffset+s},h=this.canvas.getRetinaScaling(),l=this.canvas.upperCanvasEl,u=l.width/h,f=l.height/h,d=u-s,g=f-s,p=l.clientWidth/u,v=l.clientHeight/f;return c=fabric.util.transformPoint(c,a),(c=fabric.util.transformPoint(c,this.canvas.viewportTransform)).x*=p,c.y*=v,c.x<0&&(c.x=0),c.x>d&&(c.x=d),c.y<0&&(c.y=0),c.y>g&&(c.y=g),c.x+=this.canvas._offset.left,c.y+=this.canvas._offset.top,{left:c.x+"px",top:c.y+"px",fontSize:s+"px",charHeight:s}},_saveEditingProps:function(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,selectable:this.selectable,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}},_restoreEditingProps:function(){this._savedProps&&(this.hoverCursor=this._savedProps.hoverCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.selectable=this._savedProps.selectable,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor))},exitEditing:function(){var t=this._textBeforeEdit!==this.text,e=this.hiddenTextarea;return this.selected=!1,this.isEditing=!1,this.selectionEnd=this.selectionStart,e&&(e.blur&&e.blur(),e.parentNode&&e.parentNode.removeChild(e)),this.hiddenTextarea=null,this.abortCursorAnimation(),this._restoreEditingProps(),this._currentCursorOpacity=0,this._shouldClearDimensionCache()&&(this.initDimensions(),this.setCoords()),this.fire("editing:exited"),t&&this.fire("modified"),this.canvas&&(this.canvas.off("mouse:move",this.mouseMoveHandler),this.canvas.fire("text:editing:exited",{target:this}),t&&this.canvas.fire("object:modified",{target:this})),this},_removeExtraneousStyles:function(){for(var t in this.styles)this._textLines[t]||delete this.styles[t]},removeStyleFromTo:function(t,e){var i,r,n=this.get2DCursorLocation(t,!0),s=this.get2DCursorLocation(e,!0),o=n.lineIndex,a=n.charIndex,c=s.lineIndex,h=s.charIndex;if(o!==c){if(this.styles[o])for(i=a;i<this._unwrappedTextLines[o].length;i++)delete this.styles[o][i];if(this.styles[c])for(i=h;i<this._unwrappedTextLines[c].length;i++)(r=this.styles[c][i])&&(this.styles[o]||(this.styles[o]={}),this.styles[o][a+i-h]=r);for(i=o+1;i<=c;i++)delete this.styles[i];this.shiftLineStyles(c,o-c)}else if(this.styles[o]){r=this.styles[o];var l,u,f=h-a;for(i=a;i<h;i++)delete r[i];for(u in this.styles[o])h<=(l=parseInt(u,10))&&(r[l-f]=r[u],delete r[u])}},shiftLineStyles:function(t,e){var i=u(this.styles);for(var r in this.styles){var n=parseInt(r,10);t<n&&(this.styles[n+e]=i[n],i[n-e]||delete this.styles[n])}},restartCursorIfNeeded:function(){this._currentTickState&&!this._currentTickState.isAborted&&this._currentTickCompleteState&&!this._currentTickCompleteState.isAborted||this.initDelayedCursor()},insertNewlineStyleObject:function(t,e,i,r){var n,s={},o=!1,a=this._unwrappedTextLines[t].length===e;for(var c in i||(i=1),this.shiftLineStyles(t,i),this.styles[t]&&(n=this.styles[t][0===e?e:e-1]),this.styles[t]){var h=parseInt(c,10);e<=h&&(o=!0,s[h-e]=this.styles[t][c],a&&0===e||delete this.styles[t][c])}var l=!1;for(o&&!a&&(this.styles[t+i]=s,l=!0),l&&i--;0<i;)r&&r[i-1]?this.styles[t+i]={0:u(r[i-1])}:n?this.styles[t+i]={0:u(n)}:delete this.styles[t+i],i--;this._forceClearCache=!0},insertCharStyleObject:function(t,e,i,r){this.styles||(this.styles={});var n=this.styles[t],s=n?u(n):{};for(var o in i||(i=1),s){var a=parseInt(o,10);e<=a&&(n[a+i]=s[a],s[a-i]||delete n[a])}if(this._forceClearCache=!0,r)for(;i--;)Object.keys(r[i]).length&&(this.styles[t]||(this.styles[t]={}),this.styles[t][e+i]=u(r[i]));else if(n)for(var c=n[e?e-1:1];c&&i--;)this.styles[t][e+i]=u(c)},insertNewStyleBlock:function(t,e,i){for(var r=this.get2DCursorLocation(e,!0),n=[0],s=0,o=0;o<t.length;o++)"\n"===t[o]?n[++s]=0:n[s]++;0<n[0]&&(this.insertCharStyleObject(r.lineIndex,r.charIndex,n[0],i),i=i&&i.slice(n[0]+1)),s&&this.insertNewlineStyleObject(r.lineIndex,r.charIndex+n[0],s);for(o=1;o<s;o++)0<n[o]?this.insertCharStyleObject(r.lineIndex+o,0,n[o],i):i&&(this.styles[r.lineIndex+o][0]=i[0]),i=i&&i.slice(n[o]+1);0<n[o]&&this.insertCharStyleObject(r.lineIndex+o,0,n[o],i)},setSelectionStartEndWithShift:function(t,e,i){i<=t?(e===t?this._selectionDirection="left":"right"===this._selectionDirection&&(this._selectionDirection="left",this.selectionEnd=t),this.selectionStart=i):t<i&&i<e?"right"===this._selectionDirection?this.selectionEnd=i:this.selectionStart=i:(e===t?this._selectionDirection="right":"left"===this._selectionDirection&&(this._selectionDirection="right",this.selectionStart=e),this.selectionEnd=i)},setSelectionInBoundaries:function(){var t=this.text.length;this.selectionStart>t?this.selectionStart=t:this.selectionStart<0&&(this.selectionStart=0),this.selectionEnd>t?this.selectionEnd=t:this.selectionEnd<0&&(this.selectionEnd=0)}})}(),fabric.util.object.extend(fabric.IText.prototype,{initDoubleClickSimulation:function(){this.__lastClickTime=+new Date,this.__lastLastClickTime=+new Date,this.__lastPointer={},this.on("mousedown",this.onMouseDown)},onMouseDown:function(t){if(this.canvas){this.__newClickTime=+new Date;var e=t.pointer;this.isTripleClick(e)&&(this.fire("tripleclick",t),this._stopEvent(t.e)),this.__lastLastClickTime=this.__lastClickTime,this.__lastClickTime=this.__newClickTime,this.__lastPointer=e,this.__lastIsEditing=this.isEditing,this.__lastSelected=this.selected}},isTripleClick:function(t){return this.__newClickTime-this.__lastClickTime<500&&this.__lastClickTime-this.__lastLastClickTime<500&&this.__lastPointer.x===t.x&&this.__lastPointer.y===t.y},_stopEvent:function(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()},initCursorSelectionHandlers:function(){this.initMousedownHandler(),this.initMouseupHandler(),this.initClicks()},doubleClickHandler:function(t){this.isEditing&&this.selectWord(this.getSelectionStartFromPointer(t.e))},tripleClickHandler:function(t){this.isEditing&&this.selectLine(this.getSelectionStartFromPointer(t.e))},initClicks:function(){this.on("mousedblclick",this.doubleClickHandler),this.on("tripleclick",this.tripleClickHandler)},_mouseDownHandler:function(t){!this.canvas||!this.editable||t.e.button&&1!==t.e.button||(this.__isMousedown=!0,this.selected&&(this.inCompositionMode=!1,this.setCursorByClick(t.e)),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection()))},_mouseDownHandlerBefore:function(t){!this.canvas||!this.editable||t.e.button&&1!==t.e.button||(this.selected=this===this.canvas._activeObject)},initMousedownHandler:function(){this.on("mousedown",this._mouseDownHandler),this.on("mousedown:before",this._mouseDownHandlerBefore)},initMouseupHandler:function(){this.on("mouseup",this.mouseUpHandler)},mouseUpHandler:function(t){if(this.__isMousedown=!1,!(!this.editable||this.group||t.transform&&t.transform.actionPerformed||t.e.button&&1!==t.e.button)){if(this.canvas){var e=this.canvas._activeObject;if(e&&e!==this)return}this.__lastSelected&&!this.__corner?(this.selected=!1,this.__lastSelected=!1,this.enterEditing(t.e),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection()):this.selected=!0}},setCursorByClick:function(t){var e=this.getSelectionStartFromPointer(t),i=this.selectionStart,r=this.selectionEnd;t.shiftKey?this.setSelectionStartEndWithShift(i,r,e):(this.selectionStart=e,this.selectionEnd=e),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())},getSelectionStartFromPointer:function(t){for(var e=this.getLocalPointer(t),i=0,r=0,n=0,s=0,o=0,a=0,c=this._textLines.length;a<c&&n<=e.y;a++)n+=this.getHeightOfLine(a)*this.scaleY,0<(o=a)&&(s+=this._textLines[a-1].length+this.missingNewlineOffset(a-1));r=this._getLineLeftOffset(o)*this.scaleX;for(var h=0,l=this._textLines[o].length;h<l&&(i=r,(r+=this.__charBounds[o][h].kernedWidth*this.scaleX)<=e.x);h++)s++;return this._getNewSelectionStartFromOffset(e,i,r,s,l)},_getNewSelectionStartFromOffset:function(t,e,i,r,n){var s=t.x-e,o=i-t.x,a=r+(s<o||o<0?0:1);return this.flipX&&(a=n-a),a>this._text.length&&(a=this._text.length),a}}),fabric.util.object.extend(fabric.IText.prototype,{initHiddenTextarea:function(){this.hiddenTextarea=fabric.document.createElement("textarea"),this.hiddenTextarea.setAttribute("autocapitalize","off"),this.hiddenTextarea.setAttribute("autocorrect","off"),this.hiddenTextarea.setAttribute("autocomplete","off"),this.hiddenTextarea.setAttribute("spellcheck","false"),this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea",""),this.hiddenTextarea.setAttribute("wrap","off");var t=this._calcTextareaPosition();this.hiddenTextarea.style.cssText="position: absolute; top: "+t.top+"; left: "+t.left+"; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; paddingｰtop: "+t.fontSize+";",fabric.document.body.appendChild(this.hiddenTextarea),fabric.util.addListener(this.hiddenTextarea,"keydown",this.onKeyDown.bind(this)),fabric.util.addListener(this.hiddenTextarea,"keyup",this.onKeyUp.bind(this)),fabric.util.addListener(this.hiddenTextarea,"input",this.onInput.bind(this)),fabric.util.addListener(this.hiddenTextarea,"copy",this.copy.bind(this)),fabric.util.addListener(this.hiddenTextarea,"cut",this.copy.bind(this)),fabric.util.addListener(this.hiddenTextarea,"paste",this.paste.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionstart",this.onCompositionStart.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionupdate",this.onCompositionUpdate.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionend",this.onCompositionEnd.bind(this)),!this._clickHandlerInitialized&&this.canvas&&(fabric.util.addListener(this.canvas.upperCanvasEl,"click",this.onClick.bind(this)),this._clickHandlerInitialized=!0)},keysMap:{9:"exitEditing",27:"exitEditing",33:"moveCursorUp",34:"moveCursorDown",35:"moveCursorRight",36:"moveCursorLeft",37:"moveCursorLeft",38:"moveCursorUp",39:"moveCursorRight",40:"moveCursorDown"},ctrlKeysMapUp:{67:"copy",88:"cut"},ctrlKeysMapDown:{65:"selectAll"},onClick:function(){this.hiddenTextarea&&this.hiddenTextarea.focus()},onKeyDown:function(t){if(this.isEditing){if(t.keyCode in this.keysMap)this[this.keysMap[t.keyCode]](t);else{if(!(t.keyCode in this.ctrlKeysMapDown&&(t.ctrlKey||t.metaKey)))return;this[this.ctrlKeysMapDown[t.keyCode]](t)}t.stopImmediatePropagation(),t.preventDefault(),33<=t.keyCode&&t.keyCode<=40?(this.inCompositionMode=!1,this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.requestRenderAll()}},onKeyUp:function(t){!this.isEditing||this._copyDone||this.inCompositionMode?this._copyDone=!1:t.keyCode in this.ctrlKeysMapUp&&(t.ctrlKey||t.metaKey)&&(this[this.ctrlKeysMapUp[t.keyCode]](t),t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.requestRenderAll())},onInput:function(t){var e=this.fromPaste;if(this.fromPaste=!1,t&&t.stopPropagation(),this.isEditing){var i,r,n,s,o,a=this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText,c=this._text.length,h=a.length,l=h-c,u=this.selectionStart,f=this.selectionEnd,d=u!==f;if(""===this.hiddenTextarea.value)return this.styles={},this.updateFromTextArea(),this.fire("changed"),void(this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll()));var g=this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart,this.hiddenTextarea.selectionEnd,this.hiddenTextarea.value),p=u>g.selectionStart;d?(i=this._text.slice(u,f),l+=f-u):h<c&&(i=p?this._text.slice(f+l,f):this._text.slice(u,u-l)),r=a.slice(g.selectionEnd-l,g.selectionEnd),i&&i.length&&(r.length&&(n=this.getSelectionStyles(u,u+1,!1),n=r.map(function(){return n[0]})),d?(s=u,o=f):p?(s=f-i.length,o=f):o=(s=f)+i.length,this.removeStyleFromTo(s,o)),r.length&&(e&&r.join("")===fabric.copiedText&&!fabric.disableStyleCopyPaste&&(n=fabric.copiedTextStyle),this.insertNewStyleBlock(r,u,n)),this.updateFromTextArea(),this.fire("changed"),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll())}},onCompositionStart:function(){this.inCompositionMode=!0},onCompositionEnd:function(){this.inCompositionMode=!1},onCompositionUpdate:function(t){this.compositionStart=t.target.selectionStart,this.compositionEnd=t.target.selectionEnd,this.updateTextareaPosition()},copy:function(){this.selectionStart!==this.selectionEnd&&(fabric.copiedText=this.getSelectedText(),fabric.disableStyleCopyPaste?fabric.copiedTextStyle=null:fabric.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd,!0),this._copyDone=!0)},paste:function(){this.fromPaste=!0},_getClipboardData:function(t){return t&&t.clipboardData||fabric.window.clipboardData},_getWidthBeforeCursor:function(t,e){var i,r=this._getLineLeftOffset(t);return 0<e&&(r+=(i=this.__charBounds[t][e-1]).left+i.width),r},getDownCursorOffset:function(t,e){var i=this._getSelectionForOffset(t,e),r=this.get2DCursorLocation(i),n=r.lineIndex;if(n===this._textLines.length-1||t.metaKey||34===t.keyCode)return this._text.length-i;var s=r.charIndex,o=this._getWidthBeforeCursor(n,s),a=this._getIndexOnLine(n+1,o);return this._textLines[n].slice(s).length+a+1+this.missingNewlineOffset(n)},_getSelectionForOffset:function(t,e){return t.shiftKey&&this.selectionStart!==this.selectionEnd&&e?this.selectionEnd:this.selectionStart},getUpCursorOffset:function(t,e){var i=this._getSelectionForOffset(t,e),r=this.get2DCursorLocation(i),n=r.lineIndex;if(0===n||t.metaKey||33===t.keyCode)return-i;var s=r.charIndex,o=this._getWidthBeforeCursor(n,s),a=this._getIndexOnLine(n-1,o),c=this._textLines[n].slice(0,s),h=this.missingNewlineOffset(n-1);return-this._textLines[n-1].length+a-c.length+(1-h)},_getIndexOnLine:function(t,e){for(var i,r,n=this._textLines[t],s=this._getLineLeftOffset(t),o=0,a=0,c=n.length;a<c;a++)if(e<(s+=i=this.__charBounds[t][a].width)){r=!0;var h=s-i,l=s,u=Math.abs(h-e);o=Math.abs(l-e)<u?a:a-1;break}return r||(o=n.length-1),o},moveCursorDown:function(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorUpOrDown("Down",t)},moveCursorUp:function(t){0===this.selectionStart&&0===this.selectionEnd||this._moveCursorUpOrDown("Up",t)},_moveCursorUpOrDown:function(t,e){var i=this["get"+t+"CursorOffset"](e,"right"===this._selectionDirection);e.shiftKey?this.moveCursorWithShift(i):this.moveCursorWithoutShift(i),0!==i&&(this.setSelectionInBoundaries(),this.abortCursorAnimation(),this._currentCursorOpacity=1,this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())},moveCursorWithShift:function(t){var e="left"===this._selectionDirection?this.selectionStart+t:this.selectionEnd+t;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,e),0!==t},moveCursorWithoutShift:function(t){return t<0?(this.selectionStart+=t,this.selectionEnd=this.selectionStart):(this.selectionEnd+=t,this.selectionStart=this.selectionEnd),0!==t},moveCursorLeft:function(t){0===this.selectionStart&&0===this.selectionEnd||this._moveCursorLeftOrRight("Left",t)},_move:function(t,e,i){var r;if(t.altKey)r=this["findWordBoundary"+i](this[e]);else{if(!t.metaKey&&35!==t.keyCode&&36!==t.keyCode)return this[e]+="Left"===i?-1:1,!0;r=this["findLineBoundary"+i](this[e])}if(void 0!==typeof r&&this[e]!==r)return this[e]=r,!0},_moveLeft:function(t,e){return this._move(t,e,"Left")},_moveRight:function(t,e){return this._move(t,e,"Right")},moveCursorLeftWithoutShift:function(t){var e=!0;return this._selectionDirection="left",this.selectionEnd===this.selectionStart&&0!==this.selectionStart&&(e=this._moveLeft(t,"selectionStart")),this.selectionEnd=this.selectionStart,e},moveCursorLeftWithShift:function(t){return"right"===this._selectionDirection&&this.selectionStart!==this.selectionEnd?this._moveLeft(t,"selectionEnd"):0!==this.selectionStart?(this._selectionDirection="left",this._moveLeft(t,"selectionStart")):void 0},moveCursorRight:function(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorLeftOrRight("Right",t)},_moveCursorLeftOrRight:function(t,e){var i="moveCursor"+t+"With";this._currentCursorOpacity=1,e.shiftKey?i+="Shift":i+="outShift",this[i](e)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())},moveCursorRightWithShift:function(t){return"left"===this._selectionDirection&&this.selectionStart!==this.selectionEnd?this._moveRight(t,"selectionStart"):this.selectionEnd!==this._text.length?(this._selectionDirection="right",this._moveRight(t,"selectionEnd")):void 0},moveCursorRightWithoutShift:function(t){var e=!0;return this._selectionDirection="right",this.selectionStart===this.selectionEnd?(e=this._moveRight(t,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,e},removeChars:function(t,e){void 0===e&&(e=t+1),this.removeStyleFromTo(t,e),this._text.splice(t,e-t),this.text=this._text.join(""),this.set("dirty",!0),this._shouldClearDimensionCache()&&(this.initDimensions(),this.setCoords()),this._removeExtraneousStyles()},insertChars:function(t,e,i,r){void 0===r&&(r=i),i<r&&this.removeStyleFromTo(i,r);var n=fabric.util.string.graphemeSplit(t);this.insertNewStyleBlock(n,i,e),this._text=[].concat(this._text.slice(0,i),n,this._text.slice(r)),this.text=this._text.join(""),this.set("dirty",!0),this._shouldClearDimensionCache()&&(this.initDimensions(),this.setCoords()),this._removeExtraneousStyles()}}),function(){var l=fabric.util.toFixed,u=/  +/g;fabric.util.object.extend(fabric.Text.prototype,{_toSVG:function(){var t=this._getSVGLeftTopOffsets(),e=this._getSVGTextAndBg(t.textTop,t.textLeft);return this._wrapSVGTextAndBg(e)},toSVG:function(t){return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,noStyle:!0,withShadow:!0})},_getSVGLeftTopOffsets:function(){return{textLeft:-this.width/2,textTop:-this.height/2,lineTop:this.getHeightOfLine(0)}},_wrapSVGTextAndBg:function(t){var e=this.getSvgTextDecoration(this);return[t.textBgRects.join(""),'\t\t<text xml:space="preserve" ',this.fontFamily?'font-family="'+this.fontFamily.replace(/"/g,"'")+'" ':"",this.fontSize?'font-size="'+this.fontSize+'" ':"",this.fontStyle?'font-style="'+this.fontStyle+'" ':"",this.fontWeight?'font-weight="'+this.fontWeight+'" ':"",e?'text-decoration="'+e+'" ':"",'style="',this.getSvgStyles(!0),'"',this.addPaintOrder()," >",t.textSpans.join(""),"</text>\n"]},_getSVGTextAndBg:function(t,e){var i,r=[],n=[],s=t;this._setSVGBg(n);for(var o=0,a=this._textLines.length;o<a;o++)i=this._getLineLeftOffset(o),(this.textBackgroundColor||this.styleHas("textBackgroundColor",o))&&this._setSVGTextLineBg(n,o,e+i,s),this._setSVGTextLineText(r,o,e+i,s),s+=this.getHeightOfLine(o);return{textSpans:r,textBgRects:n}},_createTextCharSpan:function(t,e,i,r){var n=t!==t.trim()||t.match(u),s=this.getSvgSpanStyles(e,n),o=s?'style="'+s+'"':"",a=e.deltaY,c="",h=fabric.Object.NUM_FRACTION_DIGITS;return a&&(c=' dy="'+l(a,h)+'" '),['<tspan x="',l(i,h),'" y="',l(r,h),'" ',c,o,">",fabric.util.string.escapeXml(t),"</tspan>"].join("")},_setSVGTextLineText:function(t,e,i,r){var n,s,o,a,c,h=this.getHeightOfLine(e),l=-1!==this.textAlign.indexOf("justify"),u="",f=0,d=this._textLines[e];r+=h*(1-this._fontSizeFraction)/this.lineHeight;for(var g=0,p=d.length-1;g<=p;g++)c=g===p||this.charSpacing,u+=d[g],o=this.__charBounds[e][g],0===f?(i+=o.kernedWidth-o.width,f+=o.width):f+=o.kernedWidth,l&&!c&&this._reSpaceAndTab.test(d[g])&&(c=!0),c||(n=n||this.getCompleteStyleDeclaration(e,g),s=this.getCompleteStyleDeclaration(e,g+1),c=this._hasStyleChangedForSvg(n,s)),c&&(a=this._getStyleDeclaration(e,g)||{},t.push(this._createTextCharSpan(u,a,i,r)),u="",n=s,i+=f,f=0)},_pushTextBgRect:function(t,e,i,r,n,s){var o=fabric.Object.NUM_FRACTION_DIGITS;t.push("\t\t<rect ",this._getFillAttributes(e),' x="',l(i,o),'" y="',l(r,o),'" width="',l(n,o),'" height="',l(s,o),'"></rect>\n')},_setSVGTextLineBg:function(t,e,i,r){for(var n,s,o=this._textLines[e],a=this.getHeightOfLine(e)/this.lineHeight,c=0,h=0,l=this.getValueOfPropertyAt(e,0,"textBackgroundColor"),u=0,f=o.length;u<f;u++)n=this.__charBounds[e][u],(s=this.getValueOfPropertyAt(e,u,"textBackgroundColor"))!==l?(l&&this._pushTextBgRect(t,l,i+h,r,c,a),h=n.left,c=n.width,l=s):c+=n.kernedWidth;s&&this._pushTextBgRect(t,s,i+h,r,c,a)},_getFillAttributes:function(t){var e=t&&"string"==typeof t?new fabric.Color(t):"";return e&&e.getSource()&&1!==e.getAlpha()?'opacity="'+e.getAlpha()+'" fill="'+e.setAlpha(1).toRgb()+'"':'fill="'+t+'"'},_getSVGLineTopOffset:function(t){for(var e,i=0,r=0;r<t;r++)i+=this.getHeightOfLine(r);return e=this.getHeightOfLine(r),{lineTop:i,offset:(this._fontSizeMult-this._fontSizeFraction)*e/(this.lineHeight*this._fontSizeMult)}},getSvgStyles:function(t){return fabric.Object.prototype.getSvgStyles.call(this,t)+" white-space: pre;"}})}(),function(t){"use strict";var b=t.fabric||(t.fabric={});b.Textbox=b.util.createClass(b.IText,b.Observable,{type:"textbox",minWidth:20,dynamicMinWidth:2,__cachedLines:null,lockScalingFlip:!0,noScaleCache:!1,_dimensionAffectingProps:b.Text.prototype._dimensionAffectingProps.concat("width"),_wordJoiners:/[ \t\r]/,splitByGrapheme:!1,initDimensions:function(){this.__skipDimension||(this.isEditing&&this.initDelayedCursor(),this.clearContextTop(),this._clearCache(),this.dynamicMinWidth=0,this._styleMap=this._generateStyleMap(this._splitText()),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),-1!==this.textAlign.indexOf("justify")&&this.enlargeSpaces(),this.height=this.calcTextHeight(),this.saveState({propertySet:"_dimensionAffectingProps"}))},_generateStyleMap:function(t){for(var e=0,i=0,r=0,n={},s=0;s<t.graphemeLines.length;s++)"\n"===t.graphemeText[r]&&0<s?(i=0,r++,e++):!this.splitByGrapheme&&this._reSpaceAndTab.test(t.graphemeText[r])&&0<s&&(i++,r++),n[s]={line:e,offset:i},r+=t.graphemeLines[s].length,i+=t.graphemeLines[s].length;return n},styleHas:function(t,e){if(this._styleMap&&!this.isWrapping){var i=this._styleMap[e];i&&(e=i.line)}return b.Text.prototype.styleHas.call(this,t,e)},isEmptyStyles:function(t){if(!this.styles)return!0;var e,i,r=0,n=!1,s=this._styleMap[t],o=this._styleMap[t+1];for(var a in s&&(t=s.line,r=s.offset),o&&(n=o.line===t,e=o.offset),i=void 0===t?this.styles:{line:this.styles[t]})for(var c in i[a])if(r<=c&&(!n||c<e))for(var h in i[a][c])return!1;return!0},_getStyleDeclaration:function(t,e){if(this._styleMap&&!this.isWrapping){var i=this._styleMap[t];if(!i)return null;t=i.line,e=i.offset+e}return this.callSuper("_getStyleDeclaration",t,e)},_setStyleDeclaration:function(t,e,i){var r=this._styleMap[t];t=r.line,e=r.offset+e,this.styles[t][e]=i},_deleteStyleDeclaration:function(t,e){var i=this._styleMap[t];t=i.line,e=i.offset+e,delete this.styles[t][e]},_getLineStyle:function(t){var e=this._styleMap[t];return!!this.styles[e.line]},_setLineStyle:function(t){var e=this._styleMap[t];this.styles[e.line]={}},_wrapText:function(t,e){var i,r=[];for(this.isWrapping=!0,i=0;i<t.length;i++)r=r.concat(this._wrapLine(t[i],i,e));return this.isWrapping=!1,r},_measureWord:function(t,e,i){var r,n=0;i=i||0;for(var s=0,o=t.length;s<o;s++){n+=this._getGraphemeBox(t[s],e,s+i,r,!0).kernedWidth,r=t[s]}return n},_wrapLine:function(t,e,i,r){var n=0,s=this.splitByGrapheme,o=[],a=[],c=s?b.util.string.graphemeSplit(t):t.split(this._wordJoiners),h="",l=0,u=s?"":" ",f=0,d=0,g=0,p=!0,v=this._getWidthOfCharSpacing();r=r||0;0===c.length&&c.push([]),i-=r;for(var m=0;m<c.length;m++)h=s?c[m]:b.util.string.graphemeSplit(c[m]),f=this._measureWord(h,e,l),l+=h.length,i<=(n+=d+f-v)&&!p?(o.push(a),a=[],n=f,p=!0):n+=v,p||s||a.push(u),a=a.concat(h),d=s?0:this._measureWord([u],e,l),l++,p=!1,g<f&&(g=f);return m&&o.push(a),g+r>this.dynamicMinWidth&&(this.dynamicMinWidth=g-v+r),o},isEndOfWrapping:function(t){return!this._styleMap[t+1]||this._styleMap[t+1].line!==this._styleMap[t].line},missingNewlineOffset:function(t){return this.splitByGrapheme?this.isEndOfWrapping(t)?1:0:1},_splitTextIntoLines:function(t){for(var e=b.Text.prototype._splitTextIntoLines.call(this,t),i=this._wrapText(e.lines,this.width),r=new Array(i.length),n=0;n<i.length;n++)r[n]=i[n].join("");return e.lines=r,e.graphemeLines=i,e},getMinWidth:function(){return Math.max(this.minWidth,this.dynamicMinWidth)},_removeExtraneousStyles:function(){var t={};for(var e in this._styleMap)this._textLines[e]&&(t[this._styleMap[e].line]=1);for(var e in this.styles)t[e]||delete this.styles[e]},toObject:function(t){return this.callSuper("toObject",["minWidth","splitByGrapheme"].concat(t))}}),b.Textbox.fromObject=function(t,e){return b.Object._fromObject("Textbox",t,e,"text")}}( true?exports:undefined),function(){var t=fabric.controlsUtils,e=t.scaleSkewCursorStyleHandler,i=t.scaleCursorStyleHandler,r=t.scalingEqually,n=t.scalingYOrSkewingX,s=t.scalingXOrSkewingY,o=t.scaleOrSkewActionName,a=fabric.Object.prototype.controls;if(a.ml=new fabric.Control({x:-.5,y:0,cursorStyleHandler:e,actionHandler:s,getActionName:o}),a.mr=new fabric.Control({x:.5,y:0,cursorStyleHandler:e,actionHandler:s,getActionName:o}),a.mb=new fabric.Control({x:0,y:.5,cursorStyleHandler:e,actionHandler:n,getActionName:o}),a.mt=new fabric.Control({x:0,y:-.5,cursorStyleHandler:e,actionHandler:n,getActionName:o}),a.tl=new fabric.Control({x:-.5,y:-.5,cursorStyleHandler:i,actionHandler:r}),a.tr=new fabric.Control({x:.5,y:-.5,cursorStyleHandler:i,actionHandler:r}),a.bl=new fabric.Control({x:-.5,y:.5,cursorStyleHandler:i,actionHandler:r}),a.br=new fabric.Control({x:.5,y:.5,cursorStyleHandler:i,actionHandler:r}),a.mtr=new fabric.Control({x:0,y:-.5,actionHandler:t.rotationWithSnapping,cursorStyleHandler:t.rotationStyleHandler,offsetY:-40,withConnection:!0,actionName:"rotate"}),fabric.Textbox){var c=fabric.Textbox.prototype.controls={};c.mtr=a.mtr,c.tr=a.tr,c.br=a.br,c.tl=a.tl,c.bl=a.bl,c.mt=a.mt,c.mb=a.mb,c.mr=new fabric.Control({x:.5,y:0,actionHandler:t.changeWidth,cursorStyleHandler:e,actionName:"resizing"}),c.ml=new fabric.Control({x:-.5,y:0,actionHandler:t.changeWidth,cursorStyleHandler:e,actionName:"resizing"})}}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42).Buffer))

/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"af_passport_40x45mm_photo\",\"text\":\"Afghanistan Passport 40x45mm\",\"country\":\"Afghanistan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":32.85,\"crownTop\":3.6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.afghanistanembassy.no/consular-services/passport/\",\"http://www.afghanembУкраинаassyjp.org/MRP/MRPassportApplicationForm.pdf\",\"http://staging.afghanembassy.us/contents/2016/03/documents/Passport_Photo_Requirements_2015-02-04.pdf\"],\"comments\":\"The embassy of Afghanistan in the USA asks for passport photographs of 35-40 mm wide, and this photo meets these requirements. Other consulates ask for 40x45mm, and this photo is just like this.\"},{\"id\":\"af_e_tazkira_3x4cm_photo\",\"text\":\"Afghanistan ID Card (e-tazkira) 3x4cm\",\"country\":\"Afghanistan\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"faceHeight\":30,\"crownTop\":2.5},\"price\":{\"value\":10,\"currency\":\"грн\"},\"corners\":[{\"0\":\"Без уголка\"},{\"1\":\"Слева вверху\"},{\"2\":\"Справа вверу\"},{\"3\":\"Справа внизу\"}],\"colors\":{\"gray\":\"Ч/Б\",\"color\":\"Цветное\"}},{\"id\":\"af_passport_5x5_photo\",\"text\":\"Afghanistan Passport 5x5cm\",\"country\":\"Afghanistan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"bottomEyeLine\":28},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://embassyofafghanistan.se/e-passport/\"],\"comments\":\"\"},{\"id\":\"af_visa_35x45_photo\",\"text\":\"Afghanistan Visa 35x45mm\",\"country\":\"Afghanistan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.afghanembassy.com.pl/eng/ambasada/informacje/informacje-wizowe\",\"http://newdelhi.mfa.af/consular-services-4/visa/entry-tourist-business\"],\"comments\":\"\"},{\"id\":\"af_visa_2x2_photo\",\"text\":\"Afghanistan Visa 2x2″ (from the USA)\",\"country\":\"Afghanistan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.afghanembassy.us/consulate/visa/\"],\"comments\":\"\"},{\"id\":\"al_visa_47x36mm_photo\",\"text\":\"Albania (e-)Visa 47x36mm\",\"country\":\"Albania\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":36,\"pictureHeight\":47,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://e-albania.al/sherbimi.aspx?kodi=9759\"],\"comments\":\"A 47mm-36mm image, not older than 6 months from the date of visa application. [Një foto me përmasat 47mm-36mm, jo më e vjetër se 6 muaj nga data e aplikimit për vizë.]\"},{\"id\":\"dz_passport_photo\",\"text\":\"Algeria Passport 35x45mm\",\"country\":\"Algeria\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.7,\"crownTop\":3.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://passeport.interieur.gov.dz/ar/Informations/Normes_Photographie\",\"https://www.algerian-consulate.org.uk/consulaire/passport/passport-photo-requirements\",\"http://www.embassyalgeria.ca/passeport\"],\"comments\":\"\"},{\"id\":\"dz_visa_photo\",\"text\":\"Algeria Visa 35x45 mm\",\"country\":\"Algeria\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.7,\"crownTop\":3.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"dz_id_card_35x45mm_photo\",\"text\":\"Algeria ID Card 35x45mm\",\"country\":\"Algeria\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.7,\"crownTop\":3.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"dz_residence_35x45mm_photo\",\"text\":\"Algeria Residence 35x45mm\",\"country\":\"Algeria\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.7,\"crownTop\":3.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.interieur.gov.dz/index.php/ar/الأجانب-في-الجزائر/بطاقة-المقيم-الأجنبي.html\"],\"comments\":\"\"},{\"id\":\"dz_work_permit_35x45mm_photo\",\"text\":\"Algerian Work Permit 35x45mm\",\"country\":\"Algeria\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.7,\"crownTop\":3.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.mtess.gov.dz/ar/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA/\"],\"comments\":\"\"},{\"id\":\"ao_visa_photo\",\"text\":\"Angola Visa 3x4cm\",\"country\":\"Angola\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.angolarussia.ru/en/consular/the-consular-information.html\"],\"comments\":\"\"},{\"id\":\"ar_dni_4x4_cm_photo\",\"text\":\"Argentina DNI 4x4cm\",\"country\":\"Argentina\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":28,\"crownTop\":3.2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"\"],\"comments\":\"Documento Nacional de Identidad (DNI). Face camera directly, with full face in view, in color, white background, without hat or glasses.\"},{\"id\":\"ar_passport_4x4_cm_photo\",\"text\":\"Argentina Passport 4x4cm\",\"country\":\"Argentina\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":28,\"crownTop\":3.2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://cmila.cancilleria.gov.ar/es/node/732\"],\"comments\":\"Face camera directly, with full face in view, in color, white background, without hat or glasses.\"},{\"id\":\"ar_visa_4x4_cm_photo\",\"text\":\"Argentina Visa 4x4cm\",\"country\":\"Argentina\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":28,\"crownTop\":3.2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://cancilleria.gob.ar/visa-para-turismo\",\"http://cnyor.mrecic.gov.ar/en/node/1817\"],\"comments\":\"Recent photographs, face camera directly, with full face in view, in color, white background, without hat or glasses.\"},{\"id\":\"ar_passport_15x15_inch_photo\",\"text\":\"Argentina Passport in USA 1.5x1.5″\",\"country\":\"Argentina\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":1.5,\"pictureHeight\":1.5,\"units\":\"inch\",\"dpi\":600,\"faceHeight\":1.065,\"crownTop\":0.12},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://eeeuu.mrecic.gov.ar/es/pasaporte-provisorio-serie\"],\"comments\":\"Current photos, full front view, in color, on a white background, 1 ½ x 1 ½ inches\"},{\"id\":\"ar_visa_15x15_inch_photo\",\"text\":\"Argentina Visa in USA 1.5x1.5″\",\"country\":\"Argentina\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":1.5,\"pictureHeight\":1.5,\"units\":\"inch\",\"dpi\":600,\"faceHeight\":1.065,\"crownTop\":0.12},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://cnyor.mrecic.gov.ar/en/node/2258\"],\"comments\":\"Current photos, full front view, in color, on a white background, 1 ½ x 1 ½ inches\"},{\"id\":\"am_evisa_photo\",\"text\":\"Armenia eVisa 600x600px\",\"country\":\"Armenia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":600,\"pictureHeight\":600,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":450,\"crownTop\":60},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://evisa.mfa.am\"],\"comments\":\"\"},{\"id\":\"am_visa_35x45mm_photo\",\"text\":\"Armenia Visa 35x45mm\",\"country\":\"Armenia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.russia.mfa.am/u_files/file/consulate/visaappform.pdf\",\"http://spain.mfa.am/u_files/file/consulate/visaappform.pdf\",\"http://www.usa.mfa.am/u_files/file/consulate/visaappform.pdf\"],\"comments\":\"\"},{\"id\":\"am_return_certificate_35x45mm_photo\",\"text\":\"Armenia Certificate of Return 35x45mm\",\"country\":\"Armenia\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.russia.mfa.am/en/return-certificate/\",\"http://spain.mfa.am/en/return-certificate/\",\"http://www.usa.mfa.am/en/return-certificate/\"],\"comments\":\"\"},{\"id\":\"am_id_card_3x4cm_photo\",\"text\":\"Armenia ID Card 3x4cm\",\"country\":\"Armenia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"au_passport_photo\",\"text\":\"Australia Passport 35x45mm\",\"country\":\"Australia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.passports.gov.au/web/requirements/photos.aspx\"],\"comments\":\"\"},{\"id\":\"au_visa_photo\",\"text\":\"Australia Visa 35x45mm\",\"country\":\"Australia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.immi.gov.au/allforms/pdf/1419.pdf\"],\"comments\":\"\"},{\"id\":\"au_proof_of_age_card_35x45mm_photo\",\"text\":\"Australia Adult Proof of Age Card 35x45mm\",\"country\":\"Australia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.qld.gov.au/transport/licensing/proof-of-age#step2\"],\"comments\":\"\"},{\"id\":\"au_nsw_driving_photo\",\"text\":\"Australia NSW Driver's Licence Photo-kit 35x45mm\",\"country\":\"Australia\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.rms.nsw.gov.au/licensing/renewingalicence/renewalwhenoutofnsw/photokitform.html\",\"http://www.rms.nsw.gov.au/publicationsstatisticsforms/downloads/45070794.pdf\"],\"comments\":\"\",\"visible\":false},{\"id\":\"au_vic_driving_photo\",\"text\":\"Australia Victoria Driver's Licence Photo-kit 35x45 mm\",\"country\":\"Australia\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.vicroads.vic.gov.au/Home/Licences/RenewReplaceOrUpdate/LicensingWhenOutOfVIC.htm\",\"http://www.vicroads.vic.gov.au/NR/rdonlyres/F0A15D8E-C19D-42BB-BCAB-ABB7A146EF77/0/PhotoKitform2010.pdf\"],\"comments\":\"\",\"visible\":false},{\"id\":\"au_qld_driving_photo\",\"text\":\"Australia Queensland Driver's Licence Photo-kit 35x45 mm\",\"country\":\"Australia\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.tmr.qld.gov.au/~/media/Licensing/Renewing%20or%20replacing%20a%20licence/driver%20licence%20renewal%20kit.pdf\"],\"comments\":\"\",\"visible\":false},{\"id\":\"at_personalausweis_35x45mm_photo\",\"text\":\"Austrian ID Card 35x45mm\",\"country\":\"Austria\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.passbildkriterien.at/folder24_04_06.pdf\",\"https://www.bmeia.gv.at/fileadmin/user_upload/Vertretungen/London/Dokumente/Passport_Photographs_Criteria.pdf\"],\"comments\":\"\"},{\"id\":\"at_passport_photo\",\"text\":\"Austria Passport 35x45mm\",\"country\":\"Austria\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.passbildkriterien.at/oesterreich_neu.html\",\"http://www.passbildkriterien.at/folder24_04_06.pdf\"],\"comments\":\"\"},{\"id\":\"at_visa_photo\",\"text\":\"Austria Visa 35x45mm\",\"country\":\"Austria\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.bmeia.gv.at/fileadmin/user_upload/bmeia/media/Vertretungsbehoerden/Pretoria/Fotokriterien_fuer_Visa.pdf\",\"http://www.bmeia.gv.at/en/embassy/london/practical-advice/schengen-visa-residence-permits/schengen-visa-application-requirements.html\"],\"comments\":\"\"},{\"id\":\"at_fuhrerschein_35x45mm_photo\",\"text\":\"Austrian Driving License 35x45mm\",\"country\":\"Austria\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.passbildkriterien.at/folder24_04_06.pdf\"],\"comments\":\"\"},{\"id\":\"at_aufenthaltstitel_35x45mm_photo\",\"text\":\"Austrian Residence Permit 35x45mm\",\"country\":\"Austria\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"bh_passport_photo\",\"text\":\"Bahrain Passport 4x6cm\",\"country\":\"Bahrain\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://services.bahrain.bh/wps/PA_PortRenewalService/javax.faces.resource/ar/Photo_Requirements_V08.pdf.faces?rel=v1\",\"http://www.npra.gov.bh/en/services/passports/\",\"http://www.bahrainembassy.org/\"],\"comments\":\"\"},{\"id\":\"bh_visa_photo\",\"text\":\"Bahrain Visa 4x6cm\",\"country\":\"Bahrain\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"bh_id_card_4x6cm_photo\",\"text\":\"Bahrain ID Card 4x6cm\",\"country\":\"Bahrain\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"bd_passport_40x50_photo\",\"text\":\"Bangladesh Passport 40x50mm\",\"country\":\"Bangladesh\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.bangladeshembassy.de/wp-content/uploads/2016/12/NHP-Form.pdf\",\"http://new.bangladeshembassy.ru/images/Forms/Dual_Nationality_Forms/dual_nationality_application_form.pdf\"],\"comments\":\"\"},{\"id\":\"bd_passport_55x45_photo\",\"text\":\"Bangladesh Passport 55x45 mm\",\"country\":\"Bangladesh\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":45,\"pictureHeight\":55,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":10},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.bdembassyusa.org/index.php?page=instruction-mrp\"],\"comments\":\"Embassy of Bangladesh in Washington ask for 55x45 mm photographs on applying for passport\"},{\"id\":\"bd_passport_45x35_photo\",\"text\":\"Bangladesh Passport 45x35 mm\",\"country\":\"Bangladesh\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.bangladoot-paris.org/index.php/passport-info.html\"],\"comments\":\"Some authorities like Embassy of Bangladesh Paris ask for 45x35 mm photographs on applying for passport\"},{\"id\":\"bd_passport_30x25_photo\",\"text\":\"Bangladesh Passport 30x25 mm\",\"country\":\"Bangladesh\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":25,\"pictureHeight\":30,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":22.5,\"crownTop\":1.8},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.passport.gov.bd/\"],\"comments\":\"On applying for children under the age of 15 a photo of 30x25 mm is needed\"},{\"id\":\"bd_dual_nationality_40x50_photo\",\"text\":\"Bangladesh dual nationality 40x50 mm (4x5 cm)\",\"country\":\"Bangladesh\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://new.bangladeshembassy.ru/images/Forms/Dual_Nationality_Forms/dual_nationality_application_form.pdf\"],\"comments\":\"\"},{\"id\":\"bd_electronic_visa_35x45_photo\",\"text\":\"Bangladesh e-visa 45x35 mm\",\"country\":\"Bangladesh\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.visa.gov.bd/\"],\"comments\":\"\"},{\"id\":\"bd_visa_45x35_photo\",\"text\":\"Bangladesh visa 45x35 mm\",\"country\":\"Bangladesh\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://new.bangladeshembassy.ru/images/Forms/Visa_Forms/machine_readable_visa__form.pdf\",\"http://www.bangladesh-embassy.be/media/dms/Visa_Form.pdf\",\"http://www.bangladoot-paris.org/index.php/nvr-visa-info-and-procedure.html\",\"http://www.bangladeshembassy.de/wp-content/uploads/2017/07/MRV_FORM.pdf\"],\"comments\":\"\"},{\"id\":\"bd_visa_37x37_photo\",\"text\":\"Bangladesh visa 37x37 mm\",\"country\":\"Bangladesh\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":37,\"pictureHeight\":37,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25.53,\"crownTop\":2.22},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.bangladeshembassy.de/requirement-for-visa/\"],\"comments\":\"\"},{\"id\":\"bb_passport_photo\",\"text\":\"Barbados Passport 5x5 cm\",\"country\":\"Barbados\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"bottomEyeLine\":28},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://immigration.gov.bb/documents/Form%20A.pdf\"],\"comments\":\"\"},{\"id\":\"by_passport_photo\",\"text\":\"Belarus Passport 40x50 mm (4x5 cm)\",\"country\":\"Belarus\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://uvd-mo.gov.by/win/adm_proc/ugim/\",\"http://germany.mfa.gov.by/ru/konsul/vp/vydpp/\"],\"comments\":\"The photo will be further cut to 35x45 mm by the Belorussian authorities\"},{\"id\":\"by_visa_photo\",\"text\":\"Belarus Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Belarus\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://mfa.gov.by/visa/vjezd/\",\"http://mfa.gov.by/en/visa/\"],\"comments\":\"\"},{\"id\":\"be_id_card_45x35mm_photo\",\"text\":\"Belgium electronic ID Card (eID) 35x45 mm (3.5x4.5 cm)\",\"country\":\"Belgium\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://diplomatie.belgium.be/sites/default/files/downloads/eid_fr_0.pdf\",\"https://diplomatie.belgium.be/fr/Services/services_a_letranger/passeport_belge/passeport_biometrique/belge_en_belgique/qualite_exigee_pour_la_photo\",\"http://www.ibz.rrn.fgov.be/fileadmin/user_upload/nl/kaarten/eid/documentatie/2016_Matrice_NL.pdf\",\"https://diplomatie.belgium.be/sites/default/files/downloads/2016_matrice_fr.pdf\"],\"comments\":\"\"},{\"id\":\"be_kids_id_45x35mm_photo\",\"text\":\"Belgium Kids-ID 35x45 mm (3.5x4.5 cm)\",\"country\":\"Belgium\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.ibz.rrn.fgov.be/nl/identiteitsdocumenten/kids-id/\",\"http://www.ibz.rrn.fgov.be/fr/documents-didentite/kids-id/\"],\"comments\":\"\"},{\"id\":\"be_visa_photo\",\"text\":\"Belgium Visa 35x45mm\",\"country\":\"Belgium\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31,\"crownTop\":2.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://countries.diplomatie.belgium.be/en/south_africa/travel_belgium/visa_belgium/\",\"http://diplomatie.belgium.be/en/binaries/SchengenEN_tcm312-69379.pdf\"],\"comments\":\"\"},{\"id\":\"be_passport_45x35mm_photo\",\"text\":\"Belgium Passport 35x45mm\",\"country\":\"Belgium\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://diplomatie.belgium.be/fr/Services/services_a_letranger/passeport_belge/passeport_biometrique/belge_en_belgique/qualite_exigee_pour_la_photo\"],\"comments\":\"\"},{\"id\":\"be_residence_permit_45x35mm_photo\",\"text\":\"Belgium Residence Permit 35x45mm\",\"country\":\"Belgium\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.belgium.be/nl/familie/internationaal/buitenlanders/verblijfsdocumenten\",\"https://www.belgium.be/fr/famille/international/etrangers/documents_de_sejour\"],\"comments\":\"\"},{\"id\":\"bj_visa_35x45mm_photo\",\"text\":\"Benin Visa 3.5x4.5cm\",\"country\":\"Benin\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://ambabenin.dk/consular-formalities/entry-visas/\"],\"comments\":\"\"},{\"id\":\"bj_passport_35x45mm_photo\",\"text\":\"Benin Passport 35x45mm\",\"country\":\"Benin\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://ambabenin.dk/consular-formalities/inssuance-or-renewal-of-passports/\"],\"comments\":\"This photo can also be used for Benin Consular Card\"},{\"id\":\"bj_passport_2x2in_photo\",\"text\":\"Benin Passport 2x2″ (from USA)\",\"country\":\"Benin\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://beninembassy.us/passporttravel-documents/\"],\"comments\":\"This photo can also be used for Benin Consular Card\"},{\"id\":\"bt_passport_45x35mm_photo\",\"text\":\"Bhutan Passport 45x35mm\",\"country\":\"Bhutan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.citizenservices.gov.bt/passport-service\",\"http://www.mfa.gov.bt/?page_id=77\",\"http://www.mfa.gov.bt/wp-content/uploads/2009/03/application_form_for_new_passport_or_traveldocument1.pdf\"],\"comments\":\"\"},{\"id\":\"bw_visa_3x4cm_photo\",\"text\":\"Botswana visa 3x4 cm (30x40 mm)\",\"country\":\"Botswana\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.botswanaembassy.org/sites/default/files/documents/visa_application_form.pdf\"],\"comments\":\"\"},{\"id\":\"bw_passport_photo\",\"text\":\"Botswana Passport 3x4 cm (30x40 mm)\",\"country\":\"Botswana\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.botswanaembassy.org/page/photo-requirements-for-passport-and-national-id\"],\"comments\":\"Photo for Botswana passport and national ID\"},{\"id\":\"bw_residence_permit_3x4cm_photo\",\"text\":\"Botswana residence permit 3x4 cm (30x40 mm)\",\"country\":\"Botswana\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.botswanaembassy.org/page/residence-permit-application\"],\"comments\":\"\"},{\"id\":\"br_visa_online_vfsglobal_413x531_photo\",\"text\":\"Brazil visa online 413x531 px via VFSGlobal\",\"country\":\"Brazil\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":413,\"pictureHeight\":531,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":361.08,\"crownTop\":37.17},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://vfsglobal.com/brazil-evisa/prepare-your-application.html\",\"http://www.vfsglobal.com/Brazil-eVisa/\"],\"comments\":\"If you are a citizen of USA, Canada, Australia or Japan, you need to use this format. Otherwise, you need to use another photo format https://visafoto.com/br_visa_online_431x531_photo.\"},{\"id\":\"br_visa_online_431x531_photo\",\"text\":\"Brazil visa online 431x531 px\",\"country\":\"Brazil\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":431,\"pictureHeight\":531,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":371.7,\"crownTop\":27.612000000000002},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://formulario-mre.serpro.gov.br/\"],\"comments\":\"Note: if you are a citizen of USA, Canada, Australia or Japan, you need to use another photo format https://visafoto.com/br_visa_online_vfsglobal_413x531_photo.\\n\\nSubmission instructions: immediately click the Crop button after photo upload, if you don't see it, then scroll down the screen or use another device with a bigger screen. Detailed instructions: https://visafoto.com/en/brazil_visa_online_photo Brazil visa online upload instructions\"},{\"id\":\"br_carteira_de_identidade_3x4_photo\",\"text\":\"Brazil ID Card 3x4 cm (30x40 mm)\",\"country\":\"Brazil\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://mg.gov.br/servico/emissao-da-carteira-de-identidade-1a\"],\"comments\":\"Photos 3x4 (recent, front, with clean background, printed on photographic paper, can not be made with any kind of head cover (scarf, hat, cap), nor with sunglasses, for hindering or covering physical characteristics essential for the recognition of the bearer. It will be admissible the coverings that make up religious habits that are part of the daily use of the bearer)\"},{\"id\":\"br_visa_photo\",\"text\":\"Brazil Visa 2x2″ (from the US) 51x51 mm\",\"country\":\"Brazil\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://houston.itamaraty.gov.br/en-us/tourist_visa.xml\"],\"comments\":\"\"},{\"id\":\"br_passport_online_431x531_photo\",\"text\":\"Brazil Passport online 431x531 px\",\"country\":\"Brazil\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":431,\"pictureHeight\":531,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":371.7,\"crownTop\":27.612000000000002},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"formulario-mre.serpro.gov.br\"],\"comments\":\"\"},{\"id\":\"br_passport_5x7_photo\",\"text\":\"Brazil Common Passport 5x7 cm\",\"country\":\"Brazil\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":70,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":42,\"crownTop\":8},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://ierevan.itamaraty.gov.br/pt-br/passaportes.xml\"],\"comments\":\"\"},{\"id\":\"bn_passport_52x40mm_photo\",\"text\":\"Brunei Passport 5.2x4 cm (52x40 mm)\",\"country\":\"Brunei\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":52,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.mofat.gov.bn/usa-washington/Shared%20Documents/PassportRenewal.pdf\",\"http://www.bruemb.jp/wp-content/themes/BruneiEmbassy/docs/Passport.pdf\"],\"comments\":\"4 pieces of the latest applicant (size 5.2x4)\"},{\"id\":\"bn_sijil_darurat_photo\",\"text\":\"Brunei Emergency Certificate (Sijil Darurat) 3.5x4.2 cm (35x42 mm)\",\"country\":\"Brunei\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":42,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31.08,\"crownTop\":3.36},\"backgroundColor\":\"#3dabf8\",\"printable\":true,\"officialLinks\":[\"http://www.bruemb.jp/brunei-citizen-services/\"],\"comments\":\"\"},{\"id\":\"bg_passport_photo\",\"text\":\"Bulgaria Passport 35x45 mm\",\"country\":\"Bulgaria\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.bulgaria-embassy.org/Consular%20Information/passport/Passport%20Procedures.htm\",\"http://www.bulgaria-embassy.org/Consular%20Information/passport/pas_samp.pdf\"],\"comments\":\"It also suits temporary Bulgarian passport\"},{\"id\":\"bg_visa_photo\",\"text\":\"Bulgaria Visa 35x45mm (3.5x4.5 cm)\",\"country\":\"Bulgaria\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mfa.bg/en/pages/109/index.html\"],\"comments\":\"\"},{\"id\":\"bg_id_card_35x45mm_photo\",\"text\":\"Bulgaria ID Card (лична карта) 35x45mm (3.5x4.5 cm)\",\"country\":\"Bulgaria\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.consulatebg.eu/home/id-card\"],\"comments\":\"\"},{\"id\":\"bf_passport_45x35mm_photo\",\"text\":\"Burkina Faso Passport 4.5x3.5 cm (45x35 mm)\",\"country\":\"Burkina Faso\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ambaburkina-fr.org/consulat-general/passeport/\"],\"comments\":\"\"},{\"id\":\"bf_visa_45x35mm_photo\",\"text\":\"Burkina Faso visa 4.5x3.5 cm (45x35 mm)\",\"country\":\"Burkina Faso\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ambaburkina-fr.org/consulat-general/visa/\",\"http://www.ambaburkina.dk/reglementvisa.html\",\"http://www.ambaburkinafaso-ch.org/spip.php?rubrique7&lang=fr\"],\"comments\":\"\"},{\"id\":\"kh_passport_4x6_photo\",\"text\":\"Cambodia Passport 4x6 cm\",\"country\":\"Cambodia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":36,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.cambodianembassy.org.uk/downloads/Form%20for%20Extending%20Cambodian%20Passport.pdf\"],\"comments\":\"\"},{\"id\":\"kh_visa_photo\",\"text\":\"Cambodia Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Cambodia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.evisa.gov.kh/\"],\"comments\":\"\"},{\"id\":\"kh_visa_4x6_photo\",\"text\":\"Cambodia visa 4x6 cm\",\"country\":\"Cambodia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":36,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.cambodiaembassy.ch/english/VisaEN.pdf\"],\"comments\":\"\"},{\"id\":\"kh_visa_2x2_photo\",\"text\":\"Cambodia visa 2x2″ from the USA\",\"country\":\"Cambodia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.embassyofcambodia.org/Portals/15/cambodiavisaapplicationform.pdf?ver=2017-11-22-204959-343\"],\"comments\":\"\"},{\"id\":\"cm_passport_4x4_photo\",\"text\":\"Cameroon Passport 4x4 cm (40x40 mm)\",\"country\":\"Cameroon\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":3.2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.cameroon-embassy.nl/passport-application/passport-application-required-documents/\"],\"comments\":\"\"},{\"id\":\"cm_passport_4x5_photo\",\"text\":\"Cameroon Passport 4x5 cm (40x50 mm)\",\"country\":\"Cameroon\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.cameroon-embassy.nl/passport-application/passport-application-required-documents/\"],\"comments\":\"\"},{\"id\":\"cm_passport_35x45_photo\",\"text\":\"Cameroon Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Cameroon\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"cm_passport_2x2inch_photo\",\"text\":\"Cameroon Passport 2x2 inch\",\"country\":\"Cameroon\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://cameroonembassyusa.org/camusa/consular-services/application-forms\"],\"comments\":\"\"},{\"id\":\"cm_visa_4x4_photo\",\"text\":\"Cameroon visa 4x4 cm (40x40 mm)\",\"country\":\"Cameroon\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":3.2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://ambacam.ru/Consular_section/VISA_DEPARTMENT/HOW_TO_OBTAIN_AN_ENTRY_VISA_TO_CAMEROON_/\"],\"comments\":\"\"},{\"id\":\"cm_visa_2x2inch_photo\",\"text\":\"Cameroon visa 2x2 inch\",\"country\":\"Cameroon\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://cameroonembassyusa.org/camusa/consular-services/application-forms\"],\"comments\":\"\"},{\"id\":\"cm_visa_online_500x500px_photo\",\"text\":\"Cameroon visa online 500x500 px\",\"country\":\"Cameroon\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":500,\"pictureHeight\":500,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":375,\"crownTop\":40},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://ambacam.ru/Consular_section/VISA_DEPARTMENT/Online_visa_application/\"],\"comments\":\"\"},{\"id\":\"ca_visa_photo\",\"text\":\"Canada Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Canada\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":305,\"faceHeight\":34.7,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.cic.gc.ca/english/information/applications/photospecs.asp\",\"http://www.cic.gc.ca/english/pdf/photospecs-e.pdf\",\"http://www.cic.gc.ca/english/visit/tourist.asp\"],\"comments\":\"Digital dimensions of the result photo is 420x540 pixels\"},{\"id\":\"ca_visa_temp_resident_photo\",\"text\":\"Canada Temporary Resident Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Canada\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":305,\"faceHeight\":34.7,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.cic.gc.ca/english/information/applications/photospecs.asp\"],\"comments\":\"\"},{\"id\":\"ca_passport_photo\",\"text\":\"Canada Passport 5x7 cm (50x70mm)\",\"country\":\"Canada\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":70,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"bottomEyeLine\":39},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[\"https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/photos.html\"],\"comments\":\"Each photograph must be signed on the back like in the example. See the link(s) for more information.\"},{\"id\":\"ca_permanent_resident_card_online_1680x1200_photo\",\"text\":\"Canada Permanent Resident Card Online 1680x1200 pixels\",\"country\":\"Canada\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":1200,\"pictureHeight\":1680,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":840,\"bottomEyeLine\":1058.4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.canada.ca/content/dam/ircc/migration/ircc/english/information/applications/guides/pdf/5445eb-e.pdf\"],\"comments\":\"\"},{\"id\":\"ca_permanent_resident_card_photo\",\"text\":\"Canada Permanent Resident Card 5x7 cm (50x70mm)\",\"country\":\"Canada\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":70,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"bottomEyeLine\":39},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[\"http://www.cic.gc.ca/english/information/applications/guides/pdf/5445EB-e.pdf\"],\"comments\":\"The name and address of the photographer and  the date the photo was taken must  be included on the back of one photo. The photographer may handwrite this information. Also the photo must include your name and date of birth. One photo should be left blank.\"},{\"id\":\"ca_citizenship_photo\",\"text\":\"Canada Citizenship 5x7 cm (50x70mm)\",\"country\":\"Canada\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":70,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"bottomEyeLine\":39},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[\"http://www.cic.gc.ca/english/information/applications/photospecs-cit.asp\"],\"comments\":\"\"},{\"id\":\"td_passport_50x50mm_photo\",\"text\":\"Chad Passport 50x50mm (5x5 cm)\",\"country\":\"Chad\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"bottomEyeLine\":28},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://ambatchad-paris.org/index.php/formalites/passeport\"],\"comments\":\"2 colour identity photographs, 50/50 format\"},{\"id\":\"cn_visa_photo\",\"text\":\"China Visa 33x48 mm\",\"country\":\"China\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":33,\"pictureHeight\":48,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31.5,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[\"http://www.china-embassy.org/eng/visas/t1421603.htm\",\"http://www.chinaconsulatechicago.org/eng/ywzn/qzhz/qz/t1421600.htm\",\"http://www.fmprc.gov.cn/ce/cenp/eng/ConsularService/t1068494.htm\"],\"comments\":\"If you are applying for a Chinese visa via a USA agency like CIBT, then you need to make this photo: https://visafoto.com/us_cibt_photo Should Chinese visa photo size be 2x2 inch?\"},{\"id\":\"cn_passport_online_photo\",\"text\":\"China Passport online 354x472 pixel\",\"country\":\"China\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":354,\"pictureHeight\":472,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":330.4,\"bottomEyeLine\":262},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://ppt.mfa.gov.cn/appo/page/agreement.html\"],\"comments\":\"\"},{\"id\":\"cn_passport_photo\",\"text\":\"China Passport 33x48 mm\",\"country\":\"China\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":33,\"pictureHeight\":48,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31.5,\"crownTop\":5},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"http://www.fmprc.gov.cn/ce/cgny/eng/lsyw/lszjx/sbqz/cccbu/t895733.htm\",\"http://www.fmprc.gov.cn/ce/cenp/eng/ConsularService/t1068494.htm\"],\"comments\":\"\"},{\"id\":\"cn_visa_online_photo\",\"text\":\"China Visa online 354x472 - 420x560 pixels\",\"country\":\"China\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":354,\"pictureHeight\":472,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":330.4,\"bottomEyeLine\":262},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.china-embassy.org/eng/visas/t1421603.htm\"],\"comments\":\"If you need a regular 33x48 mm Chinese visa photo, it is at https://visafoto.com/cn_visa_photo\"},{\"id\":\"cn_green_card_33x48mm_photo\",\"text\":\"China Green Card 33x48 mm\",\"country\":\"China\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":33,\"pictureHeight\":48,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31.5,\"crownTop\":5},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"http://www.ebeijing.gov.cn/feature_2/Sino_ltaly_culture_year/Info/Beijing/t921029.htm\"],\"comments\":\"\"},{\"id\":\"co_visa_online_3x4cm_photo\",\"text\":\"Colombian visa online 3x4 cm (4x3 cm)\",\"country\":\"Colombia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://tramitesmre.cancilleria.gov.co/tramites/enlinea/solicitarVisa.xhtml\"],\"comments\":\"\"},{\"id\":\"co_id_cedula_4x5_photo\",\"text\":\"Colombia cedula de ciudadania 4x5 cm (40x50 mm)\",\"country\":\"Colombia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":27,\"crownTop\":9},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://houston.consulado.gov.co/tramites_servicios/tramites_exterior/cedula_ciudadania\"],\"comments\":\"Name in Spanish: Identificacion personal cedula de ciudadania de Colombia\"},{\"id\":\"co_visa_residente_3x4cm_photo\",\"text\":\"Colombian residence visa 3x4 cm\",\"country\":\"Colombia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.nomasfilas.gov.co/memoficha-tramite/-/tramite/T7326\"],\"comments\":\"\"},{\"id\":\"km_visa_photo\",\"text\":\"Comoros visa 2x2 inches\",\"country\":\"Comoros\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"km_id_card_photo\",\"text\":\"Comoros ID Card 2x2 inches\",\"country\":\"Comoros\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"cd_passport_35x45mm_photo\",\"text\":\"Democratic Republic of Congo Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Congo [DRC]\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.ambardcstockholm.com/chancellerie/passeport\"],\"comments\":\"\"},{\"id\":\"cg_evisa_photo\",\"text\":\"Congo (Brazzaville) e-visa\",\"country\":\"Congo [Republic]\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":28,\"crownTop\":3.2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://girafe.ambacongofr.org/index.php/externe/visaRegistration/index\"],\"comments\":\"\"},{\"id\":\"cg_visa_4x4cm_photo\",\"text\":\"Congo (Brazzaville) visa 4x4 cm (40x40 mm)\",\"country\":\"Congo [Republic]\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":28,\"crownTop\":3.2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://ambacongofr.org/index.php/services-consulaires/visas\",\"http://www.ambacongo-us.org/fr-fr/servicesdambassade/serviceconsulaire/visa.aspx\"],\"comments\":\"A colour identity photo, 4x4 format with solid light or white background, and show a full front view of the face.\"},{\"id\":\"cg_visa_2x2in_photo\",\"text\":\"Congo (Brazzaville) visa 2x2 inches (from US, Canada, Mexico)\",\"country\":\"Congo [Republic]\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ambacongo-us.org/en-us/embassyservices/consular/visa.aspx\"],\"comments\":\"\"},{\"id\":\"cg_passport_35x45mm_photo\",\"text\":\"Congo (Brazzaville) Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Congo [Republic]\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://ambacongofr.org/index.php/services-consulaires/passeport\"],\"comments\":\"\"},{\"id\":\"cg_passport_4x4cm_photo\",\"text\":\"Congo (Brazzaville) Passport 4x4 cm (40x40 mm)\",\"country\":\"Congo [Republic]\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":28,\"crownTop\":3.2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ambacongo-us.org/fr-fr/servicesdambassade/serviceconsulaire/passeport.aspx\"],\"comments\":\"\"},{\"id\":\"cg_passport_2x2in_photo\",\"text\":\"Congo (Brazzaville) Passport 2x2 inches (from US, Canada, Mexico)\",\"country\":\"Congo [Republic]\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ambacongo-us.org/en-us/embassyservices/consular/passport.aspx\"],\"comments\":\"\"},{\"id\":\"hr_osobna_iskaznica_35x45mm_photo\",\"text\":\"Croatia ID Card (Osobna iskaznica) 35x45 mm (3.5x4.5 cm)\",\"country\":\"Croatia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://stari.mup.hr/42.aspx\"],\"comments\":\"\"},{\"id\":\"hr_visa_photo\",\"text\":\"Croatia Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Croatia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://za.mfa.hr/?mh=331&mv=2046\"],\"comments\":\"\"},{\"id\":\"cy_id_card_35x45mm_photo\",\"text\":\"Cyprus ID Card (Cypriot identity card) 35x45 mm\",\"country\":\"Cyprus\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.cyprusembassy.net/home/uploads/pdf/Miscellaneous/ICAO%20Picture%20Specifications.pdf\"],\"comments\":\"\"},{\"id\":\"cy_passport_4x5cm_photo\",\"text\":\"Cyprus Passport 4x5 cm (40x50 mm)\",\"country\":\"Cyprus\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.mfa.gov.cy/mfa/embassies/embassy_moscow.nsf/All/C5BC6CA69B176A5CC2257F99003B70F8?OpenDocument\",\"http://www.mfa.gov.cy/mfa/Embassies/embassy_berlin.nsf/All/E52FC5F687D9CD77C2257FCB002C89D1\",\"https://cyprusembassy.fi/main/index.php?p=Consular_Section/5/1&lang=EN\"],\"comments\":\"\"},{\"id\":\"cy_visa_35x45mm_photo\",\"text\":\"Cyprus visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Cyprus\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"cy_id_card_4x3cm_photo\",\"text\":\"Cyprus ID Card (Cypriot identity card) 4x3 cm\",\"country\":\"Cyprus\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://cyprusembassy.fi/main/index.php?p=Consular_Section/5/2&lang=EN\"],\"comments\":\"\"},{\"id\":\"cy_visa_2x2in_photo\",\"text\":\"Cyprus visa 2x2 inches from USA\",\"country\":\"Cyprus\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.cyprusembassy.net/home/index.php?module=page&cid=109\"],\"comments\":\"\"},{\"id\":\"cz_passport_photo\",\"text\":\"Czech Republic Passport 35x45mm (3.5x4.5 cm)\",\"country\":\"Czech Republic\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mzv.cz/telaviv/en/visa_and_consular_services/passports/index.html\",\"http://www.mvcr.cz/mvcren/article/photograph.aspx\"],\"comments\":\"\"},{\"id\":\"cz_passport_50x50mm_photo\",\"text\":\"Czech Republic Passport 5x5cm (50x50mm)\",\"country\":\"Czech Republic\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"bottomEyeLine\":28},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.mzv.cz/london/en/visa_and_consular_information/consular_information/czech_passport/index.html\",\"http://www.mzv.cz/telaviv/en/visa_and_consular_services/passports/index.html\"],\"comments\":\"\"},{\"id\":\"cz_visa_photo\",\"text\":\"Czech Republic Visa 35x45mm (3.5x4.5 cm)\",\"country\":\"Czech Republic\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mzv.cz/manila/en/visa_and_consular_services/visa_information/schengen_visa_stay_of_up_to_90_days/list_of_reguirements_for/tourism.html\",\"http://www.mvcr.cz/mvcren/article/photograph.aspx\"],\"comments\":\"\"},{\"id\":\"dk_visa_photo\",\"text\":\"Denmark Visa 35x45mm (3.5x4.5 cm)\",\"country\":\"Denmark\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://usa.um.dk/en/travel-and-residence/visa/photo-requirements/\"],\"comments\":\"\"},{\"id\":\"dk_passport_photo\",\"text\":\"Denmark Passport 35x45mm (3.5x4.5 cm)\",\"country\":\"Denmark\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"dj_visa_photo\",\"text\":\"Djibouti visa 2x2 inches (51x51 mm, 5x5 cm)\",\"country\":\"Djibouti\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"dj_passport_photo\",\"text\":\"Djibouti Passport 3.5x3.5 cm (35x35 mm)\",\"country\":\"Djibouti\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":24.5,\"crownTop\":2.8},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ambassadededjibouti.be/images/PP.Form.pdf\"],\"comments\":\"\"},{\"id\":\"dj_id_card_photo\",\"text\":\"Djibouti ID Card 3.5x3.5 cm (35x35 mm)\",\"country\":\"Djibouti\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":24.5,\"crownTop\":2.8},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"dm_passport_45x38mm_photo\",\"text\":\"Dominica Passport 45x38 mm (1 3/4 x 1 1/2 inches)\",\"country\":\"Dominica\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":38,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29.5,\"crownTop\":4.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.dominica.gov.dm/services/passports-and-travel-documents-nationals/120-how-do-i-apply-for-a-passport\"],\"comments\":\"\"},{\"id\":\"eg_passport_4x6_photo\",\"text\":\"Egypt Passport 40x60 mm (4x6 cm)\",\"country\":\"Egypt\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.egypt.gov.eg/services/listServicesCategory.aspx?ID=350§ion=citizens\",\"http://www.egyptembassy.net/consular-services/passports-travel/issuing-egyptian-passport/\",\"http://www.egyptembassy.net/ar/%D8%A7%D8%B3%D8%AA%D8%AE%D8%B1%D8%A7%D8%AC-%D8%AC%D9%88%D8%A7%D8%B2-%D8%B3%D9%81%D8%B1-%D9%85%D8%B5%D8%B1%D9%8A-%D8%AC%D8%AF%D9%8A%D8%AF-%D9%85%D9%85%D9%8A%D9%83%D9%86-%D9%85%D9%82%D8%B1%D9%88%D8%A1/\"],\"comments\":\"\"},{\"id\":\"eg_id_card_4x6_photo\",\"text\":\"Egypt ID Card 40x60 mm (4x6 cm)\",\"country\":\"Egypt\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"eg_visa_4x6cm_photo\",\"text\":\"Egypt visa 40x60 mm (4x6 cm)\",\"country\":\"Egypt\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"eg_passport_2x2_photo\",\"text\":\"Egypt Passport (from USA only) 2x2 inch, 51x51 mm\",\"country\":\"Egypt\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"eg_visa_2x2_photo\",\"text\":\"Egypt visa 2x2 inch, 51x51 mm\",\"country\":\"Egypt\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.egyptembassy.net/consular-services/passports-travel/visa-requirements/\"],\"comments\":\"\"},{\"id\":\"eg_military_service_certificate_6x4cm_photo\",\"text\":\"Egypt military service certificate 60x40 mm (6x4 cm)\",\"country\":\"Egypt\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"gq_visa_35x54mm_photo\",\"text\":\"Equatorial Guinea visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Equatorial Guinea\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://docs.wixstatic.com/ugd/fcaa96_a5f0314a60f24e90bcc177566c818074.pdf\"],\"comments\":\"\"},{\"id\":\"ee_id_card_40x50mm_photo\",\"text\":\"Estonia ID Card (ID-kaart) 40x50 mm (4x5 cm)\",\"country\":\"Estonia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":37.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www2.politsei.ee/en/teenused/isikut-toendavad-dokumendid/id-kaart/taiskasvanule/oluline-info-taiskasvanule-id-kaardi-taotlejale.dot#varvifoto\"],\"comments\":\"\"},{\"id\":\"ee_passport_40x50mm_photo\",\"text\":\"Estonia Passport 40x50 mm (4x5 cm)\",\"country\":\"Estonia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":37.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www2.politsei.ee/en/teenused/isikut-toendavad-dokumendid/eesti-kodaniku-pass/taiskasvanule/index.dot\"],\"comments\":\"\"},{\"id\":\"ee_aliens_passport_40x50mm_photo\",\"text\":\"Estonia aliens Passport (välismaalase pass) 40x50 mm (4x5 cm)\",\"country\":\"Estonia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":37.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www2.politsei.ee/en/teenused/isikut-toendavad-dokumendid/valismaalase-pass/taiskasvanule/oluline-info-taiskasvanule-valismaalase-passi-taotlejale.dot#varvifoto\"],\"comments\":\"\"},{\"id\":\"ee_residents_digital_identity_card_1300x1600px_photo\",\"text\":\"Estonia resident digital identity card 1300x1600 pixels\",\"country\":\"Estonia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":1300,\"pictureHeight\":1600,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":1200,\"crownTop\":112},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www2.politsei.ee/en/teenused/isikut-toendavad-dokumendid/requirements-and-instructions-regarding-document-photographs.dot\",\"https://www2.politsei.ee/en/teenused/isikut-toendavad-dokumendid/elamisloakaart/taiskasvanule/index.dot\"],\"comments\":\"For both Estonian e-resident digital identity card and residence permit card\"},{\"id\":\"ee_visa_40x50mm_photo\",\"text\":\"Estonia visa 40x50 mm (4x5 cm)\",\"country\":\"Estonia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":37.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www2.politsei.ee/en/teenused/viibimisaja-pikendamine/\"],\"comments\":\"\"},{\"id\":\"ee_long_stay_visa_35x45mm_photo\",\"text\":\"Estonia long stay D visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Estonia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://vm.ee/en/long-stay-d-visa\"],\"comments\":\"\"},{\"id\":\"ee_weapons_permit_30x40mm_photo\",\"text\":\"Estonia weapons permit 30x40 mm (3x4 cm)\",\"country\":\"Estonia\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www2.politsei.ee/en/teenused/weapons-permit/\"],\"comments\":\"\"},{\"id\":\"et_visa_photo\",\"text\":\"Ethiopia e-visa online 35x45 mm (3.5x4.5 cm)\",\"country\":\"Ethiopia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.evisa.gov.et/\"],\"comments\":\"\"},{\"id\":\"et_visa_3x4_photo\",\"text\":\"Ethiopia visa offline 3x4 cm (30x40 mm)\",\"country\":\"Ethiopia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[\"http://www.ethiopianembassy.be/wp-content/uploads/Visa-Application-Form.pdf\"],\"comments\":\"\"},{\"id\":\"et_passport_3x4_photo\",\"text\":\"Ethiopia Passport 3x4 cm (30x40 mm)\",\"country\":\"Ethiopia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://ethemb.se/wp-content/uploads/2013/04/Checklist-for-Passport-Renewal.pdf\",\"http://ethiopianembassy.org.br/paginas/passport\"],\"comments\":\"\"},{\"id\":\"et_origin_card_3x4_photo\",\"text\":\"Ethiopia origin card 3x4 cm (30x40 mm)\",\"country\":\"Ethiopia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ethiopianembassy.org/ConsularForms/IDForm1.pdf\",\"http://ethemb.se/wp-content/uploads/2013/07/Application-form-for-the-issuance-of-origin-ID.pdf\"],\"comments\":\"Three recent colored photographs of size 3x4 cm with white background and name of the applicant at the back of the photograph.\"},{\"id\":\"et_origin_card_2x3_photo\",\"text\":\"Identification Card for Ethiopian Origin 2x3 cm (20x30 mm)\",\"country\":\"Ethiopia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":20,\"pictureHeight\":30,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":18.9,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ethiopiaembassy.ru/en/fees_id\"],\"comments\":\"\"},{\"id\":\"eu_visa_photo\",\"text\":\"Schengen Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"European Union\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.diplomatie.gouv.fr/en/IMG/pdf/sample_photos_france.pdf\",\"http://www.immihelp.com/visas/schengenvisa/sample_photos_germany.pdf\"],\"comments\":\"\"},{\"id\":\"fj_passport_35x45mm_photo\",\"text\":\"Fiji Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Fiji\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.immigration.gov.fj/travel-requirements/passport-photo-guidelines\",\"http://www.fijiembassy.be/images/Passport_application.pdf\"],\"comments\":\"\"},{\"id\":\"fi_passport_photo\",\"text\":\"Finland Passport 36x47 mm\",\"country\":\"Finland\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":36,\"pictureHeight\":47,\"units\":\"mm\",\"dpi\":353,\"faceHeight\":35,\"crownTop\":4},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"https://www.poliisi.fi/licences/passport/dimensions_and_positioning\"],\"comments\":\"\"},{\"id\":\"fi_visa_photo\",\"text\":\"Finland Visa 36x47 mm\",\"country\":\"Finland\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":36,\"pictureHeight\":47,\"units\":\"mm\",\"dpi\":353,\"faceHeight\":35,\"crownTop\":4},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"http://www.finland.org.in/public/default.aspx?nodeid=34946&contentlan=2&culture=en-US\",\"http://visa.finland.eu/Saintpeterburg/medical_photospecs.html\"],\"comments\":\"\"},{\"id\":\"fi_passport_500x653px_photo\",\"text\":\"Finland Passport online 500x653 px\",\"country\":\"Finland\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":500,\"pictureHeight\":653,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":487,\"crownTop\":56},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.poliisi.fi/licences/passport/dimensions_and_positioning\"],\"comments\":\"\"},{\"id\":\"fi_id_henkilokortti_500x653px_photo\",\"text\":\"Finland ID Card online 500x653 px\",\"country\":\"Finland\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":500,\"pictureHeight\":653,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":487,\"crownTop\":56},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.poliisi.fi/licences/passport/dimensions_and_positioning\"],\"comments\":\"\"},{\"id\":\"fi_id_henkilokortti_36x47mm_photo\",\"text\":\"Finland ID Card offline 36x47 mm\",\"country\":\"Finland\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":36,\"pictureHeight\":47,\"units\":\"mm\",\"dpi\":353,\"faceHeight\":35,\"crownTop\":4},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"https://www.poliisi.fi/licences/passport/dimensions_and_positioning\"],\"comments\":\"\"},{\"id\":\"fr_passport_photo\",\"text\":\"France Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"France\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.consulfrance-washington.org/IMG/pdf/depliant_norme_photo-2.pdf\"],\"comments\":\"\"},{\"id\":\"fr_visa_photo\",\"text\":\"France Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"France\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.diplomatie.gouv.fr/en/IMG/pdf/sample_photos_france.pdf\",\"http://www.consulfrance-losangeles.org/IMG/pdf/Caracteristiques_photos_ENG.pdf\"],\"comments\":\"\"},{\"id\":\"fr_id_card_35x45mm_photo\",\"text\":\"France ID Card 35x45 mm (3.5x4.5 cm)\",\"country\":\"France\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.demarches.interieur.gouv.fr/particuliers.html#F10619\",\"https://www.demarches.interieur.gouv.fr/particuliers.html#F1344\"],\"comments\":\"\"},{\"id\":\"fr_permis_de_conduire_35x45mm_photo\",\"text\":\"France Driving Licence 35x45 mm (3.5x4.5 cm)\",\"country\":\"France\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.demarches.interieur.gouv.fr/particuliers.html#F2830\",\"https://www.demarches.interieur.gouv.fr/particuliers.html#F10619\"],\"comments\":\"\"},{\"id\":\"fr_demande_dasile_35x45_photo\",\"text\":\"France Asylum Seeker (Demande D'asile) 35x45 mm (3.5x4.5 cm)\",\"country\":\"France\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.demarches.interieur.gouv.fr/particuliers.html#F2232\",\"https://www.demarches.interieur.gouv.fr/particuliers.html#F10619\"],\"comments\":\"\"},{\"id\":\"ga_evisa_photo\",\"text\":\"Gabon evisa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Gabon\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://evisa.dgdi.ga/\"],\"comments\":\"\"},{\"id\":\"ga_visa_35x35mm_photo\",\"text\":\"Gabon visa 35x35 mm (3.5x3.5 cm)\",\"country\":\"Gabon\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":26.25,\"crownTop\":2.8},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.gabonembassyjapan.org/visas-touristique.html\"],\"comments\":\"\"},{\"id\":\"ge_passport_photo\",\"text\":\"Georgia Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Georgia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31.05,\"crownTop\":5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ge_visa_photo\",\"text\":\"Georgia visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Georgia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31.05,\"crownTop\":5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ge_evisa_photo\",\"text\":\"Georgia e-visa 472x610 pixels (4x5.16 cm)\",\"country\":\"Georgia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":472,\"pictureHeight\":610,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":427,\"crownTop\":61},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.evisa.gov.ge/GeoVisa/en/VisaApp\"],\"comments\":\"\"},{\"id\":\"de_passport_photo\",\"text\":\"Germany Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Germany\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.london.diplo.de/contentblob/3401106/Daten/178573/PhotosIDPassport.pdf\",\"http://www.germany.info/contentblob/2177362/Daten/178573/Sample_Photos_DD.pdf\"],\"comments\":\"\"},{\"id\":\"de_ausweis_35x45mm_photo\",\"text\":\"Germany ID Card 35x45 mm (3.5x4.5 cm)\",\"country\":\"Germany\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.personalausweisportal.de/SharedDocs/Downloads/DE/Weitere-Informationen/Fotomustertafel.pdf?__blob=publicationFile&v=2\",\"https://www.personalausweisportal.de/SharedDocs/Downloads/DE/Weitere-Informationen/Fotomustertafel.html?nn=6852870\",\"https://www.personalausweisportal.de/EN/Citizens/German_ID_Card/Application/Application_node.html;jsessionid=BE1C400BC9E861E8108917C926BB9D39.1_cid332\"],\"comments\":\"\"},{\"id\":\"de_visa_photo\",\"text\":\"Germany Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Germany\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.germany.info/Vertretung/usa/en/05__Legal/02__Directory__Services/01__Visa/__Visa__Photo__Instructions.html\",\"http://www.germany.info/contentblob/1965686/Daten/178573/Visa_Foto_Mustertafel_L.pdf\"],\"comments\":\"\"},{\"id\":\"de_driving_photo\",\"text\":\"Germany Driving License 35x45 mm (3.5x4.5 cm)\",\"country\":\"Germany\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.expatica.com/de/essentials_moving_to/essentials/how-to-get-a-driving-license-in-germany-34198_9937.html\",\"http://www.amazingdusseldorf.com/listings-official/public-services/driver-licence.html\"],\"comments\":\"\"},{\"id\":\"gh_visa_35x45mm_photo\",\"text\":\"Ghana visa 3.5x4.5 cm (35x45 mm)\",\"country\":\"Ghana\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.ghanaembassy.dk/content/visa-application\",\"http://www.ghanaembassy.ru/inc/visa/tourism-visa\",\"http://www.ghanaembassy.or.jp/consular_section/visa.html\"],\"comments\":\"Four (4) recent Passport size photographs (3.5cmx4.5cm colour photographs with plain white background)\"},{\"id\":\"gh_passport_35x45mm_photo\",\"text\":\"Ghana Passport 35x45 mm\",\"country\":\"Ghana\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ghanaembassy.or.jp/consular_section/passport.html\"],\"comments\":\"Two (2) passport size colour photographs (Taken full face, and recently size: 35 x 45 mm)\"},{\"id\":\"gh_visa_3x4cm_photo\",\"text\":\"Ghana Visa (from Brazil) 3x4 cm\",\"country\":\"Ghana\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ghanaembassybrazil.com/information-for-visa/\"],\"comments\":\"4 identical images, which are not copied by the computer (3x4 or 5x7)\"},{\"id\":\"gr_passport_photo\",\"text\":\"Greece Passport 40x60 mm\",\"country\":\"Greece\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"bottomEyeLine\":32},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.passport.gov.gr/en/npc-content/npc-periexomeno/technical-specifications.html\",\"http://www.passport.gov.gr/en/downloads/download.html?id=6\"],\"comments\":\"\"},{\"id\":\"gr_visa_photo\",\"text\":\"Greece Visa 35x45 mm\",\"country\":\"Greece\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mfa.gr/uk/images/stories/services/docs/technical_requirements_for_photos_1.pdf\"],\"comments\":\"\"},{\"id\":\"gr_id_card_36x36mm_photo\",\"text\":\"Greek ID Card 36x36 mm\",\"country\":\"Greece\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":36,\"pictureHeight\":36,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":23.4,\"crownTop\":2.88},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.hellenicpolice.gr/index.php?option=ozo_content&perform=view&id=139&Itemid=132&lang\"],\"comments\":\"\"},{\"id\":\"gr_visa_us_photo\",\"text\":\"Greece Visa 2x2″ (from the USA)\",\"country\":\"Greece\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.mfa.gr/usa/en/services/services-for-non-greeks/visa-section.html\"],\"comments\":\"\"},{\"id\":\"gw_visa_3x4cm_photo\",\"text\":\"Guinea-Bissau visa 3x4 cm\",\"country\":\"Guinea-Bissau\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[],\"comments\":\"Two photos format (3x4) white background\"},{\"id\":\"gw_evisa_photo\",\"text\":\"Guinea-Bissau e-visa\",\"country\":\"Guinea-Bissau\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.rgb-visa.com/\"],\"comments\":\"\"},{\"id\":\"gy_passport_32x26mm_photo\",\"text\":\"Guyana Passport 32x26mm\",\"country\":\"Guyana\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":26,\"pictureHeight\":32,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":23.5,\"crownTop\":2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.guyanaconsulate.com/passport.html\",\"http://www.guyanahclondon.co.uk/Passport%20Application%20Form%20for%20Guyana.pdf\",\"https://www.guyanaconsulatenewyork.org/passports/\"],\"comments\":\"\"},{\"id\":\"gy_passport_45x35mm_photo\",\"text\":\"Guyana Passport 45x35mm\",\"country\":\"Guyana\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.guyanaconsulate.com/passport.html\",\"http://www.guyanahclondon.co.uk/Passport%20Application%20Form%20for%20Guyana.pdf\",\"https://www.guyanaconsulatenewyork.org/passports/\"],\"comments\":\"\"},{\"id\":\"hk_passport_photo\",\"text\":\"Hong Kong Passport 40x50mm\",\"country\":\"Hong Kong\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.gov.hk/en/residents/immigration/traveldoc/photorequirements.htm\",\"http://www.gov.hk/en/residents/immigration/traveldoc/hksarpassport/applyhkpassport.htm\"],\"comments\":\"\"},{\"id\":\"hk_visa_photo\",\"text\":\"Hong Kong Visa 40x50mm\",\"country\":\"Hong Kong\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.immd.gov.hk/pdforms/ID1003A.pdf\",\"http://www.gov.hk/en/residents/immigration/traveldoc/photorequirements.htm\"],\"comments\":\"\"},{\"id\":\"hu_passport_photo\",\"text\":\"Hungary Passport 35x45mm\",\"country\":\"Hungary\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mfa.gov.hu/kulkepviselet/UK/en/en_Konzuliinfo/application_for_hungarian_passport.htm\"],\"comments\":\"If you apply in the embassy in London, you need to select and make a UK passport photo instead, see one of the links above.\"},{\"id\":\"hu_visa_photo\",\"text\":\"Hungary Visa 35x45mm (3.5x4.5 cm)\",\"country\":\"Hungary\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mfa.gov.hu/NR/rdonlyres/70BCBE4B-4408-4F40-852A-B04731C6EB3D/0/photo_requirements_visa_appl.pdf\",\"http://www.mfa.gov.hu/kulkepviselet/UK/en/en_Konzuliinfo/visa_information.htm\"],\"comments\":\"\"},{\"id\":\"in_visa_photo\",\"text\":\"India Visa 2x2″\",\"country\":\"India\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://indianvisaonline.gov.in\"],\"comments\":\"Detailed visa photo submission instructions. Indian visa online application. a) You can make photo using digital camera/ webcam or you can scan the physical photograph you already have.b) Indian Online Visa photo requirements:File type: JPEGSize: minimum 10 KB – maximum 300 KBThe height and width of your photo must be the same.The minimum dimensions are 350 pixels width x 350 pixels heightThe maximum dimensions are 1000 pixels width x 1000 pixels heightTo learn more about all steps of application process (here you will also find instruction how to resize your photo) follow this link\"},{\"id\":\"in_visa_vfs_190px_photo\",\"text\":\"India Visa 190x190 px via VFSglobal.com\",\"country\":\"India\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":190,\"pictureHeight\":190,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":122.55,\"bottomEyeLine\":112.1},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.vfsglobal.com/India/UK/\"],\"comments\":\"If you are applying for a India visa via VFS Global website, then the photo size is 190x190px 15 KB with head of 25-35 mm and eye level of 28-35 mm from bottom of the photo and background is plain light. This photo type meets these requirements.\"},{\"id\":\"in_passport_oci_online_photo\",\"text\":\"India OCI Passport 2x2″\",\"country\":\"India\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://passport.gov.in/oci/welcome\",\"https://passport.gov.in/oci/Photo-Spec-FINAL.pdf\"],\"comments\":\"Overseas Citizenship of India. Our photo fully conforms to the official OCI online requirements.Detailed passport photo submission instructions\"},{\"id\":\"in_passport_photo\",\"text\":\"India Passport 2x2″\",\"country\":\"India\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://passport.gov.in/oci/Photo-Spec-FINAL.pdf\"],\"comments\":\"\"},{\"id\":\"in_pan_photo\",\"text\":\"India PAN card 25x35mm (2.5x3.5cm)\",\"country\":\"India\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":25,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":200,\"faceHeight\":25.55,\"crownTop\":2.45},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://tin.tin.nsdl.com/pan/form49A.html\"],\"comments\":\"\"},{\"id\":\"in_voter_id_photo\",\"text\":\"India Voter ID card\",\"country\":\"India\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"in_pio_photo\",\"text\":\"India PIO (Person of Indian Origin) 35x35 mm (3.5x3.5 cm)\",\"country\":\"India\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":23.45,\"bottomEyeLine\":20.3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.blsindia-canada.com/photo_spec.php\"],\"comments\":\"\"},{\"id\":\"in_birthcertificate_photo\",\"text\":\"India PCC / Birth Certificate 35x35 mm (3.5x3.5 cm)\",\"country\":\"India\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":23.45,\"bottomEyeLine\":20.3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.hcilondon.in/pages.php?id=85\"],\"comments\":\"\"},{\"id\":\"in_ffro_photo\",\"text\":\"India FRRO (Foreigner Registration) 35x35 mm online\",\"country\":\"India\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":23.45,\"bottomEyeLine\":20.3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://indianfrro.gov.in/frro/\"],\"comments\":\"\"},{\"id\":\"in_passport_bls_usa_photo\",\"text\":\"India Passport for BLS USA Application 2x2″\",\"country\":\"India\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"\"],\"comments\":\"\"},{\"id\":\"in_dcga_online_photo\",\"text\":\"UDAAN DCGA\",\"country\":\"India\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":35,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://dgca.nic.in/admit/Instruction%20&%20Procedure%20for%20uploading%20the%20images%20of%20Photograph%20&%20Signature%20in%20UDAAN%20site.pdf\"],\"comments\":\"\"},{\"id\":\"id_visa_3x4_red_bg_photo\",\"text\":\"Indonesia visa 3x4 cm (30x40 mm) online red background\",\"country\":\"Indonesia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ff0000\",\"printable\":true,\"officialLinks\":[\"http://evisa.kbri-newdelhi.go.id/visa/f/2311e713382d87057619d5cca5fba208\",\"http://evisa.kbri-newdelhi.go.id/\"],\"comments\":\"\"},{\"id\":\"id_passport_photo\",\"text\":\"Indonesia Passport 2x2″ red background\",\"country\":\"Indonesia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ff0000\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Approximately 5x5 cm\"},{\"id\":\"id_passport_white_photo\",\"text\":\"Indonesia Passport 2x2″ white background\",\"country\":\"Indonesia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Approximately 5x5 cm\"},{\"id\":\"id_visa_2x2inches_photo\",\"text\":\"Indonesia Visa 2x2″\",\"country\":\"Indonesia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://consular.embassyofindonesia.org/visa/genv/TVV/getstarted.html\"],\"comments\":\"\"},{\"id\":\"id_visa_photo\",\"text\":\"Indonesia Visa 35x45 mm\",\"country\":\"Indonesia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.indonesiaimmigration.com/index.php?tm=news.detail&id=39\"],\"comments\":\"\"},{\"id\":\"ir_evisa_photo\",\"text\":\"Iran e-Visa 600x400 pixels\",\"country\":\"Iran\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":400,\"pictureHeight\":600,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":420,\"crownTop\":42},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://evisatraveller.mfa.ir/en/request/digital_image_requirement/?title_name=photo\"],\"comments\":\"\"},{\"id\":\"iq_passport_35x45mm_photo\",\"text\":\"Iraq Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Iraq\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.iraqinationality.gov.iq/InstructionstoapplyforElectronicallyReadPassport.html\"],\"comments\":\"\"},{\"id\":\"iq_visa_photo\",\"text\":\"Iraq visa 5x5 cm (51x51 mm, 2x2 inch)\",\"country\":\"Iraq\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.iraqiembassy.us/page/visas-to-iraq\"],\"comments\":\"\"},{\"id\":\"iq_id_card_photo\",\"text\":\"Iraq ID Card 35x45 mm (3.5x4.5 cm)\",\"country\":\"Iraq\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"iq_residence_35x45mm_photo\",\"text\":\"Iraq residence 35x45 mm (3.5x4.5 cm)\",\"country\":\"Iraq\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.gov.krd/p/page.aspx?l=14&p=338&h=1&t=0\"],\"comments\":\"\"},{\"id\":\"iq_passport_5x5_photo\",\"text\":\"Iraq Passport 5x5 cm (51x51 mm, 2x2 inches)\",\"country\":\"Iraq\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ie_passport_online_photo\",\"text\":\"Ireland Passport online (715x951 px)\",\"country\":\"Ireland\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":715,\"pictureHeight\":951,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":523.05,\"crownTop\":133.14},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.dfa.ie/passportonline/photographerguidelines/\"],\"comments\":\"Instructions how to upload the photo in detail\"},{\"id\":\"ie_passport_photo\",\"text\":\"Ireland Passport offline 35x45 mm (3.5x4.5 cm)\",\"country\":\"Ireland\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ie_visa_photo\",\"text\":\"Ireland Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Ireland\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.inis.gov.ie/en/INIS/Re-Entry%20Visa%20Photograph%20Requirements.pdf/Files/Re-Entry%20Visa%20Photograph%20Requirements.pdf\"],\"comments\":\"\"},{\"id\":\"ie_employment_permit_application_photo\",\"text\":\"Ireland Employment Permit Application 35x45 mm\",\"country\":\"Ireland\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://epos.djei.ie/\"],\"comments\":\"\"},{\"id\":\"il_id_card_35x45mm_photo\",\"text\":\"Israel ID Card 3.5x4.5 cm (35x45 mm)\",\"country\":\"Israel\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":32,\"crownTop\":5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.gov.il/en/service/new_id\"],\"comments\":\"\"},{\"id\":\"il_passport_photo\",\"text\":\"Israel Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Israel\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":32,\"crownTop\":5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://embassies.gov.il/stockholm-en/ConsularServices/Pages/Passport-information.aspx\"],\"comments\":\"Israeli passport photo is accepted in 2 sizes: this one 35x45 mm and another one is 5x5 cm, its link is https://visafoto.com/il_passport_photo, you need to know from your consulate or government agency the correct size first.\"},{\"id\":\"il_passport_5x5cm_2x2in_photo\",\"text\":\"Israel Passport 5x5 cm (2x2 in, 51x51 mm)\",\"country\":\"Israel\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://embassies.gov.il/montreal/ConsularServices/Pages/Passports-and-Travel-Documents.aspx\",\"http://embassies.gov.il/paris/ConsularServices/Pages/passport-extension.aspx\",\"http://embassies.gov.il/london/ConsularServices/Pages/Passports-and-Travel-Documents.aspx\"],\"comments\":\"Israeli passport photo is accepted in 2 sizes: this one 5x5 cm and another one is 35x45 mm, its link is https://visafoto.com/il_passport_5x5cm_2x2in_photo, you need to know from your consulate or government agency the correct size first.\"},{\"id\":\"il_visa_2_photo\",\"text\":\"Israel Visa 35x45mm (3.5x4.5 cm)\",\"country\":\"Israel\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"\"],\"comments\":\"Please find the needed photo size out in advance at your Israeli embassy.\"},{\"id\":\"il_visa_photo\",\"text\":\"Israel Visa 55x55mm (usually from India)\",\"country\":\"Israel\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":55,\"pictureHeight\":55,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":37,\"crownTop\":6},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.israelvisa-india.com/photo.aspx\"],\"comments\":\"Please find the needed photo size out in advance at your Israeli embassy.\"},{\"id\":\"it_carta_di_identita_35x45_photo\",\"text\":\"Italy ID Card 35x45 mm (3.5x4.5 cm)\",\"country\":\"Italy\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33.5,\"crownTop\":2},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.cartaidentita.interno.gov.it/modalita-acquisizione-foto/\"],\"comments\":\"\"},{\"id\":\"it_passport_photo\",\"text\":\"Italy Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Italy\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33.5,\"crownTop\":2},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.consmontreal.esteri.it/resource/2010/05/11973_f_cons97PassaportiNovitaMaggio2011.pdf\"],\"comments\":\"\"},{\"id\":\"it_visa_photo\",\"text\":\"Italy Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Italy\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.ambwashingtondc.esteri.it/Ambasciata_Washington/Menu/In_linea_con_utente/Domande_frequenti/Visti_faq/Visa_Requirements.htm\"],\"comments\":\"\"},{\"id\":\"it_passport_40x40_photo\",\"text\":\"Italy Passport 40x40 mm (LA consulate) 4x4 cm\",\"country\":\"Italy\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.conslosangeles.esteri.it/consolato_losangeles/en/i_servizi/per-i-cittadini/passaporti\"],\"comments\":\"\"},{\"id\":\"ci_visa_45x35mm_photo\",\"text\":\"Cote d'Ivoire visa 4.5x3.5 cm (45x35 mm)\",\"country\":\"Ivory Coast\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"jm_passport35x45mm_photo\",\"text\":\"Jamaica Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Jamaica\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.pica.gov.jm/passport-servies/general-passport-information/passport-photo-requirements/\",\"www.jhcuk.org/citizens/passports/passport-photographs\"],\"comments\":\"\"},{\"id\":\"jp_visa_photo\",\"text\":\"Japan Visa 45x45mm, head 27 mm\",\"country\":\"Japan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":45,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":27,\"crownTop\":7.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.ph.emb-japan.go.jp/visiting/visa/photorequirment.htm\"],\"comments\":\"Please find the needed photo size in advance at your Japan embassy, different embassies have different requirements.\"},{\"id\":\"jp_visa_3_photo\",\"text\":\"Japan Visa 2x2″ (standard visa from the US)\",\"country\":\"Japan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.mofa.go.jp/j_info/visit/visa/topics/multiple.html\"],\"comments\":\"Please find the needed photo size in advance at your Japan embassy, different embassies have different requirements.\"},{\"id\":\"jp_visa_2_photo\",\"text\":\"Japan Visa 45x45mm, head 34 mm\",\"country\":\"Japan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":45,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"crownTop\":4},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.in.emb-japan.go.jp/photo.html\"],\"comments\":\"Please find the needed photo size in advance at your Japan embassy, different embassies have different requirements.\"},{\"id\":\"jp_passport_photo\",\"text\":\"Japan Passport 35x45 mm\",\"country\":\"Japan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.la.us.emb-japan.go.jp/e_web/e_m02_07_02.htm\"],\"comments\":\"\"},{\"id\":\"jp_certificate_eligibility_photo\",\"text\":\"Japan Residence Card or Certificate of Eligibility 30x40 mm\",\"country\":\"Japan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":6},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.immi-moj.go.jp/english/tetuduki/zairyuu/photo_info.html\"],\"comments\":\"It suits both Japanese Residence Card and Certificate of Eligibility photos\"},{\"id\":\"jo_passport_photo\",\"text\":\"Jordan Passport 3.5x4.5 cm (35x45 mm)\",\"country\":\"Jordan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://jordan.gov.jo/wps/portal/Home/Citizen/CitizenLifeEvent?catId=6589f890-843c-4d44-a395-50fddda0be73\",\"http://jordanembassy.org.uk/wordpress/wp-content/uploads/2017/05/Renewal-Jordanian-Temporary-passport-JP5.pdf\"],\"comments\":\"\"},{\"id\":\"jo_visa_35x45mm_photo\",\"text\":\"Jordan visa 3.5x4.5 cm (35x45 mm)\",\"country\":\"Jordan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"jo_id_card_35x45mm_photo\",\"text\":\"Jordan ID Card 3.5x4.5 cm (35x45 mm)\",\"country\":\"Jordan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"jo_residence_35x45mm_photo\",\"text\":\"Jordan residence 3.5x4.5 cm (35x45 mm)\",\"country\":\"Jordan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.psd.gov.jo/index.php/ar/2015-03-02-13-04-44/2015-08-10-05-37-07\"],\"comments\":\"\"},{\"id\":\"jo_work_permit_35x45mm_photo\",\"text\":\"Jordan work permit 3.5x4.5 cm (35x45 mm)\",\"country\":\"Jordan\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://jisrtv.com/أخبار-الجسر/الأخبار-السورية/ما-الأوراق-المطلوبة-للحصول-على-تصريح-العمل-للسوريين-في-الأردن؟/\"],\"comments\":\"\"},{\"id\":\"jo_passport_2x2_photo\",\"text\":\"Jordan Passport 2x2″ from USA (51x51 mm)\",\"country\":\"Jordan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.jordanembassyus.org/page/consulate-forms\"],\"comments\":\"Write full name (on all 4 printed photos) on the back of the picture on both Arabic and English languages\"},{\"id\":\"jo_id_card_2x2_photo\",\"text\":\"Jordan 2x2″ ID Card in USA (51x51 mm)\",\"country\":\"Jordan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.jordanembassyus.org/page/consulate-forms\"],\"comments\":\"Write full name (on all 4 printed photos) on the back of the picture on both Arabic and English languages\"},{\"id\":\"kz_passport_photo\",\"text\":\"Kazakhstan Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Kazakhstan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://egov.kz/wps/portal/Content?contentPath=/egovcontent/citizen_migration/passport_id_card/passport/pass545_mid&lang=ru\"],\"comments\":\"\"},{\"id\":\"kz_id_card_35x45mm_photo\",\"text\":\"Kazakhstan ID Card 35x45 mm\",\"country\":\"Kazakhstan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://egov.kz/cms/en/services/pass003_mvd\"],\"comments\":\"\"},{\"id\":\"kz_passport_online_413x531_photo\",\"text\":\"Kazakhstan Passport online 413x531 pixels\",\"country\":\"Kazakhstan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://egov.kz/cms/en/services/pass003_mvd\"],\"comments\":\"\"},{\"id\":\"kz_id_card_online_413x531_photo\",\"text\":\"Kazakhstan ID Card online 413x531 pixels\",\"country\":\"Kazakhstan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://egov.kz/cms/en/services/pass003_mvd\"],\"comments\":\"\"},{\"id\":\"kz_visa_photo\",\"text\":\"Kazakhstan Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Kazakhstan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://egov.kz/wps/portal/Content?contentPath=/egovcontent/citizens/citizen_migration/citizenship_of_rk/article/rk%20visa%20obtaining&lang=en\",\"http://egov.kz/wps/portal/Content?contentPath=/egovcontent/citizens/citizen_migration/citizenship_of_rk/article/rk%20visa%20obtaining&lang=ru\"],\"comments\":\"\"},{\"id\":\"ke_visa_eastern_africa_photo\",\"text\":\"Eastern Africa visa photo 2x2″ (Kenya) (51x51mm, 5x5 cm)\",\"country\":\"Kenya\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":250,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"The image will be 500x500 px for upload\"},{\"id\":\"ke_passport_photo\",\"text\":\"Kenya Passport 2x2″ (51x51 mm, 5x5 cm)\",\"country\":\"Kenya\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":250,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://immigration.ecitizen.go.ke\"],\"comments\":\"The image will be 500x500 px for upload\"},{\"id\":\"kw_passport_photo\",\"text\":\"Kuwait Passport 4x6 cm (40x60 mm)\",\"country\":\"Kuwait\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#309eff\",\"printable\":true,\"officialLinks\":[\"https://www.e.gov.kw/sites/kgoEnglish/Pages/Services/MOI/RenewPassport.aspx\"],\"comments\":\"\"},{\"id\":\"kw_visa_5x5cm_2x2in_photo\",\"text\":\"Kuwait visa 51x51 mm (5x5 cm, 2x2 inches)\",\"country\":\"Kuwait\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"kw_id_card_4x6cm_photo\",\"text\":\"Kuwait ID Card 4x6 cm (40x60 mm)\",\"country\":\"Kuwait\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#309eff\",\"printable\":true,\"officialLinks\":[\"https://www.e.gov.kw/sites/kgoenglish/Pages/Services/PACI/RenewCivilID.aspx\"],\"comments\":\"\"},{\"id\":\"kw_residence_4x6_photo\",\"text\":\"Kuwait residence 4x6 cm (40x60 mm)\",\"country\":\"Kuwait\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#309eff\",\"printable\":true,\"officialLinks\":[\"https://www.e.gov.kw/sites/kgoarabic/Pages/Services/MOI/TransferResidencePermitCivilArticle18.aspx\"],\"comments\":\"\"},{\"id\":\"kw_work_permit_4x6cm_photo\",\"text\":\"Kuwait work permit 4x6 cm (40x60 mm)\",\"country\":\"Kuwait\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#309eff\",\"printable\":true,\"officialLinks\":[\"https://www.almrsal.com/post/470712\"],\"comments\":\"\"},{\"id\":\"kg_passport_4x6cm_photo\",\"text\":\"Kyrgyzstan Passport 4x6 cm (40x60 mm)\",\"country\":\"Kyrgyzstan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"faceHeight\":42,\"units\":\"mm\",\"dpi\":300,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.kgembassy.org/wp-content/uploads/2015/06/%d0%a2%d1%80%d0%b5%d0%b1%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f-%d0%ba-%d1%84%d0%be%d1%82%d0%be-%d0%bd%d0%b0-%d0%bf%d0%b0%d1%81%d0%bf%d0%be%d1%80%d1%82-%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d1%86%d0%b0-2004-%d0%b3%d0%be%d0%b4%d0%b0.pdf\",\"https://www.kgembassy.org/en/consular-issues/info-for-kyrgyz-citizens/russkij-poluchenie-ili-obmen-obshhegrazh/\"],\"comments\":\"\"},{\"id\":\"la_visa_4x6_photo\",\"text\":\"Laos visa 4x6 cm\",\"country\":\"Laos\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":36,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ambalao.be/pages/formulairevisaenfr.pdf\"],\"comments\":\"\"},{\"id\":\"la_visa_3x4_photo\",\"text\":\"Laos visa 3x4 cm\",\"country\":\"Laos\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.laosembassy.net/wp-content/uploads/2015/06/51dcf281a28c4_VISA_APPLICATION_FORM.pdf\",\"https://s3-eu-west-1.amazonaws.com/storage.cybersite.se/files/cb7d8910-5f61-45f4-8b8f-26b56b89a341/0a246bfd-7ec3-4d2e-a87b-7e2f05432da0.pdf\"],\"comments\":\"\"},{\"id\":\"la_passport_4x6_photo\",\"text\":\"Laos Passport 4x6 cm\",\"country\":\"Laos\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":36,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://s3-eu-west-1.amazonaws.com/storage.cybersite.se/files/cb7d8910-5f61-45f4-8b8f-26b56b89a341/0e59ba75-672b-4b81-8fe1-1971249797114.jpg\"],\"comments\":\"\"},{\"id\":\"la_adoption_visa_photo\",\"text\":\"Laos adoption visa 2x2 inch\",\"country\":\"Laos\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.laoembassy.com/ChildAdoptionApplicationUpdateJuly2013.pdf\"],\"comments\":\"\"},{\"id\":\"lb_visa_35x45mm_photo\",\"text\":\"Lebanon visa 3.5x4.5 cm (35x45 mm)\",\"country\":\"Lebanon\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"lb_passport_photo\",\"text\":\"Lebanon Passport 3.5x4.5 cm (35x45 mm)\",\"country\":\"Lebanon\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.general-security.gov.lb/ar/posts/182\",\"http://www.lebanonembassyus.org/images/picturesample-newpass.jpg\",\"http://www.emigrants.gov.lb/administrativeproceduresitemsd.aspx?CID=91&SCID=34&ID=253#.Wwv3pX2n9Sk\"],\"comments\":\"\"},{\"id\":\"lb_id_card_35x45mm_photo\",\"text\":\"Lebanon ID Card 3.5x4.5 cm (35x45 mm)\",\"country\":\"Lebanon\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"lb_residence_35x45mm_photo\",\"text\":\"Lebanon residence 3.5x4.5 cm (35x45 mm)\",\"country\":\"Lebanon\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.dawlati.gov.lb/eservices-detail/-/asset_publisher/0iNQGuDWXGZd/content/imu411-15\"],\"comments\":\"\"},{\"id\":\"lb_work_permit_35x45mm_photo\",\"text\":\"Lebanese work permit 3.5x4.5 cm (35x45 mm)\",\"country\":\"Lebanon\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ls_evisa_2x2inch_photo\",\"text\":\"Lesotho e-visa 2x2 inches\",\"country\":\"Lesotho\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://evisalesotho.com/photo-guidelines/\"],\"comments\":\"\"},{\"id\":\"lr_passport_photo\",\"text\":\"Liberia Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Liberia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ly_visa_4x6cm_photo\",\"text\":\"Libya visa 4x6 cm (40x60 mm)\",\"country\":\"Libya\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ly_passport_4x6cm_photo\",\"text\":\"Libya Passport 4x6 cm (40x60 mm)\",\"country\":\"Libya\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ly_id_card_4x6cm_photo\",\"text\":\"Libya ID Card 4x6 cm (40x60 mm)\",\"country\":\"Libya\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"lt_passport_35x45mm_photo\",\"text\":\"Lithuanian Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Lithuania\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://uk.mfa.lt/uk/en/travel-and-residence/consular-issues/lithuanian-passport\"],\"comments\":\"\"},{\"id\":\"mo_resident_identity_card_45x35mm_photo\",\"text\":\"Macau resident identity card (BIR) 45x35 mm\",\"country\":\"Macau\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.dsi.gov.mo/documents/photo_format_e.pdf\",\"https://www.gov.mo/en/services/ps-1065/ps-1065b/\"],\"comments\":\"\"},{\"id\":\"mo_passport_45x35mm_photo\",\"text\":\"Macau Passport 45x35 mm\",\"country\":\"Macau\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.dsi.gov.mo/passport_e.jsp\",\"http://www.dsi.gov.mo/documents/photo_format_e.pdf\"],\"comments\":\"\"},{\"id\":\"mo_visa_photo\",\"text\":\"Macau Visa 33x48 mm\",\"country\":\"Macau\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":33,\"pictureHeight\":48,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31.5,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[\"http://www.china-embassy.org/eng/visas/vephmsar/t943876.htm\",\"http://www.chinese-embassy.org.uk/eng/visa/qzxz/t1021831.htm\"],\"comments\":\"\"},{\"id\":\"mg_visa_35x45mm_photo\",\"text\":\"Madagascar visa 3.5x4.5 cm (35x45 mm)\",\"country\":\"Madagascar\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.botschaft-madagaskar.de/file/repository/visa/en/Tourisme.pdf\"],\"comments\":\"\"},{\"id\":\"mg_visa_5x5cm_photo\",\"text\":\"Madagascar visa 5x5 cm (50x50 mm)\",\"country\":\"Madagascar\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"bottomEyeLine\":28},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://madagascar-embassy.jp/_index.php/embassy/\"],\"comments\":\"\"},{\"id\":\"mg_visa_2x2inch_photo\",\"text\":\"Madagascar visa 2x2 inches\",\"country\":\"Madagascar\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.madagascar-embassy.org/wp-content/uploads/2017/04/Visa-form_042317.pdf\"],\"comments\":\"\"},{\"id\":\"mw_passport_45x35mm_photo\",\"text\":\"Malawi Passport 4.5x3.5 cm (45x35 mm)\",\"country\":\"Malawi\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.malawihighcommission.co.uk/index.php/immigration-and-consular\",\"http://www.malawiembassy-dc.org/page/malawi-passports\"],\"comments\":\"\"},{\"id\":\"my_evisa_photo\",\"text\":\"Malaysia eVisa online application 35x50 mm\",\"country\":\"Malaysia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":32.5,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.windowmalaysia.my/evisa/about.jsp?t=evs\"],\"comments\":\"When you upload our photo there, make sure that our image occupies exactly 100% of their edit box, i.e. outer borders of their edit box should coincide with the borders of our image. Also \\\"image output\\\" must be equal to \\\"current image\\\". Complete instructions are here: https://visafoto.com/en/malaysia_visa_online_photo Complete Malaysia e-visa photo upload instructions\"},{\"id\":\"my_passport_photo\",\"text\":\"Malaysia Passport 35x50 mm blue background\",\"country\":\"Malaysia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":29,\"crownTop\":10},\"backgroundColor\":\"#309eee\",\"printable\":true,\"officialLinks\":[\"http://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport.html\",\"http://passport.my/Passport-Application/Malaysia_Passport_Photos_Size.htm\"],\"comments\":\"\"},{\"id\":\"my_visa_35x50_photo\",\"text\":\"Malaysia Visa 35x50 mm blue background\",\"country\":\"Malaysia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":5},\"backgroundColor\":\"#309eee\",\"printable\":false,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"my_visa_35x50_white_photo\",\"text\":\"Malaysia Visa 35x50 mm white background\",\"country\":\"Malaysia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[\"http://www.vfsglobal.com/malaysia/india/wrf_photospecifications.html\"],\"comments\":\"\"},{\"id\":\"my_passport_white_photo\",\"text\":\"Malaysia Passport 35x50 mm white background\",\"country\":\"Malaysia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":29,\"crownTop\":10},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport.html\",\"http://passport.my/Passport-Application/Malaysia_Passport_Photos_Size.htm\"],\"comments\":\"\"},{\"id\":\"my_visa_photo\",\"text\":\"Malaysia Visa 35x45 mm blue background\",\"country\":\"Malaysia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31,\"crownTop\":5},\"backgroundColor\":\"#309eee\",\"printable\":false,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"my_visa_white_photo\",\"text\":\"Malaysia Visa 35x45 mm white background\",\"country\":\"Malaysia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[\"http://www.vfsglobal.com/malaysia/india/wrf_photospecifications.html\"],\"comments\":\"\"},{\"id\":\"my_emgs_online_photo\",\"text\":\"Malaysia EMGS educationmalaysia.gov.my online\",\"country\":\"Malaysia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":217,\"pictureHeight\":280,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":210,\"crownTop\":28},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://educationmalaysia.gov.my/how-to-apply/online-photo-checker.html/\"],\"comments\":\"The online photo checker at EMGS educationmalaysia.gov.my website is incorrect. In particular, it always gives \\\"The photo does not show skin colors accurately\\\" for all photos, even for those two photos that are given on their website as correct examples. So you can ignore the photochecker.\"},{\"id\":\"mv_passport_35x45mm_photo\",\"text\":\"Maldives Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Maldives\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.immigration.gov.mv/pages/passport.html\"],\"comments\":\"\"},{\"id\":\"mt_passport_40x30mm_photo\",\"text\":\"Malta Passport 40x30 mm (4x3 cm)\",\"country\":\"Malta\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://identitymalta.com/wp-content/uploads/2017/09/FORM-A.pdf\",\"https://identitymalta.com/passport-office/\"],\"comments\":\"\"},{\"id\":\"mt_passport_disabled_35x45mm_photo\",\"text\":\"Malta Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Malta\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://identitymalta.com/wp-content/uploads/2018/01/Form-B-Image-Capture-Form-2.pdf\"],\"comments\":\"This photo is suitable for Malta adults who are unable to attend Malta passport offices due to medical reasons\"},{\"id\":\"mr_visa_photo\",\"text\":\"Mauritania visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Mauritania\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"mr_passport_photo\",\"text\":\"Mauritania Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Mauritania\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"mr_id_card_photo\",\"text\":\"Mauritania ID Card 35x45 mm (3.5x4.5 cm)\",\"country\":\"Mauritania\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"mu_passport_35x45mm_photo\",\"text\":\"Mauritius Passport 35x45 mm (up to 40x50mm)\",\"country\":\"Mauritius\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://passport.govmu.org/English/Mauritius%20Passport/Pages/The-Standard-of-Passport-photo.aspx\"],\"comments\":\"\"},{\"id\":\"mx_visa_photo\",\"text\":\"Mexico visa 25x35mm (2.5x3.5cm or 1\\\"x1.2\\\")\",\"country\":\"Mexico\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":25,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":26,\"crownTop\":1.7},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"If you need a profile photo too, please send your profile source photo to us by email, we don't yet do it automatically. We charge an additional fee for this service (the same as for the full face photo).\"},{\"id\":\"mx_visa_permanent_residents_photo\",\"text\":\"Mexico permanent residents visa 31x39mm (3.1x3.9cm)\",\"country\":\"Mexico\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":31,\"pictureHeight\":39,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29,\"crownTop\":1.8},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://embamex.sre.gob.mx/canada_eng/index.php/consular-fees/5337-permanent-resident-visa-2012\"],\"comments\":\"\"},{\"id\":\"mx_visa_15x175_38x44_photo\",\"text\":\"Mexico visa 1.5x1.75″ (1.5 x 1 3/4 inches or 3.8x4.4cm)\",\"country\":\"Mexico\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":1.5,\"pictureHeight\":1.75,\"units\":\"inch\",\"dpi\":600,\"faceHeight\":1.3125,\"crownTop\":0.08},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://consulmex.sre.gob.mx/seattle/index.php/visas-requirements\"],\"comments\":\"\"},{\"id\":\"md_buletin_de_identitate_3x4cm_photo\",\"text\":\"Moldova ID Card (Buletin de identitate) 3x4 cm\",\"country\":\"Moldova\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.sua.mfa.md/national-cards-en/\"],\"comments\":\"\"},{\"id\":\"md_buletin_de_identitate_10x15cm_photo\",\"text\":\"Moldova ID Card (Buletin de identitate) 10x15 cm\",\"country\":\"Moldova\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":4,\"pictureHeight\":6,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":3.9,\"crownTop\":0.72},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.sua.mfa.md/national-cards-en/\"],\"comments\":\"\"},{\"id\":\"md_visa_35x45mm_photo\",\"text\":\"Moldova visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Moldova\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"md_dreptul_munca_sedere_50x60mm_photo\",\"text\":\"Moldova work and residence permit 50x60 mm (5x6 cm)\",\"country\":\"Moldova\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":36,\"crownTop\":10},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"bma.gov.md\",\"http://www.mfa.gov.md/right-work-reside/-\"],\"comments\":\"\"},{\"id\":\"mn_visa_3x4cm_photo\",\"text\":\"Mongolia visa 3x4 cm (30x40 mm)\",\"country\":\"Mongolia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://mongolianembassy.us/wp-content/uploads/2013/07/visa_application.pdf\",\"http://embassyofmongolia.co.uk/wp-content/uploads/2015/01/visa_application.pdf\",\"http://mongolianembassy.org.au/wp-content/uploads/2016/04/Visitor-visa.pdf\"],\"comments\":\"\"},{\"id\":\"mn_passport_35x45mm_photo\",\"text\":\"Mongolia Passport 3.5x4.5 cm (35x45 mm)\",\"country\":\"Mongolia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://mongolianembassy.us/passportorder/\",\"http://embassyofmongolia.co.uk/?p=210&lang=mn\",\"http://mongolianembassy.org.au/consular-servce/passport-avah/\"],\"comments\":\"\"},{\"id\":\"mn_citizenship_4x6cm_photo\",\"text\":\"Mongolia citizenship 4x6 cm (40x60 mm)\",\"country\":\"Mongolia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://immigration.gov.mn/en/?page_id=2281\"],\"comments\":\"\"},{\"id\":\"mn_residence_permit_3x4cm_photo\",\"text\":\"Mongolia residence permit 3x4 cm (30x40 mm)\",\"country\":\"Mongolia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://immigration.gov.mn/en/?page_id=2214\"],\"comments\":\"\"},{\"id\":\"ma_visa_35x45mm_photo\",\"text\":\"Morocco visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Morocco\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ma_passport_photo\",\"text\":\"Morocco Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Morocco\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.passeport.ma/Ar/NORMES%20POUR%20LES%20PHOTOGRAPHIES.pdf\",\"http://www.moroccanconsulate.com/pass.cfm\"],\"comments\":\"\"},{\"id\":\"ma_nid_photo\",\"text\":\"Morocco National ID Card 35x45 mm (3.5x4.5 cm)\",\"country\":\"Morocco\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.moroccanconsulate.com/nid.cfm\"],\"comments\":\"\"},{\"id\":\"ma_residence_35x45mm_photo\",\"text\":\"Morocco residence 35x45 mm (3.5x4.5 cm)\",\"country\":\"Morocco\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.service-public.ma/ar/web/guest/home\"],\"comments\":\"\"},{\"id\":\"mz_visa_35x45mm_photo\",\"text\":\"Mozambique visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Mozambique\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.embamoc.jp/english/visa/index.html\"],\"comments\":\"\"},{\"id\":\"mm_visa_photo\",\"text\":\"Myanmar (Burma) Visa 38x46 mm (3.8x4.6 cm)\",\"country\":\"Myanmar [Burma]\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":38,\"pictureHeight\":46,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":33,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://evisa.moip.gov.mm\"],\"comments\":\"Recently Myanmar changed their evisa website design and changed the photo preview box to square when you apply for a visa. So do not worry if your uploaded photo looks distorted - this is a bug of the Myanmar new website design. Your photo is still OK - a 38x46 mm photo as required and will be accepted.\"},{\"id\":\"mm_permanent_residence_15x2_photo\",\"text\":\"Myanmar Permanent Residence 1.5x2 inches\",\"country\":\"Myanmar [Burma]\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":1.5,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.1,\"crownTop\":0.4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.myanmarembassy.sg/pr-apply/\"],\"comments\":\"Permanent Residence of a Foreigner 1 ½ x 2 inches, with the head (measured from the top of the hair to the bottom of the chin) center in the frame; Background colour should be white or off white. Photographs taken in front of busy, patterned or dark backgrounds are not acceptable. The area of face should be covered about 50% of the area of the photograph. It is preferable that the ears be exposed. Head-coverings are acceptable only when the applicant’s face is completely exposed.\"},{\"id\":\"mm_visa_38x48_photo\",\"text\":\"Myanmar (Burma) Visa 38x48 mm (3.8x4.8 cm)\",\"country\":\"Myanmar [Burma]\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":38,\"pictureHeight\":48,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"crownTop\":4},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://evisa.moip.gov.mm/noticetotourists.aspx\"],\"comments\":\"\"},{\"id\":\"na_passport_37x52mm_photo\",\"text\":\"Namibia Passport 37x52mm (3.7x5.2 cm)\",\"country\":\"Namibia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":37,\"pictureHeight\":52,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":36.4,\"crownTop\":4.16},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"na_passport_2x2_inch_photo\",\"text\":\"Namibia Passport 2x2″ (51x51 mm)\",\"country\":\"Namibia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.embassyofnamibia.org.br/en/docs/applic_new_passport.pdf\"],\"comments\":\"\"},{\"id\":\"na_visa_37x52mm_photo\",\"text\":\"Namibia visa 37x52mm (3.7x5.2 cm)\",\"country\":\"Namibia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":37,\"pictureHeight\":52,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":36.4,\"crownTop\":4.16},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.embassyofnamibia.org.br/en/docs/visa_applic_tourists.pdf\"],\"comments\":\"\"},{\"id\":\"na_visa_35x45mm_photo\",\"text\":\"Namibia visa from Europe 35x45mm (3.5x4.5 cm)\",\"country\":\"Namibia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://consular.namibia-botschaft.de/touristholiday-visa/\"],\"comments\":\"\"},{\"id\":\"np_online_visa_15x15in_photo\",\"text\":\"Nepal online visa 1.5x1.5 inches\",\"country\":\"Nepal\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":1.5,\"pictureHeight\":1.5,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.08,\"crownTop\":0.09},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://online.nepalimmigration.gov.np/\"],\"comments\":\"\"},{\"id\":\"np_visa_2_photo\",\"text\":\"Nepal visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Nepal\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":32.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"np_visa_photo\",\"text\":\"Nepal visa 2x2″ (51x51 mm)\",\"country\":\"Nepal\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"np_passport_35x45_photo\",\"text\":\"Nepal Passport 35x45 mm\",\"country\":\"Nepal\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":32.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://ru.nepalembassy.gov.np/passport/\"],\"comments\":\"\"},{\"id\":\"np_nrn_id_25x30_photo\",\"text\":\"Nepal NRN ID Card 25x30 mm\",\"country\":\"Nepal\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":25,\"pictureHeight\":30,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":22.5,\"crownTop\":1.8},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://ru.nepalembassy.gov.np/nrn-id/\"],\"comments\":\"\"},{\"id\":\"nl_passport_photo\",\"text\":\"Netherlands Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Netherlands\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29,\"crownTop\":6.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.government.nl/binaries/government/documents/leaflets/2015/01/21/photomatrix-guidelines-2007/photomatrix-guidelines-2007.pdf\"],\"comments\":\"\"},{\"id\":\"nl_visa_photo\",\"text\":\"Netherlands Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Netherlands\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29,\"crownTop\":6.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://unitedkingdom.nlembassy.org/passports-visas--consular/visas\"],\"comments\":\"\"},{\"id\":\"nl_id_kaart_35x45mm_photo\",\"text\":\"Dutch ID Card 35x45 mm (3.5x4.5 cm)\",\"country\":\"Netherlands\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29,\"crownTop\":6.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.rijksoverheid.nl/onderwerpen/paspoort-en-identiteitskaart/eisen-pasfoto-paspoort-id-kaart\"],\"comments\":\"\"},{\"id\":\"nl_rijbewijs_35x45_photo\",\"text\":\"Dutch driving license 35x45 mm (3.5x4.5 cm)\",\"country\":\"Netherlands\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29,\"crownTop\":6.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.rijksoverheid.nl/onderwerpen/paspoort-en-identiteitskaart/eisen-pasfoto-paspoort-id-kaart\"],\"comments\":\"\"},{\"id\":\"nz_passport_el_photo\",\"text\":\"New Zealand Passport Online\",\"country\":\"New Zealand\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":1500,\"pictureHeight\":2000,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":1400,\"bottomEyeLine\":1080},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.passports.govt.nz/passport-photos/passport-photo-requirements/\"],\"comments\":\"On uploading the photo to the application make sure you have set language of your webbrowser or system to English NZ or US version, so the decimal number representation is 1.33 not 1,33 on your system. Photo that we create meets the specification in both size and weight in KB of the NZ Passport Office (provided that the source photo is good enough).\"},{\"id\":\"nz_visa_online_photo\",\"text\":\"New Zealand Visa online\",\"country\":\"New Zealand\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":1650,\"pictureHeight\":2200,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":1584,\"crownTop\":176},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/tools-and-information/acceptable-photos\"],\"comments\":\"On uploading the photo to the application make sure you have set language of your webbrowser or system to English NZ or US version, so the decimal number representation is 1.33 not 1,33 on your system.  Detailed instruction how to upload it\"},{\"id\":\"nz_passport_photo\",\"text\":\"New Zealand Passport Offline\",\"country\":\"New Zealand\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29.25,\"bottomEyeLine\":24.75},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"https://www.passports.govt.nz/passport-photos/passport-photo-requirements/\"],\"comments\":\"If you need to apply online, use https://visafoto.com/nz_passport_el_photo. This photo is only suitable for offline application. Photo ratio is 4:3.\"},{\"id\":\"nz_visa_photo\",\"text\":\"New Zealand Visa Offline\",\"country\":\"New Zealand\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29.25,\"bottomEyeLine\":24.75},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/tools-and-information/acceptable-photos\"],\"comments\":\"If you need to apply online, use \\\"New Zealand visa online\\\" instead at visafoto.com website. This photo is only suitable for offline application. Ratio is 4:3. Paper you print the photo on must be *glossy*, non-matte.\"},{\"id\":\"nz_firearms_licence_35x45mm_photo\",\"text\":\"New Zealand Firearms Licence 35x45 mm\",\"country\":\"New Zealand\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29.25,\"bottomEyeLine\":24.75},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"http://www.police.govt.nz/advice/firearms-and-safety/standard-new-zealand-firearms-licence\"],\"comments\":\"\"},{\"id\":\"nz_refugee_travel_document_35x45mm_photo\",\"text\":\"New Zealand Certificate of Identity / Refugee Travel Document 35x45 mm\",\"country\":\"New Zealand\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29.25,\"bottomEyeLine\":24.75},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"https://www.passports.govt.nz/assets/Uploads/Forms/COI-RTD-form.pdf\"],\"comments\":\"\"},{\"id\":\"nz_evidence_of_age_document_35x45mm_photo\",\"text\":\"New Zealand Evidence of Age Document 35x45 mm\",\"country\":\"New Zealand\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":29.25,\"bottomEyeLine\":24.75},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"http://www.18plus.org.nz/\"],\"comments\":\"\"},{\"id\":\"ne_visa_2x2inch_photo\",\"text\":\"Niger visa 2x2 inches (from USA)\",\"country\":\"Niger\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.embassyofniger.org/about-us/demande-de-visa/#1499385743927-e54285c0-3f86\"],\"comments\":\"\"},{\"id\":\"ng_visa_35x45mm_photo\",\"text\":\"Nigeria visa 3.5x4.5 cm (35x45 mm)\",\"country\":\"Nigeria\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"www.nigerianembassy.ru/index.php/consular-immigration/visa-application.html\"],\"comments\":\"\"},{\"id\":\"no_passport_photo\",\"text\":\"Norway Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Norway\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.udi.no/Norwegian-Directorate-of-Immigration/Oversiktsider/Common-pages/Photo-requirements/\"],\"comments\":\"\"},{\"id\":\"no_visa_photo\",\"text\":\"Norway Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Norway\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.norwayvisa-russia.com/murmansk/english/d_visa_entry_visa.html_photospecs.html\"],\"comments\":\"\"},{\"id\":\"om_passport_4x6cm_photo\",\"text\":\"Oman Passport 4x6 cm (40x60 mm)\",\"country\":\"Oman\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#309eff\",\"printable\":true,\"officialLinks\":[\"http://www.oman.om/wps/wcm/connect/ar/site/home/cr/cr7is/cr71/omanpassissue\"],\"comments\":\"\"},{\"id\":\"om_visa_4x6cm_photo\",\"text\":\"Oman visa 4x6 cm (40x60 mm)\",\"country\":\"Oman\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#309eff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"om_id_card_4x6cm_photo\",\"text\":\"Oman ID Card 4x6 cm (40x60 mm)\",\"country\":\"Oman\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#309eff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"om_residence_4x6cm_photo\",\"text\":\"Oman residence 4x6 cm (40x60 mm)\",\"country\":\"Oman\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#309eff\",\"printable\":true,\"officialLinks\":[\"http://www.oman.om/wps/wcm/connect/ar/site/home/cr/cr7is/cr72/residencecard\"],\"comments\":\"\"},{\"id\":\"om_work_permit_4x6cm_photo\",\"text\":\"Oman work permit 4x6 cm (40x60 mm)\",\"country\":\"Oman\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#309eff\",\"printable\":true,\"officialLinks\":[\"http://www.rop.gov.om/arabic/dg_pr_visas_employment.html\"],\"comments\":\"\"},{\"id\":\"pk_id_nadra_babies_photo\",\"text\":\"Pakistan Babies NADRA ID Card 35x45 mm\",\"country\":\"Pakistan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":27,\"bottomEyeLine\":23.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://id.nadra.gov.pk/photo-requirements/\"],\"comments\":\"This photo type is designed for babies only, for adults use our regular NADRA id card photo at https://visafoto.com/pk_id_card Detailed Pakistan ID card photo submission instructions\"},{\"id\":\"pk_id_card_photo\",\"text\":\"Pakistan National ID card (NADRA, NICOP) 35x45 mm\",\"country\":\"Pakistan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":3.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://id.nadra.gov.pk/photo-requirements/\"],\"comments\":\"Detailed Pakistan ID card photo submission instructions\"},{\"id\":\"pk_id_card_2_photo\",\"text\":\"Pakistan NADRA 2\",\"country\":\"Pakistan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"bottomEyeLine\":26},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Detailed Pakistan ID card photo submission instructions\"},{\"id\":\"pk_id_card_3_photo\",\"text\":\"Pakistan NADRA 3\",\"country\":\"Pakistan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":23,\"bottomEyeLine\":27},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Detailed Pakistan ID card photo submission instructions\"},{\"id\":\"pk_origin_card_photo\",\"text\":\"Pakistan Origin Card (NADRA) 35x45 mm\",\"country\":\"Pakistan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":3.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://id.nadra.gov.pk/photo-requirements/\"],\"comments\":\"\"},{\"id\":\"pk_family_registration_certificate_photo\",\"text\":\"Pakistan Family Registration Certificate (NADRA) 35x45 mm\",\"country\":\"Pakistan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":3.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://id.nadra.gov.pk/photo-requirements/\"],\"comments\":\"\"},{\"id\":\"pk_visa_photo\",\"text\":\"Pakistan visa 35x45 mm\",\"country\":\"Pakistan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34,\"crownTop\":3.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.mofa.gov.pk/iraq/documents/VisaForm.pdf\"],\"comments\":\"\"},{\"id\":\"pk_visa_2x2_photo\",\"text\":\"Pakistan visa 2x2″ (from USA)\",\"country\":\"Pakistan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.pakconsulatela.org/tourist-visa/\"],\"comments\":\"\"},{\"id\":\"ps_passport_35x45mm_photo\",\"text\":\"Palestine Passport 35x45mm blue background\",\"country\":\"Palestinian Territories\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#3dabf8\",\"printable\":true,\"officialLinks\":[\"http://www.wafainfo.ps/atemplate.aspx?id=2287\"],\"comments\":\"\"},{\"id\":\"ps_visa_3x4cm_photo\",\"text\":\"Palestine visa 30x40mm (3x4 cm)\",\"country\":\"Palestinian Territories\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ps_id_card_35x45mm_photo\",\"text\":\"Palestine ID Card 35x45mm blue background\",\"country\":\"Palestinian Territories\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#3dabf8\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"pg_passport_35x45mm_photo\",\"text\":\"Papua New Guinea Passport 35x45mm (3.5x4.5 cm)\",\"country\":\"Papua New Guinea\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.immigration.gov.pg/passport.html\"],\"comments\":\"\"},{\"id\":\"pg_citizenship_35x45mm_photo\",\"text\":\"Papua New Guinea citizenship 35x45mm (3.5x4.5 cm)\",\"country\":\"Papua New Guinea\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.immigration.gov.pg/images/documents/Dual_Citizenship/C2%20-%20Request%20for%20resumption%20of%20citizenship%20-%20%20v1.1%20-%20fillable.pdf\",\"https://www.immigration.gov.pg/images/documents/Dual_Citizenship/C3%20-%20Request%20for%20citizenship%20by%20naturalisation%20sportsperson%20-%20%20v1.1%20-%20fillable.pdf\"],\"comments\":\"\"},{\"id\":\"ph_visa_2x2inches_photo\",\"text\":\"Philippines visa 2x2 inch\",\"country\":\"Philippines\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://riyadhpe.dfa.gov.ph/consular-services/visa-services\",\"http://www.philippineembassy-usa.org/philippines-dc/consular-services-dc/faq-dc/\"],\"comments\":\"Photos of the same size 2x2\\\" are also used in the Philippines consulate in the US for: travel document, temporary visitor visa, derivative citizenship, reacquisition of Philippine citizenship and dual citizenship, seamen, foreign government officials, special non-immigrant 47(A) visa, certificate of Not the Same Person, National Bureau of Investigation (NBI) clearance (www.nbi.gov.ph), and other applications.\"},{\"id\":\"ph_rush_id_photo\",\"text\":\"Philippines RUSH ID photo 1x1 inch\",\"country\":\"Philippines\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":1,\"pictureHeight\":1,\"units\":\"inch\",\"dpi\":600,\"faceHeight\":0.65,\"crownTop\":0.1},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ph_1x1_photo\",\"text\":\"Philippines license 1x1″ photo\",\"country\":\"Philippines\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":1,\"pictureHeight\":1,\"units\":\"inch\",\"dpi\":600,\"faceHeight\":0.65,\"crownTop\":0.1},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Can be used for REE, PEE, RME license, Professional Regulation Commission (PRC), real estate practitioners (agents, brokers, appraisers, consultants), massage therapy license as well as for many others.\"},{\"id\":\"ph_passport_45x35mm_photo\",\"text\":\"Philippines Machine Readable Passport 4.5x3.5 cm (45x35mm)\",\"country\":\"Philippines\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33.3,\"crownTop\":5},\"backgroundColor\":\"#309eee\",\"printable\":true,\"officialLinks\":[\"http://www.philippine-embassy.de/bln/images/ConsularSection/PassportServices/pdf/info%20bulletin%20on%20the%20implementation%20of%20mrp-22%20dec%2008.pdf\"],\"comments\":\"Matte paper is preferred. Background color: royal blue\"},{\"id\":\"ph_visa_35x45mm_photo\",\"text\":\"Philippines visa 35x45 mm\",\"country\":\"Philippines\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.moscowpe.dfa.gov.ph/2014-04-15-07-22-03/2014-04-25-05-48-13\",\"http://www.philembassy.no/consular-services/visa\"],\"comments\":\"\"},{\"id\":\"ph_cir_25x25mm_photo\",\"text\":\"Philippines Certificate of Identity and Registration (CIR) card 2.5x2.5 cm (25x25mm)\",\"country\":\"Philippines\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":25,\"pictureHeight\":25,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":17,\"bottomEyeLine\":14},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.philippine-embassy.de/bln/images/ConsularSection/PassportServices/pdf/infosheet.general.passport.pdf\"],\"comments\":\"\"},{\"id\":\"ph_acknowledgement_of_employment_contracts_3x4cm_photo\",\"text\":\"Acknowledgement of employment contracts 3x4 cm\",\"country\":\"Philippines\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.moscowpe.dfa.gov.ph/images/pdf/ackcontractform.pdf\"],\"comments\":\"Application for Acknowledgement of employment contracts of Filipino household / skilled workers\"},{\"id\":\"pl_passport_photo\",\"text\":\"Poland Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Poland\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.paszporty.mswia.gov.pl/portal/content/pdf/plakat_nowe_zdjecia_do_paszportu.pdf\"],\"comments\":\"\"},{\"id\":\"pl_dowod_osobisty_492x633_photo\",\"text\":\"Poland ID Card online 492x633 pixels\",\"country\":\"Poland\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":492,\"pictureHeight\":633,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":481.08,\"crownTop\":42.411},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://obywatel.gov.pl/dokumenty-i-dane-osobowe/zdjecie-do-dowodu-lub-paszportu\"],\"comments\":\"\"},{\"id\":\"pl_dowod_osobisty_35x45mm_photo\",\"text\":\"Poland ID Card 35x45 mm (3.5x4.5 cm)\",\"country\":\"Poland\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"https://obywatel.gov.pl/dokumenty-i-dane-osobowe/zdjecie-do-dowodu-lub-paszportu\"],\"comments\":\"\"},{\"id\":\"pl_visa_photo\",\"text\":\"Poland Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Poland\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.msz.gov.pl/en/travel_to_poland/visa/\"],\"comments\":\"\"},{\"id\":\"pr_bilhete_de_identidade_32x32mm_photo\",\"text\":\"Portuguese ID Card 32x32 mm\",\"country\":\"Portugal\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":32,\"pictureHeight\":32,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":22.72,\"crownTop\":2.56},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.portaldocidadao.pt/web/direcao-geral-dos-assuntos-consulares-e-das-comunidades-portuguesas/bilhete-de-identidade-para-cidadao-portugues-residente-no-estrangeiro-renovacao\"],\"comments\":\"\"},{\"id\":\"pt_passport_photo\",\"text\":\"Portugal Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Portugal\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"\"],\"comments\":\"\"},{\"id\":\"pt_visa_photo\",\"text\":\"Portugal Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Portugal\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.embassyportugal-us.org/Embassy_of_Portugal/Visa_Info_for_Schengen_States.html\"],\"comments\":\"\"},{\"id\":\"pr_cartao_de_cidadao_3x4cm_photo\",\"text\":\"Portuguese citizen card 3x4 cm\",\"country\":\"Portugal\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://consuladoportugalsp.org.br/cartao-do-cidadao-urgente-2/\"],\"comments\":\"\"},{\"id\":\"pt_visa_id_photo\",\"text\":\"Portugal Visa (in Indonesia and Philippines) 30x40 mm (3x4 cm)\",\"country\":\"Portugal\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.embassyportugaljakarta.or.id/v2/?p=215&lang=en\"],\"comments\":\"\"},{\"id\":\"qa_visa_38x48mm_photo\",\"text\":\"Qatar visa 38x48 mm (3.8x4.8 cm)\",\"country\":\"Qatar\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":38,\"pictureHeight\":48,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"crownTop\":4},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"qa_passport_2x2in_photo\",\"text\":\"Qatar Passport 2x2 inches (51x51 mm)\",\"country\":\"Qatar\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"qa_passport_38x48mm_photo\",\"text\":\"Qatar Passport 38x48 mm (3.8x4.8 cm)\",\"country\":\"Qatar\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":38,\"pictureHeight\":48,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"crownTop\":4},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"qa_id_card_38x48mm_photo\",\"text\":\"Qatar ID Card 38x48 mm (3.8x4.8 cm)\",\"country\":\"Qatar\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":38,\"pictureHeight\":48,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"crownTop\":4},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ro_cartea_de_identitate_3x4cm_photo\",\"text\":\"Romania ID Card 3x4 cm (30x40 mm)\",\"country\":\"Romania\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://washington.mae.ro/node/477\"],\"comments\":\"\"},{\"id\":\"ro_visa_photo\",\"text\":\"Romania Visa 30x40 mm (3x4 cm)\",\"country\":\"Romania\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mae.ro/en/node/2051\",\"http://www.mae.ro/sites/default/files/file/mae_old/poze_editare/2008.11.14_Formular_Viza_ABC.pdf\"],\"comments\":\"\"},{\"id\":\"ru_passport_int_photo\",\"text\":\"Russia International Passport Gosuslugi.ru, 35x45 mm\",\"country\":\"Russia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"faceHeight\":33,\"units\":\"mm\",\"dpi\":600,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://gosuslugi.ru\"],\"comments\":\"Внимание: У Госуслуг сейчас некорректная линия верха головы в окне \\\"Обрезка фотографии\\\". Вам нужно сразу нажать на кнопку Сохранить под фото. Не изменяйте наше фото (не масштабируйте и не обрезайте). Если у вас ошибки \\\"Произошла ошибка при обработке запроса проверки фото\\\" или \\\"Ошибка обработки вложения. Не удалось проверить вложение на целостность.\\\", то это ошибка сайта Госуслуг, а не проблема с вашей фотографией. В этом случае вам надо выйти из сайта и почистить куки и историю в вашем браузере, затем вернуться на Госуслуги и продолжить загрузку фото. Или используйте другой браузер или устройство.\"},{\"id\":\"ru_passport_int2_photo\",\"text\":\"Russia International Passport offline, 35x45 mm\",\"country\":\"Russia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ru_passport_photo\",\"text\":\"Russia Internal Passport, 35x45 mm (3.5x4.5 cm)\",\"country\":\"Russia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35.1,\"crownTop\":4.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.rg.ru/2011/08/22/pasport-dok.html\",\"http://base.consultant.ru/cons/cgi/online.cgi?req=doc;base=LAW;n=147066;div=LAW;dst=100220\"],\"comments\":\"Внимание: (*) в МФЦ сейчас требуют фото с 80% высотой головы на паспорт РФ, поэтому мы делаем голову 78% (в офиц требованиях от 70 до 80%), для этого мы сверху оставляем зазор 4,5, а не 5 мм. (*) У Госуслуг сейчас некорректная линия верха головы в окне \\\"Обрезка фотографии\\\". Вам нужно сразу нажать на кнопку Сохранить под фото. Не изменяйте наше фото (не масштабируйте и не обрезайте). Если у вас ошибки \\\"Произошла ошибка при обработке запроса проверки фото\\\" или \\\"Ошибка обработки вложения. Не удалось проверить вложение на целостность.\\\", то это ошибка сайта Госуслуг, а не проблема с вашей фотографией. В этом случае вам надо выйти из сайта и почистить куки и историю в вашем браузере, затем вернуться на Госуслуги и продолжить загрузку фото. Или используйте другой браузер или устройство.\"},{\"id\":\"ru_passport_gosuslugi_photo\",\"text\":\"Russia internal Passport for Gosuslugi, 35x45 mm\",\"country\":\"Russia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35.1,\"crownTop\":4.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.rg.ru/2011/08/22/pasport-dok.html\",\"http://base.consultant.ru/cons/cgi/online.cgi?req=doc;base=LAW;n=147066;div=LAW;dst=100220\",\"http://gosuslugi.ru\"],\"comments\":\"Внимание: (*) в МФЦ сейчас требуют фото с 80% высотой головы на паспорт РФ, поэтому мы делаем голову 78% (в офиц требованиях от 70 до 80%), для этого мы сверху оставляем зазор 4,5, а не 5 мм. (*) У Госуслуг сейчас некорректная линия верха головы в окне \\\"Обрезка фотографии\\\". Вам нужно сразу нажать на кнопку Сохранить под фото. Не изменяйте наше фото (не масштабируйте и не обрезайте). Если у вас ошибки \\\"Произошла ошибка при обработке запроса проверки фото\\\" или \\\"Ошибка обработки вложения. Не удалось проверить вложение на целостность.\\\", то это ошибка сайта Госуслуг, а не проблема с вашей фотографией. В этом случае вам надо выйти из сайта и почистить куки и историю в вашем браузере, затем вернуться на Госуслуги и продолжить загрузку фото. Или используйте другой браузер или устройство.\"},{\"id\":\"ru_passport_head12mm_photo\",\"text\":\"Russia Passport (eyes to bottom of chin 12 mm), 35x45 mm\",\"country\":\"Russia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"faceHeight\":28,\"units\":\"mm\",\"dpi\":600,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.rg.ru/2011/08/22/pasport-dok.html\",\"http://base.consultant.ru/cons/cgi/online.cgi?req=doc;base=LAW;n=147066;div=LAW;dst=100220\",\"http://gosuslugi.ru\"],\"comments\":\"Если у вас ошибки \\\"Произошла ошибка при обработке запроса проверки фото\\\" или \\\"Ошибка обработки вложения. Не удалось проверить вложение на целостность.\\\", то это ошибка сайта Госуслуг, а не проблема с вашей фотографией. В этом случае вам надо выйти из сайта и почистить куки и историю в вашем браузере, затем вернуться на Госуслуги и продолжить загрузку фото. Или используйте другой браузер или устройство.\"},{\"id\":\"ru_pension_photo\",\"text\":\"Russia Pensioner ID 3x4\",\"country\":\"Russia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ru_driving_gosuslugi_photo\",\"text\":\"Russia Driving License Gosuslugi 245x350 px\",\"country\":\"Russia\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":245,\"pictureHeight\":350,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":235,\"crownTop\":13},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ru_army_photo\",\"text\":\"Russia Army ID 3x4\",\"country\":\"Russia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ru_work_photo\",\"text\":\"Russia Work Permit 3x4\",\"country\":\"Russia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ru_medical_photo\",\"text\":\"Russia Medical Book 3x4\",\"country\":\"Russia\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ru_temp_resid_photo\",\"text\":\"Russia Temporary Residence 3x4\",\"country\":\"Russia\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ru_student_photo\",\"text\":\"Russia Student ID 3x4\",\"country\":\"Russia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ru_student_25x35_photo\",\"text\":\"Russia Student ID 25x35 mm (2.5x3.5 cm)\",\"country\":\"Russia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":25,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":27.5,\"crownTop\":2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ru_visa_photo\",\"text\":\"Russia Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Russia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://visa.kdmid.ru/PetitionChoice.aspx\",\"http://www.rusembassy.ca/node/57\"],\"comments\":\"\"},{\"id\":\"ru_evisa_photo\",\"text\":\"Russia evisa 450x600 pixels Vladivostok and Far East\",\"country\":\"Russia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":450,\"pictureHeight\":600,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":450,\"crownTop\":42},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://evisa.kdmid.ru/\"],\"comments\":\"An e-visa is only valid for entry via Russian Far East entry points: Vladivostok, Zarubino, Petropavlovsk-Kamchatsky, Korsakov, Posiet, Pogranichny, Khasan, Makhalino, Poltavka, Turiy Rog. It is valid only for citizens of China, Japan, North Korea, Singapore, India, Mexico, Turkey and some other countries listed on https://evisa.kdmid.ru/ . Max size in pixels is 900x1200\"},{\"id\":\"ru_visa_vfs_35x45mm_photo\",\"text\":\"Russia visa via VFSGlobal 35x45 mm\",\"country\":\"Russia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"If you are not applying via VFSGlobal, then use a standard Russian visa photo here: https://visafoto.com/ru_visa_photo\"},{\"id\":\"ru_okhotnichiy_bilet_3x4cm_photo\",\"text\":\"Russia Hunting License 3x4 cm\",\"country\":\"Russia\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ru_krasnoyarsk_2019_photo\",\"text\":\"Krasnoyarsk 2019 Universiade 3x4 cm\",\"country\":\"Russia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://my.volunteers.krsk2019.ru/\"],\"comments\":\"\"},{\"id\":\"rw_visa_eastern_africa_online_photo\",\"text\":\"Rwanda East Africa Tourist Visa online\",\"country\":\"Rwanda\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":500,\"pictureHeight\":500,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":322.5,\"bottomEyeLine\":295},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://irembo.gov.rw/rolDGIE/visa_v1/Visa_v1.xhtml?vspte=T12&&lang=en\"],\"comments\":\"\"},{\"id\":\"rw_visa_eastern_africa_photo\",\"text\":\"Eastern Africa visa photo 2x2″ (Rwanda) (51x51 mm, 5x5 cm)\",\"country\":\"Rwanda\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"kn_passport_photo\",\"text\":\"Saint Kitts and Nevis Passport photo 35x45 mm (1.77x1.38 inch)\",\"country\":\"Saint Kitts and Nevis\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ws_visa_45x35mm_photo\",\"text\":\"Samoa visa 45x35 mm (4.5x3.5 cm)\",\"country\":\"Samoa\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.samoa.org.nz/index.php?page=visa\"],\"comments\":\"\"},{\"id\":\"ws_passport_45x35mm_photo\",\"text\":\"Samoa Passport 45x35 mm (4.5x3.5 cm)\",\"country\":\"Samoa\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.samoa.org.nz/pdfs/2017_PASSPORT_FORM.pdf\"],\"comments\":\"The person who certifies your identity in Section B (pg 2) of the form must endorse the back of one Passport photo saying. “This is a true likeness of (applicant’s name)”\"},{\"id\":\"sa_passport_4x6cm_photo\",\"text\":\"Saudi Arabia Passport 4x6 cm\",\"country\":\"Saudi Arabia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[\"http://www.gdp.gov.sa/sites/pgd/ar-sa/procedures/saudiprocedures/newsaudipassport/pages/default.aspx\"],\"comments\":\"\"},{\"id\":\"sa_evisa_200x200px_photo\",\"text\":\"Saudi Arabia e-visa online 200x200 pixels\",\"country\":\"Saudi Arabia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":200,\"pictureHeight\":200,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":140,\"crownTop\":14},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://enjazit.com.sa\"],\"comments\":\"\"},{\"id\":\"sa_visa_2x2in_photo\",\"text\":\"Saudi Arabia visa 2x2 inches (51x51 mm)\",\"country\":\"Saudi Arabia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"sa_id_card_4x6cm_photo\",\"text\":\"Saudi Arabia ID Card 4x6 cm\",\"country\":\"Saudi Arabia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"sa_work_permit_4x6cm_photo\",\"text\":\"Saudi Arabia work permit 4x6 cm\",\"country\":\"Saudi Arabia\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[\"http://ar.jobera.com/saudi-arabia/saudi-work-permit.html\"],\"comments\":\"\"},{\"id\":\"rs_visa_photo\",\"text\":\"Serbia Visa 35x45mm (3.5x4.5 cm)\",\"country\":\"Serbia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mfa.gov.rs/en/consular-affairs/entry-serbia/visa-requirements\"],\"comments\":\"\"},{\"id\":\"sc_passport_35x45mm_photo\",\"text\":\"Seychelles Passport 35x45 mm (up to 45x50 mm)\",\"country\":\"Seychelles\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.ics.gov.sc/seychelles-passport\"],\"comments\":\"\"},{\"id\":\"sl_visa_35x45mm_photo\",\"text\":\"Sierra Leone visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Sierra Leone\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"sg_visa_online_photo\",\"text\":\"Singapore visa online 400x514 px\",\"country\":\"Singapore\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":400,\"pictureHeight\":514,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":380.36,\"crownTop\":46.26},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Detailed Singapore visa photo submission instructions\"},{\"id\":\"sg_passport_online_photo\",\"text\":\"Singapore Passport online 400x514 px\",\"country\":\"Singapore\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":400,\"pictureHeight\":514,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":380.36,\"crownTop\":46.26},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://apples.ica.gov.sg/apples/index.xhtml\"],\"comments\":\"\"},{\"id\":\"sg_passport_offline_photo\",\"text\":\"Singapore Passport offline 35x45 mm (3.5x4.5 cm)\",\"country\":\"Singapore\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33.3,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[\"https://www.ica.gov.sg/common/passport_photo_guidelines\",\"http://www.ica.gov.sg/page.aspx?pageid=123\"],\"comments\":\"\"},{\"id\":\"sg_visa_photo\",\"text\":\"Singapore visa offline 35x45 mm (3.5x4.5 cm)\",\"country\":\"Singapore\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33.3,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":false,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"sk_id_card_30x35_photo\",\"text\":\"Slovakia ID Card 30x35 mm (3x3.5 cm)\",\"country\":\"Slovakia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":2},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mzv.sk/App/WCM/media.nsf/vw_ByID/ID_3EB918D220FC4815C1257687003D2344_EN/$File/Registration_Form.rtf\"],\"comments\":\"\"},{\"id\":\"sk_visa_photo\",\"text\":\"Slovakia Visa 30x35 mm (3x3.5 cm)\",\"country\":\"Slovakia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":35,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":25,\"crownTop\":2},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mzv.sk/en/consular_info/visa\"],\"comments\":\"\"},{\"id\":\"so_visa_35x45mm_photo\",\"text\":\"Somalia visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Somalia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"so_id_card_photo\",\"text\":\"Somalia ID Card 4x6 cm\",\"country\":\"Somalia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"za_passport_photo\",\"text\":\"South Africa Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"South Africa\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.dha.gov.za/index.php/travel-documents2\",\"http://www.southafrica-canada.ca/Consular/passport-application.htm\"],\"comments\":\"\"},{\"id\":\"za_visa_photo\",\"text\":\"South Africa Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"South Africa\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.vfsglobal.com/southafrica/india/hoilday_documentsrequired.html\"],\"comments\":\"\"},{\"id\":\"kr_visa_photo\",\"text\":\"South Korea Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"South Korea\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.koreanconsulate.on.ca/en/?mnu=a02b03\"],\"comments\":\"\"},{\"id\":\"kr_passport_35x45mm_photo\",\"text\":\"South Korea Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"South Korea\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.passport.go.kr/img/download/document_1.pdf\",\"http://www.passport.go.kr/issue/document.php\"],\"comments\":\"\"},{\"id\":\"kr_alien_registration_card_3x4_photo\",\"text\":\"South Korea Alien Registration 3x4 cm (30x40 mm)\",\"country\":\"South Korea\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31.2,\"crownTop\":2.8},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.immigration.go.kr/HP/IMM80/imm_04/imm_0405/imm_405010.jsp\"],\"comments\":\"\"},{\"id\":\"es_dni_32x26mm_photo\",\"text\":\"Spain DNI (ID card) 32x26 mm\",\"country\":\"Spain\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":26,\"pictureHeight\":32,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":23.5,\"crownTop\":2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.interior.gob.es/web/servicios-al-ciudadano/dni/documentacion-necesaria-para-su-tramitacion\",\"https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_420&id_menu=[7]\"],\"comments\":\"Documento Nacional de Identidad (DNI) / ID card. Recent photo, 32 by 26 mm, face camera directly, with full face in view, in color, white plain background. With the head completely uncovered and without dark glasses or any other garment that may prevent or make identification of the person difficult.\"},{\"id\":\"es_passport_32x26mm_photo\",\"text\":\"Spain Passport 32x26 mm\",\"country\":\"Spain\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":26,\"pictureHeight\":32,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":23.5,\"crownTop\":2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Recent photo, 32 by 26 mm, face camera directly, with full face in view, in color, white plain background. With the head completely uncovered and without dark glasses or any other garment that may prevent or make identification of the person difficult.\"},{\"id\":\"es_permiso_de_conduccion_32x26mm_photo\",\"text\":\"Spain driving license 32x26 mm\",\"country\":\"Spain\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":26,\"pictureHeight\":32,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":23.5,\"crownTop\":2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://sede.dgt.gob.es/es/\"],\"comments\":\"Recent photo, 32 by 26 mm, face camera directly, with full face in view, in color, white plain background. With the head completely uncovered and without dark glasses or any other garment that may prevent or make identification of the person difficult.\"},{\"id\":\"es_tie_32x26mm_photo\",\"text\":\"Spain TIE card (foreigner ID) 32x26 mm\",\"country\":\"Spain\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":26,\"pictureHeight\":32,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":23.5,\"crownTop\":2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://extranjeros.empleo.gob.es/es/InformacionInteres/InformacionProcedimientos/Ciudadanosnocomunitarios/hoja092/\"],\"comments\":\"TIE / Tarjeta de identidad de extranjero / Foreigner identification card. Recent photo, 32 by 26 mm, face camera directly, with full face in view, in color, white plain background. With the head completely uncovered and without dark glasses or any other garment that may prevent or make identification of the person difficult.\"},{\"id\":\"es_nie_32x26mm_photo\",\"text\":\"Spain NIE card 32x26 mm\",\"country\":\"Spain\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":26,\"pictureHeight\":32,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":23.5,\"crownTop\":2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"NIE, foreigner tax ID / número de identidad de extranjero / tarjeta de residencia / residence card. Recent photo, 32 by 26 mm, face camera directly, with full face in view, in color, white plain background. With the head completely uncovered and without dark glasses or any other garment that may prevent or make identification of the person difficult.\"},{\"id\":\"es_tarjeta_de_armas_32x26mm_photo\",\"text\":\"Spain gun license 32x26 mm\",\"country\":\"Spain\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":26,\"pictureHeight\":32,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":23.5,\"crownTop\":2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.interior.gob.es/web/servicios-al-ciudadano/seguridad/armas-y-explosivos/documentacion-de-la-titularidad-de-armas\"],\"comments\":\"\"},{\"id\":\"es_passport_40x53mm_photo\",\"text\":\"Spain Passport 40x53 mm\",\"country\":\"Spain\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":53,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":27,\"crownTop\":15},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.exteriores.gob.es/Embajadas/BERLIN/es/Embajada/ServiciosConsulares/Documents/FOTOS%20PASAPORTE.pdf\"],\"comments\":\"\"},{\"id\":\"es_visa_photo\",\"text\":\"Spain Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Spain\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.exteriores.gob.es/Consulados/LOSANGELES/es/InformacionParaExtranjeros/Documents/Especificaciones%20foto%20visado.pdf\"],\"comments\":\"\"},{\"id\":\"es_visa_us_photo\",\"text\":\"Spain Visa 2x2″ (US Chicago consulate)\",\"country\":\"Spain\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.exteriores.gob.es/Consulados/LOSANGELES/es/InformacionParaExtranjeros/Documents/Especificaciones%20foto%20visado.pdf\"],\"comments\":\"\"},{\"id\":\"lk_visa_35x45mm_photo\",\"text\":\"Sri Lanka visa 3.5x4.5 cm (35x45 mm)\",\"country\":\"Sri Lanka\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.srilankaembassy.ru/en/consular-section/for-russian-citizens/visa/tourist-visit-visa\",\"http://www.srilankaembassy.ru/images/Consular/Visa_Form.pdf\"],\"comments\":\"\"},{\"id\":\"lk_passport_35x45mm_photo\",\"text\":\"Sri Lanka Passport 3.5x4.5 cm (35x45 mm)\",\"country\":\"Sri Lanka\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://srilankahc.uk/wpnew/consular/new-passport/\",\"http://slembassyusa.org/consular/application-for-a-new-passport/\",\"http://www.stockholm.embassy.gov.lk/npp.html\",\"http://www.srilankaembassy.ru/en/consular-section/for-sri-lankan-citizens/passports/applying-for-new-passport\",\"http://www.slembassyjapan.org/new_passport\"],\"comments\":\"\"},{\"id\":\"lk_id_card_35x45mm_photo\",\"text\":\"Sri Lanka ID Card 35x45 mm (3.5x4.5 cm) blue background\",\"country\":\"Sri Lanka\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#96b9ef\",\"printable\":true,\"officialLinks\":[\"http://www.drp.gov.lk/Templates/Artical%20-%20English%20how%20to%20take%20photos.html\"],\"comments\":\"\"},{\"id\":\"lk_dual_citizenship_35x45mm_photo\",\"text\":\"Sri Lanka dual citizenship 3.5x4.5 cm (35x45 mm)\",\"country\":\"Sri Lanka\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://srilankahc.uk/wpnew/dual-citizenship/\",\"http://stockholm.embassy.gov.lk/images/dual_application.pdf\"],\"comments\":\"\"},{\"id\":\"lk_driving_licence_35x45mm_photo\",\"text\":\"Sri Lanka driving licence 3.5x4.5 cm (35x45 mm)\",\"country\":\"Sri Lanka\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://slembassyusa.org/consular/issuance-of-driving-license-for-sri-lankans-living-abroad/\"],\"comments\":\"\"},{\"id\":\"sd_passport_4x5cm_photo\",\"text\":\"Sudan Passport 40x50 mm (4x5 cm)\",\"country\":\"Sudan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Women must wear Islamic hijab on the photo.\"},{\"id\":\"sd_id_card_4x5cm_photo\",\"text\":\"Sudan ID Card 40x50 mm (4x5 cm)\",\"country\":\"Sudan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"sd_visa_4x5cm_photo\",\"text\":\"Sudan visa 40x50 mm (4x5 cm)\",\"country\":\"Sudan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"crownTop\":5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Women from Islamic countries should wear hijab on the photo.\"},{\"id\":\"sr_visa_online_photo\",\"text\":\"Suriname visa online\",\"country\":\"Suriname\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://scgmia.com/consular-services/visa-application-form-aanvraag-visa/\"],\"comments\":\"\"},{\"id\":\"sr_passport_45x35mm_photo\",\"text\":\"Suriname Passport 45x35 mm (1.77x1.37 inch)\",\"country\":\"Suriname\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://scgmia.com/consular-services/passports/photo-instructions/\"],\"comments\":\"Though the requirements say 'Maximum Length: 5 cm or 1.77 in X Maximum Width: 3.5 cm or 1.37 in', but 1.77 inches is 45 mm (not 50 mm), and photos 45 mm high and 35 mm wide are ICAO compliant, which Suriname passport photo should also conform to. That is why we make 45x35 mm photos.\"},{\"id\":\"sr_visa_45x35mm_photo\",\"text\":\"Suriname visa 45x35 mm (1.77x1.37 inch)\",\"country\":\"Suriname\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://scgmia.com/consular-services/passports/photo-instructions/\"],\"comments\":\"Though the requirements say 'Maximum Length: 5 cm or 1.77 in X Maximum Width: 3.5 cm or 1.37 in', but 1.77 inches is 45 mm (not 50 mm), and photos 45 mm high and 35m wide are ICAO compliant, which Suriname passport photo should also conform to. That is why we make 45x35 mm photos.\"},{\"id\":\"sr_passport_50x35mm_photo\",\"text\":\"Suriname Passport 50x35 mm\",\"country\":\"Suriname\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":50,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":6},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://scgmia.com/consular-services/passports/photo-instructions/\"],\"comments\":\"\"},{\"id\":\"se_visa_photo\",\"text\":\"Sweden Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Sweden\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.swedenabroad.com/en-GB/Embassies/New-Delhi/Visit-Sweden/Visa-for-visiting-Sweden/Tourist-visa/\",\"http://www.swedenabroad.com/en-GB/Embassies/Kyiv/Visit-Sweden/Visa-for-visiting-Sweden/Schengen-visa-for-visiting-friends--relatives/\"],\"comments\":\"\"},{\"id\":\"ch_visa_photo\",\"text\":\"Switzerland Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Switzerland\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.eda.admin.ch/etc/medialib/downloads/edactr/rus.Par.0083.File.tmp/Photograph_Guidelines_en.pdf\",\"http://www.eda.admin.ch/etc/medialib/downloads/edactr/lka.Par.0024.File.tmp/Guidelines%20for%20Passport%20Photos.pdf\"],\"comments\":\"\"},{\"id\":\"ch_id_card_35x45mm_photo\",\"text\":\"Swiss ID Card 35x45 mm (3.5x4.5 cm)\",\"country\":\"Switzerland\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"sy_passport_2x2in_5x5cm_photo\",\"text\":\"Syrian Passport 2x2 inches (5x5 cm, 51x51 mm)\",\"country\":\"Syria\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.syrianembassy.cz/index.php?clanek=21&lang=2\"],\"comments\":\"\"},{\"id\":\"sy_residence_photo\",\"text\":\"Syrian residence\",\"country\":\"Syria\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://esyria.sy/flight/?page=static&name=Residency_for_Arabs_and_foreigners\"],\"comments\":\"\"},{\"id\":\"sy_passport_photo\",\"text\":\"Syrian Passport 40x60 mm (4x6 cm)\",\"country\":\"Syria\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"sy_id_card_photo\",\"text\":\"Syrian ID Card 40x60 mm (4x6 cm)\",\"country\":\"Syria\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"sy_visa_photo\",\"text\":\"Syrian visa 40x60 mm (4x6 cm)\",\"country\":\"Syria\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"tw_passport_photo\",\"text\":\"Taiwan Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Taiwan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.boca.gov.tw/ct.asp?xItem=1302&CtNode=768&mp=2\"],\"comments\":\"\"},{\"id\":\"tw_passport_from_us_photo\",\"text\":\"Taiwan Passport 2x2″ (apply from the US)\",\"country\":\"Taiwan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"tw_visa_photo\",\"text\":\"Taiwan Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Taiwan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.taiwanembassy.org/US/NYC/ct.asp?xItem=53275&ctNode=2963&mp=62\",\"http://www.taiwanembassy.org/public/Attachment/0797111671.pdf\",\"http://www.boca.gov.tw/ct.asp?xItem=1302&CtNode=768&mp=2\"],\"comments\":\"\"},{\"id\":\"tw_id_card_2x2inch_photo\",\"text\":\"Taiwan ID Card 2x2 inch\",\"country\":\"Taiwan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.mofa.gov.tw/en/News_Content.aspx?n=7F634CB600635F79&sms=DF91C57E6ABAF5AE&s=56744831EAFE681E\",\"https://www.mofa.gov.tw/en/News_Content.aspx?n=7F634CB600635F79&sms=DF91C57E6ABAF5AE&s=34F66ED382864343\"],\"comments\":\"\"},{\"id\":\"tw_id_card_30x25mm_photo\",\"text\":\"Taiwan ID Card 30x25 mm\",\"country\":\"Taiwan\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":25,\"pictureHeight\":30,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":22.5,\"crownTop\":1.8},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.mofa.gov.tw/Upload/RelFile/1217/4557/d10190f8-a2d1-4a79-a302-18191db62256.pdf\",\"https://www.mofa.gov.tw/Upload/RelFile/1217/4557/0e08ff23-ce86-43d3-b767-a4ec10e11e77.pdf\"],\"comments\":\"Also suitable for Taiwanese Business Tax Exemption Card\"},{\"id\":\"tj_passport_35x45mm_photo\",\"text\":\"Tajikistan Passport 3.5x4.5 cm (35x45 mm)\",\"country\":\"Tajikistan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.tajembassy.org.uk/consular-section/for-tajikistan-citizens/passport-services\",\"http://www.tajemb.us/releases/help-for-tajik-citizen\"],\"comments\":\"\"},{\"id\":\"th_visa_photo\",\"text\":\"Thailand Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"Thailand\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.vfs-thailand.co.in/north/tourist_photo.html\"],\"comments\":\"\"},{\"id\":\"th_visa_us_photo\",\"text\":\"Thailand Visa 2x2″ (from the US)\",\"country\":\"Thailand\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.thaicgny.com/app/download/544568204/visa+form.pdf\"],\"comments\":\"\"},{\"id\":\"th_visa_132_170_photo\",\"text\":\"Thailand e-visa 132x170 pixel\",\"country\":\"Thailand\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":132,\"pictureHeight\":170,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":127.5,\"crownTop\":10.2},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://visaonline.thaiembassy.sg/\"],\"comments\":\"Thai embassy in Singapore online visa application\"},{\"id\":\"th_1x1_photo\",\"text\":\"Thailand license 1x1 photo\",\"country\":\"Thailand\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":1,\"pictureHeight\":1,\"units\":\"inch\",\"dpi\":600,\"faceHeight\":0.65,\"crownTop\":0.1},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Can be used for bike, car license and for other documents and IDs.\"},{\"id\":\"tg_visa_45x35mm_photo\",\"text\":\"Togo visa 4.5x3.5 cm (45x35mm)\",\"country\":\"Togo\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://france.ambassadetogo.org/?page_id=102\"],\"comments\":\"\"},{\"id\":\"tg_passport_45x35mm_photo\",\"text\":\"Togo Passport 4.5x3.5 cm (45x35mm)\",\"country\":\"Togo\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://france.ambassadetogo.org/?page_id=118\"],\"comments\":\"\"},{\"id\":\"tn_passport_photo\",\"text\":\"Tunisia Passport 3.5x4.5 cm (35x45 mm)\",\"country\":\"Tunisia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.diplomatie.gov.tn/index.php?id=79&no_cache=1&L=1&uid_service=3&cHash=ad21854d0ed9ec30c98de231c8155ed3\",\"http://consulat-tunisie.ca/index.php/passeport/\"],\"comments\":\"\"},{\"id\":\"tn_visa_35x45mm_photo\",\"text\":\"Tunisia visa 3.5x4.5 cm (35x45 mm)\",\"country\":\"Tunisia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"tn_id_card_35x45mm_photo\",\"text\":\"Tunisia ID Card 3.5x4.5 cm (35x45 mm)\",\"country\":\"Tunisia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"tn_residence_35x45mm_photo\",\"text\":\"Tunisia residence 3.5x4.5 cm (35x45 mm)\",\"country\":\"Tunisia\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":33,\"crownTop\":4},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.sicad.gov.tn/Ar/_57_3_D1024\"],\"comments\":\"\"},{\"id\":\"tn_passport_2x2_photo\",\"text\":\"Tunisia Passport 2x2″ (from USA)\",\"country\":\"Tunisia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.tunconsusa.org/passport\"],\"comments\":\"\"},{\"id\":\"tr_visa_photo\",\"text\":\"Turkey Visa 50x60 mm (5x6 cm)\",\"country\":\"Turkey\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"crownTop\":10},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.konsolosluk.gov.tr\"],\"comments\":\"\"},{\"id\":\"tr_passport_photo\",\"text\":\"Turkey Passport 50x60 mm (5x6 cm)\",\"country\":\"Turkey\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34,\"crownTop\":10},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.konsolosluk.gov.tr\"],\"comments\":\"\"},{\"id\":\"tm_visa_5x6cm_photo\",\"text\":\"Turkmenistan visa 5x6 cm (50x60 mm)\",\"country\":\"Turkmenistan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":50,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":35,\"crownTop\":10},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://migration.gov.tm/tm/citizen/wizalary-resmilesdirmek-we-olary-uzaltmak/\",\"http://migration.gov.tm/ru/citizen/oformlenie-i-prodlenie-vizy/\"],\"comments\":\"\"},{\"id\":\"tm_passport_30x40mm_photo\",\"text\":\"Turkmenistan Passport 3x4 cm (30x40 mm)\",\"country\":\"Turkmenistan\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://migration.gov.tm/en/citizen/zagranichnyj-biometricheskij-pasport-2/\"],\"comments\":\"\"},{\"id\":\"ug_passport_photo\",\"text\":\"Uganda Passport 2x2″ (51x51mm, 5x5 cm)\",\"country\":\"Uganda\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ug_visa_photo\",\"text\":\"Uganda visa 2x2″ (51x51mm, 5x5 cm)\",\"country\":\"Uganda\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ug_visa_eastern_africa_photo\",\"text\":\"Eastern Africa visa photo 2x2″ (Uganda) (51x51mm, 5x5 cm)\",\"country\":\"Uganda\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ua_passport_photo\",\"text\":\"Ukraine Internal Passport 35x45 mm (3.5x4.5 cm)\",\"country\":\"Ukraine\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://zakon1.rada.gov.ua/laws/show/2503-12\",\"http://www.bucha.com.ua/?subaction=showfull&year=2006&month=08&day=06&news_name=pas_port&seourl=pas_port\",\"http://www.zakon-online.com.ua/administrativnoe-pravo/vse-chto-nuzhno-znat-o-zamene-foto-v-pasporte.html\"],\"comments\":\"\"},{\"id\":\"ua_passport_int_photo\",\"text\":\"Ukraine International Passport (Child Information)\",\"country\":\"Ukraine\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.vita.ua/passport\"],\"comments\":\"\"},{\"id\":\"ua_driving_photo\",\"text\":\"Ukraine Driving License\",\"country\":\"Ukraine\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://udai.kiev.ua/index.php?option=com_content&view=article&id=393:3005-1&catid=45:2013-03-06-12-11-08&Itemid=309\"],\"comments\":\"\"},{\"id\":\"ua_visa_online_photo\",\"text\":\"Ukraine Visa online 450x600 px\",\"country\":\"Ukraine\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":450,\"pictureHeight\":600,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":465,\"crownTop\":37.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://visa.mfa.gov.ua/\"],\"comments\":\"After photo upload select all of our image, the whole of it must go to the highlighted area, before you click the Save button\"},{\"id\":\"ua_visa_photo\",\"text\":\"Ukraine Visa 3x4 cm (30x40 mm)\",\"country\":\"Ukraine\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":31,\"crownTop\":2.5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://mfa.gov.ua/ua/consular-affairs/entering-ukraine/visa-mfa-branches\"],\"comments\":\"\"},{\"id\":\"ae_visa_photo\",\"text\":\"UAE Visa offline 43x55 mm\",\"country\":\"United Arab Emirates\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":43,\"pictureHeight\":55,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":40,\"crownTop\":5},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.dubaivisa.net\"],\"comments\":\"United Arab Emirates / Dubai visa photo\"},{\"id\":\"ae_visa_300_369_photo\",\"text\":\"UAE Visa online Emirates.com 300x369 pixels\",\"country\":\"United Arab Emirates\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":300,\"pictureHeight\":369,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":265.68,\"crownTop\":29.52},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://emirates.com\"],\"comments\":\"United Arab Emirates / Dubai visa photo for online application via Emirates.com website, you may need to have an Emirates.com air ticket to be eligible for this kind of visa\"},{\"id\":\"ae_passport_4x6cm_photo\",\"text\":\"UAE Passport 4x6 cm\",\"country\":\"United Arab Emirates\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[\"https://www.dnrd.ae/ar/node/41708\"],\"comments\":\"\"},{\"id\":\"ae_id_card_4x6cm_photo\",\"text\":\"UAE ID Card 4x6 cm\",\"country\":\"United Arab Emirates\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ae_residence_4x6cm_photo\",\"text\":\"UAE residence 4x6 cm\",\"country\":\"United Arab Emirates\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[\"http://www.dubai.ae/ar/Lists/HowToGuide/DispForm.aspx?ID=44\"],\"comments\":\"\"},{\"id\":\"gb_passport_photo\",\"text\":\"UK Passport offline 35x45 mm (3.5x4.5 cm)\",\"country\":\"United Kingdom\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":32.8,\"crownTop\":4.9},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"https://www.gov.uk/photos-for-passports\"],\"comments\":\"United Kingdom passport photo requirementsPhoto size: 45mm X 35mmYour photo should be:In colourPrinted on high-quality plain white photo paperClear and in focusWithout any tears or creasesClean on both sides (no marks)Taken recently within the last monthNot digitally changedExactly alike On the photo you should be alone without other people or objects. Your photo must include your full head and shoulders.The image of your face  - from the top of your head to the bottom of your chin - must be between 29mm and 34mm high. Make sure that you:Look straight to the cameraHave a neutral face expression and be sure your mouth is closedDo not cover your faceHave a contrast background (plain cream or light grey)Do not cover your head (except of religious or medical reasons)Your eyes are open.Are visible and not covered by sunglasses, glasses frames, tinted glasses, or hair.If you wear normal glasses that you do not have reflection or glare on them.Don’t have the ‘red eye’ effectDo not have shadows in the picture\"},{\"id\":\"gb_id_card_45x35mm_photo\",\"text\":\"UK ID / residence card 45x35 mm (4.5x3.5 cm)\",\"country\":\"United Kingdom\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://validateuk.co.uk/FAQs?f=photo\"],\"comments\":\"\"},{\"id\":\"gb_passport_online_photo\",\"text\":\"UK Passport online\",\"country\":\"United Kingdom\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":900,\"pictureHeight\":1200,\"units\":\"pixel\",\"dpi\":1,\"faceHeight\":660,\"crownTop\":180},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://www.gov.uk/\"],\"comments\":\"Only for the UK online passport application Detailed instruction how to upload the British passport photo\"},{\"id\":\"gb_visa_photo\",\"text\":\"UK Visa 35x45 mm (3.5x4.5 cm)\",\"country\":\"United Kingdom\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":32.8,\"crownTop\":4.9},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"http://www.ukba.homeoffice.gov.uk/sitecontent/applicationforms/flr/photoguidance0409.pdf\"],\"comments\":\"UK visa photo requirements include light grey or plain cream background, and visa photo size is 45 millimetres high by 35 millimetres wide, head must be 29-34 mm high. The photo should be taken within the last month only.\"},{\"id\":\"gb_driving_photo\",\"text\":\"UK Driving Licence 35x45 mm (3.5x4.5 cm)\",\"country\":\"United Kingdom\",\"docType\":\"Driving License\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":32.8,\"crownTop\":4.9},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"https://www.nidirect.gov.uk/articles/photographic-criteria-your-driving-licence\"],\"comments\":\"\"},{\"id\":\"gb_gun_photo\",\"text\":\"UK BASC Firearms / Shotgun Licensing 35x45 mm\",\"country\":\"United Kingdom\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":32.8,\"crownTop\":4.9},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"http://www.basc.org.uk/en/departments/firearms/certificate-forms-and-fees.cfm\"],\"comments\":\"\"},{\"id\":\"gb_oyster_travelcard_photo\",\"text\":\"Oyster travel photocard\",\"country\":\"United Kingdom\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":32.8,\"crownTop\":4.9},\"backgroundColor\":\"#eeeeee\",\"printable\":false,\"officialLinks\":[\"https://photocard.tfl.gov.uk/tfl/showLogon.do?selection=16plus\"],\"comments\":\"\"},{\"id\":\"us_visa_photo\",\"text\":\"USA Visa 2x2″ 51x51mm\",\"country\":\"United States\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos/photo-composition-template.html\",\"https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html\"],\"comments\":\"Note: (*) Glasses are not allowed. (*) Perfect for DS-160 form. (*) Do not use the Photo Tool on the US Department of State website, just directly upload the photo you got from us along with your application. The Photo Tool is incorrect. Detailed visa photo submission instructionsAbout Image may contain imperfections, such as speckles or other patterns errorWhy the Photo Tool on the US Department of State website is not fit to validate your US visa photo US passport photo requirements and US visa photo requirements are similar:How many photos do you need for US passport application?One photoYour photo should conform to the following requirements:Your passport photo should be colored and printed on a quality photo paper.US passport picture size should be 2 x 2 inches (51 x 51 mm).Full-face view. Your head should be seen from the top of the hair to the bottom of the chin.Expression of your face should be neutral. Natural smile is allowed.Both eyes should be open.Look straight at the camera.Your eyes are located between 1 1/8 inches to 1 3/8 inches (28 mm – 35 mm) from the bottom of the photo.Your head must be between 1″ and 1 3/8″ (25mm - 35 mm) from the top of the hair to the bottom of the chin.The photo should reflect your present-day appearance. It should be made within the last 6 months.The background should be plain white or off-white. Taken in your every-day clothing: You should not wear uniforms except for religious cases.Do not wear a hat except for religious cases.Headphones, wireless hands-free devices or similar items are not acceptable in your photo.Do not wear glasses. If you normally wear glasses, be sure that there is no reflection on them.Do not wear glasses with dark frames and tinted lenses. US visa application digital image requirementsThe digital image should meet the following criteria:Acceptable Dimensions:The height of the photo and the width should be the same.Minimum 600 x 600 pixels.Maximum 1200 x 1200 pixels.Color:The image must be in color (24 bits per pixel) in RGB color space\"},{\"id\":\"us_passport_photo\",\"text\":\"US Passport 2x2″\",\"country\":\"United States\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://travel.state.gov/content/passports/en/passports/photos/photo-composition-template.html\"],\"comments\":\"Note: (*) Glasses are not allowed. (*) Do not use the Photo Tool on the US Department of State website, just directly upload the photo you got from us along with your application. The Photo Tool is incorrect. Do not use Photo Tool on the US Department of State website, it is not correct for US passport photo validationAbout Image may contain imperfections, such as speckles or other patterns errorUS passport photo requirements and US visa photo requirements are similar:How many photos do you need for US passport application?One photoYour photo should conform to the following requirements:Your passport photo should be colored and printed on a quality photo paper.US passport picture size should be 2 x 2 inches (51 x 51 mm).Full-face view. Your head should be seen from the top of the hair to the bottom of the chin.Expression of your face should be neutral. Natural smile is allowed.Both eyes should be open.Look straight at the camera.Your eyes are located between 1 1/8 inches to 1 3/8 inches (28 mm – 35 mm) from the bottom of the photo. Your head must be between 1″ and 1 3/8 inches (25mm - 35 mm) from the top of the hair to the bottom of the chin.The photo should reflect your present-day appearance. It should be made within the last 6 months.The background should be plain white or off-white. Taken in your every-day clothing: You should not wear uniforms except for religious cases.Do not wear a hat except for religious cases.Headphones, wireless hands-free devices or similar items are not acceptable in your photo.Do not wear glasses. If you normally wear glasses, be sure that there is no reflection on them.Do not wear glasses with dark frames and tinted lenses.\"},{\"id\":\"us_green_card_photo\",\"text\":\"US Green Card (Permanent Resident) 2x2″\",\"country\":\"United States\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.uscis.gov/greencard\",\"https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos/photo-composition-template.html\"],\"comments\":\"\"},{\"id\":\"us_citizenship_photo\",\"text\":\"US Citizenship 2x2″\",\"country\":\"United States\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.uscis.gov/files/article/M-476.pdf\"],\"comments\":\"\"},{\"id\":\"us_employment_authorization_photo\",\"text\":\"US Employment Authorization 2x2″\",\"country\":\"United States\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.uscis.gov/sites/default/files/files/form/i-765instr.pdf\",\"http://www.uscis.gov/working-united-states/temporary-workers/employment-authorization-certain-h-4-dependent-spouses\"],\"comments\":\"Also known as EAD, work permit or employment authorization card.\"},{\"id\":\"us_ny_gun_photo\",\"text\":\"US NY Gun License 1.5x1.5″\",\"country\":\"United States\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":1.5,\"pictureHeight\":1.5,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1,\"crownTop\":0.09},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.nyc.gov/html/nypd/html/permits/handgun_licensing_information.shtml\",\"http://www.nyc.gov/html/nypd/html/permits/rifle_licensing_information.shtml\"],\"comments\":\"\"},{\"id\":\"us_metrocard_photo\",\"text\":\"US NY MTA Metrocard for Seniors\",\"country\":\"United States\",\"docType\":\"Other\",\"dimensions\":{\"pictureWidth\":1.5,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.4,\"crownTop\":0.25},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.mta.info/nyct/fare/pdf/seniors.pdf\"],\"comments\":\"\"},{\"id\":\"us_cibt_photo\",\"text\":\"CIBTvisas visa photo (any country)\",\"country\":\"United States\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Online photo for CIBTvisas visa services\"},{\"id\":\"us_visacentral_photo\",\"text\":\"VisaCentral visa photo (any country)\",\"country\":\"United States\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Online photo for VisaCentral services\"},{\"id\":\"us_travisa_photo\",\"text\":\"Travisa visa photo (any country)\",\"country\":\"United States\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Online photo for Travisa visa services\"},{\"id\":\"us_visahq_photo\",\"text\":\"VisaHQ visa photo (any country)\",\"country\":\"United States\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Online photo for VisaHQ visa services\"},{\"id\":\"us_visa_headquarters_photo\",\"text\":\"Visa Headquarters visa photo (any country)\",\"country\":\"United States\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\"Online photo for Visa Headquarters visa application\"},{\"id\":\"uz_visa_35x45mm_photo\",\"text\":\"Uzbekistan visa 35x45mm\",\"country\":\"Uzbekistan\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"https://www.uzbekistan.org/page/view?id=23\",\"http://evisa.mfa.uz/evisa_en/\"],\"comments\":\"The photo works both for online and paperwork visa applications\"},{\"id\":\"vn_visa_photo\",\"text\":\"Vietnam visa 40x60mm\",\"country\":\"Vietnam\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":40,\"crownTop\":6},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu\"],\"comments\":\"Vietnam visa online photo submission instructions\"},{\"id\":\"vn_the_can_cuoc_cong_dan_3x4cm_photo\",\"text\":\"Vietnam ID Card 3x4cm\",\"country\":\"Vietnam\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":30,\"pictureHeight\":40,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":30,\"crownTop\":2.5},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.moj.gov.vn/vbpq/en/lists/vn%20bn%20php%20lut/view_detail.aspx?itemid=1200\"],\"comments\":\"\"},{\"id\":\"vn_visa_2x2_photo\",\"text\":\"Vietnam visa 2x2″\",\"country\":\"Vietnam\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.visatovietnam.com/Vietnam_Visa/Apply.html\"],\"comments\":\"\"},{\"id\":\"ye_passport_6x4cm_photo\",\"text\":\"Yemen Passport 6x4cm\",\"country\":\"Yemen\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[\"http://www.yemenconsulatejeddah.com/_Pages_Folder/Rules_cons_Services.html\"],\"comments\":\"\"},{\"id\":\"ye_id_card_4x6cm_photo\",\"text\":\"Yemen ID Card 4x6cm\",\"country\":\"Yemen\",\"docType\":\"ID card / Identification\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"ye_visa_4x6cm_photo\",\"text\":\"Yemen visa 4x6cm\",\"country\":\"Yemen\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":40,\"pictureHeight\":60,\"units\":\"mm\",\"dpi\":300,\"faceHeight\":38,\"crownTop\":6},\"backgroundColor\":\"#dddddd\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"zm_visa_photo\",\"text\":\"Zambia visa 35x45mm\",\"country\":\"Zambia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"zm_visa_2x2inch_photo\",\"text\":\"Zambia visa 2x2″ (from USA)\",\"country\":\"Zambia\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.zambiaembassy.org/sites/default/files/documents/Zambia_Visa_Application_updated_Dec-12-2012.pdf\"],\"comments\":\"\"},{\"id\":\"zm_passport_1_5x2inch_photo\",\"text\":\"Zambia Passport 1.5x2″\",\"country\":\"Zambia\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":1.5,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.4,\"crownTop\":0.2},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[\"http://www.zambia.or.jp/docs/passportforma.pdf\",\"http://zambiahc.org.uk/services/passport/\"],\"comments\":\"The size must not be more than 64 mm by 51 mm or less than 51 mm by 38 mm. [51 by 38 mm equals to 2 by 1.5 inches]\"},{\"id\":\"zw_visa_photo\",\"text\":\"Zimbabwe visa 35x45mm\",\"country\":\"Zimbabwe\",\"docType\":\"Visa\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[],\"comments\":\"\"},{\"id\":\"zw_passport_35x45mm_photo\",\"text\":\"Zimbabwe Passport 35x45mm\",\"country\":\"Zimbabwe\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":35,\"pictureHeight\":45,\"units\":\"mm\",\"dpi\":600,\"faceHeight\":34.5,\"crownTop\":3},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://www.rg.gov.zw/services/passport\"],\"comments\":\"\"},{\"id\":\"un_us_berkley_photo\",\"text\":\"Berkeley Cal 1 Card photo 1.5x2″ or 600x800px\",\"country\":\"Universities / Colleges\",\"docType\":\"\",\"dimensions\":{\"pictureWidth\":1.5,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":400,\"faceHeight\":1.3,\"bottomEyeLine\":1.05},\"backgroundColor\":\"#eeeeee\",\"printable\":true,\"officialLinks\":[\"http://services.housing.berkeley.edu/c1c/static/c1cphoto.htm\"],\"comments\":\"\"},{\"id\":\"cu_2x2in_photo\",\"text\":\"Cuban Passport 2x2″\",\"country\":\"Cuba\",\"docType\":\"Passport\",\"dimensions\":{\"pictureWidth\":2,\"pictureHeight\":2,\"units\":\"inch\",\"dpi\":300,\"faceHeight\":1.29,\"bottomEyeLine\":1.18},\"backgroundColor\":\"#ffffff\",\"printable\":true,\"officialLinks\":[],\"comments\":\" \",\"extraOptions\":[{\"name\":\"Ретуширование\",\"options\":[{\"id\":\"0\",\"value\":\"Без ретуши\"},{\"id\":\"1\",\"value\":\"Ретушь 1\"},{\"id\":\"2\",\"value\":\"Ретушь 2\"}]}],\"corners\":[{\"name\":\"Без уголка\",\"id\":\"12\",\"value\":\"none\"},{\"name\":\"Снизу слева\",\"id\":\"13\",\"value\":\"BL\"}],\"colors\":[{\"name\":\"Цветное\",\"id\":\"9\",\"value\":\"color\"},{\"name\":\"Ч.Б.\",\"id\":\"10\",\"value\":\"gray\"}]}]");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(20);
            var content = __webpack_require__(21);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n@keyframes fade-in-move-down {\r\n  0% {\r\n    left: 0;\r\n  }\r\n  100% {\r\n    left: 100%;\r\n  }\r\n}\r\n\r\n.rc-loading,\r\n.rc-loading-hide {\r\n  position: relative;\r\n}\r\n\r\n.rc-loading::before {\r\n  content: \"\";\r\n  display: table;\r\n}\r\n\r\n.rc-loading::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #000;\r\n  opacity: 0.5;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.rc-loading-mask {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: center;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n}\r\n.rc-loading .rc-loading-content {\r\n  opacity: 0.5;\r\n}\r\n\r\n.rc-loading-hide .rc-loading-mask {\r\n  display: none;\r\n}\r\n\r\n.rc-loading .rc-loading-mask {\r\n  z-index: 2;\r\n}\r\n\r\n.rc-loading .rc-loading-icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  z-index: 2;\r\n  width: 100%;\r\n  cursor: default;\r\n  margin-top: -12px;\r\n  color: #fff;\r\n}\r\n\r\n.rc-loading-icon-default {\r\n  border-width: 3px;\r\n  border-style: solid;\r\n  border-color: transparent #fff #fff #fff;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  animation: 3s linear 0s normal none infinite running spin;\r\n  filter: drop-shadow(0 0 2 rgba(0, 0, 0, 0.33));\r\n  display: inline-block;\r\n}\r\n\r\n.rc-loading .rc-loading-text {\r\n  position: absolute;\r\n  width: 100%;\r\n  color: #fff;\r\n  top: 50%;\r\n  padding-top: 24px;\r\n  font-size: 14px;\r\n  opacity: 1;\r\n}\r\n\r\n.rc-loading-spin {\r\n  animation: spin 2s infinite linear;\r\n}\r\n\r\n.rc-loading-move-right {\r\n  position: absolute;\r\n  animation: fade-in-move-down 5s linear infinite;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(24);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var bind = __webpack_require__(8);
var Axios = __webpack_require__(26);
var mergeConfig = __webpack_require__(14);
var defaults = __webpack_require__(11);

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
axios.Cancel = __webpack_require__(15);
axios.CancelToken = __webpack_require__(40);
axios.isCancel = __webpack_require__(10);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(41);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var buildURL = __webpack_require__(9);
var InterceptorManager = __webpack_require__(27);
var dispatchRequest = __webpack_require__(28);
var mergeConfig = __webpack_require__(14);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var transformData = __webpack_require__(29);
var isCancel = __webpack_require__(10);
var defaults = __webpack_require__(11);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(13);

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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(36);
var combineURLs = __webpack_require__(37);

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
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(15);

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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(44)
var ieee754 = __webpack_require__(45)
var isArray = __webpack_require__(46)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 48 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 49 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/style/styles.scss
/* harmony default export */ var style_styles = (__webpack_require__.p + "styles.css");
// EXTERNAL MODULE: ./node_modules/react-loadingmask/dist/react-loadingmask.css
var react_loadingmask = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.module.js
var preact_module = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(6);
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 1 modules
var compat_module = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ var TransitionGroupContext = (compat_module["default"].createContext(null));
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition_Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [compat_module["default"].findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : compat_module["default"].findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : compat_module["default"].findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      compat_module["default"].createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : compat_module["default"].cloneElement(compat_module["default"].Children.only(children), childProps))
    );
  };

  return Transition;
}(compat_module["default"].Component);

Transition_Transition.contextType = TransitionGroupContext;
Transition_Transition.propTypes =  false ? undefined : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition_Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition_Transition.UNMOUNTED = UNMOUNTED;
Transition_Transition.EXITED = EXITED;
Transition_Transition.ENTERING = ENTERING;
Transition_Transition.ENTERED = ENTERED;
Transition_Transition.EXITING = EXITING;
/* harmony default export */ var esm_Transition = (Transition_Transition);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(compat_module["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) compat_module["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(compat_module["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(compat_module["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(compat_module["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(compat_module["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(compat_module["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(compat_module["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(compat_module["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup_TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/compat_module["default"].createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/compat_module["default"].createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/compat_module["default"].createElement(Component, props, children));
  };

  return TransitionGroup;
}(compat_module["default"].Component);

TransitionGroup_TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup_TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ var esm_TransitionGroup = (TransitionGroup_TransitionGroup);
// CONCATENATED MODULE: ./node_modules/react-alert/dist/esm/react-alert.js





function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function react_alert_extends() {
  react_alert_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return react_alert_extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function react_alert_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = react_alert_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var react_alert_Context = Object(compat_module["createContext"])();

var positions = {
  TOP_LEFT: 'top left',
  TOP_CENTER: 'top center',
  TOP_RIGHT: 'top right',
  MIDDLE_LEFT: 'middle left',
  MIDDLE: 'middle',
  MIDDLE_RIGHT: 'middle right',
  BOTTOM_LEFT: 'bottom left',
  BOTTOM_CENTER: 'bottom center',
  BOTTOM_RIGHT: 'bottom right'
};
var types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
};
var transitions = {
  FADE: 'fade',
  SCALE: 'scale'
};

var getStyles = function getStyles(position) {
  var initialStyles = {
    left: 0,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    pointerEvents: 'none'
  };

  switch (position) {
    case positions.TOP_LEFT:
      return _objectSpread2({}, initialStyles, {
        top: 0,
        alignItems: 'flex-start'
      });

    case positions.TOP_CENTER:
      return _objectSpread2({}, initialStyles, {
        top: 0
      });

    case positions.TOP_RIGHT:
      return _objectSpread2({}, initialStyles, {
        top: 0,
        alignItems: 'flex-end'
      });

    case positions.MIDDLE_LEFT:
      return _objectSpread2({}, initialStyles, {
        top: '50%',
        alignItems: 'flex-start'
      });

    case positions.MIDDLE:
      {
        return _objectSpread2({}, initialStyles, {
          top: '50%'
        });
      }

    case positions.MIDDLE_RIGHT:
      return _objectSpread2({}, initialStyles, {
        top: '50%',
        alignItems: 'flex-end'
      });

    case positions.BOTTOM_LEFT:
      return _objectSpread2({}, initialStyles, {
        bottom: 0,
        alignItems: 'flex-start'
      });

    case positions.BOTTOM_CENTER:
      return _objectSpread2({}, initialStyles, {
        bottom: 0
      });

    case positions.BOTTOM_RIGHT:
      return _objectSpread2({}, initialStyles, {
        bottom: 0,
        alignItems: 'flex-end'
      });

    default:
      {
        return initialStyles;
      }
  }
};

var react_alert_Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      _ref$options = _ref.options,
      position = _ref$options.position,
      containerStyle = _ref$options.containerStyle,
      props = _objectWithoutProperties(_ref, ["children", "options"]);

  var styles = Object(compat_module["useMemo"])(function () {
    return getStyles(position);
  }, [position]);
  return children.length > 0 && compat_module["default"].createElement("div", react_alert_extends({
    style: _objectSpread2({}, styles, {}, containerStyle)
  }, props), children);
};

var _defaultStyle, _transitionStyles;
var duration = 250;
var defaultStyle = (_defaultStyle = {}, _defineProperty(_defaultStyle, transitions.FADE, {
  transition: "opacity ".concat(duration, "ms ease"),
  opacity: 0
}), _defineProperty(_defaultStyle, transitions.SCALE, {
  transform: 'scale(1)',
  transition: "all ".concat(duration, "ms ease-in-out")
}), _defaultStyle);
var transitionStyles = (_transitionStyles = {}, _defineProperty(_transitionStyles, transitions.FADE, {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  }
}), _defineProperty(_transitionStyles, transitions.SCALE, {
  entering: {
    transform: 'scale(0)'
  },
  entered: {
    transform: 'scale(1)'
  },
  exiting: {
    transform: 'scale(0)'
  },
  exited: {
    transform: 'scale(1)'
  }
}), _transitionStyles);

var react_alert_Transtion = function Transtion(_ref) {
  var children = _ref.children,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["children", "type"]);

  var ref = Object(compat_module["useRef"])(null);
  return compat_module["default"].createElement(esm_Transition, react_alert_extends({
    nodeRef: ref
  }, props, {
    timeout: duration
  }), function (state) {
    return compat_module["default"].createElement("div", {
      ref: ref,
      style: _objectSpread2({}, defaultStyle[type], {}, transitionStyles[type][state])
    }, children);
  });
};

var groupBy = function groupBy(array, fn) {
  return array.reduce(function (result, item) {
    var key = fn(item);
    if (!result[key]) result[key] = [];
    result[key].push(item);
    return result;
  }, {});
};

var react_alert_Provider = function Provider(_ref) {
  var children = _ref.children,
      offset = _ref.offset,
      position = _ref.position,
      timeout = _ref.timeout,
      type = _ref.type,
      transition = _ref.transition,
      containerStyle = _ref.containerStyle,
      AlertComponent = _ref.template,
      Context = _ref.context,
      props = _objectWithoutProperties(_ref, ["children", "offset", "position", "timeout", "type", "transition", "containerStyle", "template", "context"]);

  var root = Object(compat_module["useRef"])(null);
  var alertContext = Object(compat_module["useRef"])(null);
  var timersId = Object(compat_module["useRef"])([]);

  var _useState = Object(compat_module["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      alerts = _useState2[0],
      setAlerts = _useState2[1];

  Object(compat_module["useEffect"])(function () {
    root.current = document.createElement('div');
    root.current.id = '__react-alert__';
    document.body.appendChild(root.current);
    var timersIdRef = timersId.current;
    return function () {
      timersIdRef.forEach(clearTimeout);
      if (root.current) document.body.removeChild(root.current);
    };
  }, []);
  var remove = Object(compat_module["useCallback"])(function (alert) {
    setAlerts(function (currentAlerts) {
      var lengthBeforeRemove = currentAlerts.length;
      var filteredAlerts = currentAlerts.filter(function (a) {
        return a.id !== alert.id;
      });

      if (lengthBeforeRemove > filteredAlerts.length && alert.options.onClose) {
        alert.options.onClose();
      }

      return filteredAlerts;
    });
  }, []);
  var removeAll = Object(compat_module["useCallback"])(function () {
    alertContext.current.alerts.forEach(remove);
  }, [remove]);
  var show = Object(compat_module["useCallback"])(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var id = Math.random().toString(36).substr(2, 9);

    var alertOptions = _objectSpread2({
      position: options.position || position,
      timeout: timeout,
      type: type
    }, options);

    var alert = {
      id: id,
      message: message,
      options: alertOptions
    };

    alert.close = function () {
      return remove(alert);
    };

    if (alert.options.timeout) {
      var timerId = setTimeout(function () {
        remove(alert);
        timersId.current.splice(timersId.current.indexOf(timerId), 1);
      }, alert.options.timeout);
      timersId.current.push(timerId);
    }

    setAlerts(function (state) {
      return state.concat(alert);
    });
    if (alert.options.onOpen) alert.options.onOpen();
    return alert;
  }, [position, remove, timeout, type]);
  var success = Object(compat_module["useCallback"])(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options.type = types.SUCCESS;
    return show(message, options);
  }, [show]);
  var error = Object(compat_module["useCallback"])(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options.type = types.ERROR;
    return show(message, options);
  }, [show]);
  var info = Object(compat_module["useCallback"])(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options.type = types.INFO;
    return show(message, options);
  }, [show]);
  alertContext.current = {
    alerts: alerts,
    show: show,
    remove: remove,
    removeAll: removeAll,
    success: success,
    error: error,
    info: info
  };
  var alertsByPosition = groupBy(alerts, function (alert) {
    return alert.options.position;
  });
  return compat_module["default"].createElement(Context.Provider, {
    value: alertContext
  }, children, root.current && Object(compat_module["createPortal"])(compat_module["default"].createElement(compat_module["Fragment"], null, Object.keys(positions).map(function (key) {
    var position = positions[key];
    return compat_module["default"].createElement(esm_TransitionGroup, react_alert_extends({
      appear: true,
      key: position,
      options: {
        position: position,
        containerStyle: containerStyle
      },
      component: react_alert_Wrapper
    }, props), alertsByPosition[position] ? alertsByPosition[position].map(function (alert) {
      return compat_module["default"].createElement(react_alert_Transtion, {
        type: transition,
        key: alert.id
      }, compat_module["default"].createElement(AlertComponent, react_alert_extends({
        style: {
          margin: offset,
          pointerEvents: 'all'
        }
      }, alert)));
    }) : null);
  })), root.current));
};

react_alert_Provider.propTypes = {
  offset: prop_types_default.a.string,
  position: prop_types_default.a.oneOf(Object.keys(positions).map(function (position) {
    return positions[position];
  })),
  timeout: prop_types_default.a.number,
  type: prop_types_default.a.oneOf(Object.keys(types).map(function (type) {
    return types[type];
  })),
  transition: prop_types_default.a.oneOf(Object.keys(transitions).map(function (transition) {
    return transitions[transition];
  })),
  containerStyle: prop_types_default.a.object,
  template: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.func, prop_types_default.a.elementType]).isRequired,
  context: prop_types_default.a.shape({
    Provider: prop_types_default.a.object,
    Consumer: prop_types_default.a.object
  })
};
react_alert_Provider.defaultProps = {
  offset: '10px',
  position: positions.TOP_CENTER,
  timeout: 0,
  type: types.INFO,
  transition: transitions.FADE,
  containerStyle: {
    zIndex: 100
  },
  context: react_alert_Context
};

var react_alert_useAlert = function useAlert(Context$1) {
  var alertContext = Object(compat_module["useContext"])(Context$1 || react_alert_Context);
  var alert = Object(compat_module["useMemo"])(function () {
    return alertContext.current;
  }, [alertContext]);
  return alert;
};

var react_alert_withAlert = function withAlert() {
  var Context$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : react_alert_Context;
  return function (WrappedComponent) {
    var WithAlert = function WithAlert(props, forwardedRef) {
      return compat_module["default"].createElement(Context$1.Consumer, null, function (alert) {
        return compat_module["default"].createElement(WrappedComponent, react_alert_extends({
          ref: forwardedRef
        }, props, {
          alert: alert.current
        }));
      });
    };

    WithAlert.displayName = "WithAlert(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
    return compat_module["default"].forwardRef(WithAlert);
  };
};



// EXTERNAL MODULE: ./node_modules/interactjs/dist/interact.min.js
var interact_min = __webpack_require__(7);
var interact_min_default = /*#__PURE__*/__webpack_require__.n(interact_min);

// CONCATENATED MODULE: ./src/model/point.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Point =
/*#__PURE__*/
function () {
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
function getBoundingRectangleAfterRotate(w, h, a) {
  var size = {};
  var rads = a * Math.PI / 180;
  var c = Math.cos(rads);
  var s = Math.sin(rads);

  if (s < 0) {
    s = -s;
  }

  if (c < 0) {
    c = -c;
  }

  size.width = h * s + w * c;
  size.height = h * c + w * s;
  return size;
}
function transformCoordinateAfterRotate(pivot, point, angle) {
  // Rotate clockwise, angle in radians
  var x = Math.round(Math.cos(angle) * (point.x - pivot[0]) - Math.sin(angle) * (point.y - pivot[1]) + pivot[0]),
      y = Math.round(Math.sin(angle) * (point.x - pivot[0]) + Math.cos(angle) * (point.y - pivot[1]) + pivot[1]);
  return [x, y];
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
// CONCATENATED MODULE: ./src/shared/event-emitter/constants.js
var Constants = {
  UPDATE_LANDMARK: 'update_landmark',
  LOADED_IMAGE: 'loaded_image',
  GENERATED: 'generated',
  CUSTOM: 'custom',
  NO_FACE: 'no_face',
  MORE_ONE_FACES: 'more_one_faces'
};
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(4);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/react-loadingmask/dist/react-loadingmask.js
var dist_react_loadingmask = __webpack_require__(5);
var dist_react_loadingmask_default = /*#__PURE__*/__webpack_require__.n(dist_react_loadingmask);

// CONCATENATED MODULE: ./src/components/editor/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function editor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function editor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function editor_createClass(Constructor, protoProps, staticProps) { if (protoProps) editor_defineProperties(Constructor.prototype, protoProps); if (staticProps) editor_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return editor_assertThisInitialized(self); }

function editor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var editor_Editor =
/*#__PURE__*/
function (_Component) {
  _inherits(Editor, _Component);

  function Editor() {
    var _this;

    editor_classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editor).call(this)); // size of circle markers

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

    _this._crownChinMarkSize = window.innerHeight > window.innerWidth ? 22 : 12;
    _this.state = {
      crownPosition: {},
      chinPosition: {},
      landmarkVisibility: true,
      image: null,
      isImageLoaded: false
    };
    return _this;
  }

  editor_createClass(Editor, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
        this.loadAndRenderImage(this.props.imageUrl);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.loadAndRenderImage(this.props.imageUrl);
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
      this._photoDimensions = this.props.standard.dimensions;
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
      this.scaledImageWidth = this._imgElmt.clientWidth;
      this.scaledImageHeight = this._imgElmt.clientHeight;

      if (this._imageWidth > 100 && this._imageHeight > 100) {
        this._imgElmt.style.visibility = 'visible';
        this.calculateViewPort();
        this.zoomFit();
        this.renderImage();
        this.setLandMarks(new Point(140, 20), new Point(141, this._viewPortHeight / 2.5));
      }

      this.setState({
        isImageLoaded: true
      });
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
      this.updateLandMarks();
    }
  }, {
    key: "updateLandMarks",
    value: function updateLandMarks() {
      var _this4 = this;

      this.crownPoint = this.screenToPixel(this._crownMarkElmt, true);
      this.chinPoint = this.screenToPixel(this._chinMarkElmt, true);
      this.setState({
        crownPosition: this.crownPoint,
        chinPosition: this.chinPoint
      });
      var height = parseInt(this._cropArea.getAttribute('height'));
      var width = parseInt(this._cropArea.getAttribute('width'));
      var imageHeight = parseInt(this._imgElmt.getAttribute('height'));
      var imageWidth = parseInt(this._imgElmt.getAttribute('width'));
      var crownPoint = {
        x: this.crownPoint.x * this._ratio / imageWidth * 100,
        y: this.crownPoint.y * this._ratio / imageHeight * 100
      };
      var chinPoint = {
        x: this.chinPoint.x * this._ratio / imageWidth * 100,
        y: this.chinPoint.y * this._ratio / imageHeight * 100
      };
      this.props.emitter.emit(Constants.UPDATE_LANDMARK, {
        crownPosition: crownPoint,
        chinPosition: chinPoint,
        angle: this.angle,
        cropArea: this.frameCoords.map(function (item) {
          //item = { x: (item.x) / imageWidth * 100, y: item.y / imageHeight * 100 };
          //return {x: (item.x ) / imageWidth * 100, y: item.y / imageHeight * 100}
          // remove viewport padding
          item.x -= Math.abs(imageWidth - _this4._viewPortWidth) / 2;
          item.y -= Math.abs(imageHeight - _this4._viewPortHeight) / 2; // convert to percents

          return {
            x: item.x / imageWidth * 100,
            y: item.y / imageHeight * 100
          };
        })
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
      var _this5 = this;

      var p1 = this.getMarkScreenCenter(this._crownMarkElmt);
      var p2 = this.getMarkScreenCenter(this._chinMarkElmt); // Render middle line

      this._renderSegment(this._middleLine, p1, p2);

      var faceHeight = p1.distTo(p2);
      var crownSegment = pointsAtDistanceNorm(p1, p2, faceHeight * 0.5, p1);
      if (Math.abs(crownSegment[0].x) !== Math.abs(crownSegment[1].x)) this._renderSegment(this._crownLine, crownSegment[0], crownSegment[1]);
      var chinSegment = pointsAtDistanceNorm(p1, p2, faceHeight * 0.5, p2);
      if (Math.abs(chinSegment[0].x) !== Math.abs(chinSegment[1].x)) this._renderSegment(this._chinLine, chinSegment[0], chinSegment[1]); // Render face ellipse

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
      this.angle = {
        rad: angleRad,
        deg: angleDeg
      };
      var invalidCrop = points.some(function (pt) {
        var ptPix = _this5.screenToPixel(pt);

        return ptPix.x < 0 || ptPix.x > _this5._imageWidth || ptPix.y < 0 || ptPix.y > _this5._imageHeight;
      });

      this._cropRect.setAttribute('stroke', invalidCrop ? '#cc3d2e' : '#2ecc8a');
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
      return Object(preact_module["h"])(dist_react_loadingmask_default.a, {
        loading: !this.state.isImageLoaded,
        text: 'loading...',
        style: {
          width: '100%',
          height: '100%'
        },
        className: "d-flex justify-content-center align-items-center"
      }, Object(preact_module["h"])("div", {
        style: {
          margin: '0 auto',
          padding: '10px'
        }
      }, Object(preact_module["h"])("div", {
        id: "viewport"
      }, Object(preact_module["h"])("img", {
        id: "inputPhoto",
        alt: "",
        title: "Input picture",
        src: this.state.image,
        onLoad: this.onLoadImage.bind(this),
        onError: this.imageLoadFailed.bind(this)
      }), Object(preact_module["h"])("svg", {
        className: "box",
        style: {
          visibility: this.state.landmarkVisibility && this.state.isImageLoaded ? 'visible' : 'hidden'
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
          visibility: this.state.landmarkVisibility && this.state.isImageLoaded ? 'visible' : 'hidden'
        }
      }), Object(preact_module["h"])("div", {
        className: "landmark",
        id: "chinMark",
        style: {
          visibility: this.state.landmarkVisibility && this.state.isImageLoaded ? 'visible' : 'hidden'
        }
      }))));
    }
  }]);

  return Editor;
}(preact_module["a" /* Component */]);

/* harmony default export */ var editor = (editor_Editor);
// EXTERNAL MODULE: ./node_modules/fabric/dist/fabric.min.js
var fabric_min = __webpack_require__(16);
var fabric_min_default = /*#__PURE__*/__webpack_require__.n(fabric_min);

// CONCATENATED MODULE: ./src/components/preview/options.js
function options_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { options_typeof = function _typeof(obj) { return typeof obj; }; } else { options_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return options_typeof(obj); }

function options_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function options_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function options_createClass(Constructor, protoProps, staticProps) { if (protoProps) options_defineProperties(Constructor.prototype, protoProps); if (staticProps) options_defineProperties(Constructor, staticProps); return Constructor; }

function options_possibleConstructorReturn(self, call) { if (call && (options_typeof(call) === "object" || typeof call === "function")) { return call; } return options_assertThisInitialized(self); }

function options_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function options_getPrototypeOf(o) { options_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return options_getPrototypeOf(o); }

function options_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) options_setPrototypeOf(subClass, superClass); }

function options_setPrototypeOf(o, p) { options_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return options_setPrototypeOf(o, p); }




var options_Options =
/*#__PURE__*/
function (_Component) {
  options_inherits(Options, _Component);

  function Options() {
    options_classCallCheck(this, Options);

    return options_possibleConstructorReturn(this, options_getPrototypeOf(Options).call(this));
  }

  options_createClass(Options, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var extraOptions = this.props.options.map(function (extraOption) {
        return Object(preact_module["h"])("div", {
          className: "col-md-auto col-sm-1"
        }, Object(preact_module["h"])("div", {
          className: "form-group"
        }, Object(preact_module["h"])("label", {
          htmlFor: "exampleInputEmail1"
        }, extraOption.name, " \xA0", extraOption.description && Object(preact_module["h"])("span", {
          className: "badge badge-info",
          title: extraOption.description,
          "data-toggle": "tooltip"
        }, "?")), Object(preact_module["h"])("div", {
          className: "input-group mb-2"
        }, Object(preact_module["h"])("select", {
          onChange: _this.handleOptionChanged.bind(_this),
          className: 'custom-select'
        }, extraOption.options.map(function (option) {
          return Object(preact_module["h"])("option", {
            value: "[".concat(extraOption.id, ", ").concat(option.id, "]")
          }, option.value);
        })))));
      });
      this.setState({
        options: extraOptions
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(previousProps, previousState, snapshot) {
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });
    }
  }, {
    key: "handleOptionChanged",
    value: function handleOptionChanged(event) {
      var option = JSON.parse(event.target.value);
      this.props.onOptionChanged(option);
    }
  }, {
    key: "render",
    value: function render(props, state, context) {
      return Object(preact_module["h"])("div", {
        className: "options form-row justify-content-end align-items-center"
      }, this.state.options);
    }
  }]);

  return Options;
}(preact_module["a" /* Component */]);


// CONCATENATED MODULE: ./src/components/preview/index.js
function preview_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { preview_typeof = function _typeof(obj) { return typeof obj; }; } else { preview_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return preview_typeof(obj); }

function preview_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function preview_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function preview_createClass(Constructor, protoProps, staticProps) { if (protoProps) preview_defineProperties(Constructor.prototype, protoProps); if (staticProps) preview_defineProperties(Constructor, staticProps); return Constructor; }

function preview_possibleConstructorReturn(self, call) { if (call && (preview_typeof(call) === "object" || typeof call === "function")) { return call; } return preview_assertThisInitialized(self); }

function preview_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function preview_getPrototypeOf(o) { preview_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return preview_getPrototypeOf(o); }

function preview_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) preview_setPrototypeOf(subClass, superClass); }

function preview_setPrototypeOf(o, p) { preview_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return preview_setPrototypeOf(o, p); }










var initialState = {
  preview: null,
  quantity: 1,
  corner: {
    value: 'none'
  },
  loadingAnimation: null,
  dimensions: {
    pictureWidth: 0,
    pictureHeight: 0
  },
  originalImageUrl: null,
  noBgImageUrl: null,
  uid: null,
  hue: {
    value: 'color'
  },
  extraOptions: [],
  networkError: false,
  selectedType: Constants.GENERATED,
  inProcess: false,
  isOptionsChanged: false
};

var preview_Preview =
/*#__PURE__*/
function (_Component) {
  preview_inherits(Preview, _Component);

  function Preview() {
    var _this;

    preview_classCallCheck(this, Preview);

    _this = preview_possibleConstructorReturn(this, preview_getPrototypeOf(Preview).call(this));
    _this.image = new Image();
    _this.alert = react_alert_useAlert();
    _this.dimensionMultiplier = 1;
    _this.previewCanvasWidth = 250;
    _this.corners = null;
    _this.colors = null;
    _this.state = initialState;
    _this.cropData = null;
    return _this;
  }

  preview_createClass(Preview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.dimensionMultiplier = this.previewCanvasWidth / this.props.standard.dimensions.pictureWidth;
      var dimensions = {
        pictureWidth: parseFloat(this.props.standard.dimensions.pictureWidth) * this.dimensionMultiplier,
        pictureHeight: parseFloat(this.props.standard.dimensions.pictureHeight) * this.dimensionMultiplier
      }; // initialize canvas for preview

      this.initPreviewCanvas(dimensions); // set canvas size for custom preview

      this.setPreviewCanvasSize(dimensions); // generate lists of options

      this.generateOptionsList(); // send request to generate photo

      this.loadGeneratedPreview({});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, nextContext) {
      // send request to generate photo
      this.loadGeneratedPreview(prevProps); // set canvas size for custom preview

      if (prevProps.standard !== this.props.standard) {
        this.setPreviewCanvasSize(this.props.standard.dimensions);
      } // register events listener when open editor


      if (this.props.isEditorOpen) this.initEventListeners(); // call callback on option changed

      if (this.state.isOptionsChanged) this.sendOptionsToCallback();
    }
  }, {
    key: "initPreviewCanvas",
    value: function initPreviewCanvas(dimensions) {
      this.setState({
        dimensions: dimensions
      }); // fabric.js instance

      this.fabric = fabric_min_default.a.fabric; // image instance to storing custom preview picture

      this._watermakrImage = new Image(); // image instance to storing custom picture for rendering

      this._renderImage = new Image(); // visible canvas for preview

      this._canvas = document.querySelector('#canvasPreview');
      this._canvas = new this.fabric.Canvas('canvasPreview');
      this._canvas.hoverCursor = 'pointer';
      this._canvas.selection = false; // tmp canvas to store image for rendering

      if (this.props.debug) {
        this._renderCanvas = new this.fabric.Canvas('developPreview');
      } else {
        this._renderCanvas = new this.fabric.Canvas();
      }
    }
  }, {
    key: "initEventListeners",
    value: function initEventListeners() {
      var _this2 = this;

      this.props.emitter.off(Constants.LOADED_IMAGE);
      this.props.emitter.off(Constants.UPDATE_LANDMARK);
      this.props.emitter.on(Constants.LOADED_IMAGE, function (data) {});
      this.props.emitter.on(Constants.UPDATE_LANDMARK, function (data) {
        return _this2.cropImage(data);
      });
    }
  }, {
    key: "setPreviewCanvasSize",
    value: function setPreviewCanvasSize(dimensions) {
      this._canvas.setHeight(dimensions.pictureHeight);

      this._canvas.setWidth(dimensions.pictureWidth);
    }
  }, {
    key: "generateOptionsList",
    value: function generateOptionsList() {
      var _this3 = this;

      var standard = this.props.standard;
      var corner = standard.corners.length ? standard.corners[0] : initialState.corner;
      var hue = standard.colors.length ? standard.colors[0] : initialState.hue;
      var extraOptions = [];

      if (standard.extraOptions) {
        extraOptions = standard.extraOptions.map(function (option) {
          return [parseInt(option.id), parseInt(option.options[0].id)];
        });
      }

      this.setState({
        corner: corner,
        hue: hue,
        isOptionsChanged: true,
        extraOptions: extraOptions
      });
      this.corners = this.props.standard.corners && this.props.standard.corners.length ? this.props.standard.corners.map(function (corner) {
        return Object(preact_module["h"])("option", {
          value: corner.id
        }, corner.name);
      }) : null;
      this.colors = this.props.standard.colors && this.props.standard.colors.length ? this.props.standard.colors.map(function (color) {
        return Object(preact_module["h"])("div", {
          className: "form-check form-check-inline"
        }, Object(preact_module["h"])("input", {
          className: "form-check-input",
          type: "radio",
          name: "color",
          checked: hue.value === color.value,
          onClick: _this3.handleColorChange.bind(_this3),
          id: "color-".concat(color.id),
          value: color.id
        }), Object(preact_module["h"])("label", {
          className: "form-check-label",
          htmlFor: "color-".concat(color.id)
        }, color.name));
      }) : null;
    }
  }, {
    key: "cropImage",
    value: function cropImage(data) {
      var _this4 = this;

      var generateRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return new Promise(function (resolve, reject) {
        _this4.cropData = data; // calculate size of bounding canvas for image after rotation

        var nSize = getBoundingRectangleAfterRotate(_this4._watermakrImage.width, _this4._watermakrImage.height, 90 - data.angle.deg); // center of bounding canvas

        var cx = nSize.width / 2;
        var cy = nSize.height / 2; // calculate coordinates of cropping area

        var cropArea = data.cropArea.map(function (item) {
          // convert point from percents to absolute coordinate
          item = {
            x: _this4._watermakrImage.width / 100 * item.x,
            y: _this4._watermakrImage.height / 100 * item.y
          }; // increase each point applying new host size

          item = {
            x: item.x + (nSize.width - _this4._watermakrImage.width) / 2,
            y: item.y + (nSize.height - _this4._watermakrImage.height) / 2
          }; // transform point according to rotation

          var transformedPoint = transformCoordinateAfterRotate([cx, cy], item, (90 - data.angle.deg) * Math.PI / 180);
          return {
            x: transformedPoint[0],
            y: transformedPoint[1]
          };
        });
        var borderOffsetTop = cropArea[0].y < 0 ? cropArea[0].y : 0;
        var imageParams = {
          angle: 0,
          width: _this4._watermakrImage.width,
          height: _this4._watermakrImage.height,
          left: (nSize.width - _this4._watermakrImage.width) / 2,
          top: (nSize.height - _this4._watermakrImage.height) / 2 - borderOffsetTop,
          scaleX: 1,
          scaleY: 1
        }; // create fabric.js object from image

        var fabricImageWithWatermark = new _this4.fabric.Image(generateRender ? _this4._renderImage : _this4._watermakrImage, imageParams); // rotate image inside canvas

        fabricImageWithWatermark.rotate(90 - data.angle.deg);

        _this4._renderCanvas.clear(); // apply new size for render canvas


        _this4._renderCanvas.setWidth(nSize.width);

        _this4._renderCanvas.setHeight(nSize.height);

        _this4._renderCanvas.backgroundColor = '#fff'; // add image to canvas

        _this4._renderCanvas.add(fabricImageWithWatermark); //this._renderCanvas.renderAll();


        var cropAreaWidth = cropArea[0].x - cropArea[1].x;
        var cropAreaHeight = cropArea[2].y - cropArea[1].y;

        var canvasWidth = _this4._canvas.getWidth();

        var canvasHeight = _this4._canvas.getHeight(); // create image from canvas


        var tmpImage = new Image();
        tmpImage.src = _this4._renderCanvas.toDataURL();

        tmpImage.onload = function () {
          // get cropped image from canvas
          var croppedImgInstance = new _this4.fabric.Image(tmpImage, {
            angle: 0,
            width: cropAreaWidth,
            height: cropAreaHeight,
            left: 0,
            top: 0,
            cropX: cropArea[1].x,
            cropY: cropArea[1].y,
            selectable: false
          }); // put cropped image to render canvas
          // this canvas use for saving custom photo

          _this4._renderCanvas.clear();

          _this4._renderCanvas.setWidth(croppedImgInstance.width);

          _this4._renderCanvas.setHeight(croppedImgInstance.height);

          _this4._renderCanvas.add(croppedImgInstance);

          if (!generateRender) {
            // copy image for preview
            var imageCopy = Object.create(croppedImgInstance); // scale image to fit preview canvas size

            imageCopy.scaleToHeight(canvasHeight);
            imageCopy.scaleToWidth(canvasWidth);

            _this4._canvas.clear(); // add image to preview canvas


            _this4._canvas.add(imageCopy);
          }

          resolve();
        };
      });
    }
  }, {
    key: "loadGeneratedPreview",
    value: function loadGeneratedPreview(prevProps) {
      var _this5 = this;

      if (this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
        // create image from url
        this._watermakrImage.src = this.props.imageUrl;

        this._watermakrImage.onload = function () {
          _this5.setState({
            preview: null,
            originalImageUrl: _this5.props.imageUrl
          });

          _this5.createLoadingAnimation();
        };

        var c = this.dimensionMultiplier;
        var chin = 0;
        var crown = 0;

        if (this.props.standard.dimensions.crownTop) {
          crown = this.props.standard.dimensions.crownTop * c;
          chin = (this.props.standard.dimensions.faceHeight + this.props.standard.dimensions.crownTop) * c;
        } else if (this.props.standard.dimensions.bottomEyeLine) {
          crown = this.props.standard.dimensions.bottomEyeLine / 10;
          chin = (this.props.standard.dimensions.faceHeight + crown) * c;
          crown *= c;
        }

        axios_default.a.post("".concat(this.props.serviceHost, "/api/render-photo"), {
          url: this.props.imageUrl,
          previewSize: this.props.previewSize,
          debug: this.props.debug,
          removeBackground: this.props.removeBackground,
          scale: 1,
          dimensions: {
            width: this.props.standard.dimensions.pictureWidth * c,
            height: this.props.standard.dimensions.pictureHeight * c,
            crown: crown,
            chin: chin
          }
        }).then(function (response) {
          _this5.handleNetworkResponse(response);
        })["catch"](function (error) {
          _this5.handleNetworkError();
        });
      }
    }
  }, {
    key: "handleNetworkResponse",
    value: function handleNetworkResponse(response) {
      if (!response.data.result) {
        if (response.data.error) {
          switch (response.data.error) {
            case Constants.NO_FACE:
              this.alert.error('На фото не обнаружено лица');
              this.props.reset();
              break;

            case Constants.MORE_ONE_FACES:
              this.alert.error('На фото обнаружено более одного лица');
              this.props.reset();
              break;
          }
        }
      } else if (response.data.result.base64) {
        this.setState({
          preview: 'data:image/png;base64, ' + response.data.result.base64,
          uid: response.data.result.uid,
          noBgImageUrl: response.data.result.url
        });
        this._renderImage.src = response.data.result.url;
        this._watermakrImage.src = response.data.result.watermark_url;

        this._watermakrImage.onload = function () {};

        this.props.onRemoveBackground(response.data.result.watermark_url, response.data.result.is_background_removed);
      } else {
        this.networkError();
      }
    }
  }, {
    key: "handleNetworkError",
    value: function handleNetworkError() {
      this.setState({
        preview: '',
        networkError: true
      });
      this.alert.error('Извините, возникла сетевая ошибка');
    }
  }, {
    key: "saveCustomImage",
    value: function saveCustomImage() {
      var _this6 = this;

      var payload = {
        b64: null,
        uid: this.state.uid,
        hue: this.state.hue.value,
        corner: this.state.corner.value
      }; // if dimension of final photo is present in pixels
      // save image with exact size

      if (this.props.standard.dimensions.units && this.props.standard.dimensions.units === 'px') {
        payload['size'] = [this.props.standard.dimensions.pictureWidth, this.props.standard.dimensions.pictureHeight];
      }

      if (this.props.standard.extension) payload['ext'] = this.props.standard.extension;
      return this.cropImage(this.cropData, true).then(function (r) {
        payload.b64 = _this6._renderCanvas.toDataURL();
        return axios_default.a.post("".concat(_this6.props.serviceHost, "/api/save-photo-b64"), payload);
      });
    }
  }, {
    key: "saveGeneratedImage",
    value: function saveGeneratedImage() {
      var scale = 1;
      var dimensions = this.props.standard.dimensions; // if dimension of final photo is present in pixels
      // save image without scaling

      if (!dimensions.units || dimensions.units === 'mm') {
        scale = this._watermakrImage.naturalWidth / 2 / dimensions.pictureWidth;
      }

      var payload = {
        url: this.state.noBgImageUrl,
        debug: this.props.debug,
        uid: this.state.uid,
        hue: this.state.hue.value,
        corner: this.state.corner.value,
        scale: scale,
        dimensions: {
          width: dimensions.pictureWidth,
          height: dimensions.pictureHeight,
          crown: dimensions.crownTop,
          chin: dimensions.faceHeight + dimensions.crownTop
        }
      };
      if (this.props.standard.extension) payload['ext'] = this.props.standard.extension;
      return axios_default.a.post("".concat(this.props.serviceHost, "/api/render-photo"), payload);
    }
  }, {
    key: "createLoadingAnimation",
    value: function createLoadingAnimation() {
      //let animatedCanvas = new this.fabric.Canvas();
      //this.state.dimensions.pictureWidth * this.dimensionMultiplier
      //animatedCanvas.setWidth(250);
      //animatedCanvas.setWidth(333);
      var image = new this.fabric.Image(this._watermakrImage, {
        width: this._watermakrImage.naturalWidth,
        height: this._watermakrImage.naturalHeight,
        left: 0,
        top: 0
      });
      /*image.scaleToHeight(animatedCanvas.getHeight(), true);
      image.scaleToWidth(animatedCanvas.getWidth(), true);
      		if (image.height < image.width)
      	image.top = (image.height / image.width) * 2 * 10;
      		animatedCanvas.add(image);
      let scannerLine = new this.fabric.Line([0, 0, animatedCanvas.getWidth(), 0], { stroke: 'red' });
      animatedCanvas.add(scannerLine);
      		let down = true;
      let step = 5;
      		let interval = setInterval(() => {
      			if (scannerLine.top >= 0 && !down) {
      		scannerLine.top -= step;
      	}
      	else if (scannerLine.top < animatedCanvas.getHeight() && down) {
      		scannerLine.top += step;
      	}
      	else if (scannerLine.top >= animatedCanvas.getHeight()) {
      		down = false;
      	}
      	else if (scannerLine.top <= 0) {
      		down = true;
      	}
      			if (this.state.preview || this.state.networkError) {
      		animatedCanvas.remove(scannerLine);
      		clearInterval(interval);
      	}
      			this.setState({
      		//loadingAnimation: animatedCanvas.toDataURL()
      	});
      		}, 50);*/

      this.setState({
        loadingAnimation: image.toDataURL()
      });
      var animation = "@keyframes scanning {\n          50% {\n            transform: translateY(".concat(this._canvas.height, "px);\n          }\n        }");
      var style = document.createElement('style');
      style.innerHTML = animation;
      var ref = document.querySelector('script');
      ref.parentNode.insertBefore(style, ref);
    }
  }, {
    key: "selectType",
    value: function selectType(type) {
      if (type === Constants.GENERATED && this.state.networkError) {
        this.alert.error('Вы не можете выбрать эту опцию');
        return false;
      }

      this.setState({
        selectedType: type,
        isOptionsChanged: true
      });
    }
  }, {
    key: "openEditor",
    value: function openEditor() {
      this.setState({
        selectedType: Constants.CUSTOM,
        isOptionsChanged: true
      });
      this.props.showEditor.call(this);
    }
  }, {
    key: "handleQuantityChange",
    value: function handleQuantityChange(event) {
      var value = parseInt(event.target.value);

      if (isNaN(value) || value < 1 || value > 99) {
        this.alert.error('Неверное значение');
        return false;
      }

      this.setState({
        quantity: value,
        isOptionsChanged: true
      });
    }
  }, {
    key: "handleCornerChange",
    value: function handleCornerChange(event) {
      var corner = this.props.standard.corners.filter(function (corner) {
        return corner.id === event.target.value;
      });
      this.setState({
        corner: corner.length ? corner[0] : {
          value: 'none'
        },
        isOptionsChanged: true
      });
    }
  }, {
    key: "handleColorChange",
    value: function handleColorChange(event) {
      var color = this.props.standard.colors.filter(function (color) {
        return color.id === event.target.value;
      });
      this.setState({
        hue: color.length ? color[0] : {
          value: 'color'
        },
        isOptionsChanged: true
      });
    }
    /**
     * Create object with selected options and params
     * @returns {}
     */

  }, {
    key: "createResultForOrder",
    value: function createResultForOrder() {
      var _this7 = this;

      var corner = this.props.standard.corners.filter(function (corner) {
        return corner.value === _this7.state.corner.value;
      });
      var hue = this.props.standard.colors.filter(function (color) {
        return color.value === _this7.state.hue.value;
      });
      if (corner.length) corner = corner[0];
      if (hue.length) hue = hue[0];
      return {
        quantity: this.state.quantity,
        type: this.state.selectedType,
        corner: this.state.corner,
        hue: this.state.hue,
        uid: this.state.uid,
        standard: this.props.standard,
        originalImageUrl: this.state.originalImageUrl,
        extraOptions: this.state.extraOptions
      };
    }
    /**
     * Send options to callback whe option changed
     * @param extraOption
     */

  }, {
    key: "sendOptionsToCallback",
    value: function sendOptionsToCallback(extraOption) {
      // get selected options
      var parameters = this.createResultForOrder(); // if changed additional option
      // update state

      if (extraOption) {
        var index = parameters.extraOptions.findIndex(function (obj) {
          return obj[0] === extraOption[0];
        });

        if (index < 0) {
          parameters.extraOptions.push(extraOption);
        } else {
          parameters.extraOptions[index] = extraOption;
        }

        this.setState({
          extraOptions: parameters.extraOptions
        });
      } // fire callback


      this.props.onOptionChanged.call(this, parameters); // set flag to false
      // after sending options to callback

      this.setState({
        isOptionsChanged: false
      });
    }
    /**
     * Call method when click order button
     */

  }, {
    key: "makeOrder",
    value: function makeOrder() {
      var _this8 = this;

      this.setState({
        inProcess: true
      });
      var response = null;

      switch (this.state.selectedType) {
        case Constants.GENERATED:
          response = this.saveGeneratedImage();
          break;

        default:
          response = this.saveCustomImage();
          break;
      }

      response.then(function (result) {
        var parameters = _this8.createResultForOrder();

        _this8.props.onOrderClick.call(_this8, parameters);

        _this8.alert.success('Заказ принят в обработку');
        /*this.setState({
        	preview: null
        });*/

      })["catch"](function (error) {
        _this8.alert.error('Извините, возникла сетевая ошибка');
      })["finally"](function () {
        _this8.setState({
          inProcess: false
        });
      });
    }
  }, {
    key: "render",
    value: function render(props, state, context) {
      var _this9 = this;

      return Object(preact_module["h"])(dist_react_loadingmask_default.a, {
        loading: this.state.preview === null,
        text: 'loading...',
        style: {
          width: '100%'
        }
      }, this.props.debug && Object(preact_module["h"])("div", {
        className: "text-center debug-canvas-container"
      }, Object(preact_module["h"])("canvas", {
        id: "developPreview",
        style: {
          background: 'none',
          margin: '0 auto'
        },
        className: "img-thumbnail"
      })), Object(preact_module["h"])("div", {
        style: {
          margin: '0 auto',
          padding: '10px'
        }
      }, this.props.isEditorOpen && Object(preact_module["h"])("div", {
        className: "container"
      }, Object(preact_module["h"])("div", {
        className: "row"
      }, Object(preact_module["h"])("div", {
        className: "col text-center"
      }, Object(preact_module["h"])("p", {
        className: "title"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u0430\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F: ")))), Object(preact_module["h"])("div", {
        className: "container previews"
      }, Object(preact_module["h"])("div", {
        className: "row"
      }, Object(preact_module["h"])("div", {
        className: "col",
        style: {
          display: this.props.isEditorOpen ? 'block' : 'none'
        }
      }, Object(preact_module["h"])("div", {
        className: "corner-".concat(this.state.corner.value, " preview\n\t\t\t\t\t\t\t\t\t").concat(this.state.selectedType === Constants.CUSTOM ? 'active' : ''),
        onClick: this.selectType.bind(this, Constants.CUSTOM)
      }, Object(preact_module["h"])("canvas", {
        id: "canvasPreview",
        className: "".concat(this.state.hue.value === 'gray' ? 'grayscale' : '', " lower-canvas"),
        style: {
          width: "".concat(this.state.dimensions.pictureWidth, "px"),
          height: "".concat(this.state.dimensions.pictureHeight, "px"),
          background: 'none'
        }
      })), Object(preact_module["h"])("p", {
        className: "label"
      }, "\u0420\u0443\u0447\u043D\u043E\u0439 \u0440\u0435\u0436\u0438\u043C")), Object(preact_module["h"])("div", {
        className: "col"
      }, Object(preact_module["h"])("div", {
        className: "corner-".concat(this.state.corner.value, " preview\n\t\t\t\t\t\t\t\t\t").concat(this.state.preview === null ? 'preloader-scan' : '', "\n\t\t\t\t\t\t\t\t\t").concat(this.state.selectedType === Constants.GENERATED ? 'active' : ''),
        onClick: this.selectType.bind(this, Constants.GENERATED)
      }, Object(preact_module["h"])("div", {
        className: "diode"
      }, Object(preact_module["h"])("div", {
        className: "laser"
      })), Object(preact_module["h"])("svg", {
        width: "".concat(this.state.dimensions.pictureWidth, "px"),
        height: "".concat(this.state.dimensions.pictureHeight, "px"),
        version: "1.1",
        className: this.state.hue.value === 'gray' && this.state.preview ? 'grayscale' : null
      }, Object(preact_module["h"])("image", {
        xlinkHref: this.state.preview || this.state.loadingAnimation,
        x: "0",
        y: "0",
        height: "100%",
        width: "100%"
      }))), this.props.isEditorOpen && Object(preact_module["h"])("p", {
        className: "label"
      }, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C")))), this.state.preview !== null && !this.props.isEditorOpen && Object(preact_module["h"])("div", {
        className: 'container text-center'
      }, Object(preact_module["h"])("p", {
        className: "bd-highlight text-wrap text-info mt-2"
      }, this.state.networkError ? Object(preact_module["h"])("p", {
        className: "text-danger m-0"
      }, "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0412\u0430\u0448\u0443 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E.") : Object(preact_module["h"])("p", {
        className: "m-0"
      }, "\u041D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442?"), "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0435\u0436\u0438\u043C:"), Object(preact_module["h"])("button", {
        onClick: this.openEditor.bind(this),
        type: "button",
        className: "btn btn-dark"
      }, "\u0420\u0443\u0447\u043D\u043E\u0439 \u0440\u0435\u0436\u0438\u043C")), this.props.standard.extraOptions && Object(preact_module["h"])("div", {
        className: "container mt-3"
      }, Object(preact_module["h"])("div", {
        className: "row"
      }, Object(preact_module["h"])("div", {
        className: "col"
      }, Object(preact_module["h"])(options_Options, {
        onOptionChanged: function onOptionChanged(option) {
          return _this9.sendOptionsToCallback.call(_this9, option);
        },
        options: this.props.standard.extraOptions
      })))), Object(preact_module["h"])("div", {
        className: "container mt-3"
      }, Object(preact_module["h"])("div", {
        className: "row"
      }, Object(preact_module["h"])("div", {
        className: "col text-right"
      }, //(this.state.preview !== null || this.props.isEditorOpen) &&
      Object(preact_module["h"])("div", {
        className: "form-row justify-content-end align-items-center"
      }, this.colors && this.colors.length > 1 && Object(preact_module["h"])("div", {
        className: "col-md-auto col-sm-1"
      }, Object(preact_module["h"])("div", {
        className: "form-group"
      }, Object(preact_module["h"])("div", {
        className: "input-group mb-2"
      }, this.colors))), this.corners && this.corners.length > 1 && Object(preact_module["h"])("div", {
        className: "col-md-auto col-sm-1"
      }, Object(preact_module["h"])("div", {
        className: "form-group"
      }, Object(preact_module["h"])("div", {
        className: "input-group"
      }, Object(preact_module["h"])("select", {
        onChange: this.handleCornerChange.bind(this),
        className: 'custom-select'
      }, this.corners)))), Object(preact_module["h"])("div", {
        className: "col-md-auto col-sm-1"
      }, Object(preact_module["h"])("div", {
        className: "form-group"
      }, Object(preact_module["h"])("div", {
        className: "input-group"
      }, Object(preact_module["h"])("div", {
        className: "input-group-prepend"
      }, Object(preact_module["h"])("div", {
        className: "input-group-text"
      }, Object(preact_module["h"])("label", null, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:"))), Object(preact_module["h"])("input", {
        type: "number",
        className: "form-control",
        min: "1",
        max: "99",
        value: this.state.quantity,
        onChange: this.handleQuantityChange.bind(this)
      })))), Object(preact_module["h"])("div", {
        className: "col-md-auto col-sm-1"
      }, Object(preact_module["h"])("div", {
        className: "form-group"
      }, Object(preact_module["h"])("button", {
        className: 'btn btn-outline-primary w-100 btn-order',
        disabled: this.state.inProcess,
        onClick: this.makeOrder.bind(this)
      }, this.state.inProcess ? Object(preact_module["h"])("div", null, Object(preact_module["h"])("span", {
        className: "spinner-border spinner-border-sm",
        role: "status",
        "aria-hidden": "true"
      })) : "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C (".concat(this.props.price, ")"))))))))));
    }
  }]);

  return Preview;
}(preact_module["a" /* Component */]);

/* harmony default export */ var preview = (preview_Preview);
// CONCATENATED MODULE: ./src/components/welcome/list.js
function list_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { list_typeof = function _typeof(obj) { return typeof obj; }; } else { list_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return list_typeof(obj); }

function list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function list_createClass(Constructor, protoProps, staticProps) { if (protoProps) list_defineProperties(Constructor.prototype, protoProps); if (staticProps) list_defineProperties(Constructor, staticProps); return Constructor; }

function list_possibleConstructorReturn(self, call) { if (call && (list_typeof(call) === "object" || typeof call === "function")) { return call; } return list_assertThisInitialized(self); }

function list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function list_getPrototypeOf(o) { list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return list_getPrototypeOf(o); }

function list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) list_setPrototypeOf(subClass, superClass); }

function list_setPrototypeOf(o, p) { list_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return list_setPrototypeOf(o, p); }


var list_List =
/*#__PURE__*/
function (_Component) {
  list_inherits(List, _Component);

  function List() {
    list_classCallCheck(this, List);

    return list_possibleConstructorReturn(this, list_getPrototypeOf(List).apply(this, arguments));
  }

  list_createClass(List, [{
    key: "render",
    value: function render(props, state, context) {
      return Object(preact_module["h"])("ul", {
        className: 'list-group list-group-flush'
      }, this.props.tips.map(function (tip, key) {
        return Object(preact_module["h"])("li", {
          "class": 'list-group-item list-group-item-action',
          key: key
        }, Object(preact_module["h"])("div", {
          "class": "d-flex w-100 justify-content-start"
        }, tip.icon && Object(preact_module["h"])("div", null, Object(preact_module["h"])("img", {
          src: tip.icon,
          alt: tip.title,
          style: {
            width: '50px'
          },
          "class": "mr-4 img-thumbnail"
        })), Object(preact_module["h"])("div", null, Object(preact_module["h"])("h6", {
          "class": "mb-1"
        }, tip.title), tip.text ? Object(preact_module["h"])("p", {
          "class": "mb-1"
        }, tip.text) : '')));
      }));
    }
  }]);

  return List;
}(preact_module["a" /* Component */]);
// CONCATENATED MODULE: ./src/components/welcome/index.js
function welcome_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { welcome_typeof = function _typeof(obj) { return typeof obj; }; } else { welcome_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return welcome_typeof(obj); }

function welcome_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function welcome_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function welcome_createClass(Constructor, protoProps, staticProps) { if (protoProps) welcome_defineProperties(Constructor.prototype, protoProps); if (staticProps) welcome_defineProperties(Constructor, staticProps); return Constructor; }

function welcome_possibleConstructorReturn(self, call) { if (call && (welcome_typeof(call) === "object" || typeof call === "function")) { return call; } return welcome_assertThisInitialized(self); }

function welcome_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function welcome_getPrototypeOf(o) { welcome_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return welcome_getPrototypeOf(o); }

function welcome_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) welcome_setPrototypeOf(subClass, superClass); }

function welcome_setPrototypeOf(o, p) { welcome_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return welcome_setPrototypeOf(o, p); }




var welcome_Welcome =
/*#__PURE__*/
function (_Component) {
  welcome_inherits(Welcome, _Component);

  function Welcome() {
    welcome_classCallCheck(this, Welcome);

    return welcome_possibleConstructorReturn(this, welcome_getPrototypeOf(Welcome).call(this));
  }

  welcome_createClass(Welcome, [{
    key: "render",
    value: function render(props, state, context) {
      return Object(preact_module["h"])("div", {
        className: "welcome-container"
      }, Object(preact_module["h"])(list_List, {
        tips: this.props.tips
      }));
    }
  }]);

  return Welcome;
}(preact_module["a" /* Component */]);

/* harmony default export */ var welcome = (welcome_Welcome);
// CONCATENATED MODULE: ./src/components/app.js
function app_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { app_typeof = function _typeof(obj) { return typeof obj; }; } else { app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return app_typeof(obj); }

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }

function app_possibleConstructorReturn(self, call) { if (call && (app_typeof(call) === "object" || typeof call === "function")) { return call; } return app_assertThisInitialized(self); }

function app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function app_getPrototypeOf(o) { app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return app_getPrototypeOf(o); }

function app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) app_setPrototypeOf(subClass, superClass); }

function app_setPrototypeOf(o, p) { app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return app_setPrototypeOf(o, p); }








var app_initialState = {
  view: 'editor',
  isEditorOpen: false,
  selectedStandard: null,
  noBgImageUrl: null,
  imageUrl: null,
  country: null,
  isPhotoMeetRequirements: true,
  standards: [],
  photoSize: {},
  price: null
};

var app_App =
/*#__PURE__*/
function (_Component) {
  app_inherits(App, _Component);

  function App() {
    var _this;

    app_classCallCheck(this, App);

    _this = app_possibleConstructorReturn(this, app_getPrototypeOf(App).call(this));

    _this.handleStandardChange = function (event) {
      var selectedStandard = _this.props.options.standards.map(function (item) {
        return item;
      }).filter(function (item) {
        return item.id === event.target.value;
      });

      if (selectedStandard.length > 0) {
        selectedStandard = selectedStandard[0];

        _this.setState({
          selectedStandard: selectedStandard,
          price: selectedStandard.price.text
        });
      }
    };

    _this.handleCountryChange = function (event) {
      var standards = _this.props.options.standards.filter(function (item) {
        return item.country === event.target.value;
      }).map(function (item) {
        return Object(preact_module["h"])("option", {
          value: item.id
        }, item.text);
      });

      standards.unshift(Object(preact_module["h"])("option", {
        value: "0",
        disabled: true,
        selected: true
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430"));

      _this.setState({
        country: event.target.value,
        standards: [standards],
        selectedStandard: null
      });
    };

    _this.showEditor = function () {
      _this.setState({
        isEditorOpen: true
      });
    };

    _this.setImageUrl = function (url) {
      react_alert_useAlert().info("Проверяем фотографию", {
        timeout: 2000
      });
      var tmpImage = new Image();
      tmpImage.src = url;

      tmpImage.onload = function () {
        var isPhotoMeetRequirements = tmpImage.naturalWidth >= _this.restrictions.minWidth && tmpImage.naturalWidth <= _this.restrictions.maxWidth && tmpImage.naturalHeight >= _this.restrictions.minHeight && tmpImage.naturalHeight <= _this.restrictions.maxHeight;

        if (!isPhotoMeetRequirements) {
          _this.setState({
            imageUrl: null,
            isPhotoMeetRequirements: false,
            photoSize: {
              width: tmpImage.naturalWidth,
              height: tmpImage.naturalHeight
            }
          });

          var uploadPhotoButton = document.getElementById("uploadPhoto");
          uploadPhotoButton.removeAttribute("disabled");
          uploadPhotoButton.innerHTML = "";
          react_alert_useAlert().error("Извините, Ваша фотография не соответствует требованиям");
        } else {
          _this.setState({
            imageUrl: url,
            isPhotoMeetRequirements: true,
            isEditorOpen: false
          });
        }
      };
    };

    _this.state = app_initialState;
    _this.restrictions = {};
    return _this;
  }

  app_createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.countries = this.props.options.countries.filter(function (item) {
        return true;
      }).map(function (country) {
        return Object(preact_module["h"])("option", {
          value: country
        }, country);
      });
      this.countries.unshift(Object(preact_module["h"])("option", {
        value: "0",
        disabled: true,
        selected: true
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0443"));
      this.setState({
        selectedStandard: null
      });
      this.restrictions = this.props.options.photoRestriction;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState(app_initialState);
    }
  }, {
    key: "onRemoveBackground",
    value: function onRemoveBackground(url, isBgRemoved) {
      this.setState({
        noBgImageUrl: url
      });
      if (isBgRemoved) this.props.options.onBackgroundRemoved.call(this);
    }
  }, {
    key: "updatePrice",
    value: function updatePrice(price) {
      this.setState({
        price: price
      });
    }
  }, {
    key: "render",
    value: function render(props, state, context) {
      var _this2 = this;

      this.emitter = new eventemitter3_default.a();
      return Object(preact_module["h"])("div", {
        className: "container"
      }, this.state.imageUrl ? Object(preact_module["h"])("div", {
        className: "row justify-content-center"
      }, this.state.isEditorOpen && Object(preact_module["h"])("div", {
        className: "col-md-4 mx-2 app-card d-flex justify-content-center align-items-center"
      }, Object(preact_module["h"])(editor, {
        emitter: this.emitter,
        imageUrl: this.state.noBgImageUrl || this.state.imageUrl,
        standard: this.state.selectedStandard
      })), this.state.imageUrl && Object(preact_module["h"])("div", {
        className: "col-md-7 mx-2 text-centered  app-card d-flex justify-content-center\r align-items-center preview-component"
      }, Object(preact_module["h"])(preview, {
        emitter: this.emitter,
        imageUrl: this.state.imageUrl,
        previewSize: this.props.options.preview.size,
        serviceHost: this.props.options.serviceHost,
        debug: this.props.options.debug,
        removeBackground: this.props.options.removeBackground,
        onOrderClick: this.props.options.onOrderClick,
        onOptionChanged: this.props.options.onOptionChanged,
        onRemoveBackground: function onRemoveBackground(url, isBgRemoved) {
          return _this2.onRemoveBackground.call(_this2, url, isBgRemoved);
        },
        isEditorOpen: this.state.isEditorOpen,
        standard: this.state.selectedStandard,
        reset: this.reset.bind(this),
        price: this.state.price,
        showEditor: this.showEditor.bind(this)
      }))) : Object(preact_module["h"])("div", {
        className: "row justify-content-center"
      }, Object(preact_module["h"])("div", {
        className: "col mt-3"
      }, Object(preact_module["h"])(welcome, {
        tips: this.props.options.tips
      }), Object(preact_module["h"])("div", {
        className: "row"
      }, Object(preact_module["h"])("div", {
        className: "col"
      }, Object(preact_module["h"])("p", {
        className: "label mb-1 mt-3"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0443:"), Object(preact_module["h"])("select", {
        name: "standards",
        id: "standards",
        className: "custom-select custom-select-sm",
        onChange: this.handleCountryChange.bind(this)
      }, this.countries)), this.state.country && Object(preact_module["h"])("div", {
        className: "col"
      }, Object(preact_module["h"])("p", {
        className: "label mb-1 mt-3"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430:"), Object(preact_module["h"])("select", {
        name: "standards",
        id: "standards",
        className: "custom-select custom-select-sm",
        value: this.state.selectedStandard === null ? 0 : this.state.selectedStandard.id,
        onChange: this.handleStandardChange.bind(this)
      }, this.state.standards))), !this.state.isPhotoMeetRequirements && Object(preact_module["h"])("div", {
        className: "alert alert-warning mt-3",
        role: "alert"
      }, Object(preact_module["h"])("p", {
        className: "mb-0"
      }, "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u0430\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C:"), Object(preact_module["h"])("ul", null, Object(preact_module["h"])("li", null, "\u041D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 ", this.restrictions.minWidth, " x ", this.restrictions.minHeight, "px"), Object(preact_module["h"])("li", null, "\u041D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 ", this.restrictions.maxWidth, " x ", this.restrictions.maxHeight, "px")), Object(preact_module["h"])("hr", null), Object(preact_module["h"])("p", null, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0412\u0430\u0448\u0435\u0433\u043E \u0444\u043E\u0442\u043E: ", this.state.photoSize.width, " x ", this.state.photoSize.height, "px")), this.state.selectedStandard && Object(preact_module["h"])("div", {
        className: "text-center mt-3"
      }, Object(preact_module["h"])("button", {
        className: "btn btn-outline-success",
        id: "uploadPhoto",
        onClick: this.props.options.onRequestPhotoClick.bind(this)
      }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E")))));
    }
  }]);

  return App;
}(preact_module["a" /* Component */]);


// CONCATENATED MODULE: ./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js


var react_alert_template_basic_BaseIcon = function BaseIcon(_ref) {
  var color = _ref.color,
      _ref$pushRight = _ref.pushRight,
      pushRight = _ref$pushRight === undefined ? true : _ref$pushRight,
      children = _ref.children;
  return compat_module["default"].createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: { marginRight: pushRight ? '20px' : '0', minWidth: 24 }
    },
    children
  );
};

var react_alert_template_basic_InfoIcon = function InfoIcon() {
  return compat_module["default"].createElement(
    react_alert_template_basic_BaseIcon,
    { color: '#2E9AFE' },
    compat_module["default"].createElement('circle', { cx: '12', cy: '12', r: '10' }),
    compat_module["default"].createElement('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
    compat_module["default"].createElement('line', { x1: '12', y1: '8', x2: '12', y2: '8' })
  );
};

var react_alert_template_basic_SuccessIcon = function SuccessIcon() {
  return compat_module["default"].createElement(
    react_alert_template_basic_BaseIcon,
    { color: '#31B404' },
    compat_module["default"].createElement('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
    compat_module["default"].createElement('polyline', { points: '22 4 12 14.01 9 11.01' })
  );
};

var react_alert_template_basic_ErrorIcon = function ErrorIcon() {
  return compat_module["default"].createElement(
    react_alert_template_basic_BaseIcon,
    { color: '#FF0040' },
    compat_module["default"].createElement('circle', { cx: '12', cy: '12', r: '10' }),
    compat_module["default"].createElement('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
    compat_module["default"].createElement('line', { x1: '12', y1: '16', x2: '12', y2: '16' })
  );
};

var react_alert_template_basic_CloseIcon = function CloseIcon() {
  return compat_module["default"].createElement(
    react_alert_template_basic_BaseIcon,
    { color: '#FFFFFF', pushRight: false },
    compat_module["default"].createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
    compat_module["default"].createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
  );
};

var react_alert_template_basic_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var alertStyle = {
  backgroundColor: '#151515',
  color: 'white',
  padding: '10px',
  textTransform: 'uppercase',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
  fontFamily: 'Arial',
  width: '300px',
  boxSizing: 'border-box'
};

var buttonStyle = {
  marginLeft: '20px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '#FFFFFF'
};

var react_alert_template_basic_AlertTemplate = function AlertTemplate(_ref) {
  var message = _ref.message,
      options = _ref.options,
      style = _ref.style,
      close = _ref.close;

  return compat_module["default"].createElement(
    'div',
    { style: react_alert_template_basic_extends({}, alertStyle, style) },
    options.type === 'info' && compat_module["default"].createElement(react_alert_template_basic_InfoIcon, null),
    options.type === 'success' && compat_module["default"].createElement(react_alert_template_basic_SuccessIcon, null),
    options.type === 'error' && compat_module["default"].createElement(react_alert_template_basic_ErrorIcon, null),
    compat_module["default"].createElement(
      'span',
      { style: { flex: 2 } },
      message
    ),
    compat_module["default"].createElement(
      'button',
      { onClick: close, style: buttonStyle },
      compat_module["default"].createElement(react_alert_template_basic_CloseIcon, null)
    )
  );
};

/* harmony default export */ var react_alert_template_basic = (react_alert_template_basic_AlertTemplate);

// EXTERNAL MODULE: ./src/assets/photo-standards.json
var photo_standards = __webpack_require__(17);

// CONCATENATED MODULE: ./src/index.js
function src_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { src_typeof = function _typeof(obj) { return typeof obj; }; } else { src_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return src_typeof(obj); }

function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_possibleConstructorReturn(self, call) { if (call && (src_typeof(call) === "object" || typeof call === "function")) { return call; } return src_assertThisInitialized(self); }

function src_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function src_getPrototypeOf(o) { src_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return src_getPrototypeOf(o); }

function src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) src_setPrototypeOf(subClass, superClass); }

function src_setPrototypeOf(o, p) { src_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return src_setPrototypeOf(o, p); }

function src_extends() {
  src_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return src_extends.apply(this, arguments);
}










var src_PhotoPassport =
/*#__PURE__*/
function (_Component) {
  src_inherits(PhotoPassport, _Component);

  function PhotoPassport(options) {
    var _this;

    src_classCallCheck(this, PhotoPassport);

    _this = src_possibleConstructorReturn(this, src_getPrototypeOf(PhotoPassport).call(this));

    _this.setImage = function (imageUrl) {
      _this.child.current.setImageUrl(imageUrl);
    };

    _this.updatePrice = function (price) {
      _this.child.current.updatePrice(price);
    };

    _this.child = Object(preact_module["g" /* createRef */])();
    var defaults = {
      preview: {
        size: 200 // size of generated preview

      },
      tips: [],
      // list of tips for welcome screen
      onRequestPhotoClick: function onRequestPhotoClick() {},
      // callback fire when user click add photo
      onOrderClick: function onOrderClick() {},
      // callback for order click
      onOptionChanged: function onOptionChanged() {},
      // callback for option change
      onBackgroundRemoved: function onBackgroundRemoved() {},
      // callback for option change
      container: null,
      // id of container
      serviceHost: null,
      // url for backend
      debug: false,
      // debug mode
      standards: photo_standards,
      // list of objects with document specification
      corners: {},
      removeBackground: false,
      photoRestriction: {
        minWidth: 25,
        minHeight: 40,
        maxWidth: 5000,
        maxHeight: 5000
      }
    };
    var alertOptions = {
      position: positions.TOP_CENTER,
      timeout: 5000,
      offset: '20px',
      transition: transitions.SCALE,
      containerStyle: {
        fontSize: '12px',
        zIndex: 12
      }
    };
    var missingParams = [];
    Object.entries(defaults).map(function (item) {
      if (!options[item[0]] && item[1] === null) {
        missingParams.push(Object(preact_module["h"])("p", null, Object(preact_module["h"])("code", null, item[0])));
      }
    });
    options = Object.assign({}, defaults, options);
    var container = document.getElementById(options.container) || document.body;
    container.addEventListener('contextmenu', function (event) {
      return event.preventDefault();
    });

    var Root = function Root() {
      if (missingParams.length === 0) {
        return Object(preact_module["h"])(react_alert_Provider, src_extends({
          template: react_alert_template_basic
        }, alertOptions), Object(preact_module["h"])(app_App, {
          ref: _this.child,
          options: options
        }));
      } else {
        return Object(preact_module["h"])("div", {
          "class": "text-center"
        }, Object(preact_module["h"])("h6", null, "Missing required options:"), Object(preact_module["h"])("div", null, missingParams));
      }
    };

    Object(preact_module["k" /* render */])(Object(preact_module["h"])(Root, null), container);
    return _this;
  }

  return PhotoPassport;
}(preact_module["a" /* Component */]);

/* harmony default export */ var src = __webpack_exports__["default"] = (src_PhotoPassport);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=bundle.js.map