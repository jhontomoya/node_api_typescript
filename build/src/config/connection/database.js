"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("../env/index"));
function initDatabase() {
    mongoDB();
}
exports.initDatabase = initDatabase;
function mongoDB() {
    mongoose_1.default.connect(getUrlDatabase(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    const connection = mongoose_1.default.connection;
    connection.on('error', () => {
        console.log("Error to connect database");
    });
    connection.once('open', () => {
        console.log("Connection DB Successful");
    });
}
function getUrlDatabase() {
    return `${index_1.default.database.DB_TYPE}://${index_1.default.database.DB_HOST}:${index_1.default.database.DB_PORT}/${index_1.default.database.DB_NAME}`;
}
//# sourceMappingURL=database.js.map