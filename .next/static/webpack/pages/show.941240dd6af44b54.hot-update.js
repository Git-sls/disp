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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./components/menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    //const accounts = await ethereum.request({method: \"eth_requestAccounts\"});\n    setCurrentAccount(accounts[0]);\n    var hanleLogInClick = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, _$accounts;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            alert(\"install MM\");\n                        }\n                        _ctx.prev = 2;\n                        _ctx.next = 5;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 5:\n                        _$accounts = _ctx.sent;\n                        setCurrentAccount(_$accounts[0]);\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](2);\n                        console.error(_ctx.t0);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    9\n                ]\n            ]);\n        }));\n        return function hanleLogInClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n        inverted: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                rel: \"icon\",\n                href: \"data:;base64,=\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                position: \"left\",\n                children: !currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    primary: true,\n                    onClick: function() {\n                        return router.push(\"/show\");\n                    },\n                    children: \"Connect\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                    lineNumber: 47,\n                    columnNumber: 30\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    primary: true,\n                    onClick: function() {\n                        return router.push(\"/show\");\n                    },\n                    children: currentAccount\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/components/header.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_s(Header, \"oxMrr6EH25qzBzTigZ3RkNDZ+kA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQzdCO0FBQ3FCO0FBQ2pCO0FBQ087O0FBR3hDLElBQU1PLE1BQU0sR0FBRyxXQUFNOztJQUVuQixJQUEyQ0YsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBVHZELGNBU3VCLEdBQXNCQSxHQUFVLEdBQWhDLEVBVHZCLGlCQVN5QyxHQUFJQSxHQUFVLEdBQWQ7SUFDdkMsSUFBTUssTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBRTFCLDJFQUEyRTtJQUMzRUcsaUJBQWlCLENBQUNFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9CLElBQU1DLGVBQWU7bUJBQUcsNktBQVc7Z0JBQzFCQyxRQUFRLEVBUVRGLFVBQVE7Ozs7d0JBUlIsUUFBUyxHQUFJRyxNQUFNLENBQWxCRCxRQUFRLENBQVc7d0JBRzFCLElBQUcsQ0FBQ0EsUUFBUSxFQUFFOzRCQUNaRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7eUJBQ1g7OzsrQkFHWUYsUUFBUSxDQUFDRyxPQUFPLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxxQkFBcUI7eUJBQUMsQ0FBQzs7d0JBQWxFTixVQUFRLFlBQTBEO3dCQUN4RUYsaUJBQWlCLENBQUNFLFVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7d0JBSy9CTyxPQUFPLENBQUNDLEtBQUssU0FBTyxDQUFDOzs7Ozs7Ozs7OztTQUt0Qjt3QkFwQktQLGVBQWU7OztPQW9CcEI7SUFFQyxxQkFDSSw4REFBQ1Ysc0RBQU87UUFBQ2tCLFFBQVE7OzBCQUVmLDhEQUFDQyxNQUFJO2dCQUFDQyxHQUFHLEVBQUMsTUFBTTtnQkFBQ0MsSUFBSSxFQUFDLGdCQUFnQjs7Ozs7cUJBQUU7MEJBRTVDLDhEQUFDbkIsNkNBQTRCOzs7O3FCQUFFOzBCQUcvQiw4REFBQ0gsd0RBQVM7Z0JBQUN3QixRQUFRLEVBQUMsTUFBTTswQkFDbkIsQ0FBQ2pCLGNBQWMsaUJBQUMsOERBQUNSLHFEQUFNO29CQUFDMEIsT0FBTztvQkFBQ0MsT0FBTyxFQUFFOytCQUFJakIsTUFBTSxDQUFDa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFBQTs4QkFBRSxTQUFPOzs7Ozt5QkFBUyxpQkFFcEYsOERBQUM1QixxREFBTTtvQkFBQzBCLE9BQU87b0JBQUNDLE9BQU8sRUFBRTsrQkFBSWpCLE1BQU0sQ0FBQ2tCLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQUE7OEJBQUdwQixjQUFjOzs7Ozt5QkFBVTs7Ozs7cUJBSWpFOzs7Ozs7YUFDUCxDQUNSO0NBQ1A7R0FoREtELE1BQU07O1FBR0tELGtEQUFTOzs7QUFIcEJDLEtBQUFBLE1BQU07QUFrRFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgTWVudSwgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE1lbnVFeGFtcGxlSW52ZXJ0ZWRTZWNvbmRhcnkgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcblxuICBjb25zdCBbY3VycmVudEFjY291bnQsc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICAvL2NvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIn0pO1xuICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG5cbiAgY29uc3QgaGFubGVMb2dJbkNsaWNrID0gYXN5bmMgKCkgPT57XG4gICAgY29uc3Qge2V0aGVyZXVtfSA9IHdpbmRvdztcbiAgXG5cbiAgICBpZighZXRoZXJldW0pIHtcbiAgICAgIGFsZXJ0KFwiaW5zdGFsbCBNTVwiKTtcbiAgICAgICAgICAgICAgfVxuICB0cnkge1xuICAgXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wifSk7XG4gICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICBcbiAgICAgIH1cbiAgICAgIGNhdGNoKGVycm9yKVxuICAgICAge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgICB9XG4gIFxuXG4gIH1cblxuICAgIHJldHVybiAoIFxuICAgICAgICA8U2VnbWVudCBpbnZlcnRlZD5cbiAgICAgICAgICB7Lyog0YPQsdGA0LDRgtGMINC+0YjQuNC60LHRgyA0MDQgZmF2aWNvbiAqL31cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImRhdGE6O2Jhc2U2NCw9XCIvPlxuXG4gICAgICA8TWVudUV4YW1wbGVJbnZlcnRlZFNlY29uZGFyeS8+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj0nbGVmdCc+XG4gICAgICAgICAgICB7IWN1cnJlbnRBY2NvdW50PzxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goXCIvc2hvd1wiKX0+Q29ubmVjdDwvQnV0dG9uPjpcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaChcIi9zaG93XCIpfT57Y3VycmVudEFjY291bnR9PC9CdXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPC9TZWdtZW50PlxuICAgICAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsiQnV0dG9uIiwiTWVudSIsIlNlZ21lbnQiLCJMaW5rIiwiTWVudUV4YW1wbGVJbnZlcnRlZFNlY29uZGFyeSIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSGVhZGVyIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsInJvdXRlciIsImFjY291bnRzIiwiaGFubGVMb2dJbkNsaWNrIiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJhbGVydCIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwiZXJyb3IiLCJpbnZlcnRlZCIsImxpbmsiLCJyZWwiLCJocmVmIiwiSXRlbSIsInBvc2l0aW9uIiwicHJpbWFyeSIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

});