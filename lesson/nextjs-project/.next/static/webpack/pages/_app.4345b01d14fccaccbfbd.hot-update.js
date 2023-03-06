webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_app.module.css */ "./pages/_app.module.css");
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_app_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_13__);









var _jsxFileName = "C:\\aproject\\zhufeng-nextjs-project\\pages\\_app.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 //全局样式的话只能在_app.js文件里引入

var LayoutApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LayoutApp, _App);

  var _super = _createSuper(LayoutApp);

  function LayoutApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, LayoutApp);

    _this = _super.call(this, props);
    console.log('1.LayoutApp constructor');
    return _this;
  } //next默认会调用LayoutApp.getInitialProps方法


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(LayoutApp, [{
    key: "render",
    value: function render() {
      console.log('2.LayoutApp render');
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps; //页面组件 user.js 

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "jsx-3417566611",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "3417566611",
          children: "li.jsx-3417566611{display:inline-block;margin-left:10px;line-height:31px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxhcHJvamVjdFxcemh1ZmVuZy1uZXh0anMtcHJvamVjdFxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JvQixBQUcrQyxxQkFDSixpQkFDQSxpQkFDcEIiLCJmaWxlIjoiQzpcXGFwcm9qZWN0XFx6aHVmZW5nLW5leHRqcy1wcm9qZWN0XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAse0NvbnRhaW5lcn0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgX2FwcFN0eWxlcyBmcm9tICcuL19hcHAubW9kdWxlLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnOy8v5YWo5bGA5qC35byP55qE6K+d5Y+q6IO95ZyoX2FwcC5qc+aWh+S7tumHjOW8leWFpVxyXG5jbGFzcyBMYXlvdXRBcHAgZXh0ZW5kcyBBcHB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcxLkxheW91dEFwcCBjb25zdHJ1Y3RvcicpO1xyXG4gICAgfVxyXG4gICAgLy9uZXh06buY6K6k5Lya6LCD55SoTGF5b3V0QXBwLmdldEluaXRpYWxQcm9wc+aWueazlVxyXG4gICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcyLkxheW91dEFwcCByZW5kZXInKTtcclxuICAgICAgICBsZXQge0NvbXBvbmVudCxwYWdlUHJvcHN9PXRoaXMucHJvcHM7Ly/pobXpnaLnu4Tku7YgdXNlci5qcyBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjMxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e19hcHBTdHlsZXMubG9nb30gc3JjPVwiL2ltYWdlcy9qZ2xvZ28ucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvXCI+6aaW6aG1PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3VzZXIvbGlzdFwiPueUqOaIt+euoeeQhjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcm9maWxlXCI+5Liq5Lq65Lit5b+DPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+54+g5bOw5p625p6EPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4vL+i/meS4quaWueazleWwseaYr+e7hOS7tueahOmdmeaAgeaWueazle+8jOWug+aYr+exu+eahOWxnuaAp++8jOe7hOS7tueahOWxnuaAp1xyXG5MYXlvdXRBcHAuZ2V0SW5pdGlhbFByb3BzID0gIGFzeW5jKHtDb21wb25lbnQsY3R4fSk9PntcclxuICAgIGNvbnNvbGUubG9nKCczLkxheW91dEFwcCBnZXRJbml0aWFsUHJvcHMnKTtcclxuICAgIGxldCBwYWdlUHJvcHMgPSB7fTsvL+m7mOiupOeahOmhtemdouWxnuaAp+WvueixoVxyXG4gICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XHJcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtwYWdlUHJvcHN9Oy8v6L+U5Zue55qE6L+Z5Liq5a+56LGh5bCG5Lya5oiQ5Li65b2T5YmN57uE5Lu255qE5bGe5oCn5a+56LGhXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0QXBwOyJdfQ== */\n/*@ sourceURL=C:\\\\aproject\\\\zhufeng-nextjs-project\\\\pages\\\\_app.js */"
        }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("header", {
          className: "jsx-3417566611",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
            src: "/images/jglogo.png",
            className: "jsx-3417566611" + " " + (_app_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.logo || "")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("ul", {
            className: "jsx-3417566611",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              className: "jsx-3417566611",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: "/",
                children: "\u9996\u9875"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              className: "jsx-3417566611",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: "/user/list",
                children: "\u7528\u6237\u7BA1\u7406"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              className: "jsx-3417566611",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: "/profile",
                children: "\u4E2A\u4EBA\u4E2D\u5FC3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
          className: "jsx-3417566611" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("footer", {
          style: {
            textAlign: 'center'
          },
          className: "jsx-3417566611",
          children: "\u73E0\u5CF0\u67B6\u6784"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this);
    }
  }]);

  return LayoutApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a); //这个方法就是组件的静态方法，它是类的属性，组件的属性


LayoutApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var Component, ctx, pageProps;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref.Component, ctx = _ref.ctx;
            console.log('3.LayoutApp getInitialProps');
            pageProps = {}; //默认的页面属性对象

            if (!Component.getInitialProps) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return Component.getInitialProps(ctx);

          case 6:
            pageProps = _context.sent;

          case 7:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (LayoutApp);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJMYXlvdXRBcHAiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJfYXBwU3R5bGVzIiwibG9nbyIsInRleHRBbGlnbiIsIkFwcCIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUM4Qjs7SUFDeEJBLFM7Ozs7O0FBQ0YscUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUZjO0FBR2pCLEcsQ0FDRDs7Ozs7NkJBRVE7QUFDSkQsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFESSx3QkFFc0IsS0FBS0YsS0FGM0I7QUFBQSxVQUVDRyxTQUZELGVBRUNBLFNBRkQ7QUFBQSxVQUVXQyxTQUZYLGVBRVdBLFNBRlgsRUFFaUM7O0FBQ3JDLDBCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzREFZSTtBQUFBO0FBQUEsa0NBQ0k7QUFBaUMsZUFBRyxFQUFDLG9CQUFyQztBQUFBLGlEQUFnQkMsdURBQVUsQ0FBQ0MsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQTtBQUFBLG9DQUNJO0FBQUE7QUFBQSxxQ0FBSSxxRUFBQyxpREFBRDtBQUFNLG9CQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBO0FBQUEscUNBQUkscUVBQUMsaURBQUQ7QUFBTSxvQkFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBQTtBQUFBLHFDQUFJLHFFQUFDLGlEQUFEO0FBQU0sb0JBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpKLGVBb0JJLHFFQUFDLFNBQUQsa0NBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJKLGVBcUJJO0FBQVEsZUFBSyxFQUFFO0FBQUNHLHFCQUFTLEVBQUM7QUFBWCxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBeUJIOzs7O0VBbkNtQkMsZ0QsR0FxQ3hCOzs7QUFDQVQsU0FBUyxDQUFDVSxlQUFWO0FBQUEsK0xBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPTixxQkFBUCxRQUFPQSxTQUFQLEVBQWlCTyxHQUFqQixRQUFpQkEsR0FBakI7QUFDekJULG1CQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNJRSxxQkFGcUIsR0FFVCxFQUZTLEVBRU47O0FBRk0saUJBR3RCRCxTQUFTLENBQUNNLGVBSFk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJSE4sU0FBUyxDQUFDTSxlQUFWLENBQTBCQyxHQUExQixDQUpHOztBQUFBO0FBSXJCTixxQkFKcUI7O0FBQUE7QUFBQSw2Q0FNbEI7QUFBQ0EsdUJBQVMsRUFBVEE7QUFBRCxhQU5rQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZUwsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MzQ1YjAxZDE0ZmNjYWNjYmZiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCx7Q29udGFpbmVyfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBfYXBwU3R5bGVzIGZyb20gJy4vX2FwcC5tb2R1bGUuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7Ly/lhajlsYDmoLflvI/nmoTor53lj6rog73lnKhfYXBwLmpz5paH5Lu26YeM5byV5YWlXHJcbmNsYXNzIExheW91dEFwcCBleHRlbmRzIEFwcHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzEuTGF5b3V0QXBwIGNvbnN0cnVjdG9yJyk7XHJcbiAgICB9XHJcbiAgICAvL25leHTpu5jorqTkvJrosIPnlKhMYXlvdXRBcHAuZ2V0SW5pdGlhbFByb3Bz5pa55rOVXHJcbiAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzIuTGF5b3V0QXBwIHJlbmRlcicpO1xyXG4gICAgICAgIGxldCB7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wczsvL+mhtemdoue7hOS7tiB1c2VyLmpzIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MzFweDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17X2FwcFN0eWxlcy5sb2dvfSBzcmM9XCIvaW1hZ2VzL2pnbG9nby5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj7pppbpobU8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvdXNlci9saXN0XCI+55So5oi3566h55CGPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Byb2ZpbGVcIj7kuKrkurrkuK3lv4M8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT7nj6Dls7DmnrbmnoQ8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbi8v6L+Z5Liq5pa55rOV5bCx5piv57uE5Lu255qE6Z2Z5oCB5pa55rOV77yM5a6D5piv57G755qE5bGe5oCn77yM57uE5Lu255qE5bGe5oCnXHJcbkxheW91dEFwcC5nZXRJbml0aWFsUHJvcHMgPSAgYXN5bmMoe0NvbXBvbmVudCxjdHh9KT0+e1xyXG4gICAgY29uc29sZS5sb2coJzMuTGF5b3V0QXBwIGdldEluaXRpYWxQcm9wcycpO1xyXG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9Oy8v6buY6K6k55qE6aG16Z2i5bGe5oCn5a+56LGhXHJcbiAgICBpZihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcclxuICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3BhZ2VQcm9wc307Ly/ov5Tlm57nmoTov5nkuKrlr7nosaHlsIbkvJrmiJDkuLrlvZPliY3nu4Tku7bnmoTlsZ7mgKflr7nosaFcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==