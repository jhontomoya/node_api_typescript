import AuthService from './service';
import { IUser } from "../../model/userModel";

export async function signup(user: IUser): Promise<IUser> {
  return AuthService.signup(user);
}
