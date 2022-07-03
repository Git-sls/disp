"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add",{

/***/ "./pages/add.js":
/*!**********************!*\
  !*** ./pages/add.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar addContract = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Tokens = ref[0], setTokens = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref1[0], setAreaWA = ref1[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, disperseSinger, wallets, wallet, amount, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSinger;\n                        console.log(_provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].functions);\n                        disperseSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        console.log(disperseSinger.functions);\n                        wallets = AreaWA.toString().split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = t1[1] * Math.pow(10, 18);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toLocaleString(\"fullwide\", {\n                                useGrouping: false\n                            }));\n                        //console.log(\"\",t1,v1);\n                        });\n                        _ctx.prev = 9;\n                        _ctx.next = 12;\n                        return disperseSinger.disperseToken(Tokens, wallet, amount);\n                    case 12:\n                        response = _ctx.sent;\n                        console.log(\"response\", response);\n                        _ctx.next = 19;\n                        break;\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](9);\n                        console.error(\"error\", _ctx.t0);\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    9,\n                    16\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input,\n                            label: \"Token\",\n                            value: Tokens,\n                            placeholder: \"Tokens Address\",\n                            onChange: function(event) {\n                                return setTokens(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.TextArea, {\n                            label: \"Wallets\",\n                            value: AreaWA,\n                            placeholder: \"Walets&Tokens\",\n                            onChange: function(event) {\n                                return setAreaWA(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n        lineNumber: 59,\n        columnNumber: 14\n    }, _this);\n};\n_s(addContract, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (addContract);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NBQ3hCLDhEQUFDM0MseURBQVU7NEJBQUM2QyxPQUFPLEVBQUU1QyxvREFBSzs0QkFBRTZDLEtBQUssRUFBQyxPQUFPOzRCQUFDL0IsS0FBSyxFQUFFUCxNQUFNOzRCQUFFdUMsV0FBVyxFQUFDLGdCQUFnQjs0QkFBQ0MsUUFBUSxFQUFJL0IsU0FBQUEsS0FBSzt1Q0FBRVIsU0FBUyxDQUFDUSxLQUFLLENBQUNnQyxNQUFNLENBQUNsQyxLQUFLLENBQUM7NkJBQUE7Ozs7O2lDQUFJO3NDQUMxSSw4REFBQ1osdURBQVE7NEJBQUMyQyxLQUFLLEVBQUMsU0FBUzs0QkFBQy9CLEtBQUssRUFBRUwsTUFBTTs0QkFBRXFDLFdBQVcsRUFBQyxlQUFlQzs0QkFBQUEsUUFBUSxFQUFJL0IsU0FBQUEsS0FBSzt1Q0FBRU4sU0FBUyxDQUFDTSxLQUFLLENBQUNnQyxNQUFNLENBQUNsQyxLQUFLLENBQUM7NkJBQUE7Ozs7O2lDQUFJO3NDQUN4SCw4REFBQ2YseURBQVU7NEJBQUM2QyxPQUFPLEVBQUUzQyxxREFBTTs0QkFBRTRDLEtBQUssRUFBQyxPQUFPOzRCQUFDbEMsT0FBTyxFQUFFQSxPQUFPOzRCQUFFbUMsV0FBVyxFQUFDLE9BQU87Ozs7O2lDQUFFOzs7Ozs7eUJBRXZFOzhCQUNiLDhEQUFDaEQscURBQU07b0JBQUNtRCxPQUFPOzhCQUFDLE1BQUk7Ozs7O3lCQUFTOzs7Ozs7aUJBQ3RCOzs7OzthQUdGLENBQUc7Q0FDZjtHQWpFSzNDLFdBQVc7QUFtRWpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkLmpzP2M5MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgZGlzcGVyc2UgZnJvbSBcIi4uL2Rpc3BlcnNlXCI7XG5pbXBvcnQgcHJvdmlkZXIgZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5cbmNvbnN0IGFkZENvbnRyYWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtUb2tlbnMsc2V0VG9rZW5zXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtBcmVhV0Esc2V0QXJlYVdBXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IGtleTogJ0UnLCB0ZXh0OiAnRVRIJywgdmFsdWU6ICdldGgnIH0sXG4gICAgICAgIHsga2V5OiAnQicsIHRleHQ6ICdCU0MnLCB2YWx1ZTogJ2JzYycgfSxcbiAgICAgICAgeyBrZXk6ICdNJywgdGV4dDogJ01BVElDJywgdmFsdWU6ICdtYXRpYycgfSxcbiAgICAgIF1cblxuXG4gICAgY29uc3QgaGFuZGxlU3VibGl0ID1hc3luYyAoZXZlbnQpID0+e1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHNpbmdlciA9IHByb3ZpZGVyLmdldFNpbmdlcjtcbiAgICAgICAgY29uc29sZS5sb2cocHJvdmlkZXIuZnVuY3Rpb25zKTtcbiAgICAgICAgY29uc3QgZGlzcGVyc2VTaW5nZXIgPSBkaXNwZXJzZS5jb25uZWN0KHNpbmdlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRpc3BlcnNlU2luZ2VyLmZ1bmN0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgd2FsbGV0cyA9IEFyZWFXQS50b1N0cmluZygpLnNwbGl0KCdcXG4nKTsgXG4gICAgICAgLy8gY29uc29sZS5sb2coXCJ3YWxsZXRzXCIsd2FsbGV0cyk7XG4gICAgICAgICBjb25zdCB3YWxsZXQ9W107XG4gICAgICAgICBjb25zdCBhbW91bnQ9W107XG4gICAgICAgICB3YWxsZXRzLmZvckVhY2godzEgPT4ge1xuICAgICAgICAgICAgIGNvbnN0IHQxPXcxLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgY29uc3QgdjEgPXQxWzFdKjEwKioxODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIHdhbGxldC5wdXNoKHQxWzBdKTtcbiAgICAgICAgICAgICBhbW91bnQucHVzaCh2MS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KSk7XG4gIFxuICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJcIix0MSx2MSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIndhbGxldDpcIix3YWxsZXQsIFwiYW1vdW50OlwiLGFtb3VudCk7XG4gICAgICAgIFxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BlcnNlU2luZ2VyLmRpc3BlcnNlVG9rZW4oVG9rZW5zLHdhbGxldCxhbW91bnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLHJlc3BvbnNlKTtcblxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKVxuICAgICAgICB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvclwiLGVycm9yKTtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cbiAgICByZXR1cm4gKCA8TGF5b3V0PlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1YmxpdH0+XG4gICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nVG9rZW4nIHZhbHVlPXtUb2tlbnN9IHBsYWNlaG9sZGVyPSdUb2tlbnMgQWRkcmVzcycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldFRva2VucyhldmVudC50YXJnZXQudmFsdWUpIH0vPlxuICAgICAgICAgIDxUZXh0QXJlYSBsYWJlbD0nV2FsbGV0cycgdmFsdWU9e0FyZWFXQX0gcGxhY2Vob2xkZXI9J1dhbGV0cyZUb2tlbnMnb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldEFyZWFXQShldmVudC50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J0NoYWluJyBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj0nQ2hhaW4nLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+U2VuZDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG5cblxuICAgIDwvTGF5b3V0PiApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgYWRkQ29udHJhY3Q7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJMYXlvdXQiLCJkaXNwZXJzZSIsInByb3ZpZGVyIiwiYWRkQ29udHJhY3QiLCJUb2tlbnMiLCJzZXRUb2tlbnMiLCJBcmVhV0EiLCJzZXRBcmVhV0EiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiaGFuZGxlU3VibGl0IiwiZXZlbnQiLCJzaW5nZXIiLCJkaXNwZXJzZVNpbmdlciIsIndhbGxldHMiLCJ3YWxsZXQiLCJhbW91bnQiLCJyZXNwb25zZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0U2luZ2VyIiwiY29uc29sZSIsImxvZyIsImZ1bmN0aW9ucyIsImNvbm5lY3QiLCJ0b1N0cmluZyIsInNwbGl0IiwiZm9yRWFjaCIsIncxIiwidDEiLCJ2MSIsInB1c2giLCJ0b0xvY2FsZVN0cmluZyIsInVzZUdyb3VwaW5nIiwiZGlzcGVyc2VUb2tlbiIsImVycm9yIiwib25TdWJtaXQiLCJHcm91cCIsIndpZHRocyIsIkZpZWxkIiwiY29udHJvbCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/add.js\n");

/***/ })

});