import { IUserService } from "./interface";
import User, { IUser } from "../../model/userModel";

const UserService: IUserService = {

  async profile(userId: string): Promise<IUser | any>{
    return this.findUserById(userId);
  },

  async findUserById(userId: string): Promise<IUser | any> {
    return User.findById(userId);
  },

  async findUserByEmail(email: string): Promise<IUser | any> {
    return User.findOne({email: email});
  }

}

export default UserService;