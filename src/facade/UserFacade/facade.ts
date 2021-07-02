import { UserService } from "../../service";
import { IUserFacade } from './interface';
import { IUser } from "../../model/userModel";
import { ResponseTransformer, UserTransformer } from "../../transformer/index"
import { ResponseTO } from '../../to/responseTO';

const UserFacade: IUserFacade = {

  async profile(userId: string): Promise<ResponseTO> {
    if(!userId) return ResponseTransformer.responseBadRequest('Missing parameters');
    const user: IUser | null = await UserService.profile(userId);
    if(!user) return ResponseTransformer.responseNotFound("User not found");
    const userRes =  await UserTransformer.transformDoToTo(user);
    let data = {
      user: userRes
    };
    return ResponseTransformer.responseSuccess("User found successfully", data);
  }

}

export default UserFacade;