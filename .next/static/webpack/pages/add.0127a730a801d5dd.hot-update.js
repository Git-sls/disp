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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar addContract = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Tokens = ref[0], setTokens = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), wallets = ref1[0], setWallets = ref1[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input,\n                            label: \"Token\",\n                            value: Tokens,\n                            placeholder: \"Tokens Address\",\n                            onChange: function(event) {\n                                return setTokens(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input,\n                            label: \"Wallets\",\n                            value: wallets,\n                            placeholder: \"List Address\",\n                            onChange: function(event) {\n                                return setWallets(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n        lineNumber: 19,\n        columnNumber: 14\n    }, _this);\n};\n_s(addContract, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (addContract);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQytCO0FBQ3RCOztBQUUxQyxJQUFNTSxXQUFXLEdBQUcsV0FBTTs7SUFDdEIsSUFBMkJOLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMM0MsTUFLaUIsR0FBY0EsR0FBWSxHQUExQixFQUxqQixTQUsyQixHQUFJQSxHQUFZLEdBQWhCO0lBQ3ZCLElBQTZCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTjdDLE9BTWtCLEdBQWVBLElBQVksR0FBM0IsRUFObEIsVUFNNkIsR0FBSUEsSUFBWSxHQUFoQjtJQUV6QixJQUFNVyxPQUFPLEdBQUc7UUFDWjtZQUFFQyxHQUFHLEVBQUUsR0FBRztZQUFFQyxJQUFJLEVBQUUsS0FBSztZQUFFQyxLQUFLLEVBQUUsS0FBSztTQUFFO1FBQ3ZDO1lBQUVGLEdBQUcsRUFBRSxHQUFHO1lBQUVDLElBQUksRUFBRSxLQUFLO1lBQUVDLEtBQUssRUFBRSxLQUFLO1NBQUU7UUFDdkM7WUFBRUYsR0FBRyxFQUFFLEdBQUc7WUFBRUMsSUFBSSxFQUFFLE9BQU87WUFBRUMsS0FBSyxFQUFFLE9BQU87U0FBRTtLQUM1QztJQUVILElBQU1DLFlBQVk7bUJBQUUsMktBQU9DLEtBQUssRUFBSTs7Ozt3QkFFaENBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7Ozs7OztTQUMxQjt3QkFIS0YsWUFBWSxDQUFTQyxLQUFLOzs7T0FHL0I7SUFDRCxxQkFBUyw4REFBQ1gsMERBQU07a0JBQ2QsNEVBQUNILG1EQUFJO1lBQUNnQixRQUFRLEVBQUVILFlBQVk7OzhCQUMxQiw4REFBQ2IseURBQVU7b0JBQUNrQixNQUFNLEVBQUMsT0FBTzs7c0NBQ3hCLDhEQUFDbEIseURBQVU7NEJBQUNvQixPQUFPLEVBQUVuQixvREFBSzs0QkFBRW9CLEtBQUssRUFBQyxPQUFPOzRCQUFDVCxLQUFLLEVBQUVQLE1BQU07NEJBQUVpQixXQUFXLEVBQUMsZ0JBQWdCOzRCQUFDQyxRQUFRLEVBQUlULFNBQUFBLEtBQUs7dUNBQUVSLFNBQVMsQ0FBQ1EsS0FBSyxDQUFDVSxNQUFNLENBQUNaLEtBQUssQ0FBQzs2QkFBQTs7Ozs7aUNBQUk7c0NBQzFJLDhEQUFDWix5REFBVTs0QkFBQ29CLE9BQU8sRUFBRW5CLG9EQUFLOzRCQUFFb0IsS0FBSyxFQUFDLFNBQVM7NEJBQUNULEtBQUssRUFBRUwsT0FBTzs0QkFBRWUsV0FBVyxFQUFDLGNBQWNDOzRCQUFBQSxRQUFRLEVBQUlULFNBQUFBLEtBQUs7dUNBQUVOLFVBQVUsQ0FBQ00sS0FBSyxDQUFDVSxNQUFNLENBQUNaLEtBQUssQ0FBQzs2QkFBQTs7Ozs7aUNBQUk7c0NBQzNJLDhEQUFDWix5REFBVTs0QkFBQ29CLE9BQU8sRUFBRWxCLHFEQUFNOzRCQUFFbUIsS0FBSyxFQUFDLE9BQU87NEJBQUNaLE9BQU8sRUFBRUEsT0FBTzs0QkFBRWEsV0FBVyxFQUFDLE9BQU87Ozs7O2lDQUFFOzs7Ozs7eUJBRXZFOzhCQUNiLDhEQUFDdkIscURBQU07OEJBQUMsTUFBSTs7Ozs7eUJBQVM7Ozs7OztpQkFDZDs7Ozs7YUFHRixDQUFHO0NBQ2Y7R0EzQktLLFdBQVc7QUE2QmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkLmpzP2M5MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIFNlbGVjdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgYWRkQ29udHJhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW1Rva2VucyxzZXRUb2tlbnNdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3dhbGxldHMsc2V0V2FsbGV0c10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIHsga2V5OiAnRScsIHRleHQ6ICdFVEgnLCB2YWx1ZTogJ2V0aCcgfSxcbiAgICAgICAgeyBrZXk6ICdCJywgdGV4dDogJ0JTQycsIHZhbHVlOiAnYnNjJyB9LFxuICAgICAgICB7IGtleTogJ00nLCB0ZXh0OiAnTUFUSUMnLCB2YWx1ZTogJ21hdGljJyB9LFxuICAgICAgXVxuXG4gICAgY29uc3QgaGFuZGxlU3VibGl0ID1hc3luYyAoZXZlbnQpID0+e1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHJldHVybiAoIDxMYXlvdXQ+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibGl0fT5cbiAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdUb2tlbicgdmFsdWU9e1Rva2Vuc30gcGxhY2Vob2xkZXI9J1Rva2VucyBBZGRyZXNzJyBvbkNoYW5nZSA9IHtldmVudD0+c2V0VG9rZW5zKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdXYWxsZXRzJyB2YWx1ZT17d2FsbGV0c30gcGxhY2Vob2xkZXI9J0xpc3QgQWRkcmVzcydvbkNoYW5nZSA9IHtldmVudD0+c2V0V2FsbGV0cyhldmVudC50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J0NoYWluJyBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj0nQ2hhaW4nLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8QnV0dG9uPlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuXG5cbiAgICA8L0xheW91dD4gKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IGFkZENvbnRyYWN0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIlNlbGVjdCIsIkxheW91dCIsImFkZENvbnRyYWN0IiwiVG9rZW5zIiwic2V0VG9rZW5zIiwid2FsbGV0cyIsInNldFdhbGxldHMiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiaGFuZGxlU3VibGl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3VibWl0IiwiR3JvdXAiLCJ3aWR0aHMiLCJGaWVsZCIsImNvbnRyb2wiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/add.js\n");

/***/ })

});