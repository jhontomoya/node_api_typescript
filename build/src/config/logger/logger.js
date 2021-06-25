"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const index_1 = __importDefault(require("../../config/env/index"));
const logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.splat(), winston_1.default.format.json()),
    defaultMeta: { service: `${index_1.default.logger_serviceName}` },
    transports: [
        new winston_1.default.transports.Console({ level: index_1.default.logger_level })
    ],
});
const logService = {
    logError(error, message = 'An error was found: ') {
        logger.error({
            level: 'error',
            message: message,
            date: new Date(),
            content: error,
        });
    },
    logServiceError(error, request, response, endPoint, message) {
        logger.error({
            level: 'error',
            message: `An error was found in service: ${message}`,
            date: new Date(),
            content: error,
            request: request,
            response: response,
            endPoint: endPoint
        });
    },
    logInfo(request, response, message) {
        logger.info({
            level: 'info',
            message: `Info: ${message}`,
            date: new Date(),
            request: request,
            response: response
        });
    },
    logServiceTimer(service, endPoint, startTime, endTime) {
        var Segundos_entre_fechas = Math.abs(((startTime.getTime() - endTime.getTime()) / 1000));
        logger.log({
            level: 'http',
            message: 'Service time',
            endPoint: endPoint,
            date: new Date(),
            service: service,
            startTime: startTime,
            endTime: endTime,
            timeElapsed: Segundos_entre_fechas
        });
    },
};
exports.default = logService;
//# sourceMappingURL=logger.js.map