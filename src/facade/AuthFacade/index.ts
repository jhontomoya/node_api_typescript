import { NextFunction, Request, Response } from 'express';
import AuthFacade from './facade';
import { AuthTransformer, ResponseTransformer } from "../../transformer/index"

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await AuthTransformer.transformReqToTo(req);
    let response = await AuthFacade.signup(user);
    res.status(response.statusCode).json(response);
  } catch (error) {
    console.log(error);
    let err = await ResponseTransformer.responseInternalErrorServe(error);
    res.status(err.statusCode).json(err);
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await AuthTransformer.transformReqToTo(req);
    let response = await AuthFacade.login(user);
    res.status(response.statusCode).json(response);
  } catch (error) {
    console.log(error);
    let err = await ResponseTransformer.responseInternalErrorServe(error);
    res.status(err.statusCode).json(err);
  }
}

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let response = await AuthFacade.refreshToken(req.body.userId, req.body.refreshToken);
    res.status(response.statusCode).json(response);
  } catch (error) {
    console.log(error);
    let err = await ResponseTransformer.responseInternalErrorServe(error);
    res.status(err.statusCode).json(err);
  }
}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let response = await AuthFacade.logout(req.body.userId);
    res.status(response.statusCode).json(response);
  } catch (error) {
    console.log(error);
    let err = await ResponseTransformer.responseInternalErrorServe(error);
    res.status(err.statusCode).json(err);
  }
}
