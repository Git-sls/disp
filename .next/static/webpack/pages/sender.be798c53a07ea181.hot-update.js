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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref[0], setToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref1[0], setAreaWA = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref2[0], setErrorMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref3[0], setSuccessMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref4[0], setLoading = ref4[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, TokenAddress, wallets, wallet, amount, totaltokens, ch_allows, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        TokenAddress = Token;\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        if (TokenAddress) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        setErrorMessage(\"\\u041F\\u0443\\u0441\\u0442\\u043E\\u0439 \\u0430\\u0434\\u0440\\u0435\\u0441 token\");\n                        return _ctx.abrupt(\"return\");\n                    case 13:\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_7__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.next = 16;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 16:\n                        ch_allows = _ctx.sent;\n                        console.log(\"ch_allows\", ch_allows);\n                        _ctx.prev = 18;\n                        _ctx.next = 21;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 21:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 29;\n                        break;\n                    case 25:\n                        _ctx.prev = 25;\n                        _ctx.t0 = _ctx[\"catch\"](18);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 29:\n                        _ctx.prev = 29;\n                        setLoading(false);\n                        return _ctx.finish(29);\n                    case 32:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    18,\n                    25,\n                    29,\n                    32\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n            error: !!erroMessage,\n            success: !!successMessage,\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Select,\n                        label: \"Chain\",\n                        options: options,\n                        placeholder: \"Chain\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 82,\n                        columnNumber: 7\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input,\n                            label: \"Token\",\n                            value: Token,\n                            placeholder: \"Token Address\",\n                            onChange: function(event) {\n                                return setToken(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.TextArea,\n                            label: \"Walets Tokens\",\n                            value: AreaWA,\n                            placeholder: \"Walets Tokens\",\n                            onChange: function(event) {\n                                return setAreaWA(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                    loading: isLoading,\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                    style: {\n                        wordBreak: \"break-word\"\n                    },\n                    error: true,\n                    header: \"Error:\",\n                    content: erroMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                    success: true,\n                    header: \"success:\",\n                    content: successMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 79,\n        columnNumber: 15\n    }, _this);\n};\n_s(sender, \"m54akTrsXMBfn6yNj3EmRHxI4wU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPOzRCQUFDbkMsS0FBSyxFQUFFYixLQUFLOzRCQUFFaUQsV0FBVyxFQUFDLGVBQWU7NEJBQUNFLFFBQVEsRUFBSXBDLFNBQUFBLEtBQUs7dUNBQUVkLFFBQVEsQ0FBQ2MsS0FBSyxDQUFDcUMsTUFBTSxDQUFDdkMsS0FBSyxDQUFDOzZCQUFBOzs7OztpQ0FBSTtzQ0FFdkksOERBQUN2Qix5REFBVTs0QkFBQ3lELE9BQU8sRUFBRXJELHVEQUFROzRCQUFFc0QsS0FBSyxFQUFDLGVBQWU7NEJBQUNuQyxLQUFLLEVBQUVYLE1BQU07NEJBQUUrQyxXQUFXLEVBQUMsZUFBZTs0QkFBQ0UsUUFBUSxFQUFJcEMsU0FBQUEsS0FBSzt1Q0FBRVosU0FBUyxDQUFDWSxLQUFLLENBQUNxQyxNQUFNLENBQUN2QyxLQUFLLENBQUM7NkJBQUE7Ozs7O2lDQUFHOzs7Ozs7eUJBR3hJOzhCQUNiLDhEQUFDeEIscURBQU07b0JBQUNnRSxPQUFPLEVBQUU3QyxTQUFTO29CQUFFOEMsT0FBTzs4QkFBQyxNQUFJOzs7Ozt5QkFBUzs4QkFDakQsOERBQUM5RCxzREFBTztvQkFBQytELEtBQUssRUFBRTt3QkFBQ0MsU0FBUyxFQUFFLFlBQVk7cUJBQUM7b0JBQUVmLEtBQUs7b0JBQUNnQixNQUFNLEVBQUcsUUFBUTtvQkFBQ0MsT0FBTyxFQUFJdEQsV0FBVzs7Ozs7eUJBQUc7OEJBQzVGLDhEQUFDWixzREFBTztvQkFBQ21ELE9BQU87b0JBQUNjLE1BQU0sRUFBRyxVQUFVO29CQUFDQyxPQUFPLEVBQUlwRCxjQUFjOzs7Ozt5QkFBRzs7Ozs7O2lCQUMxRDs7Ozs7YUFDRixDQUFFO0NBQ2Q7R0F0RktQLE1BQU07QUF3RlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZW5kZXIuanM/ZGZlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1dGlscyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBNZXNzYWdlLCBTZWxlY3QsIFRleHRBcmVhIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGRpc3BlcnNlIGZyb20gXCIuLi9kaXNwZXJzZVwiO1xuaW1wb3J0IHByb3ZpZGVyIGZyb20gXCIuLi9wcm92aWRlclwiO1xuaW1wb3J0IGNoX2FwcHJvdmUgZnJvbSBcIi4uL3V0aWxzL2NoX2FwcHJvdmVcIjtcblxuXG5jb25zdCBzZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW1Rva2VuLHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtBcmVhV0Esc2V0QXJlYVdBXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW2Vycm9NZXNzYWdlLHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc3VjY2Vzc01lc3NhZ2Usc2V0U3VjY2Vzc01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIHsga2V5OiAnRScsIHRleHQ6ICdFVEgnLCB2YWx1ZTogJ2V0aCcgfSxcbiAgICAgICAgeyBrZXk6ICdCJywgdGV4dDogJ0JTQycsIHZhbHVlOiAnYnNjJyB9LFxuICAgICAgICB7IGtleTogJ00nLCB0ZXh0OiAnTUFUSUMnLCB2YWx1ZTogJ21hdGljJyB9LFxuICAgICAgXVxuXG4gICAgY29uc3QgaGFuZGxlU3VibGl0ID1hc3luYyAoZXZlbnQpID0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKFwiXCIpO1xuXG4gICAgICAgIGNvbnN0IHNpbmdlciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBTZW5kZXJTaW5nZXIgPSBkaXNwZXJzZS5jb25uZWN0KHNpbmdlcik7XG5cblxuXG4gICAgICAgIGNvbnN0IFRva2VuQWRkcmVzcyA9IFRva2VuO1xuICAgICAgICBjb25zdCB3YWxsZXRzID0gQXJlYVdBLnNwbGl0KCdcXG4nKTsgXG4gICAgICAgIGNvbnN0IHdhbGxldD1bXTtcbiAgICAgICAgY29uc3QgYW1vdW50PVtdO1xuICAgICAgICBjb25zdCB0b3RhbHRva2VucyA9MDtcbiAgICAgXG4gICAgICAgIGlmKCFUb2tlbkFkZHJlc3Mpe1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi0J/Rg9GB0YLQvtC5INCw0LTRgNC10YEgdG9rZW5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgd2FsbGV0cy5mb3JFYWNoKHcxID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHQxPXcxLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBjb25zdCB2MSA9IHV0aWxzLnBhcnNlRXRoZXIodDFbMV0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3YWxsZXQucHVzaCh0MVswXSk7XG4gICAgICAgICAgICBhbW91bnQucHVzaCh2MS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRvdGFsdG9rZW5zICs9cGFyc2VJbnQodDFbMV0pO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidjFcIixhbW91bnQgKyBUb2tlbkFkZHJlc3MpO1xuICAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjaF9hbGxvd3MgPSBhd2FpdCBjaF9hcHByb3ZlKFRva2VuQWRkcmVzcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hfYWxsb3dzXCIsY2hfYWxsb3dzKTtcbiAgICAgICAgdHJ5e1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNlbmRlclNpbmdlci5kaXNwZXJzZVRva2VuKFRva2VuQWRkcmVzcyx3YWxsZXQsYW1vdW50KTtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKFwiaGFzaDpcIiArIHJlc3BvbnNlLmhhc2gpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gXG5cbiAgICB9XG5cblxuICAgIHJldHVybiAoICA8TGF5b3V0PlxuICAgICAgPEZvcm0gZXJyb3I9eyEhZXJyb01lc3NhZ2V9IHN1Y2Nlc3M9eyEhc3VjY2Vzc01lc3NhZ2V9IG9uU3VibWl0PXtoYW5kbGVTdWJsaXR9PlxuICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtTZWxlY3R9IGxhYmVsPSdDaGFpbicgb3B0aW9ucz17b3B0aW9uc30gcGxhY2Vob2xkZXI9J0NoYWluJy8+XG4gICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nVG9rZW4nIHZhbHVlPXtUb2tlbn0gcGxhY2Vob2xkZXI9J1Rva2VuIEFkZHJlc3MnIG9uQ2hhbmdlID0ge2V2ZW50PT5zZXRUb2tlbihldmVudC50YXJnZXQudmFsdWUpIH0vPlxuICAgICBcbiAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtUZXh0QXJlYX0gbGFiZWw9XCJXYWxldHMgVG9rZW5zXCIgdmFsdWU9e0FyZWFXQX0gcGxhY2Vob2xkZXI9J1dhbGV0cyBUb2tlbnMnIG9uQ2hhbmdlID0ge2V2ZW50PT5zZXRBcmVhV0EoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBwcmltYXJ5PlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgPE1lc3NhZ2Ugc3R5bGU9e3t3b3JkQnJlYWs6ICdicmVhay13b3JkJ319IGVycm9yIGhlYWRlciA9ICdFcnJvcjonIGNvbnRlbnQgPSB7ZXJyb01lc3NhZ2V9Lz4gXG4gICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyID0gJ3N1Y2Nlc3M6JyBjb250ZW50ID0ge3N1Y2Nlc3NNZXNzYWdlfS8+IFxuICAgICAgICA8L0Zvcm0+XG4gICAgPC9MYXlvdXQ+KTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IHNlbmRlcjsiXSwibmFtZXMiOlsidXRpbHMiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJTZWxlY3QiLCJUZXh0QXJlYSIsIkxheW91dCIsImRpc3BlcnNlIiwicHJvdmlkZXIiLCJjaF9hcHByb3ZlIiwic2VuZGVyIiwiVG9rZW4iLCJzZXRUb2tlbiIsIkFyZWFXQSIsInNldEFyZWFXQSIsImVycm9NZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiaGFuZGxlU3VibGl0IiwiZXZlbnQiLCJzaW5nZXIiLCJTZW5kZXJTaW5nZXIiLCJUb2tlbkFkZHJlc3MiLCJ3YWxsZXRzIiwid2FsbGV0IiwiYW1vdW50IiwidG90YWx0b2tlbnMiLCJjaF9hbGxvd3MiLCJyZXNwb25zZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0U2lnbmVyIiwiY29ubmVjdCIsInNwbGl0IiwiZm9yRWFjaCIsIncxIiwidDEiLCJ2MSIsInBhcnNlRXRoZXIiLCJwdXNoIiwidG9TdHJpbmciLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwZXJzZVRva2VuIiwiaGFzaCIsImVycm9yIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJvblN1Ym1pdCIsIkdyb3VwIiwiRmllbGQiLCJjb250cm9sIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIndpZHRocyIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibG9hZGluZyIsInByaW1hcnkiLCJzdHlsZSIsIndvcmRCcmVhayIsImhlYWRlciIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ }),

/***/ "./utils/ch_approve.js":
/*!*****************************!*\
  !*** ./utils/ch_approve.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar ch_approve = function() {\n    var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address) {\n        var abi, accounts, contract, responce;\n        return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    abi = [\n                        \"function allowance(address owner, address spender) external view returns (uint256)\"\n                    ];\n                    _ctx.next = 3;\n                    return ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                case 3:\n                    accounts = _ctx.sent;\n                    contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(address, abi, _provider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n                    _ctx.next = 7;\n                    return contract.allowance(accounts[0], _disperse__WEBPACK_IMPORTED_MODULE_1__[\"default\"].address);\n                case 7:\n                    responce = _ctx.sent;\n                    responce = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatEther(responce);\n                    return _ctx.abrupt(\"return\", responce);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function ch_approve(address) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (ch_approve);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jaF9hcHByb3ZlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDRztBQUNBO0FBRW5DLElBQU1HLFVBQVU7ZUFBRywyS0FBTUMsT0FBTyxFQUFLO1lBRTNCQyxHQUFHLEVBQ0hDLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxRQUFROzs7O29CQUhSSCxHQUFHLEdBQUc7d0JBQUMsb0ZBQW9GO3FCQUFDLENBQUM7OzJCQUM1RUksUUFBUSxDQUFDQyxPQUFPLENBQUM7d0JBQUNDLE1BQU0sRUFBRSxxQkFBcUI7cUJBQUMsQ0FBQzs7b0JBQWxFTCxRQUFRLFlBQTBEO29CQUNsRUMsUUFBUSxHQUFHLElBQUlQLG1EQUFlLENBQUNJLE9BQU8sRUFBRUMsR0FBRyxFQUFFSCxpREFBUSxDQUFDLENBQUM7OzJCQUN0Q0ssUUFBUSxDQUFDTSxTQUFTLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQ0wseURBQWdCLENBQUM7O29CQUFqRU8sUUFBUSxZQUF5RDtvQkFDdkVBLFFBQVEsR0FBR1IsNERBQXdCLENBQUNRLFFBQVEsQ0FBQyxDQUFDO2lEQUV0Q0EsUUFBUTs7Ozs7O0tBQ25CO29CQVRLTCxVQUFVLENBQVNDLE9BQU87OztHQVMvQjtBQUVELCtEQUFlRCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY2hfYXBwcm92ZS5qcz9hMDM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBkaXNwZXJzZSBmcm9tIFwiLi4vZGlzcGVyc2VcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcblxuY29uc3QgY2hfYXBwcm92ZSA9IGFzeW5jKGFkZHJlc3MpID0+IHtcblxuICAgIGNvbnN0IGFiaSA9IFtcImZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1NilcIl07XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wifSk7XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGFkZHJlc3MsIGFiaSwgcHJvdmlkZXIpO1xuICAgIGNvbnN0IHJlc3BvbmNlID0gYXdhaXQgY29udHJhY3QuYWxsb3dhbmNlKGFjY291bnRzWzBdLGRpc3BlcnNlLmFkZHJlc3MpO1xuICAgIHJlc3BvbmNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHJlc3BvbmNlKTtcbiAgICBcbiAgICByZXR1cm4gKHJlc3BvbmNlKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IGNoX2FwcHJvdmU7Il0sIm5hbWVzIjpbImV0aGVycyIsImRpc3BlcnNlIiwicHJvdmlkZXIiLCJjaF9hcHByb3ZlIiwiYWRkcmVzcyIsImFiaSIsImFjY291bnRzIiwiY29udHJhY3QiLCJyZXNwb25jZSIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsIkNvbnRyYWN0IiwiYWxsb3dhbmNlIiwidXRpbHMiLCJmb3JtYXRFdGhlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/ch_approve.js\n");

/***/ })

});