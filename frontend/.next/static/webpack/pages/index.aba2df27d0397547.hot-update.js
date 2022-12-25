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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIndex\": function() { return /* binding */ useIndex; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ApiService */ \"./src/services/ApiService.ts\");\n\n\nfunction useIndex() {\n    var marcarAula = function marcarAula() {\n        console.log(\"Marcou aula com sucesso!!!\");\n        if (profSelecionado != null) {\n            if (validarDados()) {\n                _services_ApiService__WEBPACK_IMPORTED_MODULE_1__.ApiService.post(\"professores/\" + profSelecionado.id + \"/aulas\", {\n                    name: name,\n                    email: email\n                }).then(function() {\n                    setprofSelecionado;\n                });\n            }\n        }\n    };\n    var validarDados = function validarDados() {\n        return name.length > 3 && email.length >= 10;\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), listaProfessores = ref[0], setlistaProfessores = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), profSelecionado = ref3[0], setprofSelecionado = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        _services_ApiService__WEBPACK_IMPORTED_MODULE_1__.ApiService.get(\"/professores\").then(function(payload) {\n            setlistaProfessores(payload.data);\n        });\n    }, []);\n    return {\n        listaProfessores: listaProfessores,\n        name: name,\n        setName: setName,\n        email: email,\n        setEmail: setEmail,\n        profSelecionado: profSelecionado,\n        setprofSelecionado: setprofSelecionado,\n        marcarAula: marcarAula\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvcGFnZXMvdXNlSW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUVXO0FBRWhELFNBQVNHLFFBQVEsR0FBRztRQVlkQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsR0FBRztRQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUUxQyxJQUFJQyxlQUFlLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUlDLFlBQVksRUFBRSxFQUFFO2dCQUNoQk4saUVBQWUsQ0FBQyxjQUFjLEdBQUdLLGVBQWUsQ0FBQ0csRUFBRSxHQUFHLFFBQVEsRUFDMUQ7b0JBQ0lDLElBQUksRUFBSkEsSUFBSTtvQkFDSkMsS0FBSyxFQUFMQSxLQUFLO2lCQUNSLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFdBQU07b0JBQ1ZDLGtCQUFrQjtnQkFDdEIsQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUVMLENBQUM7SUFDTCxDQUFDO1FBRVFOLFlBQVksR0FBckIsU0FBU0EsWUFBWSxHQUFHO1FBQ3BCLE9BQVFHLElBQUksQ0FBQ0ksTUFBTSxHQUFHLENBQUMsSUFBSUgsS0FBSyxDQUFDRyxNQUFNLElBQUksRUFBRSxDQUFFO0lBQ25ELENBQUM7SUE5QkQsSUFBZ0RkLEdBQXlCLEdBQXpCQSwrQ0FBUSxDQUFjLEVBQUUsQ0FBQyxFQUFsRWUsZ0JBQWdCLEdBQXlCZixHQUF5QixHQUFsRCxFQUFFZ0IsbUJBQW1CLEdBQUloQixHQUF5QixHQUE3QjtJQUM1QyxJQUF3QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QlUsSUFBSSxHQUFhVixJQUFZLEdBQXpCLEVBQUVpQixPQUFPLEdBQUlqQixJQUFZLEdBQWhCO0lBQ3BCLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CVyxLQUFLLEdBQWNYLElBQVksR0FBMUIsRUFBRWtCLFFBQVEsR0FBSWxCLElBQVksR0FBaEI7SUFDdEIsSUFBOENBLElBQWdDLEdBQWhDQSwrQ0FBUSxDQUFtQixJQUFJLENBQUMsRUFBdkVNLGVBQWUsR0FBd0JOLElBQWdDLEdBQXhELEVBQUVhLGtCQUFrQixHQUFJYixJQUFnQyxHQUFwQztJQUUxQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pFLGdFQUFjLENBQUMsY0FBYyxDQUFDLENBQUNXLElBQUksQ0FBQyxTQUFDUSxPQUFPLEVBQUs7WUFDN0NKLG1CQUFtQixDQUFDSSxPQUFPLENBQUNDLElBQUksQ0FBQztRQUNyQyxDQUFDLENBQUM7SUFDTixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUF1QlAsT0FBTztRQUNITixnQkFBZ0IsRUFBaEJBLGdCQUFnQjtRQUNoQkwsSUFBSSxFQUFKQSxJQUFJO1FBQ0pPLE9BQU8sRUFBUEEsT0FBTztRQUNQTixLQUFLLEVBQUxBLEtBQUs7UUFDTE8sUUFBUSxFQUFSQSxRQUFRO1FBQ1JaLGVBQWUsRUFBZkEsZUFBZTtRQUNmTyxrQkFBa0IsRUFBbEJBLGtCQUFrQjtRQUNsQlYsVUFBVSxFQUFWQSxVQUFVO0tBQ2I7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9wYWdlcy91c2VJbmRleC50cz9lZGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9mZXNzb3IgfSBmcm9tICcuLi8uLi9AdHlwZXMvcHJvZmVzc29yJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BcGlTZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUluZGV4KCkge1xuICAgIGNvbnN0IFtsaXN0YVByb2Zlc3NvcmVzLCBzZXRsaXN0YVByb2Zlc3NvcmVzXSA9IHVzZVN0YXRlPFByb2Zlc3NvcltdPihbXSk7XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwcm9mU2VsZWNpb25hZG8sIHNldHByb2ZTZWxlY2lvbmFkb10gPSB1c2VTdGF0ZTxQcm9mZXNzb3IgfCBudWxsPihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIEFwaVNlcnZpY2UuZ2V0KFwiL3Byb2Zlc3NvcmVzXCIpLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIHNldGxpc3RhUHJvZmVzc29yZXMocGF5bG9hZC5kYXRhKVxuICAgICAgICB9KVxuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIG1hcmNhckF1bGEoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFyY291IGF1bGEgY29tIHN1Y2Vzc28hISFcIik7XG5cbiAgICAgICAgaWYgKHByb2ZTZWxlY2lvbmFkbyAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhckRhZG9zKCkpIHtcbiAgICAgICAgICAgICAgICBBcGlTZXJ2aWNlLnBvc3QoXCJwcm9mZXNzb3Jlcy9cIiArIHByb2ZTZWxlY2lvbmFkby5pZCArIFwiL2F1bGFzXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHByb2ZTZWxlY2lvbmFkb1xuICAgICAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhckRhZG9zKCkge1xuICAgICAgICByZXR1cm4gKG5hbWUubGVuZ3RoID4gMyAmJiBlbWFpbC5sZW5ndGggPj0gMTApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RhUHJvZmVzc29yZXMsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHNldE5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBzZXRFbWFpbCxcbiAgICAgICAgcHJvZlNlbGVjaW9uYWRvLFxuICAgICAgICBzZXRwcm9mU2VsZWNpb25hZG8sXG4gICAgICAgIG1hcmNhckF1bGFcbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBpU2VydmljZSIsInVzZUluZGV4IiwibWFyY2FyQXVsYSIsImNvbnNvbGUiLCJsb2ciLCJwcm9mU2VsZWNpb25hZG8iLCJ2YWxpZGFyRGFkb3MiLCJwb3N0IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJ0aGVuIiwic2V0cHJvZlNlbGVjaW9uYWRvIiwibGVuZ3RoIiwibGlzdGFQcm9mZXNzb3JlcyIsInNldGxpc3RhUHJvZmVzc29yZXMiLCJzZXROYW1lIiwic2V0RW1haWwiLCJnZXQiLCJwYXlsb2FkIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/pages/useIndex.ts\n"));

/***/ })

});