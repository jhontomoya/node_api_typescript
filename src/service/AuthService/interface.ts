import { IUser } from "../../model/userModel";

export interface IAuthService {
  signup(user: IUser): Promise<IUser>;
  login(email: string): Promise<IUser | any>;
  profile(user: IUser): void;
  logout(): void;
}