import { NextFunction, Request, Response } from 'express';
import AuthFacade from './facade';
import { AuthTransformer } from "../../transformers/index"

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await AuthTransformer.transformReqToTo(req);
    let response = await AuthFacade.signup(user);
    res.status(response.statusCode).json(response);
  } catch (error) {
    console.log(error);
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await AuthTransformer.transformReqToTo(req);
    let response = await AuthFacade.login(user);
    res.status(response.statusCode).json(response);
  } catch (error) {
    console.log(error);
  }
}

export const profile = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('profile');
  } catch (error) {
    console.log(error);
  }
}

export const logout = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('logout');
  } catch (error) {
    console.log(error);
  }
}
