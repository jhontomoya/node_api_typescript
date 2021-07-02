import { Router } from 'express';
import { UserFacade } from '../facade';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/user/:userId', UserFacade.profile);

/**
 * @export {express.Router}
 */
export default router;