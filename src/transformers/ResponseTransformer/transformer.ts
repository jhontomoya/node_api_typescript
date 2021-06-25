import { ResponseTO } from '../../to/responseTO';
import { UserTO } from "../../to/userTO";

export const responseSignUp = async (statusCode: number, message: string, user: UserTO, token_access: string): Promise<ResponseTO> => {
  let data = {
    user: user,
    token_access: token_access
  };
  return new ResponseTO(
    statusCode,
    message,
    data
  ); 
}
