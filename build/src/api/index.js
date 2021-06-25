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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const express = __importStar(require("express"));
const http = __importStar(require("http"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
var timeout = require('connect-timeout');
const index_1 = __importDefault(require("../config/env/index"));
const authRouter_1 = __importDefault(require("./authRouter"));
/**
 * @export
 * @param {express.Application} app
 */
function init(app) {
    const router = express.Router();
    /**
     *
     */
    app.use(cors_1.default({
        optionsSuccessStatus: 200
    }));
    /**
     * middlewares
     */
    app.use(morgan_1.default('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(function (req, res, next) {
        res.removeHeader("X-Powered-By");
        res.header('Cache-Control', 'no-cache,no-store');
        res.header('Expires', '0');
        res.header('Pragma', 'no-cache');
        res.header('X-Frame-Options', 'Deny');
        res.header('X-Xss-Protection', '1; mode=block');
        res.header('X-Content-Type-Options', 'nosniff');
        next();
    });
    app.use(timeout(index_1.default.awaitTime));
    app.use(haltOnTimedout);
    function haltOnTimedout(req, res, next) {
        if (!req.timedout)
            next();
    }
    /**
     * Routers
     */
    /**
      * @description Forwards any requests to the /auth URI to our AuthRouter
      * @constructs
      */
    app.use('/', authRouter_1.default);
    /**
     * Error
     */
    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res, next) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });
    /**
     * @constructs all routes
     */
    app.use(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map