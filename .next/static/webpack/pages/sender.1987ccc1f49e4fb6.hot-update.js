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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\n/* harmony import */ var _utils_try_approve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/try_approve */ \"./utils/try_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), CheckApprove = ref[0], setCheckApprove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref1[0], setToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref2[0], setAreaWA = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref4[0], setSuccessMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref5[0], setLoading = ref5[1];\n    var TokenAddress = Token;\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    if (TokenAddress && !CheckApprove) {\n        checkers();\n    }\n    function checkers() {\n        return _checkers.apply(this, arguments);\n    }\n    function _checkers() {\n        _checkers = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ch_allows;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(TokenAddress.length !== 42)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        setErrorMessage(\"\\u042D\\u0442\\u043E \\u043D\\u0435 \\u0430\\u0434\\u0440\\u0435\\u0441 \\u0442\\u043E\\u043A\\u0435\\u043D\\u0430\");\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        if (TokenAddress) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        setErrorMessage(\"\\u041F\\u0443\\u0441\\u0442\\u043E\\u0439 \\u0430\\u0434\\u0440\\u0435\\u0441 token\");\n                        return _ctx.abrupt(\"return\");\n                    case 8:\n                        _ctx.next = 10;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 10:\n                        ch_allows = _ctx.sent;\n                        console.log(\"ch_allows\", ch_allows);\n                        if (ch_allows <= 0) {\n                            setCheckApprove(true);\n                            console.log(\"CheckApprove\", CheckApprove);\n                        }\n                    case 13:\n                        ;\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkers.apply(this, arguments);\n    }\n    var handApprove = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var ch_allows, approve;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        if (!TokenAddress) {\n                            _ctx.next = 24;\n                            break;\n                        }\n                        _ctx.next = 6;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 6:\n                        ch_allows = _ctx.sent;\n                        if (!(ch_allows <= 0)) {\n                            _ctx.next = 22;\n                            break;\n                        }\n                        _ctx.prev = 8;\n                        _ctx.next = 11;\n                        return (0,_utils_try_approve__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TokenAddress, \"999999999999999999\".toString());\n                    case 11:\n                        approve = _ctx.sent;\n                        console.log(\"approve\", approve);\n                        _ctx.next = 19;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](8);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 19:\n                        _ctx.prev = 19;\n                        setLoading(false);\n                        return _ctx.finish(19);\n                    case 22:\n                        _ctx.next = 25;\n                        break;\n                    case 24:\n                        return _ctx.abrupt(\"return\");\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    8,\n                    15,\n                    19,\n                    22\n                ]\n            ]);\n        }));\n        return function handApprove(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, wallets, wallet, amount, totaltokens, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 21:\n                        _ctx.prev = 21;\n                        setLoading(false);\n                        return _ctx.finish(21);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17,\n                    21,\n                    24\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {\n                error: !!erroMessage,\n                success: !!successMessage,\n                onSubmit: handleSublit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 134,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 133,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Input,\n                                label: \"Token\",\n                                value: Token,\n                                placeholder: \"Token Address\",\n                                onChange: function(event) {\n                                    return setToken(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.TextArea,\n                                label: \"Walets Tokens\",\n                                value: AreaWA,\n                                placeholder: \"Walets Tokens\",\n                                onChange: function(event) {\n                                    return setAreaWA(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 139,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, _this),\n                    CheckApprove ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 145,\n                        columnNumber: 23\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        disabled: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        style: {\n                            wordBreak: \"break-word\"\n                        },\n                        error: true,\n                        header: \"Error:\",\n                        content: erroMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        success: true,\n                        header: \"success:\",\n                        content: successMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"0xa34ddb7393706CB3C8c4232839DCc033ECFbD0a5\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 152,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 131,\n        columnNumber: 15\n    }, _this);\n};\n_s(sender, \"DvHFsLaCQ8ChE423p0cWhK6JLxs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tDQUV4Riw4REFBQy9CLHNEQUFPO3dCQUFDeUUsS0FBSyxFQUFFOzRCQUFDQyxTQUFTLEVBQUUsWUFBWTt5QkFBQzt3QkFBRXRDLEtBQUs7d0JBQUN1QyxNQUFNLEVBQUcsUUFBUTt3QkFBQ0MsT0FBTyxFQUFJN0QsV0FBVzs7Ozs7NkJBQUc7a0NBQzVGLDhEQUFDZixzREFBTzt3QkFBQzBELE9BQU87d0JBQUNpQixNQUFNLEVBQUcsVUFBVTt3QkFBQ0MsT0FBTyxFQUFJM0QsY0FBYzs7Ozs7NkJBQUc7Ozs7OztxQkFDMUQ7MEJBRVAsOERBQUM0RCxHQUFDOzBCQUFDLDRDQUEwQzs7Ozs7cUJBQUk7Ozs7OzthQUk1QyxDQUFFO0NBQ2Q7R0FsSktyRSxNQUFNO0FBb0paLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VuZGVyLmpzP2RmZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgU2VsZWN0LCBUZXh0QXJlYSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBkaXNwZXJzZSBmcm9tIFwiLi4vZGlzcGVyc2VcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCBjaF9hcHByb3ZlIGZyb20gXCIuLi91dGlscy9jaF9hcHByb3ZlXCI7XG5pbXBvcnQgdHJ5X2FwcHJvdmUgZnJvbSBcIi4uL3V0aWxzL3RyeV9hcHByb3ZlXCI7XG5cblxuY29uc3Qgc2VuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtDaGVja0FwcHJvdmUsc2V0Q2hlY2tBcHByb3ZlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtUb2tlbixzZXRUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbQXJlYVdBLHNldEFyZWFXQV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgIFxuXG4gICAgXG5cbiAgICBjb25zdCBbZXJyb01lc3NhZ2Usc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzdWNjZXNzTWVzc2FnZSxzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgVG9rZW5BZGRyZXNzID0gVG9rZW47XG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IGtleTogJ0UnLCB0ZXh0OiAnRVRIJywgdmFsdWU6ICdldGgnIH0sXG4gICAgICAgIHsga2V5OiAnQicsIHRleHQ6ICdCU0MnLCB2YWx1ZTogJ2JzYycgfSxcbiAgICAgICAgeyBrZXk6ICdNJywgdGV4dDogJ01BVElDJywgdmFsdWU6ICdtYXRpYycgfSxcbiAgICAgIF1cblxuICAgICAgaWYoVG9rZW5BZGRyZXNzICYmICFDaGVja0FwcHJvdmUpe1xuICAgICAgICBjaGVja2VycygpO1xuICAgIH1cblxuICAgICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tlcnMoKSB7XG4gICAgICAgIGlmKFRva2VuQWRkcmVzcy5sZW5ndGggIT09NDIpe1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi0K3RgtC+INC90LUg0LDQtNGA0LXRgSDRgtC+0LrQtdC90LBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgaWYoIVRva2VuQWRkcmVzcyl7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCLQn9GD0YHRgtC+0Lkg0LDQtNGA0LXRgSB0b2tlblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgY2hfYWxsb3dzID0gYXdhaXQgY2hfYXBwcm92ZShUb2tlbkFkZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoX2FsbG93c1wiLGNoX2FsbG93cyk7XG4gICAgICAgIGlmIChjaF9hbGxvd3MgPD0gMCApe1xuICAgICAgICAgICAgc2V0Q2hlY2tBcHByb3ZlKHRydWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGVja0FwcHJvdmVcIixDaGVja0FwcHJvdmUpO1xuICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gIFxuXG5cbiAgICBjb25zdCBoYW5kQXBwcm92ZSA9IGFzeW5jKGV2ZW50KSA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmKFRva2VuQWRkcmVzcyl7XG4gICAgICAgICAgICBjb25zdCBjaF9hbGxvd3MgPSBhd2FpdCBjaF9hcHByb3ZlKFRva2VuQWRkcmVzcyk7XG4gICAgICAgICAgICBpZiAoY2hfYWxsb3dzIDw9IDApIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGFwcHJvdmUgPSBhd2FpdCB0cnlfYXBwcm92ZShUb2tlbkFkZHJlc3MsXCI5OTk5OTk5OTk5OTk5OTk5OTlcIi50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwcm92ZVwiLGFwcHJvdmUpO1xuICAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfWZpbmFsbHl7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZVN1YmxpdCA9YXN5bmMgKGV2ZW50KSA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcblxuICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgU2VuZGVyU2luZ2VyID0gZGlzcGVyc2UuY29ubmVjdChzaW5nZXIpO1xuXG5cblxuICAgICAgXG4gICAgICAgIGNvbnN0IHdhbGxldHMgPSBBcmVhV0Euc3BsaXQoJ1xcbicpOyBcbiAgICAgICAgY29uc3Qgd2FsbGV0PVtdO1xuICAgICAgICBjb25zdCBhbW91bnQ9W107XG4gICAgICAgIGNvbnN0IHRvdGFsdG9rZW5zID0wO1xuICAgICBcblxuXG4gICAgICAgIHdhbGxldHMuZm9yRWFjaCh3MSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0MT13MS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgY29uc3QgdjEgPSB1dGlscy5wYXJzZUV0aGVyKHQxWzFdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FsbGV0LnB1c2godDFbMF0pO1xuICAgICAgICAgICAgYW1vdW50LnB1c2godjEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0b3RhbHRva2VucyArPXBhcnNlSW50KHQxWzFdKTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInYxXCIsYW1vdW50ICsgVG9rZW5BZGRyZXNzKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0cnl7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2VuZGVyU2luZ2VyLmRpc3BlcnNlVG9rZW4oVG9rZW5BZGRyZXNzLHdhbGxldCxhbW91bnQpO1xuICAgICAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJoYXNoOlwiICsgcmVzcG9uc2UuaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiBcblxuICAgIH1cblxuXG4gICAgcmV0dXJuICggIDxMYXlvdXQ+XG4gICAgICA8Rm9ybSBlcnJvcj17ISFlcnJvTWVzc2FnZX0gc3VjY2Vzcz17ISFzdWNjZXNzTWVzc2FnZX0gb25TdWJtaXQ9e2hhbmRsZVN1YmxpdH0+XG4gICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J0NoYWluJyBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj0nQ2hhaW4nLz5cbiAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdUb2tlbicgdmFsdWU9e1Rva2VufSBwbGFjZWhvbGRlcj0nVG9rZW4gQWRkcmVzcycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldFRva2VuKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XG4gICAgIFxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1RleHRBcmVhfSBsYWJlbD1cIldhbGV0cyBUb2tlbnNcIiB2YWx1ZT17QXJlYVdBfSBwbGFjZWhvbGRlcj0nV2FsZXRzIFRva2Vucycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldEFyZWFXQShldmVudC50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtpc0xvYWRpbmd9IHByaW1hcnk+U2VuZDwvQnV0dG9uPlxuICAgICAgICBcbiAgICAgICAge0NoZWNrQXBwcm92ZT88QnV0dG9uIGxvYWRpbmc9e2lzTG9hZGluZ30gcHJpbWFyeSB0eXBlPSdzdWJtaXQnb25DbGljaz17aGFuZEFwcHJvdmV9PkFwcHJvdmU8L0J1dHRvbj46XG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBkaXNhYmxlZCB0eXBlPSdzdWJtaXQnb25DbGljaz17aGFuZEFwcHJvdmV9PkFwcHJvdmU8L0J1dHRvbj59XG4gICAgICAgIFxuICAgICAgICA8TWVzc2FnZSBzdHlsZT17e3dvcmRCcmVhazogJ2JyZWFrLXdvcmQnfX0gZXJyb3IgaGVhZGVyID0gJ0Vycm9yOicgY29udGVudCA9IHtlcnJvTWVzc2FnZX0vPiBcbiAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXIgPSAnc3VjY2VzczonIGNvbnRlbnQgPSB7c3VjY2Vzc01lc3NhZ2V9Lz4gXG4gICAgICAgIDwvRm9ybT5cbiAgICAgXG4gICAgICAgIDxwPjB4YTM0ZGRiNzM5MzcwNkNCM0M4YzQyMzI4MzlEQ2MwMzNFQ0ZiRDBhNTwvcD5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICA8L0xheW91dD4pO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgc2VuZGVyOyJdLCJuYW1lcyI6WyJ1dGlscyIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIlNlbGVjdCIsIlRleHRBcmVhIiwiTGF5b3V0IiwiZGlzcGVyc2UiLCJwcm92aWRlciIsImNoX2FwcHJvdmUiLCJ0cnlfYXBwcm92ZSIsInNlbmRlciIsIkNoZWNrQXBwcm92ZSIsInNldENoZWNrQXBwcm92ZSIsIlRva2VuIiwic2V0VG9rZW4iLCJBcmVhV0EiLCJzZXRBcmVhV0EiLCJlcnJvTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiVG9rZW5BZGRyZXNzIiwib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsImNoZWNrZXJzIiwiY2hfYWxsb3dzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImhhbmRBcHByb3ZlIiwiZXZlbnQiLCJhcHByb3ZlIiwicHJldmVudERlZmF1bHQiLCJ0b1N0cmluZyIsImVycm9yIiwibWVzc2FnZSIsImhhbmRsZVN1YmxpdCIsInNpbmdlciIsIlNlbmRlclNpbmdlciIsIndhbGxldHMiLCJ3YWxsZXQiLCJhbW91bnQiLCJ0b3RhbHRva2VucyIsInJlc3BvbnNlIiwiZ2V0U2lnbmVyIiwiY29ubmVjdCIsInNwbGl0IiwiZm9yRWFjaCIsIncxIiwidDEiLCJ2MSIsInBhcnNlRXRoZXIiLCJwdXNoIiwicGFyc2VJbnQiLCJkaXNwZXJzZVRva2VuIiwiaGFzaCIsInN1Y2Nlc3MiLCJvblN1Ym1pdCIsIkdyb3VwIiwiRmllbGQiLCJjb250cm9sIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIndpZHRocyIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibG9hZGluZyIsInByaW1hcnkiLCJ0eXBlIiwib25DbGljayIsImRpc2FibGVkIiwic3R5bGUiLCJ3b3JkQnJlYWsiLCJoZWFkZXIiLCJjb250ZW50IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});