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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\n/* harmony import */ var _utils_try_approve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/try_approve */ \"./utils/try_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), CheckApprove = ref[0], setCheckApprove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref1[0], setToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref2[0], setAreaWA = ref2[1];\n    var stoper1 = true;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref4[0], setSuccessMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref5[0], setLoading = ref5[1];\n    var TokenAddress = Token;\n    var preTokenA = TokenAddress;\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    if (TokenAddress && stoper1) {\n        checkers();\n    }\n    function checkers() {\n        return _checkers.apply(this, arguments);\n    }\n    function _checkers() {\n        _checkers = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ch_allows;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(stoper1);\n                        if (!(TokenAddress.length === 42)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 4:\n                        ch_allows = _ctx.sent;\n                        console.log(\"ch_allows\", ch_allows);\n                        try {\n                            if (ch_allows <= 0) {\n                                setCheckApprove(true);\n                                console.log(\"CheckApprove\", CheckApprove);\n                            }\n                        } catch (error) {\n                            console.error(error);\n                            setErrorMessage(error.message);\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 9:\n                        {\n                            setErrorMessage(\"\\u042D\\u0442\\u043E \\u043D\\u0435 \\u0430\\u0434\\u0440\\u0435\\u0441 \\u0442\\u043E\\u043A\\u0435\\u043D\\u0430\");\n                            stoper1 = false;\n                        }\n                    case 10:\n                        ;\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkers.apply(this, arguments);\n    }\n    var handApprove = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var ch_allows, approve;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        if (!TokenAddress) {\n                            _ctx.next = 24;\n                            break;\n                        }\n                        _ctx.next = 6;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 6:\n                        ch_allows = _ctx.sent;\n                        if (!(ch_allows <= 0)) {\n                            _ctx.next = 22;\n                            break;\n                        }\n                        _ctx.prev = 8;\n                        _ctx.next = 11;\n                        return (0,_utils_try_approve__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TokenAddress, \"999999999999999999\".toString());\n                    case 11:\n                        approve = _ctx.sent;\n                        console.log(\"approve\", approve);\n                        _ctx.next = 19;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](8);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 19:\n                        _ctx.prev = 19;\n                        setLoading(false);\n                        return _ctx.finish(19);\n                    case 22:\n                        _ctx.next = 25;\n                        break;\n                    case 24:\n                        return _ctx.abrupt(\"return\");\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    8,\n                    15,\n                    19,\n                    22\n                ]\n            ]);\n        }));\n        return function handApprove(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, wallets, wallet, amount, totaltokens, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 21:\n                        _ctx.prev = 21;\n                        setLoading(false);\n                        return _ctx.finish(21);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17,\n                    21,\n                    24\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {\n                error: !!erroMessage,\n                success: !!successMessage,\n                onSubmit: handleSublit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 145,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 144,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Input,\n                                label: \"Token\",\n                                value: Token,\n                                placeholder: \"0x...\",\n                                onChange: function(event) {\n                                    return setToken(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 148,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.TextArea,\n                                label: \"Walets Tokens\",\n                                value: AreaWA,\n                                placeholder: \"Walets Tokens\",\n                                onChange: function(event) {\n                                    return setAreaWA(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 150,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 147,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 154,\n                        columnNumber: 13\n                    }, _this),\n                    CheckApprove ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 156,\n                        columnNumber: 29\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        disabled: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 157,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        style: {\n                            wordBreak: \"break-word\"\n                        },\n                        error: true,\n                        header: \"Error:\",\n                        content: erroMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 159,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        success: true,\n                        header: \"success:\",\n                        content: successMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 160,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 143,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"0xa34ddb7393706CB3C8c4232839DCc033ECFbD0a5\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 163,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 142,\n        columnNumber: 13\n    }, _this);\n};\n_s(sender, \"mKbv1S68ahQUlUzoa1+71N+0720=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxPQUFPLEVBQUVsRCxTQUFTO3dCQUFFbUQsT0FBTzt3QkFBQ0MsSUFBSSxFQUFDLFFBQVE7d0JBQUNDLE9BQU8sRUFBRXRDLFdBQVc7a0NBQUUsU0FBTzs7Ozs7NkJBQVMsaUJBQ3BHLDhEQUFDdEMscURBQU07d0JBQUN5RSxPQUFPLEVBQUVsRCxTQUFTO3dCQUFFc0QsUUFBUTt3QkFBQ0YsSUFBSSxFQUFDLFFBQVE7d0JBQUNDLE9BQU8sRUFBRXRDLFdBQVc7a0NBQUUsU0FBTzs7Ozs7NkJBQVM7a0NBRTdGLDhEQUFDbkMsc0RBQU87d0JBQUMyRSxLQUFLLEVBQUU7NEJBQUVDLFNBQVMsRUFBRSxZQUFZO3lCQUFFO3dCQUFFM0MsS0FBSzt3QkFBQzRDLE1BQU0sRUFBQyxRQUFRO3dCQUFDQyxPQUFPLEVBQUU5RCxXQUFXOzs7Ozs2QkFBSTtrQ0FDM0YsOERBQUNoQixzREFBTzt3QkFBQzRELE9BQU87d0JBQUNpQixNQUFNLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFFNUQsY0FBYzs7Ozs7NkJBQUk7Ozs7OztxQkFDM0Q7MEJBRVAsOERBQUM2RCxHQUFDOzBCQUFDLDRDQUEwQzs7Ozs7cUJBQUk7Ozs7OzthQUk1QyxDQUFFO0NBQ2Q7R0E3Skt2RSxNQUFNO0FBK0paLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VuZGVyLmpzP2RmZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgU2VsZWN0LCBUZXh0QXJlYSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBkaXNwZXJzZSBmcm9tIFwiLi4vZGlzcGVyc2VcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCBjaF9hcHByb3ZlIGZyb20gXCIuLi91dGlscy9jaF9hcHByb3ZlXCI7XG5pbXBvcnQgdHJ5X2FwcHJvdmUgZnJvbSBcIi4uL3V0aWxzL3RyeV9hcHByb3ZlXCI7XG5cblxuY29uc3Qgc2VuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtDaGVja0FwcHJvdmUsIHNldENoZWNrQXBwcm92ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbQXJlYVdBLCBzZXRBcmVhV0FdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3Qgc3RvcGVyMSA9IHRydWU7XG5cblxuXG5cbiAgICBjb25zdCBbZXJyb01lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgVG9rZW5BZGRyZXNzID0gVG9rZW47XG4gICAgY29uc3QgcHJlVG9rZW5BID0gVG9rZW5BZGRyZXNzO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgeyBrZXk6ICdFJywgdGV4dDogJ0VUSCcsIHZhbHVlOiAnZXRoJyB9LFxuICAgICAgICB7IGtleTogJ0InLCB0ZXh0OiAnQlNDJywgdmFsdWU6ICdic2MnIH0sXG4gICAgICAgIHsga2V5OiAnTScsIHRleHQ6ICdNQVRJQycsIHZhbHVlOiAnbWF0aWMnIH0sXG4gICAgXVxuXG4gICAgXG4gICAgaWYgKFRva2VuQWRkcmVzcyAmJiBzdG9wZXIxKSB7XG4gICAgICAgIGNoZWNrZXJzKCk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrZXJzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhzdG9wZXIxKTtcblxuICAgICAgICBpZiAoVG9rZW5BZGRyZXNzLmxlbmd0aCA9PT0gNDIpIHtcblxuICAgICAgICAgICAgY29uc3QgY2hfYWxsb3dzID0gYXdhaXQgY2hfYXBwcm92ZShUb2tlbkFkZHJlc3MpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaF9hbGxvd3NcIiwgY2hfYWxsb3dzKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoX2FsbG93cyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoZWNrQXBwcm92ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGVja0FwcHJvdmVcIiwgQ2hlY2tBcHByb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCLQrdGC0L4g0L3QtSDQsNC00YDQtdGBINGC0L7QutC10L3QsFwiKTtcbiAgICAgICAgICAgIHN0b3BlcjEgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICA7XG5cbiAgICB9XG5cblxuXG5cbiAgICBjb25zdCBoYW5kQXBwcm92ZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKFwiXCIpO1xuXG4gICAgICAgIGlmIChUb2tlbkFkZHJlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoX2FsbG93cyA9IGF3YWl0IGNoX2FwcHJvdmUoVG9rZW5BZGRyZXNzKTtcbiAgICAgICAgICAgIGlmIChjaF9hbGxvd3MgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcHJvdmUgPSBhd2FpdCB0cnlfYXBwcm92ZShUb2tlbkFkZHJlc3MsIFwiOTk5OTk5OTk5OTk5OTk5OTk5XCIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwcm92ZVwiLCBhcHByb3ZlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVTdWJsaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcblxuICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgU2VuZGVyU2luZ2VyID0gZGlzcGVyc2UuY29ubmVjdChzaW5nZXIpO1xuXG5cblxuXG4gICAgICAgIGNvbnN0IHdhbGxldHMgPSBBcmVhV0Euc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB3YWxsZXQgPSBbXTtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gW107XG4gICAgICAgIGNvbnN0IHRvdGFsdG9rZW5zID0gMDtcblxuXG5cbiAgICAgICAgd2FsbGV0cy5mb3JFYWNoKHcxID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHQxID0gdzEuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGNvbnN0IHYxID0gdXRpbHMucGFyc2VFdGhlcih0MVsxXSk7XG5cbiAgICAgICAgICAgIHdhbGxldC5wdXNoKHQxWzBdKTtcbiAgICAgICAgICAgIGFtb3VudC5wdXNoKHYxLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgdG90YWx0b2tlbnMgKz0gcGFyc2VJbnQodDFbMV0pO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidjFcIixhbW91bnQgKyBUb2tlbkFkZHJlc3MpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTZW5kZXJTaW5nZXIuZGlzcGVyc2VUb2tlbihUb2tlbkFkZHJlc3MsIHdhbGxldCwgYW1vdW50KTtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKFwiaGFzaDpcIiArIHJlc3BvbnNlLmhhc2gpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cblxuICAgIHJldHVybiAoPExheW91dD5cbiAgICAgICAgPEZvcm0gZXJyb3I9eyEhZXJyb01lc3NhZ2V9IHN1Y2Nlc3M9eyEhc3VjY2Vzc01lc3NhZ2V9IG9uU3VibWl0PXtoYW5kbGVTdWJsaXR9PlxuICAgICAgICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17U2VsZWN0fSBsYWJlbD0nQ2hhaW4nIG9wdGlvbnM9e29wdGlvbnN9IHBsYWNlaG9sZGVyPSdDaGFpbicgLz5cbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nVG9rZW4nIHZhbHVlPXtUb2tlbn0gcGxhY2Vob2xkZXI9JzB4Li4uJyBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0VG9rZW4oZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cblxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1RleHRBcmVhfSBsYWJlbD1cIldhbGV0cyBUb2tlbnNcIiB2YWx1ZT17QXJlYVdBfSBwbGFjZWhvbGRlcj0nV2FsZXRzIFRva2Vucycgb25DaGFuZ2U9e2V2ZW50ID0+IHNldEFyZWFXQShldmVudC50YXJnZXQudmFsdWUpfSAvPlxuXG5cbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBwcmltYXJ5PlNlbmQ8L0J1dHRvbj5cblxuICAgICAgICAgICAge0NoZWNrQXBwcm92ZSA/IDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBwcmltYXJ5IHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZEFwcHJvdmV9PkFwcHJvdmU8L0J1dHRvbj4gOlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBkaXNhYmxlZCB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRBcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+fVxuXG4gICAgICAgICAgICA8TWVzc2FnZSBzdHlsZT17eyB3b3JkQnJlYWs6ICdicmVhay13b3JkJyB9fSBlcnJvciBoZWFkZXI9J0Vycm9yOicgY29udGVudD17ZXJyb01lc3NhZ2V9IC8+XG4gICAgICAgICAgICA8TWVzc2FnZSBzdWNjZXNzIGhlYWRlcj0nc3VjY2VzczonIGNvbnRlbnQ9e3N1Y2Nlc3NNZXNzYWdlfSAvPlxuICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgPHA+MHhhMzRkZGI3MzkzNzA2Q0IzQzhjNDIzMjgzOURDYzAzM0VDRmJEMGE1PC9wPlxuXG5cblxuICAgIDwvTGF5b3V0Pik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRlcjsiXSwibmFtZXMiOlsidXRpbHMiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJTZWxlY3QiLCJUZXh0QXJlYSIsIkxheW91dCIsImRpc3BlcnNlIiwicHJvdmlkZXIiLCJjaF9hcHByb3ZlIiwidHJ5X2FwcHJvdmUiLCJzZW5kZXIiLCJDaGVja0FwcHJvdmUiLCJzZXRDaGVja0FwcHJvdmUiLCJUb2tlbiIsInNldFRva2VuIiwiQXJlYVdBIiwic2V0QXJlYVdBIiwic3RvcGVyMSIsImVycm9NZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJUb2tlbkFkZHJlc3MiLCJwcmVUb2tlbkEiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiY2hlY2tlcnMiLCJjaF9hbGxvd3MiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZEFwcHJvdmUiLCJldmVudCIsImFwcHJvdmUiLCJwcmV2ZW50RGVmYXVsdCIsInRvU3RyaW5nIiwiaGFuZGxlU3VibGl0Iiwic2luZ2VyIiwiU2VuZGVyU2luZ2VyIiwid2FsbGV0cyIsIndhbGxldCIsImFtb3VudCIsInRvdGFsdG9rZW5zIiwicmVzcG9uc2UiLCJnZXRTaWduZXIiLCJjb25uZWN0Iiwic3BsaXQiLCJmb3JFYWNoIiwidzEiLCJ0MSIsInYxIiwicGFyc2VFdGhlciIsInB1c2giLCJwYXJzZUludCIsImRpc3BlcnNlVG9rZW4iLCJoYXNoIiwic3VjY2VzcyIsIm9uU3VibWl0IiwiR3JvdXAiLCJGaWVsZCIsImNvbnRyb2wiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwid2lkdGhzIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsb2FkaW5nIiwicHJpbWFyeSIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJzdHlsZSIsIndvcmRCcmVhayIsImhlYWRlciIsImNvbnRlbnQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});