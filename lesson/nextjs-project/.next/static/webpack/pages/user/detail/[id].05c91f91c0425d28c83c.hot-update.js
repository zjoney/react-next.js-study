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



var _jsxFileName = "C:\\aproject\\zhufeng-nextjs-project\\pages\\user\\detail\\[id].js";



function UserDetail(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: ["ID:", props.user.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 14
      }, this)
    }, void 0, false, {
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
//9.03版本之后有新替代方法 有三个新方法，后面再介绍


_c = UserDetail;

UserDetail.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('ctx', ctx); //next.js不支持params

            return _context.abrupt("return", {
              user: {
                id: ctx.query.id
              }
            });

          case 2:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9kZXRhaWwvLmpzIl0sIm5hbWVzIjpbIlVzZXJEZXRhaWwiLCJwcm9wcyIsInVzZXIiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQ3RCLHNCQUNJLHFFQUFDLCtDQUFEO0FBQUEsMkJBQ0M7QUFBQSw2QkFDSTtBQUFBLDBCQUFPQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9ILEMsQ0FDRDtBQUNBOzs7S0FWU0gsVTs7QUFXVEEsVUFBVSxDQUFDSSxlQUFYO0FBQUEsOExBQTZCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQWtCRixHQUFsQixFQUR5QixDQUV6Qjs7QUFGeUIsNkNBR2xCO0FBQUNILGtCQUFJLEVBQUM7QUFBQ0Msa0JBQUUsRUFBQ0UsR0FBRyxDQUFDRyxLQUFKLENBQVVMO0FBQWQ7QUFBTixhQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZUgseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9kZXRhaWwvW2lkXS4wNWM5MWY5MWMwNDI1ZDI4YzgzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFVzZXJMYXlvdXQgZnJvbSAnLi4vX2xheW91dCc7XHJcblxyXG5mdW5jdGlvbiBVc2VyRGV0YWlsKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJMYXlvdXQ+XHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICA8cD5JRDp7cHJvcHMudXNlci5pZH08L3A+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVXNlckxheW91dD5cclxuICAgIClcclxufVxyXG4vL2dldEluaXRpYWxQcm9wc+iAgeeahOaWueazlVxyXG4vLzkuMDPniYjmnKzkuYvlkI7mnInmlrDmm7/ku6Pmlrnms5Ug5pyJ5LiJ5Liq5paw5pa55rOV77yM5ZCO6Z2i5YaN5LuL57uNXHJcblVzZXJEZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCk9PntcclxuICAgIGNvbnNvbGUubG9nKCdjdHgnLGN0eCk7XHJcbiAgICAvL25leHQuanPkuI3mlK/mjIFwYXJhbXNcclxuICAgIHJldHVybiB7dXNlcjp7aWQ6Y3R4LnF1ZXJ5LmlkfX07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlckRldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9