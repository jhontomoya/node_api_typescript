import { IAuthService } from "./interface";
import { IUser } from "../../model/userModel";

const AuthService: IAuthService = {

  async signup(user: IUser): Promise<IUser> {
    return user.save();
  },

  login(user: IUser): void {
    console.log(user);
  },

  profile(user: IUser): void {
    console.log(user);
  },

  logout(): void {
    console.log("Logout");
  }

}

export default AuthService;