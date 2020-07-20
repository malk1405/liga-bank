/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./source/js/main.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/img/svg/inline/cellphone-footer.svg":
/*!****************************************************!*\
  !*** ./source/img/svg/inline/cellphone-footer.svg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _extends({
    width: "10",
    height: "16",
    viewBox: "0 0 10 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M8.837 0H1.163C.523 0 0 .486 0 1.08V14.92C0 15.514.523 16 1.163 16h7.674c.64 0 1.163-.486 1.163-1.08V1.08C10 .487 9.477 0 8.837 0zM3.772.779h2.456c.077 0 .14.058.14.131 0 .072-.063.13-.14.13H3.772c-.077 0-.14-.058-.14-.13 0-.073.063-.131.14-.131zM5 15.459c-.321 0-.581-.241-.581-.54 0-.3.26-.54.581-.54.321 0 .581.24.581.54 0 .299-.26.54-.581.54zM9.19 14H.81V1.714h8.38V14z"
  }));
});

/***/ }),

/***/ "./source/img/svg/inline/facebook.svg":
/*!********************************************!*\
  !*** ./source/img/svg/inline/facebook.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _extends({
    width: "9",
    height: "16",
    viewBox: "0 0 9 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M6 9.2h2.143L9 6H6V4.4c0-.824 0-1.6 1.714-1.6H9V.112A25.85 25.85 0 006.551 0c-2.327 0-3.98 1.326-3.98 3.76V6H0v3.2h2.571V16H6V9.2z"
  }));
});

/***/ }),

/***/ "./source/img/svg/inline/instagram.svg":
/*!*********************************************!*\
  !*** ./source/img/svg/inline/instagram.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _extends({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M8 0c2.174 0 2.445.008 3.298.048.852.04 1.432.174 1.942.372a3.9 3.9 0 011.418.922c.406.4.721.884.922 1.418.198.51.332 1.09.372 1.942C15.99 5.555 16 5.826 16 8s-.008 2.445-.048 3.298c-.04.852-.174 1.432-.372 1.942a3.907 3.907 0 01-.922 1.418c-.4.406-.884.721-1.418.922-.51.198-1.09.332-1.942.372C10.445 15.99 10.174 16 8 16s-2.445-.008-3.298-.048c-.852-.04-1.432-.174-1.942-.372a3.911 3.911 0 01-1.418-.922A3.923 3.923 0 01.42 13.24c-.198-.51-.332-1.09-.372-1.942C.01 10.445 0 10.174 0 8s.008-2.445.048-3.298C.088 3.85.222 3.27.42 2.76c.2-.534.515-1.018.922-1.418.4-.407.884-.721 1.418-.922C3.27.222 3.85.088 4.702.048 5.555.01 5.826 0 8 0zm0 4a4 4 0 100 8 4 4 0 000-8zm5.2-.2a1 1 0 10-2 0 1 1 0 002 0zM8 5.6a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8z"
  }));
});

/***/ }),

/***/ "./source/img/svg/inline/login.svg":
/*!*****************************************!*\
  !*** ./source/img/svg/inline/login.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _extends({
    width: "20",
    height: "22",
    viewBox: "0 0 20 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M2.222 14.3h2.222v5.5h13.334V2.2H4.444v5.5H2.222V1.1c0-.292.117-.572.326-.778.208-.206.49-.322.785-.322H18.89c.295 0 .577.116.786.322.208.206.325.486.325.778v19.8c0 .292-.117.572-.325.778a1.117 1.117 0 01-.786.322H3.333c-.294 0-.577-.116-.785-.322a1.095 1.095 0 01-.326-.778v-6.6zM8.89 9.9V6.6l5.555 4.4-5.555 4.4v-3.3H0V9.9h8.889z"
  }));
});

/***/ }),

/***/ "./source/img/svg/inline/logo.svg":
/*!****************************************!*\
  !*** ./source/img/svg/inline/logo.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _extends({
    width: "150",
    height: "27",
    viewBox: "0 0 150 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M51.1 26h-3.02V14.24h-3.5l-.26 2c-.08.72-.173 1.453-.28 2.2a66.096 66.096 0 01-.3 2.1 39.205 39.205 0 01-.32 1.74c-.173.827-.407 1.533-.7 2.12-.28.587-.673 1.033-1.18 1.34-.493.307-1.14.46-1.94.46-.52 0-1-.073-1.44-.22V23.5c.173.053.34.1.5.14.173.04.36.06.56.06.387 0 .68-.2.88-.6.213-.413.427-1.18.64-2.3a90.4 90.4 0 00.34-2c.147-.907.307-1.967.48-3.18.187-1.227.36-2.527.52-3.9h9.02V26zm3.602-14.28h2.72v6.9c0 .333-.006.707-.02 1.12l-.04 1.22c-.013.387-.026.727-.04 1.02-.013.28-.026.473-.04.58h.06l6.6-10.84h3.62V26h-2.7v-6.86c0-.36.007-.753.02-1.18l.04-1.26c.027-.4.047-.747.06-1.04.027-.307.047-.507.06-.6h-.08L58.342 26h-3.64V11.72zm25.485 0v2.5h-6V26h-3.02V11.72h9.02zM89.712 26l-1.04-3.4h-5.2l-1.04 3.4h-3.26l5.04-14.34h3.7L92.972 26h-3.26zm-1.76-5.94l-1.04-3.32a76.767 76.767 0 00-.26-.86c-.107-.347-.213-.7-.32-1.06a22.88 22.88 0 01-.26-.94c-.067.267-.16.6-.28 1-.107.387-.213.76-.32 1.12-.093.347-.167.593-.22.74l-1.02 3.32h3.72zM100.503 26V11.72h9.02v2.5h-6v2.98h1.2c1.347 0 2.447.187 3.3.56.867.373 1.507.887 1.92 1.54.413.653.62 1.4.62 2.24 0 1.413-.473 2.513-1.42 3.3-.933.773-2.427 1.16-4.48 1.16h-4.16zm3.02-2.48h1.02c.92 0 1.64-.147 2.16-.44.533-.293.8-.807.8-1.54 0-.76-.287-1.26-.86-1.5s-1.353-.36-2.34-.36h-.78v3.84zm13.974-8.66c1.467 0 2.587.32 3.36.96.787.627 1.18 1.593 1.18 2.9V26h-2.08l-.58-1.48h-.08c-.467.587-.96 1.013-1.48 1.28-.52.267-1.233.4-2.14.4-.973 0-1.78-.28-2.42-.84-.64-.573-.96-1.447-.96-2.62 0-1.16.407-2.013 1.22-2.56.813-.56 2.033-.867 3.66-.92l1.9-.06v-.48c0-.573-.153-.993-.46-1.26-.293-.267-.707-.4-1.24-.4s-1.053.08-1.56.24c-.507.147-1.013.333-1.52.56l-.98-2.02a8.583 8.583 0 011.94-.72 9.542 9.542 0 012.24-.26zm1.58 6.08l-1.16.04c-.96.027-1.627.2-2 .52s-.56.74-.56 1.26c0 .453.133.78.4.98.267.187.613.28 1.04.28.64 0 1.18-.187 1.62-.56.44-.387.66-.927.66-1.62v-.9zm8.99-5.86v4.2h4.16v-4.2h2.98V26h-2.98v-4.5h-4.16V26h-2.98V15.08h2.98zm17.423 0h3.28l-4.32 5.24 4.7 5.68h-3.38l-4.46-5.54V26h-2.98V15.08h2.98v5.3l4.18-5.3z",
    fill: "#1F1E25"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M16.75 1h-2.917L1 22.341h3.792l1.75-3.048L16.75 1z",
    fill: "#2C36F2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M2.75 26h24.5L16.75 7.098 15 10.146l5.25 9.147L22 22.342H1L2.75 26z",
    fill: "#2C36F2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M22 22.341l-1.75-3.048H6.542l-1.75 3.049H22z",
    fill: "#2C36F2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M27.25 26L29 22.341 16.75 1 6.542 19.293H9.75L15 10.146l1.75-3.048L27.25 26z",
    fill: "#2C36F2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M15 10.146l-5.25 9.147h10.5L15 10.146z",
    fill: "#2C36F2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M27.25 26H2.75L1 22.341M27.25 26L29 22.341 16.75 1m10.5 25L16.75 7.098 15 10.146M16.75 1h-2.917L1 22.341M16.75 1L6.542 19.293M1 22.342h3.792M15 10.146l-5.25 9.147M15 10.146l5.25 9.147m-10.5 0h10.5m-10.5 0H6.542m13.708 0L22 22.342H4.792m1.75-3.05l-1.75 3.05",
    stroke: "#F6F7FF"
  }));
});

/***/ }),

/***/ "./source/img/svg/inline/phone-footer.svg":
/*!************************************************!*\
  !*** ./source/img/svg/inline/phone-footer.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _extends({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M16 11.928v3.143a.888.888 0 01-.828.887c-.388.027-.705.041-.95.041C6.366 16 0 9.632 0 1.778c0-.246.013-.563.04-.951A.889.889 0 01.929 0H4.07a.444.444 0 01.443.4c.02.204.039.367.056.49a12.356 12.356 0 001.074 3.557c.085.178.03.39-.13.504L3.594 6.32a11.596 11.596 0 006.084 6.084l1.368-1.915a.41.41 0 01.51-.132c1.124.534 2.323.895 3.555 1.07.124.018.286.038.489.058a.444.444 0 01.399.442z"
  }));
});

/***/ }),

/***/ "./source/img/svg/inline/twitter.svg":
/*!*******************************************!*\
  !*** ./source/img/svg/inline/twitter.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _extends({
    width: "16",
    height: "13",
    viewBox: "0 0 16 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M16 1.543c-.6.265-1.236.44-1.886.516A3.292 3.292 0 0015.558.244a6.564 6.564 0 01-2.085.796A3.283 3.283 0 007.88 4.032 9.325 9.325 0 011.114.604a3.28 3.28 0 001.016 4.38 3.273 3.273 0 01-1.487-.41v.04a3.281 3.281 0 002.633 3.218c-.484.13-.99.15-1.483.056a3.283 3.283 0 003.066 2.279A6.59 6.59 0 010 11.525 9.29 9.29 0 005.031 13c6.039 0 9.341-4.999 9.341-9.334 0-.141-.004-.284-.01-.424A6.667 6.667 0 0016 1.544z"
  }));
});

/***/ }),

/***/ "./source/img/svg/inline/youtube.svg":
/*!*******************************************!*\
  !*** ./source/img/svg/inline/youtube.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", _extends({
    width: "16",
    height: "13",
    viewBox: "0 0 16 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M15.634 2.03C16 3.478 16 6.5 16 6.5s0 3.023-.366 4.47c-.203.8-.797 1.43-1.55 1.643C12.717 13 8 13 8 13s-4.714 0-6.084-.387c-.756-.216-1.35-.845-1.55-1.643C0 9.523 0 6.5 0 6.5s0-3.022.366-4.47c.203-.8.797-1.43 1.55-1.643C3.286 0 8 0 8 0s4.717 0 6.084.387c.756.216 1.35.845 1.55 1.643zM6.4 9.344L11.2 6.5 6.4 3.656v5.688z"
  }));
});

/***/ }),

/***/ "./source/img/svg/url/location--lg.svg":
/*!*********************************************!*\
  !*** ./source/img/svg/url/location--lg.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='37' height='42' viewBox='0 0 37 42' fill='none' class='map__location' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M30.8744 29.2842L18.5 41L6.12556 29.2842C3.67816 26.967 2.01147 24.0148 1.33625 20.8008C0.661026 17.5869 1.0076 14.2555 2.33214 11.228C3.65667 8.20049 5.89969 5.61285 8.77755 3.79229C11.6554 1.97172 15.0388 1 18.5 1C21.9612 1 25.3446 1.97172 28.2225 3.79229C31.1003 5.61285 33.3433 8.20049 34.6679 11.228C35.9924 14.2555 36.339 17.5869 35.6637 20.8008C34.9885 24.0148 33.3218 26.967 30.8744 29.2842Z' fill='%232C36F2'/%3E %3Cpath d='M19.5179 10.2308H17.8214L10.3564 22.4884H12.562L13.5799 20.7373L19.5179 10.2308Z' fill='%232C36F2'/%3E %3Cpath d='M11.3744 24.5897H25.6256L19.5179 13.733L18.5 15.4841L21.5538 20.7373L22.5718 22.4884H12.562H10.3564L11.3744 24.5897Z' fill='%232C36F2'/%3E %3Cpath d='M22.5718 22.4884L21.5538 20.7373H15.4462H13.5799L12.562 22.4884H22.5718Z' fill='%232C36F2'/%3E %3Cpath d='M25.6256 24.5897L26.6436 22.4884L19.5179 10.2308L13.5799 20.7373H15.4462L18.5 15.4841L19.5179 13.733L25.6256 24.5897Z' fill='%232C36F2'/%3E %3Cpath d='M18.5 15.4841L15.4462 20.7373H21.5538L18.5 15.4841Z' fill='%232C36F2'/%3E %3Cpath d='M25.6256 24.5897H11.3744L10.3564 22.4884M25.6256 24.5897L26.6436 22.4884L19.5179 10.2308M25.6256 24.5897L19.5179 13.733L18.5 15.4841M19.5179 10.2308H17.8214L10.3564 22.4884M19.5179 10.2308L13.5799 20.7373M10.3564 22.4884H12.562M18.5 15.4841L15.4462 20.7373M18.5 15.4841L21.5538 20.7373M15.4462 20.7373H21.5538M15.4462 20.7373H13.5799M21.5538 20.7373L22.5718 22.4884H12.562M13.5799 20.7373L12.562 22.4884M30.8744 29.2842L18.5 41L6.12556 29.2842C3.67816 26.967 2.01147 24.0148 1.33625 20.8008C0.661026 17.5869 1.0076 14.2555 2.33214 11.228C3.65667 8.20049 5.89969 5.61285 8.77755 3.79229C11.6554 1.97172 15.0388 1 18.5 1C21.9612 1 25.3446 1.97172 28.2225 3.79229C31.1003 5.61285 33.3433 8.20049 34.6679 11.228C35.9924 14.2555 36.339 17.5869 35.6637 20.8008C34.9885 24.0148 33.3218 26.967 30.8744 29.2842Z' stroke='%23F6F7FF' stroke-width='0.5'/%3E %3C/svg%3E"

/***/ }),

/***/ "./source/img/svg/url/location--sm.svg":
/*!*********************************************!*\
  !*** ./source/img/svg/url/location--sm.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='31' height='35' viewBox='0 0 31 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M25.7531 24.3345L15.5 34L5.24689 24.3345C3.21905 22.4228 1.83808 19.9872 1.27861 17.3357C0.719136 14.6842 1.00629 11.9358 2.10377 9.43809C3.20124 6.94041 5.05975 4.8056 7.44425 3.30364C9.82876 1.80167 12.6322 1 15.5 1C18.3678 1 21.1712 1.80167 23.5557 3.30364C25.9403 4.8056 27.7988 6.94041 28.8962 9.43809C29.9937 11.9358 30.2809 14.6842 29.7214 17.3357C29.1619 19.9872 27.7809 22.4228 25.7531 24.3345Z' fill='%232C36F2'/%3E %3Cpath d='M16.3434 8.61538H14.9377L8.75247 18.728H10.5799L11.4234 17.2833L16.3434 8.61538Z' fill='%232C36F2'/%3E %3Cpath d='M9.59591 20.4615H21.4041L16.3434 11.5047L15.5 12.9493L18.0303 17.2833L18.8738 18.728H10.5799H8.75247L9.59591 20.4615Z' fill='%232C36F2'/%3E %3Cpath d='M18.8738 18.728L18.0303 17.2833H12.9697H11.4234L10.5799 18.728H18.8738Z' fill='%232C36F2'/%3E %3Cpath d='M21.4041 20.4615L22.2475 18.728L16.3434 8.61538L11.4234 17.2833H12.9697L15.5 12.9493L16.3434 11.5047L21.4041 20.4615Z' fill='%232C36F2'/%3E %3Cpath d='M15.5 12.9493L12.9697 17.2833H18.0303L15.5 12.9493Z' fill='%232C36F2'/%3E %3Cpath d='M21.4041 20.4615H9.59591L8.75247 18.728M21.4041 20.4615L22.2475 18.728L16.3434 8.61538M21.4041 20.4615L16.3434 11.5047L15.5 12.9493M16.3434 8.61538H14.9377L8.75247 18.728M16.3434 8.61538L11.4234 17.2833M8.75247 18.728H10.5799M15.5 12.9493L12.9697 17.2833M15.5 12.9493L18.0303 17.2833M12.9697 17.2833H18.0303M12.9697 17.2833H11.4234M18.0303 17.2833L18.8738 18.728H10.5799M11.4234 17.2833L10.5799 18.728M25.7531 24.3345L15.5 34L5.24689 24.3345C3.21905 22.4228 1.83808 19.9872 1.27861 17.3357C0.719136 14.6842 1.00629 11.9358 2.10377 9.43809C3.20124 6.94041 5.05975 4.8056 7.44425 3.30364C9.82876 1.80167 12.6322 1 15.5 1C18.3678 1 21.1712 1.80167 23.5557 3.30364C25.9403 4.8056 27.7988 6.94041 28.8962 9.43809C29.9937 11.9358 30.2809 14.6842 29.7214 17.3357C29.1619 19.9872 27.7809 22.4228 25.7531 24.3345Z' stroke='%23F6F7FF' stroke-width='0.5'/%3E %3C/svg%3E"

/***/ }),

/***/ "./source/js/components/departments/departments.js":
/*!*********************************************************!*\
  !*** ./source/js/components/departments/departments.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/map */ "./source/js/components/map/map.js");



function Departments() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "departments",
    className: "departments"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u041E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u041B\u0438\u0433\u0430 \u0411\u0430\u043D\u043A\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_map_map__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Departments);

/***/ }),

/***/ "./source/js/components/features/features.js":
/*!***************************************************!*\
  !*** ./source/js/components/features/features.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabs/tabs */ "./source/js/components/tabs/tabs.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ "./source/js/components/features/tabs.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel */ "./source/js/components/features/panel.js");





function Features() {
  var className = "features";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "visually-hidden"
  }, "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__["default"], {
    config: _tabs__WEBPACK_IMPORTED_MODULE_2__["default"],
    className: className,
    Panel: _panel__WEBPACK_IMPORTED_MODULE_3__["default"]
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./source/js/components/features/panel.js":
/*!************************************************!*\
  !*** ./source/js/components/features/panel.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function Panel(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "features__panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041B\u0438\u0433\u0430 \u0411\u0430\u043D\u043A"), children);
}

Panel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Panel);

/***/ }),

/***/ "./source/js/components/features/tabs.js":
/*!***********************************************!*\
  !*** ./source/js/components/features/tabs.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var tabs = [{
  title: "\u041A\u0440\u0435\u0434\u0438\u0442\u044B",
  mod: "credits",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041A\u0440\u0435\u0434\u0438\u0442\u044B \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u0443\u0447\u0430\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#calculator",
    className: "link"
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043A\u0440\u0435\u0434\u0438\u0442"))
}, {
  title: "\u0423\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
  mod: "confidence",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0412\u0430\u0448\u0430 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0437\u0430\u0432\u0442\u0440\u0430\u0448\u043D\u0435\u043C \u0434\u043D\u0435"))
}, {
  title: "\u0420\u044F\u0434\u043E\u043C",
  mod: "near",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0412\u0441\u0435\u0433\u0434\u0430 \u0440\u044F\u0434\u043E\u043C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#departments",
    className: "link"
  }, "\u041D\u0430\u0439\u0442\u0438 \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435"))
}];
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./source/js/components/footer/contacts.js":
/*!*************************************************!*\
  !*** ./source/js/components/footer/contacts.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_svg_inline_cellphone_footer_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../img/svg/inline/cellphone-footer.svg */ "./source/img/svg/inline/cellphone-footer.svg");
/* harmony import */ var _img_svg_inline_phone_footer_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/svg/inline/phone-footer.svg */ "./source/img/svg/inline/phone-footer.svg");


var contacts = [{
  mod: "cellphone",
  Img: _img_svg_inline_cellphone_footer_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  tel: "*0904",
  text: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0434\u043B\u044F \u0430\u0431\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u041C\u0422\u0421, \u0411\u0438\u043B\u0430\u0439\u043D, \u041C\u0435\u0433\u0430\u0444\u043E\u043D, \u0422\u0435\u043B\u04352"
}, {
  mod: "phone",
  Img: _img_svg_inline_phone_footer_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  tel: "8 800 111 22 33",
  text: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0433\u043E\u0440\u043E\u0434\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0438"
}];
/* harmony default export */ __webpack_exports__["default"] = (contacts);

/***/ }),

/***/ "./source/js/components/footer/footer.js":
/*!***********************************************!*\
  !*** ./source/js/components/footer/footer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logo_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logo/logo */ "./source/js/components/logo/logo.js");
/* harmony import */ var _shared_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/links */ "./source/js/shared/links.js");
/* harmony import */ var _link_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../link/link */ "./source/js/components/link/link.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts */ "./source/js/components/footer/contacts.js");
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./social */ "./source/js/components/footer/social.js");











function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "footer__container container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "footer__nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_logo_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    classes: "footer__logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "footer__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "150015, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F, \u0434. 32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0411\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u21161050"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "\xA9 \u041B\u0438\u0433\u0430 \u0411\u0430\u043D\u043A, 2019")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "footer__links"
  }, _shared_links__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (_ref) {
    var text = _ref.text,
        href = _ref.href;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: text,
      className: "footer__link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_link_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
      href: href
    }, text));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "footer__contacts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "footer__phones list"
  }, _contacts__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (_ref2) {
    var Img = _ref2.Img,
        tel = _ref2.tel,
        text = _ref2.text,
        mod = _ref2.mod;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: tel,
      className: "footer__phone footer__phone--".concat(mod)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "link",
      href: "tel:".concat(tel.split(" ").join(""))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Img, {
      className: "footer__phone-icon footer__phone-icon--".concat(mod),
      preserveAspectRatio: "xMinYMid meet"
    }), tel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, text));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "footer__social"
  }, _social__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (_ref3, id) {
    var Img = _ref3.Img,
        title = _ref3.title,
        mod = _ref3.mod;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: id,
      className: "footer__social-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "#",
      className: "link",
      title: title,
      "aria-label": title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Img, {
      className: "footer__social-icon footer__social-icon--".concat(mod)
    })));
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./source/js/components/footer/social.js":
/*!***********************************************!*\
  !*** ./source/js/components/footer/social.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_svg_inline_facebook_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../img/svg/inline/facebook.svg */ "./source/img/svg/inline/facebook.svg");
/* harmony import */ var _img_svg_inline_instagram_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/svg/inline/instagram.svg */ "./source/img/svg/inline/instagram.svg");
/* harmony import */ var _img_svg_inline_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/svg/inline/twitter.svg */ "./source/img/svg/inline/twitter.svg");
/* harmony import */ var _img_svg_inline_youtube_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/svg/inline/youtube.svg */ "./source/img/svg/inline/youtube.svg");




var socialLinks = [{
  Img: _img_svg_inline_facebook_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  title: "Facebook",
  mod: "fb"
}, {
  Img: _img_svg_inline_instagram_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  title: "Instagram",
  mod: "ig"
}, {
  Img: _img_svg_inline_twitter_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  title: "Twitter",
  mod: "tw"
}, {
  Img: _img_svg_inline_youtube_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  title: "Youtube",
  mod: "yt"
}];
/* harmony default export */ __webpack_exports__["default"] = (socialLinks);

/***/ }),

/***/ "./source/js/components/hamburger/hamburger.js":
/*!*****************************************************!*\
  !*** ./source/js/components/hamburger/hamburger.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function Hamburger(_ref) {
  var onClick = _ref.onClick,
      isOpen = _ref.isOpen;
  var className = "hamburger__inner";
  var classes = [className];

  if (isOpen) {
    classes.push("".concat(className, "--open"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "hamburger button",
    onClick: onClick,
    "aria-expanded": isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.join(" ")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "visually-hidden"
  }, "\u041C\u0435\u043D\u044E"));
}

Hamburger.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ }),

/***/ "./source/js/components/header/header.js":
/*!***********************************************!*\
  !*** ./source/js/components/header/header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/logo */ "./source/js/components/logo/logo.js");
/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/nav */ "./source/js/components/nav/nav.js");
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login */ "./source/js/components/login/login.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal */ "./source/js/components/modal/modal.js");







function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      modalIsOpen = _useState2[0],
      setModalIsOpen = _useState2[1];

  var openModal = function openModal() {
    setModalIsOpen(true);
  };

  var closeModal = function closeModal() {
    setModalIsOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container header__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logo_logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    classes: "header__logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nav_nav__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_login_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: openModal
  }), modalIsOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_modal_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClose: closeModal
  }, "\u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E")));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./source/js/components/link/link.js":
/*!*******************************************!*\
  !*** ./source/js/components/link/link.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function Link(_ref) {
  var children = _ref.children,
      href = _ref.href,
      classes = _ref.classes,
      tabindex = _ref.tabindex;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: href,
    className: "link ".concat(classes).trim(),
    tabIndex: tabindex
  }, children);
}

Link.defaultProps = {
  href: "#",
  tabindex: null,
  classes: ""
};
Link.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  tabindex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./source/js/components/login/login.js":
/*!*********************************************!*\
  !*** ./source/js/components/login/login.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_svg_inline_login_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/svg/inline/login.svg */ "./source/img/svg/inline/login.svg");




function Login(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    title: "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0431\u0430\u043D\u043A",
    onClick: onClick,
    className: "header__login button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_img_svg_inline_login_svg__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0431\u0430\u043D\u043A"));
}

Login.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./source/js/components/logo/logo.js":
/*!*******************************************!*\
  !*** ./source/js/components/logo/logo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_svg_inline_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/svg/inline/logo.svg */ "./source/img/svg/inline/logo.svg");




function Logo(_ref) {
  var classes = _ref.classes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo ".concat(classes)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_img_svg_inline_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

Logo.defaultProps = {
  classes: ""
};
Logo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./source/js/components/map/departments.js":
/*!*************************************************!*\
  !*** ./source/js/components/map/departments.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var departments = {
  rus: {
    text: "\u0420\u043E\u0441\u0441\u0438\u044F",
    locations: [{
      city: "Moscow",
      geometry: [55.7577299, 37.5886205]
    }, {
      city: "Saint Petersburg",
      geometry: [59.9375, 30.308611]
    }, {
      city: "Saratov",
      geometry: [51.533333, 46.016667]
    }, {
      city: "Kirov",
      geometry: [58.6, 49.683333]
    }, {
      city: "Tyumen",
      geometry: [57.15, 65.533333]
    }, {
      city: "Surgut",
      geometry: [61.25, 73.433333]
    }, {
      city: "Novosibirsk",
      geometry: [55.05, 82.95]
    }, {
      city: "Omsk",
      geometry: [54.983333, 73.366667]
    }]
  },
  cis: {
    text: "\u0421\u041D\u0413",
    locations: [{
      city: "Baku",
      geometry: [40.395278, 49.882222]
    }, {
      city: "Tashkent",
      geometry: [41.3, 69.266667]
    }, {
      city: "Almaty",
      geometry: [43.2775, 76.895833]
    }, {
      city: "Minsk",
      geometry: [53.9, 27.566667]
    }]
  },
  eu: {
    text: "\u0415\u0432\u0440\u043E\u043F\u0430",
    locations: [{
      city: "Paris",
      geometry: [48.856613, 2.352222]
    }, {
      city: "Prague",
      geometry: [50.083333, 14.416667]
    }, {
      city: "London",
      geometry: [51.507222, -0.1275]
    }, {
      city: "Rome",
      geometry: [41.883333, 12.5]
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (departments);

/***/ }),

/***/ "./source/js/components/map/dynamic/checkboxes.js":
/*!********************************************************!*\
  !*** ./source/js/components/map/dynamic/checkboxes.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





function CheckBoxes(_ref) {
  var config = _ref.config,
      onChange = _ref.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, config.map(function (_ref2) {
    var name = _ref2.name,
        text = _ref2.text,
        checked = _ref2.checked,
        id = _ref2.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "checkbox",
      name: "name",
      onChange: onChange,
      checked: checked,
      "data-id": id
    }), text));
  }));
}

CheckBoxes.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.exact({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    checked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
  })).isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CheckBoxes);

/***/ }),

/***/ "./source/js/components/map/dynamic/map.js":
/*!*************************************************!*\
  !*** ./source/js/components/map/dynamic/map.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-yandex-maps */ "./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js");
/* harmony import */ var _img_svg_url_location_lg_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../img/svg/url/location--lg.svg */ "./source/img/svg/url/location--lg.svg");
/* harmony import */ var _img_svg_url_location_lg_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_svg_url_location_lg_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_svg_url_location_sm_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../img/svg/url/location--sm.svg */ "./source/img/svg/url/location--sm.svg");
/* harmony import */ var _img_svg_url_location_sm_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_svg_url_location_sm_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/media */ "./source/js/context/media.js");







var icons = {
  phone: {
    svg: _img_svg_url_location_sm_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    size: [31, 35],
    offset: [-15, -35]
  },
  desktop: {
    svg: _img_svg_url_location_lg_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    size: [37, 42],
    offset: [-18, -42]
  }
};

function DynamicMap(_ref) {
  var locations = _ref.locations;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_media__WEBPACK_IMPORTED_MODULE_6__["default"]),
      isPhone = _useContext.isPhone;

  var _ref2 = isPhone ? icons.phone : icons.desktop,
      svg = _ref2.svg,
      size = _ref2.size,
      offset = _ref2.offset;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_3__["YMaps"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_3__["Map"], {
    defaultState: {
      center: [55.751574, 37.573856],
      zoom: 3
    }
  }, locations.map(function (_ref3) {
    var geometry = _ref3.geometry;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_3__["Placemark"], {
      key: JSON.stringify(geometry),
      geometry: geometry,
      options: {
        iconLayout: "default#image",
        iconImageHref: svg,
        iconImageSize: size,
        iconImageOffset: offset
      }
    });
  }))));
}

DynamicMap.defaultProps = {
  locations: []
};
DynamicMap.propTypes = {
  locations: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    geometry: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number)
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (DynamicMap);

/***/ }),

/***/ "./source/js/components/map/map.js":
/*!*****************************************!*\
  !*** ./source/js/components/map/map.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _dynamic_map__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dynamic/map */ "./source/js/components/map/dynamic/map.js");
/* harmony import */ var _static_map__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./static/map */ "./source/js/components/map/static/map.js");
/* harmony import */ var _static_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./static/toggle */ "./source/js/components/map/static/toggle.js");
/* harmony import */ var _departments__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./departments */ "./source/js/components/map/departments.js");
/* harmony import */ var _dynamic_checkboxes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dynamic/checkboxes */ "./source/js/components/map/dynamic/checkboxes.js");















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function generateConfig() {
  return Object.keys(_departments__WEBPACK_IMPORTED_MODULE_18__["default"]).map(function (key, id) {
    return {
      id: id,
      name: key,
      text: _departments__WEBPACK_IMPORTED_MODULE_18__["default"][key].text,
      checked: true
    };
  });
}

function Map() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(generateConfig),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13___default()(_useState, 2),
      config = _useState2[0],
      setConfig = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13___default()(_useState3, 2),
      isDynamic = _useState4[0],
      setIsDynamic = _useState4[1];

  var onChange = function onChange(e) {
    var id = e.target.dataset.id;
    setConfig(function (prevConf) {
      var newConf = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12___default()(prevConf);

      newConf[id] = _objectSpread(_objectSpread({}, newConf[id]), {}, {
        checked: !newConf[id].checked
      });
      return newConf;
    });
  };

  var toggleDynamic = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function () {
    setIsDynamic(function (value) {
      return !value;
    });
  }, [setIsDynamic]);
  var locations = config.reduce(function (acc, el) {
    if (el.checked) {
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12___default()(acc), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12___default()(_departments__WEBPACK_IMPORTED_MODULE_18__["default"][el.name].locations));
    }

    return acc;
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "map"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, isDynamic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_dynamic_checkboxes__WEBPACK_IMPORTED_MODULE_19__["default"], {
    config: config,
    onChange: onChange
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_static_toggle__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick: toggleDynamic
  })), isDynamic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_dynamic_map__WEBPACK_IMPORTED_MODULE_15__["default"], {
    locations: locations
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_static_map__WEBPACK_IMPORTED_MODULE_16__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./source/js/components/map/static/map.js":
/*!************************************************!*\
  !*** ./source/js/components/map/static/map.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function StaticMap() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
    className: "picture"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    media: "(max-width: 767px)",
    srcSet: "img/map/map@1x--sm.webp, img/map/map@2x--sm.webp 2x",
    type: "image/webp"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    media: "(max-width: 767px)",
    srcSet: "img/map/map@1x--sm.jpg, img/map/map@2x--sm.jpg 2x"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    media: "(max-width: 1023px)",
    srcSet: "img/map/map@1x--md.webp, img/map/map@2x--md.webp 2x",
    type: "image/webp"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    media: "(max-width: 1023px)",
    srcSet: "img/map/map@1x--md.jpg, img/map/map@2x--md.jpg 2x"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: "img/map/map@1x--lg.webp, img/map/map@2x--lg.webp 2x",
    type: "image/webp"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "img/map/map@1x--lg.jpg",
    srcSet: "img/map/map@2x--lg.jpg 2x",
    alt: "\u041A\u0430\u0440\u0442\u0430 \u0441 \u043C\u0435\u0441\u0442\u043E\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0439 \u0431\u0430\u043D\u043A\u0430",
    height: "462",
    width: "1170"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StaticMap);

/***/ }),

/***/ "./source/js/components/map/static/toggle.js":
/*!***************************************************!*\
  !*** ./source/js/components/map/static/toggle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function Toggle(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: onClick
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u042F\u043D\u0434\u0435\u043A\u0441.\u041A\u0430\u0440\u0442\u044B");
}

Toggle.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ }),

/***/ "./source/js/components/modal/modal.js":
/*!*********************************************!*\
  !*** ./source/js/components/modal/modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function Modal(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose;
  var body = document.body;
  var closeButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var resetFocus = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    closeButton.current.focus();
  }, [closeButton]);

  var onFocus = function onFocus(e) {
    if (e.target === e.currentTarget) {
      resetFocus();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    lockBody();
    resetFocus();
    document.addEventListener("keydown", onEscape);
    return function () {
      document.removeEventListener("keydown", onEscape);
      unlockBody();
    };

    function onEscape(e) {
      if (e.keyCode === 27) {
        onClose();
      }
    }

    function lockBody() {
      body.dataset.scrollY = getBodyScrollTop();
      body.style.top = "-".concat(body.dataset.scrollY, "px");
      body.classList.add("body--lock");

      function getBodyScrollTop() {
        return window.pageYOffset || document.documentElement && document.documentElement.ScrollTop || body && body.scrollTop;
      }
    }

    function unlockBody() {
      body.classList.remove("body--lock");
      window.scrollTo(0, body.dataset.scrollY);
      delete body.dataset.scrollY;
      body.style.top = "";
    }
  }, []);
  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section modal",
    tabIndex: "0",
    onFocus: onFocus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    title: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    ref: closeButton,
    className: "button modal__close-btn",
    onClick: onClose
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "visually-hidden"
  }, "\u041C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E"), children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal__backdrop",
    onClick: onClose,
    onFocus: onFocus,
    tabIndex: "0"
  })), body);
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./source/js/components/nav/item/item.js":
/*!***********************************************!*\
  !*** ./source/js/components/nav/item/item.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function NavItem(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    ref: ref,
    className: "nav__item",
    style: {
      height: isOpen && ref.current ? "".concat(ref.current.scrollHeight, "px") : null
    }
  }, children);
}

NavItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./source/js/components/nav/nav.js":
/*!*****************************************!*\
  !*** ./source/js/components/nav/nav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/media */ "./source/js/context/media.js");
/* harmony import */ var _shared_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/links */ "./source/js/shared/links.js");
/* harmony import */ var _link_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../link/link */ "./source/js/components/link/link.js");
/* harmony import */ var _hamburger_hamburger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hamburger/hamburger */ "./source/js/components/hamburger/hamburger.js");
/* harmony import */ var _item_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/item */ "./source/js/components/nav/item/item.js");









function Nav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_media__WEBPACK_IMPORTED_MODULE_3__["default"]),
      isPhone = _useContext.isPhone;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setIsOpen(false);
  }, [isPhone]);
  var onToggle = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setIsOpen(function (v) {
      return !v;
    });
  }, [setIsOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: isOpen,
    onClick: onToggle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "nav__links"
  }, _shared_links__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (_ref) {
    var text = _ref.text,
        href = _ref.href;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_item_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: text,
      isOpen: isOpen
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_link_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: href,
      tabindex: isOpen || !isPhone ? null : -1
    }, text));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./source/js/components/tabs/tabs.js":
/*!*******************************************!*\
  !*** ./source/js/components/tabs/tabs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





function Tabs(_ref) {
  var config = _ref.config,
      className = _ref.className,
      Panel = _ref.Panel;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      selectedId = _useState2[0],
      setSelectedId = _useState2[1];

  var handleChange = function handleChange(e) {
    setSelectedId(e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "".concat(className, "__tabs-container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "list ".concat(className, "__tabs")
  }, config.map(function (_ref2, id) {
    var title = _ref2.title,
        mod = _ref2.mod;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      key: mod,
      className: "".concat(className, "__label")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "radio",
      name: "tab-".concat(className),
      value: id,
      onChange: handleChange,
      checked: +selectedId === id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "".concat(className, "__radio")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, title));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "".concat(className, "__panel-container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Panel, null, config[selectedId].content)));
}

Tabs.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  Panel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./source/js/containers/app/app.js":
/*!*****************************************!*\
  !*** ./source/js/containers/app/app.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/header/header */ "./source/js/components/header/header.js");
/* harmony import */ var _pages_home_home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/home/home */ "./source/js/containers/pages/home/home.js");
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../context/media */ "./source/js/context/media.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/footer/footer */ "./source/js/components/footer/footer.js");












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var sizes = {
  phone: 768,
  tablet: 1366
};
var queries = Object.keys(sizes).map(function (el) {
  return {
    type: "is".concat(el.charAt(0).toUpperCase() + el.slice(1)),
    query: "(max-width: ".concat(sizes[el], "px)")
  };
});

function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(_useState, 2),
      media = _useState2[0],
      setMedia = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    queries.forEach(function (_ref) {
      var type = _ref.type,
          query = _ref.query;
      var mql = window.matchMedia(query);
      mql.addListener(changeMedia);
      changeMedia();

      function changeMedia() {
        setMedia(function (prevMedia) {
          return _objectSpread(_objectSpread({}, prevMedia), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()({}, type, mql.matches));
        });
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_context_media__WEBPACK_IMPORTED_MODULE_14__["default"].Provider, {
    value: media
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "body__bg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_header_header__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_pages_home_home__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_footer_footer__WEBPACK_IMPORTED_MODULE_15__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./source/js/containers/pages/home/home.js":
/*!*************************************************!*\
  !*** ./source/js/containers/pages/home/home.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_departments_departments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/departments/departments */ "./source/js/components/departments/departments.js");
/* harmony import */ var _components_features_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/features/features */ "./source/js/components/features/features.js");




function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "visually-hidden"
  }, "\u041B\u0438\u0433\u0430 \u0411\u0430\u043D\u043A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_features_features__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_departments_departments__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./source/js/context/media.js":
/*!************************************!*\
  !*** ./source/js/context/media.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var MediaContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  isPhone: false,
  isTablet: false
});
/* harmony default export */ __webpack_exports__["default"] = (MediaContext);

/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var promise_polyfill_src_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! promise-polyfill/src/polyfill */ "./node_modules/promise-polyfill/src/polyfill.js");
/* harmony import */ var _containers_app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/app/app */ "./source/js/containers/app/app.js");




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_app_app__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.querySelector("#root"));

/***/ }),

/***/ "./source/js/shared/links.js":
/*!***********************************!*\
  !*** ./source/js/shared/links.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var links = [{
  text: "\u0423\u0441\u043B\u0443\u0433\u0438"
}, {
  text: "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043A\u0440\u0435\u0434\u0438\u0442"
}, {
  text: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
}, {
  text: "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441"
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map