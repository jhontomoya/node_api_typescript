import AuthService from './service';
import { IUser } from "../../model/userModel";

export async function signup(user: IUser): Promise<IUser> {
  return AuthService.signup(user);
}

export async function login(email: string): Promise<IUser | any> {
  return AuthService.login(email);
}

export async function logout(userId: string): Promise<IUser | any> {
  return AuthService.logout(userId);
}

export async function findUserById(userId: string): Promise<IUser | any> {
  return AuthService.findUserById(userId);
}

export async function findUserByEmail(email: string): Promise<IUser | any> {
  return AuthService.findUserByEmail(email);
}