import { AuthService, TokenService } from "../../service";
import { IAuthFacade } from './interface';
import { UserTO } from "../../to/userTO";
import User, { IUser } from "../../model/userModel";
import { AuthTransformer, ResponseTransformer } from "../../transformers/index"
import { ResponseTO } from '../../to/responseTO';

const AuthFacade: IAuthFacade = {
  async signup(userTo: UserTO): Promise<ResponseTO> {
    const user: IUser = await AuthTransformer.transformToToDo(userTo);
    user.password = await user.encryptPassword(user.password);
    const savedUser: IUser = await AuthService.signup(user);
    const newUser =  await AuthTransformer.transformDoToTo(savedUser);
    return ResponseTransformer.responseSignUp(200, "Usuario creado exitosamente.", newUser);
  },

  async login(userTo: UserTO): Promise<ResponseTO> {
    const user: IUser | null = await User.findOne({email: userTo.email});
    if(!user) return ResponseTransformer.response(404, "No se encuentra registrado el email.",);
    const correctPassword: boolean = await user.validatePassword(userTo.password, user.password);
    if(!correctPassword) return ResponseTransformer.response(404, "Usuario y/o contraseña incorrectos.",);
    const token_access: string = await TokenService.createAccessToken(user);
    return ResponseTransformer.responseLogin(200, "Login exitoso.", userTo, token_access, '');
  },

  profile(userTo: UserTO): Promise<ResponseTO> {
    console.log(userTo);
    return ResponseTransformer.response(200, "Test Profile.");
  },

  logout(): Promise<ResponseTO> {
    console.log("Logout");
    return ResponseTransformer.response(200, "Test Logout.");
  }

}

export default AuthFacade;