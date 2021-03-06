webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _components_LineGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LineGraph */ "./components/LineGraph.js");
/* harmony import */ var _components_BarGraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BarGraph */ "./components/BarGraph.js");
var _jsxFileName = "/Users/joshkennedy/sites/joshs/github-data-01/frontend/pages/index.js";







var index = function index(_ref) {
  var _ref$data = _ref.data,
      allRepoCommits = _ref$data.allRepoCommits,
      EachTotalCommits = _ref$data.EachTotalCommits,
      eachBiggestCommitWeek = _ref$data.eachBiggestCommitWeek,
      EachAverageCommitCount = _ref$data.EachAverageCommitCount,
      user = _ref$data.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "All ", user, "'s commits by week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LineGraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: allRepoCommits.map(function (_ref2) {
      var total = _ref2.total;
      return total;
    }),
    xLabels: allRepoCommits.map(function (_ref3) {
      var week = _ref3.week;
      return week;
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Comparing Repositories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "sub__graph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Average Commits in a Week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BarGraph__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dataset: EachAverageCommitCount.map(function (_ref4) {
      var averageCommit = _ref4.averageCommit;
      return averageCommit;
    })
    /* yLabels={fromGitHub.map(({ total }) => total)} */
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "sub__graph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "most lines of code commited at once"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BarGraph__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dataset: eachBiggestCommitWeek.map(function (_ref5) {
      var total = _ref5.biggestCommit.total;
      return total;
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "sub__graph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Repositories total commits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BarGraph__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dataset: EachTotalCommits.map(function (_ref6) {
      var total = _ref6.total;
      return total;
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))))));
};

var SubSection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "pages__SubSection",
  componentId: "lgoza8-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:30px;margin:0;padding:0;li{list-style:none;width:100%;}"]);
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.c7054dd0082ccfeb25b9.hot-update.js.map