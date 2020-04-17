exports.id = "main";
exports.modules = {

/***/ "./src/common/database.ts":
/*!********************************!*\
  !*** ./src/common/database.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv.config();\nvar DB = process.env.DATABASE;\nvar dbInstance = [];\nfunction initDB() {\n    fs_1.default.readFile(DB, function (err, buf) {\n        try {\n            dbInstance = JSON.parse(buf.toString());\n            console.log(\"DB has \" + dbInstance.length + \" authorizations\");\n        }\n        catch (e) {\n            console.error(e);\n            saveDBToFile();\n        }\n    });\n}\nexports.initDB = initDB;\nfunction saveDBToFile() {\n    fs_1.default.writeFile(DB, JSON.stringify(dbInstance, null, '\\t'), function (err) {\n        if (err) {\n            console.log(err);\n        }\n        else {\n            console.log('Data saved');\n        }\n    });\n}\nexports.saveDBToFile = saveDBToFile;\n\n\n//# sourceURL=webpack:///./src/common/database.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Required External Modules\n */\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nvar mustache_express_1 = __importDefault(__webpack_require__(/*! mustache-express */ \"mustache-express\"));\n// Plugins\nvar db = __importStar(__webpack_require__(/*! ./common/database */ \"./src/common/database.ts\"));\n// Routing\nvar items_router_1 = __webpack_require__(/*! ./items/items.router */ \"./src/items/items.router.ts\");\n// Routing Exceptions\nvar error_middleware_1 = __webpack_require__(/*! ./middleware/error.middleware */ \"./src/middleware/error.middleware.ts\");\nvar notFound_middleware_1 = __webpack_require__(/*! ./middleware/notFound.middleware */ \"./src/middleware/notFound.middleware.ts\");\ndotenv.config();\n/**\n * App Variables\n */\nif (!process.env.PORT) {\n    process.exit(1);\n}\nvar PORT = parseInt(process.env.PORT, 10);\nvar app = express_1.default();\n/**\n *  App Configuration\n */\napp.engine('html', mustache_express_1.default());\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use('/static', express_1.default.static('static'));\napp.set('view engine', 'html');\napp.set('views', './views');\napp.use(express_1.default.json());\n// Routing\napp.get('/', function (req, res) {\n    res.render('pages/index.html');\n});\napp.use(\"/items\", items_router_1.itemsRouter);\n// Routing Exceptions\napp.use(error_middleware_1.errorHandler);\napp.use(notFound_middleware_1.notFoundHandler);\n/**\n * Server Activation\n */\nvar server = app.listen(PORT, function () {\n    console.log(\"Listening on port \" + PORT);\n    db.init();\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(function () { return server.close(); });\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ })

};