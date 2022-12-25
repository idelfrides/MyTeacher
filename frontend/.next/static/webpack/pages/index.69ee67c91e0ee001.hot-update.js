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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIndex\": function() { return /* binding */ useIndex; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ApiService */ \"./src/services/ApiService.ts\");\n\n\nfunction useIndex() {\n    var marcarAula = function marcarAula() {\n        if (profSelecionado != null) {\n            if (validarDados()) {\n                _services_ApiService__WEBPACK_IMPORTED_MODULE_1__.ApiService.post(\"professores/\" + profSelecionado.id + \"/aulas\", {\n                    name: name,\n                    email: email\n                }).then(function() {\n                    setprofSelecionado(null);\n                    setMessage(\"Aula cadastada com sucesso!\");\n                }).catch(function(error) {\n                    var ref;\n                    setMessage((ref = error.response) === null || ref === void 0 ? void 0 : ref.data.message);\n                });\n            } else {\n                setMessage(\"Preencha os campos com dados v\\xe1lidos...\");\n            }\n        }\n    };\n    var validarDados = function validarDados() {\n        return name.length > 3 && email.length >= 10;\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), listaProfessores = ref[0], setlistaProfessores = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), profSelecionado = ref3[0], setprofSelecionado = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), message = ref4[0], setMessage = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        _services_ApiService__WEBPACK_IMPORTED_MODULE_1__.ApiService.get(\"/professores\").then(function(payload) {\n            setlistaProfessores(payload.data);\n        });\n    }, []);\n    return {\n        listaProfessores: listaProfessores,\n        name: name,\n        setName: setName,\n        email: email,\n        setEmail: setEmail,\n        profSelecionado: profSelecionado,\n        setprofSelecionado: setprofSelecionado,\n        marcarAula: marcarAula,\n        message: message,\n        setMessage: setMessage\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL2hvb2tzL3BhZ2VzL3VzZUluZGV4LnRzP2VkZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb2Zlc3NvciB9IGZyb20gJy4uLy4uL0B0eXBlcy9wcm9mZXNzb3InO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0FwaVNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5kZXgoKSB7XG4gICAgY29uc3QgW2xpc3RhUHJvZmVzc29yZXMsIHNldGxpc3RhUHJvZmVzc29yZXNdID0gdXNlU3RhdGU8UHJvZmVzc29yW10+KFtdKTtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Byb2ZTZWxlY2lvbmFkbywgc2V0cHJvZlNlbGVjaW9uYWRvXSA9IHVzZVN0YXRlPFByb2Zlc3NvciB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIEFwaVNlcnZpY2UuZ2V0KFwiL3Byb2Zlc3NvcmVzXCIpLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIHNldGxpc3RhUHJvZmVzc29yZXMocGF5bG9hZC5kYXRhKVxuICAgICAgICB9KVxuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIG1hcmNhckF1bGEoKSB7XG4gICAgICAgIGlmIChwcm9mU2VsZWNpb25hZG8gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXJEYWRvcygpKSB7XG4gICAgICAgICAgICAgICAgQXBpU2VydmljZS5wb3N0KFwicHJvZmVzc29yZXMvXCIgKyBwcm9mU2VsZWNpb25hZG8uaWQgKyBcIi9hdWxhc1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRwcm9mU2VsZWNpb25hZG8obnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKFwiQXVsYSBjYWRhc3RhZGEgY29tIHN1Y2Vzc28hXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoZXJyb3IucmVzcG9uc2U/LmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJQcmVlbmNoYSBvcyBjYW1wb3MgY29tIGRhZG9zIHbDoWxpZG9zLi4uXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGFyRGFkb3MoKSB7XG4gICAgICAgIHJldHVybiAobmFtZS5sZW5ndGggPiAzICYmIGVtYWlsLmxlbmd0aCA+PSAxMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGltcGFyRm9ybXVsYXJpbygpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0YVByb2Zlc3NvcmVzLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgc2V0RW1haWwsXG4gICAgICAgIHByb2ZTZWxlY2lvbmFkbyxcbiAgICAgICAgc2V0cHJvZlNlbGVjaW9uYWRvLFxuICAgICAgICBtYXJjYXJBdWxhLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBzZXRNZXNzYWdlXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwaVNlcnZpY2UiLCJ1c2VJbmRleCIsIm1hcmNhckF1bGEiLCJwcm9mU2VsZWNpb25hZG8iLCJ2YWxpZGFyRGFkb3MiLCJwb3N0IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJ0aGVuIiwic2V0cHJvZlNlbGVjaW9uYWRvIiwic2V0TWVzc2FnZSIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwibGVuZ3RoIiwibGlzdGFQcm9mZXNzb3JlcyIsInNldGxpc3RhUHJvZmVzc29yZXMiLCJzZXROYW1lIiwic2V0RW1haWwiLCJnZXQiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/pages/useIndex.ts\n"));

/***/ })

});