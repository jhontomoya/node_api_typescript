import { Request } from 'express';
import { UserTO } from "../../to/userTO";
import User, { IUser } from "../../model/userModel";

export const transformReqToTo = async (req: Request): Promise<UserTO> => {
  const { email, password, username, id } = req.body;
  return new UserTO(email, password, username, id);
}

export const transformToToDo = async (user: UserTO): Promise<IUser> => {
  return new User({
    username: user.username,
    email: user.email,
    password: user.password
  }); 
}

export const transformDoToTo = async (user: IUser): Promise<UserTO> => {
  return new UserTO(
    user.email,
    "",
    user.username,
    user._id
  ); 
}
