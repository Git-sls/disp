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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\n/* harmony import */ var _utils_try_approve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/try_approve */ \"./utils/try_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), CheckApprove = ref[0], setCheckApprove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref1[0], setToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref2[0], setAreaWA = ref2[1];\n    var stoper1 = true;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref4[0], setSuccessMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref5[0], setLoading = ref5[1];\n    var TokenAddress = Token;\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    if (TokenAddress && stoper1) {\n        checkers();\n    }\n    function checkers() {\n        return _checkers.apply(this, arguments);\n    }\n    function _checkers() {\n        _checkers = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ch_allows;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(stoper1);\n                        if (!(TokenAddress.length != 42)) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        setErrorMessage(\"\\u042D\\u0442\\u043E \\u043D\\u0435 \\u0430\\u0434\\u0440\\u0435\\u0441 \\u0442\\u043E\\u043A\\u0435\\u043D\\u0430\");\n                        stoper1 = false;\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        if (TokenAddress) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        setErrorMessage(\"\\u041F\\u0443\\u0441\\u0442\\u043E\\u0439 \\u0430\\u0434\\u0440\\u0435\\u0441 token\");\n                        return _ctx.abrupt(\"return\");\n                    case 10:\n                        _ctx.next = 12;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 12:\n                        ch_allows = _ctx.sent;\n                        console.log(\"ch_allows\", ch_allows);\n                        if (ch_allows <= 0) {\n                            setCheckApprove(true);\n                            console.log(\"CheckApprove\", CheckApprove);\n                        }\n                    case 15:\n                        ;\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkers.apply(this, arguments);\n    }\n    var handApprove = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var ch_allows, approve;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        if (!TokenAddress) {\n                            _ctx.next = 24;\n                            break;\n                        }\n                        _ctx.next = 6;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 6:\n                        ch_allows = _ctx.sent;\n                        if (!(ch_allows <= 0)) {\n                            _ctx.next = 22;\n                            break;\n                        }\n                        _ctx.prev = 8;\n                        _ctx.next = 11;\n                        return (0,_utils_try_approve__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TokenAddress, \"999999999999999999\".toString());\n                    case 11:\n                        approve = _ctx.sent;\n                        console.log(\"approve\", approve);\n                        _ctx.next = 19;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](8);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 19:\n                        _ctx.prev = 19;\n                        setLoading(false);\n                        return _ctx.finish(19);\n                    case 22:\n                        _ctx.next = 25;\n                        break;\n                    case 24:\n                        return _ctx.abrupt(\"return\");\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    8,\n                    15,\n                    19,\n                    22\n                ]\n            ]);\n        }));\n        return function handApprove(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, wallets, wallet, amount, totaltokens, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 21:\n                        _ctx.prev = 21;\n                        setLoading(false);\n                        return _ctx.finish(21);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17,\n                    21,\n                    24\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {\n                error: !!erroMessage,\n                success: !!successMessage,\n                onSubmit: handleSublit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 138,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 137,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Input,\n                                label: \"Token\",\n                                value: Token,\n                                placeholder: \"Token Address\",\n                                onChange: function(event) {\n                                    return setToken(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.TextArea,\n                                label: \"Walets Tokens\",\n                                value: AreaWA,\n                                placeholder: \"Walets Tokens\",\n                                onChange: function(event) {\n                                    return setAreaWA(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, _this),\n                    CheckApprove ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 149,\n                        columnNumber: 23\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        disabled: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        style: {\n                            wordBreak: \"break-word\"\n                        },\n                        error: true,\n                        header: \"Error:\",\n                        content: erroMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        success: true,\n                        header: \"success:\",\n                        content: successMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"0xa34ddb7393706CB3C8c4232839DCc033ECFbD0a5\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 156,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 135,\n        columnNumber: 15\n    }, _this);\n};\n_s(sender, \"DvHFsLaCQ8ChE423p0cWhK6JLxs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRWpELFNBQVM7d0JBQUVxRCxRQUFRO3dCQUFDRixJQUFJLEVBQUMsUUFBUUM7d0JBQUFBLE9BQU8sRUFBRXhDLFdBQVc7a0NBQUUsU0FBTzs7Ozs7NkJBQVM7a0NBRXhGLDhEQUFDaEMsc0RBQU87d0JBQUMwRSxLQUFLLEVBQUU7NEJBQUNDLFNBQVMsRUFBRSxZQUFZO3lCQUFDO3dCQUFFdEMsS0FBSzt3QkFBQ3VDLE1BQU0sRUFBRyxRQUFRO3dCQUFDQyxPQUFPLEVBQUk3RCxXQUFXOzs7Ozs2QkFBRztrQ0FDNUYsOERBQUNoQixzREFBTzt3QkFBQzJELE9BQU87d0JBQUNpQixNQUFNLEVBQUcsVUFBVTt3QkFBQ0MsT0FBTyxFQUFJM0QsY0FBYzs7Ozs7NkJBQUc7Ozs7OztxQkFDMUQ7MEJBRVAsOERBQUM0RCxHQUFDOzBCQUFDLDRDQUEwQzs7Ozs7cUJBQUk7Ozs7OzthQUk1QyxDQUFFO0NBQ2Q7R0F0Skt0RSxNQUFNO0FBd0paLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VuZGVyLmpzP2RmZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgU2VsZWN0LCBUZXh0QXJlYSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBkaXNwZXJzZSBmcm9tIFwiLi4vZGlzcGVyc2VcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCBjaF9hcHByb3ZlIGZyb20gXCIuLi91dGlscy9jaF9hcHByb3ZlXCI7XG5pbXBvcnQgdHJ5X2FwcHJvdmUgZnJvbSBcIi4uL3V0aWxzL3RyeV9hcHByb3ZlXCI7XG5cblxuY29uc3Qgc2VuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtDaGVja0FwcHJvdmUsc2V0Q2hlY2tBcHByb3ZlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtUb2tlbixzZXRUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbQXJlYVdBLHNldEFyZWFXQV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBzdG9wZXIxID0gdHJ1ZTtcbiAgIFxuXG4gICAgXG5cbiAgICBjb25zdCBbZXJyb01lc3NhZ2Usc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzdWNjZXNzTWVzc2FnZSxzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgVG9rZW5BZGRyZXNzID0gVG9rZW47XG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IGtleTogJ0UnLCB0ZXh0OiAnRVRIJywgdmFsdWU6ICdldGgnIH0sXG4gICAgICAgIHsga2V5OiAnQicsIHRleHQ6ICdCU0MnLCB2YWx1ZTogJ2JzYycgfSxcbiAgICAgICAgeyBrZXk6ICdNJywgdGV4dDogJ01BVElDJywgdmFsdWU6ICdtYXRpYycgfSxcbiAgICAgIF1cblxuICAgICAgaWYoVG9rZW5BZGRyZXNzICYmIHN0b3BlcjEpe1xuICAgICAgICBjaGVja2VycygpO1xuICAgIH1cblxuICAgICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tlcnMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3BlcjEpO1xuXG4gICAgICAgIGlmKFRva2VuQWRkcmVzcy5sZW5ndGggIT00Mil7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCLQrdGC0L4g0L3QtSDQsNC00YDQtdGBINGC0L7QutC10L3QsFwiKTtcbiAgICAgICAgICAgIHN0b3BlcjE9ZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgaWYoIVRva2VuQWRkcmVzcyl7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCLQn9GD0YHRgtC+0Lkg0LDQtNGA0LXRgSB0b2tlblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgY2hfYWxsb3dzID0gYXdhaXQgY2hfYXBwcm92ZShUb2tlbkFkZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoX2FsbG93c1wiLGNoX2FsbG93cyk7XG4gICAgICAgIGlmIChjaF9hbGxvd3MgPD0gMCApe1xuICAgICAgICAgICAgc2V0Q2hlY2tBcHByb3ZlKHRydWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGVja0FwcHJvdmVcIixDaGVja0FwcHJvdmUpO1xuICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gIFxuXG5cbiAgICBjb25zdCBoYW5kQXBwcm92ZSA9IGFzeW5jKGV2ZW50KSA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmKFRva2VuQWRkcmVzcyl7XG4gICAgICAgICAgICBjb25zdCBjaF9hbGxvd3MgPSBhd2FpdCBjaF9hcHByb3ZlKFRva2VuQWRkcmVzcyk7XG4gICAgICAgICAgICBpZiAoY2hfYWxsb3dzIDw9IDApIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGFwcHJvdmUgPSBhd2FpdCB0cnlfYXBwcm92ZShUb2tlbkFkZHJlc3MsXCI5OTk5OTk5OTk5OTk5OTk5OTlcIi50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwcm92ZVwiLGFwcHJvdmUpO1xuICAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfWZpbmFsbHl7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZVN1YmxpdCA9YXN5bmMgKGV2ZW50KSA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcblxuICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgU2VuZGVyU2luZ2VyID0gZGlzcGVyc2UuY29ubmVjdChzaW5nZXIpO1xuXG5cblxuICAgICAgXG4gICAgICAgIGNvbnN0IHdhbGxldHMgPSBBcmVhV0Euc3BsaXQoJ1xcbicpOyBcbiAgICAgICAgY29uc3Qgd2FsbGV0PVtdO1xuICAgICAgICBjb25zdCBhbW91bnQ9W107XG4gICAgICAgIGNvbnN0IHRvdGFsdG9rZW5zID0wO1xuICAgICBcblxuXG4gICAgICAgIHdhbGxldHMuZm9yRWFjaCh3MSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0MT13MS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgY29uc3QgdjEgPSB1dGlscy5wYXJzZUV0aGVyKHQxWzFdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FsbGV0LnB1c2godDFbMF0pO1xuICAgICAgICAgICAgYW1vdW50LnB1c2godjEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0b3RhbHRva2VucyArPXBhcnNlSW50KHQxWzFdKTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInYxXCIsYW1vdW50ICsgVG9rZW5BZGRyZXNzKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0cnl7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2VuZGVyU2luZ2VyLmRpc3BlcnNlVG9rZW4oVG9rZW5BZGRyZXNzLHdhbGxldCxhbW91bnQpO1xuICAgICAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJoYXNoOlwiICsgcmVzcG9uc2UuaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiBcblxuICAgIH1cblxuXG4gICAgcmV0dXJuICggIDxMYXlvdXQ+XG4gICAgICA8Rm9ybSBlcnJvcj17ISFlcnJvTWVzc2FnZX0gc3VjY2Vzcz17ISFzdWNjZXNzTWVzc2FnZX0gb25TdWJtaXQ9e2hhbmRsZVN1YmxpdH0+XG4gICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J0NoYWluJyBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj0nQ2hhaW4nLz5cbiAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdUb2tlbicgdmFsdWU9e1Rva2VufSBwbGFjZWhvbGRlcj0nVG9rZW4gQWRkcmVzcycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldFRva2VuKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XG4gICAgIFxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1RleHRBcmVhfSBsYWJlbD1cIldhbGV0cyBUb2tlbnNcIiB2YWx1ZT17QXJlYVdBfSBwbGFjZWhvbGRlcj0nV2FsZXRzIFRva2Vucycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldEFyZWFXQShldmVudC50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtpc0xvYWRpbmd9IHByaW1hcnk+U2VuZDwvQnV0dG9uPlxuICAgICAgICBcbiAgICAgICAge0NoZWNrQXBwcm92ZT88QnV0dG9uIGxvYWRpbmc9e2lzTG9hZGluZ30gcHJpbWFyeSB0eXBlPSdzdWJtaXQnb25DbGljaz17aGFuZEFwcHJvdmV9PkFwcHJvdmU8L0J1dHRvbj46XG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBkaXNhYmxlZCB0eXBlPSdzdWJtaXQnb25DbGljaz17aGFuZEFwcHJvdmV9PkFwcHJvdmU8L0J1dHRvbj59XG4gICAgICAgIFxuICAgICAgICA8TWVzc2FnZSBzdHlsZT17e3dvcmRCcmVhazogJ2JyZWFrLXdvcmQnfX0gZXJyb3IgaGVhZGVyID0gJ0Vycm9yOicgY29udGVudCA9IHtlcnJvTWVzc2FnZX0vPiBcbiAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXIgPSAnc3VjY2VzczonIGNvbnRlbnQgPSB7c3VjY2Vzc01lc3NhZ2V9Lz4gXG4gICAgICAgIDwvRm9ybT5cbiAgICAgXG4gICAgICAgIDxwPjB4YTM0ZGRiNzM5MzcwNkNCM0M4YzQyMzI4MzlEQ2MwMzNFQ0ZiRDBhNTwvcD5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICA8L0xheW91dD4pO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgc2VuZGVyOyJdLCJuYW1lcyI6WyJ1dGlscyIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIlNlbGVjdCIsIlRleHRBcmVhIiwiTGF5b3V0IiwiZGlzcGVyc2UiLCJwcm92aWRlciIsImNoX2FwcHJvdmUiLCJ0cnlfYXBwcm92ZSIsInNlbmRlciIsIkNoZWNrQXBwcm92ZSIsInNldENoZWNrQXBwcm92ZSIsIlRva2VuIiwic2V0VG9rZW4iLCJBcmVhV0EiLCJzZXRBcmVhV0EiLCJzdG9wZXIxIiwiZXJyb01lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsIlRva2VuQWRkcmVzcyIsIm9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJjaGVja2VycyIsImNoX2FsbG93cyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJoYW5kQXBwcm92ZSIsImV2ZW50IiwiYXBwcm92ZSIsInByZXZlbnREZWZhdWx0IiwidG9TdHJpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJsaXQiLCJzaW5nZXIiLCJTZW5kZXJTaW5nZXIiLCJ3YWxsZXRzIiwid2FsbGV0IiwiYW1vdW50IiwidG90YWx0b2tlbnMiLCJyZXNwb25zZSIsImdldFNpZ25lciIsImNvbm5lY3QiLCJzcGxpdCIsImZvckVhY2giLCJ3MSIsInQxIiwidjEiLCJwYXJzZUV0aGVyIiwicHVzaCIsInBhcnNlSW50IiwiZGlzcGVyc2VUb2tlbiIsImhhc2giLCJzdWNjZXNzIiwib25TdWJtaXQiLCJHcm91cCIsIkZpZWxkIiwiY29udHJvbCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ3aWR0aHMiLCJvbkNoYW5nZSIsInRhcmdldCIsImxvYWRpbmciLCJwcmltYXJ5IiwidHlwZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInN0eWxlIiwid29yZEJyZWFrIiwiaGVhZGVyIiwiY29udGVudCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});