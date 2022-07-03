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

/***/ "./disperse.js":
/*!*********************!*\
  !*** ./disperse.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ \"./provider.js\");\n\n\nvar address = \"0x1B1835AEBAc2184b57233E301891C38Dd269989F\";\nvar abi = [\n    {\n        \"inputs\": [],\n        \"name\": \"Name\",\n        \"outputs\": [\n            {\n                \"internalType\": \"string\",\n                \"name\": \"\",\n                \"type\": \"string\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"contract IERC20\",\n                \"name\": \"token\",\n                \"type\": \"address\"\n            },\n            {\n                \"internalType\": \"uint256\",\n                \"name\": \"values\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"WithdrawalToken\",\n        \"outputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"address payable[]\",\n                \"name\": \"recipients\",\n                \"type\": \"address[]\"\n            },\n            {\n                \"internalType\": \"uint256[]\",\n                \"name\": \"values\",\n                \"type\": \"uint256[]\"\n            }\n        ],\n        \"name\": \"disperseEther\",\n        \"outputs\": [],\n        \"stateMutability\": \"payable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"contract IERC20\",\n                \"name\": \"token\",\n                \"type\": \"address\"\n            },\n            {\n                \"internalType\": \"address[]\",\n                \"name\": \"recipients\",\n                \"type\": \"address[]\"\n            },\n            {\n                \"internalType\": \"uint256[]\",\n                \"name\": \"values\",\n                \"type\": \"uint256[]\"\n            }\n        ],\n        \"name\": \"disperseToken\",\n        \"outputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"contract IERC20\",\n                \"name\": \"token\",\n                \"type\": \"address\"\n            },\n            {\n                \"internalType\": \"address[]\",\n                \"name\": \"recipients\",\n                \"type\": \"address[]\"\n            },\n            {\n                \"internalType\": \"uint256[]\",\n                \"name\": \"values\",\n                \"type\": \"uint256[]\"\n            }\n        ],\n        \"name\": \"disperseTokenSimple\",\n        \"outputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    }\n];\nvar disperse = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.Contract(address, abi, _provider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (disperse);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kaXNwZXJzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBZ0M7QUFDRTtBQUdsQyxJQUFNRSxPQUFPLEdBQUcsNENBQTRDO0FBQzVELElBQU1DLEdBQUcsR0FBRztJQUNOO1FBQ0UsUUFBUSxFQUFFLEVBQUU7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLFNBQVMsRUFBRTtZQUNUO2dCQUNFLGNBQWMsRUFBRSxRQUFRO2dCQUN4QixNQUFNLEVBQUUsRUFBRTtnQkFDVixNQUFNLEVBQUUsUUFBUTthQUNqQjtTQUNGO1FBQ0QsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixNQUFNLEVBQUUsVUFBVTtLQUNuQjtJQUNEO1FBQ0UsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsY0FBYyxFQUFFLGlCQUFpQjtnQkFDakMsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLFNBQVM7YUFDbEI7WUFDRDtnQkFDRSxjQUFjLEVBQUUsU0FBUztnQkFDekIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE1BQU0sRUFBRSxTQUFTO2FBQ2xCO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsaUJBQWlCLEVBQUUsWUFBWTtRQUMvQixNQUFNLEVBQUUsVUFBVTtLQUNuQjtJQUNEO1FBQ0UsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsY0FBYyxFQUFFLG1CQUFtQjtnQkFDbkMsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE1BQU0sRUFBRSxXQUFXO2FBQ3BCO1lBQ0Q7Z0JBQ0UsY0FBYyxFQUFFLFdBQVc7Z0JBQzNCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixNQUFNLEVBQUUsV0FBVzthQUNwQjtTQUNGO1FBQ0QsTUFBTSxFQUFFLGVBQWU7UUFDdkIsU0FBUyxFQUFFLEVBQUU7UUFDYixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLE1BQU0sRUFBRSxVQUFVO0tBQ25CO0lBQ0Q7UUFDRSxRQUFRLEVBQUU7WUFDUjtnQkFDRSxjQUFjLEVBQUUsaUJBQWlCO2dCQUNqQyxNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsU0FBUzthQUNsQjtZQUNEO2dCQUNFLGNBQWMsRUFBRSxXQUFXO2dCQUMzQixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsTUFBTSxFQUFFLFdBQVc7YUFDcEI7WUFDRDtnQkFDRSxjQUFjLEVBQUUsV0FBVztnQkFDM0IsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE1BQU0sRUFBRSxXQUFXO2FBQ3BCO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsZUFBZTtRQUN2QixTQUFTLEVBQUUsRUFBRTtRQUNiLGlCQUFpQixFQUFFLFlBQVk7UUFDL0IsTUFBTSxFQUFFLFVBQVU7S0FDbkI7SUFDRDtRQUNFLFFBQVEsRUFBRTtZQUNSO2dCQUNFLGNBQWMsRUFBRSxpQkFBaUI7Z0JBQ2pDLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE1BQU0sRUFBRSxTQUFTO2FBQ2xCO1lBQ0Q7Z0JBQ0UsY0FBYyxFQUFFLFdBQVc7Z0JBQzNCLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixNQUFNLEVBQUUsV0FBVzthQUNwQjtZQUNEO2dCQUNFLGNBQWMsRUFBRSxXQUFXO2dCQUMzQixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsTUFBTSxFQUFFLFdBQVc7YUFDcEI7U0FDRjtRQUNELE1BQU0sRUFBRSxxQkFBcUI7UUFDN0IsU0FBUyxFQUFFLEVBQUU7UUFDYixpQkFBaUIsRUFBRSxZQUFZO1FBQy9CLE1BQU0sRUFBRSxVQUFVO0tBQ25CO0NBQ0o7QUFDSCxJQUFNQyxRQUFRLEdBQUcsSUFBSUosbURBQWUsQ0FBQ0UsT0FBTyxFQUFDQyxHQUFHLEVBQUNGLGlEQUFRLENBQUM7QUFFMUQsK0RBQWVHLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kaXNwZXJzZS5qcz85MjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi9wcm92aWRlclwiO1xuXG5cbmNvbnN0IGFkZHJlc3MgPSBcIjB4MUIxODM1QUVCQWMyMTg0YjU3MjMzRTMwMTg5MUMzOERkMjY5OTg5RlwiO1xuY29uc3QgYWJpID0gW1xuICAgICAge1xuICAgICAgICBcImlucHV0c1wiOiBbXSxcbiAgICAgICAgXCJuYW1lXCI6IFwiTmFtZVwiLFxuICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiY29udHJhY3QgSUVSQzIwXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ0b2tlblwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlc1wiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm5hbWVcIjogXCJXaXRoZHJhd2FsVG9rZW5cIixcbiAgICAgICAgXCJvdXRwdXRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzcyBwYXlhYmxlW11cIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInJlY2lwaWVudHNcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NbXVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZbXVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVzXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2W11cIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJuYW1lXCI6IFwiZGlzcGVyc2VFdGhlclwiLFxuICAgICAgICBcIm91dHB1dHNcIjogW10sXG4gICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwicGF5YWJsZVwiLFxuICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJjb250cmFjdCBJRVJDMjBcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1tdXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJyZWNpcGllbnRzXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzW11cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2W11cIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlc1wiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NltdXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwibmFtZVwiOiBcImRpc3BlcnNlVG9rZW5cIixcbiAgICAgICAgXCJvdXRwdXRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiY29udHJhY3QgSUVSQzIwXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ0b2tlblwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NbXVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicmVjaXBpZW50c1wiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1tdXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NltdXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZXNcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZbXVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm5hbWVcIjogXCJkaXNwZXJzZVRva2VuU2ltcGxlXCIsXG4gICAgICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICAgIH1cbiAgXTsgXG5jb25zdCBkaXNwZXJzZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoYWRkcmVzcyxhYmkscHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwZXJzZTsiXSwibmFtZXMiOlsiZXRoZXJzIiwicHJvdmlkZXIiLCJhZGRyZXNzIiwiYWJpIiwiZGlzcGVyc2UiLCJDb250cmFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./disperse.js\n");

/***/ }),

/***/ "./pages/add.js":
/*!**********************!*\
  !*** ./pages/add.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar addContract = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Tokens = ref[0], setTokens = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), wallets = ref1[0], setWallets = ref1[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, disperseSinger, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSinger();\n                        disperseSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return disperseSinger.disperseToken(Tokens, wallets);\n                    case 6:\n                        response = _ctx.sent;\n                        console.log(\"response\", response);\n                        _ctx.next = 13;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        console.log(\"error\", _ctx.t0);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    10\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input,\n                            label: \"Token\",\n                            value: Tokens,\n                            placeholder: \"Tokens Address\",\n                            onChange: function(event) {\n                                return setTokens(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input,\n                            label: \"Wallets\",\n                            value: wallets,\n                            placeholder: \"List Address\",\n                            onChange: function(event) {\n                                return setWallets(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n        lineNumber: 35,\n        columnNumber: 14\n    }, _this);\n};\n_s(addContract, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (addContract);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekNLN0IsV0FBVztBQTJDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZGQuanM/YzkzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgU2VsZWN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGRpc3BlcnNlIGZyb20gXCIuLi9kaXNwZXJzZVwiO1xuaW1wb3J0IHByb3ZpZGVyIGZyb20gXCIuLi9wcm92aWRlclwiO1xuXG5jb25zdCBhZGRDb250cmFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBbVG9rZW5zLHNldFRva2Vuc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbd2FsbGV0cyxzZXRXYWxsZXRzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgeyBrZXk6ICdFJywgdGV4dDogJ0VUSCcsIHZhbHVlOiAnZXRoJyB9LFxuICAgICAgICB7IGtleTogJ0InLCB0ZXh0OiAnQlNDJywgdmFsdWU6ICdic2MnIH0sXG4gICAgICAgIHsga2V5OiAnTScsIHRleHQ6ICdNQVRJQycsIHZhbHVlOiAnbWF0aWMnIH0sXG4gICAgICBdXG5cbiAgICBjb25zdCBoYW5kbGVTdWJsaXQgPWFzeW5jIChldmVudCkgPT57XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaW5nZXIoKTtcbiAgICAgICAgY29uc3QgZGlzcGVyc2VTaW5nZXIgPSBkaXNwZXJzZS5jb25uZWN0KHNpbmdlcik7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGVyc2VTaW5nZXIuZGlzcGVyc2VUb2tlbihUb2tlbnMsd2FsbGV0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIscmVzcG9uc2UpO1xuXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsZXJyb3IpO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuICAgIHJldHVybiAoIDxMYXlvdXQ+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibGl0fT5cbiAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdUb2tlbicgdmFsdWU9e1Rva2Vuc30gcGxhY2Vob2xkZXI9J1Rva2VucyBBZGRyZXNzJyBvbkNoYW5nZSA9IHtldmVudD0+c2V0VG9rZW5zKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdXYWxsZXRzJyB2YWx1ZT17d2FsbGV0c30gcGxhY2Vob2xkZXI9J0xpc3QgQWRkcmVzcydvbkNoYW5nZSA9IHtldmVudD0+c2V0V2FsbGV0cyhldmVudC50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J0NoYWluJyBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj0nQ2hhaW4nLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+U2VuZDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG5cblxuICAgIDwvTGF5b3V0PiApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgYWRkQ29udHJhY3Q7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiU2VsZWN0IiwiTGF5b3V0IiwiZGlzcGVyc2UiLCJwcm92aWRlciIsImFkZENvbnRyYWN0IiwiVG9rZW5zIiwic2V0VG9rZW5zIiwid2FsbGV0cyIsInNldFdhbGxldHMiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiaGFuZGxlU3VibGl0IiwiZXZlbnQiLCJzaW5nZXIiLCJkaXNwZXJzZVNpbmdlciIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJnZXRTaW5nZXIiLCJjb25uZWN0IiwiZGlzcGVyc2VUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsIkdyb3VwIiwid2lkdGhzIiwiRmllbGQiLCJjb250cm9sIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/add.js\n");

/***/ })

});