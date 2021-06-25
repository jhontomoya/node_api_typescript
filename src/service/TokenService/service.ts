import { ITokenService } from "./interface";
import { IUser } from "../../model/userModel";
import jwt from 'jsonwebtoken';
import config from '../../config/env/index';

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
        expiresIn: '20d'
      }
    );
    return refreshToken;
    // try {
    //   await new Token({token: refreshToken}).save();
    //   return refreshToken;
    // } catch (error) {
    //   next(new Error('Error creating refresfh token'));
    // }
  }

}

export default TokenService;