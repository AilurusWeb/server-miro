exports.id = "main";
exports.modules = {

/***/ "./src/common/database.ts":
/*!********************************!*\
  !*** ./src/common/database.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv.config();\nvar DB = process.env.DATABASE;\nvar dbInstance = [];\nexports.dbInstance = dbInstance;\nfunction initDB() {\n    fs_1.default.readFile(DB, function (err, buf) {\n        try {\n            exports.dbInstance = dbInstance = JSON.parse(buf.toString());\n            console.log(\"DB has \" + dbInstance.length + \" authorizations\");\n        }\n        catch (e) {\n            console.error(e);\n            saveDBToFile();\n        }\n    });\n}\nexports.initDB = initDB;\nfunction saveDBToFile() {\n    fs_1.default.writeFile(DB, JSON.stringify(dbInstance, null), function (err) {\n        if (err) {\n            console.log(err);\n        }\n        else {\n            console.log('Data saved');\n        }\n    });\n}\nexports.saveDBToFile = saveDBToFile;\n\n\n//# sourceURL=webpack:///./src/common/database.ts?");

/***/ })

};