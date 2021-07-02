import { UserTO } from "../../to/userTO";
import { IUser } from "../../model/userModel";


export const transformDoToTo = async (user: IUser): Promise<UserTO> => {
  return new UserTO(
    user.email,
    "",
    user.username,
    user._id
  ); 
}