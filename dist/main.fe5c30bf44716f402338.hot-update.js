exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Required External Modules\n */\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar http_1 = __webpack_require__(/*! http */ \"http\");\nvar socket_io_1 = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nvar mustache_express_1 = __importDefault(__webpack_require__(/*! mustache-express */ \"mustache-express\"));\n// Routing\nvar items_router_1 = __webpack_require__(/*! ./items/items.router */ \"./src/items/items.router.ts\");\n// Routing Exceptions\nvar error_middleware_1 = __webpack_require__(/*! ./middleware/error.middleware */ \"./src/middleware/error.middleware.ts\");\nvar notFound_middleware_1 = __webpack_require__(/*! ./middleware/notFound.middleware */ \"./src/middleware/notFound.middleware.ts\");\ndotenv.config();\n/**\n * App Variables\n */\nif (!process.env.PORT) {\n    process.exit(1);\n}\nvar PORT = parseInt(process.env.PORT, 10);\nvar app = express_1.default();\nvar serverHttp = new http_1.Server(app);\nvar io = socket_io_1.listen(serverHttp);\n/**\n *  App Configuration\n */\napp.engine('html', mustache_express_1.default());\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use('/static', express_1.default.static('static'));\napp.set('view engine', 'html');\napp.set('views', './views');\napp.use(express_1.default.json());\n// Routing\napp.get('/', function (req, res) {\n    res.render('pages/index.html');\n});\napp.use(\"/items\", items_router_1.itemsRouter);\n// Routing Exceptions\napp.use(error_middleware_1.errorHandler);\napp.use(notFound_middleware_1.notFoundHandler);\n/**\n * Socket IO\n */\nio.on('connection', function (socket) {\n    io.emit('this', { will: 'be received by everyone' });\n    io.on('connection', function (socket) {\n        socket.broadcast.emit('user connected');\n    });\n    var private_msg = { from: \"\", msg: \"\" };\n    socket.on('private message', function (from, msg) {\n        private_msg = {\n            from: from,\n            msg: msg\n        };\n    });\n    socket.broadcast.emit('response', private_msg);\n    socket.on('disconnect', function () {\n        io.emit('user disconnected');\n    });\n});\n/**\n * Server Activation\n */\nvar server = serverHttp.listen(PORT, function () {\n    console.log(\"Listening on port \" + PORT);\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(function () { return server.close(); });\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};