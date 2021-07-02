import { AuthService, TokenService } from "../../service";
import { IAuthFacade } from './interface';
import { UserTO } from "../../to/userTO";
import { IUser } from "../../model/userModel";
import { AuthTransformer, ResponseTransformer } from "../../transformer/index"
import { ResponseTO } from '../../to/responseTO';

const AuthFacade: IAuthFacade = {
  async signup(userTo: UserTO): Promise<ResponseTO> {
    if(!userTo.email) return ResponseTransformer.responseBadRequest('Missing parameters');
    if(!userTo.password) return ResponseTransformer.responseBadRequest('Missing parameters');
    if(!userTo.username) return ResponseTransformer.responseBadRequest('Missing parameters');
    const user: IUser = await AuthTransformer.transformToToDo(userTo);
    user.password = await user.encryptPassword(user.password);
    const savedUser: IUser = await AuthService.signup(user);
    const newUser =  await AuthTransformer.transformDoToTo(savedUser);
    let data = {
      user: newUser
    };
    return ResponseTransformer.responseSuccess("User created successfully", data);
  },

  async login(userTo: UserTO): Promise<ResponseTO> {
    if(!userTo.email) return ResponseTransformer.responseBadRequest('Missing parameters');
    if(!userTo.password) return ResponseTransformer.responseBadRequest('Missing parameters');
    const user: IUser | null = await AuthService.login(userTo.email);
    if(!user) return ResponseTransformer.responseNotFound("User not found");
    const userRes =  await AuthTransformer.transformDoToTo(user);
    const correctPassword: boolean = await user.validatePassword(userTo.password, user.password);
    if(!correctPassword) return ResponseTransformer.responseNotFound("Incorrect User and/or Password");
    const token_access: string = await TokenService.createAccessToken(user);
    const refresh_token: string = await TokenService.createRefreshToken(user);
    let data = {
      user: userRes,
      token_access: token_access,
      refresh_token: refresh_token
    };
    return ResponseTransformer.responseSuccess("Login successfully", data);
  },

  async refreshToken(userId: string, refreshToken: string): Promise<ResponseTO> {
    if(!userId) return ResponseTransformer.responseBadRequest('Missing parameters');
    if(!refreshToken) return ResponseTransformer.responseBadRequest('Missing parameters');
    const user: IUser | null = await AuthService.findUserById(userId);
    if(!user) return ResponseTransformer.responseNotFound("User not found");
    const userRes =  await AuthTransformer.transformDoToTo(user);
    const token_access: string = await TokenService.createAccessToken(user);
    let data = {
      user: userRes,
      token_access: token_access,
      refresh_token:refreshToken
    };
    return ResponseTransformer.responseSuccess("Refresh Token successfully", data);
  },

  async logout(userId: string): Promise<ResponseTO> {
    if(!userId) return ResponseTransformer.responseBadRequest('Missing parameters');
    const user: IUser | null = await AuthService.logout(userId);
    if(!user) return ResponseTransformer.responseNotFound("User not found");
    const token = await TokenService.findSession(userId);
    if(!token) return ResponseTransformer.responseNotFound("Session logout");
    await TokenService.deleteToken(user._id);
    return ResponseTransformer.responseSuccess("Logout successfully");
  }

}

export default AuthFacade;