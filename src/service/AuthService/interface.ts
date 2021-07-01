import { IUser } from "../../model/userModel";

export interface IAuthService {
  signup(user: IUser): Promise<IUser>;
  login(email: string): Promise<IUser | any>;
  logout(userId: string): Promise<IUser | any>;
  findUserById(userId: string): Promise<IUser | any>;
  findUserByEmail(email: string): Promise<IUser | any>;
}