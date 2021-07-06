import { signup } from './../../src/facade/AuthFacade/index';
import sinon, { SinonStub } from "sinon";
import { expect } from "chai";
import AuthService from "../../src/service/AuthService/service";
import User, { IUser } from "../../src/model/userModel";
import { Schema, model, Document } from 'mongoose';

describe('AuthService tests', () => {

  let stubUserSave: SinonStub;
  let stubUserFindById: SinonStub;
  let stubUserFindOne: SinonStub;

  // before(() => {
  //   stubUserSave = sinon.stub(IUser., 'save');
  // });

  // it('Signup OK', async () => {
  //   stubUserSave.resolves({});
  //   const response: any = await AuthFacade.signup(req);
  //   expect("User created successfully").equal(response.message);
  // });


  after(() => {
    stubUserSave.restore();
    stubUserFindById.restore();
    stubUserFindOne.restore();
  });

});