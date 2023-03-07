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



var _jsxFileName = "C:\\aproject\\zhufeng-nextjs-project\\pages\\user\\list.js";



function UserList(props) {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      children: props.list.map(function (user) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/user/detail/".concat(user.id),
            children: user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 28
          }, _this)
        }, user.id, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 24
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
    var list;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('UserList.getInitialProps');
            list = [{
              id: 1,
              name: '张三'
            }, {
              id: 2,
              name: '李四'
            }];
            return _context.abrupt("return", {
              list: list
            });

          case 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9saXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJMaXN0IiwicHJvcHMiLCJsaXN0IiwibWFwIiwidXNlciIsImlkIiwibmFtZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUFBOztBQUNwQixzQkFDSSxxRUFBQywrQ0FBRDtBQUFBLDJCQUNHO0FBQUEsZ0JBRVFBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxHQUFYLENBQWUsVUFBQUMsSUFBSTtBQUFBLDRCQUNmO0FBQUEsaUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSx5QkFBa0JBLElBQUksQ0FBQ0MsRUFBdkIsQ0FBVjtBQUFBLHNCQUF3Q0QsSUFBSSxDQUFDRTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBU0YsSUFBSSxDQUFDQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFuQjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQW5CU0wsUTs7QUFvQlRBLFFBQVEsQ0FBQ08sZUFBVDtBQUFBLDhMQUEyQixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNJUixnQkFGcUIsR0FFZCxDQUFDO0FBQUNHLGdCQUFFLEVBQUMsQ0FBSjtBQUFNQyxrQkFBSSxFQUFDO0FBQVgsYUFBRCxFQUFrQjtBQUFDRCxnQkFBRSxFQUFDLENBQUo7QUFBTUMsa0JBQUksRUFBQztBQUFYLGFBQWxCLENBRmM7QUFBQSw2Q0FHbEI7QUFBQ0osa0JBQUksRUFBSkE7QUFBRCxhQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZUYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9saXN0LmZiNmU4MDExYWY4OGQyMGExYWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlckxheW91dCBmcm9tICcuL19sYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gVXNlckxpc3QocHJvcHMpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VXNlckxheW91dD5cclxuICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIHByb3BzLmxpc3QubWFwKHVzZXI9PihcclxuICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyL2RldGFpbC8ke3VzZXIuaWR9YH0+e3VzZXIubmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvVXNlckxheW91dD5cclxuICAgIClcclxufVxyXG4vKipcclxuICog57uZVXNlckxpc3Tnu4Tku7bmt7vliqDkuIDkuKrnsbvnmoTlsZ7mgKcgLOeUqOadpeiOt+WPliDmlrDlp4vljJbnmoTmlbDmja4s5a6D5Lya6L+U5Zue5LiA5Liq5a+56LGhXHJcbiAqIOi/meS4quWvueixoeWwhuS8muaIkOS4uuW9k+eahOe7hOS7tueahOWxnuaAp+WvueixoVxyXG4gKiBAcGFyYW0geyB9IGN0eCBcclxuICovXHJcblVzZXJMaXN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpPT57XHJcbiAgY29uc29sZS5sb2coJ1VzZXJMaXN0LmdldEluaXRpYWxQcm9wcycpO1xyXG4gIGxldCBsaXN0ID0gW3tpZDoxLG5hbWU6J+W8oOS4iSd9LHtpZDoyLG5hbWU6J+adjuWbmyd9XTtcclxuICByZXR1cm4ge2xpc3R9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=