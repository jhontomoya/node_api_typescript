import sinon, { SinonStub } from "sinon";
import { expect } from "chai";
import AuthService from "../../src/service/AuthService/service";
import User from "../../src/model/userModel";
import { UserMock } from '../../src/mock';

describe('AuthService tests', () => {

  let stubUserSave: SinonStub;
  let stubUserFindOne: SinonStub;
  let stubUserFindById: SinonStub;
  let stubEncrypt: SinonStub;
  let stubValidate: SinonStub;

  const userModelMock = new User({ // cambiar implementacion de new User a mock
    username: UserMock.userModelMock.username,
    email: UserMock.userModelMock.email,
    password: UserMock.userModelMock.password,
    _id: UserMock.userModelMock._id
  }); 

  before(() => {
    stubUserSave = sinon.stub(User.prototype, 'save');
    stubUserFindOne = sinon.stub(User, 'findOne');
    stubUserFindById = sinon.stub(User, 'findById');
    stubEncrypt = sinon.stub(User.prototype, 'encryptPassword');
    stubValidate = sinon.stub(User.prototype, 'validatePassword');
  });

  it('Signup OK', async () => {
    let req = userModelMock; 
    stubUserSave.returns(UserMock.userModelMock);
    const response: any = await AuthService.signup(req);
    expect(response).not.to.be.undefined
  });

  it('Login OK', async () => {
    let req = UserMock.userMock.email; 
    stubUserFindOne.returns(UserMock.userModelMock);
    const response: any = await AuthService.login(req);
    expect(response).not.to.be.undefined
  });

  it('Logout OK', async () => {
    let req = UserMock.userMock.id; 
    stubUserFindById.returns(UserMock.userModelMock);
    const response: any = await AuthService.logout(req);
    expect(response).not.to.be.undefined
  });

  it('EncryptPassword OK', async () => {
    let req = userModelMock; 
    stubEncrypt.returns(UserMock.userModelMock.password);
    const response: any = await AuthService.encryptPassword(req);
    expect(response).not.to.be.undefined
  });

  it('ValidatePassword OK', async () => {
    let req = userModelMock; 
    stubValidate.returns(true);
    const response: any = await AuthService.validatePassword(req, UserMock.userModelMock.password);
    expect(response).not.to.be.undefined
  });

  after(() => {
    stubUserSave.restore();
    stubUserFindOne.restore();
    stubUserFindById.restore();
    stubEncrypt.restore();
    stubValidate.restore();
  });

});