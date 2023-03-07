webpackHotUpdate_N_E("pages/user/list",{

/***/ "./pages/user/list.js":
/*!****************************!*\
  !*** ./pages/user/list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_layout */ "./pages/user/_layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/axios */ "./utils/axios.js");



var _jsxFileName = "C:\\aproject\\zhufeng-nextjs-project\\pages\\user\\list.js";




function UserList(props) {
  var _this = this;

  console.log('4.UserList render');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      children: props.list.map(function (user) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/user/detail/".concat(user.id),
            children: user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 28
          }, _this)
        }, user.id, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 24
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
/**
 * 给UserList组件添加一个类的属性 ,用来获取 新始化的数据,它会返回一个对象
 * 这个对象将会成为当的组件的属性对象
 * @param { } ctx 
 */


_c = UserList;

UserList.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('5.UserList.getInitialProps'); //axios res={headers,data,statusCode}

            _context.next = 3;
            return _utils_axios__WEBPACK_IMPORTED_MODULE_5__["default"].get('/api/users').then(function (res) {
              return res.data;
            });

          case 3:
            res = _context.sent;
            return _context.abrupt("return", {
              list: res.data
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

/* harmony default export */ __webpack_exports__["default"] = (UserList);

var _c;

$RefreshReg$(_c, "UserList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9saXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJMaXN0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsIm1hcCIsInVzZXIiLCJpZCIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFBQTs7QUFDcEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0Esc0JBQ0kscUVBQUMsK0NBQUQ7QUFBQSwyQkFDRztBQUFBLGdCQUVRRixLQUFLLENBQUNHLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUFDLElBQUk7QUFBQSw0QkFDZjtBQUFBLGlDQUNJLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUkseUJBQWtCQSxJQUFJLENBQUNDLEVBQXZCLENBQVY7QUFBQSxzQkFBd0NELElBQUksQ0FBQ0U7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQVNGLElBQUksQ0FBQ0MsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBbkI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FwQlNQLFE7O0FBcUJUQSxRQUFRLENBQUNTLGVBQVQ7QUFBQSw4TEFBMkIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCUixtQkFBTyxDQUFDQyxHQUFSLENBQVksNEJBQVosRUFEeUIsQ0FFeEI7O0FBRndCO0FBQUEsbUJBR1RRLG9EQUFLLENBQUNDLEdBQU4sQ0FBVSxZQUFWLEVBQXdCQyxJQUF4QixDQUE2QixVQUFBQyxHQUFHO0FBQUEscUJBQUVBLEdBQUcsQ0FBQ0MsSUFBTjtBQUFBLGFBQWhDLENBSFM7O0FBQUE7QUFHckJELGVBSHFCO0FBQUEsNkNBSWxCO0FBQUNWLGtCQUFJLEVBQUNVLEdBQUcsQ0FBQ0M7QUFBVixhQUprQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZWYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9saXN0LjNmNTIwYTAwNmY2Zjg4MjA3Y2IzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlckxheW91dCBmcm9tICcuL19sYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vdXRpbHMvYXhpb3MnO1xyXG5mdW5jdGlvbiBVc2VyTGlzdChwcm9wcyl7XHJcbiAgICBjb25zb2xlLmxvZygnNC5Vc2VyTGlzdCByZW5kZXInKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJMYXlvdXQ+XHJcbiAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBwcm9wcy5saXN0Lm1hcCh1c2VyPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci9kZXRhaWwvJHt1c2VyLmlkfWB9Pnt1c2VyLm5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1VzZXJMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuLyoqXHJcbiAqIOe7mVVzZXJMaXN057uE5Lu25re75Yqg5LiA5Liq57G755qE5bGe5oCnICznlKjmnaXojrflj5Yg5paw5aeL5YyW55qE5pWw5o2uLOWug+S8mui/lOWbnuS4gOS4quWvueixoVxyXG4gKiDov5nkuKrlr7nosaHlsIbkvJrmiJDkuLrlvZPnmoTnu4Tku7bnmoTlsZ7mgKflr7nosaFcclxuICogQHBhcmFtIHsgfSBjdHggXHJcbiAqL1xyXG5Vc2VyTGlzdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KT0+e1xyXG4gIGNvbnNvbGUubG9nKCc1LlVzZXJMaXN0LmdldEluaXRpYWxQcm9wcycpO1xyXG4gICAvL2F4aW9zIHJlcz17aGVhZGVycyxkYXRhLHN0YXR1c0NvZGV9XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2VycycpLnRoZW4ocmVzPT5yZXMuZGF0YSk7XHJcbiAgcmV0dXJuIHtsaXN0OnJlcy5kYXRhfTsvL3Jlcy5kYXRh5piv55So5oi355qE5pWw57uEXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlckxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==