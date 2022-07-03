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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ \"./provider.js\");\n\n\nvar address = \"0xea66a12206cF53Fdaf1C01f427338579dc6d89d7\";\nvar abi = [\n    {\n        \"inputs\": [],\n        \"name\": \"Name\",\n        \"outputs\": [\n            {\n                \"internalType\": \"string\",\n                \"name\": \"\",\n                \"type\": \"string\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"contract IERC20\",\n                \"name\": \"token\",\n                \"type\": \"address\"\n            },\n            {\n                \"internalType\": \"uint256\",\n                \"name\": \"values\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"WithdrawalToken\",\n        \"outputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"address payable[]\",\n                \"name\": \"recipients\",\n                \"type\": \"address[]\"\n            },\n            {\n                \"internalType\": \"uint256[]\",\n                \"name\": \"values\",\n                \"type\": \"uint256[]\"\n            }\n        ],\n        \"name\": \"disperseEther\",\n        \"outputs\": [],\n        \"stateMutability\": \"payable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"contract IERC20\",\n                \"name\": \"token\",\n                \"type\": \"address\"\n            },\n            {\n                \"internalType\": \"address[]\",\n                \"name\": \"recipients\",\n                \"type\": \"address[]\"\n            },\n            {\n                \"internalType\": \"uint256[]\",\n                \"name\": \"values\",\n                \"type\": \"uint256[]\"\n            }\n        ],\n        \"name\": \"disperseToken\",\n        \"outputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"contract IERC20\",\n                \"name\": \"token\",\n                \"type\": \"address\"\n            },\n            {\n                \"internalType\": \"address[]\",\n                \"name\": \"recipients\",\n                \"type\": \"address[]\"\n            },\n            {\n                \"internalType\": \"uint256[]\",\n                \"name\": \"values\",\n                \"type\": \"uint256[]\"\n            }\n        ],\n        \"name\": \"disperseTokenSimple\",\n        \"outputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    }\n];\nvar ethABI = [\n    \"function disperseEther(address[],uint256[])public\"\n];\nvar disperse = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.Contract(address, ethABI, _provider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (disperse);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kaXNwZXJzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBZ0M7QUFDRTtBQUdsQyxJQUFNRSxPQUFPLEdBQUcsNENBQTRDO0FBQzVELElBQU1DLEdBQUcsR0FBRztJQUNOO1FBQ0UsUUFBUSxFQUFFLEVBQUU7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLFNBQVMsRUFBRTtZQUNUO2dCQUNFLGNBQWMsRUFBRSxRQUFRO2dCQUN4QixNQUFNLEVBQUUsRUFBRTtnQkFDVixNQUFNLEVBQUUsUUFBUTthQUNqQjtTQUNGO1FBQ0QsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixNQUFNLEVBQUUsVUFBVTtLQUNuQjtJQUNEO1FBQ0UsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsY0FBYyxFQUFFLGlCQUFpQjtnQkFDakMsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLFNBQVM7YUFDbEI7WUFDRDtnQkFDRSxjQUFjLEVBQUUsU0FBUztnQkFDekIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE1BQU0sRUFBRSxTQUFTO2FBQ2xCO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsaUJBQWlCLEVBQUUsWUFBWTtRQUMvQixNQUFNLEVBQUUsVUFBVTtLQUNuQjtJQUNEO1FBQ0UsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsY0FBYyxFQUFFLG1CQUFtQjtnQkFDbkMsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE1BQU0sRUFBRSxXQUFXO2FBQ3BCO1lBQ0Q7Z0JBQ0UsY0FBYyxFQUFFLFdBQVc7Z0JBQzNCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixNQUFNLEVBQUUsV0FBVzthQUNwQjtTQUNGO1FBQ0QsTUFBTSxFQUFFLGVBQWU7UUFDdkIsU0FBUyxFQUFFLEVBQUU7UUFDYixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLE1BQU0sRUFBRSxVQUFVO0tBQ25CO0lBQ0Q7UUFDRSxRQUFRLEVBQUU7WUFDUjtnQkFDRSxjQUFjLEVBQUUsaUJBQWlCO2dCQUNqQyxNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsU0FBUzthQUNsQjtZQUNEO2dCQUNFLGNBQWMsRUFBRSxXQUFXO2dCQUMzQixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsTUFBTSxFQUFFLFdBQVc7YUFDcEI7WUFDRDtnQkFDRSxjQUFjLEVBQUUsV0FBVztnQkFDM0IsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE1BQU0sRUFBRSxXQUFXO2FBQ3BCO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsZUFBZTtRQUN2QixTQUFTLEVBQUUsRUFBRTtRQUNiLGlCQUFpQixFQUFFLFlBQVk7UUFDL0IsTUFBTSxFQUFFLFVBQVU7S0FDbkI7SUFDRDtRQUNFLFFBQVEsRUFBRTtZQUNSO2dCQUNFLGNBQWMsRUFBRSxpQkFBaUI7Z0JBQ2pDLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE1BQU0sRUFBRSxTQUFTO2FBQ2xCO1lBQ0Q7Z0JBQ0UsY0FBYyxFQUFFLFdBQVc7Z0JBQzNCLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixNQUFNLEVBQUUsV0FBVzthQUNwQjtZQUNEO2dCQUNFLGNBQWMsRUFBRSxXQUFXO2dCQUMzQixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsTUFBTSxFQUFFLFdBQVc7YUFDcEI7U0FDRjtRQUNELE1BQU0sRUFBRSxxQkFBcUI7UUFDN0IsU0FBUyxFQUFFLEVBQUU7UUFDYixpQkFBaUIsRUFBRSxZQUFZO1FBQy9CLE1BQU0sRUFBRSxVQUFVO0tBQ25CO0NBQ0o7QUFFRixJQUFNQyxNQUFNLEdBQUc7SUFDWixtREFBbUQ7Q0FDckQ7QUFDRixJQUFNQyxRQUFRLEdBQUcsSUFBSUwsbURBQWUsQ0FBQ0UsT0FBTyxFQUFDRSxNQUFNLEVBQUNILGlEQUFRLENBQUM7QUFFN0QsK0RBQWVJLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kaXNwZXJzZS5qcz85MjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi9wcm92aWRlclwiO1xuXG5cbmNvbnN0IGFkZHJlc3MgPSBcIjB4ZWE2NmExMjIwNmNGNTNGZGFmMUMwMWY0MjczMzg1NzlkYzZkODlkN1wiO1xuY29uc3QgYWJpID0gW1xuICAgICAge1xuICAgICAgICBcImlucHV0c1wiOiBbXSxcbiAgICAgICAgXCJuYW1lXCI6IFwiTmFtZVwiLFxuICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiY29udHJhY3QgSUVSQzIwXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ0b2tlblwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlc1wiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm5hbWVcIjogXCJXaXRoZHJhd2FsVG9rZW5cIixcbiAgICAgICAgXCJvdXRwdXRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzcyBwYXlhYmxlW11cIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInJlY2lwaWVudHNcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NbXVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZbXVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVzXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2W11cIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJuYW1lXCI6IFwiZGlzcGVyc2VFdGhlclwiLFxuICAgICAgICBcIm91dHB1dHNcIjogW10sXG4gICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwicGF5YWJsZVwiLFxuICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJjb250cmFjdCBJRVJDMjBcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1tdXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJyZWNpcGllbnRzXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzW11cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2W11cIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlc1wiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NltdXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwibmFtZVwiOiBcImRpc3BlcnNlVG9rZW5cIixcbiAgICAgICAgXCJvdXRwdXRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiY29udHJhY3QgSUVSQzIwXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ0b2tlblwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NbXVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicmVjaXBpZW50c1wiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1tdXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NltdXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZXNcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZbXVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm5hbWVcIjogXCJkaXNwZXJzZVRva2VuU2ltcGxlXCIsXG4gICAgICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICAgIH1cbiAgXTsgXG5cbiBjb25zdCBldGhBQkkgPSBbXG4gICAgXCJmdW5jdGlvbiBkaXNwZXJzZUV0aGVyKGFkZHJlc3NbXSx1aW50MjU2W10pcHVibGljXCJcbiBdIFxuY29uc3QgZGlzcGVyc2UgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGFkZHJlc3MsZXRoQUJJLHByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGVyc2U7Il0sIm5hbWVzIjpbImV0aGVycyIsInByb3ZpZGVyIiwiYWRkcmVzcyIsImFiaSIsImV0aEFCSSIsImRpc3BlcnNlIiwiQ29udHJhY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./disperse.js\n");

/***/ })

});