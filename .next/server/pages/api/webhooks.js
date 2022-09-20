"use strict";
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
exports.id = "pages/api/webhooks";
exports.ids = ["pages/api/webhooks"];
exports.modules = {

/***/ "micro":
/*!************************!*\
  !*** external "micro" ***!
  \************************/
/***/ ((module) => {

module.exports = require("micro");

/***/ }),

/***/ "micro-cors":
/*!*****************************!*\
  !*** external "micro-cors" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("micro-cors");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/webhooks.js":
/*!*******************************!*\
  !*** ./pages/api/webhooks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micro */ \"micro\");\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(micro__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micro-cors */ \"micro-cors\");\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(micro_cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET_KEY);\nconst URL = process.env.URL;\nconst webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;\n// Stripe requires the raw body to construct the event.\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst cors = micro_cors__WEBPACK_IMPORTED_MODULE_2___default()({\n    allowMethods: [\n        \"POST\",\n        \"HEAD\"\n    ]\n});\nconst webhookHandler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const buf = await (0,micro__WEBPACK_IMPORTED_MODULE_1__.buffer)(req);\n        const signature = req.headers[\"stripe-signature\"];\n        let event;\n        try {\n            event = stripe.webhooks.constructEvent(buf.toString(), signature, webhookSecret);\n        } catch (err) {\n            // On error, log and return the error message.\n            console.log(`❌ Error message: ${err.message}`);\n            res.status(400).send(`Webhook Error: ${err.message}`);\n            return;\n        }\n        // Successfully constructed event.\n        console.log(\"✅ Success:\", event.id);\n        const paymentIntent = event.data.object;\n        if (event.type == \"payment_intent.succeeded\") {}\n        switch(event.type){\n            case \"payment_intent.succeeded\":\n                {\n                    const paymentIntent1 = event.data.object;\n                    console.log(`PaymentIntent status: ${paymentIntent1.status}`);\n                    break;\n                }\n            case \"payment_intent.payment_failed\":\n                {\n                    const paymentIntent2 = event.data.object;\n                    console.log(`❌ Payment failed: ${paymentIntent2.last_payment_error?.message}`);\n                    break;\n                }\n            case \"charge.succeeded\":\n                {\n                    const charge = event.data.object;\n                    console.log(`Charge id: ${charge.id}`);\n                    break;\n                }\n            default:\n                {\n                    console.warn(`Unhandled event type: ${event.type}`);\n                    break;\n                }\n        }\n        // Return a response to acknowledge receipt of the event.\n        res.json({\n            received: true\n        });\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors(webhookHandler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRWpCLEtBQUssQ0FBQ2MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRCxNQUFNO2lCQUNQO1NBQ0Y7UUFFRCx5REFBeUQ7UUFDekRuQixHQUFHLENBQUN1QixJQUFJLENBQUM7WUFBRUMsUUFBUSxFQUFFLElBQUk7U0FBRSxDQUFDLENBQUM7S0FDOUIsTUFBTTtRQUNMeEIsR0FBRyxDQUFDeUIsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQnpCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDYSxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQUMzQztDQUNGO0FBRUQsaUVBQWU5QixJQUFJLENBQUNFLGNBQWMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3dlYmhvb2tzLmpzPzNiMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xuaW1wb3J0IHsgYnVmZmVyIH0gZnJvbSAnbWljcm8nO1xuaW1wb3J0IENvcnMgZnJvbSAnbWljcm8tY29ycyc7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuY29uc3QgVVJMID0gcHJvY2Vzcy5lbnYuVVJMO1xuXG5jb25zdCB3ZWJob29rU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1RSSVBFX1dFQkhPT0tfU0VDUkVUO1xuXG4vLyBTdHJpcGUgcmVxdWlyZXMgdGhlIHJhdyBib2R5IHRvIGNvbnN0cnVjdCB0aGUgZXZlbnQuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5cbmNvbnN0IGNvcnMgPSBDb3JzKHtcbiAgYWxsb3dNZXRob2RzOiBbJ1BPU1QnLCAnSEVBRCddLFxufSk7XG5cblxuXG5cblxuY29uc3Qgd2ViaG9va0hhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IGJ1ZiA9IGF3YWl0IGJ1ZmZlcihyZXEpO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHJlcS5oZWFkZXJzWydzdHJpcGUtc2lnbmF0dXJlJ107XG5cbiAgICBsZXQgZXZlbnQ7XG4gICAgdHJ5IHtcbiAgICAgIGV2ZW50ID0gc3RyaXBlLndlYmhvb2tzLmNvbnN0cnVjdEV2ZW50KFxuICAgICAgICBidWYudG9TdHJpbmcoKSxcbiAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICB3ZWJob29rU2VjcmV0XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gT24gZXJyb3IsIGxvZyBhbmQgcmV0dXJuIHRoZSBlcnJvciBtZXNzYWdlLlxuICAgICAgY29uc29sZS5sb2coYOKdjCBFcnJvciBtZXNzYWdlOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoYFdlYmhvb2sgRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3VjY2Vzc2Z1bGx5IGNvbnN0cnVjdGVkIGV2ZW50LlxuICAgIGNvbnNvbGUubG9nKCfinIUgU3VjY2VzczonLCBldmVudC5pZCk7XG5cbiAgICBjb25zdCBwYXltZW50SW50ZW50ID0gZXZlbnQuZGF0YS5vYmplY3Q7XG5cbiAgICBpZihldmVudC50eXBlPT0ncGF5bWVudF9pbnRlbnQuc3VjY2VlZGVkJyl7XG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdwYXltZW50X2ludGVudC5zdWNjZWVkZWQnOiB7XG4gICAgICAgIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBldmVudC5kYXRhLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coYFBheW1lbnRJbnRlbnQgc3RhdHVzOiAke3BheW1lbnRJbnRlbnQuc3RhdHVzfWApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3BheW1lbnRfaW50ZW50LnBheW1lbnRfZmFpbGVkJzoge1xuICAgICAgICBjb25zdCBwYXltZW50SW50ZW50ID0gZXZlbnQuZGF0YS5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGDinYwgUGF5bWVudCBmYWlsZWQ6ICR7cGF5bWVudEludGVudC5sYXN0X3BheW1lbnRfZXJyb3I/Lm1lc3NhZ2V9YFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NoYXJnZS5zdWNjZWVkZWQnOiB7XG4gICAgICAgIGNvbnN0IGNoYXJnZSA9IGV2ZW50LmRhdGEub2JqZWN0O1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2hhcmdlIGlkOiAke2NoYXJnZS5pZH1gKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnNvbGUud2FybihgVW5oYW5kbGVkIGV2ZW50IHR5cGU6ICR7ZXZlbnQudHlwZX1gKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGEgcmVzcG9uc2UgdG8gYWNrbm93bGVkZ2UgcmVjZWlwdCBvZiB0aGUgZXZlbnQuXG4gICAgcmVzLmpzb24oeyByZWNlaXZlZDogdHJ1ZSB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIE5vdCBBbGxvd2VkJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcnMod2ViaG9va0hhbmRsZXIpOyJdLCJuYW1lcyI6WyJTdHJpcGUiLCJidWZmZXIiLCJDb3JzIiwiTW9uZ29DbGllbnQiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJVUkwiLCJ3ZWJob29rU2VjcmV0IiwiU1RSSVBFX1dFQkhPT0tfU0VDUkVUIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImNvcnMiLCJhbGxvd01ldGhvZHMiLCJ3ZWJob29rSGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJ1ZiIsInNpZ25hdHVyZSIsImhlYWRlcnMiLCJldmVudCIsIndlYmhvb2tzIiwiY29uc3RydWN0RXZlbnQiLCJ0b1N0cmluZyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwic3RhdHVzIiwic2VuZCIsImlkIiwicGF5bWVudEludGVudCIsImRhdGEiLCJvYmplY3QiLCJ0eXBlIiwibGFzdF9wYXltZW50X2Vycm9yIiwiY2hhcmdlIiwid2FybiIsImpzb24iLCJyZWNlaXZlZCIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/webhooks.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/webhooks.js"));
module.exports = __webpack_exports__;

})();