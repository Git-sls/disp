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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar addContract = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Tokens = ref[0], setTokens = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref1[0], setAreaWA = ref1[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, disperseSinger, wallets, wallet, amount, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        disperseSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        console.log(\"wallets\", wallets);\n                        wallet = [];\n                        amount = [];\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            //console.log(\"t1\",(t1[0]));\n                            var v1 = t1[1]; //*10**18;\n                            wallet.push(t1[0]);\n                            amount.push(v1);\n                        //console.log(\"amount\",amount);\n                        });\n                        //wallet=hexConcat(wallet);\n                        //amount = BigNumber(amount);\n                        console.log(\"wallet:\", wallet, \"amount:\", amount);\n                        _ctx.prev = 9;\n                        _ctx.next = 12;\n                        return disperseSinger.disperseEther([\n                            wallet\n                        ], [\n                            amount\n                        ]);\n                    case 12:\n                        response = _ctx.sent;\n                        console.log(\"response\", response);\n                        _ctx.next = 19;\n                        break;\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](9);\n                        console.log(\"error\", _ctx.t0);\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    9,\n                    16\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input,\n                            label: \"Token\",\n                            value: Tokens,\n                            placeholder: \"Tokens Address\",\n                            onChange: function(event) {\n                                return setTokens(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.TextArea, {\n                            label: \"Wallets\",\n                            value: AreaWA,\n                            placeholder: \"Walets&Tokens\",\n                            onChange: function(event) {\n                                return setAreaWA(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n        lineNumber: 67,\n        columnNumber: 14\n    }, _this);\n};\n_s(addContract, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (addContract);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEMseURBQVU7NEJBQUN3QyxPQUFPLEVBQUV2QyxvREFBSzs0QkFBRXdDLEtBQUssRUFBQyxPQUFPOzRCQUFDMUIsS0FBSyxFQUFFUCxNQUFNOzRCQUFFa0MsV0FBVyxFQUFDLGdCQUFnQjs0QkFBQ0MsUUFBUSxFQUFJMUIsU0FBQUEsS0FBSzt1Q0FBRVIsU0FBUyxDQUFDUSxLQUFLLENBQUMyQixNQUFNLENBQUM3QixLQUFLLENBQUM7NkJBQUE7Ozs7O2lDQUFJO3NDQUMxSSw4REFBQ1osdURBQVE7NEJBQUNzQyxLQUFLLEVBQUMsU0FBUzs0QkFBQzFCLEtBQUssRUFBRUwsTUFBTTs0QkFBRWdDLFdBQVcsRUFBQyxlQUFlQzs0QkFBQUEsUUFBUSxFQUFJMUIsU0FBQUEsS0FBSzt1Q0FBRU4sU0FBUyxDQUFDTSxLQUFLLENBQUMyQixNQUFNLENBQUM3QixLQUFLLENBQUM7NkJBQUE7Ozs7O2lDQUFJO3NDQUN4SCw4REFBQ2YseURBQVU7NEJBQUN3QyxPQUFPLEVBQUV0QyxxREFBTTs0QkFBRXVDLEtBQUssRUFBQyxPQUFPOzRCQUFDN0IsT0FBTyxFQUFFQSxPQUFPOzRCQUFFOEIsV0FBVyxFQUFDLE9BQU87Ozs7O2lDQUFFOzs7Ozs7eUJBRXZFOzhCQUNiLDhEQUFDM0MscURBQU07b0JBQUM4QyxPQUFPOzhCQUFDLE1BQUk7Ozs7O3lCQUFTOzs7Ozs7aUJBQ3RCOzs7OzthQUdGLENBQUc7Q0FDZjtHQXZFS3RDLFdBQVc7QUF5RWpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkLmpzP2M5MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgaGV4Q29uY2F0IH0gZnJvbSBcImV0aGVycy9saWIvdXRpbHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBTZWxlY3QsIFRleHRBcmVhIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGRpc3BlcnNlIGZyb20gXCIuLi9kaXNwZXJzZVwiO1xuaW1wb3J0IHByb3ZpZGVyIGZyb20gXCIuLi9wcm92aWRlclwiO1xuXG5jb25zdCBhZGRDb250cmFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBbVG9rZW5zLHNldFRva2Vuc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbQXJlYVdBLHNldEFyZWFXQV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgeyBrZXk6ICdFJywgdGV4dDogJ0VUSCcsIHZhbHVlOiAnZXRoJyB9LFxuICAgICAgICB7IGtleTogJ0InLCB0ZXh0OiAnQlNDJywgdmFsdWU6ICdic2MnIH0sXG4gICAgICAgIHsga2V5OiAnTScsIHRleHQ6ICdNQVRJQycsIHZhbHVlOiAnbWF0aWMnIH0sXG4gICAgICBdXG5cblxuICAgIGNvbnN0IGhhbmRsZVN1YmxpdCA9YXN5bmMgKGV2ZW50KSA9PntcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm92aWRlci5mdW5jdGlvbnMpO1xuICAgICAgICBjb25zdCBkaXNwZXJzZVNpbmdlciA9IGRpc3BlcnNlLmNvbm5lY3Qoc2luZ2VyKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkaXNwZXJzZVNpbmdlci5mdW5jdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHdhbGxldHMgPSBBcmVhV0Euc3BsaXQoJ1xcbicpOyBcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YWxsZXRzXCIsd2FsbGV0cyk7XG4gICAgICAgICBjb25zdCB3YWxsZXQ9W107XG4gICAgICAgICBjb25zdCBhbW91bnQ9W107XG4gICAgICAgICB3YWxsZXRzLmZvckVhY2godzEgPT4ge1xuICAgICAgICAgICAgIGNvbnN0IHQxPXcxLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInQxXCIsKHQxWzBdKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICBjb25zdCB2MSA9dDFbMV07Ly8qMTAqKjE4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgd2FsbGV0LnB1c2godDFbMF0pO1xuICAgICAgICAgICAgIGFtb3VudC5wdXNoKHYxKTtcbiAgXG4gICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImFtb3VudFwiLGFtb3VudCk7XG4gICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICAvL3dhbGxldD1oZXhDb25jYXQod2FsbGV0KTtcbiAgICAgICAgLy9hbW91bnQgPSBCaWdOdW1iZXIoYW1vdW50KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIndhbGxldDpcIix3YWxsZXQsIFwiYW1vdW50OlwiLGFtb3VudCk7XG4gICAgICAgIFxuICAgICAgICB0cnl7XG4gICAgICAgICAgICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGVyc2VTaW5nZXJbXCJkaXNwZXJzZUV0aGVyKGFkZHJlc3NbXSx1aW50MjU2W10pXCJdKHdhbGxldCxhbW91bnQpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwZXJzZVNpbmdlci5kaXNwZXJzZUV0aGVyKFt3YWxsZXRdLFthbW91bnRdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIixyZXNwb25zZSk7XG5cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcilcbiAgICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsZXJyb3IpO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuICAgIHJldHVybiAoIDxMYXlvdXQ+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibGl0fT5cbiAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdUb2tlbicgdmFsdWU9e1Rva2Vuc30gcGxhY2Vob2xkZXI9J1Rva2VucyBBZGRyZXNzJyBvbkNoYW5nZSA9IHtldmVudD0+c2V0VG9rZW5zKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XG4gICAgICAgICAgPFRleHRBcmVhIGxhYmVsPSdXYWxsZXRzJyB2YWx1ZT17QXJlYVdBfSBwbGFjZWhvbGRlcj0nV2FsZXRzJlRva2VucydvbkNoYW5nZSA9IHtldmVudD0+c2V0QXJlYVdBKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17U2VsZWN0fSBsYWJlbD0nQ2hhaW4nIG9wdGlvbnM9e29wdGlvbnN9IHBsYWNlaG9sZGVyPSdDaGFpbicvPlxuICAgICAgICAgIFxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5TZW5kPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cblxuXG4gICAgPC9MYXlvdXQ+ICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBhZGRDb250cmFjdDsiXSwibmFtZXMiOlsiQmlnTnVtYmVyIiwiaGV4Q29uY2F0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJTZWxlY3QiLCJUZXh0QXJlYSIsIkxheW91dCIsImRpc3BlcnNlIiwicHJvdmlkZXIiLCJhZGRDb250cmFjdCIsIlRva2VucyIsInNldFRva2VucyIsIkFyZWFXQSIsInNldEFyZWFXQSIsIm9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJoYW5kbGVTdWJsaXQiLCJldmVudCIsInNpbmdlciIsImRpc3BlcnNlU2luZ2VyIiwid2FsbGV0cyIsIndhbGxldCIsImFtb3VudCIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJnZXRTaWduZXIiLCJjb25uZWN0Iiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsIncxIiwidDEiLCJ2MSIsInB1c2giLCJkaXNwZXJzZUV0aGVyIiwib25TdWJtaXQiLCJHcm91cCIsIndpZHRocyIsIkZpZWxkIiwiY29udHJvbCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/add.js\n");

/***/ })

});