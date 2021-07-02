import jwt from 'jsonwebtoken';
import config from '../../config/env/index';
import { ITokenService } from "./interface";
import { IUser } from "../../model/userModel";
import Token, { IToken } from "../../model/tokenModel";
import { TokenTransformer } from "../../transformer/index"

const TokenService: ITokenService = {
  async createAccessToken(user: IUser): Promise<string> {
    return jwt.sign(
      {
        user:{ 
          _id: user._id,
          email: user.email 
        }
      }, 
      config.ACCESS_TOKEN, 
      { 
        expiresIn: '5m'
      }
    );
  },

  async createRefreshToken(user: IUser): Promise<string>{
    const refreshToken = jwt.sign(
      {
        user:{ 
          _id: user._id,
          email: user.email 
        }
      }, 
      config.REFRESH_TOKEN, 
      { 
        expiresIn: '1d'
      }
    );
    let token = await TokenTransformer.transformToToDo(refreshToken, user._id);
    await token.save();
    return refreshToken;
  },

  async deleteToken(userId: string): Promise<IToken | any>{
    return Token.findOneAndRemove({userId: userId})
  },

  async findSession(userId: string): Promise<IToken | any>{
    return Token.findOne({userId: userId})
  }

}

export default TokenService;