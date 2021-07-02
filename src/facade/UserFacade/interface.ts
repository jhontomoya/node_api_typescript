import { ResponseTO } from '../../to/responseTO';

export interface IUserFacade{
  profile(userId: string): Promise<ResponseTO>;
}