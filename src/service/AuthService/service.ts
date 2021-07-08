import { IAuthService } from "./interface";
import User, { IUser } from "../../model/userModel";

const AuthService: IAuthService = {

  async signup(user: IUser): Promise<IUser | any> {
    return user.save();
  },

  async login(email: string): Promise<IUser | any> {
    return this.findUserByEmail(email);
  },

  async logout(userId: string): Promise<IUser | any>{
    return this.findUserById(userId);
  },

  async findUserById(userId: string): Promise<IUser | any> {
    return User.findById(userId);
  },

  async findUserByEmail(email: string): Promise<IUser | any> {
    return User.findOne({email: email});
  },

  async encryptPassword(user: IUser): Promise<string> {
    return user.encryptPassword(user.password);
  },

  async validatePassword(user: IUser, password: string): Promise<boolean> {
    return user.validatePassword(password, user.password);
  }

}

export default AuthService;