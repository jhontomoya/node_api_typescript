import UserService from './service';
import { IUser } from "../../model/userModel";

export async function profile(userId: string): Promise<IUser | any> {
  return UserService.profile(userId);
}

export async function findUserById(userId: string): Promise<IUser | any> {
  return UserService.findUserById(userId);
}

export async function findUserByEmail(email: string): Promise<IUser | any> {
  return UserService.findUserByEmail(email);
}