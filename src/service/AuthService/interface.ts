import { IUser } from "../../model/userModel";

export interface IAuthService {
  signup(user: IUser): Promise<IUser>;
  login(user: IUser): void;
  profile(user: IUser): void;
  logout(): void;
}