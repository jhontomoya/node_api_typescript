import TokenService from './service';
import { IUser } from "../../model/userModel";

export async function createAccessToken(user: IUser): Promise<string> {
  return TokenService.createAccessToken(user);
}