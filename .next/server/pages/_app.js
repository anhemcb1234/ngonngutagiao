module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/category.js":
/*!*********************************!*\
  !*** ./src/actions/category.js ***!
  \*********************************/
/*! exports provided: getCategory, getCategorySuccess, getCategoryError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategorySuccess", function() { return getCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryError", function() { return getCategoryError; });
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");

const getCategory = (offset, page) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY"],
  offset,
  page
});
const getCategorySuccess = data => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_SUCCESS"],
  data: data
});
const getCategoryError = errMess => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/actions/product.js":
/*!********************************!*\
  !*** ./src/actions/product.js ***!
  \********************************/
/*! exports provided: getProduct, getProductSuccess, getProductError, getHomeProduct, getHomeProductSuccess, getHomeProductError, getHomePropose, getHomeProposeSuccess, getHomeProposeError, getProductFeature, getProductFeatureSuccess, getProductFeatureError, getProductSuggest, getProductSuggestSuccess, getProductSuggestError, getProductDetail, getProductDetailSuccess, getProductDetailError, searchProduct, searchProductSuccess, searchProductError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuccess", function() { return getProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductError", function() { return getProductError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProduct", function() { return getHomeProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProductSuccess", function() { return getHomeProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProductError", function() { return getHomeProductError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomePropose", function() { return getHomePropose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProposeSuccess", function() { return getHomeProposeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProposeError", function() { return getHomeProposeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFeature", function() { return getProductFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFeatureSuccess", function() { return getProductFeatureSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFeatureError", function() { return getProductFeatureError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuggest", function() { return getProductSuggest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuggestSuccess", function() { return getProductSuggestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuggestError", function() { return getProductSuggestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetail", function() { return getProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailSuccess", function() { return getProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailError", function() { return getProductDetailError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProduct", function() { return searchProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductSuccess", function() { return searchProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductError", function() { return searchProductError; });
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");

const getProduct = (offset, page) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT"],
  offset,
  page
});
const getProductSuccess = (data, total) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_SUCCESS"],
  data: data,
  total: total
});
const getProductError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_ERROR"],
  errMess
}); // ===========================

const getHomeProduct = offset => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT"],
  offset
});
const getHomeProductSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_SUCCESS"],
  data: data
});
const getHomeProductError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_ERROR"],
  errMess
}); // ===========================

const getHomePropose = offset => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE"],
  offset
});
const getHomeProposeSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_SUCCESS"],
  data: data
});
const getHomeProposeError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_ERROR"],
  errMess
}); // ===========================

const getProductFeature = offset => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE"],
  offset
});
const getProductFeatureSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_SUCCESS"],
  data: data
});
const getProductFeatureError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_ERROR"],
  errMess
}); // ===========================

const getProductSuggest = offset => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST"],
  offset
});
const getProductSuggestSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_SUCCESS"],
  data: data
});
const getProductSuggestError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_ERROR"],
  errMess
}); // ===========================

const getProductDetail = alias => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL"],
  alias: alias
});
const getProductDetailSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_SUCCESS"],
  data: data
});
const getProductDetailError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_ERROR"],
  errMess
}); // ===========================

const searchProduct = (name, offset) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT"],
  name,
  offset
});
const searchProductSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_SUCCESS"],
  data: data
});
const searchProductError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\Nextjs\\haha\\NextJs\\src\\components\\NavBar.js";


function NavBar(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "relative select-none bg-grey lg:flex lg:items-stretch w-full",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-no-shrink items-stretch h-12",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#",
        className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark",
        children: "Tailwind"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#",
        className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark",
        children: "Css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: "fill-current text-white",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 117
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: "fill-current text-white",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 117
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lg:flex lg:items-stretch lg:justify-end ml-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark",
          children: "Item 1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark",
          children: "Item 2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark",
          children: "Item 3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/Slide.js":
/*!*********************************!*\
  !*** ./src/components/Slide.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slide; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\Nextjs\\haha\\NextJs\\src\\components\\Slide.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Slide extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mt-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: " Slider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
        children: this.props.product
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./src/contants/category.js":
/*!**********************************!*\
  !*** ./src/contants/category.js ***!
  \**********************************/
/*! exports provided: GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY", function() { return GET_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY_SUCCESS", function() { return GET_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY_ERROR", function() { return GET_CATEGORY_ERROR; });
const GET_CATEGORY = "CATEGORY/GET_CATEGORY";
const GET_CATEGORY_SUCCESS = "CATEGORY/GET_CATEGORY_SUCCESS";
const GET_CATEGORY_ERROR = "CATEGORY/GET_CATEGORY_ERROR";

/***/ }),

/***/ "./src/contants/product.js":
/*!*********************************!*\
  !*** ./src/contants/product.js ***!
  \*********************************/
/*! exports provided: GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_HOME_PRODUCT, GET_HOME_PRODUCT_SUCCESS, GET_HOME_PRODUCT_ERROR, GET_HOME_PROPOSE, GET_HOME_PROPOSE_SUCCESS, GET_HOME_PROPOSE_ERROR, GET_DETAIL, GET_DETAIL_SUCCESS, GET_DETAIL_ERROR, GET_SUGGEST, GET_SUGGEST_SUCCESS, GET_SUGGEST_ERROR, GET_FEATURE, GET_FEATURE_SUCCESS, GET_FEATURE_ERROR, SEARCH_PRODUCT, SEARCH_PRODUCT_SUCCESS, SEARCH_PRODUCT_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT", function() { return GET_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_SUCCESS", function() { return GET_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_ERROR", function() { return GET_PRODUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PRODUCT", function() { return GET_HOME_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PRODUCT_SUCCESS", function() { return GET_HOME_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PRODUCT_ERROR", function() { return GET_HOME_PRODUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PROPOSE", function() { return GET_HOME_PROPOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PROPOSE_SUCCESS", function() { return GET_HOME_PROPOSE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PROPOSE_ERROR", function() { return GET_HOME_PROPOSE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL", function() { return GET_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_SUCCESS", function() { return GET_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_ERROR", function() { return GET_DETAIL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGEST", function() { return GET_SUGGEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGEST_SUCCESS", function() { return GET_SUGGEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGEST_ERROR", function() { return GET_SUGGEST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FEATURE", function() { return GET_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FEATURE_SUCCESS", function() { return GET_FEATURE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FEATURE_ERROR", function() { return GET_FEATURE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT", function() { return SEARCH_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_SUCCESS", function() { return SEARCH_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_ERROR", function() { return SEARCH_PRODUCT_ERROR; });
const GET_PRODUCT = "PRODUCT/GET_PRODUCT";
const GET_PRODUCT_SUCCESS = "PRODUCT/GET_PRODUCT_SUCCESS";
const GET_PRODUCT_ERROR = "PRODUCT/GET_PRODUCT_ERROR";
const GET_HOME_PRODUCT = "PRODUCT/GET_HOME_PRODUCT";
const GET_HOME_PRODUCT_SUCCESS = "PRODUCT/GET_HOME_PRODUCT_SUCCESS";
const GET_HOME_PRODUCT_ERROR = "PRODUCT/GET_HOME_PRODUCT_ERROR";
const GET_HOME_PROPOSE = "PRODUCT/GET_HOME_PROPOSE";
const GET_HOME_PROPOSE_SUCCESS = "PRODUCT/GET_HOME_PROPOSE_SUCCESS";
const GET_HOME_PROPOSE_ERROR = "PRODUCT/GET_HOME_PROPOSE_ERROR";
const GET_DETAIL = "PRODUCT/GET_DETAIL";
const GET_DETAIL_SUCCESS = "PRODUCT/GET_DETAIL_SUCCESS";
const GET_DETAIL_ERROR = "PRODUCT/GET_DETAIL_ERROR";
const GET_SUGGEST = "PRODUCT/GET_SUGGEST";
const GET_SUGGEST_SUCCESS = "PRODUCT/GET_SUGGEST_SUCCESS";
const GET_SUGGEST_ERROR = "PRODUCT/GET_SUGGEST_ERROR";
const GET_FEATURE = "PRODUCT/GET_FEATURE";
const GET_FEATURE_SUCCESS = "PRODUCT/GET_FEATURE_SUCCESS";
const GET_FEATURE_ERROR = "PRODUCT/GET_FEATURE_ERROR";
const SEARCH_PRODUCT = "PRODUCT/SEARCH_PRODUCT";
const SEARCH_PRODUCT_SUCCESS = "PRODUCT/SEARCH_PRODUCT_SUCCESS";
const SEARCH_PRODUCT_ERROR = "PRODUCT/SEARCH_PRODUCT_ERROR";

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Slide */ "./src/components/Slide.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");


var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\Nextjs\\haha\\NextJs\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const pageProps = _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {});

  if (ctx.req) {
    ctx.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_4__["END"]);
    await ctx.store.sagaTask.toPromise();
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_5__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./src/reducers/category.js":
/*!**********************************!*\
  !*** ./src/reducers/category.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  category: {
    loading: false,
    data: [],
    errMess: null
  }
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.category));

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: true
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: true,
          data: action.data,
          total: action.total
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (categoryReducer);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/reducers/product.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/reducers/category.js");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _product__WEBPACK_IMPORTED_MODULE_1__["default"],
  category: _category__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/product.js":
/*!*********************************!*\
  !*** ./src/reducers/product.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  product: {
    loading: false,
    data: [],
    total: 0,
    errMess: null
  },
  productFeature: {
    loading: false,
    data: [],
    errMess: null
  },
  productSuggest: {
    loading: false,
    data: [],
    errMess: null
  },
  homeProduct: {
    loading: false,
    data: [],
    errMess: null
  },
  homePropose: {
    loading: false,
    data: [],
    errMess: null
  },
  productDetail: {
    loading: false,
    data: {},
    errMess: null
  },
  productSearch: {
    val: "",
    loading: false,
    data: [],
    errMess: null
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.product));

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homeProduct: _objectSpread(_objectSpread({}, state.homeProduct), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homeProduct: _objectSpread(_objectSpread({}, state.homeProduct), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homeProduct: _objectSpread(_objectSpread({}, state.homeProduct), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homePropose: _objectSpread(_objectSpread({}, state.homePropose), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homePropose: _objectSpread(_objectSpread({}, state.homePropose), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homePropose: _objectSpread(_objectSpread({}, state.homePropose), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSearch: _objectSpread(_objectSpread({}, state.productSearch), {}, {
          val: action.name,
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSearch: _objectSpread(_objectSpread({}, state.productSearch), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_ERROR"]:
      return _objectSpread(_objectSpread({}, initialState), {}, {
        productSearch: _objectSpread(_objectSpread({}, initialState.productSearch), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSuggest: _objectSpread(_objectSpread({}, state.productSuggest), {}, {
          val: action.name,
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSuggest: _objectSpread(_objectSpread({}, state.productSuggest), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_ERROR"]:
      return _objectSpread(_objectSpread({}, initialState), {}, {
        productSuggest: _objectSpread(_objectSpread({}, initialState.productSuggest), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productFeature: _objectSpread(_objectSpread({}, state.productFeature), {}, {
          val: action.name,
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productFeature: _objectSpread(_objectSpread({}, state.productFeature), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_ERROR"]:
      return _objectSpread(_objectSpread({}, initialState), {}, {
        productFeature: _objectSpread(_objectSpread({}, initialState.productFeature), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (productReducer);

/***/ }),

/***/ "./src/sagas/category.js":
/*!*******************************!*\
  !*** ./src/sagas/category.js ***!
  \*******************************/
/*! exports provided: getCategory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategorySaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/category */ "./src/actions/category.js");
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");




function* getCategory(action) {
  const url = `categories/get?id_website=4&active=1`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    console.log('hahaha', response);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getCategorySuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getCategoryError"])(error.message));
  }
}
function* CategorySaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_category__WEBPACK_IMPORTED_MODULE_3__["GET_CATEGORY"], getCategory)]);
}

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/sagas/product.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/sagas/category.js");



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_product__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_category__WEBPACK_IMPORTED_MODULE_2__["default"])()]);
}

/***/ }),

/***/ "./src/sagas/product.js":
/*!******************************!*\
  !*** ./src/sagas/product.js ***!
  \******************************/
/*! exports provided: getProduct, getDetail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");




function* getProduct(action) {
  const url = `products/get?active=1&id_parent=0&id_website=4`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductError"])(error.message));
  }
}
function* getDetail(action) {
  const url = `/products/detail?alias=${action.alias}`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductDetailSuccess"])(response.data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductDetailError"])(error.message));
  }
}
function* ProductSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT"], getProduct), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_DETAIL"], getDetail)]);
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./src/sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");






const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
  const middleware = [sagaMiddleware];
  middleware.push(redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return request; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

async function parseJSON(response) {
  const data = await response.json();

  if (response.status >= 400) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
}

const isNode = true;
const nodeOptions = !isNode ? {} : {
  agent: new (__webpack_require__(/*! https */ "https").Agent)({
    rejectUnauthorized: false
  }),
  headers: {
    "Content-Type": "application/json",
    Cookie: global.cookie
  }
};
function request(path, options = {}) {
  const url = `http://192.168.1.38/api/${path}`;
  return fetch(url, _objectSpread(_objectSpread({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }, nodeOptions), options)).then(parseJSON);
}

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhbnRzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YW50cy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2Nsb25lRGVlcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbImdldENhdGVnb3J5Iiwib2Zmc2V0IiwicGFnZSIsInR5cGUiLCJUWVBFIiwiZ2V0Q2F0ZWdvcnlTdWNjZXNzIiwiZGF0YSIsImdldENhdGVnb3J5RXJyb3IiLCJlcnJNZXNzIiwiZ2V0UHJvZHVjdCIsImdldFByb2R1Y3RTdWNjZXNzIiwidG90YWwiLCJnZXRQcm9kdWN0RXJyb3IiLCJnZXRIb21lUHJvZHVjdCIsImdldEhvbWVQcm9kdWN0U3VjY2VzcyIsImdldEhvbWVQcm9kdWN0RXJyb3IiLCJnZXRIb21lUHJvcG9zZSIsImdldEhvbWVQcm9wb3NlU3VjY2VzcyIsImdldEhvbWVQcm9wb3NlRXJyb3IiLCJnZXRQcm9kdWN0RmVhdHVyZSIsImdldFByb2R1Y3RGZWF0dXJlU3VjY2VzcyIsImdldFByb2R1Y3RGZWF0dXJlRXJyb3IiLCJnZXRQcm9kdWN0U3VnZ2VzdCIsImdldFByb2R1Y3RTdWdnZXN0U3VjY2VzcyIsImdldFByb2R1Y3RTdWdnZXN0RXJyb3IiLCJnZXRQcm9kdWN0RGV0YWlsIiwiYWxpYXMiLCJnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyIsImdldFByb2R1Y3REZXRhaWxFcnJvciIsInNlYXJjaFByb2R1Y3QiLCJuYW1lIiwic2VhcmNoUHJvZHVjdFN1Y2Nlc3MiLCJzZWFyY2hQcm9kdWN0RXJyb3IiLCJOYXZCYXIiLCJwcm9wcyIsIlNsaWRlIiwiQ29tcG9uZW50IiwicmVuZGVyIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicHJvZHVjdCIsIkdFVF9DQVRFR09SWSIsIkdFVF9DQVRFR09SWV9TVUNDRVNTIiwiR0VUX0NBVEVHT1JZX0VSUk9SIiwiR0VUX1BST0RVQ1QiLCJHRVRfUFJPRFVDVF9TVUNDRVNTIiwiR0VUX1BST0RVQ1RfRVJST1IiLCJHRVRfSE9NRV9QUk9EVUNUIiwiR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTIiwiR0VUX0hPTUVfUFJPRFVDVF9FUlJPUiIsIkdFVF9IT01FX1BST1BPU0UiLCJHRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1MiLCJHRVRfSE9NRV9QUk9QT1NFX0VSUk9SIiwiR0VUX0RFVEFJTCIsIkdFVF9ERVRBSUxfU1VDQ0VTUyIsIkdFVF9ERVRBSUxfRVJST1IiLCJHRVRfU1VHR0VTVCIsIkdFVF9TVUdHRVNUX1NVQ0NFU1MiLCJHRVRfU1VHR0VTVF9FUlJPUiIsIkdFVF9GRUFUVVJFIiwiR0VUX0ZFQVRVUkVfU1VDQ0VTUyIsIkdFVF9GRUFUVVJFX0VSUk9SIiwiU0VBUkNIX1BST0RVQ1QiLCJTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIiwiU0VBUkNIX1BST0RVQ1RfRVJST1IiLCJNeUFwcCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcSIsInN0b3JlIiwiZGlzcGF0Y2giLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJjYXRlZ29yeSIsImxvYWRpbmciLCJjYXRlZ29yeVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJjbG9uZURlZXAiLCJwYXlsb2FkIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0UmVkdWNlciIsInByb2R1Y3RGZWF0dXJlIiwicHJvZHVjdFN1Z2dlc3QiLCJob21lUHJvZHVjdCIsImhvbWVQcm9wb3NlIiwicHJvZHVjdERldGFpbCIsInByb2R1Y3RTZWFyY2giLCJ2YWwiLCJ1cmwiLCJyZXNwb25zZSIsImNhbGwiLCJSZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsInB1dCIsImVycm9yIiwibWVzc2FnZSIsIkNhdGVnb3J5U2FnYSIsImFsbCIsInRha2VMYXRlc3QiLCJyb290U2FnYSIsIlByb2R1Y3RTYWdhIiwiZ2V0RGV0YWlsIiwibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicHVzaCIsImxvZ2dlciIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwicmVxdWlyZSIsInBhcnNlSlNPTiIsImpzb24iLCJzdGF0dXMiLCJFcnJvciIsImlzTm9kZSIsIm5vZGVPcHRpb25zIiwiYWdlbnQiLCJBZ2VudCIsInJlamVjdFVuYXV0aG9yaXplZCIsImhlYWRlcnMiLCJDb29raWUiLCJnbG9iYWwiLCJjb29raWUiLCJyZXF1ZXN0IiwicGF0aCIsIm9wdGlvbnMiLCJmZXRjaCIsIkFjY2VwdCIsImNyZWRlbnRpYWxzIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFF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Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9jYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5ID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0NBVEVHT1JZLFxyXG4gICAgb2Zmc2V0LFxyXG4gICAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeVN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0NBVEVHT1JZX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5RXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0NBVEVHT1JZX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0ID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNULFxyXG4gIG9mZnNldCxcclxuICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG4gIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb2R1Y3QgPSAob2Zmc2V0KSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPRFVDVCxcclxuICBvZmZzZXQsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb2R1Y3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9NRV9QUk9EVUNUX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb21lUHJvZHVjdEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9NRV9QUk9EVUNUX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb3Bvc2UgPSAob2Zmc2V0KSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPUE9TRSxcclxuICBvZmZzZXQsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb3Bvc2VTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb21lUHJvcG9zZUVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9NRV9QUk9QT1NFX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEZlYXR1cmUgPSAob2Zmc2V0KSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0ZFQVRVUkUsXHJcbiAgb2Zmc2V0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RGZWF0dXJlU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0ZFQVRVUkVfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RGZWF0dXJlRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9GRUFUVVJFX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFN1Z2dlc3QgPSAob2Zmc2V0KSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1NVR0dFU1QsXHJcbiAgb2Zmc2V0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdWdnZXN0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1NVR0dFU1RfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdWdnZXN0RXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TVUdHRVNUX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdERldGFpbCA9IChhbGlhcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9ERVRBSUwsXHJcbiAgYWxpYXM6IGFsaWFzLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3REZXRhaWxTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfREVUQUlMX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RGV0YWlsRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9ERVRBSUxfRVJST1IsXHJcbiAgZXJyTWVzcyxcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hQcm9kdWN0ID0gKG5hbWUsIG9mZnNldCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLlNFQVJDSF9QUk9EVUNULFxyXG4gIG5hbWUsXHJcbiAgb2Zmc2V0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNlYXJjaFByb2R1Y3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5TRUFSQ0hfUFJPRFVDVF9TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2VhcmNoUHJvZHVjdEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5TRUFSQ0hfUFJPRFVDVF9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE5hdkJhcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNlbGVjdC1ub25lIGJnLWdyZXkgbGc6ZmxleCBsZzppdGVtcy1zdHJldGNoIHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1uby1zaHJpbmsgaXRlbXMtc3RyZXRjaCBoLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtbm8tZ3JvdyBmbGV4LW5vLXNocmluayByZWxhdGl2ZSBweS0yIHB4LTQgbGVhZGluZy1ub3JtYWwgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JleS1kYXJrXCI+VGFpbHdpbmQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtbm8tZ3JvdyBmbGV4LW5vLXNocmluayByZWxhdGl2ZSBweS0yIHB4LTQgbGVhZGluZy1ub3JtYWwgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JleS1kYXJrXCI+Q3NzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gY3Vyc29yLXBvaW50ZXIgbWwtYXV0byByZWxhdGl2ZSB3LTEyIGgtMTIgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC13aGl0ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtd2hpdGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGQ9XCJNMTAgOC41ODZMMi45MjkgMS41MTUgMS41MTUgMi45MjkgOC41ODYgMTBsLTcuMDcxIDcuMDcxIDEuNDE0IDEuNDE0TDEwIDExLjQxNGw3LjA3MSA3LjA3MSAxLjQxNC0xLjQxNEwxMS40MTQgMTBsNy4wNzEtNy4wNzEtMS40MTQtMS40MTRMMTAgOC41ODZ6XCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGxnOml0ZW1zLXN0cmV0Y2ggbGc6ZmxleC1uby1zaHJpbmsgbGc6ZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXggbGc6aXRlbXMtc3RyZXRjaCBsZzpqdXN0aWZ5LWVuZCBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4LW5vLWdyb3cgZmxleC1uby1zaHJpbmsgcmVsYXRpdmUgcHktMiBweC00IGxlYWRpbmctbm9ybWFsIHRleHQtd2hpdGUgbm8tdW5kZXJsaW5lIGZsZXggaXRlbXMtY2VudGVyIGhvdmVyOmJnLWdyZXktZGFya1wiPkl0ZW0gMTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtbm8tZ3JvdyBmbGV4LW5vLXNocmluayByZWxhdGl2ZSBweS0yIHB4LTQgbGVhZGluZy1ub3JtYWwgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JleS1kYXJrXCI+SXRlbSAyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxleC1uby1ncm93IGZsZXgtbm8tc2hyaW5rIHJlbGF0aXZlIHB5LTIgcHgtNCBsZWFkaW5nLW5vcm1hbCB0ZXh0LXdoaXRlIG5vLXVuZGVybGluZSBmbGV4IGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1ncmV5LWRhcmtcIj5JdGVtIDM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPiBTbGlkZXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUlkgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUllfRVJST1IgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWV9FUlJPUlwiOyIsImV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9FUlJPUiA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX1BST0RVQ1QgPSBcIlBST0RVQ1QvR0VUX0hPTUVfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9IT01FX1BST0RVQ1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPRFVDVF9FUlJPUiA9IFwiUFJPRFVDVC9HRVRfSE9NRV9QUk9EVUNUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPUE9TRSA9IFwiUFJPRFVDVC9HRVRfSE9NRV9QUk9QT1NFXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX0hPTUVfUFJPUE9TRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9QUk9QT1NFX0VSUk9SID0gXCJQUk9EVUNUL0dFVF9IT01FX1BST1BPU0VfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfREVUQUlMID0gXCJQUk9EVUNUL0dFVF9ERVRBSUxcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9ERVRBSUxfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfREVUQUlMX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9ERVRBSUxfRVJST1IgPSBcIlBST0RVQ1QvR0VUX0RFVEFJTF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVUdHRVNUID0gXCJQUk9EVUNUL0dFVF9TVUdHRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU1VHR0VTVF9TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9TVUdHRVNUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TVUdHRVNUX0VSUk9SID0gXCJQUk9EVUNUL0dFVF9TVUdHRVNUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZFQVRVUkUgPSBcIlBST0RVQ1QvR0VUX0ZFQVRVUkVcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GRUFUVVJFX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX0ZFQVRVUkVfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZFQVRVUkVfRVJST1IgPSBcIlBST0RVQ1QvR0VUX0ZFQVRVUkVfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVCA9IFwiUFJPRFVDVC9TRUFSQ0hfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyA9IFwiUFJPRFVDVC9TRUFSQ0hfUFJPRFVDVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVF9FUlJPUiA9IFwiUFJPRFVDVC9TRUFSQ0hfUFJPRFVDVF9FUlJPUlwiO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5cclxuaW1wb3J0IHtFTkR9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5pbXBvcnQge3dyYXBwZXJ9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInVzZXItc2NhbGFibGU9bm8sIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7Q29tcG9uZW50LCBjdHh9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlUHJvcHMgPSB7XHJcbiAgICAgICAgLi4uKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fSksXHJcbiAgICB9O1xyXG4gICAgaWYgKGN0eC5yZXEpIHtcclxuICAgICAgICBjdHguc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgICAgICBhd2FpdCBjdHguc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3BhZ2VQcm9wc307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBjYXRlZ29yeVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmNsb25lRGVlcChhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeSkgfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9DQVRFR09SWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0NBVEVHT1JZX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0NBVEVHT1JZX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yeVJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IHByb2R1Y3RSZWR1Y2VyIGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuaW1wb3J0IGNhdGVnb3J5UmVkdWNlciBmcm9tIFwiLi9jYXRlZ29yeVwiO1xyXG5cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBwcm9kdWN0OiBwcm9kdWN0UmVkdWNlcixcclxuICBjYXRlZ29yeTogY2F0ZWdvcnlSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwcm9kdWN0OiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgdG90YWw6IDAsXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgcHJvZHVjdEZlYXR1cmU6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgcHJvZHVjdFN1Z2dlc3Q6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgaG9tZVByb2R1Y3Q6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgaG9tZVByb3Bvc2U6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgcHJvZHVjdERldGFpbDoge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIGVyck1lc3M6IG51bGwsXHJcbiAgfSxcclxuICBwcm9kdWN0U2VhcmNoOiB7XHJcbiAgICB2YWw6IFwiXCIsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgcHJvZHVjdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmNsb25lRGVlcChhY3Rpb24ucGF5bG9hZC5wcm9kdWN0KSB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5HRVRfUFJPRFVDVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX1BST0RVQ1RfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPTUVfUFJPRFVDVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lUHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuaG9tZVByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGhvbWVQcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ob21lUHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfSE9NRV9QUk9EVUNUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGhvbWVQcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ob21lUHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfREVUQUlMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0RFVEFJTF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0RFVEFJTF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9IT01FX1BST1BPU0U6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaG9tZVByb3Bvc2U6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmhvbWVQcm9wb3NlLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9IT01FX1BST1BPU0VfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lUHJvcG9zZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuaG9tZVByb3Bvc2UsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPTUVfUFJPUE9TRV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lUHJvcG9zZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuaG9tZVByb3Bvc2UsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLlNFQVJDSF9QUk9EVUNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTZWFyY2g6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RTZWFyY2gsXHJcbiAgICAgICAgICB2YWw6IGFjdGlvbi5uYW1lLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLlNFQVJDSF9QUk9EVUNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdFNlYXJjaDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFNlYXJjaCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5TRUFSQ0hfUFJPRFVDVF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5pbml0aWFsU3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdFNlYXJjaDoge1xyXG4gICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLnByb2R1Y3RTZWFyY2gsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9TVUdHRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTdWdnZXN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0U3VnZ2VzdCxcclxuICAgICAgICAgIHZhbDogYWN0aW9uLm5hbWUsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX1NVR0dFU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U3VnZ2VzdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFN1Z2dlc3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX1NVR0dFU1RfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTdWdnZXN0OiB7XHJcbiAgICAgICAgICAuLi5pbml0aWFsU3RhdGUucHJvZHVjdFN1Z2dlc3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9GRUFUVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RGZWF0dXJlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RmVhdHVyZSxcclxuICAgICAgICAgIHZhbDogYWN0aW9uLm5hbWUsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0ZFQVRVUkVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RmVhdHVyZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdEZlYXR1cmUsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0ZFQVRVUkVfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RGZWF0dXJlOiB7XHJcbiAgICAgICAgICAuLi5pbml0aWFsU3RhdGUucHJvZHVjdEZlYXR1cmUsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0Q2F0ZWdvcnlTdWNjZXNzLFxyXG4gICAgZ2V0Q2F0ZWdvcnlFcnJvcixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9jYXRlZ29yeVwiO1xyXG5cclxuaW1wb3J0IHsgR0VUX0NBVEVHT1JZfSBmcm9tIFwiLi4vY29udGFudHMvY2F0ZWdvcnlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0Q2F0ZWdvcnkoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgY2F0ZWdvcmllcy9nZXQ/aWRfd2Vic2l0ZT00JmFjdGl2ZT0xYDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hhaGFoYScsIHJlc3BvbnNlKVxyXG4gICAgICAgIHlpZWxkIHB1dChnZXRDYXRlZ29yeVN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldENhdGVnb3J5RXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogQ2F0ZWdvcnlTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9DQVRFR09SWSwgZ2V0Q2F0ZWdvcnkpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgUHJvZHVjdFNhZ2EgZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTYWdhIGZyb20gXCIuL2NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIFByb2R1Y3RTYWdhKCksXHJcbiAgICBDYXRlZ29yeVNhZ2EoKVxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UHJvZHVjdFN1Y2Nlc3MsXHJcbiAgZ2V0UHJvZHVjdEVycm9yLFxyXG4gIGdldFByb2R1Y3REZXRhaWxTdWNjZXNzLFxyXG4gIGdldFByb2R1Y3REZXRhaWxFcnJvcixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9kdWN0XCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVCwgR0VUX0RFVEFJTCB9IGZyb20gXCIuLi9jb250YW50cy9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldFByb2R1Y3QoYWN0aW9uKSB7XHJcbiAgY29uc3QgdXJsID0gYHByb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF9wYXJlbnQ9MCZpZF93ZWJzaXRlPTRgO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0U3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0RGV0YWlsKGFjdGlvbikge1xyXG4gIGNvbnN0IHVybCA9IGAvcHJvZHVjdHMvZGV0YWlsP2FsaWFzPSR7YWN0aW9uLmFsaWFzfWA7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgeWllbGQgcHV0KGdldFByb2R1Y3REZXRhaWxTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KGdldFByb2R1Y3REZXRhaWxFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogUHJvZHVjdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX1BST0RVQ1QsIGdldFByb2R1Y3QpLFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChHRVRfREVUQUlMLCBnZXREZXRhaWwpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xyXG5cclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuL3NhZ2FzXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIG1pZGRsZXdhcmUucHVzaChsb2dnZXIpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcbiIsInJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VKU09OKHJlc3BvbnNlKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuY29uc3QgaXNOb2RlID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuY29uc3Qgbm9kZU9wdGlvbnMgPSAhaXNOb2RlXHJcbiAgPyB7fVxyXG4gIDoge1xyXG4gICAgICBhZ2VudDogbmV3IChyZXF1aXJlKFwiaHR0cHNcIikuQWdlbnQpKHtcclxuICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIENvb2tpZTogZ2xvYmFsLmNvb2tpZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHBhdGgsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwOi8vMTkyLjE2OC4xLjM4L2FwaS8ke3BhdGh9YDtcclxuICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAuLi5ub2RlT3B0aW9ucyxcclxuICAgIC4uLm9wdGlvbnMsXHJcbiAgfSkudGhlbihwYXJzZUpTT04pO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==