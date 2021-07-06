import { UserTO } from '../../to/userTO';
import { ResponseTO } from '../../to/responseTO';

export interface IAuthFacade{
  signup(userTo: UserTO): Promise<ResponseTO>;
  login(userTo: UserTO): Promise<ResponseTO>;
  refreshToken(refreshToken: string | undefined): Promise<ResponseTO>;
  logout(userId: string | undefined): Promise<ResponseTO>;
}