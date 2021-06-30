import { IAuthService } from "./interface";
import User, { IUser } from "../../model/userModel";

const AuthService: IAuthService = {

  async signup(user: IUser): Promise<IUser> {
    return user.save();
  },

  async login(email: string): Promise<IUser | any> {
    return User.findOne({email: email});
  },

  profile(user: IUser): void {
    console.log(user);
  },

  logout(): void {
    console.log("Logout");
  }

}

export default AuthService;