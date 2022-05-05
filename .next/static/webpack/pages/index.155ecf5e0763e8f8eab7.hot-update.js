webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Slide */ "./src/components/Slide.js");
/* harmony import */ var _components_Selling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Selling */ "./src/components/Selling.js");
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductItem */ "./src/components/ProductItem.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/category */ "./src/actions/category.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");



var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\Nextjs\\haha\\NextJs\\src\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var Index = function Index() {
  _s();

  var htmlMarkup = function htmlMarkup(html) {
    return {
      __html: html
    };
  };

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var category = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.category;
  });

  var hehe = function hehe() {
    dispatch(Object(_actions_category__WEBPACK_IMPORTED_MODULE_7__["getCategory"])());
    console.log(category);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: hehe,
      children: "hihi"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Selling__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mt-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Hot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-span-2 ...",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-span-2 ...",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative mt-10",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "B\xE0i vi\u1EBFt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Index, "VmlR2orJIcCoyc91x8ZS1gxnSCk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store__WEBPACK_IMPORTED_MODULE_8__["wrapper"].withRedux(Index));

var _c, _c2;

$RefreshReg$(_c, "Index");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiaHRtbE1hcmt1cCIsImh0bWwiLCJfX2h0bWwiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2F0ZWdvcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiaGVoZSIsImdldENhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2hCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUN6QixXQUFPO0FBQUNDLFlBQU0sRUFBRUQ7QUFBVCxLQUFQO0FBQ0gsR0FGRDs7QUFHQSxNQUFNRSxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsUUFBUSxHQUFJQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFFBQWpCO0FBQUEsR0FBRCxDQUE3Qjs7QUFDQSxNQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2ZMLFlBQVEsQ0FBQ00scUVBQVcsRUFBWixDQUFSO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaO0FBQ0gsR0FIRDs7QUFJQSxzQkFDSTtBQUFBLDRCQUNJO0FBQVEsYUFBTyxFQUFFRyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBSyxtQkFBUyxFQUFDLDRFQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGdCQUFmO0FBQUEsbUNBQ0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU9JLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEosZUFRSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBU0k7QUFBSyxxQkFBUyxFQUFDLGdCQUFmO0FBQUEsbUNBQ0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBc0JJO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCSixlQXlCSTtBQUFLLGlCQUFTLEVBQUMsNEVBQWY7QUFBQSxnQ0FDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREo7QUFvQ0gsQ0E5Q0Q7O0dBQU1ULEs7VUFJZUssdUQsRUFDQ0UsdUQ7OztLQUxoQlAsSztBQWlEUyxxRUFBQWEsOENBQU8sQ0FBQ0MsU0FBUixDQUFrQmQsS0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNTVlY2Y1ZTA3NjNlOGY4ZWFiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIjtcclxuaW1wb3J0IFNlbGxpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsbGluZ1wiO1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW1cIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Z2V0Q2F0ZWdvcnl9IGZyb20gXCIuLi9hY3Rpb25zL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaHRtbE1hcmt1cCA9IChodG1sKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtfX2h0bWw6IGh0bWx9O1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5ICA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2F0ZWdvcnkpO1xyXG4gICAgY29uc3QgaGVoZSA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChnZXRDYXRlZ29yeSgpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PiAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoZWhlfT5oaWhpPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgICAgICAgIDxTbGlkZSAvPlxyXG4gICAgICAgICAgICAgICAgPFNlbGxpbmcvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTEwJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+SG90PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLTYgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiAuLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEl0ZW0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIG10LTEwJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+QsOgaSB2aeG6v3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLTYgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoSW5kZXgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9