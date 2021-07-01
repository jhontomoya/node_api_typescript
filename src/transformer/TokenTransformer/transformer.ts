import Token, { IToken } from "../../model/tokenModel";

export const transformToToDo = async (token: string, userId: string): Promise<IToken> => {
  return new Token({
    token: token,
    userId: userId
  }); 
}
