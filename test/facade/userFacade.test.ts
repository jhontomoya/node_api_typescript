import sinon, { SinonStub } from "sinon";
import { expect } from "chai";
import UserFacade from "../../src/facade/UserFacade/facade";
import UserService from "../../src/service/UserService/service";

describe('UserFacade tests', () => {

  let stubUserServiceProfile: SinonStub;

  before(() => {
    stubUserServiceProfile = sinon.stub(UserService, 'profile');
  });

  it('Profile OK', async () => {
    let req: string = "xx00xx00xx00xx00xx00xx00";
    stubUserServiceProfile.resolves({
      _id: 'xx00xx00xx00xx00xx00xx00',
      username: 'TestTest',
      email: 'test@mail.com',
      password: '$2b$10$cfzKX9Km1UISIYXeDSz/TOKu.I/trHE.UWfusmd0.Pq7yoJfKiVGS'
    });
    const response: any = await UserFacade.profile(req);
    expect("User found successfully").equal(response.message);
  });

  it('Profile without userId', async () => {
    let req;
    const response: any = await UserFacade.profile(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Profile user not found', async () => {
    let req: string = "xx00xx00xx00xx00xx00xx00";
    stubUserServiceProfile.resolves(null);
    const response: any = await UserFacade.profile(req);
    expect("User not found").equal(response.message);
  });


  after(() => {
    stubUserServiceProfile.restore();
  });

});