import { IUser } from "../../model/userModel";

export interface ITokenService {
  createAccessToken(user: IUser): Promise<string>;
  createRefreshToken(user: IUser): Promise<string>;
}