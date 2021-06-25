import { NextFunction, Request, Response } from 'express';
import AuthFacade from './facade';
import { UserTO } from "../../to/userTO";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, username } = req.body;
    const user = new UserTO(email, password, username);
    let response = await AuthFacade.signup(user);
    res.status(response.statusCode).json(response);
  } catch (error) {
    console.log(error);
  }
}

export const login = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('login');
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
