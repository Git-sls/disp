"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/show",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./components/menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var hanleLogInClick = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            alert(\"install MM\");\n                        }\n                        _ctx.prev = 2;\n                        _ctx.next = 5;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 5:\n                        accounts = _ctx.sent;\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](2);\n                        console.error(_ctx.t0);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    9\n                ]\n            ]);\n        }));\n        return function hanleLogInClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n        inverted: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                rel: \"icon\",\n                href: \"data:;base64,=\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                lineNumber: 40,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                position: \"left\",\n                children: [\n                    !currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        primary: true,\n                        onClick: hanleLogInClick,\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                        lineNumber: 46,\n                        columnNumber: 30\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        primary: true,\n                        children: currentAccount\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, _this),\n                    !currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        loading: true,\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                        lineNumber: 50,\n                        columnNumber: 30\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        positive: true,\n                        onClick: function() {\n                            return router.push(\"/show\");\n                        },\n                        children: \"Sender\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, _this);\n};\n_s(Header, \"oxMrr6EH25qzBzTigZ3RkNDZ+kA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQzdCO0FBQ3FCO0FBQ2pCO0FBQ087O0FBR3hDLElBQU1PLE1BQU0sR0FBRyxXQUFNOztJQUVuQixJQUEyQ0YsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBVHZELGNBU3VCLEdBQXNCQSxHQUFVLEdBQWhDLEVBVHZCLGlCQVN5QyxHQUFJQSxHQUFVLEdBQWQ7SUFDdkMsSUFBTUssTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBSTFCLElBQU1LLGVBQWU7bUJBQUcsNktBQVc7Z0JBQzFCQyxRQUFRLEVBUVRDLFFBQVE7Ozs7d0JBUlIsUUFBUyxHQUFJQyxNQUFNLENBQWxCRixRQUFRLENBQVc7d0JBRzFCLElBQUcsQ0FBQ0EsUUFBUSxFQUFFOzRCQUNaRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7eUJBQ1g7OzsrQkFHWUgsUUFBUSxDQUFDSSxPQUFPLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxxQkFBcUI7eUJBQUMsQ0FBQzs7d0JBQWxFSixRQUFRLFlBQTBEO3dCQUN4RUosaUJBQWlCLENBQUNJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7d0JBSy9CSyxPQUFPLENBQUNDLEtBQUssU0FBTyxDQUFDOzs7Ozs7Ozs7OztTQUt0Qjt3QkFwQktSLGVBQWU7OztPQW9CcEI7SUFFQyxxQkFDSSw4REFBQ1Qsc0RBQU87UUFBQ2tCLFFBQVE7OzBCQUVmLDhEQUFDQyxNQUFJO2dCQUFDQyxHQUFHLEVBQUMsTUFBTTtnQkFBQ0MsSUFBSSxFQUFDLGdCQUFnQjs7Ozs7cUJBQUU7MEJBSzVDLDhEQUFDdEIsd0RBQVM7Z0JBQUN3QixRQUFRLEVBQUMsTUFBTTs7b0JBQ25CLENBQUNqQixjQUFjLGlCQUFDLDhEQUFDUixxREFBTTt3QkFBQzBCLE9BQU87d0JBQUNDLE9BQU8sRUFBRWhCLGVBQWU7a0NBQUUsU0FBTzs7Ozs7NkJBQVMsaUJBRTNFLDhEQUFDWCxxREFBTTt3QkFBQzBCLE9BQU87a0NBQUdsQixjQUFjOzs7Ozs2QkFBVTtvQkFFekMsQ0FBQ0EsY0FBYyxpQkFBQyw4REFBQ1IscURBQU07d0JBQUM0QixPQUFPO2tDQUFFLFNBQU87Ozs7OzZCQUFTLGlCQUVsRCw4REFBQzVCLHFEQUFNO3dCQUFDNkIsUUFBUTt3QkFBQ0YsT0FBTyxFQUFFO21DQUFJakIsTUFBTSxDQUFDb0IsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFBQTtrQ0FBRSxRQUFNOzs7Ozs2QkFBUzs7Ozs7O3FCQUl4RDs7Ozs7O2FBQ1AsQ0FDUjtDQUNQO0dBbkRLdkIsTUFBTTs7UUFHS0Qsa0RBQVM7OztBQUhwQkMsS0FBQUEsTUFBTTtBQXFEWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2MwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBNZW51LCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTWVudUV4YW1wbGVJbnZlcnRlZFNlY29uZGFyeSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCxzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG5cblxuICBjb25zdCBoYW5sZUxvZ0luQ2xpY2sgPSBhc3luYyAoKSA9PntcbiAgICBjb25zdCB7ZXRoZXJldW19ID0gd2luZG93O1xuICBcblxuICAgIGlmKCFldGhlcmV1bSkge1xuICAgICAgYWxlcnQoXCJpbnN0YWxsIE1NXCIpO1xuICAgICAgICAgICAgICB9XG4gIHRyeSB7XG4gICBcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCJ9KTtcbiAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gIFxuICAgICAgfVxuICAgICAgY2F0Y2goZXJyb3IpXG4gICAgICB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cbiAgICAgIH1cbiAgXG5cbiAgfVxuXG4gICAgcmV0dXJuICggXG4gICAgICAgIDxTZWdtZW50IGludmVydGVkPlxuICAgICAgICAgIHsvKiDRg9Cx0YDQsNGC0Ywg0L7RiNC40LrQsdGDIDQwNCBmYXZpY29uICovfVxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiZGF0YTo7YmFzZTY0LD1cIi8+XG5cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249J2xlZnQnPlxuICAgICAgICAgICAgeyFjdXJyZW50QWNjb3VudD88QnV0dG9uIHByaW1hcnkgb25DbGljaz17aGFubGVMb2dJbkNsaWNrfT5Db25uZWN0PC9CdXR0b24+OlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgPntjdXJyZW50QWNjb3VudH08L0J1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHshY3VycmVudEFjY291bnQ/PEJ1dHRvbiBsb2FkaW5nID5Db25uZWN0PC9CdXR0b24+OlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8QnV0dG9uIHBvc2l0aXZlIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaChcIi9zaG93XCIpfT5TZW5kZXI8L0J1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJNZW51IiwiU2VnbWVudCIsIkxpbmsiLCJNZW51RXhhbXBsZUludmVydGVkU2Vjb25kYXJ5IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50Iiwicm91dGVyIiwiaGFubGVMb2dJbkNsaWNrIiwiZXRoZXJldW0iLCJhY2NvdW50cyIsIndpbmRvdyIsImFsZXJ0IiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJlcnJvciIsImludmVydGVkIiwibGluayIsInJlbCIsImhyZWYiLCJJdGVtIiwicG9zaXRpb24iLCJwcmltYXJ5Iiwib25DbGljayIsImxvYWRpbmciLCJwb3NpdGl2ZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

});