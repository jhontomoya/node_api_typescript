import sinon, { SinonStub } from "sinon";
import { expect } from "chai";
import TokenService from "../../src/service/TokenService/service";
import User from "../../src/model/userModel";
import { UserMock } from '../../src/mock';


describe('TokenService tests', () => {

  const userModelMock = new User({ // cambiar implementacion de new User a mock
    username: UserMock.userModelMock.username,
    email: UserMock.userModelMock.email,
    password: UserMock.userModelMock.password,
    _id: UserMock.userModelMock._id
  }); 

  // before(() => {

  // });

  // it('CreateAccessToken OK', async () => {
  //   let req = userModelMock; 
  //   stubUserSave.returns(UserMock.userModelMock);
  //   const response: any = await TokenService.createAccessToken(req);
  //   expect(response).not.to.be.undefined
  // });

  // after(() => {
    
  // });

});