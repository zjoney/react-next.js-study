webpackHotUpdate_N_E("pages/user/add",{

/***/ "./pages/user/add.js":
/*!***************************!*\
  !*** ./pages/user/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_layout */ "./pages/user/_layout.js");
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/axios */ "./utils/axios.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\aproject\\zhufeng-nextjs-project\\pages\\user\\add.js",
    _s = $RefreshSig$();






function UserAdd(props) {
  _s();

  var nameRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var passwordRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var name, password, user, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault(); //阻止默认事件，不要让页面刷新

              name = nameRef.current.value;
              password = passwordRef.current.value;
              user = {
                name: name,
                password: password
              };
              _context.next = 6;
              return _utils_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('/api/register', user).then(function (res) {
                return res.data;
              });

            case 6:
              response = _context.sent;

              if (response.success) {
                next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/user/list');
              } else {
                alert('添加用户失败');
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: ["\u7528\u6237\u540D:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        ref: nameRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), "\u5BC6\u7801:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        ref: passwordRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "\u6DFB\u52A0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_s(UserAdd, "ifGwr0ECjMB1GDYYxuRLZglS73A=");

_c = UserAdd;
/* harmony default export */ __webpack_exports__["default"] = (UserAdd);

var _c;

$RefreshReg$(_c, "UserAdd");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9hZGQuanMiXSwibmFtZXMiOlsiVXNlckFkZCIsInByb3BzIiwibmFtZVJlZiIsIlJlYWN0IiwidXNlUmVmIiwicGFzc3dvcmRSZWYiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwidXNlciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwicm91dGVyIiwicHVzaCIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXVCO0FBQUE7O0FBQ25CLE1BQUlDLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixFQUFkO0FBQ0EsTUFBSUMsV0FBVyxHQUFHRiw0Q0FBSyxDQUFDQyxNQUFOLEVBQWxCOztBQUNBLE1BQU1FLFlBQVk7QUFBQSxnTUFBRyxpQkFBUUMsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLG1CQUFLLENBQUNDLGNBQU4sR0FEaUIsQ0FDTTs7QUFDbkJDLGtCQUZhLEdBRU5QLE9BQU8sQ0FBQ1EsT0FBUixDQUFnQkMsS0FGVjtBQUdiQyxzQkFIYSxHQUdGUCxXQUFXLENBQUNLLE9BQVosQ0FBb0JDLEtBSGxCO0FBSWJFLGtCQUphLEdBSU47QUFBQ0osb0JBQUksRUFBSkEsSUFBRDtBQUFNRyx3QkFBUSxFQUFSQTtBQUFOLGVBSk07QUFBQTtBQUFBLHFCQUtJRSxvREFBSyxDQUFDQyxJQUFOLENBQVcsZUFBWCxFQUEyQkYsSUFBM0IsRUFBaUNHLElBQWpDLENBQXNDLFVBQUFDLEdBQUc7QUFBQSx1QkFBRUEsR0FBRyxDQUFDQyxJQUFOO0FBQUEsZUFBekMsQ0FMSjs7QUFBQTtBQUtiQyxzQkFMYTs7QUFNakIsa0JBQUdBLFFBQVEsQ0FBQ0MsT0FBWixFQUFvQjtBQUNsQkMsa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLFlBQVo7QUFDRCxlQUZELE1BRUs7QUFDSEMscUJBQUssQ0FBQyxRQUFELENBQUw7QUFDRDs7QUFWZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWmpCLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBWUEsc0JBQ0kscUVBQUMsK0NBQUQ7QUFBQSwyQkFDRTtBQUFNLGNBQVEsRUFBRUEsWUFBaEI7QUFBQSxxREFDTTtBQUFPLFdBQUcsRUFBRUo7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE4sZ0NBRUs7QUFBTyxXQUFHLEVBQUVHO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZMLGVBR0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIOztHQXhCUUwsTzs7S0FBQUEsTztBQXlCTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9hZGQuOGM2NWRjYjlmYzlhMzY3MzJjZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBVc2VyTGF5b3V0IGZyb20gJy4vX2xheW91dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi91dGlscy9heGlvcyc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5mdW5jdGlvbiBVc2VyQWRkKHByb3BzKXtcclxuICAgIGxldCBuYW1lUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBsZXQgcGFzc3dvcmRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICAoZXZlbnQpPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsvL+mYu+atoum7mOiupOS6i+S7tu+8jOS4jeimgeiuqemhtemdouWIt+aWsFxyXG4gICAgICAgIGxldCBuYW1lID0gbmFtZVJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGxldCBwYXNzd29yZCA9IHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgbGV0IHVzZXIgPSB7bmFtZSxwYXNzd29yZH07XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9yZWdpc3RlcicsdXNlcikudGhlbihyZXM9PnJlcy5kYXRhKTtcclxuICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKXtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvdXNlci9saXN0Jyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBhbGVydCgn5re75Yqg55So5oi35aSx6LSlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VXNlckxheW91dD5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICDnlKjmiLflkI06PGlucHV0IHJlZj17bmFtZVJlZn0vPlxyXG4gICAgICAgICAgICDlr4bnoIE6PGlucHV0IHJlZj17cGFzc3dvcmRSZWZ9Lz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+5re75YqgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Vc2VyTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJBZGQ7Il0sInNvdXJjZVJvb3QiOiIifQ==