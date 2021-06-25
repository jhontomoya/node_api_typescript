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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDoToTo = exports.transformToToDo = void 0;
const userTO_1 = require("../../to/userTO");
const userModel_1 = __importDefault(require("../../model/userModel"));
const transformToToDo = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return new userModel_1.default({
        username: user.username,
        email: user.email,
        password: user.password
    });
});
exports.transformToToDo = transformToToDo;
const transformDoToTo = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return new userTO_1.UserTO(user.email, "", user.username, user._id);
});
exports.transformDoToTo = transformDoToTo;
//# sourceMappingURL=transformer.js.map