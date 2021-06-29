import express from 'express';
import * as Routes from '../../api';
import * as database from '../connection/database'; 
import * as Middleware from '../middleware/middleware';

/**
 * @constant {express.Application}
 */
 const app: express.Application = express();

 /**
 * @constructs express.Application Routes
 */
  Routes.init(app);

  /**
   * Database connection
   */
  database.initDatabase();

  /**
  * @constructs express.Application Error Handler
  */
  // Middleware.initErrorHandler(app);

  /**
   * sets port 3000 to default or unless otherwise specified in the environment
   */
  app.set('port', process.env.PORT || 3000);

  /**
   * @exports {express.Application}
   */
 export default app;