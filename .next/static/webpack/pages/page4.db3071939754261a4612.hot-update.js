webpackHotUpdate_N_E("pages/page4",{

/***/ "./src/components/Global/RelatedPosts.tsx":
/*!************************************************!*\
  !*** ./src/components/Global/RelatedPosts.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _jsxFileName = \"/Users/waleed/iwork/jobs/upwork/adrian/project-for-adrian/src/components/Global/RelatedPosts.tsx\",\n    _this = undefined;\n\n\n\nvar RelatedPosts = function RelatedPosts(_ref) {\n  var posts = _ref.posts;\n  var renderRelatedPosts = posts.map(function (post, index) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full flex items-center border-b border-black my-2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"font-merriWeather font-bold text-lg cursor-pointer\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"font-workSans text-gray-500 font-bold mr-1\",\n            children: [\"0\", index + 1, \".\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: post.postLink,\n            children: post.postTitle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }, _this)\n    }, post.postId, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full flex flex-wrap\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full my-12\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"font-workSans text-2xl font-bold\",\n          children: \"Relacionados\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), renderRelatedPosts]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = RelatedPosts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RelatedPosts);\n\nvar _c;\n\n$RefreshReg$(_c, \"RelatedPosts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2xvYmFsL1JlbGF0ZWRQb3N0cy50c3g/ZTdjNCJdLCJuYW1lcyI6WyJSZWxhdGVkUG9zdHMiLCJwb3N0cyIsInJlbmRlclJlbGF0ZWRQb3N0cyIsIm1hcCIsInBvc3QiLCJpbmRleCIsInBvc3RMaW5rIiwicG9zdFRpdGxlIiwicG9zdElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQVlBLElBQU1BLFlBQTZCLEdBQUcsU0FBaENBLFlBQWdDLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDbkQsTUFBTUMsa0JBQWtCLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUN6QixVQUFDQyxJQUFELEVBQTZCQyxLQUE3QixFQUErQztBQUM3Qyx3QkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMscURBQWY7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMsb0RBQWI7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUMsNENBQWhCO0FBQUEsNEJBQ0lBLEtBQUssR0FBRyxDQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUcsZ0JBQUksRUFBRUQsSUFBSSxDQUFDRSxRQUFkO0FBQUEsc0JBQXlCRixJQUFJLENBQUNHO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQXFCSCxJQUFJLENBQUNJLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVlELEdBZHdCLENBQTNCO0FBaUJBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUlHTixrQkFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVVELENBNUJEOztLQUFNRixZO0FBOEJTQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0dsb2JhbC9SZWxhdGVkUG9zdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUmVsYXRlZFBvc3RJbnRlcmZhY2Uge1xuICBwb3N0SWQ6IHN0cmluZyB8IG51bWJlcjtcbiAgcG9zdExpbms6IHN0cmluZztcbiAgcG9zdFRpdGxlOiBzdHJpbmc7XG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3RzOiBSZWxhdGVkUG9zdEludGVyZmFjZVtdO1xufTtcblxuY29uc3QgUmVsYXRlZFBvc3RzOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlclJlbGF0ZWRQb3N0cyA9IHBvc3RzLm1hcChcbiAgICAocG9zdDogUmVsYXRlZFBvc3RJbnRlcmZhY2UsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3Bvc3QucG9zdElkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYiBib3JkZXItYmxhY2sgbXktMlwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZXJyaVdlYXRoZXIgZm9udC1ib2xkIHRleHQtbGcgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyB0ZXh0LWdyYXktNTAwIGZvbnQtYm9sZCBtci0xXCI+XG4gICAgICAgICAgICAgICAgMHtpbmRleCArIDF9LlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QucG9zdExpbmt9Pntwb3N0LnBvc3RUaXRsZX08L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteS0xMlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIHRleHQtMnhsIGZvbnQtYm9sZFwiPlJlbGFjaW9uYWRvczwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cmVuZGVyUmVsYXRlZFBvc3RzfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWxhdGVkUG9zdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Global/RelatedPosts.tsx\n");

/***/ })

})