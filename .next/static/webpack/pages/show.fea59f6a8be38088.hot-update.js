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

/***/ "./pages/show.js":
/*!***********************!*\
  !*** ./pages/show.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _utils_try_show__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/try_show */ \"./utils/try_show.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar show = function() {\n    _s();\n    var addressRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref[0], setErrorMessage = ref[1];\n    var walletsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), NameD = ref1[0], setName = ref1[1];\n    var BN = ethers__WEBPACK_IMPORTED_MODULE_7__.BigNumber.from(\"100\");\n    console.log(\"BigNumber\", BN);\n    print(BN.function);\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var address, wallets, wallet, value, singer, disperseSinger, abi, contract, constractsinger, show1;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        address = addressRef.current.value;\n                        wallets = walletsRef.current.value.toString().split(\"\\n\");\n                        wallet = [];\n                        value = [];\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = t1[1] * Math.pow(10, 18);\n                            wallet.push(t1[0]);\n                            value.push(v1.toLocaleString(\"fullwide\", {\n                                useGrouping: false\n                            }));\n                        // console.log(\"\");\n                        });\n                        // toString().replace(/ /g, ',')];\n                        // wallets = wallets.includes(\"0x\");\n                        console.log(\"address:\", address);\n                        console.log(\"wallet:\", wallet, \"value:\", value);\n                        //сброс ошибки\n                        setErrorMessage();\n                        if (address) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        setErrorMessage(\"\\u041F\\u0443\\u0441\\u0442\\u043E\\u0439 \\u0430\\u0434\\u0440\\u0435\\u0441\");\n                        return _ctx.abrupt(\"return\");\n                    case 12:\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getSigner();\n                        disperseSinger = _disperse__WEBPACK_IMPORTED_MODULE_5__[\"default\"].connect(singer);\n                        abi = [\n                            \"function approve(address _spender, uint256 _value) public returns (bool success)\"\n                        ];\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(address, abi, _provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n                        constractsinger = contract.connect(singer);\n                        console.log(\"constractsinger.f\", constractsinger.function);\n                        _ctx.next = 20;\n                        return constractsinger.approve(_disperse__WEBPACK_IMPORTED_MODULE_5__[\"default\"].address, 10 * Math.pow(10, 18));\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.next = 23;\n                        return (0,_utils_try_show__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(address);\n                    case 23:\n                        show1 = _ctx.sent;\n                        setName(show1.NameD);\n                        //const response = await disperseSinger.disperseToken(address,wallet,amount);\n                        console.log(\"response\", response);\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 33;\n                        break;\n                    case 29:\n                        _ctx.prev = 29;\n                        _ctx.t0 = _ctx[\"catch\"](20);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 33:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    20,\n                    29\n                ]\n            ]);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n                error: !!erroMessage,\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"\\u0420\\u0430\\u0441\\u0441\\u044B\\u043B\\u043A\\u0430 \\u043F\\u0435\\u0440\\u0435\\u0431\\u043E\\u0440\\u043E\\u043C(\\u043F\\u0440\\u043E\\u0441\\u0442\\u0430\\u044F)\"\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                ref: addressRef,\n                                placeholder: \"\\u0430\\u0434\\u0440\\u0435\\u0441 \\u0442\\u043E\\u043A\\u0435\\u043D\\u0430\"\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                            ref: walletsRef,\n                            label: \"wallets\",\n                            placeholder: \"address value\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {\n                            label: \"\\u0447\\u0435\\u043A \\u0431\\u043E\\u043A\\u0441 test\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        primary: true,\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                        error: true,\n                        header: \"Error:\",\n                        content: erroMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, _this),\n            NameD && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Name:\",\n                    NameD\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                lineNumber: 113,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n        lineNumber: 86,\n        columnNumber: 13\n    }, _this);\n};\n_s(show, \"dz5Imu8AW4PJHa+6zkIZRAnBBg0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (show);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFMEMsS0FBSyxFQUFDLFNBQVM7NEJBQUNHLFdBQVcsRUFBQyxlQUFlOzs7OztpQ0FFM0Q7Ozs7OzZCQUNBO2tDQUdiLDhEQUFDM0QseURBQVU7a0NBQ1QsNEVBQUNFLHVEQUFROzRCQUFDc0QsS0FBSyxFQUFDLGtEQUFlOzs7OztpQ0FBVTs7Ozs7NkJBQ3ZCO2tDQUNwQiw4REFBQ3ZELHFEQUFNO3dCQUFDNEQsT0FBTzt3QkFBQ0MsSUFBSSxFQUFDLFFBQVE7a0NBQUMsUUFBTTs7Ozs7NkJBQVM7a0NBQzdDLDhEQUFDM0Qsc0RBQU87d0JBQUNpRCxLQUFLO3dCQUNWVyxNQUFNLEVBQUcsUUFBUTt3QkFDakJDLE9BQU8sRUFBSXBELFdBQVc7Ozs7OzZCQUN0Qjs7Ozs7O3FCQUdDO1lBR05HLEtBQUssa0JBQUksOERBQUNrRCxJQUFFOztvQkFBQyxPQUFLO29CQUFDbEQsS0FBSzs7Ozs7O3FCQUFNOzs7Ozs7YUFFdEIsQ0FBSTtDQUNsQjtHQTNHS0wsSUFBSTtBQTZHViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Nob3cuanM/MWQ3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLEJ1dHRvbixDaGVja2JveCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7QmlnTnVtYmVyLCBldGhlcnN9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcbmltcG9ydCBkaXNwZXJzZSBmcm9tIFwiLi4vZGlzcGVyc2VcIjtcbmltcG9ydCB0cnlfc2hvdyBmcm9tIFwiLi4vdXRpbHMvdHJ5X3Nob3dcIjtcblxuY29uc3Qgc2hvdyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGFkZHJlc3NSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBbZXJyb01lc3NhZ2Usc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3Qgd2FsbGV0c1JlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IFtOYW1lRCxzZXROYW1lXSA9dXNlU3RhdGUoKTtcbiAgICBjb25zdCBCTiA9IEJpZ051bWJlci5mcm9tKCcxMDAnKTtcblxuICAgIGNvbnNvbGUubG9nKFwiQmlnTnVtYmVyXCIsQk4pO1xuICAgcHJpbnQoQk4uZnVuY3Rpb24pO1xuXG5cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCk9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGFkZHJlc3NSZWYuY3VycmVudC52YWx1ZTtcbiAgICAgICAgY29uc3Qgd2FsbGV0cyA9IHdhbGxldHNSZWYuY3VycmVudC52YWx1ZS50b1N0cmluZygpLnNwbGl0KCdcXG4nKTsgXG4gICAgICAgIGNvbnN0IHdhbGxldD1bXTtcbiAgICAgICAgY29uc3QgdmFsdWU9W107XG4gICAgICAgIHdhbGxldHMuZm9yRWFjaCh3MSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0MT13MS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgY29uc3QgdjEgPXQxWzFdKjEwKioxODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FsbGV0LnB1c2godDFbMF0pO1xuICAgICAgICAgICAgdmFsdWUucHVzaCh2MS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KSk7XG5cbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0b1N0cmluZygpLnJlcGxhY2UoLyAvZywgJywnKV07XG4gICAgICAgLy8gd2FsbGV0cyA9IHdhbGxldHMuaW5jbHVkZXMoXCIweFwiKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZHJlc3M6XCIsYWRkcmVzcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FsbGV0OlwiLHdhbGxldCwgXCJ2YWx1ZTpcIix2YWx1ZSk7XG4gICAgICAgIC8v0YHQsdGA0L7RgSDQvtGI0LjQsdC60LhcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCk7XG4gICAgICAgIC8v0LXRgdC70Lgg0L/Rg9GB0YLQviDRgtC+INC+0YjQuNCx0LrQsFxuICAgICAgICBpZighYWRkcmVzcyl7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi0J/Rg9GB0YLQvtC5INCw0LTRgNC10YFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL3N0YXJ0IGNvbm5lY3QgdG8gbW1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNpbmdlciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHByb3ZpZGVyLmZ1bmN0aW9ucyk7XG4gICAgICAgIGNvbnN0IGRpc3BlcnNlU2luZ2VyID0gZGlzcGVyc2UuY29ubmVjdChzaW5nZXIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcGVyc2VTaW5nZXJcIixkaXNwZXJzZVNpbmdlcik7XG4gICAgICAgIC8vY29ubmVjdCB0byBjb250cmFjdFxuICAgICAgICBsZXQgYWJpID0gW1wiZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIF9zcGVuZGVyLCB1aW50MjU2IF92YWx1ZSkgcHVibGljIHJldHVybnMgKGJvb2wgc3VjY2VzcylcIl07XG4gICAgICAgIGxldCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoYWRkcmVzcywgYWJpLCBwcm92aWRlcik7XG4gICAgICAgIGxldCBjb25zdHJhY3RzaW5nZXIgPSBjb250cmFjdC5jb25uZWN0KHNpbmdlcik7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zdHJhY3RzaW5nZXIuZlwiLGNvbnN0cmFjdHNpbmdlci5mdW5jdGlvbik7XG4gICAgICAgIGF3YWl0IGNvbnN0cmFjdHNpbmdlci5hcHByb3ZlKGRpc3BlcnNlLmFkZHJlc3MsIDEwKjEwKioxOCk7XG5cbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3Qgc2hvdyA9IGF3YWl0IHRyeV9zaG93KGFkZHJlc3MpO1xuICAgICAgICAgICAgc2V0TmFtZShzaG93Lk5hbWVEKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGVyc2VTaW5nZXIuZGlzcGVyc2VUb2tlbihhZGRyZXNzLHdhbGxldCxhbW91bnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKFwiaGFzaDpcIiArIHJlc3BvbnNlLmhhc2gpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG5cbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgXG5cblxuICAgIH1cbiAgICByZXR1cm4gKDxMYXlvdXQ+XG4gICAgICAgIFxuICAgICAgICA8Rm9ybSBlcnJvcj17ISFlcnJvTWVzc2FnZX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD7QoNCw0YHRgdGL0LvQutCwINC/0LXRgNC10LHQvtGA0L7QvCjQv9GA0L7RgdGC0LDRjyk8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCByZWY9e2FkZHJlc3NSZWZ9IHBsYWNlaG9sZGVyPSfQsNC00YDQtdGBINGC0L7QutC10L3QsCcgLz5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPHRleHRhcmVhIHJlZj17d2FsbGV0c1JlZn0gbGFiZWw9J3dhbGxldHMnIHBsYWNlaG9sZGVyPSdhZGRyZXNzIHZhbHVlJyA+XG4gIFxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICBcbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPENoZWNrYm94IGxhYmVsPSfRh9C10Log0LHQvtC60YEgdGVzdCcgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnkgdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgPE1lc3NhZ2UgZXJyb3JcbiAgICAgICAgICAgIGhlYWRlciA9ICdFcnJvcjonXG4gICAgICAgICAgICBjb250ZW50ID0ge2Vycm9NZXNzYWdlfVxuICAgICAgICAgIC8+ICAgICAgICBcblxuICAgICAgIFxuICAgICAgPC9Gb3JtPlxuICAgICAgXG4gICAgICB7Lyog0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0LXRgdC70Lgg0LXRgdGC0YwgKi99XG4gICAgICB7TmFtZUQgJiYgPGgyPk5hbWU6e05hbWVEfTwvaDI+fVxuXG4gICAgICA8L0xheW91dD4gICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBzaG93OyJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJCdXR0b24iLCJDaGVja2JveCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJCaWdOdW1iZXIiLCJldGhlcnMiLCJwcm92aWRlciIsImRpc3BlcnNlIiwidHJ5X3Nob3ciLCJzaG93IiwiYWRkcmVzc1JlZiIsImVycm9NZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwid2FsbGV0c1JlZiIsIk5hbWVEIiwic2V0TmFtZSIsIkJOIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJwcmludCIsImZ1bmN0aW9uIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJhZGRyZXNzIiwid2FsbGV0cyIsIndhbGxldCIsInZhbHVlIiwic2luZ2VyIiwiZGlzcGVyc2VTaW5nZXIiLCJhYmkiLCJjb250cmFjdCIsImNvbnN0cmFjdHNpbmdlciIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInRvU3RyaW5nIiwic3BsaXQiLCJmb3JFYWNoIiwidzEiLCJ0MSIsInYxIiwicHVzaCIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJnZXRTaWduZXIiLCJjb25uZWN0IiwiQ29udHJhY3QiLCJhcHByb3ZlIiwicmVzcG9uc2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImhhc2giLCJlcnJvciIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsIkZpZWxkIiwibGFiZWwiLCJpbnB1dCIsInJlZiIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJwcmltYXJ5IiwidHlwZSIsImhlYWRlciIsImNvbnRlbnQiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/show.js\n");

/***/ })

});