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

/***/ "./utils/ch_approve.js":
/*!*****************************!*\
  !*** ./utils/ch_approve.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar ch_approve = function() {\n    var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address) {\n        var responce, abi, accounts, contract;\n        return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    responce = \"\";\n                    _ctx.prev = 1;\n                    abi = [\n                        \"function allowance(address owner, address spender) external view returns (uint256)\"\n                    ];\n                    _ctx.next = 5;\n                    return ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                case 5:\n                    accounts = _ctx.sent;\n                    contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(address, abi, _provider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n                    _ctx.next = 9;\n                    return contract.allowance(accounts[0], _disperse__WEBPACK_IMPORTED_MODULE_1__[\"default\"].address);\n                case 9:\n                    responce = _ctx.sent;\n                    responce = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatEther(responce);\n                    _ctx.next = 15;\n                    break;\n                case 13:\n                    _ctx.prev = 13;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                case 15:\n                    _ctx.prev = 15;\n                    return _ctx.abrupt(\"return\", responce);\n                case 18:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                13,\n                15,\n                18\n            ]\n        ]);\n    }));\n    return function ch_approve(address) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (ch_approve);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jaF9hcHByb3ZlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDRztBQUNBO0FBRW5DLElBQU1HLFVBQVU7ZUFBRywyS0FBTUMsT0FBTyxFQUFLO1lBQzNCQyxRQUFRLEVBRVJDLEdBQUcsRUFDSEMsUUFBUSxFQUNSQyxRQUFROzs7O29CQUpSSCxRQUFRLEdBQUcsRUFBRSxDQUFDOztvQkFFZEMsR0FBRyxHQUFHO3dCQUFDLG9GQUFvRjtxQkFBQyxDQUFDOzsyQkFDNUVHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO3dCQUFDQyxNQUFNLEVBQUUscUJBQXFCO3FCQUFDLENBQUM7O29CQUFsRUosUUFBUSxZQUEwRDtvQkFDbEVDLFFBQVEsR0FBRyxJQUFJUixtREFBZSxDQUFDSSxPQUFPLEVBQUVFLEdBQUcsRUFBRUosaURBQVEsQ0FBQyxDQUFDOzsyQkFDNUNNLFFBQVEsQ0FBQ0ssU0FBUyxDQUFDTixRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUNOLHlEQUFnQixDQUFDOztvQkFBakVJLFFBQVEsWUFBeUQ7b0JBQ2pFQSxRQUFRLEdBQUdMLDREQUF3QixDQUFDSyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7aURBS3RDQSxRQUFROzs7Ozs7Ozs7Ozs7O0tBRW5CO29CQWRLRixVQUFVLENBQVNDLE9BQU87OztHQWMvQjtBQUVELCtEQUFlRCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY2hfYXBwcm92ZS5qcz9hMDM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBkaXNwZXJzZSBmcm9tIFwiLi4vZGlzcGVyc2VcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcblxuY29uc3QgY2hfYXBwcm92ZSA9IGFzeW5jKGFkZHJlc3MpID0+IHtcbiAgICBjb25zdCByZXNwb25jZSA9IFwiXCI7XG4gICAgdHJ5e1xuICAgIGNvbnN0IGFiaSA9IFtcImZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1NilcIl07XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wifSk7XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGFkZHJlc3MsIGFiaSwgcHJvdmlkZXIpO1xuICAgIHJlc3BvbmNlID0gYXdhaXQgY29udHJhY3QuYWxsb3dhbmNlKGFjY291bnRzWzBdLGRpc3BlcnNlLmFkZHJlc3MpO1xuICAgIHJlc3BvbmNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHJlc3BvbmNlKTtcbiAgICB9Y2F0Y2goZXJyb3IpXG4gICAge1xuICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9ZmluYWxseXtcbiAgICByZXR1cm4gKHJlc3BvbmNlKTtcbiAgICB9XG59XG4gXG5leHBvcnQgZGVmYXVsdCBjaF9hcHByb3ZlOyJdLCJuYW1lcyI6WyJldGhlcnMiLCJkaXNwZXJzZSIsInByb3ZpZGVyIiwiY2hfYXBwcm92ZSIsImFkZHJlc3MiLCJyZXNwb25jZSIsImFiaSIsImFjY291bnRzIiwiY29udHJhY3QiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJDb250cmFjdCIsImFsbG93YW5jZSIsInV0aWxzIiwiZm9ybWF0RXRoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/ch_approve.js\n");

/***/ })

});