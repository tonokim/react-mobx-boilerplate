webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./stores/index.js":
/*!*************************!*\
  !*** ./stores/index.js ***!
  \*************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-state-tree */ "./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./stores/user.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./stores/app.js");




var store = null;
var Store = mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].model("Store", {
  user: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(_user__WEBPACK_IMPORTED_MODULE_2__["User"], {
    name: 'test3',
    lastUpdate: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
  }),
  app: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(_app__WEBPACK_IMPORTED_MODULE_3__["App"], {
    name: 'testapp'
  })
}).actions(function (self) {
  var timer;

  function start() {
    timer = setInterval(function () {
      // mobx-state-tree doesn't allow anonymous callbacks changing data
      // pass off to another action instead
      self.update();
    }, 1000);
  }

  function update() {
    self.lastUpdate = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();
    self.light = false;
  }

  function stop() {
    clearInterval(timer);
  }

  return {
    start: start,
    stop: stop,
    update: update
  };
});
function initializeStore(isServer) {
  var snapshot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (isServer) {
    store = Store.create({
      user: {
        lastUpdate: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
      }
    });
  }

  if (store === null) {
    store = Store.create({
      user: {
        lastUpdate: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
      }
    });
  }

  if (snapshot) {
    Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["applySnapshot"])(store, snapshot);
  }

  return store;
}

/***/ })

})
//# sourceMappingURL=_app.js.2e191960626e2b5a0b68.hot-update.js.map