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

/***/ "./src/hooks/pages/useIndex.ts":
/*!*************************************!*\
  !*** ./src/hooks/pages/useIndex.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIndex\": function() { return /* binding */ useIndex; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ApiService */ \"./src/services/ApiService.ts\");\n\n\nfunction useIndex() {\n    var marcarAula = function marcarAula() {\n        console.log(\"Marcou aula com sucesso!!!\");\n        if (profSelecionado != null) {\n            if (validarDados()) {\n                _services_ApiService__WEBPACK_IMPORTED_MODULE_1__.ApiService.post(\"professores/\" + profSelecionado.id + \"/aulas\", {});\n            }\n        }\n    };\n    var validarDados = function validarDados() {\n        return name.length > 3 && email.length >= 10;\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), listaProfessores = ref[0], setlistaProfessores = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), profSelecionado = ref3[0], setprofSelecionado = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        _services_ApiService__WEBPACK_IMPORTED_MODULE_1__.ApiService.get(\"/professores\").then(function(payload) {\n            setlistaProfessores(payload.data);\n        });\n    }, []);\n    return {\n        listaProfessores: listaProfessores,\n        name: name,\n        setName: setName,\n        email: email,\n        setEmail: setEmail,\n        profSelecionado: profSelecionado,\n        setprofSelecionado: setprofSelecionado,\n        marcarAula: marcarAula\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvcGFnZXMvdXNlSW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUVXO0FBRWhELFNBQVNHLFFBQVEsR0FBRztRQVlkQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsR0FBRztRQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUUxQyxJQUFJQyxlQUFlLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUlDLFlBQVksRUFBRSxFQUFFO2dCQUNoQk4saUVBQWUsQ0FBQyxjQUFjLEdBQUdLLGVBQWUsQ0FBQ0csRUFBRSxHQUFHLFFBQVEsRUFDMUQsRUFFSCxDQUFDO1lBQ04sQ0FBQztRQUVMLENBQUM7SUFDTCxDQUFDO1FBRVFGLFlBQVksR0FBckIsU0FBU0EsWUFBWSxHQUFHO1FBQ3BCLE9BQVFHLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUMsSUFBSUMsS0FBSyxDQUFDRCxNQUFNLElBQUksRUFBRSxDQUFFO0lBQ25ELENBQUM7SUEzQkQsSUFBZ0RYLEdBQXlCLEdBQXpCQSwrQ0FBUSxDQUFjLEVBQUUsQ0FBQyxFQUFsRWEsZ0JBQWdCLEdBQXlCYixHQUF5QixHQUFsRCxFQUFFYyxtQkFBbUIsR0FBSWQsR0FBeUIsR0FBN0I7SUFDNUMsSUFBd0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JVLElBQUksR0FBYVYsSUFBWSxHQUF6QixFQUFFZSxPQUFPLEdBQUlmLElBQVksR0FBaEI7SUFDcEIsSUFBMEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JZLEtBQUssR0FBY1osSUFBWSxHQUExQixFQUFFZ0IsUUFBUSxHQUFJaEIsSUFBWSxHQUFoQjtJQUN0QixJQUE4Q0EsSUFBZ0MsR0FBaENBLCtDQUFRLENBQW1CLElBQUksQ0FBQyxFQUF2RU0sZUFBZSxHQUF3Qk4sSUFBZ0MsR0FBeEQsRUFBRWlCLGtCQUFrQixHQUFJakIsSUFBZ0MsR0FBcEM7SUFFMUNELGdEQUFTLENBQUMsV0FBTTtRQUNaRSxnRUFBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDa0IsSUFBSSxDQUFDLFNBQUNDLE9BQU8sRUFBSztZQUM3Q04sbUJBQW1CLENBQUNNLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO1FBQ3JDLENBQUMsQ0FBQztJQUNOLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQW9CUCxPQUFPO1FBQ0hSLGdCQUFnQixFQUFoQkEsZ0JBQWdCO1FBQ2hCSCxJQUFJLEVBQUpBLElBQUk7UUFDSkssT0FBTyxFQUFQQSxPQUFPO1FBQ1BILEtBQUssRUFBTEEsS0FBSztRQUNMSSxRQUFRLEVBQVJBLFFBQVE7UUFDUlYsZUFBZSxFQUFmQSxlQUFlO1FBQ2ZXLGtCQUFrQixFQUFsQkEsa0JBQWtCO1FBQ2xCZCxVQUFVLEVBQVZBLFVBQVU7S0FDYjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3BhZ2VzL3VzZUluZGV4LnRzP2VkZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb2Zlc3NvciB9IGZyb20gJy4uLy4uL0B0eXBlcy9wcm9mZXNzb3InO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0FwaVNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5kZXgoKSB7XG4gICAgY29uc3QgW2xpc3RhUHJvZmVzc29yZXMsIHNldGxpc3RhUHJvZmVzc29yZXNdID0gdXNlU3RhdGU8UHJvZmVzc29yW10+KFtdKTtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Byb2ZTZWxlY2lvbmFkbywgc2V0cHJvZlNlbGVjaW9uYWRvXSA9IHVzZVN0YXRlPFByb2Zlc3NvciB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQXBpU2VydmljZS5nZXQoXCIvcHJvZmVzc29yZXNcIikudGhlbigocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgc2V0bGlzdGFQcm9mZXNzb3JlcyhwYXlsb2FkLmRhdGEpXG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gbWFyY2FyQXVsYSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXJjb3UgYXVsYSBjb20gc3VjZXNzbyEhIVwiKTtcblxuICAgICAgICBpZiAocHJvZlNlbGVjaW9uYWRvICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGFyRGFkb3MoKSkge1xuICAgICAgICAgICAgICAgIEFwaVNlcnZpY2UucG9zdChcInByb2Zlc3NvcmVzL1wiICsgcHJvZlNlbGVjaW9uYWRvLmlkICsgXCIvYXVsYXNcIiwgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhckRhZG9zKCkge1xuICAgICAgICByZXR1cm4gKG5hbWUubGVuZ3RoID4gMyAmJiBlbWFpbC5sZW5ndGggPj0gMTApOyAgICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0YVByb2Zlc3NvcmVzLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgc2V0RW1haWwsXG4gICAgICAgIHByb2ZTZWxlY2lvbmFkbyxcbiAgICAgICAgc2V0cHJvZlNlbGVjaW9uYWRvLFxuICAgICAgICBtYXJjYXJBdWxhXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwaVNlcnZpY2UiLCJ1c2VJbmRleCIsIm1hcmNhckF1bGEiLCJjb25zb2xlIiwibG9nIiwicHJvZlNlbGVjaW9uYWRvIiwidmFsaWRhckRhZG9zIiwicG9zdCIsImlkIiwibmFtZSIsImxlbmd0aCIsImVtYWlsIiwibGlzdGFQcm9mZXNzb3JlcyIsInNldGxpc3RhUHJvZmVzc29yZXMiLCJzZXROYW1lIiwic2V0RW1haWwiLCJzZXRwcm9mU2VsZWNpb25hZG8iLCJnZXQiLCJ0aGVuIiwicGF5bG9hZCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/pages/useIndex.ts\n"));

/***/ })

});