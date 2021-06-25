"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
/**
 * Binds and listens for connections on the specified host
 */
server_1.default.listen(server_1.default.get('port'));
console.log(`Listening on ${server_1.default.get('port')}`);
//# sourceMappingURL=index.js.map