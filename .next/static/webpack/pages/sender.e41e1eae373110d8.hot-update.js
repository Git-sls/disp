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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref[0], setToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref1[0], setAreaWA = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref2[0], setErrorMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref3[0], setSuccessMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref4[0], setLoading = ref4[1];\n    var TokenAddress = Token;\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    function f() {\n        return _f.apply(this, arguments);\n    }\n    function _f() {\n        _f = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ch_allows;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        return _ctx.abrupt(\"return\", 1);\n                    case 6:\n                        {\n                            ch_allows = (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(TokenAddress);\n                            console.log(\"ch_allows\", ch_allows);\n                        }\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _f.apply(this, arguments);\n    }\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, wallets, wallet, amount, totaltokens, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_7__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 21:\n                        _ctx.prev = 21;\n                        setLoading(false);\n                        return _ctx.finish(21);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17,\n                    21,\n                    24\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n            error: !!erroMessage,\n            success: !!successMessage,\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Select,\n                        label: \"Chain\",\n                        options: options,\n                        placeholder: \"Chain\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 88,\n                        columnNumber: 7\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 87,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input,\n                            label: \"Token\",\n                            value: Token,\n                            placeholder: \"Token Address\",\n                            onChange: function(event) {\n                                return setToken(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.TextArea,\n                            label: \"Walets Tokens\",\n                            value: AreaWA,\n                            placeholder: \"Walets Tokens\",\n                            onChange: function(event) {\n                                return setAreaWA(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                    loading: isLoading,\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                    style: {\n                        wordBreak: \"break-word\"\n                    },\n                    error: true,\n                    header: \"Error:\",\n                    content: erroMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                    success: true,\n                    header: \"success:\",\n                    content: successMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 85,\n        columnNumber: 15\n    }, _this);\n};\n_s(sender, \"m54akTrsXMBfn6yNj3EmRHxI4wU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMEQsT0FBTyxFQUFFekQsb0RBQUs7NEJBQUUwRCxLQUFLLEVBQUMsT0FBTzs0QkFBQ25DLEtBQUssRUFBRWQsS0FBSzs0QkFBRWtELFdBQVcsRUFBQyxlQUFlOzRCQUFDRSxRQUFRLEVBQUloQyxTQUFBQSxLQUFLO3VDQUFFbkIsUUFBUSxDQUFDbUIsS0FBSyxDQUFDaUMsTUFBTSxDQUFDdkMsS0FBSyxDQUFDOzZCQUFBOzs7OztpQ0FBSTtzQ0FFdkksOERBQUN4Qix5REFBVTs0QkFBQzBELE9BQU8sRUFBRXRELHVEQUFROzRCQUFFdUQsS0FBSyxFQUFDLGVBQWU7NEJBQUNuQyxLQUFLLEVBQUVaLE1BQU07NEJBQUVnRCxXQUFXLEVBQUMsZUFBZTs0QkFBQ0UsUUFBUSxFQUFJaEMsU0FBQUEsS0FBSzt1Q0FBRWpCLFNBQVMsQ0FBQ2lCLEtBQUssQ0FBQ2lDLE1BQU0sQ0FBQ3ZDLEtBQUssQ0FBQzs2QkFBQTs7Ozs7aUNBQUc7Ozs7Ozt5QkFHeEk7OEJBQ2IsOERBQUN6QixxREFBTTtvQkFBQ2lFLE9BQU8sRUFBRTlDLFNBQVM7b0JBQUUrQyxPQUFPOzhCQUFDLE1BQUk7Ozs7O3lCQUFTOzhCQUNqRCw4REFBQy9ELHNEQUFPO29CQUFDZ0UsS0FBSyxFQUFFO3dCQUFDQyxTQUFTLEVBQUUsWUFBWTtxQkFBQztvQkFBRWYsS0FBSztvQkFBQ2dCLE1BQU0sRUFBRyxRQUFRO29CQUFDQyxPQUFPLEVBQUl2RCxXQUFXOzs7Ozt5QkFBRzs4QkFDNUYsOERBQUNaLHNEQUFPO29CQUFDb0QsT0FBTztvQkFBQ2MsTUFBTSxFQUFHLFVBQVU7b0JBQUNDLE9BQU8sRUFBSXJELGNBQWM7Ozs7O3lCQUFHOzs7Ozs7aUJBQzFEOzs7OzthQUNGLENBQUU7Q0FDZDtHQTVGS1AsTUFBTTtBQThGWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlbmRlci5qcz9kZmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV0aWxzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgZGlzcGVyc2UgZnJvbSBcIi4uL2Rpc3BlcnNlXCI7XG5pbXBvcnQgcHJvdmlkZXIgZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgY2hfYXBwcm92ZSBmcm9tIFwiLi4vdXRpbHMvY2hfYXBwcm92ZVwiO1xuXG5cbmNvbnN0IHNlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbVG9rZW4sc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW0FyZWFXQSxzZXRBcmVhV0FdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbZXJyb01lc3NhZ2Usc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzdWNjZXNzTWVzc2FnZSxzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgVG9rZW5BZGRyZXNzID0gVG9rZW47XG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IGtleTogJ0UnLCB0ZXh0OiAnRVRIJywgdmFsdWU6ICdldGgnIH0sXG4gICAgICAgIHsga2V5OiAnQicsIHRleHQ6ICdCU0MnLCB2YWx1ZTogJ2JzYycgfSxcbiAgICAgICAgeyBrZXk6ICdNJywgdGV4dDogJ01BVElDJywgdmFsdWU6ICdtYXRpYycgfSxcbiAgICAgIF1cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGYoKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgICBpZighVG9rZW5BZGRyZXNzKXtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcItCf0YPRgdGC0L7QuSDQsNC00YDQtdGBIHRva2VuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICAgIH1lbHNle1xuICAgICAgICBjb25zdCBjaF9hbGxvd3MgPSBjaF9hcHByb3ZlKFRva2VuQWRkcmVzcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hfYWxsb3dzXCIsY2hfYWxsb3dzKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBoYW5kbGVTdWJsaXQgPWFzeW5jIChldmVudCkgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJcIik7XG5cbiAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IFNlbmRlclNpbmdlciA9IGRpc3BlcnNlLmNvbm5lY3Qoc2luZ2VyKTtcblxuXG5cbiAgICAgIFxuICAgICAgICBjb25zdCB3YWxsZXRzID0gQXJlYVdBLnNwbGl0KCdcXG4nKTsgXG4gICAgICAgIGNvbnN0IHdhbGxldD1bXTtcbiAgICAgICAgY29uc3QgYW1vdW50PVtdO1xuICAgICAgICBjb25zdCB0b3RhbHRva2VucyA9MDtcbiAgICAgXG5cblxuICAgICAgICB3YWxsZXRzLmZvckVhY2godzEgPT4ge1xuICAgICAgICAgICAgY29uc3QgdDE9dzEuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGNvbnN0IHYxID0gdXRpbHMucGFyc2VFdGhlcih0MVsxXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhbGxldC5wdXNoKHQxWzBdKTtcbiAgICAgICAgICAgIGFtb3VudC5wdXNoKHYxLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgdG90YWx0b2tlbnMgKz1wYXJzZUludCh0MVsxXSk7XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ2MVwiLGFtb3VudCArIFRva2VuQWRkcmVzcyk7XG4gICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdHJ5e1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNlbmRlclNpbmdlci5kaXNwZXJzZVRva2VuKFRva2VuQWRkcmVzcyx3YWxsZXQsYW1vdW50KTtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKFwiaGFzaDpcIiArIHJlc3BvbnNlLmhhc2gpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gXG5cbiAgICB9XG5cblxuICAgIHJldHVybiAoICA8TGF5b3V0PlxuICAgICAgPEZvcm0gZXJyb3I9eyEhZXJyb01lc3NhZ2V9IHN1Y2Nlc3M9eyEhc3VjY2Vzc01lc3NhZ2V9IG9uU3VibWl0PXtoYW5kbGVTdWJsaXR9PlxuICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtTZWxlY3R9IGxhYmVsPSdDaGFpbicgb3B0aW9ucz17b3B0aW9uc30gcGxhY2Vob2xkZXI9J0NoYWluJy8+XG4gICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nVG9rZW4nIHZhbHVlPXtUb2tlbn0gcGxhY2Vob2xkZXI9J1Rva2VuIEFkZHJlc3MnIG9uQ2hhbmdlID0ge2V2ZW50PT5zZXRUb2tlbihldmVudC50YXJnZXQudmFsdWUpIH0vPlxuICAgICBcbiAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtUZXh0QXJlYX0gbGFiZWw9XCJXYWxldHMgVG9rZW5zXCIgdmFsdWU9e0FyZWFXQX0gcGxhY2Vob2xkZXI9J1dhbGV0cyBUb2tlbnMnIG9uQ2hhbmdlID0ge2V2ZW50PT5zZXRBcmVhV0EoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBwcmltYXJ5PlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgPE1lc3NhZ2Ugc3R5bGU9e3t3b3JkQnJlYWs6ICdicmVhay13b3JkJ319IGVycm9yIGhlYWRlciA9ICdFcnJvcjonIGNvbnRlbnQgPSB7ZXJyb01lc3NhZ2V9Lz4gXG4gICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyID0gJ3N1Y2Nlc3M6JyBjb250ZW50ID0ge3N1Y2Nlc3NNZXNzYWdlfS8+IFxuICAgICAgICA8L0Zvcm0+XG4gICAgPC9MYXlvdXQ+KTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IHNlbmRlcjsiXSwibmFtZXMiOlsidXRpbHMiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJTZWxlY3QiLCJUZXh0QXJlYSIsIkxheW91dCIsImRpc3BlcnNlIiwicHJvdmlkZXIiLCJjaF9hcHByb3ZlIiwic2VuZGVyIiwiVG9rZW4iLCJzZXRUb2tlbiIsIkFyZWFXQSIsInNldEFyZWFXQSIsImVycm9NZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJUb2tlbkFkZHJlc3MiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiZiIsImNoX2FsbG93cyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJsaXQiLCJldmVudCIsInNpbmdlciIsIlNlbmRlclNpbmdlciIsIndhbGxldHMiLCJ3YWxsZXQiLCJhbW91bnQiLCJ0b3RhbHRva2VucyIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJnZXRTaWduZXIiLCJjb25uZWN0Iiwic3BsaXQiLCJmb3JFYWNoIiwidzEiLCJ0MSIsInYxIiwicGFyc2VFdGhlciIsInB1c2giLCJ0b1N0cmluZyIsInBhcnNlSW50IiwiZGlzcGVyc2VUb2tlbiIsImhhc2giLCJlcnJvciIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwib25TdWJtaXQiLCJHcm91cCIsIkZpZWxkIiwiY29udHJvbCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ3aWR0aHMiLCJvbkNoYW5nZSIsInRhcmdldCIsImxvYWRpbmciLCJwcmltYXJ5Iiwic3R5bGUiLCJ3b3JkQnJlYWsiLCJoZWFkZXIiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});