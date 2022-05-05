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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
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

/***/ "./src/components/ProductItem.js":
/*!***************************************!*\
  !*** ./src/components/ProductItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\Nextjs\\haha\\NextJs\\src\\components\\ProductItem.js";


function ProductItem() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "relative mx-auto w-full",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#",
      className: "relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow p-4 rounded-lg bg-white",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-center relative rounded-lg overflow-hidden h-52",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "transition-transform duration-500 transform ease-in-out hover:scale-110 w-full",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "absolute inset-0 bg-black opacity-10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "absolute flex justify-center bottom-0 mb-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "flex items-center font-medium text-gray-800",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  className: "w-5 h-5 fill-current mr-2",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 37
                }, this), "3 + 1"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "flex items-center font-medium text-gray-800",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  className: "w-5 h-5 fill-current mr-2",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 480 512",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 37
                }, this), "2"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "flex items-center font-medium text-gray-800",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  className: "w-5 h-5 fill-current mr-2",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 37
                }, this), "3"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none",
            children: "Featured"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "font-medium text-base md:text-lg text-gray-800 line-clamp-1",
            title: "New York",
            children: "Statue of Liberty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-gray-800 line-clamp-1",
            title: "New York, NY 10004, United States",
            children: "New York, NY 10004, United States"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid grid-cols-2 grid-rows-2 gap-4 mt-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-flex flex-col xl:flex-row xl:items-center text-gray-800",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 576 512",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mt-2 xl:mt-0",
              children: "Condominium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-flex flex-col xl:flex-row xl:items-center text-gray-800",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M17.5883 7.872H16.4286L16.7097 8.99658H6.74743V10.1211H17.4309C17.5163 10.1211 17.6006 10.1017 17.6774 10.0642C17.7542 10.0267 17.8214 9.97222 17.874 9.90487C17.9266 9.83753 17.9631 9.75908 17.9808 9.6755C17.9986 9.59192 17.997 9.5054 17.9763 9.42251L17.5883 7.872ZM17.5883 4.49829H16.4286L16.7097 5.62286H6.74743V6.74743H17.4309C17.5163 6.74742 17.6006 6.72794 17.6774 6.69046C17.7542 6.65299 17.8214 6.59851 17.874 6.53116C17.9266 6.46381 17.9631 6.38537 17.9808 6.30179C17.9986 6.2182 17.997 6.13168 17.9763 6.04879L17.5883 4.49829ZM17.4309 0H0.562286C0.413158 0 0.270139 0.0592407 0.16469 0.16469C0.0592407 0.270139 0 0.413158 0 0.562286L0 2.81143C0 2.96056 0.0592407 3.10358 0.16469 3.20903C0.270139 3.31448 0.413158 3.37372 0.562286 3.37372H4.49829V5.62286H1.28271L1.56386 4.49829H0.404143L0.0175714 6.04879C-0.00313354 6.13162 -0.00470302 6.21808 0.012982 6.30161C0.0306671 6.38514 0.0671423 6.46355 0.119641 6.53088C0.172139 6.59822 0.239283 6.65271 0.315978 6.69023C0.392673 6.72775 0.476905 6.74731 0.562286 6.74743H4.49829V8.99658H1.28271L1.56386 7.872H0.404143L0.0175714 9.42251C-0.00313354 9.50534 -0.00470302 9.5918 0.012982 9.67533C0.0306671 9.75886 0.0671423 9.83727 0.119641 9.9046C0.172139 9.97193 0.239283 10.0264 0.315978 10.0639C0.392673 10.1015 0.476905 10.121 0.562286 10.1211H4.49829V14.7228C4.12312 14.8554 3.80693 15.1164 3.60559 15.4596C3.40424 15.8028 3.33072 16.2062 3.39801 16.5984C3.4653 16.9906 3.66907 17.3464 3.9733 17.6028C4.27754 17.8593 4.66265 18 5.06057 18C5.4585 18 5.84361 17.8593 6.14784 17.6028C6.45208 17.3464 6.65585 16.9906 6.72314 16.5984C6.79043 16.2062 6.7169 15.8028 6.51556 15.4596C6.31422 15.1164 5.99803 14.8554 5.62286 14.7228V3.37372H17.4309C17.58 3.37372 17.723 3.31448 17.8285 3.20903C17.9339 3.10358 17.9932 2.96056 17.9932 2.81143V0.562286C17.9932 0.413158 17.9339 0.270139 17.8285 0.16469C17.723 0.0592407 17.58 0 17.4309 0V0ZM5.06057 16.8686C4.94936 16.8686 4.84065 16.8356 4.74818 16.7738C4.65572 16.712 4.58365 16.6242 4.54109 16.5215C4.49853 16.4187 4.4874 16.3057 4.50909 16.1966C4.53079 16.0875 4.58434 15.9873 4.66298 15.9087C4.74162 15.8301 4.8418 15.7765 4.95088 15.7548C5.05995 15.7331 5.17301 15.7443 5.27575 15.7868C5.3785 15.8294 5.46631 15.9014 5.5281 15.9939C5.58988 16.0864 5.62286 16.1951 5.62286 16.3063C5.62286 16.4554 5.56362 16.5984 5.45817 16.7039C5.35272 16.8093 5.2097 16.8686 5.06057 16.8686ZM16.8686 2.24914H1.12457V1.12457H16.8686V2.24914Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mt-2 xl:mt-0",
              children: "Partly furnished"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-flex flex-col xl:flex-row xl:items-center text-gray-800",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mt-2 xl:mt-0",
              children: "1,386 sq. ft."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-flex flex-col xl:flex-row xl:items-center text-gray-800",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 576 512",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mt-2 xl:mt-0",
              children: "$1.98 /sq.ft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid grid-cols-2 mt-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "relative",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 text-gray-800 line-clamp-1",
              children: "John Doe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "text-sm uppercase",
                children: "$"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "text-lg",
                children: "3,200"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 33
              }, this), "/m"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ }),

/***/ "./src/components/Selling.js":
/*!***********************************!*\
  !*** ./src/components/Selling.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selling; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\Nextjs\\haha\\NextJs\\src\\components\\Selling.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Selling extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mt-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: " B\xE1n ch\u1EA1y "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this);
  }

}

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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Slide */ "./src/components/Slide.js");
/* harmony import */ var _components_Selling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Selling */ "./src/components/Selling.js");
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductItem */ "./src/components/ProductItem.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/category */ "./src/actions/category.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\Nextjs\\haha\\NextJs\\src\\pages\\index.js";










const Index = () => {
  const htmlMarkup = html => {
    return {
      __html: html
    };
  };

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const category = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.category);

  const hehe = () => {
    dispatch(Object(_actions_category__WEBPACK_IMPORTED_MODULE_7__["getCategory"])());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: hehe,
      children: "hihi"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_2__["default"], {
        category: category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Selling__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mt-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Hot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-span-2 ...",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-span-2 ...",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative mt-10",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "B\xE0i vi\u1EBFt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_8__["wrapper"].withRedux(Index));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VsbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFudHMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhbnRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2Nsb25lRGVlcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbImdldENhdGVnb3J5Iiwib2Zmc2V0IiwicGFnZSIsInR5cGUiLCJUWVBFIiwiZ2V0Q2F0ZWdvcnlTdWNjZXNzIiwiZGF0YSIsImdldENhdGVnb3J5RXJyb3IiLCJlcnJNZXNzIiwiZ2V0UHJvZHVjdCIsImdldFByb2R1Y3RTdWNjZXNzIiwidG90YWwiLCJnZXRQcm9kdWN0RXJyb3IiLCJnZXRIb21lUHJvZHVjdCIsImdldEhvbWVQcm9kdWN0U3VjY2VzcyIsImdldEhvbWVQcm9kdWN0RXJyb3IiLCJnZXRIb21lUHJvcG9zZSIsImdldEhvbWVQcm9wb3NlU3VjY2VzcyIsImdldEhvbWVQcm9wb3NlRXJyb3IiLCJnZXRQcm9kdWN0RmVhdHVyZSIsImdldFByb2R1Y3RGZWF0dXJlU3VjY2VzcyIsImdldFByb2R1Y3RGZWF0dXJlRXJyb3IiLCJnZXRQcm9kdWN0U3VnZ2VzdCIsImdldFByb2R1Y3RTdWdnZXN0U3VjY2VzcyIsImdldFByb2R1Y3RTdWdnZXN0RXJyb3IiLCJnZXRQcm9kdWN0RGV0YWlsIiwiYWxpYXMiLCJnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyIsImdldFByb2R1Y3REZXRhaWxFcnJvciIsInNlYXJjaFByb2R1Y3QiLCJuYW1lIiwic2VhcmNoUHJvZHVjdFN1Y2Nlc3MiLCJzZWFyY2hQcm9kdWN0RXJyb3IiLCJOYXZCYXIiLCJwcm9wcyIsIlByb2R1Y3RJdGVtIiwiU2VsbGluZyIsIkNvbXBvbmVudCIsInJlbmRlciIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIlNsaWRlIiwicHJvZHVjdCIsIkdFVF9DQVRFR09SWSIsIkdFVF9DQVRFR09SWV9TVUNDRVNTIiwiR0VUX0NBVEVHT1JZX0VSUk9SIiwiR0VUX1BST0RVQ1QiLCJHRVRfUFJPRFVDVF9TVUNDRVNTIiwiR0VUX1BST0RVQ1RfRVJST1IiLCJHRVRfSE9NRV9QUk9EVUNUIiwiR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTIiwiR0VUX0hPTUVfUFJPRFVDVF9FUlJPUiIsIkdFVF9IT01FX1BST1BPU0UiLCJHRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1MiLCJHRVRfSE9NRV9QUk9QT1NFX0VSUk9SIiwiR0VUX0RFVEFJTCIsIkdFVF9ERVRBSUxfU1VDQ0VTUyIsIkdFVF9ERVRBSUxfRVJST1IiLCJHRVRfU1VHR0VTVCIsIkdFVF9TVUdHRVNUX1NVQ0NFU1MiLCJHRVRfU1VHR0VTVF9FUlJPUiIsIkdFVF9GRUFUVVJFIiwiR0VUX0ZFQVRVUkVfU1VDQ0VTUyIsIkdFVF9GRUFUVVJFX0VSUk9SIiwiU0VBUkNIX1BST0RVQ1QiLCJTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIiwiU0VBUkNIX1BST0RVQ1RfRVJST1IiLCJJbmRleCIsImh0bWxNYXJrdXAiLCJodG1sIiwiX19odG1sIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNhdGVnb3J5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImhlaGUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImNhdGVnb3J5UmVkdWNlciIsImFjdGlvbiIsIkhZRFJBVEUiLCJjbG9uZURlZXAiLCJwYXlsb2FkIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0UmVkdWNlciIsInByb2R1Y3RGZWF0dXJlIiwicHJvZHVjdFN1Z2dlc3QiLCJob21lUHJvZHVjdCIsImhvbWVQcm9wb3NlIiwicHJvZHVjdERldGFpbCIsInByb2R1Y3RTZWFyY2giLCJ2YWwiLCJ1cmwiLCJyZXNwb25zZSIsImNhbGwiLCJSZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsInB1dCIsImVycm9yIiwibWVzc2FnZSIsIkNhdGVnb3J5U2FnYSIsImFsbCIsInRha2VMYXRlc3QiLCJyb290U2FnYSIsIlByb2R1Y3RTYWdhIiwiZ2V0RGV0YWlsIiwibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicHVzaCIsImxvZ2dlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsInJlcXVpcmUiLCJwYXJzZUpTT04iLCJqc29uIiwic3RhdHVzIiwiRXJyb3IiLCJpc05vZGUiLCJub2RlT3B0aW9ucyIsImFnZW50IiwiQWdlbnQiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJoZWFkZXJzIiwiQ29va2llIiwiZ2xvYmFsIiwiY29va2llIiwicmVxdWVzdCIsInBhdGgiLCJvcHRpb25zIiwiZmV0Y2giLCJBY2NlcHQiLCJjcmVkZW50aWFscyIsInRoZW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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ImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvY2F0ZWdvcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeSA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9DQVRFR09SWSxcclxuICAgIG9mZnNldCxcclxuICAgIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnlTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9DQVRFR09SWV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeUVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9DQVRFR09SWV9FUlJPUixcclxuICAgIGVyck1lc3MsXHJcbn0pO1xyXG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdCA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVCxcclxuICBvZmZzZXQsXHJcbiAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVF9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvbWVQcm9kdWN0ID0gKG9mZnNldCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9IT01FX1BST0RVQ1QsXHJcbiAgb2Zmc2V0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEhvbWVQcm9kdWN0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb2R1Y3RFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPRFVDVF9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvbWVQcm9wb3NlID0gKG9mZnNldCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9IT01FX1BST1BPU0UsXHJcbiAgb2Zmc2V0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEhvbWVQcm9wb3NlU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPUE9TRV9TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb3Bvc2VFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPUE9TRV9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RGZWF0dXJlID0gKG9mZnNldCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9GRUFUVVJFLFxyXG4gIG9mZnNldCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RmVhdHVyZVN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9GRUFUVVJFX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RmVhdHVyZUVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfRkVBVFVSRV9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdWdnZXN0ID0gKG9mZnNldCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TVUdHRVNULFxyXG4gIG9mZnNldCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VnZ2VzdFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TVUdHRVNUX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VnZ2VzdEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU1VHR0VTVF9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3REZXRhaWwgPSAoYWxpYXMpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfREVUQUlMLFxyXG4gIGFsaWFzOiBhbGlhcyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0RFVEFJTF9TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdERldGFpbEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfREVUQUlMX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoUHJvZHVjdCA9IChuYW1lLCBvZmZzZXQpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5TRUFSQ0hfUFJPRFVDVCxcclxuICBuYW1lLFxyXG4gIG9mZnNldCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZWFyY2hQcm9kdWN0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNlYXJjaFByb2R1Y3RFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuU0VBUkNIX1BST0RVQ1RfRVJST1IsXHJcbiAgZXJyTWVzcyxcclxufSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBOYXZCYXIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzZWxlY3Qtbm9uZSBiZy1ncmV5IGxnOmZsZXggbGc6aXRlbXMtc3RyZXRjaCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm8tc2hyaW5rIGl0ZW1zLXN0cmV0Y2ggaC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4LW5vLWdyb3cgZmxleC1uby1zaHJpbmsgcmVsYXRpdmUgcHktMiBweC00IGxlYWRpbmctbm9ybWFsIHRleHQtd2hpdGUgbm8tdW5kZXJsaW5lIGZsZXggaXRlbXMtY2VudGVyIGhvdmVyOmJnLWdyZXktZGFya1wiPlRhaWx3aW5kPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4LW5vLWdyb3cgZmxleC1uby1zaHJpbmsgcmVsYXRpdmUgcHktMiBweC00IGxlYWRpbmctbm9ybWFsIHRleHQtd2hpdGUgbm8tdW5kZXJsaW5lIGZsZXggaXRlbXMtY2VudGVyIGhvdmVyOmJnLWdyZXktZGFya1wiPkNzczwvYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuIGN1cnNvci1wb2ludGVyIG1sLWF1dG8gcmVsYXRpdmUgdy0xMiBoLTEyIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtd2hpdGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXdoaXRlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBkPVwiTTEwIDguNTg2TDIuOTI5IDEuNTE1IDEuNTE1IDIuOTI5IDguNTg2IDEwbC03LjA3MSA3LjA3MSAxLjQxNCAxLjQxNEwxMCAxMS40MTRsNy4wNzEgNy4wNzEgMS40MTQtMS40MTRMMTEuNDE0IDEwbDcuMDcxLTcuMDcxLTEuNDE0LTEuNDE0TDEwIDguNTg2elwiIC8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6ZmxleCBsZzppdGVtcy1zdHJldGNoIGxnOmZsZXgtbm8tc2hyaW5rIGxnOmZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGxnOml0ZW1zLXN0cmV0Y2ggbGc6anVzdGlmeS1lbmQgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxleC1uby1ncm93IGZsZXgtbm8tc2hyaW5rIHJlbGF0aXZlIHB5LTIgcHgtNCBsZWFkaW5nLW5vcm1hbCB0ZXh0LXdoaXRlIG5vLXVuZGVybGluZSBmbGV4IGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1ncmV5LWRhcmtcIj5JdGVtIDE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4LW5vLWdyb3cgZmxleC1uby1zaHJpbmsgcmVsYXRpdmUgcHktMiBweC00IGxlYWRpbmctbm9ybWFsIHRleHQtd2hpdGUgbm8tdW5kZXJsaW5lIGZsZXggaXRlbXMtY2VudGVyIGhvdmVyOmJnLWdyZXktZGFya1wiPkl0ZW0gMjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtbm8tZ3JvdyBmbGV4LW5vLXNocmluayByZWxhdGl2ZSBweS0yIHB4LTQgbGVhZGluZy1ub3JtYWwgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JleS1kYXJrXCI+SXRlbSAzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0SXRlbSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0yIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cgcC00IHJvdW5kZWQtbGcgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcmVsYXRpdmUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gaC01MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgdHJhbnNmb3JtIGVhc2UtaW4tb3V0IGhvdmVyOnNjYWxlLTExMCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ibGFjayBvcGFjaXR5LTEwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGJvdHRvbS0wIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGJnLXdoaXRlIHB4LTQgcHktMSBzcGFjZS14LTUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTUgZmlsbC1jdXJyZW50IG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00ODAsMjI2LjE1VjgwYTQ4LDQ4LDAsMCwwLTQ4LTQ4SDgwQTQ4LDQ4LDAsMCwwLDMyLDgwVjIyNi4xNUMxMy43NCwyMzEsMCwyNDYuODksMCwyNjYuNjdWNDcyYTgsOCwwLDAsMCw4LDhIMjRhOCw4LDAsMCwwLDgtOFY0MTZINDgwdjU2YTgsOCwwLDAsMCw4LDhoMTZhOCw4LDAsMCwwLDgtOFYyNjYuNjdDNTEyLDI0Ni44OSw0OTguMjYsMjMxLDQ4MCwyMjYuMTVaTTY0LDE5MmEzMiwzMiwwLDAsMSwzMi0zMkgyMDhhMzIsMzIsMCwwLDEsMzIsMzJ2MzJINjRabTM4NCwzMkgyNzJWMTkyYTMyLDMyLDAsMCwxLDMyLTMySDQxNmEzMiwzMiwwLDAsMSwzMiwzMlpNODAsNjRINDMyYTE2LDE2LDAsMCwxLDE2LDE2djU2LjlhNjMuMjcsNjMuMjcsMCwwLDAtMzItOC45SDMwNGE2My45LDYzLjksMCwwLDAtNDgsMjEuNzFBNjMuOSw2My45LDAsMCwwLDIwOCwxMjhIOTZhNjMuMjcsNjMuMjcsMCwwLDAtMzIsOC45VjgwQTE2LDE2LDAsMCwxLDgwLDY0Wk0zMiwzODRWMjY2LjY3QTEwLjY5LDEwLjY5LDAsMCwxLDQyLjY3LDI1Nkg0NjkuMzNBMTAuNjksMTAuNjksMCwwLDEsNDgwLDI2Ni42N1YzODRaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTUgZmlsbC1jdXJyZW50IG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ4MCA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00MjMuMTggMTk1LjgxbC0yNC45NC03Ni41OEMzODcuNTEgODYuMjkgMzU2LjgxIDY0IDMyMi4xNyA2NEgxNTcuODNjLTM0LjY0IDAtNjUuMzQgMjIuMjktNzYuMDcgNTUuMjJMNTYuODIgMTk1LjhDMjQuMDIgMjA1Ljc5IDAgMjM1LjkyIDAgMjcxLjk5VjQwMGMwIDI2LjQ3IDIxLjUzIDQ4IDQ4IDQ4aDE2YzI2LjQ3IDAgNDgtMjEuNTMgNDgtNDh2LTE2aDI1NnYxNmMwIDI2LjQ3IDIxLjUzIDQ4IDQ4IDQ4aDE2YzI2LjQ3IDAgNDgtMjEuNTMgNDgtNDhWMjcxLjk5YzAtMzYuMDctMjQuMDItNjYuMi01Ni44Mi03Ni4xOHptLTMxMC45OS02Ni42N2M2LjQ2LTE5LjgyIDI0LjgtMzMuMTQgNDUuNjQtMzMuMTRoMTY0LjM0YzIwLjg0IDAgMzkuMTggMTMuMzIgNDUuNjQgMzMuMTNsMjAuNDcgNjIuODVIOTEuNzJsMjAuNDctNjIuODR6TTgwIDQwMGMwIDguODMtNy4xOSAxNi0xNiAxNkg0OGMtOC44MSAwLTE2LTcuMTctMTYtMTZ2LTE2aDQ4djE2em0zNjggMGMwIDguODMtNy4xOSAxNi0xNiAxNmgtMTZjLTguODEgMC0xNi03LjE3LTE2LTE2di0xNmg0OHYxNnptMC04MC4wMXYzMkgzMnYtODBjMC0yNi40NyAyMS41My00OCA0OC00OGgzMjBjMjYuNDcgMCA0OCAyMS41MyA0OCA0OHY0OHpNMTA0LjggMjQ4Qzc4Ljg0IDI0OCA2MCAyNjQuOCA2MCAyODcuOTVjMCAyMy4xNSAxOC44NCAzOS45NSA0NC44IDM5Ljk1bDEwLjE0LjFjMzkuMjEgMCA0NS4wNi0yMC4xIDQ1LjA2LTMyLjA4IDAtMjQuNjgtMzEuMS00Ny45Mi01NS4yLTQ3Ljkyem0xMC4xNCA1NmMtMy41MSAwLTcuMDItLjEtMTAuMTQtLjEtMTIuNDggMC0yMC44LTYuMzgtMjAuOC0xNS45NVM5Mi4zMiAyNzIgMTA0LjggMjcyczMxLjIgMTQuMzYgMzEuMiAyMy45M2MwIDcuMTctMTAuNTMgOC4wNy0yMS4wNiA4LjA3em0yNjAuMjYtNTZjLTI0LjEgMC01NS4yIDIzLjI0LTU1LjIgNDcuOTMgMCAxMS45OCA1Ljg1IDMyLjA4IDQ1LjA2IDMyLjA4bDEwLjE0LS4xYzI1Ljk2IDAgNDQuOC0xNi44IDQ0LjgtMzkuOTUgMC0yMy4xNi0xOC44NC0zOS45Ni00NC44LTM5Ljk2em0wIDU1LjljLTMuMTIgMC02LjYzLjEtMTAuMTQuMS0xMC41MyAwLTIxLjA2LS45LTIxLjA2LTguMDcgMC05LjU3IDE4LjcyLTIzLjkzIDMxLjItMjMuOTNzMjAuOCA2LjM4IDIwLjggMTUuOTUtOC4zMiAxNS45NS0yMC44IDE1Ljk1elwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTUgZmlsbC1jdXJyZW50IG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01MDQsMjU2SDY0VjYxLjI1YTI5LjI2LDI5LjI2LDAsMCwxLDQ5Ljk0LTIwLjY5TDEzOS4xOCw2NS44QTcxLjQ5LDcxLjQ5LDAsMCwwLDEyOCwxMDRjMCwyMC4zLDguOCwzOC4yMSwyMi4zNCw1MS4yNkwxMzguNTgsMTY3YTgsOCwwLDAsMCwwLDExLjMxbDExLjMxLDExLjMyYTgsOCwwLDAsMCwxMS4zMiwwTDI4NS42Niw2NS4yMWE4LDgsMCwwLDAsMC0xMS4zMkwyNzQuMzQsNDIuNThhOCw4LDAsMCwwLTExLjMxLDBMMjUxLjI2LDU0LjM0QzIzOC4yMSw0MC44LDIyMC4zLDMyLDIwMCwzMmE3MS40NCw3MS40NCwwLDAsMC0zOC4yLDExLjE4TDEzNi41NiwxOEE2MS4yNCw2MS4yNCwwLDAsMCwzMiw2MS4yNVYyNTZIOGE4LDgsMCwwLDAtOCw4djE2YTgsOCwwLDAsMCw4LDhIMzJ2OTZjMCw0MS43NCwyNi44LDc2LjksNjQsOTAuMTJWNTA0YTgsOCwwLDAsMCw4LDhoMTZhOCw4LDAsMCwwLDgtOFY0ODBIMzg0djI0YTgsOCwwLDAsMCw4LDhoMTZhOCw4LDAsMCwwLDgtOFY0NzQuMTJjMzcuMi0xMy4yMiw2NC00OC4zOCw2NC05MC4xMlYyODhoMjRhOCw4LDAsMCwwLDgtOFYyNjRBOCw4LDAsMCwwLDUwNCwyNTZaTTIyOC43MSw3Ni45LDE3Mi45LDEzMi43MUEzOC42NywzOC42NywwLDAsMSwxNjAsMTA0YTQwLDQwLDAsMCwxLDQwLTQwQTM4LjY3LDM4LjY3LDAsMCwxLDIyOC43MSw3Ni45Wk00NDgsMzg0YTY0LjA3LDY0LjA3LDAsMCwxLTY0LDY0SDEyOGE2NC4wNyw2NC4wNywwLDAsMS02NC02NFYyODhINDQ4WlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaW5saW5lLWZsZXggbXQtMyBtbC0zIHB4LTMgcHktMiByb3VuZGVkLWxnIHotMTAgYmctcmVkLTUwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgc2VsZWN0LW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgRmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYmFzZSBtZDp0ZXh0LWxnIHRleHQtZ3JheS04MDAgbGluZS1jbGFtcC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmV3IFlvcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1ZSBvZiBMaWJlcnR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSB0ZXh0LWdyYXktODAwIGxpbmUtY2xhbXAtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmV3IFlvcmssIE5ZIDEwMDA0LCBVbml0ZWQgU3RhdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXcgWW9yaywgTlkgMTAwMDQsIFVuaXRlZCBTdGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMiBnYXAtNCBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGZsZXgtY29sIHhsOmZsZXgtcm93IHhsOml0ZW1zLWNlbnRlciB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctNSBoLTUgeGw6dy00IHhsOmgtNCBtci0zIGZpbGwtY3VycmVudCB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01NzAuNTMsMjQyLDUxMiwxOTAuNzVWNDhhMTYsMTYsMCwwLDAtMTYtMTZINDAwYTE2LDE2LDAsMCwwLTE2LDE2Vjc4Ljc1TDI5OC41Myw0YTE2LDE2LDAsMCwwLTIxLjA2LDBMNS40NywyNDJhMTYsMTYsMCwwLDAsMjEuMDcsMjQuMDlMNjQsMjMzLjI3VjQ2NGE0OC4wNSw0OC4wNSwwLDAsMCw0OCw0OEg0NjRhNDguMDUsNDguMDUsMCwwLDAsNDgtNDhWMjMzLjI3bDM3LjQ2LDMyLjc5QTE2LDE2LDAsMCwwLDU3MC41MywyNDJaTTQ4MCw0NjRhMTYsMTYsMCwwLDEtMTYsMTZIMTEyYTE2LDE2LDAsMCwxLTE2LTE2VjIwNS4yN2wxOTItMTY4LDE5MiwxNjhabTAtMzAxLjI1LTY0LTU2VjY0aDY0Wk0yMDgsMjE4LjY3VjMyNS4zNEEyNi43NSwyNi43NSwwLDAsMCwyMzQuNjYsMzUySDM0MS4zQTI2Ljc2LDI2Ljc2LDAsMCwwLDM2OCwzMjUuMzRWMjE4LjY3QTI2Ljc1LDI2Ljc1LDAsMCwwLDM0MS4zLDE5MkgyMzQuNjZBMjYuNzQsMjYuNzQsMCwwLDAsMjA4LDIxOC42N1pNMjQwLDIyNGg5NnY5NkgyNDBaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0yIHhsOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25kb21pbml1bVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggZmxleC1jb2wgeGw6ZmxleC1yb3cgeGw6aXRlbXMtY2VudGVyIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy01IGgtNSB4bDp3LTQgeGw6aC00IG1yLTMgZmlsbC1jdXJyZW50IHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE3LjU4ODMgNy44NzJIMTYuNDI4NkwxNi43MDk3IDguOTk2NThINi43NDc0M1YxMC4xMjExSDE3LjQzMDlDMTcuNTE2MyAxMC4xMjExIDE3LjYwMDYgMTAuMTAxNyAxNy42Nzc0IDEwLjA2NDJDMTcuNzU0MiAxMC4wMjY3IDE3LjgyMTQgOS45NzIyMiAxNy44NzQgOS45MDQ4N0MxNy45MjY2IDkuODM3NTMgMTcuOTYzMSA5Ljc1OTA4IDE3Ljk4MDggOS42NzU1QzE3Ljk5ODYgOS41OTE5MiAxNy45OTcgOS41MDU0IDE3Ljk3NjMgOS40MjI1MUwxNy41ODgzIDcuODcyWk0xNy41ODgzIDQuNDk4MjlIMTYuNDI4NkwxNi43MDk3IDUuNjIyODZINi43NDc0M1Y2Ljc0NzQzSDE3LjQzMDlDMTcuNTE2MyA2Ljc0NzQyIDE3LjYwMDYgNi43Mjc5NCAxNy42Nzc0IDYuNjkwNDZDMTcuNzU0MiA2LjY1Mjk5IDE3LjgyMTQgNi41OTg1MSAxNy44NzQgNi41MzExNkMxNy45MjY2IDYuNDYzODEgMTcuOTYzMSA2LjM4NTM3IDE3Ljk4MDggNi4zMDE3OUMxNy45OTg2IDYuMjE4MiAxNy45OTcgNi4xMzE2OCAxNy45NzYzIDYuMDQ4NzlMMTcuNTg4MyA0LjQ5ODI5Wk0xNy40MzA5IDBIMC41NjIyODZDMC40MTMxNTggMCAwLjI3MDEzOSAwLjA1OTI0MDcgMC4xNjQ2OSAwLjE2NDY5QzAuMDU5MjQwNyAwLjI3MDEzOSAwIDAuNDEzMTU4IDAgMC41NjIyODZMMCAyLjgxMTQzQzAgMi45NjA1NiAwLjA1OTI0MDcgMy4xMDM1OCAwLjE2NDY5IDMuMjA5MDNDMC4yNzAxMzkgMy4zMTQ0OCAwLjQxMzE1OCAzLjM3MzcyIDAuNTYyMjg2IDMuMzczNzJINC40OTgyOVY1LjYyMjg2SDEuMjgyNzFMMS41NjM4NiA0LjQ5ODI5SDAuNDA0MTQzTDAuMDE3NTcxNCA2LjA0ODc5Qy0wLjAwMzEzMzU0IDYuMTMxNjIgLTAuMDA0NzAzMDIgNi4yMTgwOCAwLjAxMjk4MiA2LjMwMTYxQzAuMDMwNjY3MSA2LjM4NTE0IDAuMDY3MTQyMyA2LjQ2MzU1IDAuMTE5NjQxIDYuNTMwODhDMC4xNzIxMzkgNi41OTgyMiAwLjIzOTI4MyA2LjY1MjcxIDAuMzE1OTc4IDYuNjkwMjNDMC4zOTI2NzMgNi43Mjc3NSAwLjQ3NjkwNSA2Ljc0NzMxIDAuNTYyMjg2IDYuNzQ3NDNINC40OTgyOVY4Ljk5NjU4SDEuMjgyNzFMMS41NjM4NiA3Ljg3MkgwLjQwNDE0M0wwLjAxNzU3MTQgOS40MjI1MUMtMC4wMDMxMzM1NCA5LjUwNTM0IC0wLjAwNDcwMzAyIDkuNTkxOCAwLjAxMjk4MiA5LjY3NTMzQzAuMDMwNjY3MSA5Ljc1ODg2IDAuMDY3MTQyMyA5LjgzNzI3IDAuMTE5NjQxIDkuOTA0NkMwLjE3MjEzOSA5Ljk3MTkzIDAuMjM5MjgzIDEwLjAyNjQgMC4zMTU5NzggMTAuMDYzOUMwLjM5MjY3MyAxMC4xMDE1IDAuNDc2OTA1IDEwLjEyMSAwLjU2MjI4NiAxMC4xMjExSDQuNDk4MjlWMTQuNzIyOEM0LjEyMzEyIDE0Ljg1NTQgMy44MDY5MyAxNS4xMTY0IDMuNjA1NTkgMTUuNDU5NkMzLjQwNDI0IDE1LjgwMjggMy4zMzA3MiAxNi4yMDYyIDMuMzk4MDEgMTYuNTk4NEMzLjQ2NTMgMTYuOTkwNiAzLjY2OTA3IDE3LjM0NjQgMy45NzMzIDE3LjYwMjhDNC4yNzc1NCAxNy44NTkzIDQuNjYyNjUgMTggNS4wNjA1NyAxOEM1LjQ1ODUgMTggNS44NDM2MSAxNy44NTkzIDYuMTQ3ODQgMTcuNjAyOEM2LjQ1MjA4IDE3LjM0NjQgNi42NTU4NSAxNi45OTA2IDYuNzIzMTQgMTYuNTk4NEM2Ljc5MDQzIDE2LjIwNjIgNi43MTY5IDE1LjgwMjggNi41MTU1NiAxNS40NTk2QzYuMzE0MjIgMTUuMTE2NCA1Ljk5ODAzIDE0Ljg1NTQgNS42MjI4NiAxNC43MjI4VjMuMzczNzJIMTcuNDMwOUMxNy41OCAzLjM3MzcyIDE3LjcyMyAzLjMxNDQ4IDE3LjgyODUgMy4yMDkwM0MxNy45MzM5IDMuMTAzNTggMTcuOTkzMiAyLjk2MDU2IDE3Ljk5MzIgMi44MTE0M1YwLjU2MjI4NkMxNy45OTMyIDAuNDEzMTU4IDE3LjkzMzkgMC4yNzAxMzkgMTcuODI4NSAwLjE2NDY5QzE3LjcyMyAwLjA1OTI0MDcgMTcuNTggMCAxNy40MzA5IDBWMFpNNS4wNjA1NyAxNi44Njg2QzQuOTQ5MzYgMTYuODY4NiA0Ljg0MDY1IDE2LjgzNTYgNC43NDgxOCAxNi43NzM4QzQuNjU1NzIgMTYuNzEyIDQuNTgzNjUgMTYuNjI0MiA0LjU0MTA5IDE2LjUyMTVDNC40OTg1MyAxNi40MTg3IDQuNDg3NCAxNi4zMDU3IDQuNTA5MDkgMTYuMTk2NkM0LjUzMDc5IDE2LjA4NzUgNC41ODQzNCAxNS45ODczIDQuNjYyOTggMTUuOTA4N0M0Ljc0MTYyIDE1LjgzMDEgNC44NDE4IDE1Ljc3NjUgNC45NTA4OCAxNS43NTQ4QzUuMDU5OTUgMTUuNzMzMSA1LjE3MzAxIDE1Ljc0NDMgNS4yNzU3NSAxNS43ODY4QzUuMzc4NSAxNS44Mjk0IDUuNDY2MzEgMTUuOTAxNCA1LjUyODEgMTUuOTkzOUM1LjU4OTg4IDE2LjA4NjQgNS42MjI4NiAxNi4xOTUxIDUuNjIyODYgMTYuMzA2M0M1LjYyMjg2IDE2LjQ1NTQgNS41NjM2MiAxNi41OTg0IDUuNDU4MTcgMTYuNzAzOUM1LjM1MjcyIDE2LjgwOTMgNS4yMDk3IDE2Ljg2ODYgNS4wNjA1NyAxNi44Njg2Wk0xNi44Njg2IDIuMjQ5MTRIMS4xMjQ1N1YxLjEyNDU3SDE2Ljg2ODZWMi4yNDkxNFpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTIgeGw6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhcnRseSBmdXJuaXNoZWRcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGZsZXgtY29sIHhsOmZsZXgtcm93IHhsOml0ZW1zLWNlbnRlciB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctNSBoLTUgeGw6dy00IHhsOmgtNCBtci0zIGZpbGwtY3VycmVudCB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zOTkuOTU5IDE3MC41ODVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUw0NTEuODg3IDIzOUg2MC4xMTNsNTEuOTI4LTUxLjQ0NGM0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTcuMDcxLTcuMDdjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAwbC04NC40ODUgODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWw4NC40ODUgODRjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3IDBsNy4wNzEtNy4wN2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMNjAuMTEzIDI3M2gzOTEuNzczbC01MS45MjggNTEuNDQ0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsNy4wNzEgNy4wN2M0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcgMGw4NC40ODUtODRjNC42ODctNC42ODYgNC42ODctMTIuMjg0IDAtMTYuOTcxbC04NC40ODUtODRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAwbC03LjA3IDcuMDcxelwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtMiB4bDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgMSwzODYgc3EuIGZ0LlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggZmxleC1jb2wgeGw6ZmxleC1yb3cgeGw6aXRlbXMtY2VudGVyIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy01IGgtNSB4bDp3LTQgeGw6aC00IG1yLTMgZmlsbC1jdXJyZW50IHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUzMi4wMSAzODYuMTdDNTU5LjQ4IDM1OS4wNSA1NzYgMzI1LjA0IDU3NiAyODhjMC04MC4wMi03Ni40NS0xNDYuMTMtMTc2LjE4LTE1Ny45NCAwIC4wMS4wMS4wMi4wMS4wM0MzNjguMzcgNzIuNDcgMjk0LjM0IDMyIDIwOCAzMiA5My4xMiAzMiAwIDEwMy42MyAwIDE5MmMwIDM3LjA0IDE2LjUyIDcxLjA1IDQzLjk5IDk4LjE3LTE1LjMgMzAuNzQtMzcuMzQgNTQuNTMtMzcuNyA1NC44OS02LjMxIDYuNjktOC4wNSAxNi41My00LjQyIDI0Ljk5QTIzLjA4NSAyMy4wODUgMCAwIDAgMjMuMDYgMzg0YzUzLjU0IDAgOTYuNjctMjAuMjQgMTI1LjE3LTM4Ljc4IDkuMDggMi4wOSAxOC40NSAzLjY4IDI4IDQuODJDMjA3Ljc0IDQwNy41OSAyODEuNzMgNDQ4IDM2OCA0NDhjMjAuNzkgMCA0MC44My0yLjQxIDU5Ljc3LTYuNzhDNDU2LjI3IDQ1OS43NiA0OTkuNCA0ODAgNTUyLjk0IDQ4MGM5LjIyIDAgMTcuNTUtNS41IDIxLjE4LTEzLjk2IDMuNjQtOC40NiAxLjg5LTE4LjMtNC40Mi0yNC45OS0uMzUtLjM2LTIyLjM5LTI0LjE0LTM3LjY5LTU0Ljg4em0tMzc2LjU5LTcyLjEzbC0xMy4yNC0zLjA1LTExLjM5IDcuNDFjLTIwLjA3IDEzLjA2LTUwLjQ5IDI4LjI1LTg3LjY4IDMyLjQ3IDguNzctMTEuMyAyMC4xNy0yNy42MSAyOS41NC00Ni40NGwxMC4zMi0yMC43NS0xNi40OS0xNi4yOEM1MC43NSAyNTEuODcgMzIgMjI2LjE5IDMyIDE5MmMwLTcwLjU4IDc4Ljk1LTEyOCAxNzYtMTI4czE3NiA1Ny40MiAxNzYgMTI4LTc4Ljk1IDEyOC0xNzYgMTI4Yy0xNy43MyAwLTM1LjQyLTIuMDEtNTIuNTgtNS45NnptMjg5LjggMTAwLjM1bC0xMS4zOS03LjQxLTEzLjI0IDMuMDVBMjM0LjMxOCAyMzQuMzE4IDAgMCAxIDM2OCA0MTZjLTY1LjE0IDAtMTIyLTI1Ljk0LTE1Mi40My02NC4yOUMzMjYuOTEgMzQ4LjYyIDQxNiAyNzguNCA0MTYgMTkyYzAtOS40NS0xLjI3LTE4LjY2LTMuMzItMjcuNjZDNDg4LjEyIDE3OC43OCA1NDQgMjI4LjY3IDU0NCAyODhjMCAzNC4xOS0xOC43NSA1OS44Ny0zNC40NyA3NS4zOWwtMTYuNDkgMTYuMjggMTAuMzIgMjAuNzVjOS4zOCAxOC44NiAyMC44MSAzNS4xOSAyOS41MyA0Ni40NC0zNy4xOS00LjIyLTY3LjYtMTkuNDEtODcuNjctMzIuNDd6TTIzMy4zOCAxODIuOTFsLTQxLjU2LTEyLjQ3Yy00LjIyLTEuMjctNy4xOS01LjYyLTcuMTktMTAuNTggMC02LjAzIDQuMzQtMTAuOTQgOS42Ni0xMC45NGgyNS45NGMzLjkgMCA3LjY1IDEuMDggMTAuOTYgMy4xIDMuMTcgMS45MyA3LjMxIDEuMTUgMTAtMS40bDExLjQ0LTEwLjg3YzMuNTMtMy4zNiAzLjM4LTkuMjItLjU0LTEyLjExLTguMTgtNi4wMy0xNy45Ny05LjU4LTI4LjA4LTEwLjMyVjEwNGMwLTQuNDItMy41OC04LTgtOGgtMTZjLTQuNDIgMC04IDMuNTgtOCA4djEzLjRjLTIxLjg1IDEuMjktMzkuMzggMTkuNjItMzkuMzggNDIuNDYgMCAxOC45OCAxMi4zNCAzNS45NCAzMCA0MS4yM2w0MS41NiAxMi40N2M0LjIyIDEuMjcgNy4xOSA1LjYyIDcuMTkgMTAuNTggMCA2LjAzLTQuMzQgMTAuOTQtOS42NiAxMC45NGgtMjUuOTRjLTMuOSAwLTcuNjUtMS4wOC0xMC45Ni0zLjEtMy4xNy0xLjk0LTcuMzEtMS4xNS0xMCAxLjRsLTExLjQ0IDEwLjg3Yy0zLjUzIDMuMzYtMy4zOCA5LjIyLjU0IDEyLjExIDguMTggNi4wMyAxNy45NyA5LjU4IDI4LjA4IDEwLjMyVjI4MGMwIDQuNDIgMy41OCA4IDggOGgxNmM0LjQyIDAgOC0zLjU4IDgtOHYtMTMuNGMyMS44NS0xLjI5IDM5LjM4LTE5LjYyIDM5LjM4LTQyLjQ2IDAtMTguOTgtMTIuMzUtMzUuOTQtMzAtNDEuMjN6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0yIHhsOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAkMS45OCAvc3EuZnRcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHctNiBoLTYgbWQ6dy04IG1kOmgtOCBiZy1ncmF5LTIwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGlubGluZS1ibG9jayB3LTMgaC0zIGJnLXByaW1hcnktcmVkIHJvdW5kZWQtZnVsbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LWdyYXktODAwIGxpbmUtY2xhbXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvaG4gRG9lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBmb250LXNlbWlib2xkIHRleHQtcHJpbWFyeSB3aGl0ZXNwYWNlLW5vd3JhcCBsZWFkaW5nLXRpZ2h0IHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgJFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+MywyMDA8L3NwYW4+L21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEl0ZW07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsbGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cclxuICAgICAgICAgICAgICAgIDxoMj4gQsOhbiBjaOG6oXkgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+MTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+NDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz42PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+NzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjg8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz45PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPiBTbGlkZXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUlkgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUllfRVJST1IgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWV9FUlJPUlwiOyIsImV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9FUlJPUiA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX1BST0RVQ1QgPSBcIlBST0RVQ1QvR0VUX0hPTUVfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9IT01FX1BST0RVQ1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPRFVDVF9FUlJPUiA9IFwiUFJPRFVDVC9HRVRfSE9NRV9QUk9EVUNUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPUE9TRSA9IFwiUFJPRFVDVC9HRVRfSE9NRV9QUk9QT1NFXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX0hPTUVfUFJPUE9TRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9QUk9QT1NFX0VSUk9SID0gXCJQUk9EVUNUL0dFVF9IT01FX1BST1BPU0VfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfREVUQUlMID0gXCJQUk9EVUNUL0dFVF9ERVRBSUxcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9ERVRBSUxfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfREVUQUlMX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9ERVRBSUxfRVJST1IgPSBcIlBST0RVQ1QvR0VUX0RFVEFJTF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVUdHRVNUID0gXCJQUk9EVUNUL0dFVF9TVUdHRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU1VHR0VTVF9TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9TVUdHRVNUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TVUdHRVNUX0VSUk9SID0gXCJQUk9EVUNUL0dFVF9TVUdHRVNUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZFQVRVUkUgPSBcIlBST0RVQ1QvR0VUX0ZFQVRVUkVcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GRUFUVVJFX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX0ZFQVRVUkVfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZFQVRVUkVfRVJST1IgPSBcIlBST0RVQ1QvR0VUX0ZFQVRVUkVfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVCA9IFwiUFJPRFVDVC9TRUFSQ0hfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyA9IFwiUFJPRFVDVC9TRUFSQ0hfUFJPRFVDVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVF9FUlJPUiA9IFwiUFJPRFVDVC9TRUFSQ0hfUFJPRFVDVF9FUlJPUlwiO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xyXG5pbXBvcnQgU2VsbGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxsaW5nXCI7XHJcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbVwiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtnZXRDYXRlZ29yeX0gZnJvbSBcIi4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBodG1sTWFya3VwID0gKGh0bWwpID0+IHtcclxuICAgICAgICByZXR1cm4ge19faHRtbDogaHRtbH07XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXRlZ29yeSk7XHJcbiAgICBjb25zdCBoZWhlID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGdldENhdGVnb3J5KCkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+ICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hlaGV9PmhpaGk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlIGNhdGVnb3J5PXtjYXRlZ29yeX0vPlxyXG4gICAgICAgICAgICAgICAgPFNlbGxpbmcvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTEwJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+SG90PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLTYgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiAuLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEl0ZW0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIG10LTEwJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+QsOgaSB2aeG6v3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLTYgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoSW5kZXgpO1xyXG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9jYXRlZ29yeVwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2gvY2xvbmVEZWVwXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjYXRlZ29yeToge1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgIGVyck1lc3M6IG51bGwsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2F0ZWdvcnlSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5jbG9uZURlZXAoYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkpIH07XHJcblxyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQ0FURUdPUlk6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9DQVRFR09SWV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9DQVRFR09SWV9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcnlSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCBjYXRlZ29yeVJlZHVjZXIgZnJvbSBcIi4vY2F0ZWdvcnlcIjtcclxuXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgcHJvZHVjdDogcHJvZHVjdFJlZHVjZXIsXHJcbiAgY2F0ZWdvcnk6IGNhdGVnb3J5UmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2gvY2xvbmVEZWVwXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvZHVjdDoge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIHByb2R1Y3RGZWF0dXJlOiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIHByb2R1Y3RTdWdnZXN0OiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIGhvbWVQcm9kdWN0OiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIGhvbWVQcm9wb3NlOiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIHByb2R1Y3REZXRhaWw6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YToge30sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgcHJvZHVjdFNlYXJjaDoge1xyXG4gICAgdmFsOiBcIlwiLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGVyck1lc3M6IG51bGwsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHByb2R1Y3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5jbG9uZURlZXAoYWN0aW9uLnBheWxvYWQucHJvZHVjdCkgfTtcclxuXHJcbiAgICBjYXNlIFRZUEUuR0VUX1BST0RVQ1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfUFJPRFVDVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9IT01FX1BST0RVQ1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaG9tZVByb2R1Y3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmhvbWVQcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9IT01FX1BST0RVQ1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lUHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuaG9tZVByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPTUVfUFJPRFVDVF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lUHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuaG9tZVByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0RFVEFJTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9ERVRBSUxfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9ERVRBSUxfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdERldGFpbDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdERldGFpbCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfSE9NRV9QUk9QT1NFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGhvbWVQcm9wb3NlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ob21lUHJvcG9zZSxcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaG9tZVByb3Bvc2U6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmhvbWVQcm9wb3NlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9IT01FX1BST1BPU0VfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaG9tZVByb3Bvc2U6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmhvbWVQcm9wb3NlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5TRUFSQ0hfUFJPRFVDVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U2VhcmNoOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0U2VhcmNoLFxyXG4gICAgICAgICAgdmFsOiBhY3Rpb24ubmFtZSxcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5TRUFSQ0hfUFJPRFVDVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTZWFyY2g6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RTZWFyY2gsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuU0VBUkNIX1BST0RVQ1RfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTZWFyY2g6IHtcclxuICAgICAgICAgIC4uLmluaXRpYWxTdGF0ZS5wcm9kdWN0U2VhcmNoLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5HRVRfU1VHR0VTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U3VnZ2VzdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFN1Z2dlc3QsXHJcbiAgICAgICAgICB2YWw6IGFjdGlvbi5uYW1lLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9TVUdHRVNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdFN1Z2dlc3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RTdWdnZXN0LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9TVUdHRVNUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U3VnZ2VzdDoge1xyXG4gICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLnByb2R1Y3RTdWdnZXN0LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5HRVRfRkVBVFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RmVhdHVyZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdEZlYXR1cmUsXHJcbiAgICAgICAgICB2YWw6IGFjdGlvbi5uYW1lLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9GRUFUVVJFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdEZlYXR1cmU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RGZWF0dXJlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9GRUFUVVJFX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RmVhdHVyZToge1xyXG4gICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLnByb2R1Y3RGZWF0dXJlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGdldENhdGVnb3J5U3VjY2VzcyxcclxuICAgIGdldENhdGVnb3J5RXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9DQVRFR09SWX0gZnJvbSBcIi4uL2NvbnRhbnRzL2NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldENhdGVnb3J5KGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGNhdGVnb3JpZXMvZ2V0P2lkX3dlYnNpdGU9NCZhY3RpdmU9MWA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoYWhhaGEnLCByZXNwb25zZSlcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2F0ZWdvcnlTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRDYXRlZ29yeUVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIENhdGVnb3J5U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfQ0FURUdPUlksIGdldENhdGVnb3J5KSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IFByb2R1Y3RTYWdhIGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuaW1wb3J0IENhdGVnb3J5U2FnYSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBQcm9kdWN0U2FnYSgpLFxyXG4gICAgQ2F0ZWdvcnlTYWdhKClcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFByb2R1Y3RTdWNjZXNzLFxyXG4gIGdldFByb2R1Y3RFcnJvcixcclxuICBnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyxcclxuICBnZXRQcm9kdWN0RGV0YWlsRXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5cclxuaW1wb3J0IHsgR0VUX1BST0RVQ1QsIEdFVF9ERVRBSUwgfSBmcm9tIFwiLi4vY29udGFudHMvcHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRQcm9kdWN0KGFjdGlvbikge1xyXG4gIGNvbnN0IHVybCA9IGBwcm9kdWN0cy9nZXQ/YWN0aXZlPTEmaWRfcGFyZW50PTAmaWRfd2Vic2l0ZT00YDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdFN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KGdldFByb2R1Y3RFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldERldGFpbChhY3Rpb24pIHtcclxuICBjb25zdCB1cmwgPSBgL3Byb2R1Y3RzL2RldGFpbD9hbGlhcz0ke2FjdGlvbi5hbGlhc31gO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0RGV0YWlsRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIFByb2R1Y3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9QUk9EVUNULCBnZXRQcm9kdWN0KSxcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX0RFVEFJTCwgZ2V0RGV0YWlsKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcclxuXHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi9zYWdhc1wiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBtaWRkbGV3YXJlLnB1c2gobG9nZ2VyKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iLCJyZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlSlNPTihyZXNwb25zZSkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcclxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmNvbnN0IGlzTm9kZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcbmNvbnN0IG5vZGVPcHRpb25zID0gIWlzTm9kZVxyXG4gID8ge31cclxuICA6IHtcclxuICAgICAgYWdlbnQ6IG5ldyAocmVxdWlyZShcImh0dHBzXCIpLkFnZW50KSh7XHJcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBDb29raWU6IGdsb2JhbC5jb29raWUsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdChwYXRoLCBvcHRpb25zID0ge30pIHtcclxuICBjb25zdCB1cmwgPSBgaHR0cDovLzE5Mi4xNjguMS4zOC9hcGkvJHtwYXRofWA7XHJcbiAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgLi4ubm9kZU9wdGlvbnMsXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH0pLnRoZW4ocGFyc2VKU09OKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==