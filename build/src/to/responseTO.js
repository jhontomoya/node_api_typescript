"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseTO = void 0;
class ResponseTO {
    constructor(statusCode, message, data) {
        this.statusCode = statusCode;
        this.error = statusCode === 200 ? 'Exitoso' : 'Error';
        this.message = message;
        this.data = data;
    }
}
exports.ResponseTO = ResponseTO;
//# sourceMappingURL=responseTO.js.map