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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\n/* harmony import */ var _utils_try_approve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/try_approve */ \"./utils/try_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), CheckApprove = ref[0], setCheckApprove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref1[0], setToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref2[0], setAreaWA = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref4[0], setSuccessMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref5[0], setLoading = ref5[1];\n    var TokenAddress = Token;\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    function chApprove() {\n        return _chApprove.apply(this, arguments);\n    }\n    function _chApprove() {\n        _chApprove = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ch_allows;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (TokenAddress) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        setErrorMessage(\"\\u041F\\u0443\\u0441\\u0442\\u043E\\u0439 \\u0430\\u0434\\u0440\\u0435\\u0441 token\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 7:\n                        ch_allows = _ctx.sent;\n                        console.log(\"ch_allows\", ch_allows);\n                        if (ch_allows <= 0 && CheckApprove == false) {\n                            setCheckApprove(true);\n                            console.log(\"CheckApprove\", CheckApprove);\n                        }\n                    case 10:\n                        ;\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _chApprove.apply(this, arguments);\n    }\n    if (Token) {\n        chApprove();\n    }\n    var handApprove = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var ch_allows, approve;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        if (!TokenAddress) {\n                            _ctx.next = 24;\n                            break;\n                        }\n                        _ctx.next = 6;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 6:\n                        ch_allows = _ctx.sent;\n                        if (!(ch_allows <= 0)) {\n                            _ctx.next = 22;\n                            break;\n                        }\n                        _ctx.prev = 8;\n                        _ctx.next = 11;\n                        return (0,_utils_try_approve__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TokenAddress, \"999999999999999999\".toString());\n                    case 11:\n                        approve = _ctx.sent;\n                        console.log(\"approve\", approve);\n                        _ctx.next = 19;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](8);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 19:\n                        _ctx.prev = 19;\n                        setLoading(false);\n                        return _ctx.finish(19);\n                    case 22:\n                        _ctx.next = 25;\n                        break;\n                    case 24:\n                        return _ctx.abrupt(\"return\");\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    8,\n                    15,\n                    19,\n                    22\n                ]\n            ]);\n        }));\n        return function handApprove(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, wallets, wallet, amount, totaltokens, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 21:\n                        _ctx.prev = 21;\n                        setLoading(false);\n                        return _ctx.finish(21);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17,\n                    21,\n                    24\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {\n                error: !!erroMessage,\n                success: !!successMessage,\n                onSubmit: handleSublit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 125,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 124,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Input,\n                                label: \"Token\",\n                                value: Token,\n                                placeholder: \"Token Address\",\n                                onChange: function(event) {\n                                    return setToken(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.TextArea,\n                                label: \"Walets Tokens\",\n                                value: AreaWA,\n                                placeholder: \"Walets Tokens\",\n                                onChange: function(event) {\n                                    return setAreaWA(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        style: {\n                            wordBreak: \"break-word\"\n                        },\n                        error: true,\n                        header: \"Error:\",\n                        content: erroMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        success: true,\n                        header: \"success:\",\n                        content: successMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"0xa34ddb7393706CB3C8c4232839DCc033ECFbD0a5\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 142,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 122,\n        columnNumber: 15\n    }, _this);\n};\n_s(sender, \"H6ipzi2B0GJRgfF4CNlqGPL9eNg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBRVAsOERBQUMwRCxHQUFDOzBCQUFDLDRDQUEwQzs7Ozs7cUJBQUk7Ozs7OzthQUk1QyxDQUFFO0NBQ2Q7R0F4SUtuRSxNQUFNO0FBMElaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VuZGVyLmpzP2RmZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgU2VsZWN0LCBUZXh0QXJlYSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBkaXNwZXJzZSBmcm9tIFwiLi4vZGlzcGVyc2VcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCBjaF9hcHByb3ZlIGZyb20gXCIuLi91dGlscy9jaF9hcHByb3ZlXCI7XG5pbXBvcnQgdHJ5X2FwcHJvdmUgZnJvbSBcIi4uL3V0aWxzL3RyeV9hcHByb3ZlXCI7XG5cblxuY29uc3Qgc2VuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtDaGVja0FwcHJvdmUsc2V0Q2hlY2tBcHByb3ZlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW1Rva2VuLHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtBcmVhV0Esc2V0QXJlYVdBXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW2Vycm9NZXNzYWdlLHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc3VjY2Vzc01lc3NhZ2Usc2V0U3VjY2Vzc01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFRva2VuQWRkcmVzcyA9IFRva2VuO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgeyBrZXk6ICdFJywgdGV4dDogJ0VUSCcsIHZhbHVlOiAnZXRoJyB9LFxuICAgICAgICB7IGtleTogJ0InLCB0ZXh0OiAnQlNDJywgdmFsdWU6ICdic2MnIH0sXG4gICAgICAgIHsga2V5OiAnTScsIHRleHQ6ICdNQVRJQycsIHZhbHVlOiAnbWF0aWMnIH0sXG4gICAgICBdXG5cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGNoQXBwcm92ZSgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmKCFUb2tlbkFkZHJlc3Mpe1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi0J/Rg9GB0YLQvtC5INCw0LTRgNC10YEgdG9rZW5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgIGNvbnN0IGNoX2FsbG93cyA9IGF3YWl0IGNoX2FwcHJvdmUoVG9rZW5BZGRyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaF9hbGxvd3NcIixjaF9hbGxvd3MpO1xuICAgICAgICBpZiAoY2hfYWxsb3dzIDw9IDAgJiYgQ2hlY2tBcHByb3ZlPT1mYWxzZSl7XG4gICAgICAgICAgICBzZXRDaGVja0FwcHJvdmUodHJ1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNrQXBwcm92ZVwiLENoZWNrQXBwcm92ZSk7XG4gICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihUb2tlbil7XG4gICAgICAgIGNoQXBwcm92ZSgpO1xuICAgIH1cblxuXG4gICAgY29uc3QgaGFuZEFwcHJvdmUgPSBhc3luYyhldmVudCkgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJcIik7XG4gICAgICAgIFxuICAgICAgICBpZihUb2tlbkFkZHJlc3Mpe1xuICAgICAgICAgICAgY29uc3QgY2hfYWxsb3dzID0gYXdhaXQgY2hfYXBwcm92ZShUb2tlbkFkZHJlc3MpO1xuICAgICAgICAgICAgaWYgKGNoX2FsbG93cyA8PSAwKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBhcHByb3ZlID0gYXdhaXQgdHJ5X2FwcHJvdmUoVG9rZW5BZGRyZXNzLFwiOTk5OTk5OTk5OTk5OTk5OTk5XCIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcHJvdmVcIixhcHByb3ZlKTtcbiAgICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVTdWJsaXQgPWFzeW5jIChldmVudCkgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJcIik7XG5cbiAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IFNlbmRlclNpbmdlciA9IGRpc3BlcnNlLmNvbm5lY3Qoc2luZ2VyKTtcblxuXG5cbiAgICAgIFxuICAgICAgICBjb25zdCB3YWxsZXRzID0gQXJlYVdBLnNwbGl0KCdcXG4nKTsgXG4gICAgICAgIGNvbnN0IHdhbGxldD1bXTtcbiAgICAgICAgY29uc3QgYW1vdW50PVtdO1xuICAgICAgICBjb25zdCB0b3RhbHRva2VucyA9MDtcbiAgICAgXG5cblxuICAgICAgICB3YWxsZXRzLmZvckVhY2godzEgPT4ge1xuICAgICAgICAgICAgY29uc3QgdDE9dzEuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGNvbnN0IHYxID0gdXRpbHMucGFyc2VFdGhlcih0MVsxXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhbGxldC5wdXNoKHQxWzBdKTtcbiAgICAgICAgICAgIGFtb3VudC5wdXNoKHYxLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgdG90YWx0b2tlbnMgKz1wYXJzZUludCh0MVsxXSk7XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ2MVwiLGFtb3VudCArIFRva2VuQWRkcmVzcyk7XG4gICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdHJ5e1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNlbmRlclNpbmdlci5kaXNwZXJzZVRva2VuKFRva2VuQWRkcmVzcyx3YWxsZXQsYW1vdW50KTtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKFwiaGFzaDpcIiArIHJlc3BvbnNlLmhhc2gpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gXG5cbiAgICB9XG5cblxuICAgIHJldHVybiAoICA8TGF5b3V0PlxuICAgICAgPEZvcm0gZXJyb3I9eyEhZXJyb01lc3NhZ2V9IHN1Y2Nlc3M9eyEhc3VjY2Vzc01lc3NhZ2V9IG9uU3VibWl0PXtoYW5kbGVTdWJsaXR9PlxuICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtTZWxlY3R9IGxhYmVsPSdDaGFpbicgb3B0aW9ucz17b3B0aW9uc30gcGxhY2Vob2xkZXI9J0NoYWluJy8+XG4gICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nVG9rZW4nIHZhbHVlPXtUb2tlbn0gcGxhY2Vob2xkZXI9J1Rva2VuIEFkZHJlc3MnIG9uQ2hhbmdlID0ge2V2ZW50PT5zZXRUb2tlbihldmVudC50YXJnZXQudmFsdWUpIH0vPlxuICAgICBcbiAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtUZXh0QXJlYX0gbGFiZWw9XCJXYWxldHMgVG9rZW5zXCIgdmFsdWU9e0FyZWFXQX0gcGxhY2Vob2xkZXI9J1dhbGV0cyBUb2tlbnMnIG9uQ2hhbmdlID0ge2V2ZW50PT5zZXRBcmVhV0EoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBwcmltYXJ5PlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBwcmltYXJ5IHR5cGU9J3N1Ym1pdCdvbkNsaWNrPXtoYW5kQXBwcm92ZX0+QXBwcm92ZTwvQnV0dG9uPlxuICAgICAgICBcbiAgICAgICAgPE1lc3NhZ2Ugc3R5bGU9e3t3b3JkQnJlYWs6ICdicmVhay13b3JkJ319IGVycm9yIGhlYWRlciA9ICdFcnJvcjonIGNvbnRlbnQgPSB7ZXJyb01lc3NhZ2V9Lz4gXG4gICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyID0gJ3N1Y2Nlc3M6JyBjb250ZW50ID0ge3N1Y2Nlc3NNZXNzYWdlfS8+IFxuICAgICAgICA8L0Zvcm0+XG4gICAgIFxuICAgICAgICA8cD4weGEzNGRkYjczOTM3MDZDQjNDOGM0MjMyODM5RENjMDMzRUNGYkQwYTU8L3A+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgPC9MYXlvdXQ+KTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IHNlbmRlcjsiXSwibmFtZXMiOlsidXRpbHMiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJTZWxlY3QiLCJUZXh0QXJlYSIsIkxheW91dCIsImRpc3BlcnNlIiwicHJvdmlkZXIiLCJjaF9hcHByb3ZlIiwidHJ5X2FwcHJvdmUiLCJzZW5kZXIiLCJDaGVja0FwcHJvdmUiLCJzZXRDaGVja0FwcHJvdmUiLCJUb2tlbiIsInNldFRva2VuIiwiQXJlYVdBIiwic2V0QXJlYVdBIiwiZXJyb01lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsIlRva2VuQWRkcmVzcyIsIm9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJjaEFwcHJvdmUiLCJjaF9hbGxvd3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZEFwcHJvdmUiLCJldmVudCIsImFwcHJvdmUiLCJwcmV2ZW50RGVmYXVsdCIsInRvU3RyaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlU3VibGl0Iiwic2luZ2VyIiwiU2VuZGVyU2luZ2VyIiwid2FsbGV0cyIsIndhbGxldCIsImFtb3VudCIsInRvdGFsdG9rZW5zIiwicmVzcG9uc2UiLCJnZXRTaWduZXIiLCJjb25uZWN0Iiwic3BsaXQiLCJmb3JFYWNoIiwidzEiLCJ0MSIsInYxIiwicGFyc2VFdGhlciIsInB1c2giLCJwYXJzZUludCIsImRpc3BlcnNlVG9rZW4iLCJoYXNoIiwic3VjY2VzcyIsIm9uU3VibWl0IiwiR3JvdXAiLCJGaWVsZCIsImNvbnRyb2wiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwid2lkdGhzIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsb2FkaW5nIiwicHJpbWFyeSIsInR5cGUiLCJvbkNsaWNrIiwic3R5bGUiLCJ3b3JkQnJlYWsiLCJoZWFkZXIiLCJjb250ZW50IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});