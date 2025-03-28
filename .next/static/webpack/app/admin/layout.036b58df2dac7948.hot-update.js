/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/layout",{

/***/ "(app-pages-browser)/./app/admin/components/DashboardHeader.js":
/*!*************************************************!*\
  !*** ./app/admin/components/DashboardHeader.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./app/admin/layout.js":
/*!*****************************!*\
  !*** ./app/admin/layout.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ \"(app-pages-browser)/./app/admin/components/sidebar.js\");\n/* harmony import */ var _components_DashboardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DashboardHeader */ \"(app-pages-browser)/./app/admin/components/DashboardHeader.js\");\n/* harmony import */ var _components_DashboardHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_DashboardHeader__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const handleSidebarItemClick = (itemName)=>{\n        setSearchQuery(itemName);\n    };\n    const handleSearch = (query)=>{\n        setSearchQuery(query);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed lg:relative h-screen z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onItemClick: handleSidebarItemClick\n                }, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\layout.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\layout.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_DashboardHeader__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        onSearch: handleSearch,\n                        searchQuery: searchQuery\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\layout.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\layout.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\layout.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"uixqA8hxOTN7LqZPWxVzG2fnyhQ=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9sYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ0c7QUFDZ0I7QUFFNUMsU0FBU0ksT0FBTyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQzdCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNTyx5QkFBeUIsQ0FBQ0M7UUFDOUJGLGVBQWVFO0lBQ2pCO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQkosZUFBZUk7SUFDakI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDWCwyREFBT0E7b0JBQUNZLGFBQWFOOzs7Ozs7Ozs7OzswQkFJeEIsOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ1Ysb0VBQWVBO3dCQUFDWSxVQUFVTDt3QkFBY0osYUFBYUE7Ozs7OztvQkFHckREOzs7Ozs7Ozs7Ozs7O0FBSVQ7R0E1QndCRDtLQUFBQSIsInNvdXJjZXMiOlsiRDpcXE1ZIFdPUktcXFNlbGZfU3R1ZHlcXE5FWFQgcHJvamVjdHNcXGd5bS1wb3J0YWwtZnJvbnRlbmRcXGFwcFxcYWRtaW5cXGxheW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXInO1xuaW1wb3J0IERhc2hib2FyZEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvRGFzaGJvYXJkSGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTaWRlYmFySXRlbUNsaWNrID0gKGl0ZW1OYW1lKSA9PiB7XG4gICAgc2V0U2VhcmNoUXVlcnkoaXRlbU5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChxdWVyeSkgPT4ge1xuICAgIHNldFNlYXJjaFF1ZXJ5KHF1ZXJ5KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlblwiPlxuICAgICAgey8qIFNpZGViYXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGxnOnJlbGF0aXZlIGgtc2NyZWVuIHotNTBcIj5cbiAgICAgICAgPFNpZGViYXIgb25JdGVtQ2xpY2s9e2hhbmRsZVNpZGViYXJJdGVtQ2xpY2t9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1haW4gQ29udGVudCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICB7LyogRGFzaGJvYXJkIEhlYWRlciB3aXRoIFNlYXJjaCBCYXIgKi99XG4gICAgICAgIDxEYXNoYm9hcmRIZWFkZXIgb25TZWFyY2g9e2hhbmRsZVNlYXJjaH0gc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSAvPlxuXG4gICAgICAgIHsvKiBQYWdlIENvbnRlbnQgKi99XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2lkZWJhciIsIkRhc2hib2FyZEhlYWRlciIsIkxheW91dCIsImNoaWxkcmVuIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImhhbmRsZVNpZGViYXJJdGVtQ2xpY2siLCJpdGVtTmFtZSIsImhhbmRsZVNlYXJjaCIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwib25JdGVtQ2xpY2siLCJvblNlYXJjaCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/layout.js\n"));

/***/ })

});