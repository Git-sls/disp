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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\n/* harmony import */ var _utils_try_approve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/try_approve */ \"./utils/try_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), CheckApprove = ref[0], setCheckApprove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref1[0], setToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref2[0], setAreaWA = ref2[1];\n    var stoper1 = true;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref4[0], setSuccessMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref5[0], setLoading = ref5[1];\n    var TokenAddress = Token;\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    if (TokenAddress && stoper1) {\n        checkers();\n    }\n    function checkers() {\n        return _checkers.apply(this, arguments);\n    }\n    function _checkers() {\n        _checkers = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ch_allows;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(stoper1);\n                        if (!(TokenAddress.length === 42)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 4:\n                        ch_allows = _ctx.sent;\n                        console.log(\"ch_allows\", ch_allows);\n                        try {\n                            if (ch_allows <= 0) {\n                                setCheckApprove(true);\n                                console.log(\"CheckApprove\", CheckApprove);\n                            } else {\n                                setErrorMessage(\"\\u042D\\u0442\\u043E \\u043D\\u0435 \\u0430\\u0434\\u0440\\u0435\\u0441 \\u0442\\u043E\\u043A\\u0435\\u043D\\u0430\");\n                                stoper1 = false;\n                            }\n                        } catch (error) {\n                            console.error(error);\n                            setErrorMessage(error.message);\n                        }\n                    case 7:\n                        ;\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkers.apply(this, arguments);\n    }\n    var handApprove = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var ch_allows, approve;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        if (!TokenAddress) {\n                            _ctx.next = 24;\n                            break;\n                        }\n                        _ctx.next = 6;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 6:\n                        ch_allows = _ctx.sent;\n                        if (!(ch_allows <= 0)) {\n                            _ctx.next = 22;\n                            break;\n                        }\n                        _ctx.prev = 8;\n                        _ctx.next = 11;\n                        return (0,_utils_try_approve__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TokenAddress, \"999999999999999999\".toString());\n                    case 11:\n                        approve = _ctx.sent;\n                        console.log(\"approve\", approve);\n                        _ctx.next = 19;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](8);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 19:\n                        _ctx.prev = 19;\n                        setLoading(false);\n                        return _ctx.finish(19);\n                    case 22:\n                        _ctx.next = 25;\n                        break;\n                    case 24:\n                        return _ctx.abrupt(\"return\");\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    8,\n                    15,\n                    19,\n                    22\n                ]\n            ]);\n        }));\n        return function handApprove(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, wallets, wallet, amount, totaltokens, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 21:\n                        _ctx.prev = 21;\n                        setLoading(false);\n                        return _ctx.finish(21);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17,\n                    21,\n                    24\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {\n                error: !!erroMessage,\n                success: !!successMessage,\n                onSubmit: handleSublit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 142,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 141,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Input,\n                                label: \"Token\",\n                                value: Token,\n                                placeholder: \"0x...\",\n                                onChange: function(event) {\n                                    return setToken(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 145,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.TextArea,\n                                label: \"Walets Tokens\",\n                                value: AreaWA,\n                                placeholder: \"Walets Tokens\",\n                                onChange: function(event) {\n                                    return setAreaWA(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 147,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 144,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 151,\n                        columnNumber: 13\n                    }, _this),\n                    CheckApprove ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 153,\n                        columnNumber: 29\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        disabled: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 154,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        style: {\n                            wordBreak: \"break-word\"\n                        },\n                        error: true,\n                        header: \"Error:\",\n                        content: erroMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 156,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        success: true,\n                        header: \"success:\",\n                        content: successMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 157,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 140,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"0xa34ddb7393706CB3C8c4232839DCc033ECFbD0a5\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 160,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 139,\n        columnNumber: 13\n    }, _this);\n};\n_s(sender, \"mKbv1S68ahQUlUzoa1+71N+0720=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsUUFBUTt3QkFBQ0MsT0FBTyxFQUFFdEMsV0FBVztrQ0FBRSxTQUFPOzs7Ozs2QkFBUyxpQkFDcEcsOERBQUNyQyxxREFBTTt3QkFBQ3dFLE9BQU8sRUFBRWpELFNBQVM7d0JBQUVxRCxRQUFRO3dCQUFDRixJQUFJLEVBQUMsUUFBUTt3QkFBQ0MsT0FBTyxFQUFFdEMsV0FBVztrQ0FBRSxTQUFPOzs7Ozs2QkFBUztrQ0FFN0YsOERBQUNsQyxzREFBTzt3QkFBQzBFLEtBQUssRUFBRTs0QkFBRUMsU0FBUyxFQUFFLFlBQVk7eUJBQUU7d0JBQUUzQyxLQUFLO3dCQUFDNEMsTUFBTSxFQUFDLFFBQVE7d0JBQUNDLE9BQU8sRUFBRTdELFdBQVc7Ozs7OzZCQUFJO2tDQUMzRiw4REFBQ2hCLHNEQUFPO3dCQUFDMkQsT0FBTzt3QkFBQ2lCLE1BQU0sRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUUzRCxjQUFjOzs7Ozs2QkFBSTs7Ozs7O3FCQUMzRDswQkFFUCw4REFBQzRELEdBQUM7MEJBQUMsNENBQTBDOzs7OztxQkFBSTs7Ozs7O2FBSTVDLENBQUU7Q0FDZDtHQTFKS3RFLE1BQU07QUE0SlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZW5kZXIuanM/ZGZlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1dGlscyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBNZXNzYWdlLCBTZWxlY3QsIFRleHRBcmVhIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGRpc3BlcnNlIGZyb20gXCIuLi9kaXNwZXJzZVwiO1xuaW1wb3J0IHByb3ZpZGVyIGZyb20gXCIuLi9wcm92aWRlclwiO1xuaW1wb3J0IGNoX2FwcHJvdmUgZnJvbSBcIi4uL3V0aWxzL2NoX2FwcHJvdmVcIjtcbmltcG9ydCB0cnlfYXBwcm92ZSBmcm9tIFwiLi4vdXRpbHMvdHJ5X2FwcHJvdmVcIjtcblxuXG5jb25zdCBzZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW0NoZWNrQXBwcm92ZSwgc2V0Q2hlY2tBcHByb3ZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbVG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtBcmVhV0EsIHNldEFyZWFXQV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBzdG9wZXIxID0gdHJ1ZTtcblxuXG5cblxuICAgIGNvbnN0IFtlcnJvTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzdWNjZXNzTWVzc2FnZSwgc2V0U3VjY2Vzc01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBUb2tlbkFkZHJlc3MgPSBUb2tlbjtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIHsga2V5OiAnRScsIHRleHQ6ICdFVEgnLCB2YWx1ZTogJ2V0aCcgfSxcbiAgICAgICAgeyBrZXk6ICdCJywgdGV4dDogJ0JTQycsIHZhbHVlOiAnYnNjJyB9LFxuICAgICAgICB7IGtleTogJ00nLCB0ZXh0OiAnTUFUSUMnLCB2YWx1ZTogJ21hdGljJyB9LFxuICAgIF1cblxuICAgIGlmIChUb2tlbkFkZHJlc3MgJiYgc3RvcGVyMSkge1xuICAgICAgICBjaGVja2VycygpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrZXJzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhzdG9wZXIxKTtcblxuICAgICAgICBpZiAoVG9rZW5BZGRyZXNzLmxlbmd0aCA9PT0gNDIpIHtcblxuICAgICAgICAgICAgY29uc3QgY2hfYWxsb3dzID0gYXdhaXQgY2hfYXBwcm92ZShUb2tlbkFkZHJlc3MpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaF9hbGxvd3NcIiwgY2hfYWxsb3dzKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoX2FsbG93cyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoZWNrQXBwcm92ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGVja0FwcHJvdmVcIiwgQ2hlY2tBcHByb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcItCt0YLQviDQvdC1INCw0LTRgNC10YEg0YLQvtC60LXQvdCwXCIpO1xuICAgICAgICAgICAgICAgICAgICBzdG9wZXIxID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfVxuXG5cblxuXG4gICAgY29uc3QgaGFuZEFwcHJvdmUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcblxuICAgICAgICBpZiAoVG9rZW5BZGRyZXNzKSB7XG4gICAgICAgICAgICBjb25zdCBjaF9hbGxvd3MgPSBhd2FpdCBjaF9hcHByb3ZlKFRva2VuQWRkcmVzcyk7XG4gICAgICAgICAgICBpZiAoY2hfYWxsb3dzIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHByb3ZlID0gYXdhaXQgdHJ5X2FwcHJvdmUoVG9rZW5BZGRyZXNzLCBcIjk5OTk5OTk5OTk5OTk5OTk5OVwiLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcHJvdmVcIiwgYXBwcm92ZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG4gICAgY29uc3QgaGFuZGxlU3VibGl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJcIik7XG5cbiAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IFNlbmRlclNpbmdlciA9IGRpc3BlcnNlLmNvbm5lY3Qoc2luZ2VyKTtcblxuXG5cblxuICAgICAgICBjb25zdCB3YWxsZXRzID0gQXJlYVdBLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgY29uc3Qgd2FsbGV0ID0gW107XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IFtdO1xuICAgICAgICBjb25zdCB0b3RhbHRva2VucyA9IDA7XG5cblxuXG4gICAgICAgIHdhbGxldHMuZm9yRWFjaCh3MSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0MSA9IHcxLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBjb25zdCB2MSA9IHV0aWxzLnBhcnNlRXRoZXIodDFbMV0pO1xuXG4gICAgICAgICAgICB3YWxsZXQucHVzaCh0MVswXSk7XG4gICAgICAgICAgICBhbW91bnQucHVzaCh2MS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRvdGFsdG9rZW5zICs9IHBhcnNlSW50KHQxWzFdKTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInYxXCIsYW1vdW50ICsgVG9rZW5BZGRyZXNzKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2VuZGVyU2luZ2VyLmRpc3BlcnNlVG9rZW4oVG9rZW5BZGRyZXNzLCB3YWxsZXQsIGFtb3VudCk7XG4gICAgICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcImhhc2g6XCIgKyByZXNwb25zZS5oYXNoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKDxMYXlvdXQ+XG4gICAgICAgIDxGb3JtIGVycm9yPXshIWVycm9NZXNzYWdlfSBzdWNjZXNzPXshIXN1Y2Nlc3NNZXNzYWdlfSBvblN1Ym1pdD17aGFuZGxlU3VibGl0fT5cbiAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J0NoYWluJyBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj0nQ2hhaW4nIC8+XG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9J2VxdWFsJz5cbiAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtJbnB1dH0gbGFiZWw9J1Rva2VuJyB2YWx1ZT17VG9rZW59IHBsYWNlaG9sZGVyPScweC4uLicgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFRva2VuKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG5cbiAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtUZXh0QXJlYX0gbGFiZWw9XCJXYWxldHMgVG9rZW5zXCIgdmFsdWU9e0FyZWFXQX0gcGxhY2Vob2xkZXI9J1dhbGV0cyBUb2tlbnMnIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRBcmVhV0EoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cblxuXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2lzTG9hZGluZ30gcHJpbWFyeT5TZW5kPC9CdXR0b24+XG5cbiAgICAgICAgICAgIHtDaGVja0FwcHJvdmUgPyA8QnV0dG9uIGxvYWRpbmc9e2lzTG9hZGluZ30gcHJpbWFyeSB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRBcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+IDpcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2lzTG9hZGluZ30gZGlzYWJsZWQgdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kQXBwcm92ZX0+QXBwcm92ZTwvQnV0dG9uPn1cblxuICAgICAgICAgICAgPE1lc3NhZ2Ugc3R5bGU9e3sgd29yZEJyZWFrOiAnYnJlYWstd29yZCcgfX0gZXJyb3IgaGVhZGVyPSdFcnJvcjonIGNvbnRlbnQ9e2Vycm9NZXNzYWdlfSAvPlxuICAgICAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXI9J3N1Y2Nlc3M6JyBjb250ZW50PXtzdWNjZXNzTWVzc2FnZX0gLz5cbiAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgIDxwPjB4YTM0ZGRiNzM5MzcwNkNCM0M4YzQyMzI4MzlEQ2MwMzNFQ0ZiRDBhNTwvcD5cblxuXG5cbiAgICA8L0xheW91dD4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZW5kZXI7Il0sIm5hbWVzIjpbInV0aWxzIiwidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJMYXlvdXQiLCJkaXNwZXJzZSIsInByb3ZpZGVyIiwiY2hfYXBwcm92ZSIsInRyeV9hcHByb3ZlIiwic2VuZGVyIiwiQ2hlY2tBcHByb3ZlIiwic2V0Q2hlY2tBcHByb3ZlIiwiVG9rZW4iLCJzZXRUb2tlbiIsIkFyZWFXQSIsInNldEFyZWFXQSIsInN0b3BlcjEiLCJlcnJvTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiVG9rZW5BZGRyZXNzIiwib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsImNoZWNrZXJzIiwiY2hfYWxsb3dzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImVycm9yIiwibWVzc2FnZSIsImhhbmRBcHByb3ZlIiwiZXZlbnQiLCJhcHByb3ZlIiwicHJldmVudERlZmF1bHQiLCJ0b1N0cmluZyIsImhhbmRsZVN1YmxpdCIsInNpbmdlciIsIlNlbmRlclNpbmdlciIsIndhbGxldHMiLCJ3YWxsZXQiLCJhbW91bnQiLCJ0b3RhbHRva2VucyIsInJlc3BvbnNlIiwiZ2V0U2lnbmVyIiwiY29ubmVjdCIsInNwbGl0IiwiZm9yRWFjaCIsIncxIiwidDEiLCJ2MSIsInBhcnNlRXRoZXIiLCJwdXNoIiwicGFyc2VJbnQiLCJkaXNwZXJzZVRva2VuIiwiaGFzaCIsInN1Y2Nlc3MiLCJvblN1Ym1pdCIsIkdyb3VwIiwiRmllbGQiLCJjb250cm9sIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIndpZHRocyIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibG9hZGluZyIsInByaW1hcnkiLCJ0eXBlIiwib25DbGljayIsImRpc2FibGVkIiwic3R5bGUiLCJ3b3JkQnJlYWsiLCJoZWFkZXIiLCJjb250ZW50IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});