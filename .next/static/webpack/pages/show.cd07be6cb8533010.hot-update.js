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

/***/ "./utils/try_show.js":
/*!***************************!*\
  !*** ./utils/try_show.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar Signer = (__webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\").Signer);\nvar ref = __webpack_require__(/*! ../disperse */ \"./disperse.js\"), disperse = ref.default;\nvar try_show = function() {\n    var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address) {\n        var getContract;\n        return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return disperse.Name();\n                case 2:\n                    getContract = _ctx.sent;\n                    //const sending = await Signer.disperseToken();\n                    console.log(\"getContract: \", getContract);\n                    return _ctx.abrupt(\"return\", getContract);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function try_show(address) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (try_show);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy90cnlfc2hvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxNQUFRLEdBQUtDLG9GQUFMO0FBQ2QsSUFBOEJBLEdBQXNCLEdBQXRCQSxtQkFBTyxDQUFDLGtDQUFhLENBQUMsRUFBNUNDLFFBQWlCLEdBQUtELEdBQXNCLENBQTVDQyxPQUFPO0FBRWYsSUFBTUUsUUFBUTtlQUFFLDJLQUFPQyxPQUFPLEVBQUk7WUFDeEJDLFdBQVc7Ozs7OzJCQUFTSCxRQUFRLENBQUNJLElBQUksRUFBRTs7b0JBQW5DRCxXQUFXLFlBQXdCO29CQUV6QywrQ0FBK0M7b0JBQy9DRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUNILFdBQVcsQ0FBQyxDQUFDO2lEQUVqQ0EsV0FBVzs7Ozs7O0tBQ3RCO29CQVBLRixRQUFRLENBQVNDLE9BQU87OztHQU83QjtBQUNELCtEQUFlRCxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdHJ5X3Nob3cuanM/YmM4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFNpZ25lciB9ID0gcmVxdWlyZShcImV0aGVyc1wiKTtcbmNvbnN0IHsgZGVmYXVsdDogZGlzcGVyc2UgfSA9IHJlcXVpcmUoXCIuLi9kaXNwZXJzZVwiKTtcblxuY29uc3QgdHJ5X3Nob3cgPWFzeW5jIChhZGRyZXNzKSA9PntcbiAgICBjb25zdCBnZXRDb250cmFjdCA9IGF3YWl0IGRpc3BlcnNlLk5hbWUoKTtcbiAgICAgICAgICAgIFxuICAgIC8vY29uc3Qgc2VuZGluZyA9IGF3YWl0IFNpZ25lci5kaXNwZXJzZVRva2VuKCk7XG4gICAgY29uc29sZS5sb2coXCJnZXRDb250cmFjdDogXCIsZ2V0Q29udHJhY3QpO1xuICAgIC8vY29uc29sZS5sb2coXCJzZW5kaW5nXCIsc2VuZGluZyk7XG4gICAgcmV0dXJuIChnZXRDb250cmFjdClcbn1cbmV4cG9ydCBkZWZhdWx0IHRyeV9zaG93OyJdLCJuYW1lcyI6WyJTaWduZXIiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImRpc3BlcnNlIiwidHJ5X3Nob3ciLCJhZGRyZXNzIiwiZ2V0Q29udHJhY3QiLCJOYW1lIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/try_show.js\n");

/***/ })

});