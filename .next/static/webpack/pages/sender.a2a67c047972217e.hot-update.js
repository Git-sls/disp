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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\n/* harmony import */ var _utils_try_approve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/try_approve */ \"./utils/try_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), CheckApprove = ref[0], setCheckApprove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref1[0], setToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref2[0], setAreaWA = ref2[1];\n    // const [stoper,setStoper] = useState(0);\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref4[0], setSuccessMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref5[0], setLoading = ref5[1];\n    var TokenAddress = Token;\n    var preTokenA = \"\";\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        // { key: 'B', text: 'BSC', value: 'bsc' },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    if (preTokenA != TokenAddress) {\n        checkers(TokenAddress);\n    }\n    function checkers(adress) {\n        return _checkers.apply(this, arguments);\n    }\n    function _checkers() {\n        _checkers = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(adress) {\n            var ch_allows;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        preTokenA = adress;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(adress);\n                    case 4:\n                        ch_allows = _ctx.sent;\n                        console.log(\"ch_allows\", ch_allows);\n                        if (ch_allows <= 0) {\n                            //reset error && active button\n                            setErrorMessage(\"\");\n                            setCheckApprove(true);\n                        }\n                        _ctx.next = 14;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        setErrorMessage(\"\\u043F\\u0440\\u043E\\u0432\\u0435\\u0440\\u044C \\u0430\\u0434\\u0440\\u0435\\u0441 \\u0442\\u043E\\u043A\\u0435\\u043D\\u0430\" + _ctx.t0.message);\n                        setCheckApprove(false);\n                    case 14:\n                        return _ctx.abrupt(\"return\");\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    9\n                ]\n            ]);\n        }));\n        return _checkers.apply(this, arguments);\n    }\n    var handApprove = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var ch_allows, approve;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        if (!TokenAddress) {\n                            _ctx.next = 24;\n                            break;\n                        }\n                        _ctx.next = 6;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                    case 6:\n                        ch_allows = _ctx.sent;\n                        if (!(ch_allows <= 0)) {\n                            _ctx.next = 22;\n                            break;\n                        }\n                        _ctx.prev = 8;\n                        _ctx.next = 11;\n                        return (0,_utils_try_approve__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TokenAddress, \"999999999999999999\".toString());\n                    case 11:\n                        approve = _ctx.sent;\n                        console.log(\"approve\", approve);\n                        _ctx.next = 19;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](8);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 19:\n                        _ctx.prev = 19;\n                        setLoading(false);\n                        return _ctx.finish(19);\n                    case 22:\n                        _ctx.next = 25;\n                        break;\n                    case 24:\n                        return _ctx.abrupt(\"return\");\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    8,\n                    15,\n                    19,\n                    22\n                ]\n            ]);\n        }));\n        return function handApprove(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, wallets, wallet, amount, totaltokens, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 21:\n                        _ctx.prev = 21;\n                        setLoading(false);\n                        return _ctx.finish(21);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17,\n                    21,\n                    24\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {\n                error: !!erroMessage,\n                success: !!successMessage,\n                onSubmit: handleSublit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {}, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 149,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Input,\n                                label: \"Token\",\n                                value: Token,\n                                placeholder: \"0x...\",\n                                onChange: function(event) {\n                                    return setToken(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 153,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.TextArea,\n                                label: \"Walets Tokens\",\n                                value: AreaWA,\n                                placeholder: \"Walets Tokens\",\n                                onChange: function(event) {\n                                    return setAreaWA(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 155,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 152,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 159,\n                        columnNumber: 17\n                    }, _this),\n                    CheckApprove ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 161,\n                        columnNumber: 33\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        disabled: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 162,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        style: {\n                            wordBreak: \"break-word\"\n                        },\n                        error: true,\n                        header: \"Error:\",\n                        content: erroMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 164,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        success: true,\n                        header: \"success:\",\n                        content: successMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 165,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 148,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 167,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"test tokens:\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 168,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"0xa34ddb7393706CB3C8c4232839DCc033ECFbD0a5\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 169,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 147,\n        columnNumber: 17\n    }, _this);\n};\n_s(sender, \"mKbv1S68ahQUlUzoa1+71N+0720=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFFOUQsV0FBVzs7Ozs7NkJBQUk7a0NBQzNGLDhEQUFDZixzREFBTzt3QkFBQzJELE9BQU87d0JBQUNpQixNQUFNLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFFNUQsY0FBYzs7Ozs7NkJBQUk7Ozs7OztxQkFDM0Q7MEJBQ1AsOERBQUM2RCxHQUFDOzs7O3FCQUFLOzBCQUNQLDhEQUFDQSxHQUFDOzBCQUFDLGNBQVk7Ozs7O3FCQUFJOzBCQUNuQiw4REFBQ0EsR0FBQzswQkFBQyw0Q0FBMEM7Ozs7O3FCQUFJOzs7Ozs7YUFJNUMsQ0FBRTtDQUNkO0dBbktDdEUsTUFBTTtBQXFLUiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlbmRlci5qcz9kZmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV0aWxzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgZGlzcGVyc2UgZnJvbSBcIi4uL2Rpc3BlcnNlXCI7XG5pbXBvcnQgcHJvdmlkZXIgZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgY2hfYXBwcm92ZSBmcm9tIFwiLi4vdXRpbHMvY2hfYXBwcm92ZVwiO1xuaW1wb3J0IHRyeV9hcHByb3ZlIGZyb20gXCIuLi91dGlscy90cnlfYXBwcm92ZVwiO1xuXG5cbmNvbnN0IHNlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbQ2hlY2tBcHByb3ZlLCBzZXRDaGVja0FwcHJvdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtUb2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW0FyZWFXQSwgc2V0QXJlYVdBXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgLy8gY29uc3QgW3N0b3BlcixzZXRTdG9wZXJdID0gdXNlU3RhdGUoMCk7XG5cblxuXG5cbiAgICBjb25zdCBbZXJyb01lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgVG9rZW5BZGRyZXNzID0gVG9rZW47XG4gICAgY29uc3QgcHJlVG9rZW5BID0gXCJcIjtcbiAgICBcbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IGtleTogJ0UnLCB0ZXh0OiAnRVRIJywgdmFsdWU6ICdldGgnIH0sXG4gICAgICAgLy8geyBrZXk6ICdCJywgdGV4dDogJ0JTQycsIHZhbHVlOiAnYnNjJyB9LFxuICAgICAgICB7IGtleTogJ00nLCB0ZXh0OiAnTUFUSUMnLCB2YWx1ZTogJ21hdGljJyB9LFxuICAgIF1cbiAgICBcbiBcbiAgICBpZiAocHJlVG9rZW5BICE9IFRva2VuQWRkcmVzcyAgKSB7XG4gICAgICAgIFxuICAgICAgICBjaGVja2VycyhUb2tlbkFkZHJlc3MpO1xuICAgICAgICBcbiAgICB9XG4gIFxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tlcnMoYWRyZXNzKSB7XG5cbiAgICAgICAgcHJlVG9rZW5BID0gYWRyZXNzO1xuICAgIFxuICAgICBcblxuICAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgY2hfYWxsb3dzID0gYXdhaXQgY2hfYXBwcm92ZShhZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoX2FsbG93c1wiLGNoX2FsbG93cyk7XG5cblxuICAgICAgIGlmKGNoX2FsbG93cyA8PTApe1xuXG4gICAgICAgLy9yZXNldCBlcnJvciAmJiBhY3RpdmUgYnV0dG9uXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICAgICAgc2V0Q2hlY2tBcHByb3ZlKHRydWUpO1xuICAgICAgIH0gICB9ICAgICBcbiAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCLQv9GA0L7QstC10YDRjCDQsNC00YDQtdGBINGC0L7QutC10L3QsFwiICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgIHNldENoZWNrQXBwcm92ZShmYWxzZSk7XG4gICAgICAgICAgIH1cbiAgICAgIFxuXG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG5cblxuICAgIGNvbnN0IGhhbmRBcHByb3ZlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJcIik7XG5cbiAgICAgICAgICAgIGlmIChUb2tlbkFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaF9hbGxvd3MgPSBhd2FpdCBjaF9hcHByb3ZlKFRva2VuQWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoX2FsbG93cyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHByb3ZlID0gYXdhaXQgdHJ5X2FwcHJvdmUoVG9rZW5BZGRyZXNzLCBcIjk5OTk5OTk5OTk5OTk5OTk5OVwiLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHByb3ZlXCIsIGFwcHJvdmUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBoYW5kbGVTdWJsaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcblxuICAgICAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgICAgICBjb25zdCBTZW5kZXJTaW5nZXIgPSBkaXNwZXJzZS5jb25uZWN0KHNpbmdlcik7XG5cblxuXG5cbiAgICAgICAgICAgIGNvbnN0IHdhbGxldHMgPSBBcmVhV0Euc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gW107XG4gICAgICAgICAgICBjb25zdCBhbW91bnQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsdG9rZW5zID0gMDtcblxuXG5cbiAgICAgICAgICAgIHdhbGxldHMuZm9yRWFjaCh3MSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdDEgPSB3MS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHYxID0gdXRpbHMucGFyc2VFdGhlcih0MVsxXSk7XG5cbiAgICAgICAgICAgICAgICB3YWxsZXQucHVzaCh0MVswXSk7XG4gICAgICAgICAgICAgICAgYW1vdW50LnB1c2godjEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgdG90YWx0b2tlbnMgKz0gcGFyc2VJbnQodDFbMV0pO1xuXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInYxXCIsYW1vdW50ICsgVG9rZW5BZGRyZXNzKTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2VuZGVyU2luZ2VyLmRpc3BlcnNlVG9rZW4oVG9rZW5BZGRyZXNzLCB3YWxsZXQsIGFtb3VudCk7XG4gICAgICAgICAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJoYXNoOlwiICsgcmVzcG9uc2UuaGFzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuICg8TGF5b3V0PlxuICAgICAgICAgICAgPEZvcm0gZXJyb3I9eyEhZXJyb01lc3NhZ2V9IHN1Y2Nlc3M9eyEhc3VjY2Vzc01lc3NhZ2V9IG9uU3VibWl0PXtoYW5kbGVTdWJsaXR9PlxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICB7LyogPEZvcm0uRmllbGQgY29udHJvbD17U2VsZWN0fSBsYWJlbD0nQ2hhaW4nIG9wdGlvbnM9e29wdGlvbnN9IHBsYWNlaG9sZGVyPSdDaGFpbicgLz4gKi99XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtJbnB1dH0gbGFiZWw9J1Rva2VuJyB2YWx1ZT17VG9rZW59IHBsYWNlaG9sZGVyPScweC4uLicgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFRva2VuKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17VGV4dEFyZWF9IGxhYmVsPVwiV2FsZXRzIFRva2Vuc1wiIHZhbHVlPXtBcmVhV0F9IHBsYWNlaG9sZGVyPSdXYWxldHMgVG9rZW5zJyBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0QXJlYVdBKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG5cblxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2lzTG9hZGluZ30gcHJpbWFyeT5TZW5kPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICB7Q2hlY2tBcHByb3ZlID8gPEJ1dHRvbiBsb2FkaW5nPXtpc0xvYWRpbmd9IHByaW1hcnkgdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kQXBwcm92ZX0+QXBwcm92ZTwvQnV0dG9uPiA6XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBkaXNhYmxlZCB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRBcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+fVxuXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2Ugc3R5bGU9e3sgd29yZEJyZWFrOiAnYnJlYWstd29yZCcgfX0gZXJyb3IgaGVhZGVyPSdFcnJvcjonIGNvbnRlbnQ9e2Vycm9NZXNzYWdlfSAvPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyPSdzdWNjZXNzOicgY29udGVudD17c3VjY2Vzc01lc3NhZ2V9IC8+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICA8cD50ZXN0IHRva2Vuczo8L3A+XG4gICAgICAgICAgICA8cD4weGEzNGRkYjczOTM3MDZDQjNDOGM0MjMyODM5RENjMDMzRUNGYkQwYTU8L3A+XG5cblxuXG4gICAgICAgIDwvTGF5b3V0Pik7XG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgc2VuZGVyOyJdLCJuYW1lcyI6WyJ1dGlscyIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIlNlbGVjdCIsIlRleHRBcmVhIiwiTGF5b3V0IiwiZGlzcGVyc2UiLCJwcm92aWRlciIsImNoX2FwcHJvdmUiLCJ0cnlfYXBwcm92ZSIsInNlbmRlciIsIkNoZWNrQXBwcm92ZSIsInNldENoZWNrQXBwcm92ZSIsIlRva2VuIiwic2V0VG9rZW4iLCJBcmVhV0EiLCJzZXRBcmVhV0EiLCJlcnJvTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiVG9rZW5BZGRyZXNzIiwicHJlVG9rZW5BIiwib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsImNoZWNrZXJzIiwiYWRyZXNzIiwiY2hfYWxsb3dzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsImhhbmRBcHByb3ZlIiwiZXZlbnQiLCJhcHByb3ZlIiwicHJldmVudERlZmF1bHQiLCJ0b1N0cmluZyIsImhhbmRsZVN1YmxpdCIsInNpbmdlciIsIlNlbmRlclNpbmdlciIsIndhbGxldHMiLCJ3YWxsZXQiLCJhbW91bnQiLCJ0b3RhbHRva2VucyIsInJlc3BvbnNlIiwiZ2V0U2lnbmVyIiwiY29ubmVjdCIsInNwbGl0IiwiZm9yRWFjaCIsIncxIiwidDEiLCJ2MSIsInBhcnNlRXRoZXIiLCJwdXNoIiwicGFyc2VJbnQiLCJkaXNwZXJzZVRva2VuIiwiaGFzaCIsInN1Y2Nlc3MiLCJvblN1Ym1pdCIsIkdyb3VwIiwid2lkdGhzIiwiRmllbGQiLCJjb250cm9sIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibG9hZGluZyIsInByaW1hcnkiLCJ0eXBlIiwib25DbGljayIsImRpc2FibGVkIiwic3R5bGUiLCJ3b3JkQnJlYWsiLCJoZWFkZXIiLCJjb250ZW50IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});