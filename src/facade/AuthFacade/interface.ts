import { UserTO } from '../../to/userTO';
import { ResponseTO } from '../../to/responseTO';

export interface IAuthFacade{
  signup(userTo: UserTO): Promise<ResponseTO>;
  login(userTo: UserTO): Promise<ResponseTO>;
  profile(userTo: UserTO): Promise<ResponseTO>;
  logout(): Promise<ResponseTO>;
}