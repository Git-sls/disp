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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar addContract = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Tokens = ref[0], setTokens = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref1[0], setAreaWA = ref1[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var wallets, wallet, value;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        wallets = AreaWA.current.value.toString().split(\"\\n\");\n                        wallet = [];\n                        value = [];\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = t1[1] * Math.pow(10, 18);\n                            wallet.push(t1[0]);\n                            value.push(v1.toLocaleString(\"fullwide\", {\n                                useGrouping: false\n                            }));\n                            console.log(\"\", t1, v1);\n                        });\n                        try {\n                            //      const response = await disperseSinger.disperseToken(Tokens,[wallets],[amount]);\n                            console.log(\"response\", response);\n                        } catch (error) {\n                            console.log(\"error\", error);\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input,\n                            label: \"Token\",\n                            value: Tokens,\n                            placeholder: \"Tokens Address\",\n                            onChange: function(event) {\n                                return setTokens(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.TextArea, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input,\n                            label: \"Wallets\",\n                            value: AreaWA,\n                            placeholder: \"Walets&Tokens\",\n                            onChange: function(event) {\n                                return setAreaWA(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n        lineNumber: 55,\n        columnNumber: 14\n    }, _this);\n};\n_s(addContract, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (addContract);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEIsTUFBTSxDQUFDNUIsS0FBSyxDQUFDOzZCQUFBOzs7OztpQ0FBSTtzQ0FDMUksOERBQUNkLDREQUFhOzRCQUFDc0MsT0FBTyxFQUFFckMsb0RBQUs7NEJBQUVzQyxLQUFLLEVBQUMsU0FBUzs0QkFBQ3pCLEtBQUssRUFBRUwsTUFBTTs0QkFBRStCLFdBQVcsRUFBQyxlQUFlQzs0QkFBQUEsUUFBUSxFQUFJekIsU0FBQUEsS0FBSzt1Q0FBRU4sU0FBUyxDQUFDTSxLQUFLLENBQUMwQixNQUFNLENBQUM1QixLQUFLLENBQUM7NkJBQUE7Ozs7O2lDQUFJO3NDQUM3SSw4REFBQ2QseURBQVU7NEJBQUNzQyxPQUFPLEVBQUVwQyxxREFBTTs0QkFBRXFDLEtBQUssRUFBQyxPQUFPOzRCQUFDNUIsT0FBTyxFQUFFQSxPQUFPOzRCQUFFNkIsV0FBVyxFQUFDLE9BQU87Ozs7O2lDQUFFOzs7Ozs7eUJBRXZFOzhCQUNiLDhEQUFDekMscURBQU07b0JBQUM2QyxPQUFPOzhCQUFDLE1BQUk7Ozs7O3lCQUFTOzs7Ozs7aUJBQ3RCOzs7OzthQUdGLENBQUc7Q0FDZjtHQTdES3RDLFdBQVc7QUErRGpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkLmpzP2M5MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIFNlbGVjdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBkaXNwZXJzZSBmcm9tIFwiLi4vZGlzcGVyc2VcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcblxuY29uc3QgYWRkQ29udHJhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW1Rva2VucyxzZXRUb2tlbnNdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW0FyZWFXQSxzZXRBcmVhV0FdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIHsga2V5OiAnRScsIHRleHQ6ICdFVEgnLCB2YWx1ZTogJ2V0aCcgfSxcbiAgICAgICAgeyBrZXk6ICdCJywgdGV4dDogJ0JTQycsIHZhbHVlOiAnYnNjJyB9LFxuICAgICAgICB7IGtleTogJ00nLCB0ZXh0OiAnTUFUSUMnLCB2YWx1ZTogJ21hdGljJyB9LFxuICAgICAgXVxuXG5cbiAgICBjb25zdCBoYW5kbGVTdWJsaXQgPWFzeW5jIChldmVudCkgPT57XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAvLyAgIGNvbnN0IHNpbmdlciA9IHByb3ZpZGVyLmdldFNpbmdlcigpO1xuICAgICAgIC8vIGNvbnN0IGRpc3BlcnNlU2luZ2VyID0gZGlzcGVyc2UuY29ubmVjdChzaW5nZXIpO1xuXG4gICAgICAgIGNvbnN0IHdhbGxldHMgPSBBcmVhV0EuY3VycmVudC52YWx1ZS50b1N0cmluZygpLnNwbGl0KCdcXG4nKTsgXG4gICAgICAgIGNvbnN0IHdhbGxldD1bXTtcbiAgICAgICAgY29uc3QgdmFsdWU9W107XG4gICAgICAgIHdhbGxldHMuZm9yRWFjaCh3MSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0MT13MS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgY29uc3QgdjEgPXQxWzFdKjEwKioxODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FsbGV0LnB1c2godDFbMF0pO1xuICAgICAgICAgICAgdmFsdWUucHVzaCh2MS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KSk7XG4gIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIix0MSx2MSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBcbiAgICAgICAgdHJ5e1xuICAgICAgLy8gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BlcnNlU2luZ2VyLmRpc3BlcnNlVG9rZW4oVG9rZW5zLFt3YWxsZXRzXSxbYW1vdW50XSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIscmVzcG9uc2UpO1xuXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3IpXG4gICAgICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLGVycm9yKTtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cbiAgICByZXR1cm4gKCA8TGF5b3V0PlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1YmxpdH0+XG4gICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nVG9rZW4nIHZhbHVlPXtUb2tlbnN9IHBsYWNlaG9sZGVyPSdUb2tlbnMgQWRkcmVzcycgb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldFRva2VucyhldmVudC50YXJnZXQudmFsdWUpIH0vPlxuICAgICAgICAgIDxGb3JtLlRleHRBcmVhIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nV2FsbGV0cycgdmFsdWU9e0FyZWFXQX0gcGxhY2Vob2xkZXI9J1dhbGV0cyZUb2tlbnMnb25DaGFuZ2UgPSB7ZXZlbnQ9PnNldEFyZWFXQShldmVudC50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J0NoYWluJyBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj0nQ2hhaW4nLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+U2VuZDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG5cblxuICAgIDwvTGF5b3V0PiApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgYWRkQ29udHJhY3Q7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiU2VsZWN0IiwiTGF5b3V0IiwiZGlzcGVyc2UiLCJwcm92aWRlciIsImFkZENvbnRyYWN0IiwiVG9rZW5zIiwic2V0VG9rZW5zIiwiQXJlYVdBIiwic2V0QXJlYVdBIiwib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsImhhbmRsZVN1YmxpdCIsImV2ZW50Iiwid2FsbGV0cyIsIndhbGxldCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInRvU3RyaW5nIiwic3BsaXQiLCJmb3JFYWNoIiwidzEiLCJ0MSIsInYxIiwicHVzaCIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJlcnJvciIsIm9uU3VibWl0IiwiR3JvdXAiLCJ3aWR0aHMiLCJGaWVsZCIsImNvbnRyb2wiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJUZXh0QXJlYSIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/add.js\n");

/***/ })

});