import { UserTO } from "../../to/userTO";
import User, { IUser } from "../../model/userModel";

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
