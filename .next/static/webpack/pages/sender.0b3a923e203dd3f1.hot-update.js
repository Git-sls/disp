"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sender",{

/***/ "./pages/sender.js":
/*!*************************!*\
  !*** ./pages/sender.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Tokens = ref[0], setTokens = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref1[0], setAreaWA = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref2[0], setErrorMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref3[0], setSuccessMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref4[0], setLoading = ref4[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {\n            error: !!erroMessage,\n            success: !!successMessage,\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input,\n                            label: \"Token\",\n                            value: Tokens,\n                            placeholder: \"Tokens Address\",\n                            onChange: function(event) {\n                                return setTokens(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.TextArea, {\n                            label: \"Wallets\",\n                            value: AreaWA,\n                            placeholder: \"Walets Tokens\",\n                            onChange: function(event) {\n                                return setAreaWA(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    loading: isLoading,\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Message, {\n                    style: {\n                        wordBreak: \"break-word\"\n                    },\n                    error: true,\n                    header: \"Error:\",\n                    content: erroMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Message, {\n                    success: true,\n                    header: \"success:\",\n                    content: successMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 29,\n        columnNumber: 15\n    }, _this);\n};\n_s(sender, \"m54akTrsXMBfn6yNj3EmRHxI4wU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqQyxzREFBTztvQkFBQ2tDLEtBQUssRUFBRTt3QkFBQ0MsU0FBUyxFQUFFLFlBQVk7cUJBQUM7b0JBQUVkLEtBQUs7b0JBQUNlLE1BQU0sRUFBRyxRQUFRO29CQUFDQyxPQUFPLEVBQUk1QixXQUFXOzs7Ozt5QkFBRzs4QkFDNUYsOERBQUNULHNEQUFPO29CQUFDc0IsT0FBTztvQkFBQ2MsTUFBTSxFQUFHLFVBQVU7b0JBQUNDLE9BQU8sRUFBSTFCLGNBQWM7Ozs7O3lCQUFHOzs7Ozs7aUJBQzFEOzs7OzthQUNGLENBQUU7Q0FDZDtHQXBDS1AsTUFBTTtBQXNDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlbmRlci5qcz9kZmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBNZXNzYWdlLCBTZWxlY3QsIFRleHRBcmVhIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5cbmNvbnN0IHNlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbVG9rZW5zLHNldFRva2Vuc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbQXJlYVdBLHNldEFyZWFXQV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IFtlcnJvTWVzc2FnZSxzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3N1Y2Nlc3NNZXNzYWdlLHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW2lzTG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IGtleTogJ0UnLCB0ZXh0OiAnRVRIJywgdmFsdWU6ICdldGgnIH0sXG4gICAgICAgIHsga2V5OiAnQicsIHRleHQ6ICdCU0MnLCB2YWx1ZTogJ2JzYycgfSxcbiAgICAgICAgeyBrZXk6ICdNJywgdGV4dDogJ01BVElDJywgdmFsdWU6ICdtYXRpYycgfSxcbiAgICAgIF1cblxuICAgIGNvbnN0IGhhbmRsZVN1YmxpdCA9YXN5bmMgKGV2ZW50KSA9PntcblxuXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCAgPExheW91dD5cbiAgICAgIDxGb3JtIGVycm9yPXshIWVycm9NZXNzYWdlfSBzdWNjZXNzPXshIXN1Y2Nlc3NNZXNzYWdlfSBvblN1Ym1pdD17aGFuZGxlU3VibGl0fT5cbiAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdUb2tlbicgdmFsdWU9e1Rva2Vuc30gcGxhY2Vob2xkZXI9J1Rva2VucyBBZGRyZXNzJyBvbkNoYW5nZSA9IHtldmVudD0+c2V0VG9rZW5zKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XG4gICAgICAgICAgPFRleHRBcmVhIGxhYmVsPSdXYWxsZXRzJyB2YWx1ZT17QXJlYVdBfSBwbGFjZWhvbGRlcj0nV2FsZXRzIFRva2VucydvbkNoYW5nZSA9IHtldmVudD0+c2V0QXJlYVdBKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17U2VsZWN0fSBsYWJlbD0nQ2hhaW4nIG9wdGlvbnM9e29wdGlvbnN9IHBsYWNlaG9sZGVyPSdDaGFpbicvPlxuICAgICAgICAgIFxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBwcmltYXJ5PlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgPE1lc3NhZ2Ugc3R5bGU9e3t3b3JkQnJlYWs6ICdicmVhay13b3JkJ319IGVycm9yIGhlYWRlciA9ICdFcnJvcjonIGNvbnRlbnQgPSB7ZXJyb01lc3NhZ2V9Lz4gXG4gICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyID0gJ3N1Y2Nlc3M6JyBjb250ZW50ID0ge3N1Y2Nlc3NNZXNzYWdlfS8+IFxuICAgICAgICA8L0Zvcm0+XG4gICAgPC9MYXlvdXQ+KTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IHNlbmRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJMYXlvdXQiLCJzZW5kZXIiLCJUb2tlbnMiLCJzZXRUb2tlbnMiLCJBcmVhV0EiLCJzZXRBcmVhV0EiLCJlcnJvTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsImhhbmRsZVN1YmxpdCIsImV2ZW50IiwiZXJyb3IiLCJzdWNjZXNzIiwib25TdWJtaXQiLCJHcm91cCIsIndpZHRocyIsIkZpZWxkIiwiY29udHJvbCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsImxvYWRpbmciLCJwcmltYXJ5Iiwic3R5bGUiLCJ3b3JkQnJlYWsiLCJoZWFkZXIiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});