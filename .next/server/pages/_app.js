/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/ga/index.js":
/*!*************************!*\
  !*** ./lib/ga/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\n// log the pageview with their URL\nconst pageview = (url)=>{\n    window.gtag(\"config\", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {\n        page_path: url\n    });\n};\n// log specific events happening.\nconst event = ({ action , params  })=>{\n    window.gtag(\"event\", action, params);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2EvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBa0M7QUFDM0IsTUFBTUEsUUFBUSxHQUFHLENBQUNDLEdBQUcsR0FBSztJQUM3QkMsTUFBTSxDQUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsNEJBQTRCLEVBQUU7UUFDOURDLFNBQVMsRUFBRU4sR0FBRztLQUNmLENBQUM7Q0FDSDtBQUVELGlDQUFpQztBQUMxQixNQUFNTyxLQUFLLEdBQUcsQ0FBQyxFQUFFQyxNQUFNLEdBQUVDLE1BQU0sR0FBRSxHQUFLO0lBQzNDUixNQUFNLENBQUNDLElBQUksQ0FBQyxPQUFPLEVBQUVNLE1BQU0sRUFBRUMsTUFBTSxDQUFDO0NBQ3JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2dhL2luZGV4LmpzPzlhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9nIHRoZSBwYWdldmlldyB3aXRoIHRoZWlyIFVSTFxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xuICAgIHdpbmRvdy5ndGFnKCdjb25maWcnLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTLCB7XG4gICAgICBwYWdlX3BhdGg6IHVybCxcbiAgICB9KVxuICB9XG4gIFxuICAvLyBsb2cgc3BlY2lmaWMgZXZlbnRzIGhhcHBlbmluZy5cbiAgZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBwYXJhbXMgfSkgPT4ge1xuICAgIHdpbmRvdy5ndGFnKCdldmVudCcsIGFjdGlvbiwgcGFyYW1zKVxuICB9Il0sIm5hbWVzIjpbInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/ga/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/global.css */ \"./public/global.css\");\n/* harmony import */ var _public_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_keru_project_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/keru-project.style.css */ \"./public/keru-project.style.css\");\n/* harmony import */ var _public_keru_project_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_keru_project_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/style.css */ \"./public/style.css\");\n/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/ga */ \"./lib/ga/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_ga__WEBPACK_IMPORTED_MODULE_4__.pageview(url);\n        };\n        //When the component is mounted, subscribe to router changes\n        //and log those page views\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        // If the component is unmounted, unsubscribe\n        // from the event with the `off` method\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/sebastienlacan/Documents/GitHub/KERUPROJECT-TEST-DEV/pages/_app.js\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDWTtBQUNiO0FBQ0U7QUFDUTtBQUNOO0FBR2xCLFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3RELE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUUxQkMsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTUssaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBRyxHQUFLO1lBQ2pDUiw2Q0FBVyxDQUFDUSxHQUFHLENBQUM7U0FDakI7UUFDRCw0REFBNEQ7UUFDNUQsMEJBQTBCO1FBQzFCRixNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHFCQUFxQixFQUFFSixpQkFBaUIsQ0FBQztRQUUxRCw2Q0FBNkM7UUFDN0MsdUNBQXVDO1FBQ3ZDLE9BQU8sSUFBTTtZQUVYRCxNQUFNLENBQUNJLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHFCQUFxQixFQUFFTCxpQkFBaUIsQ0FBQztTQUM1RDtLQUNGLEVBQUU7UUFBQ0QsTUFBTSxDQUFDSSxNQUFNO0tBQUMsQ0FBQztJQUVuQixxQkFBTyw4REFBQ04sU0FBUztRQUFFLEdBQUdDLFNBQVM7Ozs7O1lBQUksQ0FBQztDQUNyQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3B1YmxpYy9nbG9iYWwuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2tlcnUtcHJvamVjdC5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIGdhIGZyb20gJy4uL2xpYi9nYSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcbiAgICAgIGdhLnBhZ2V2aWV3KHVybClcbiAgICB9XG4gICAgLy9XaGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgc3Vic2NyaWJlIHRvIHJvdXRlciBjaGFuZ2VzXG4gICAgLy9hbmQgbG9nIHRob3NlIHBhZ2Ugdmlld3NcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgXG4gICAgLy8gSWYgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQsIHVuc3Vic2NyaWJlXG4gICAgLy8gZnJvbSB0aGUgZXZlbnQgd2l0aCB0aGUgYG9mZmAgbWV0aG9kXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICB9XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSlcblxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbn0iXSwibmFtZXMiOlsiZ2EiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwicGFnZXZpZXciLCJldmVudHMiLCJvbiIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/global.css":
/*!***************************!*\
  !*** ./public/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./public/keru-project.style.css":
/*!***************************************!*\
  !*** ./public/keru-project.style.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./public/style.css":
/*!**************************!*\
  !*** ./public/style.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();