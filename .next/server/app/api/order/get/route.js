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
exports.id = "app/api/order/get/route";
exports.ids = ["app/api/order/get/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forder%2Fget%2Froute&page=%2Fapi%2Forder%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forder%2Fget%2Froute.jsx&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cfood-delivery%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cfood-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forder%2Fget%2Froute&page=%2Fapi%2Forder%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forder%2Fget%2Froute.jsx&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cfood-delivery%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cfood-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_shahzaib_Desktop_food_delivery_app_api_order_get_route_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/order/get/route.jsx */ \"(rsc)/./app/api/order/get/route.jsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/order/get/route\",\n        pathname: \"/api/order/get\",\n        filename: \"route\",\n        bundlePath: \"app/api/order/get/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\shahzaib\\\\Desktop\\\\food-delivery\\\\app\\\\api\\\\order\\\\get\\\\route.jsx\",\n    nextConfigOutput,\n    userland: C_Users_shahzaib_Desktop_food_delivery_app_api_order_get_route_jsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/order/get/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZvcmRlciUyRmdldCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGb3JkZXIlMkZnZXQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZvcmRlciUyRmdldCUyRnJvdXRlLmpzeCZhcHBEaXI9QyUzQSU1Q1VzZXJzJTVDc2hhaHphaWIlNUNEZXNrdG9wJTVDZm9vZC1kZWxpdmVyeSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDc2hhaHphaWIlNUNEZXNrdG9wJTVDZm9vZC1kZWxpdmVyeSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEI7QUFDekc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLWRlbGl2ZXJ5Lz9jNWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHNoYWh6YWliXFxcXERlc2t0b3BcXFxcZm9vZC1kZWxpdmVyeVxcXFxhcHBcXFxcYXBpXFxcXG9yZGVyXFxcXGdldFxcXFxyb3V0ZS5qc3hcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL29yZGVyL2dldC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL29yZGVyL2dldFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvb3JkZXIvZ2V0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcc2hhaHphaWJcXFxcRGVza3RvcFxcXFxmb29kLWRlbGl2ZXJ5XFxcXGFwcFxcXFxhcGlcXFxcb3JkZXJcXFxcZ2V0XFxcXHJvdXRlLmpzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvb3JkZXIvZ2V0L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forder%2Fget%2Froute&page=%2Fapi%2Forder%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forder%2Fget%2Froute.jsx&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cfood-delivery%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cfood-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.jsx":
/*!**********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   isAdmin: () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/models/User */ \"(rsc)/./app/models/User.jsx\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _libs_mongoConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @libs/mongoConnect */ \"(rsc)/./libs/mongoConnect.jsx\");\n/* harmony import */ var _app_models_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/models/UserInfo */ \"(rsc)/./app/models/UserInfo.jsx\");\n/* harmony import */ var _app_dbConnect_Connect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/dbConnect/Connect */ \"(rsc)/./app/dbConnect/Connect.jsx\");\n\n\n\n\n\n\n\n\n\nconst authOptions = {\n    secret: \"dajndjnajdnjandjnadjn\",\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_5__.MongoDBAdapter)(_libs_mongoConnect__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                try {\n                    const email = credentials?.email;\n                    const password = credentials?.password;\n                    await (0,_app_dbConnect_Connect__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n                    const user = await _app_models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        email\n                    });\n                    if (!user) {\n                        // User does not exist\n                        throw new Error(\"No user found with this email.\");\n                    }\n                    const passwordOk = bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password);\n                    if (!passwordOk) {\n                        // Password does not match\n                        throw new Error(\"Incorrect password.\");\n                    }\n                    // Return user object if credentials are valid\n                    return user;\n                } catch (error) {\n                    console.error(\"Error during authorization\", error.message);\n                    throw new Error(error.message);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        }\n    }\n};\nconst isAdmin = async ()=>{\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(authOptions);\n    const userEmail = session?.user.email;\n    if (!userEmail) {\n        return false;\n    }\n    const userInfo = await _app_models_UserInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({\n        email: userEmail\n    });\n    if (!userInfo) {\n        return false;\n    }\n    return userInfo.admin;\n};\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDTTtBQUNwQztBQUNPO0FBQ21CO0FBQ0Q7QUFDUjtBQUNIO0FBQ0c7QUFFeEMsTUFBTVUsY0FBYztJQUN6QkMsUUFBUUMsdUJBQTJCO0lBQ25DRyxTQUFTVCxxRUFBY0EsQ0FBQ0MsMERBQWFBO0lBQ3JDUyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxXQUFXO1FBQ1RiLHNFQUFjQSxDQUFDO1lBQ2JjLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sZ0JBQWdCO1lBQ3RDQyxjQUFjVCxRQUFRQyxHQUFHLENBQUNTLG9CQUFvQjtRQUNoRDtRQUNBcEIsMkVBQW1CQSxDQUFDO1lBQ2xCcUIsTUFBTTtZQUNOQyxJQUFJO1lBQ0pDLGFBQWE7Z0JBQ1hDLFVBQVU7b0JBQ1JDLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0FDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXLEVBQUVNLEdBQUc7Z0JBQzlCLElBQUk7b0JBQ0YsTUFBTUMsUUFBUVAsYUFBYU87b0JBQzNCLE1BQU1ILFdBQVdKLGFBQWFJO29CQUU5QixNQUFNcEIsa0VBQVNBO29CQUNmLE1BQU13QixPQUFPLE1BQU03Qix3REFBSUEsQ0FBQzhCLE9BQU8sQ0FBQzt3QkFBRUY7b0JBQU07b0JBRXhDLElBQUksQ0FBQ0MsTUFBTTt3QkFDVCxzQkFBc0I7d0JBQ3RCLE1BQU0sSUFBSUUsTUFBTTtvQkFDbEI7b0JBRUEsTUFBTUMsYUFBYWpDLDJEQUFrQixDQUFDMEIsVUFBVUksS0FBS0osUUFBUTtvQkFFN0QsSUFBSSxDQUFDTyxZQUFZO3dCQUNmLDBCQUEwQjt3QkFDMUIsTUFBTSxJQUFJRCxNQUFNO29CQUNsQjtvQkFFQSw4Q0FBOEM7b0JBQzlDLE9BQU9GO2dCQUNULEVBQUUsT0FBT0ssT0FBTztvQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkEsTUFBTUUsT0FBTztvQkFDekQsTUFBTSxJQUFJTCxNQUFNRyxNQUFNRSxPQUFPO2dCQUMvQjtZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTXpCLFNBQVEsRUFBRUEsT0FBTyxFQUFFMEIsS0FBSyxFQUFFO1lBQzlCLElBQUlBLE9BQU87Z0JBQ1QxQixRQUFRaUIsSUFBSSxDQUFDVCxFQUFFLEdBQUdrQixNQUFNbEIsRUFBRTtZQUM1QjtZQUNBLE9BQU9SO1FBQ1Q7UUFDQSxNQUFNMkIsS0FBSSxFQUFFRCxLQUFLLEVBQUVULElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSUyxNQUFNbEIsRUFBRSxHQUFHUyxLQUFLVCxFQUFFO1lBQ3BCO1lBQ0EsT0FBT2tCO1FBQ1Q7SUFDRjtBQUNGLEVBQUU7QUFFSyxNQUFNRSxVQUFVO0lBQ3JCLE1BQU01QixVQUFVLE1BQU1mLGdFQUFnQkEsQ0FBQ1M7SUFDdkMsTUFBTW1DLFlBQVk3QixTQUFTaUIsS0FBS0Q7SUFDaEMsSUFBSSxDQUFDYSxXQUFXO1FBQ2QsT0FBTztJQUNUO0lBQ0EsTUFBTUMsV0FBVyxNQUFNdEMsNERBQVFBLENBQUMwQixPQUFPLENBQUM7UUFBRUYsT0FBT2E7SUFBVTtJQUMzRCxJQUFJLENBQUNDLFVBQVU7UUFDYixPQUFPO0lBQ1Q7SUFDQSxPQUFPQSxTQUFTQyxLQUFLO0FBQ3ZCLEVBQUU7QUFFRixNQUFNQyxVQUFVaEQsMERBQVFBLENBQUNVO0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1kZWxpdmVyeS8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzeD81ZDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL2FwcC9tb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL21vbmdvZGItYWRhcHRlclwiO1xyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQGxpYnMvbW9uZ29Db25uZWN0XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiQGFwcC9tb2RlbHMvVXNlckluZm9cIjtcclxuaW1wb3J0IENvbm5lY3REQiBmcm9tIFwiQGFwcC9kYkNvbm5lY3QvQ29ubmVjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBpZDogXCJjcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxyXG4gICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGVtYWlsID0gY3JlZGVudGlhbHM/LmVtYWlsO1xyXG4gICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjcmVkZW50aWFscz8ucGFzc3dvcmQ7XHJcblxyXG4gICAgICAgICAgYXdhaXQgQ29ubmVjdERCKCk7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZXIgZG9lcyBub3QgZXhpc3RcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdXNlciBmb3VuZCB3aXRoIHRoaXMgZW1haWwuXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHBhc3N3b3JkT2sgPSBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICAgIGlmICghcGFzc3dvcmRPaykge1xyXG4gICAgICAgICAgICAvLyBQYXNzd29yZCBkb2VzIG5vdCBtYXRjaFxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFJldHVybiB1c2VyIG9iamVjdCBpZiBjcmVkZW50aWFscyBhcmUgdmFsaWRcclxuICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIGF1dGhvcml6YXRpb25cIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzQWRtaW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGNvbnN0IHVzZXJFbWFpbCA9IHNlc3Npb24/LnVzZXIuZW1haWw7XHJcbiAgaWYgKCF1c2VyRW1haWwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgY29uc3QgdXNlckluZm8gPSBhd2FpdCBVc2VySW5mby5maW5kT25lKHsgZW1haWw6IHVzZXJFbWFpbCB9KTtcclxuICBpZiAoIXVzZXJJbmZvKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB1c2VySW5mby5hZG1pbjtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImdldFNlcnZlclNlc3Npb24iLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiVXNlciIsIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnRQcm9taXNlIiwiVXNlckluZm8iLCJDb25uZWN0REIiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJhZGFwdGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJuYW1lIiwiaWQiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJlbWFpbCIsInVzZXIiLCJmaW5kT25lIiwiRXJyb3IiLCJwYXNzd29yZE9rIiwiY29tcGFyZVN5bmMiLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJqd3QiLCJpc0FkbWluIiwidXNlckVtYWlsIiwidXNlckluZm8iLCJhZG1pbiIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.jsx\n");

/***/ }),

/***/ "(rsc)/./app/api/order/get/route.jsx":
/*!*************************************!*\
  !*** ./app/api/order/get/route.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/api/auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.jsx\");\n/* harmony import */ var _app_dbConnect_Connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/dbConnect/Connect */ \"(rsc)/./app/dbConnect/Connect.jsx\");\n/* harmony import */ var _app_models_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/models/Order */ \"(rsc)/./app/models/Order.jsx\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\n\nconst GET = async (req)=>{\n    try {\n        await (0,_app_dbConnect_Connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n        const userEmail = session?.user.email;\n        const admin = await (0,_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.isAdmin)();\n        if (admin) {\n            const orders = await _app_models_Order__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                success: true,\n                orders,\n                status: 200\n            });\n        } else {\n            const orders = await _app_models_Order__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n                email: userEmail\n            });\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                success: true,\n                orders,\n                status: 200\n            });\n        }\n    } catch (error) {\n        console.log(error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            success: false,\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL29yZGVyL2dldC9yb3V0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5RTtBQUUxQjtBQUNUO0FBQ087QUFDRjtBQUVwQyxNQUFNTSxNQUFNLE9BQU9DO0lBQ3hCLElBQUk7UUFDRixNQUFNTCxrRUFBU0E7UUFDZixNQUFNTSxVQUFVLE1BQU1KLDJEQUFnQkEsQ0FBQ0oscUVBQVdBO1FBQ2xELE1BQU1TLFlBQVlELFNBQVNFLEtBQUtDO1FBQ2hDLE1BQU1DLFFBQVEsTUFBTVgscUVBQU9BO1FBQzNCLElBQUlXLE9BQU87WUFDVCxNQUFNQyxTQUFTLE1BQU1WLHlEQUFLQSxDQUFDVyxJQUFJO1lBQy9CLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQ3ZCQyxTQUFTO2dCQUNUSDtnQkFDQUksUUFBUTtZQUNWO1FBQ0YsT0FBTztZQUNMLE1BQU1KLFNBQVMsTUFBTVYseURBQUtBLENBQUNXLElBQUksQ0FBQztnQkFBRUgsT0FBT0Y7WUFBVTtZQUNuRCxPQUFPSixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUN2QkMsU0FBUztnQkFDVEg7Z0JBQ0FJLFFBQVE7WUFDVjtRQUNGO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsT0FBTztRQUN6QixPQUFPaEIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUN2QkMsU0FBUztZQUNUQyxRQUFRO1FBQ1Y7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLWRlbGl2ZXJ5Ly4vYXBwL2FwaS9vcmRlci9nZXQvcm91dGUuanN4PzkzYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aE9wdGlvbnMsIGlzQWRtaW4gfSBmcm9tIFwiQGFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XHJcblxyXG5pbXBvcnQgQ29ubmVjdERCIGZyb20gXCJAYXBwL2RiQ29ubmVjdC9Db25uZWN0XCI7XHJcbmltcG9ydCBPcmRlciBmcm9tIFwiQGFwcC9tb2RlbHMvT3JkZXJcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKHJlcSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBDb25uZWN0REIoKTtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IHNlc3Npb24/LnVzZXIuZW1haWw7XHJcbiAgICBjb25zdCBhZG1pbiA9IGF3YWl0IGlzQWRtaW4oKTtcclxuICAgIGlmIChhZG1pbikge1xyXG4gICAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBPcmRlci5maW5kKCk7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBvcmRlcnMsXHJcbiAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgT3JkZXIuZmluZCh7IGVtYWlsOiB1c2VyRW1haWwgfSk7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBvcmRlcnMsXHJcbiAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBzdGF0dXM6IDUwMCxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImF1dGhPcHRpb25zIiwiaXNBZG1pbiIsIkNvbm5lY3REQiIsIk9yZGVyIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcSIsInNlc3Npb24iLCJ1c2VyRW1haWwiLCJ1c2VyIiwiZW1haWwiLCJhZG1pbiIsIm9yZGVycyIsImZpbmQiLCJqc29uIiwic3VjY2VzcyIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/order/get/route.jsx\n");

/***/ }),

/***/ "(rsc)/./app/dbConnect/Connect.jsx":
/*!***********************************!*\
  !*** ./app/dbConnect/Connect.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected;\nconst ConnectDB = async ()=>{\n    try {\n        if (isConnected) {\n            console.log(\"Using existing database connection\");\n            return;\n        }\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://muhammadshahzaib138:4qwddg3sOF10RdRa@cluster0.zvjeuds.mongodb.net/?retryWrites=true&w=majority&appName=FoodOrdering\", {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = db.connections[0].readyState;\n        console.log(\"Connected to MongoDB successfully\");\n    } catch (error) {\n        console.error(\"Connection to MongoDB failed:\", error.message);\n        throw new Error(\"Unable to connect to MongoDB\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvZGJDb25uZWN0L0Nvbm5lY3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQztBQUVKLE1BQU1DLFlBQVk7SUFDaEIsSUFBSTtRQUNGLElBQUlELGFBQWE7WUFDZkUsUUFBUUMsR0FBRyxDQUFDO1lBQ1o7UUFDRjtRQUVBLE1BQU1DLEtBQUssTUFBTUwsdURBQWdCLENBQUNPLG1JQUFxQixFQUFFO1lBQ3ZERyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUVBVixjQUFjSSxHQUFHTyxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO1FBQzFDVixRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9VLE9BQU87UUFDZFgsUUFBUVcsS0FBSyxDQUFDLGlDQUFpQ0EsTUFBTUMsT0FBTztRQUM1RCxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRjtBQUVBLGlFQUFlZCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1kZWxpdmVyeS8uL2FwcC9kYkNvbm5lY3QvQ29ubmVjdC5qc3g/Nzc1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5sZXQgaXNDb25uZWN0ZWQ7XHJcblxyXG5jb25zdCBDb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGV4aXN0aW5nIGRhdGFiYXNlIGNvbm5lY3Rpb25cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gTW9uZ29EQiBzdWNjZXNzZnVsbHlcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDb25uZWN0aW9uIHRvIE1vbmdvREIgZmFpbGVkOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjb25uZWN0IHRvIE1vbmdvREJcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdERCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJpc0Nvbm5lY3RlZCIsIkNvbm5lY3REQiIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/dbConnect/Connect.jsx\n");

/***/ }),

/***/ "(rsc)/./app/models/Order.jsx":
/*!******************************!*\
  !*** ./app/models/Order.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CartProductSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    productId: {\n        type: String\n    },\n    name: {\n        type: String\n    },\n    image: {\n        type: String\n    },\n    category: {\n        type: String\n    },\n    sizes: {\n        type: String\n    },\n    extraIngredientPrices: [\n        {\n            name: {\n                type: String\n            }\n        }\n    ],\n    quantity: {\n        type: String\n    }\n}, {\n    _id: false\n});\nconst orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    orderId: {\n        type: String\n    },\n    isNewOrder: {\n        type: Boolean,\n        default: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String\n    },\n    phone: {\n        type: String,\n        required: true\n    },\n    city: {\n        type: String,\n        required: true\n    },\n    address: {\n        type: String,\n        required: true\n    },\n    postal: {\n        type: String,\n        required: true\n    },\n    cartProducts: {\n        type: [\n            CartProductSchema\n        ],\n        required: true\n    },\n    totalPrice: {\n        type: String\n    },\n    status: {\n        type: String,\n        enum: [\n            \"making\",\n            \"on way\",\n            \"delivered\"\n        ]\n    },\n    paid: {\n        type: Boolean,\n        default: false\n    },\n    paymentScreenshot: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Order || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", orderSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL09yZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsb0JBQW9CLElBQUlELHdEQUFlLENBQzNDO0lBQ0VHLFdBQVc7UUFBRUMsTUFBTUM7SUFBTztJQUMxQkMsTUFBTTtRQUFFRixNQUFNQztJQUFPO0lBQ3JCRSxPQUFPO1FBQUVILE1BQU1DO0lBQU87SUFDdEJHLFVBQVU7UUFBRUosTUFBTUM7SUFBTztJQUN6QkksT0FBTztRQUFFTCxNQUFNQztJQUFPO0lBQ3RCSyx1QkFBdUI7UUFBQztZQUFFSixNQUFNO2dCQUFFRixNQUFNQztZQUFPO1FBQUU7S0FBRTtJQUNuRE0sVUFBVTtRQUFFUCxNQUFNQztJQUFPO0FBQzNCLEdBQ0E7SUFBRU8sS0FBSztBQUFNO0FBR2YsTUFBTUMsY0FBYyxJQUFJYix3REFBZSxDQUNyQztJQUNFYyxTQUFTO1FBQUVWLE1BQU1DO0lBQU87SUFDeEJVLFlBQVk7UUFBRVgsTUFBTVk7UUFBU0MsU0FBUztJQUFLO0lBQzNDWCxNQUFNO1FBQUVGLE1BQU1DO1FBQVFhLFVBQVU7SUFBSztJQUNyQ0MsT0FBTztRQUFFZixNQUFNQztJQUFPO0lBQ3RCZSxPQUFPO1FBQUVoQixNQUFNQztRQUFRYSxVQUFVO0lBQUs7SUFDdENHLE1BQU07UUFBRWpCLE1BQU1DO1FBQVFhLFVBQVU7SUFBSztJQUNyQ0ksU0FBUztRQUFFbEIsTUFBTUM7UUFBUWEsVUFBVTtJQUFLO0lBQ3hDSyxRQUFRO1FBQUVuQixNQUFNQztRQUFRYSxVQUFVO0lBQUs7SUFDdkNNLGNBQWM7UUFBRXBCLE1BQU07WUFBQ0g7U0FBa0I7UUFBRWlCLFVBQVU7SUFBSztJQUMxRE8sWUFBWTtRQUFFckIsTUFBTUM7SUFBTztJQUMzQnFCLFFBQVE7UUFDTnRCLE1BQU1DO1FBQ05zQixNQUFNO1lBQUM7WUFBVTtZQUFVO1NBQVk7SUFDekM7SUFDQUMsTUFBTTtRQUFFeEIsTUFBTVk7UUFBU0MsU0FBUztJQUFNO0lBQ3RDWSxtQkFBbUI7UUFBRXpCLE1BQU1DO0lBQU87QUFDcEMsR0FDQTtJQUFFeUIsWUFBWTtBQUFLO0FBR3JCLE1BQU1DLFFBQVEvQix3REFBZSxDQUFDK0IsS0FBSyxJQUFJL0IscURBQWMsQ0FBQyxTQUFTYTtBQUMvRCxpRUFBZWtCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLWRlbGl2ZXJ5Ly4vYXBwL21vZGVscy9PcmRlci5qc3g/NjczNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBDYXJ0UHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgcHJvZHVjdElkOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgY2F0ZWdvcnk6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBzaXplczogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGV4dHJhSW5ncmVkaWVudFByaWNlczogW3sgbmFtZTogeyB0eXBlOiBTdHJpbmcgfSB9XSxcclxuICAgIHF1YW50aXR5OiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIH0sXHJcbiAgeyBfaWQ6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBvcmRlcklkOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgaXNOZXdPcmRlcjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcGhvbmU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgY2l0eTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBhZGRyZXNzOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBvc3RhbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBjYXJ0UHJvZHVjdHM6IHsgdHlwZTogW0NhcnRQcm9kdWN0U2NoZW1hXSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHRvdGFsUHJpY2U6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBzdGF0dXM6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBlbnVtOiBbXCJtYWtpbmdcIiwgXCJvbiB3YXlcIiwgXCJkZWxpdmVyZWRcIl0sXHJcbiAgICB9LFxyXG4gICAgcGFpZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gICAgcGF5bWVudFNjcmVlbnNob3Q6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxuY29uc3QgT3JkZXIgPSBtb25nb29zZS5tb2RlbHMuT3JkZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJPcmRlclwiLCBvcmRlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJDYXJ0UHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsInByb2R1Y3RJZCIsInR5cGUiLCJTdHJpbmciLCJuYW1lIiwiaW1hZ2UiLCJjYXRlZ29yeSIsInNpemVzIiwiZXh0cmFJbmdyZWRpZW50UHJpY2VzIiwicXVhbnRpdHkiLCJfaWQiLCJvcmRlclNjaGVtYSIsIm9yZGVySWQiLCJpc05ld09yZGVyIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJyZXF1aXJlZCIsImVtYWlsIiwicGhvbmUiLCJjaXR5IiwiYWRkcmVzcyIsInBvc3RhbCIsImNhcnRQcm9kdWN0cyIsInRvdGFsUHJpY2UiLCJzdGF0dXMiLCJlbnVtIiwicGFpZCIsInBheW1lbnRTY3JlZW5zaG90IiwidGltZXN0YW1wcyIsIk9yZGVyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/models/Order.jsx\n");

/***/ }),

/***/ "(rsc)/./app/models/User.jsx":
/*!*****************************!*\
  !*** ./app/models/User.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    image: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL1VzZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxhQUFhLElBQUlELHdEQUFlLENBQ3BDO0lBQ0VHLE1BQU07UUFBRUMsTUFBTUM7SUFBTztJQUNyQkMsT0FBTztRQUFFRixNQUFNQztRQUFRRSxRQUFRO0lBQUs7SUFDcENDLFVBQVU7UUFBRUosTUFBTUM7SUFBTztJQUN6QkksT0FBTztRQUFFTCxNQUFNQztJQUFPO0FBQ3hCLEdBQ0E7SUFBRUssWUFBWTtBQUFLO0FBR3JCLE1BQU1DLE9BQU9YLHdEQUFlLENBQUNXLElBQUksSUFBSVgscURBQWMsQ0FBQyxRQUFRQztBQUU1RCxpRUFBZVUsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtZGVsaXZlcnkvLi9hcHAvbW9kZWxzL1VzZXIuanN4P2U2ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJ0aW1lc3RhbXBzIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/models/User.jsx\n");

/***/ }),

/***/ "(rsc)/./app/models/UserInfo.jsx":
/*!*********************************!*\
  !*** ./app/models/UserInfo.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userInfoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String\n    },\n    email: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    address: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    postal: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst UserInfo = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).UserInfo || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"UserInfo\", userInfoSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL1VzZXJJbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsaUJBQWlCLElBQUlELHdEQUFlLENBQ3hDO0lBQ0VHLE1BQU07UUFBRUMsTUFBTUM7SUFBTztJQUNyQkMsT0FBTztRQUFFRixNQUFNQztJQUFPO0lBQ3RCRSxNQUFNO1FBQUVILE1BQU1DO0lBQU87SUFDckJHLFNBQVM7UUFBRUosTUFBTUM7SUFBTztJQUN4QkksT0FBTztRQUFFTCxNQUFNQztJQUFPO0lBQ3RCSyxRQUFRO1FBQUVOLE1BQU1DO0lBQU87SUFDdkJNLE9BQU87UUFBRVAsTUFBTVE7UUFBU0MsU0FBUztJQUFNO0FBQ3pDLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR3JCLE1BQU1DLFdBQ0pmLHdEQUFlLENBQUNlLFFBQVEsSUFBSWYscURBQWMsQ0FBQyxZQUFZQztBQUV6RCxpRUFBZWMsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtZGVsaXZlcnkvLi9hcHAvbW9kZWxzL1VzZXJJbmZvLmpzeD9iZmFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IHVzZXJJbmZvU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBjaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgYWRkcmVzczogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIHBob25lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcG9zdGFsOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgYWRtaW46IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5jb25zdCBVc2VySW5mbyA9XHJcbiAgbW9uZ29vc2UubW9kZWxzLlVzZXJJbmZvIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlckluZm9cIiwgdXNlckluZm9TY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckluZm87XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJJbmZvU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJlbWFpbCIsImNpdHkiLCJhZGRyZXNzIiwicGhvbmUiLCJwb3N0YWwiLCJhZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXJJbmZvIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/models/UserInfo.jsx\n");

/***/ }),

/***/ "(rsc)/./libs/mongoConnect.jsx":
/*!*******************************!*\
  !*** ./libs/mongoConnect.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (false) {}\nconst uri = \"mongodb+srv://muhammadshahzaib138:4qwddg3sOF10RdRa@cluster0.zvjeuds.mongodb.net/?retryWrites=true&w=majority&appName=FoodOrdering\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvQ29ubmVjdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzVEO0FBRXRDLElBQUksS0FBc0IsRUFBRSxFQUUzQjtBQUVELE1BQU1LLE1BQU1KLG1JQUFxQjtBQUNqQyxNQUFNSyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUlQLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNRLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSCxTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QkcsT0FBT0MsbUJBQW1CLEdBQUdILE9BQU9JLE9BQU87SUFDN0M7SUFDQUgsZ0JBQWdCQyxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUYsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtZGVsaXZlcnkvLi9saWJzL21vbmdvQ29ubmVjdC5qc3g/YjNjMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPX1VSTCkge1xyXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKTtcclxufVxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongoConnect.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forder%2Fget%2Froute&page=%2Fapi%2Forder%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forder%2Fget%2Froute.jsx&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cfood-delivery%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cfood-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();