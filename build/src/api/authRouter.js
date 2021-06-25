"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facade_1 = require("../facade");
/**
 * @constant {express.Router}
 */
const router = express_1.Router();
router.post('/signup', facade_1.AuthFacade.signup);
router.post('/login', facade_1.AuthFacade.login);
router.get('/profile', facade_1.AuthFacade.profile);
router.post('/logout', facade_1.AuthFacade.logout);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=authRouter.js.map