import { IUser } from "../../model/userModel";
import { IToken } from "../../model/tokenModel";

export interface ITokenService {
  createAccessToken(user: IUser): Promise<string>;
  createRefreshToken(user: IUser): Promise<string>;
  deleteToken(userId: string): Promise<IToken | any>;
  findSession(userId: string): Promise<IToken | any>;
}