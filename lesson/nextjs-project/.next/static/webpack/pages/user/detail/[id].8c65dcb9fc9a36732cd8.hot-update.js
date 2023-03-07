webpackHotUpdate_N_E("pages/user/detail/[id]",{

/***/ "./pages/user/detail/[id].js":
/*!***********************************!*\
  !*** ./pages/user/detail/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_layout */ "./pages/user/_layout.js");
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/axios */ "./utils/axios.js");



var _jsxFileName = "C:\\aproject\\zhufeng-nextjs-project\\pages\\user\\detail\\[id].js";




function UserDetail(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: ["ID:", props.user.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 14
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: ["name:", props.user.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 14
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
} //getInitialProps老的方法


_c = UserDetail;

UserDetail.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('ctx', ctx);
            _context.next = 3;
            return _utils_axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("/api/users/".concat(ctx.query.id)).then(function (res) {
              return res.data;
            });

          case 3:
            res = _context.sent;
            return _context.abrupt("return", {
              user: res.data
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (UserDetail);

var _c;

$RefreshReg$(_c, "UserDetail");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9kZXRhaWwvLmpzIl0sIm5hbWVzIjpbIlVzZXJEZXRhaWwiLCJwcm9wcyIsInVzZXIiLCJpZCIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJxdWVyeSIsInRoZW4iLCJyZXMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFDdEIsc0JBQ0kscUVBQUMsK0NBQUQ7QUFBQSwyQkFDQztBQUFBLDhCQUNJO0FBQUEsMEJBQU9BLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsNEJBQVNGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSCxDLENBQ0Q7OztLQVZTSixVOztBQVdUQSxVQUFVLENBQUNLLGVBQVg7QUFBQSw4TEFBNkIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFrQkYsR0FBbEI7QUFEeUI7QUFBQSxtQkFFVEcsb0RBQUssQ0FBQ0MsR0FBTixzQkFBd0JKLEdBQUcsQ0FBQ0ssS0FBSixDQUFVUixFQUFsQyxHQUF3Q1MsSUFBeEMsQ0FBNkMsVUFBQUMsR0FBRztBQUFBLHFCQUFFQSxHQUFHLENBQUNDLElBQU47QUFBQSxhQUFoRCxDQUZTOztBQUFBO0FBRXJCRCxlQUZxQjtBQUFBLDZDQUlsQjtBQUFDWCxrQkFBSSxFQUFDVyxHQUFHLENBQUNDO0FBQVYsYUFKa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVkLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvZGV0YWlsL1tpZF0uOGM2NWRjYjlmYzlhMzY3MzJjZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBVc2VyTGF5b3V0IGZyb20gJy4uL19sYXlvdXQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXhpb3MnO1xyXG5mdW5jdGlvbiBVc2VyRGV0YWlsKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJMYXlvdXQ+XHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICA8cD5JRDp7cHJvcHMudXNlci5pZH08L3A+XHJcbiAgICAgICAgICAgICA8cD5uYW1lOntwcm9wcy51c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1VzZXJMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuLy9nZXRJbml0aWFsUHJvcHPogIHnmoTmlrnms5VcclxuVXNlckRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KT0+e1xyXG4gICAgY29uc29sZS5sb2coJ2N0eCcsY3R4KTtcclxuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvdXNlcnMvJHtjdHgucXVlcnkuaWR9YCkudGhlbihyZXM9PnJlcy5kYXRhKTtcclxuICAgIC8vbmV4dC5qc+S4jeaUr+aMgXBhcmFtc1xyXG4gICAgcmV0dXJuIHt1c2VyOnJlcy5kYXRhfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBVc2VyRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=