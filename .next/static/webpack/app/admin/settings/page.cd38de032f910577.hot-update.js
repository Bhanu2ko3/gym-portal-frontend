/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/settings/page",{

/***/ "(app-pages-browser)/./app/admin/settings/components/sideTabBar.js":
/*!*****************************************************!*\
  !*** ./app/admin/settings/components/sideTabBar.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tabs_gymTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/gymTab */ \"(app-pages-browser)/./app/admin/settings/components/tabs/gymTab.js\");\n/* harmony import */ var _tabs_bookingTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/bookingTab */ \"(app-pages-browser)/./app/admin/settings/components/tabs/bookingTab.js\");\n/* harmony import */ var _tabs_bookingTab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tabs_bookingTab__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tabs_memberTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/memberTab */ \"(app-pages-browser)/./app/admin/settings/components/tabs/memberTab.js\");\n/* harmony import */ var _tabs_memberTab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tabs_memberTab__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _tabs_attendanceTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/attendanceTab */ \"(app-pages-browser)/./app/admin/settings/components/tabs/attendanceTab.js\");\n/* harmony import */ var _tabs_attendanceTab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tabs_attendanceTab__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _tabs_marketingTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/marketingTab */ \"(app-pages-browser)/./app/admin/settings/components/tabs/marketingTab.js\");\n/* harmony import */ var _tabs_marketingTab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tabs_marketingTab__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _tabs_billingTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/billingTab */ \"(app-pages-browser)/./app/admin/settings/components/tabs/billingTab.js\");\n/* harmony import */ var _tabs_billingTab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tabs_billingTab__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _tabs_saleTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/saleTab */ \"(app-pages-browser)/./app/admin/settings/components/tabs/saleTab.js\");\n/* harmony import */ var _tabs_saleTab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tabs_saleTab__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _tabs_emailTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/emailTab */ \"(app-pages-browser)/./app/admin/settings/components/tabs/emailTab.js\");\n/* harmony import */ var _tabs_emailTab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tabs_emailTab__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _tabs_integrationTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/integrationTab */ \"(app-pages-browser)/./app/admin/settings/components/tabs/integrationTab.js\");\n/* harmony import */ var _tabs_integrationTab__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tabs_integrationTab__WEBPACK_IMPORTED_MODULE_10__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst SideTabBar = ()=>{\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"GYM\");\n    const tabs = [\n        \"GYM\",\n        \"Booking\",\n        \"Member\",\n        \"Attendance\",\n        \"Marketing\",\n        \"Billing\",\n        \"Sale\",\n        \"Email\",\n        \"Integration\"\n    ];\n    const renderTabContent = ()=>{\n        switch(activeTab){\n            case \"GYM\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabs_gymTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 22,\n                    columnNumber: 16\n                }, undefined);\n            case \"Booking\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_tabs_bookingTab__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 24,\n                    columnNumber: 16\n                }, undefined);\n            case \"Member\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_tabs_memberTab__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 26,\n                    columnNumber: 16\n                }, undefined);\n            case \"Attendance\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_tabs_attendanceTab__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 28,\n                    columnNumber: 16\n                }, undefined);\n            case \"Marketing\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_tabs_marketingTab__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 30,\n                    columnNumber: 16\n                }, undefined);\n            case \"Billing\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_tabs_billingTab__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 32,\n                    columnNumber: 16\n                }, undefined);\n            case \"Sale\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_tabs_saleTab__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 34,\n                    columnNumber: 16\n                }, undefined);\n            case \"Email\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_tabs_emailTab__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 36,\n                    columnNumber: 16\n                }, undefined);\n            case \"Integration\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_tabs_integrationTab__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 38,\n                    columnNumber: 16\n                }, undefined);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Select a valid tab\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 40,\n                    columnNumber: 16\n                }, undefined);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col rounded-lg shadow-lg p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b border-gray-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex space-x-8\",\n                    children: tabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"py-4 px-1 text-sm font-medium border-b-2 \".concat(activeTab === tab ? \"border-[var(--primary-color)] text-[var(--primary-color)]\" : \"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300\"),\n                            onClick: ()=>setActiveTab(tab),\n                            children: tab\n                        }, tab, false, {\n                            fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 overflow-auto\",\n                children: renderTabContent()\n            }, void 0, false, {\n                fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\MY WORK\\\\Self_Study\\\\NEXT projects\\\\gym-portal-frontend\\\\app\\\\admin\\\\settings\\\\components\\\\sideTabBar.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideTabBar, \"pfWcaQCEzSAK7n3ZQPgP/LdFcao=\");\n_c = SideTabBar;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideTabBar);\nvar _c;\n$RefreshReg$(_c, \"SideTabBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL3NpZGVUYWJCYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDRTtBQUNRO0FBQ0Y7QUFDUTtBQUNGO0FBQ0o7QUFDTjtBQUNFO0FBQ1k7QUFHbkQsTUFBTVUsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1hLE9BQU87UUFBQztRQUFPO1FBQVc7UUFBVTtRQUFjO1FBQWE7UUFBVztRQUFRO1FBQVM7S0FBYztJQUUvRyxNQUFNQyxtQkFBbUI7UUFDdkIsT0FBUUg7WUFDTixLQUFLO2dCQUNILHFCQUFPLDhEQUFDVixvREFBTUE7Ozs7O1lBQ2hCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNDLHlEQUFVQTs7Ozs7WUFDcEIsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0Msd0RBQVNBOzs7OztZQUNuQixLQUFLO2dCQUNILHFCQUFPLDhEQUFDQyw0REFBYUE7Ozs7O1lBQ3ZCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNDLDJEQUFZQTs7Ozs7WUFDdEIsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0MseURBQVVBOzs7OztZQUNwQixLQUFLO2dCQUNILHFCQUFPLDhEQUFDQyxzREFBT0E7Ozs7O1lBQ2pCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNDLHVEQUFRQTs7Ozs7WUFDbEIsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0MsOERBQWNBOzs7OztZQUN4QjtnQkFDRSxxQkFBTyw4REFBQ007OEJBQUk7Ozs7OztRQUNoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNBO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1pILEtBQUtLLEdBQUcsQ0FBQyxDQUFDQyxvQkFDVCw4REFBQ0M7NEJBRUNKLFdBQVcsNENBSVYsT0FIQ0wsY0FBY1EsTUFDViw4REFDQTs0QkFFTkUsU0FBUyxJQUFNVCxhQUFhTztzQ0FFM0JBOzJCQVJJQTs7Ozs7Ozs7Ozs7Ozs7OzBCQWViLDhEQUFDSjtnQkFBSUMsV0FBVTswQkFBd0JGOzs7Ozs7Ozs7Ozs7QUFHN0M7R0F2RE1KO0tBQUFBO0FBeUROLGlFQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJEOlxcTVkgV09SS1xcU2VsZl9TdHVkeVxcTkVYVCBwcm9qZWN0c1xcZ3ltLXBvcnRhbC1mcm9udGVuZFxcYXBwXFxhZG1pblxcc2V0dGluZ3NcXGNvbXBvbmVudHNcXHNpZGVUYWJCYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHeW1UYWIgZnJvbSBcIi4vdGFicy9neW1UYWJcIjtcclxuaW1wb3J0IEJvb2tpbmdUYWIgZnJvbSBcIi4vdGFicy9ib29raW5nVGFiXCI7XHJcbmltcG9ydCBNZW1iZXJUYWIgZnJvbSBcIi4vdGFicy9tZW1iZXJUYWJcIjtcclxuaW1wb3J0IEF0dGVuZGFuY2VUYWIgZnJvbSBcIi4vdGFicy9hdHRlbmRhbmNlVGFiXCI7XHJcbmltcG9ydCBNYXJrZXRpbmdUYWIgZnJvbSBcIi4vdGFicy9tYXJrZXRpbmdUYWJcIjtcclxuaW1wb3J0IEJpbGxpbmdUYWIgZnJvbSBcIi4vdGFicy9iaWxsaW5nVGFiXCI7XHJcbmltcG9ydCBTYWxlVGFiIGZyb20gXCIuL3RhYnMvc2FsZVRhYlwiO1xyXG5pbXBvcnQgRW1haWxUYWIgZnJvbSBcIi4vdGFicy9lbWFpbFRhYlwiO1xyXG5pbXBvcnQgSW50ZWdyYXRpb25UYWIgZnJvbSBcIi4vdGFicy9pbnRlZ3JhdGlvblRhYlwiO1xyXG5cclxuXHJcbmNvbnN0IFNpZGVUYWJCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKFwiR1lNXCIpO1xyXG5cclxuICBjb25zdCB0YWJzID0gW1wiR1lNXCIsIFwiQm9va2luZ1wiLCBcIk1lbWJlclwiLCBcIkF0dGVuZGFuY2VcIiwgXCJNYXJrZXRpbmdcIiwgXCJCaWxsaW5nXCIsIFwiU2FsZVwiLCBcIkVtYWlsXCIsIFwiSW50ZWdyYXRpb25cIl07XHJcblxyXG4gIGNvbnN0IHJlbmRlclRhYkNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGl2ZVRhYikge1xyXG4gICAgICBjYXNlIFwiR1lNXCI6XHJcbiAgICAgICAgcmV0dXJuIDxHeW1UYWIgLz47XHJcbiAgICAgIGNhc2UgXCJCb29raW5nXCI6XHJcbiAgICAgICAgcmV0dXJuIDxCb29raW5nVGFiIC8+O1xyXG4gICAgICBjYXNlIFwiTWVtYmVyXCI6XHJcbiAgICAgICAgcmV0dXJuIDxNZW1iZXJUYWIgLz47XHJcbiAgICAgIGNhc2UgXCJBdHRlbmRhbmNlXCI6XHJcbiAgICAgICAgcmV0dXJuIDxBdHRlbmRhbmNlVGFiIC8+O1xyXG4gICAgICBjYXNlIFwiTWFya2V0aW5nXCI6XHJcbiAgICAgICAgcmV0dXJuIDxNYXJrZXRpbmdUYWIgLz47XHJcbiAgICAgIGNhc2UgXCJCaWxsaW5nXCI6XHJcbiAgICAgICAgcmV0dXJuIDxCaWxsaW5nVGFiIC8+O1xyXG4gICAgICBjYXNlIFwiU2FsZVwiOlxyXG4gICAgICAgIHJldHVybiA8U2FsZVRhYiAvPjtcclxuICAgICAgY2FzZSBcIkVtYWlsXCI6XHJcbiAgICAgICAgcmV0dXJuIDxFbWFpbFRhYiAvPjtcclxuICAgICAgY2FzZSBcIkludGVncmF0aW9uXCI6XHJcbiAgICAgICAgcmV0dXJuIDxJbnRlZ3JhdGlvblRhYiAvPjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gPGRpdj5TZWxlY3QgYSB2YWxpZCB0YWI8L2Rpdj47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGZsZXggZmxleC1jb2wgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC00XCI+XHJcbiAgICAgIHsvKiBUYWIgTmF2aWdhdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC04XCI+XHJcbiAgICAgICAgICB7dGFicy5tYXAoKHRhYikgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXt0YWJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktNCBweC0xIHRleHQtc20gZm9udC1tZWRpdW0gYm9yZGVyLWItMiAke1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSB0YWJcclxuICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1bdmFyKC0tcHJpbWFyeS1jb2xvcildIHRleHQtW3ZhcigtLXByaW1hcnktY29sb3IpXVwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKHRhYil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGFifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBUYWIgQ29udGVudCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3ctYXV0b1wiPntyZW5kZXJUYWJDb250ZW50KCl9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZVRhYkJhcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiR3ltVGFiIiwiQm9va2luZ1RhYiIsIk1lbWJlclRhYiIsIkF0dGVuZGFuY2VUYWIiLCJNYXJrZXRpbmdUYWIiLCJCaWxsaW5nVGFiIiwiU2FsZVRhYiIsIkVtYWlsVGFiIiwiSW50ZWdyYXRpb25UYWIiLCJTaWRlVGFiQmFyIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidGFicyIsInJlbmRlclRhYkNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJtYXAiLCJ0YWIiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/settings/components/sideTabBar.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/admin/settings/components/tabs/attendanceTab.js":
/*!*************************************************************!*\
  !*** ./app/admin/settings/components/tabs/attendanceTab.js ***!
  \*************************************************************/
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

/***/ "(app-pages-browser)/./app/admin/settings/components/tabs/billingTab.js":
/*!**********************************************************!*\
  !*** ./app/admin/settings/components/tabs/billingTab.js ***!
  \**********************************************************/
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

/***/ "(app-pages-browser)/./app/admin/settings/components/tabs/emailTab.js":
/*!********************************************************!*\
  !*** ./app/admin/settings/components/tabs/emailTab.js ***!
  \********************************************************/
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

/***/ "(app-pages-browser)/./app/admin/settings/components/tabs/integrationTab.js":
/*!**************************************************************!*\
  !*** ./app/admin/settings/components/tabs/integrationTab.js ***!
  \**************************************************************/
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

/***/ "(app-pages-browser)/./app/admin/settings/components/tabs/marketingTab.js":
/*!************************************************************!*\
  !*** ./app/admin/settings/components/tabs/marketingTab.js ***!
  \************************************************************/
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

/***/ "(app-pages-browser)/./app/admin/settings/components/tabs/memberTab.js":
/*!*********************************************************!*\
  !*** ./app/admin/settings/components/tabs/memberTab.js ***!
  \*********************************************************/
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

/***/ "(app-pages-browser)/./app/admin/settings/components/tabs/saleTab.js":
/*!*******************************************************!*\
  !*** ./app/admin/settings/components/tabs/saleTab.js ***!
  \*******************************************************/
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


/***/ })

});