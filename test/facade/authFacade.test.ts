import sinon, { SinonStub } from "sinon";
import { expect } from "chai";
import AuthFacade from "../../src/facade/AuthFacade/facade";
import AuthService from "../../src/service/AuthService/service";
import TokenService from "../../src/service/TokenService/service";

describe('facade Auth tests', () => {
  let stubAuthServiceSignUp: SinonStub;

  before(() => {
    stubAuthServiceSignUp = sinon.stub(AuthService, 'signup');
  })
  
  it('Signup OK', async () => {
   
  });

  after(() => {
    stubAuthServiceSignUp.restore();
  });

});