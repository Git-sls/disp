"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var hanleLogInClick = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 4:\n                        accounts = _ctx.sent;\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function hanleLogInClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button.Group, {\n            floated: \"left\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: function() {\n                        return router.push(\"/add\");\n                    },\n                    children: \"sending\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button.Or, {\n                    text: \"||\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    positive: true,\n                    onClick: function() {\n                        return router.push(\"/show\");\n                    },\n                    children: \"disperse\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button.Group, {\n                    floated: \"right\",\n                    children: !currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        primary: true,\n                        onClick: hanleLogInClick,\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 30\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/user\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            primary: true,\n                            onClick: hanleLogInClick,\n                            children: currentAccount\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/index.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 14\n    }, _this);\n};\n_s(Index, \"8rEA9WF8QVIQ5bPWdaAuvZoALlg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDUDtBQUNnQjtBQUNQOztBQUcxQyxJQUFNTSxLQUFLLEdBQUcsV0FBTTs7SUFDaEIsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBRTFCLElBQTJDQyxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFWekQsY0FVeUIsR0FBc0JBLEdBQVUsR0FBaEMsRUFWekIsaUJBVTJDLEdBQUlBLEdBQVUsR0FBZDtJQUN2QyxJQUFNUSxlQUFlO21CQUFHLDZLQUFXO2dCQUMxQkMsUUFBUSxFQUdQQyxRQUFROzs7O3dCQUhWLFFBQVMsR0FBSUMsTUFBTSxDQUFsQkYsUUFBUSxDQUFXOzs7K0JBR0RBLFFBQVEsQ0FBQ0csT0FBTyxDQUFDOzRCQUFDQyxNQUFNLEVBQUUscUJBQXFCO3lCQUFDLENBQUM7O3dCQUFsRUgsUUFBUSxZQUEwRDt3QkFDeEVILGlCQUFpQixDQUFDRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O3dCQUsvQkksT0FBTyxDQUFDQyxLQUFLLFNBQU8sQ0FBQzs7Ozs7Ozs7Ozs7U0FHeEI7d0JBYktQLGVBQWU7OztPQWFwQjtJQUVELHFCQUFTLDhEQUFDTCwwREFBTTtrQkFJWiw0RUFBQ0YsMkRBQVk7WUFBQ2dCLE9BQU8sRUFBQyxNQUFNOzs4QkFDeEIsOERBQUNoQixxREFBTTtvQkFBQ2lCLE9BQU8sRUFBRTsrQkFBSWIsTUFBTSxDQUFDYyxJQUFJLENBQUMsTUFBTSxDQUFDO3FCQUFBOzhCQUFFLFNBQU87Ozs7O3lCQUFTOzhCQUMxRCw4REFBQ2xCLHdEQUFTO29CQUFDb0IsSUFBSSxFQUFDLElBQUk7Ozs7O3lCQUFFOzhCQUN0Qiw4REFBQ3BCLHFEQUFNO29CQUFDcUIsUUFBUTtvQkFBQ0osT0FBTyxFQUFFOytCQUFJYixNQUFNLENBQUNjLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQUE7OEJBQUUsVUFBUTs7Ozs7eUJBQVM7OEJBRXJFLDhEQUFDbEIsMkRBQVk7b0JBQUNnQixPQUFPLEVBQUMsT0FBTzs4QkFDNUIsQ0FBQ1gsY0FBYyxpQkFBQyw4REFBQ0wscURBQU07d0JBQUNzQixPQUFPO3dCQUFDTCxPQUFPLEVBQUVWLGVBQWU7a0NBQUUsU0FBTzs7Ozs7NkJBQVMsaUJBQzNFLDhEQUFDVixrREFBSTt3QkFBQzBCLElBQUksRUFBQyxPQUFPO2tDQUNsQiw0RUFBQ3ZCLHFEQUFNOzRCQUFDc0IsT0FBTzs0QkFBQ0wsT0FBTyxFQUFFVixlQUFlO3NDQUFHRixjQUFjOzs7OztpQ0FBVTs7Ozs7NkJBQzVEOzs7Ozt5QkFDUTs7Ozs7O2lCQUNKOzs7OzthQUNOLENBR1g7Q0FDTDtHQXZDS0YsS0FBSzs7UUFDUUwsa0RBQVM7OztBQUR0QkssS0FBQUEsS0FBSztBQXlDWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBNZW51IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgaGFubGVMb2dJbkNsaWNrID0gYXN5bmMgKCkgPT57XG4gICAgICBjb25zdCB7ZXRoZXJldW19ID0gd2luZG93O1xuICAgICAgdHJ5IHtcbiAgIFxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCJ9KTtcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoKGVycm9yKVxuICAgICAgICAgIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgXG4gICAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoIDxMYXlvdXQ+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDxCdXR0b24uR3JvdXAgZmxvYXRlZD1cImxlZnRcIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PnJvdXRlci5wdXNoKFwiL2FkZFwiKX0+c2VuZGluZzwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbi5PciB0ZXh0PVwifHxcIi8+XG4gICAgICAgICAgICA8QnV0dG9uIHBvc2l0aXZlIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaChcIi9zaG93XCIpfT5kaXNwZXJzZTwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8QnV0dG9uLkdyb3VwIGZsb2F0ZWQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgeyFjdXJyZW50QWNjb3VudD88QnV0dG9uIHByaW1hcnkgb25DbGljaz17aGFubGVMb2dJbkNsaWNrfT5Db25uZWN0PC9CdXR0b24+OlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XG4gICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgb25DbGljaz17aGFubGVMb2dJbkNsaWNrfT57Y3VycmVudEFjY291bnR9PC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+fVxuICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICA8L0xheW91dD5cbiAgICBcbiAgICBcbiAgICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiQnV0dG9uIiwiTWVudSIsIkxheW91dCIsIkluZGV4Iiwicm91dGVyIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImhhbmxlTG9nSW5DbGljayIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJ3aW5kb3ciLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImVycm9yIiwiR3JvdXAiLCJmbG9hdGVkIiwib25DbGljayIsInB1c2giLCJPciIsInRleHQiLCJwb3NpdGl2ZSIsInByaW1hcnkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});