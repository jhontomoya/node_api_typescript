import { AuthService, TokenService } from "../../service";
import { IAuthFacade } from './interface';
import { UserTO } from "../../to/userTO";
import { IUser } from "../../model/userModel";
import { AuthTransformer, ResponseTransformer } from "../../transformers/index"
import { ResponseTO } from '../../to/responseTO';

const AuthFacade: IAuthFacade = {
  async signup(userTo: UserTO): Promise<ResponseTO> {
    const user: IUser = await AuthTransformer.transformToToDo(userTo);
    const savedUser: IUser = await AuthService.signup(user);
    const token_access: string = await TokenService.createAccessToken(savedUser);
    const newUser =  await AuthTransformer.transformDoToTo(savedUser);
    return ResponseTransformer.responseSignUp(200, "Usuario creado exitosamente.", newUser, token_access);
  },

  login(userTo: UserTO): void {
    console.log(userTo);
  },

  profile(userTo: UserTO): void {
    console.log(userTo);
  },

  logout(): void {
    console.log("Logout");
  }

}

export default AuthFacade;