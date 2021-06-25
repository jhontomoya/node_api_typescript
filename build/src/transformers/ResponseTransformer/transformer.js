"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseSignUp = void 0;
const responseTO_1 = require("../../to/responseTO");
const responseSignUp = (statusCode, message, user, token_access) => __awaiter(void 0, void 0, void 0, function* () {
    let data = {
        user: user,
        token_access: token_access
    };
    return new responseTO_1.ResponseTO(statusCode, message, data);
});
exports.responseSignUp = responseSignUp;
//# sourceMappingURL=transformer.js.map