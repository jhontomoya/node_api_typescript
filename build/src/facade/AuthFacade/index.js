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
exports.logout = exports.profile = exports.login = exports.signup = void 0;
const facade_1 = __importDefault(require("./facade"));
const userTO_1 = require("../../to/userTO");
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, username } = req.body;
        const user = new userTO_1.UserTO(email, password, username);
        let response = yield facade_1.default.signup(user);
        res.status(response.statusCode).json(response);
    }
    catch (error) {
        console.log(error);
    }
});
exports.signup = signup;
const login = (req, res, next) => {
    try {
        res.send('login');
    }
    catch (error) {
        console.log(error);
    }
};
exports.login = login;
const profile = (req, res, next) => {
    try {
        res.send('profile');
    }
    catch (error) {
        console.log(error);
    }
};
exports.profile = profile;
const logout = (req, res, next) => {
    try {
        res.send('logout');
    }
    catch (error) {
        console.log(error);
    }
};
exports.logout = logout;
//# sourceMappingURL=index.js.map