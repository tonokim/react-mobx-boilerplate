webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SampleComponent.js":
/*!***************************************!*\
  !*** ./components/SampleComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Clock */ "./components/Clock.js");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.less */ "./components/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_11__);








var _dec, _class;






var SampleComponent = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SampleComponent, _React$Component);

  function SampleComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SampleComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SampleComponent).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      text: 3
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClick", function () {
      var _this$store$user = _this.store.user,
          addAge = _this$store$user.addAge,
          lastUpdate = _this$store$user.lastUpdate;
      addAge();
    });

    _this.store = _this.props.store;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SampleComponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {// this.props.store.start()
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// this.props.store.stop()
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Clock__WEBPACK_IMPORTED_MODULE_10__["default"], {
        lastUpdate: this.this.store.user.lastUpdate,
        light: false
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Name: ", this.props.store.user.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Age: ", this.props.store.user.age), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: _style_less__WEBPACK_IMPORTED_MODULE_11___default.a['box'],
        onClick: this.onClick
      }, "\u589E\u52A0"));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, this.props.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Clock__WEBPACK_IMPORTED_MODULE_10__["default"], {
        lastUpdate: this.props.store.lastUpdate,
        light: this.props.store.light
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: this.props.linkTo
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Navigate"))));
    }
  }]);

  return SampleComponent;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (SampleComponent);

/***/ })

})
//# sourceMappingURL=index.js.e4d5e559f5bbca04fa79.hot-update.js.map