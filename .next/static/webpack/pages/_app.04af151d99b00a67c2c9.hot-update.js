webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/reducers/category.js":
/*!**********************************!*\
  !*** ./src/reducers/category.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Administrator_Desktop_Nextjs_haha_NextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Administrator_Desktop_Nextjs_haha_NextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var initialState = {
  category: {
    loading: false,
    data: [],
    errMess: null
  }
};

var categoryReducer = function categoryReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default()(action.payload.category));

    case _contants_category__WEBPACK_IMPORTED_MODULE_1__["GET_CATEGORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: true
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_1__["GET_CATEGORY_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: true,
          data: action.data,
          total: action.total
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_1__["GET_CATEGORY_ERROR"]:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL2NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImNhdGVnb3J5IiwibG9hZGluZyIsImRhdGEiLCJlcnJNZXNzIiwiY2F0ZWdvcnlSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNsb25lRGVlcCIsInBheWxvYWQiLCJUWVBFIiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLFVBQVEsRUFBRTtBQUNOQyxXQUFPLEVBQUUsS0FESDtBQUVOQyxRQUFJLEVBQUUsRUFGQTtBQUdOQyxXQUFPLEVBQUU7QUFISDtBQURPLENBQXJCOztBQVFBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCTixZQUF5QjtBQUFBLE1BQVhPLE1BQVc7O0FBQ3RELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLDBEQUFMO0FBQ0ksNkNBQVlILEtBQVosR0FBc0JJLHVEQUFTLENBQUNILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlVixRQUFoQixDQUEvQjs7QUFFSixTQUFLVywrREFBTDtBQUNJLDZDQUNPTixLQURQO0FBRUlMLGdCQUFRLGtDQUNESyxLQUFLLENBQUNMLFFBREw7QUFFSkMsaUJBQU8sRUFBRTtBQUZMO0FBRlo7O0FBT0osU0FBS1UsdUVBQUw7QUFDSSw2Q0FDT04sS0FEUDtBQUVJTCxnQkFBUSxrQ0FDREssS0FBSyxDQUFDTCxRQURMO0FBRUpDLGlCQUFPLEVBQUUsSUFGTDtBQUdKQyxjQUFJLEVBQUVJLE1BQU0sQ0FBQ0osSUFIVDtBQUlKVSxlQUFLLEVBQUVOLE1BQU0sQ0FBQ007QUFKVjtBQUZaOztBQVNKLFNBQUtELHFFQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFSUwsZ0JBQVEsa0NBQ0RLLEtBQUssQ0FBQ0wsUUFETDtBQUVKQyxpQkFBTyxFQUFFLEtBRkw7QUFHSkUsaUJBQU8sRUFBRUcsTUFBTSxDQUFDSDtBQUhaO0FBRlo7O0FBUUo7QUFDSSxhQUFPRSxLQUFQO0FBaENSO0FBa0NILENBbkNEOztBQXFDZUQsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNGFmMTUxZDk5YjAwYTY3YzJjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tIFwibG9kYXNoL2Nsb25lRGVlcFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBlcnJNZXNzOiBudWxsLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhdGVnb3J5UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uY2xvbmVEZWVwKGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5KSB9O1xyXG5cclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0NBVEVHT1JZOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQ0FURUdPUllfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQ0FURUdPUllfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3J5UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==