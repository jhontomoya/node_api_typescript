import * as express from 'express';
import * as http from 'http';
import cors from 'cors';
import morgan from 'morgan';
var timeout = require('connect-timeout');
import config from '../config/env/index';

import { validateAuth } from '../config/middleware/middleware';
import AuthRouter from './authRouter';
import UserRouter from './userRouter';

/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
  const router: express.Router = express.Router();
  
  /**
   * 
   */
  app.use(cors({​​​​​
      optionsSuccessStatus: 200
  }​​​​​))

  /**
   * middlewares
   */
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(function (req, res, next) {
      res.removeHeader("X-Powered-By");
      res.header('Cache-Control', 'no-cache,no-store');
      res.header('Expires', '0');
      res.header('Pragma', 'no-cache');
      res.header('X-Frame-Options', 'Deny');
      res.header('X-Xss-Protection', '1; mode=block');
      res.header('X-Content-Type-Options', 'nosniff');
      next();
  });

  app.use(timeout(config.awaitTime))
  app.use(haltOnTimedout)

  function haltOnTimedout (req:any, res:any, next:any) {
    if (!req.timedout) next()
  }

  /**
   * Routers
   */

  /**
    * @description Forwards any requests to the /auth URI to our AuthRouter
    * @constructs
    */
  app.use('/api/auth', AuthRouter);
  app.use('/api/users', validateAuth, UserRouter)



  /**
   * Error
   */

  /** 
   * @description No results returned mean the object is not found
   * @constructs
   */
  app.use((req, res, next) => {
      res.status(404).send(http.STATUS_CODES[404]);
  });

  /**
   * @constructs all routes
   */
  app.use(router);
}