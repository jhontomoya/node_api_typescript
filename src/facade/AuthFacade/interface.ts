import { UserTO } from '../../to/userTO';
import { ResponseTO } from '../../to/responseTO';

export interface IAuthFacade{
  signup(userTo: UserTO): Promise<ResponseTO>;
  login(userTo: UserTO): Promise<ResponseTO>;
  refreshToken(userId: string, refreshToken: string): Promise<ResponseTO>;
  logout(userId: string): Promise<ResponseTO>;
}