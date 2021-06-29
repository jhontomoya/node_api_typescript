import { NextFunction, Request, Response, Application } from 'express';
import jwt from 'jsonwebtoken';
import { ResponseTransformer } from '../../transformers/index';
import config from '../../config/env/index';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';
import { ParametersError, UnauthorizedError, ForbiddenError, NotFoundError } from '../error';

interface IPayload {
  user: any,
  iat: number,
  exp: number
}

export const validateAuth = async (req: Request, res: Response, next: NextFunction) => {
  const header = req.header('Authorization');
  if(!header){
    let err = await ResponseTransformer.response(HttpStatusCode.NOT_FOUND, "Acceso Denegado.");
    return res.status(err.statusCode).send(err);
  } else {
    const [bearer, token] = header.split(' ');
    if(bearer === 'Bearer' && token){
      try {
        const payload = jwt.verify(token, config.ACCESS_TOKEN) as IPayload;
        req.user = payload.user;
        next();
      } catch (error) {
        if(error.name === 'TokenExpiredError'){
          let err = await ResponseTransformer.response(HttpStatusCode.NOT_FOUND, "Token Expirado.");
          return res.status(err.statusCode).send(err);
        } else if(error.name === 'JsonWebTokenError'){
          let err = await ResponseTransformer.response(HttpStatusCode.NOT_FOUND, "Token Invalido.");
          return res.status(err.statusCode).send(err);
        }
      }
    } else {
      let err = await ResponseTransformer.response(HttpStatusCode.NOT_FOUND, "Error en Token.");
      return res.status(err.statusCode).send(err);
    }
  }
  next();
}

export const initErrorHandler = (app: Application): void => {
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(`[Error] - Message: [${error.message}]\nStack: [${error.stack||''}]`);
    if (error instanceof ParametersError || error instanceof UnauthorizedError || 
      error instanceof ForbiddenError || error instanceof NotFoundError) {
        let err = ResponseTransformer.response(error.status, error.message);
        res.status(error.status).send(err);
    }else{
      let err = ResponseTransformer.response(HttpStatusCode.INTERNAL_SERVER_ERROR, `Ocurrió un error inesperado ${error.message}`);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    }  
  });
}