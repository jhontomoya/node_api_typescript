import TokenService from './service';
import { IUser } from "../../model/userModel";
import { IToken } from "../../model/tokenModel";

export async function createAccessToken(user: IUser): Promise<string> {
  return TokenService.createAccessToken(user);
}

export async function createRefreshToken(user: IUser): Promise<string> {
  return TokenService.createRefreshToken(user);
}

export async function deleteToken(userId: string): Promise<IToken | any>{
  return TokenService.deleteToken(userId);
}

export async function findSessionByToken(refreshToken: string): Promise<IToken | any>{
  return TokenService.findSessionByToken(refreshToken);
}

export async function findSessionByUserId(userId: string): Promise<IToken | any>{
  return TokenService.findSessionByUserId(userId);
}