import sinon, { SinonStub } from "sinon";
import { expect } from "chai";
import UserService from "../../src/service/UserService/service";
import User from "../../src/model/userModel";
import { UserMock } from '../../src/mock';


describe('UserService tests', () => {

  let stubUserFindOne: SinonStub;
  let stubUserFindById: SinonStub;

  before(() => {
    stubUserFindOne = sinon.stub(User, 'findOne');
    stubUserFindById = sinon.stub(User, 'findById');
  });

  it('Profile OK', async () => {
    let req = UserMock.userMock.id; 
    stubUserFindById.returns(UserMock.userModelMock);
    const response: any = await UserService.profile(req);
    expect(response).not.to.be.undefined
  });

  it('findUserByEmail OK', async () => {
    let req = UserMock.userMock.email; 
    stubUserFindOne.returns(UserMock.userModelMock);
    const response: any = await UserService.findUserByEmail(req);
    expect(response).not.to.be.undefined
  });


  after(() => {
    stubUserFindOne.restore();
    stubUserFindById.restore();
  });

});