"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const NODE_ENV = process.env.NODE_ENV || 'development';
const development = {
    port: process.env.PORT || 3000,
    database: {
        DB_TYPE: process.env.DB_TYPE || 'mongodb',
        DB_HOST: process.env.DB_HOST || 'localhost',
        DB_PORT: process.env.DB_PORT || '27017',
        DB_NAME: process.env.DB_NAME || 'test',
        DB_USER: process.env.DB_USER || 'root',
        DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    },
    awaitTime: process.env.AWAIT_TIME || 30000,
    test: process.env.TEST,
    testUrl: process.env.TEST_URL,
    logger_serviceName: `${process.env.SERVICE_NAME}` || 'service-service',
    logger_maxSize: Number(`${process.env.LOGGER_MAXSIZE}`) || 2048,
    logger_level: process.env.LOGGER_LEVEL || 'debug',
    ACCESS_TOKEN: process.env.ACCESS_TOKEN || '',
    REFRESH_TOKEN: process.env.REFRESH_TOKEN || '',
};
const config = {
    development
};
exports.default = config[NODE_ENV];
//# sourceMappingURL=index.js.map