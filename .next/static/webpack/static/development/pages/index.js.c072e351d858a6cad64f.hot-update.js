webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BarGraph.js":
/*!********************************!*\
  !*** ./components/BarGraph.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helperFunctions_maxValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helperFunctions/maxValue */ "./helperFunctions/maxValue.js");
/* harmony import */ var _graphComponents_Bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphComponents/Bar */ "./graphComponents/Bar.js");
var _jsxFileName = "/Users/joshkennedy/sites/joshs/github-data-01/frontend/components/BarGraph.js";





var BarGraph = function BarGraph(_ref) {
  var className = _ref.className,
      dataset = _ref.dataset,
      repoName = _ref.repoName;
  var viewBox = {
    w: 400,
    h: 200
  };
  var w = viewBox.w,
      h = viewBox.h;
  var barMax = Object(_helperFunctions_maxValue__WEBPACK_IMPORTED_MODULE_2__["default"])(dataset);
  var barHeight = Math.floor(h / (dataset.length - 1) - h / 100 - w / 100);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 ".concat(w, " ").concat(h),
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "grid grid-x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "0",
    x2: w,
    y1: h,
    y2: h,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "grid grid-y",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "0",
    x2: "0",
    y1: "0",
    y2: h,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), dataset.map(function (data, index) {
    var barWidth = Math.floor(data / barMax * w);
    var tX = 40;
    var tY = barY - 40;
    var barY = Math.floor(h / dataset.length * index);
    var text = {
      tX: tX,
      tY: tY,
      dY: dY,
      repoName: repoName
    };
    var rect = {
      barHeight: barHeight,
      barWidth: barWidth,
      barY: barY
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graphComponents_Bar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      className: "bar",
      text: text,
      rect: rect,
      viewBox: viewBox,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(BarGraph).withConfig({
  displayName: "BarGraph",
  componentId: "sc-1ul5g3m-0"
})(["width:100%;height:auto;background:white;.grid{stroke:black;stroke-width:3;}.increment-line{stroke:black;stroke-width:0.2;}.bar{text{fill:white;font-size:10px;}}"]));

/***/ })

})
//# sourceMappingURL=index.js.c072e351d858a6cad64f.hot-update.js.map