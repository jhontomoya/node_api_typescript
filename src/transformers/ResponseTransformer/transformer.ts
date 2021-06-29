import { ResponseTO } from '../../to/responseTO';
import { UserTO } from "../../to/userTO";

export const response = async (statusCode: number, message: string): Promise<ResponseTO> => {
  let data = null
  return new ResponseTO(
    statusCode,
    message,
    data
  ); 
}

export const responseSignUp = async (statusCode: number, message: string, user: UserTO): Promise<ResponseTO> => {
  let data = {
    user: user
  };
  return new ResponseTO(
    statusCode,
    message,
    data
  ); 
}

export const responseLogin = async (statusCode: number, message: string, user: UserTO, token_access: string, token_refresh: string): Promise<ResponseTO> => {
  let data = {
    user: user,
    token_access: token_access,
    token_refresh: token_refresh
  };
  return new ResponseTO(
    statusCode,
    message,
    data
  ); 
}
