import { IUser } from "../../model/userModel";

export interface IAuthService {
  signup(user: IUser | any): Promise<IUser | any>;
  login(email: string): Promise<IUser | any>;
  logout(userId: string): Promise<IUser | any>;
  findUserById(userId: string): Promise<IUser | any>;
  findUserByEmail(email: string): Promise<IUser | any>;
  encryptPassword(user: IUser): Promise<string>;
  validatePassword(user: IUser, password: string): Promise<boolean>;
}