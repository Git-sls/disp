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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref[0], setToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref1[0], setAreaWA = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref2[0], setErrorMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref3[0], setSuccessMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref4[0], setLoading = ref4[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, TokenAddress, wallets, wallet, amount, totaltokens, ch_allows, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        TokenAddress = Token;\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        if (TokenAddress) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        setErrorMessage(\"\\u041F\\u0443\\u0441\\u0442\\u043E\\u0439 \\u0430\\u0434\\u0440\\u0435\\u0441 token\");\n                        return _ctx.abrupt(\"return\");\n                    case 13:\n                        ch_allows = (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                        console.log(\"ch_allows\", ch_allows);\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_7__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 16;\n                        _ctx.next = 19;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 19:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 27;\n                        break;\n                    case 23:\n                        _ctx.prev = 23;\n                        _ctx.t0 = _ctx[\"catch\"](16);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 27:\n                        _ctx.prev = 27;\n                        setLoading(false);\n                        return _ctx.finish(27);\n                    case 30:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    16,\n                    23,\n                    27,\n                    30\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n            error: !!erroMessage,\n            success: !!successMessage,\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Select,\n                        label: \"Chain\",\n                        options: options,\n                        placeholder: \"Chain\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 81,\n                        columnNumber: 7\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 80,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input,\n                            label: \"Token\",\n                            value: Token,\n                            placeholder: \"Token Address\",\n                            onChange: function(event) {\n                                return setToken(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.TextArea,\n                            label: \"Walets Tokens\",\n                            value: AreaWA,\n                            placeholder: \"Walets Tokens\",\n                            onChange: function(event) {\n                                return setAreaWA(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                    loading: isLoading,\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                    style: {\n                        wordBreak: \"break-word\"\n                    },\n                    error: true,\n                    header: \"Error:\",\n                    content: erroMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                    success: true,\n                    header: \"success:\",\n                    content: successMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 78,\n        columnNumber: 15\n    }, _this);\n};\n_s(sender, \"m54akTrsXMBfn6yNj3EmRHxI4wU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPOzRCQUFDbkMsS0FBSyxFQUFFYixLQUFLOzRCQUFFaUQsV0FBVyxFQUFDLGVBQWU7NEJBQUNFLFFBQVEsRUFBSXBDLFNBQUFBLEtBQUs7dUNBQUVkLFFBQVEsQ0FBQ2MsS0FBSyxDQUFDcUMsTUFBTSxDQUFDdkMsS0FBSyxDQUFDOzZCQUFBOzs7OztpQ0FBSTtzQ0FFdkksOERBQUN2Qix5REFBVTs0QkFBQ3lELE9BQU8sRUFBRXJELHVEQUFROzRCQUFFc0QsS0FBSyxFQUFDLGVBQWU7NEJBQUNuQyxLQUFLLEVBQUVYLE1BQU07NEJBQUUrQyxXQUFXLEVBQUMsZUFBZTs0QkFBQ0UsUUFBUSxFQUFJcEMsU0FBQUEsS0FBSzt1Q0FBRVosU0FBUyxDQUFDWSxLQUFLLENBQUNxQyxNQUFNLENBQUN2QyxLQUFLLENBQUM7NkJBQUE7Ozs7O2lDQUFHOzs7Ozs7eUJBR3hJOzhCQUNiLDhEQUFDeEIscURBQU07b0JBQUNnRSxPQUFPLEVBQUU3QyxTQUFTO29CQUFFOEMsT0FBTzs4QkFBQyxNQUFJOzs7Ozt5QkFBUzs4QkFDakQsOERBQUM5RCxzREFBTztvQkFBQytELEtBQUssRUFBRTt3QkFBQ0MsU0FBUyxFQUFFLFlBQVk7cUJBQUM7b0JBQUVmLEtBQUs7b0JBQUNnQixNQUFNLEVBQUcsUUFBUTtvQkFBQ0MsT0FBTyxFQUFJdEQsV0FBVzs7Ozs7eUJBQUc7OEJBQzVGLDhEQUFDWixzREFBTztvQkFBQ21ELE9BQU87b0JBQUNjLE1BQU0sRUFBRyxVQUFVO29CQUFDQyxPQUFPLEVBQUlwRCxjQUFjOzs7Ozt5QkFBRzs7Ozs7O2lCQUMxRDs7Ozs7YUFDRixDQUFFO0NBQ2Q7R0FyRktQLE1BQU07QUF1RlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZW5kZXIuanM/ZGZlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1dGlscyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBNZXNzYWdlLCBTZWxlY3QsIFRleHRBcmVhIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGRpc3BlcnNlIGZyb20gXCIuLi9kaXNwZXJzZVwiO1xuaW1wb3J0IHByb3ZpZGVyIGZyb20gXCIuLi9wcm92aWRlclwiO1xuaW1wb3J0IGNoX2FwcHJvdmUgZnJvbSBcIi4uL3V0aWxzL2NoX2FwcHJvdmVcIjtcblxuXG5jb25zdCBzZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW1Rva2VuLHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtBcmVhV0Esc2V0QXJlYVdBXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW2Vycm9NZXNzYWdlLHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc3VjY2Vzc01lc3NhZ2Usc2V0U3VjY2Vzc01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IGtleTogJ0UnLCB0ZXh0OiAnRVRIJywgdmFsdWU6ICdldGgnIH0sXG4gICAgICAgIHsga2V5OiAnQicsIHRleHQ6ICdCU0MnLCB2YWx1ZTogJ2JzYycgfSxcbiAgICAgICAgeyBrZXk6ICdNJywgdGV4dDogJ01BVElDJywgdmFsdWU6ICdtYXRpYycgfSxcbiAgICAgIF1cblxuICAgIGNvbnN0IGhhbmRsZVN1YmxpdCA9YXN5bmMgKGV2ZW50KSA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcblxuICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgU2VuZGVyU2luZ2VyID0gZGlzcGVyc2UuY29ubmVjdChzaW5nZXIpO1xuXG5cblxuICAgICAgICBjb25zdCBUb2tlbkFkZHJlc3MgPSBUb2tlbjtcbiAgICAgICAgY29uc3Qgd2FsbGV0cyA9IEFyZWFXQS5zcGxpdCgnXFxuJyk7IFxuICAgICAgICBjb25zdCB3YWxsZXQ9W107XG4gICAgICAgIGNvbnN0IGFtb3VudD1bXTtcbiAgICAgICAgY29uc3QgdG90YWx0b2tlbnMgPTA7XG4gICAgIFxuICAgICAgICBpZighVG9rZW5BZGRyZXNzKXtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcItCf0YPRgdGC0L7QuSDQsNC00YDQtdGBIHRva2VuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hfYWxsb3dzID0gY2hfYXBwcm92ZShUb2tlbkFkZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoX2FsbG93c1wiLGNoX2FsbG93cyk7XG5cbiAgICAgICAgd2FsbGV0cy5mb3JFYWNoKHcxID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHQxPXcxLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBjb25zdCB2MSA9IHV0aWxzLnBhcnNlRXRoZXIodDFbMV0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3YWxsZXQucHVzaCh0MVswXSk7XG4gICAgICAgICAgICBhbW91bnQucHVzaCh2MS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRvdGFsdG9rZW5zICs9cGFyc2VJbnQodDFbMV0pO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidjFcIixhbW91bnQgKyBUb2tlbkFkZHJlc3MpO1xuICAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRyeXtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTZW5kZXJTaW5nZXIuZGlzcGVyc2VUb2tlbihUb2tlbkFkZHJlc3Msd2FsbGV0LGFtb3VudCk7XG4gICAgICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcImhhc2g6XCIgKyByZXNwb25zZS5oYXNoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfWZpbmFsbHl7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuIFxuXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCAgPExheW91dD5cbiAgICAgIDxGb3JtIGVycm9yPXshIWVycm9NZXNzYWdlfSBzdWNjZXNzPXshIXN1Y2Nlc3NNZXNzYWdlfSBvblN1Ym1pdD17aGFuZGxlU3VibGl0fT5cbiAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17U2VsZWN0fSBsYWJlbD0nQ2hhaW4nIG9wdGlvbnM9e29wdGlvbnN9IHBsYWNlaG9sZGVyPSdDaGFpbicvPlxuICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9J2VxdWFsJz5cbiAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtJbnB1dH0gbGFiZWw9J1Rva2VuJyB2YWx1ZT17VG9rZW59IHBsYWNlaG9sZGVyPSdUb2tlbiBBZGRyZXNzJyBvbkNoYW5nZSA9IHtldmVudD0+c2V0VG9rZW4oZXZlbnQudGFyZ2V0LnZhbHVlKSB9Lz5cbiAgICAgXG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17VGV4dEFyZWF9IGxhYmVsPVwiV2FsZXRzIFRva2Vuc1wiIHZhbHVlPXtBcmVhV0F9IHBsYWNlaG9sZGVyPSdXYWxldHMgVG9rZW5zJyBvbkNoYW5nZSA9IHtldmVudD0+c2V0QXJlYVdBKGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2lzTG9hZGluZ30gcHJpbWFyeT5TZW5kPC9CdXR0b24+XG4gICAgICAgIDxNZXNzYWdlIHN0eWxlPXt7d29yZEJyZWFrOiAnYnJlYWstd29yZCd9fSBlcnJvciBoZWFkZXIgPSAnRXJyb3I6JyBjb250ZW50ID0ge2Vycm9NZXNzYWdlfS8+IFxuICAgICAgICA8TWVzc2FnZSBzdWNjZXNzIGhlYWRlciA9ICdzdWNjZXNzOicgY29udGVudCA9IHtzdWNjZXNzTWVzc2FnZX0vPiBcbiAgICAgICAgPC9Gb3JtPlxuICAgIDwvTGF5b3V0Pik7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBzZW5kZXI7Il0sIm5hbWVzIjpbInV0aWxzIiwidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJMYXlvdXQiLCJkaXNwZXJzZSIsInByb3ZpZGVyIiwiY2hfYXBwcm92ZSIsInNlbmRlciIsIlRva2VuIiwic2V0VG9rZW4iLCJBcmVhV0EiLCJzZXRBcmVhV0EiLCJlcnJvTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsImhhbmRsZVN1YmxpdCIsImV2ZW50Iiwic2luZ2VyIiwiU2VuZGVyU2luZ2VyIiwiVG9rZW5BZGRyZXNzIiwid2FsbGV0cyIsIndhbGxldCIsImFtb3VudCIsInRvdGFsdG9rZW5zIiwiY2hfYWxsb3dzIiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsImdldFNpZ25lciIsImNvbm5lY3QiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwidzEiLCJ0MSIsInYxIiwicGFyc2VFdGhlciIsInB1c2giLCJ0b1N0cmluZyIsInBhcnNlSW50IiwiZGlzcGVyc2VUb2tlbiIsImhhc2giLCJlcnJvciIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwib25TdWJtaXQiLCJHcm91cCIsIkZpZWxkIiwiY29udHJvbCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ3aWR0aHMiLCJvbkNoYW5nZSIsInRhcmdldCIsImxvYWRpbmciLCJwcmltYXJ5Iiwic3R5bGUiLCJ3b3JkQnJlYWsiLCJoZWFkZXIiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});