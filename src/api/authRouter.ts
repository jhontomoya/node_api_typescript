import { Router } from 'express';
import { AuthFacade } from '../facade';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.post('/signup', AuthFacade.signup);
router.post('/login', AuthFacade.login);
router.get('/profile', AuthFacade.profile);
router.post('/logout', AuthFacade.logout);

/**
 * @export {express.Router}
 */
export default router;