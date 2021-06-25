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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../../config/env/index"));
const TokenService = {
    createAccessToken(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.default.sign({
                user: {
                    _id: user._id,
                    email: user.email
                }
            }, index_1.default.ACCESS_TOKEN, {
                expiresIn: '5m'
            });
        });
    },
    createRefreshToken(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = jsonwebtoken_1.default.sign({
                user: {
                    _id: user._id,
                    email: user.email
                }
            }, index_1.default.REFRESH_TOKEN, {
                expiresIn: '20d'
            });
            return refreshToken;
            // try {
            //   await new Token({token: refreshToken}).save();
            //   return refreshToken;
            // } catch (error) {
            //   next(new Error('Error creating refresfh token'));
            // }
        });
    }
};
exports.default = TokenService;
//# sourceMappingURL=service.js.map