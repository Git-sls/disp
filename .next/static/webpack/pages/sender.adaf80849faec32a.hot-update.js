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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref[0], setToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref1[0], setAreaWA = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref2[0], setErrorMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref3[0], setSuccessMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref4[0], setLoading = ref4[1];\n    var TokenAddress = Token;\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    function f() {\n        return _f.apply(this, arguments);\n    }\n    function _f() {\n        _f = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var getAddress, ch_allows;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return TokenAddress;\n                    case 2:\n                        getAddress = _ctx.sent;\n                        if (TokenAddress) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        setErrorMessage(\"\\u041F\\u0443\\u0441\\u0442\\u043E\\u0439 \\u0430\\u0434\\u0440\\u0435\\u0441 token\");\n                        return _ctx.abrupt(\"return\");\n                    case 8:\n                        _ctx.next = 10;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 10:\n                        ch_allows = _ctx.sent;\n                        console.log(\"ch_allows\", ch_allows);\n                    case 12:\n                        ;\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _f.apply(this, arguments);\n    }\n    f();\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, wallets, wallet, amount, totaltokens, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_7__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 21:\n                        _ctx.prev = 21;\n                        setLoading(false);\n                        return _ctx.finish(21);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17,\n                    21,\n                    24\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n            error: !!erroMessage,\n            success: !!successMessage,\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Select,\n                        label: \"Chain\",\n                        options: options,\n                        placeholder: \"Chain\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 89,\n                        columnNumber: 7\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 88,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input,\n                            label: \"Token\",\n                            value: Token,\n                            placeholder: \"Token Address\",\n                            onChange: function(event) {\n                                return setToken(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.TextArea,\n                            label: \"Walets Tokens\",\n                            value: AreaWA,\n                            placeholder: \"Walets Tokens\",\n                            onChange: function(event) {\n                                return setAreaWA(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                    loading: isLoading,\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                    style: {\n                        wordBreak: \"break-word\"\n                    },\n                    error: true,\n                    header: \"Error:\",\n                    content: erroMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                    success: true,\n                    header: \"success:\",\n                    content: successMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 86,\n        columnNumber: 15\n    }, _this);\n};\n_s(sender, \"m54akTrsXMBfn6yNj3EmRHxI4wU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZW5kZXIuanM/ZGZlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1dGlscyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBNZXNzYWdlLCBTZWxlY3QsIFRleHRBcmVhIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGRpc3BlcnNlIGZyb20gXCIuLi9kaXNwZXJzZVwiO1xuaW1wb3J0IHByb3ZpZGVyIGZyb20gXCIuLi9wcm92aWRlclwiO1xuaW1wb3J0IGNoX2FwcHJvdmUgZnJvbSBcIi4uL3V0aWxzL2NoX2FwcHJvdmVcIjtcblxuXG5jb25zdCBzZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW1Rva2VuLHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtBcmVhV0Esc2V0QXJlYVdBXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW2Vycm9NZXNzYWdlLHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc3VjY2Vzc01lc3NhZ2Usc2V0U3VjY2Vzc01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFRva2VuQWRkcmVzcyA9IFRva2VuO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgeyBrZXk6ICdFJywgdGV4dDogJ0VUSCcsIHZhbHVlOiAnZXRoJyB9LFxuICAgICAgICB7IGtleTogJ0InLCB0ZXh0OiAnQlNDJywgdmFsdWU6ICdic2MnIH0sXG4gICAgICAgIHsga2V5OiAnTScsIHRleHQ6ICdNQVRJQycsIHZhbHVlOiAnbWF0aWMnIH0sXG4gICAgICBdXG4gICAgICBhc3luYyBmdW5jdGlvbiBmKCkge1xuICAgICAgICBjb25zdCBnZXRBZGRyZXNzID0gYXdhaXQgVG9rZW5BZGRyZXNzXG4gICAgICAgIGlmKCFUb2tlbkFkZHJlc3Mpe1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi0J/Rg9GB0YLQvtC5INCw0LTRgNC10YEgdG9rZW5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgIGNvbnN0IGNoX2FsbG93cyA9IGF3YWl0IGNoX2FwcHJvdmUoVG9rZW5BZGRyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaF9hbGxvd3NcIixjaF9hbGxvd3MpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9XG5mKCk7XG5cblxuICAgIGNvbnN0IGhhbmRsZVN1YmxpdCA9YXN5bmMgKGV2ZW50KSA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcblxuICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgU2VuZGVyU2luZ2VyID0gZGlzcGVyc2UuY29ubmVjdChzaW5nZXIpO1xuXG5cblxuICAgICAgXG4gICAgICAgIGNvbnN0IHdhbGxldHMgPSBBcmVhV0Euc3BsaXQoJ1xcbicpOyBcbiAgICAgICAgY29uc3Qgd2FsbGV0PVtdO1xuICAgICAgICBjb25zdCBhbW91bnQ9W107XG4gICAgICAgIGNvbnN0IHRvdGFsdG9rZW5zID0wO1xuICAgICBcblxuXG4gICAgICAgIHdhbGxldHMuZm9yRWFjaCh3MSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0MT13MS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgY29uc3QgdjEgPSB1dGlscy5wYXJzZUV0aGVyKHQxWzFdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FsbGV0LnB1c2godDFbMF0pO1xuICAgICAgICAgICAgYW1vdW50LnB1c2godjEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0b3RhbHRva2VucyArPXBhcnNlSW50KHQxWzFdKTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInYxXCIsYW1vdW50ICsgVG9rZW5BZGRyZXNzKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0cnl7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2VuZGVyU2luZ2VyLmRpc3BlcnNlVG9rZW4oVG9rZW5BZGRyZXNzLHdhbGxldCxhbW91bnQpO1xuICAgICAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJoYXNoOlwiICsgcmVzcG9uc2UuaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiBcblxuICAgIH1cblxuXG4gICAgcmV0dXJuICggIDxMYXlvdXQ+XG4gICAgICA8Rm9ybSBlcnJvcj17ISFlcnJvTWVzc2FnZX0gc3VjY2Vzcz17ISFzdWNjZXNzTWVzc2FnZX0gb25TdWJtaXQ9e2hhbmRsZVN1YmxpdH0+XG4gICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J0NoYWluJyBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj0nQ2hhaW4nLz5cbiAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdUb2tlbicgdmFsdWU9e1Rva2VufSBwbGFjZWhvbGRlcj0nVG9rZW4gQWRkcmVzcycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldFRva2VuKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XG4gICAgIFxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1RleHRBcmVhfSBsYWJlbD1cIldhbGV0cyBUb2tlbnNcIiB2YWx1ZT17QXJlYVdBfSBwbGFjZWhvbGRlcj0nV2FsZXRzIFRva2Vucycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldEFyZWFXQShldmVudC50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtpc0xvYWRpbmd9IHByaW1hcnk+U2VuZDwvQnV0dG9uPlxuICAgICAgICA8TWVzc2FnZSBzdHlsZT17e3dvcmRCcmVhazogJ2JyZWFrLXdvcmQnfX0gZXJyb3IgaGVhZGVyID0gJ0Vycm9yOicgY29udGVudCA9IHtlcnJvTWVzc2FnZX0vPiBcbiAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXIgPSAnc3VjY2VzczonIGNvbnRlbnQgPSB7c3VjY2Vzc01lc3NhZ2V9Lz4gXG4gICAgICAgIDwvRm9ybT5cbiAgICA8L0xheW91dD4pO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgc2VuZGVyOyJdLCJuYW1lcyI6WyJ1dGlscyIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIlNlbGVjdCIsIlRleHRBcmVhIiwiTGF5b3V0IiwiZGlzcGVyc2UiLCJwcm92aWRlciIsImNoX2FwcHJvdmUiLCJzZW5kZXIiLCJUb2tlbiIsInNldFRva2VuIiwiQXJlYVdBIiwic2V0QXJlYVdBIiwiZXJyb01lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsIlRva2VuQWRkcmVzcyIsIm9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJmIiwiZ2V0QWRkcmVzcyIsImNoX2FsbG93cyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJsaXQiLCJldmVudCIsInNpbmdlciIsIlNlbmRlclNpbmdlciIsIndhbGxldHMiLCJ3YWxsZXQiLCJhbW91bnQiLCJ0b3RhbHRva2VucyIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJnZXRTaWduZXIiLCJjb25uZWN0Iiwic3BsaXQiLCJmb3JFYWNoIiwidzEiLCJ0MSIsInYxIiwicGFyc2VFdGhlciIsInB1c2giLCJ0b1N0cmluZyIsInBhcnNlSW50IiwiZGlzcGVyc2VUb2tlbiIsImhhc2giLCJlcnJvciIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwib25TdWJtaXQiLCJHcm91cCIsIkZpZWxkIiwiY29udHJvbCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ3aWR0aHMiLCJvbkNoYW5nZSIsInRhcmdldCIsImxvYWRpbmciLCJwcmltYXJ5Iiwic3R5bGUiLCJ3b3JkQnJlYWsiLCJoZWFkZXIiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});