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

/***/ "./src/services/FormatterService.ts":
/*!******************************************!*\
  !*** ./src/services/FormatterService.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormatterService\": function() { return /* binding */ FormatterService; }\n/* harmony export */ });\nvar FormatterService = {\n    valorMonetario: function valorMonetario(value) {\n        return value.toLocaleString(\"pt-BR\", {\n            minimumFractionDigits: 2,\n            style: \"currency\",\n            currency: \"BRL\"\n        });\n    },\n    limitarTexto: function limitarTexto(content_, maxLength) {\n        if (content_.length <= 100) {\n            return content_;\n        }\n        return content_.slice(0, 100) + \"...\";\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvRm9ybWF0dGVyU2VydmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sSUFBTUEsZ0JBQWdCLEdBQUc7SUFDNUJDLGNBQWMsRUFBZEEsU0FBQUEsY0FBYyxDQUFDQyxLQUFhLEVBQVU7UUFDbEMsT0FBT0EsS0FBSyxDQUFDQyxjQUFjLENBQ3ZCLE9BQU8sRUFDUDtZQUNJQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3hCQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUNEQyxZQUFZLEVBQVpBLFNBQUFBLFlBQVksQ0FBQ0MsUUFBZ0IsRUFBRUMsU0FBaUIsRUFBVTtRQUN0RCxJQUFJRCxRQUFRLENBQUNFLE1BQU0sSUFBSSxHQUFHLEVBQUU7WUFDeEIsT0FBT0YsUUFBUSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxPQUFPQSxRQUFRLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvRm9ybWF0dGVyU2VydmljZS50cz84ZjJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBGb3JtYXR0ZXJTZXJ2aWNlID0ge1xuICAgIHZhbG9yTW9uZXRhcmlvKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICBcInB0LUJSXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiQlJMXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfSxcbiAgICBsaW1pdGFyVGV4dG8oY29udGVudF86IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBpZiAoY29udGVudF8ubGVuZ3RoIDw9IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRfO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZW50Xy5zbGljZSgwLCAxMDApICsgXCIuLi5cIjtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRm9ybWF0dGVyU2VydmljZSIsInZhbG9yTW9uZXRhcmlvIiwidmFsdWUiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsInN0eWxlIiwiY3VycmVuY3kiLCJsaW1pdGFyVGV4dG8iLCJjb250ZW50XyIsIm1heExlbmd0aCIsImxlbmd0aCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/FormatterService.ts\n"));

/***/ })

});