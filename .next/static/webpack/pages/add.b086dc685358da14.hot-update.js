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

/***/ "./pages/add.js":
/*!**********************!*\
  !*** ./pages/add.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar addContract = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Tokens = ref[0], setTokens = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), wallets = ref1[0], setWallets = ref1[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {\n            onSubmit: handleSublit,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                widths: \"equal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input,\n                        label: \"Token\",\n                        value: Tokens,\n                        placeholder: \"Tokens Address\",\n                        onChange: function(event) {\n                            return setTokens(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input,\n                        label: \"Wallets\",\n                        value: wallets,\n                        placeholder: \"List Address\",\n                        onChange: function(event) {\n                            return setWallets(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Select,\n                        label: \"Chain\",\n                        options: options,\n                        placeholder: \"Chain\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n        lineNumber: 19,\n        columnNumber: 14\n    }, _this);\n};\n_s(addContract, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (addContract);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQytCO0FBQ3RCOztBQUUxQyxJQUFNTSxXQUFXLEdBQUcsV0FBTTs7SUFDdEIsSUFBMkJOLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMM0MsTUFLaUIsR0FBY0EsR0FBWSxHQUExQixFQUxqQixTQUsyQixHQUFJQSxHQUFZLEdBQWhCO0lBQ3ZCLElBQTZCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTjdDLE9BTWtCLEdBQWVBLElBQVksR0FBM0IsRUFObEIsVUFNNkIsR0FBSUEsSUFBWSxHQUFoQjtJQUV6QixJQUFNVyxPQUFPLEdBQUc7UUFDWjtZQUFFQyxHQUFHLEVBQUUsR0FBRztZQUFFQyxJQUFJLEVBQUUsS0FBSztZQUFFQyxLQUFLLEVBQUUsS0FBSztTQUFFO1FBQ3ZDO1lBQUVGLEdBQUcsRUFBRSxHQUFHO1lBQUVDLElBQUksRUFBRSxLQUFLO1lBQUVDLEtBQUssRUFBRSxLQUFLO1NBQUU7UUFDdkM7WUFBRUYsR0FBRyxFQUFFLEdBQUc7WUFBRUMsSUFBSSxFQUFFLE9BQU87WUFBRUMsS0FBSyxFQUFFLE9BQU87U0FBRTtLQUM1QztJQUVILElBQU1DLFlBQVk7bUJBQUUsMktBQU9DLEtBQUssRUFBSTs7Ozt3QkFFaENBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7Ozs7OztTQUMxQjt3QkFIS0YsWUFBWSxDQUFTQyxLQUFLOzs7T0FHL0I7SUFDRCxxQkFBUyw4REFBQ1gsMERBQU07a0JBQ2QsNEVBQUNILG1EQUFJO1lBQUNnQixRQUFRLEVBQUVILFlBQVk7c0JBQzFCLDRFQUFDYix5REFBVTtnQkFBQ2tCLE1BQU0sRUFBQyxPQUFPOztrQ0FDeEIsOERBQUNsQix5REFBVTt3QkFBQ29CLE9BQU8sRUFBRW5CLG9EQUFLO3dCQUFFb0IsS0FBSyxFQUFDLE9BQU87d0JBQUNULEtBQUssRUFBRVAsTUFBTTt3QkFBRWlCLFdBQVcsRUFBQyxnQkFBZ0I7d0JBQUNDLFFBQVEsRUFBSVQsU0FBQUEsS0FBSzttQ0FBRVIsU0FBUyxDQUFDUSxLQUFLLENBQUNVLE1BQU0sQ0FBQ1osS0FBSyxDQUFDO3lCQUFBOzs7Ozs2QkFBSTtrQ0FDMUksOERBQUNaLHlEQUFVO3dCQUFDb0IsT0FBTyxFQUFFbkIsb0RBQUs7d0JBQUVvQixLQUFLLEVBQUMsU0FBUzt3QkFBQ1QsS0FBSyxFQUFFTCxPQUFPO3dCQUFFZSxXQUFXLEVBQUMsY0FBY0M7d0JBQUFBLFFBQVEsRUFBSVQsU0FBQUEsS0FBSzttQ0FBRU4sVUFBVSxDQUFDTSxLQUFLLENBQUNVLE1BQU0sQ0FBQ1osS0FBSyxDQUFDO3lCQUFBOzs7Ozs2QkFBSTtrQ0FDM0ksOERBQUNaLHlEQUFVO3dCQUFDb0IsT0FBTyxFQUFFbEIscURBQU07d0JBQUVtQixLQUFLLEVBQUMsT0FBTzt3QkFBQ1osT0FBTyxFQUFFQSxPQUFPO3dCQUFFYSxXQUFXLEVBQUMsT0FBTzs7Ozs7NkJBQUU7a0NBQ2xGLDhEQUFDdkIscURBQU07a0NBQUMsTUFBSTs7Ozs7NkJBQVM7Ozs7OztxQkFDVjs7Ozs7aUJBQ047Ozs7O2FBR0YsQ0FBRztDQUNmO0dBMUJLSyxXQUFXO0FBNEJqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkZC5qcz9jOTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBTZWxlY3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IGFkZENvbnRyYWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtUb2tlbnMsc2V0VG9rZW5zXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFt3YWxsZXRzLHNldFdhbGxldHNdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IGtleTogJ0UnLCB0ZXh0OiAnRVRIJywgdmFsdWU6ICdldGgnIH0sXG4gICAgICAgIHsga2V5OiAnQicsIHRleHQ6ICdCU0MnLCB2YWx1ZTogJ2JzYycgfSxcbiAgICAgICAgeyBrZXk6ICdNJywgdGV4dDogJ01BVElDJywgdmFsdWU6ICdtYXRpYycgfSxcbiAgICAgIF1cblxuICAgIGNvbnN0IGhhbmRsZVN1YmxpdCA9YXN5bmMgKGV2ZW50KSA9PntcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICByZXR1cm4gKCA8TGF5b3V0PlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1YmxpdH0+XG4gICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nVG9rZW4nIHZhbHVlPXtUb2tlbnN9IHBsYWNlaG9sZGVyPSdUb2tlbnMgQWRkcmVzcycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldFRva2VucyhldmVudC50YXJnZXQudmFsdWUpIH0vPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nV2FsbGV0cycgdmFsdWU9e3dhbGxldHN9IHBsYWNlaG9sZGVyPSdMaXN0IEFkZHJlc3Mnb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldFdhbGxldHMoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtTZWxlY3R9IGxhYmVsPSdDaGFpbicgb3B0aW9ucz17b3B0aW9uc30gcGxhY2Vob2xkZXI9J0NoYWluJy8+XG4gICAgICAgICAgPEJ1dHRvbj5TZW5kPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPC9Gb3JtPlxuXG5cbiAgICA8L0xheW91dD4gKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IGFkZENvbnRyYWN0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIlNlbGVjdCIsIkxheW91dCIsImFkZENvbnRyYWN0IiwiVG9rZW5zIiwic2V0VG9rZW5zIiwid2FsbGV0cyIsInNldFdhbGxldHMiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiaGFuZGxlU3VibGl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3VibWl0IiwiR3JvdXAiLCJ3aWR0aHMiLCJGaWVsZCIsImNvbnRyb2wiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/add.js\n");

/***/ })

});