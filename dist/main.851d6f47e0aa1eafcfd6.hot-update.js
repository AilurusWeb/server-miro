exports.id = "main";
exports.modules = {

/***/ "./src/items/items.router.ts":
/*!***********************************!*\
  !*** ./src/items/items.router.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Required External Modules and Interfaces\n */\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar ItemService = __importStar(__webpack_require__(/*! ./items.service */ \"./src/items/items.service.ts\"));\n/**\n * Router Definition\n */\nexports.itemsRouter = express_1.default.Router();\n/**\n * Controller Definitions\n */\n// GET items/\nexports.itemsRouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var items, e_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, ItemService.findAll()];\n            case 1:\n                items = _a.sent();\n                res.status(200).send(items);\n                return [3 /*break*/, 3];\n            case 2:\n                e_1 = _a.sent();\n                res.status(404).send(e_1.message);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// GET items/:id\nexports.itemsRouter.get(\"/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, item, e_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = parseInt(req.params.id, 10);\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, ItemService.find(id)];\n            case 2:\n                item = _a.sent();\n                res.status(200).send(item);\n                return [3 /*break*/, 4];\n            case 3:\n                e_2 = _a.sent();\n                res.status(404).send(e_2.message);\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\n// POST items/\nexports.itemsRouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var item, e_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                item = req.body.item;\n                return [4 /*yield*/, ItemService.create(item)];\n            case 1:\n                _a.sent();\n                res.sendStatus(201);\n                return [3 /*break*/, 3];\n            case 2:\n                e_3 = _a.sent();\n                res.status(404).send(e_3.message);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// PUT items/\nexports.itemsRouter.put(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var item, e_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                item = req.body.item;\n                return [4 /*yield*/, ItemService.update(item)];\n            case 1:\n                _a.sent();\n                res.sendStatus(200);\n                return [3 /*break*/, 3];\n            case 2:\n                e_4 = _a.sent();\n                res.status(500).send(e_4.message);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// DELETE items/:id\nexports.itemsRouter.delete(\"/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, e_5;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                id = parseInt(req.params.id, 10);\n                return [4 /*yield*/, ItemService.remove(id)];\n            case 1:\n                _a.sent();\n                res.sendStatus(200);\n                return [3 /*break*/, 3];\n            case 2:\n                e_5 = _a.sent();\n                res.status(500).send(e_5.message);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n\n\n//# sourceURL=webpack:///./src/items/items.router.ts?");

/***/ }),

/***/ "./src/items/items.service.ts":
/*!************************************!*\
  !*** ./src/items/items.service.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar database_1 = __webpack_require__(/*! ../common/database */ \"./src/common/database.ts\");\n/**\n * In-Memory Store\n */\nconsole.log(database_1.dbInstance);\nfunction getItems() {\n    return JSON.parse(database_1.dbInstance);\n}\nconsole.log(getItems());\nvar items = getItems();\n/**\n * Service Methods\n */\nexports.findAll = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, items];\n    });\n}); };\nexports.find = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var record;\n    return __generator(this, function (_a) {\n        record = items[id];\n        if (record) {\n            return [2 /*return*/, record];\n        }\n        throw new Error(\"No record found\");\n    });\n}); };\nexports.create = function (newItem) { return __awaiter(void 0, void 0, void 0, function () {\n    var id;\n    return __generator(this, function (_a) {\n        id = new Date().valueOf();\n        items[id] = __assign(__assign({}, newItem), { id: id });\n        return [2 /*return*/];\n    });\n}); };\nexports.update = function (updatedItem) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        if (items[updatedItem.id]) {\n            items[updatedItem.id] = updatedItem;\n            return [2 /*return*/];\n        }\n        throw new Error(\"No record found to update\");\n    });\n}); };\nexports.remove = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var record;\n    return __generator(this, function (_a) {\n        record = items[id];\n        if (record) {\n            delete items[id];\n            return [2 /*return*/];\n        }\n        throw new Error(\"No record found to delete\");\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/items/items.service.ts?");

/***/ })

};