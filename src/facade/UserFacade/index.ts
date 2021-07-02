import { NextFunction, Request, Response } from 'express';
import UserFacade from './facade';
import { ResponseTransformer } from "../../transformer/index"

export const profile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    let response = await UserFacade.profile(userId);
    res.status(response.statusCode).json(response);
  } catch (error) {
    console.log(error);
    let err = await ResponseTransformer.responseInternalErrorServe(error);
    res.status(err.statusCode).json(err);
  }
}