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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\n/* harmony import */ var _utils_try_approve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/try_approve */ \"./utils/try_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), CheckApprove = ref[0], setCheckApprove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref1[0], setToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref2[0], setAreaWA = ref2[1];\n    var stoper1 = true;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref4[0], setSuccessMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref5[0], setLoading = ref5[1];\n    var TokenAddress = Token;\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    if (TokenAddress && stoper1) {\n        checkers();\n    }\n    function checkers() {\n        return _checkers.apply(this, arguments);\n    }\n    function _checkers() {\n        _checkers = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ch_allows;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(stoper1);\n                        if (!(TokenAddress.length === 42)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 4:\n                        ch_allows = _ctx.sent;\n                        console.log(\"ch_allows\", ch_allows);\n                        if (ch_allows <= 0) {\n                            setCheckApprove(true);\n                            console.log(\"CheckApprove\", CheckApprove);\n                        } else {\n                            setErrorMessage(\"\\u042D\\u0442\\u043E \\u043D\\u0435 \\u0430\\u0434\\u0440\\u0435\\u0441 \\u0442\\u043E\\u043A\\u0435\\u043D\\u0430\");\n                            stoper1 = false;\n                        }\n                    case 7:\n                        ;\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkers.apply(this, arguments);\n    }\n    var handApprove = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var ch_allows, approve;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        if (!TokenAddress) {\n                            _ctx.next = 24;\n                            break;\n                        }\n                        _ctx.next = 6;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 6:\n                        ch_allows = _ctx.sent;\n                        if (!(ch_allows <= 0)) {\n                            _ctx.next = 22;\n                            break;\n                        }\n                        _ctx.prev = 8;\n                        _ctx.next = 11;\n                        return (0,_utils_try_approve__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TokenAddress, \"999999999999999999\".toString());\n                    case 11:\n                        approve = _ctx.sent;\n                        console.log(\"approve\", approve);\n                        _ctx.next = 19;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](8);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 19:\n                        _ctx.prev = 19;\n                        setLoading(false);\n                        return _ctx.finish(19);\n                    case 22:\n                        _ctx.next = 25;\n                        break;\n                    case 24:\n                        return _ctx.abrupt(\"return\");\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    8,\n                    15,\n                    19,\n                    22\n                ]\n            ]);\n        }));\n        return function handApprove(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, wallets, wallet, amount, totaltokens, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 21:\n                        _ctx.prev = 21;\n                        setLoading(false);\n                        return _ctx.finish(21);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17,\n                    21,\n                    24\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {\n                error: !!erroMessage,\n                success: !!successMessage,\n                onSubmit: handleSublit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 138,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 137,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Input,\n                                label: \"Token\",\n                                value: Token,\n                                placeholder: \"Token Address\",\n                                onChange: function(event) {\n                                    return setToken(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.TextArea,\n                                label: \"Walets Tokens\",\n                                value: AreaWA,\n                                placeholder: \"Walets Tokens\",\n                                onChange: function(event) {\n                                    return setAreaWA(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, _this),\n                    CheckApprove ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 149,\n                        columnNumber: 23\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        disabled: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        style: {\n                            wordBreak: \"break-word\"\n                        },\n                        error: true,\n                        header: \"Error:\",\n                        content: erroMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        success: true,\n                        header: \"success:\",\n                        content: successMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"0xa34ddb7393706CB3C8c4232839DCc033ECFbD0a5\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 156,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 135,\n        columnNumber: 15\n    }, _this);\n};\n_s(sender, \"mKbv1S68ahQUlUzoa1+71N+0720=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFFBQVFDO3dCQUFBQSxPQUFPLEVBQUV4QyxXQUFXO2tDQUFFLFNBQU87Ozs7OzZCQUFTO2tDQUV4Riw4REFBQ2hDLHNEQUFPO3dCQUFDMEUsS0FBSyxFQUFFOzRCQUFDQyxTQUFTLEVBQUUsWUFBWTt5QkFBQzt3QkFBRXRDLEtBQUs7d0JBQUN1QyxNQUFNLEVBQUcsUUFBUTt3QkFBQ0MsT0FBTyxFQUFJN0QsV0FBVzs7Ozs7NkJBQUc7a0NBQzVGLDhEQUFDaEIsc0RBQU87d0JBQUMyRCxPQUFPO3dCQUFDaUIsTUFBTSxFQUFHLFVBQVU7d0JBQUNDLE9BQU8sRUFBSTNELGNBQWM7Ozs7OzZCQUFHOzs7Ozs7cUJBQzFEOzBCQUVQLDhEQUFDNEQsR0FBQzswQkFBQyw0Q0FBMEM7Ozs7O3FCQUFJOzs7Ozs7YUFJNUMsQ0FBRTtDQUNkO0dBdEpLdEUsTUFBTTtBQXdKWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlbmRlci5qcz9kZmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV0aWxzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgZGlzcGVyc2UgZnJvbSBcIi4uL2Rpc3BlcnNlXCI7XG5pbXBvcnQgcHJvdmlkZXIgZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgY2hfYXBwcm92ZSBmcm9tIFwiLi4vdXRpbHMvY2hfYXBwcm92ZVwiO1xuaW1wb3J0IHRyeV9hcHByb3ZlIGZyb20gXCIuLi91dGlscy90cnlfYXBwcm92ZVwiO1xuXG5cbmNvbnN0IHNlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbQ2hlY2tBcHByb3ZlLHNldENoZWNrQXBwcm92ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1Rva2VuLHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtBcmVhV0Esc2V0QXJlYVdBXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IHN0b3BlcjEgPSB0cnVlO1xuICAgXG5cbiAgICBcblxuICAgIGNvbnN0IFtlcnJvTWVzc2FnZSxzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3N1Y2Nlc3NNZXNzYWdlLHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW2lzTG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBUb2tlbkFkZHJlc3MgPSBUb2tlbjtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIHsga2V5OiAnRScsIHRleHQ6ICdFVEgnLCB2YWx1ZTogJ2V0aCcgfSxcbiAgICAgICAgeyBrZXk6ICdCJywgdGV4dDogJ0JTQycsIHZhbHVlOiAnYnNjJyB9LFxuICAgICAgICB7IGtleTogJ00nLCB0ZXh0OiAnTUFUSUMnLCB2YWx1ZTogJ21hdGljJyB9LFxuICAgICAgXVxuXG4gICAgICBpZihUb2tlbkFkZHJlc3MgJiYgc3RvcGVyMSl7XG4gICAgICAgIGNoZWNrZXJzKCk7XG4gICAgfVxuXG4gICAgICBhc3luYyBmdW5jdGlvbiBjaGVja2VycygpIHtcbiAgICAgICAgY29uc29sZS5sb2coc3RvcGVyMSk7XG5cbiAgICAgICAgaWYoVG9rZW5BZGRyZXNzLmxlbmd0aCA9PT0gNDIpXG4gICAgICAgIHtcbiAgICAgICBcbiAgICAgICAgY29uc3QgY2hfYWxsb3dzID0gYXdhaXQgY2hfYXBwcm92ZShUb2tlbkFkZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoX2FsbG93c1wiLGNoX2FsbG93cyk7XG5cbiAgICAgICAgaWYgKGNoX2FsbG93cyA8PSAwIClcbiAgICAgICAge1xuICAgICAgICAgICAgc2V0Q2hlY2tBcHByb3ZlKHRydWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGVja0FwcHJvdmVcIixDaGVja0FwcHJvdmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCLQrdGC0L4g0L3QtSDQsNC00YDQtdGBINGC0L7QutC10L3QsFwiKTtcbiAgICAgICAgc3RvcGVyMT1mYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICBcblxuXG4gICAgY29uc3QgaGFuZEFwcHJvdmUgPSBhc3luYyhldmVudCkgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJcIik7XG4gICAgICAgIFxuICAgICAgICBpZihUb2tlbkFkZHJlc3Mpe1xuICAgICAgICAgICAgY29uc3QgY2hfYWxsb3dzID0gYXdhaXQgY2hfYXBwcm92ZShUb2tlbkFkZHJlc3MpO1xuICAgICAgICAgICAgaWYgKGNoX2FsbG93cyA8PSAwKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBhcHByb3ZlID0gYXdhaXQgdHJ5X2FwcHJvdmUoVG9rZW5BZGRyZXNzLFwiOTk5OTk5OTk5OTk5OTk5OTk5XCIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcHJvdmVcIixhcHByb3ZlKTtcbiAgICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVTdWJsaXQgPWFzeW5jIChldmVudCkgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJcIik7XG5cbiAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IFNlbmRlclNpbmdlciA9IGRpc3BlcnNlLmNvbm5lY3Qoc2luZ2VyKTtcblxuXG5cbiAgICAgIFxuICAgICAgICBjb25zdCB3YWxsZXRzID0gQXJlYVdBLnNwbGl0KCdcXG4nKTsgXG4gICAgICAgIGNvbnN0IHdhbGxldD1bXTtcbiAgICAgICAgY29uc3QgYW1vdW50PVtdO1xuICAgICAgICBjb25zdCB0b3RhbHRva2VucyA9MDtcbiAgICAgXG5cblxuICAgICAgICB3YWxsZXRzLmZvckVhY2godzEgPT4ge1xuICAgICAgICAgICAgY29uc3QgdDE9dzEuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGNvbnN0IHYxID0gdXRpbHMucGFyc2VFdGhlcih0MVsxXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhbGxldC5wdXNoKHQxWzBdKTtcbiAgICAgICAgICAgIGFtb3VudC5wdXNoKHYxLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgdG90YWx0b2tlbnMgKz1wYXJzZUludCh0MVsxXSk7XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ2MVwiLGFtb3VudCArIFRva2VuQWRkcmVzcyk7XG4gICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdHJ5e1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNlbmRlclNpbmdlci5kaXNwZXJzZVRva2VuKFRva2VuQWRkcmVzcyx3YWxsZXQsYW1vdW50KTtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKFwiaGFzaDpcIiArIHJlc3BvbnNlLmhhc2gpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gXG5cbiAgICB9XG5cblxuICAgIHJldHVybiAoICA8TGF5b3V0PlxuICAgICAgPEZvcm0gZXJyb3I9eyEhZXJyb01lc3NhZ2V9IHN1Y2Nlc3M9eyEhc3VjY2Vzc01lc3NhZ2V9IG9uU3VibWl0PXtoYW5kbGVTdWJsaXR9PlxuICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtTZWxlY3R9IGxhYmVsPSdDaGFpbicgb3B0aW9ucz17b3B0aW9uc30gcGxhY2Vob2xkZXI9J0NoYWluJy8+XG4gICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nVG9rZW4nIHZhbHVlPXtUb2tlbn0gcGxhY2Vob2xkZXI9J1Rva2VuIEFkZHJlc3MnIG9uQ2hhbmdlID0ge2V2ZW50PT5zZXRUb2tlbihldmVudC50YXJnZXQudmFsdWUpIH0vPlxuICAgICBcbiAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtUZXh0QXJlYX0gbGFiZWw9XCJXYWxldHMgVG9rZW5zXCIgdmFsdWU9e0FyZWFXQX0gcGxhY2Vob2xkZXI9J1dhbGV0cyBUb2tlbnMnIG9uQ2hhbmdlID0ge2V2ZW50PT5zZXRBcmVhV0EoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBwcmltYXJ5PlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIHtDaGVja0FwcHJvdmU/PEJ1dHRvbiBsb2FkaW5nPXtpc0xvYWRpbmd9IHByaW1hcnkgdHlwZT0nc3VibWl0J29uQ2xpY2s9e2hhbmRBcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+OlxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2lzTG9hZGluZ30gZGlzYWJsZWQgdHlwZT0nc3VibWl0J29uQ2xpY2s9e2hhbmRBcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+fVxuICAgICAgICBcbiAgICAgICAgPE1lc3NhZ2Ugc3R5bGU9e3t3b3JkQnJlYWs6ICdicmVhay13b3JkJ319IGVycm9yIGhlYWRlciA9ICdFcnJvcjonIGNvbnRlbnQgPSB7ZXJyb01lc3NhZ2V9Lz4gXG4gICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyID0gJ3N1Y2Nlc3M6JyBjb250ZW50ID0ge3N1Y2Nlc3NNZXNzYWdlfS8+IFxuICAgICAgICA8L0Zvcm0+XG4gICAgIFxuICAgICAgICA8cD4weGEzNGRkYjczOTM3MDZDQjNDOGM0MjMyODM5RENjMDMzRUNGYkQwYTU8L3A+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgPC9MYXlvdXQ+KTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IHNlbmRlcjsiXSwibmFtZXMiOlsidXRpbHMiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJTZWxlY3QiLCJUZXh0QXJlYSIsIkxheW91dCIsImRpc3BlcnNlIiwicHJvdmlkZXIiLCJjaF9hcHByb3ZlIiwidHJ5X2FwcHJvdmUiLCJzZW5kZXIiLCJDaGVja0FwcHJvdmUiLCJzZXRDaGVja0FwcHJvdmUiLCJUb2tlbiIsInNldFRva2VuIiwiQXJlYVdBIiwic2V0QXJlYVdBIiwic3RvcGVyMSIsImVycm9NZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJUb2tlbkFkZHJlc3MiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiY2hlY2tlcnMiLCJjaF9hbGxvd3MiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiaGFuZEFwcHJvdmUiLCJldmVudCIsImFwcHJvdmUiLCJwcmV2ZW50RGVmYXVsdCIsInRvU3RyaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlU3VibGl0Iiwic2luZ2VyIiwiU2VuZGVyU2luZ2VyIiwid2FsbGV0cyIsIndhbGxldCIsImFtb3VudCIsInRvdGFsdG9rZW5zIiwicmVzcG9uc2UiLCJnZXRTaWduZXIiLCJjb25uZWN0Iiwic3BsaXQiLCJmb3JFYWNoIiwidzEiLCJ0MSIsInYxIiwicGFyc2VFdGhlciIsInB1c2giLCJwYXJzZUludCIsImRpc3BlcnNlVG9rZW4iLCJoYXNoIiwic3VjY2VzcyIsIm9uU3VibWl0IiwiR3JvdXAiLCJGaWVsZCIsImNvbnRyb2wiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwid2lkdGhzIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsb2FkaW5nIiwicHJpbWFyeSIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJzdHlsZSIsIndvcmRCcmVhayIsImhlYWRlciIsImNvbnRlbnQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});