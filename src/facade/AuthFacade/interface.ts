import { UserTO } from '../../to/userTO';
import { ResponseTO } from '../../to/responseTO';

export interface IAuthFacade{
  signup(userTo: UserTO): Promise<ResponseTO>;
  login(userTo: UserTO): void;
  profile(userTo: UserTO): void;
  logout(): void;
}