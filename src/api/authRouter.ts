import { Router } from 'express';
import { AuthFacade } from '../facade';
import { validateAuth } from '../config/middleware/middleware';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.post('/signup', AuthFacade.signup);
router.post('/login', AuthFacade.login);
router.get('/profile', validateAuth, AuthFacade.profile);
router.post('/logout', AuthFacade.logout);

/**
 * @export {express.Router}
 */
export default router;