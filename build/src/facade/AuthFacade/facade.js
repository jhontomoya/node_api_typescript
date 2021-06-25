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
const service_1 = require("../../service");
const index_1 = require("../../transformers/index");
const AuthFacade = {
    signup(userTo) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield index_1.AuthTransformer.transformToToDo(userTo);
            const savedUser = yield service_1.AuthService.signup(user);
            const token_access = yield service_1.TokenService.createAccessToken(savedUser);
            const newUser = yield index_1.AuthTransformer.transformDoToTo(savedUser);
            return index_1.ResponseTransformer.responseSignUp(200, "Usuario creado exitosamente.", newUser, token_access);
        });
    },
    login(userTo) {
        console.log(userTo);
    },
    profile(userTo) {
        console.log(userTo);
    },
    logout() {
        console.log("Logout");
    }
};
exports.default = AuthFacade;
//# sourceMappingURL=facade.js.map