"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./components/header.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./components/menu.js\");\nvar _this = undefined;\n\n\n\n\n\nvar Layout = function(param) {\n    var children = param.children;\n    var stateButton = _menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    console.log(\"stateButton\", stateButton);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        fluid: true,\n        style: {\n            margin: 50\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/Layout.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {\n                inverted: true,\n                tertiary: true,\n                style: {\n                    margin: 100\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/Layout.js\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/Layout.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF5QztBQUNpQjtBQUM1QjtBQUNvQjtBQUdsRCxJQUFNSyxNQUFNLEdBQUcsZ0JBQWdCO1FBQWRDLFFBQVEsU0FBUkEsUUFBUTtJQUVyQixJQUFNQyxXQUFXLEdBQUdILDZDQUE0QjtJQUNoREksT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFDRixXQUFXLENBQUMsQ0FBQztJQUd2QyxxQkFFSSw4REFBQ1Asd0RBQVM7UUFBQ1UsS0FBSztRQUFDQyxLQUFLLEVBQUU7WUFBQ0MsTUFBTSxFQUFDLEVBQUU7U0FBQzs7MEJBSy9CLDhEQUFDVCwrQ0FBTTs7OztxQkFBRTswQkFJWCw4REFBQ0Qsc0RBQU87Z0JBQUNXLFFBQVE7Z0JBQUNDLFFBQVE7Z0JBQUNILEtBQUssRUFBRTtvQkFBQ0MsTUFBTSxFQUFDLEdBQUc7aUJBQUM7MEJBRW5ETixRQUFROzs7OztxQkFFQzs7Ozs7O2FBRUUsQ0FRVjtDQUNMO0FBaENLRCxLQUFBQSxNQUFNO0FBa0NaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJ1xuaW1wb3J0IHtDb250YWluZXIsIEdyaWQsIFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgTWVudUV4YW1wbGVJbnZlcnRlZFNlY29uZGFyeSBmcm9tICcuL21lbnUnO1xuXG5cbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XG5cbiAgICBjb25zdCBzdGF0ZUJ1dHRvbiA9IE1lbnVFeGFtcGxlSW52ZXJ0ZWRTZWNvbmRhcnk7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZUJ1dHRvblwiLHN0YXRlQnV0dG9uKTtcblxuXG4gICAgcmV0dXJuICggXG4gICAgICBcbiAgICAgICAgPENvbnRhaW5lciBmbHVpZCBzdHlsZT17e21hcmdpbjo1MH19PlxuXG5cbiAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgICA8U2VnbWVudCBpbnZlcnRlZCB0ZXJ0aWFyeSBzdHlsZT17e21hcmdpbjoxMDB9fT5cbiAgICAgICAgICBcbiAgICB7Y2hpbGRyZW59XG4gICAgXG4gICAgPC9TZWdtZW50PlxuXG4gICAgPC9Db250YWluZXI+XG5cbiAgICBcbiAgICBcbiBcbiAgICBcbiAgXG4gIFxuICAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkdyaWQiLCJTZWdtZW50IiwiSGVhZGVyIiwiTWVudUV4YW1wbGVJbnZlcnRlZFNlY29uZGFyeSIsIkxheW91dCIsImNoaWxkcmVuIiwic3RhdGVCdXR0b24iLCJjb25zb2xlIiwibG9nIiwiZmx1aWQiLCJzdHlsZSIsIm1hcmdpbiIsImludmVydGVkIiwidGVydGlhcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});