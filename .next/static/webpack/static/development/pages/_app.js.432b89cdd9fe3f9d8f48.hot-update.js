webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./stores/user.js":
/*!************************!*\
  !*** ./stores/user.js ***!
  \************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-state-tree */ "./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");


var User = mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].model("User", {
  name: 'test',
  age: 1,
  lastUpdate: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
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
    self.light = true;
  }

  function stop() {
    clearInterval(timer);
  }

  function setName(name) {
    self.name += name + 1;
  }

  function addAge(number) {
    self.age += 1;
  }

  return {
    setName: setName,
    addAge: addAge,
    start: start,
    stop: stop,
    update: update
  };
});

/***/ })

})
//# sourceMappingURL=_app.js.432b89cdd9fe3f9d8f48.hot-update.js.map