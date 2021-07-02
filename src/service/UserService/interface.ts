import { IUser } from "../../model/userModel";

export interface IUserService {
  profile(userId: string): Promise<IUser | any>;
  findUserById(userId: string): Promise<IUser | any>;
  findUserByEmail(email: string): Promise<IUser | any>;
}