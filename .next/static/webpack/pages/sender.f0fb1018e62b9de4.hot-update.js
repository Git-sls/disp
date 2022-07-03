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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref[0], setToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref1[0], setAreaWA = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref2[0], setErrorMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref3[0], setSuccessMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref4[0], setLoading = ref4[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, TokenAddress, wallets, wallet, amount, totaltokens;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        TokenAddress = Token.current.value;\n                        wallets = AreaWA.current.value.toString().split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                            console.log(\"v1\", amount + TokenAddress);\n                        });\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n            error: !!erroMessage,\n            success: !!successMessage,\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Select,\n                        label: \"Chain\",\n                        options: options,\n                        placeholder: \"Chain\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 59,\n                        columnNumber: 7\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input,\n                            label: \"Token\",\n                            value: Token,\n                            placeholder: \"Token Address\",\n                            onChange: function(event) {\n                                return setToken(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.TextArea,\n                            label: \"Walets Tokens\",\n                            value: AreaWA,\n                            placeholder: \"Walets Tokens\",\n                            onChange: function(event) {\n                                return setAreaWA(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    loading: isLoading,\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                    style: {\n                        wordBreak: \"break-word\"\n                    },\n                    error: true,\n                    header: \"Error:\",\n                    content: erroMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                    success: true,\n                    header: \"success:\",\n                    content: successMessage\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 56,\n        columnNumber: 15\n    }, _this);\n};\n_s(sender, \"m54akTrsXMBfn6yNj3EmRHxI4wU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkJBQUE7Ozs7O2lDQUFHOzs7Ozs7eUJBR3hJOzhCQUNiLDhEQUFDdkIscURBQU07b0JBQUM0RCxPQUFPLEVBQUUxQyxTQUFTO29CQUFFMkMsT0FBTzs4QkFBQyxNQUFJOzs7Ozt5QkFBUzs4QkFDakQsOERBQUMxRCxzREFBTztvQkFBQzJELEtBQUssRUFBRTt3QkFBQ0MsU0FBUyxFQUFFLFlBQVk7cUJBQUM7b0JBQUVkLEtBQUs7b0JBQUNlLE1BQU0sRUFBRyxRQUFRO29CQUFDQyxPQUFPLEVBQUluRCxXQUFXOzs7Ozt5QkFBRzs4QkFDNUYsOERBQUNYLHNEQUFPO29CQUFDK0MsT0FBTztvQkFBQ2MsTUFBTSxFQUFHLFVBQVU7b0JBQUNDLE9BQU8sRUFBSWpELGNBQWM7Ozs7O3lCQUFHOzs7Ozs7aUJBQzFEOzs7OzthQUNGLENBQUU7Q0FDZDtHQWpFS1AsTUFBTTtBQW1FWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlbmRlci5qcz9kZmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBNZXNzYWdlLCBTZWxlY3QsIFRleHRBcmVhIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGRpc3BlcnNlIGZyb20gXCIuLi9kaXNwZXJzZVwiO1xuaW1wb3J0IHByb3ZpZGVyIGZyb20gXCIuLi9wcm92aWRlclwiO1xuXG5cbmNvbnN0IHNlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbVG9rZW4sc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW0FyZWFXQSxzZXRBcmVhV0FdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbZXJyb01lc3NhZ2Usc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzdWNjZXNzTWVzc2FnZSxzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgeyBrZXk6ICdFJywgdGV4dDogJ0VUSCcsIHZhbHVlOiAnZXRoJyB9LFxuICAgICAgICB7IGtleTogJ0InLCB0ZXh0OiAnQlNDJywgdmFsdWU6ICdic2MnIH0sXG4gICAgICAgIHsga2V5OiAnTScsIHRleHQ6ICdNQVRJQycsIHZhbHVlOiAnbWF0aWMnIH0sXG4gICAgICBdXG5cbiAgICBjb25zdCBoYW5kbGVTdWJsaXQgPWFzeW5jIChldmVudCkgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJcIik7XG5cbiAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IFNlbmRlclNpbmdlciA9IGRpc3BlcnNlLmNvbm5lY3Qoc2luZ2VyKTtcblxuXG5cbiAgICAgICAgY29uc3QgVG9rZW5BZGRyZXNzID0gVG9rZW4uY3VycmVudC52YWx1ZTtcbiAgICAgICAgY29uc3Qgd2FsbGV0cyA9IEFyZWFXQS5jdXJyZW50LnZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJ1xcbicpOyBcbiAgICAgICAgY29uc3Qgd2FsbGV0PVtdO1xuICAgICAgICBjb25zdCBhbW91bnQ9W107XG4gICAgICAgIGNvbnN0IHRvdGFsdG9rZW5zID0wO1xuICAgICAgICB3YWxsZXRzLmZvckVhY2godzEgPT4ge1xuICAgICAgICAgICAgY29uc3QgdDE9dzEuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGNvbnN0IHYxID11dGlscy5wYXJzZUV0aGVyKHQxWzFdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FsbGV0LnB1c2godDFbMF0pO1xuICAgICAgICAgICAgYW1vdW50LnB1c2godjEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0b3RhbHRva2VucyArPXBhcnNlSW50KHQxWzFdKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2MVwiLGFtb3VudCArIFRva2VuQWRkcmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgcmV0dXJuICggIDxMYXlvdXQ+XG4gICAgICA8Rm9ybSBlcnJvcj17ISFlcnJvTWVzc2FnZX0gc3VjY2Vzcz17ISFzdWNjZXNzTWVzc2FnZX0gb25TdWJtaXQ9e2hhbmRsZVN1YmxpdH0+XG4gICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J0NoYWluJyBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj0nQ2hhaW4nLz5cbiAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdUb2tlbicgdmFsdWU9e1Rva2VufSBwbGFjZWhvbGRlcj0nVG9rZW4gQWRkcmVzcycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldFRva2VuKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XG4gICAgIFxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1RleHRBcmVhfSBsYWJlbD1cIldhbGV0cyBUb2tlbnNcIiB2YWx1ZT17QXJlYVdBfSBwbGFjZWhvbGRlcj0nV2FsZXRzIFRva2Vucycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldEFyZWFXQShldmVudC50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtpc0xvYWRpbmd9IHByaW1hcnk+U2VuZDwvQnV0dG9uPlxuICAgICAgICA8TWVzc2FnZSBzdHlsZT17e3dvcmRCcmVhazogJ2JyZWFrLXdvcmQnfX0gZXJyb3IgaGVhZGVyID0gJ0Vycm9yOicgY29udGVudCA9IHtlcnJvTWVzc2FnZX0vPiBcbiAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXIgPSAnc3VjY2VzczonIGNvbnRlbnQgPSB7c3VjY2Vzc01lc3NhZ2V9Lz4gXG4gICAgICAgIDwvRm9ybT5cbiAgICA8L0xheW91dD4pO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgc2VuZGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJTZWxlY3QiLCJUZXh0QXJlYSIsIkxheW91dCIsImRpc3BlcnNlIiwicHJvdmlkZXIiLCJzZW5kZXIiLCJUb2tlbiIsInNldFRva2VuIiwiQXJlYVdBIiwic2V0QXJlYVdBIiwiZXJyb01lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsIm9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJoYW5kbGVTdWJsaXQiLCJldmVudCIsInNpbmdlciIsIlNlbmRlclNpbmdlciIsIlRva2VuQWRkcmVzcyIsIndhbGxldHMiLCJ3YWxsZXQiLCJhbW91bnQiLCJ0b3RhbHRva2VucyIsInByZXZlbnREZWZhdWx0IiwiZ2V0U2lnbmVyIiwiY29ubmVjdCIsImN1cnJlbnQiLCJ0b1N0cmluZyIsInNwbGl0IiwiZm9yRWFjaCIsIncxIiwidDEiLCJ2MSIsInV0aWxzIiwicGFyc2VFdGhlciIsInB1c2giLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN1Y2Nlc3MiLCJvblN1Ym1pdCIsIkdyb3VwIiwiRmllbGQiLCJjb250cm9sIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIndpZHRocyIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibG9hZGluZyIsInByaW1hcnkiLCJzdHlsZSIsIndvcmRCcmVhayIsImhlYWRlciIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});