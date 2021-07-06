import sinon, { SinonStub } from "sinon";
import { expect } from "chai";
import AuthFacade from "../../src/facade/AuthFacade/facade";
import AuthService from "../../src/service/AuthService/service";
import TokenService from "../../src/service/TokenService/service";
import { UserTO } from "../../src/to/userTO";

describe('AuthFacade tests', () => {
  
  let stubAuthServiceSignUp: SinonStub;
  let stubAuthServiceLogin: SinonStub;
  let stubAuthServiceLogout: SinonStub;
  let stubAuthServiceFindUserById: SinonStub;
  let stubAuthServiceEncrypt: SinonStub;
  let stubAuthServicePassword: SinonStub;
  let stubTokenServiceAccess: SinonStub;
  let stubTokenServiceRefresh: SinonStub;
  let stubTokenServiceSessionByToken: SinonStub;
  let stubTokenServiceSessionByUser: SinonStub;
  let stubTokenServiceDeleteSession: SinonStub;

  before(() => {
    stubAuthServiceSignUp = sinon.stub(AuthService, 'signup');
    stubAuthServiceLogin = sinon.stub(AuthService, 'login');
    stubAuthServiceLogout = sinon.stub(AuthService, 'logout');
    stubAuthServiceFindUserById = sinon.stub(AuthService, 'findUserById');
    stubAuthServiceEncrypt = sinon.stub(AuthService, 'encryptPassword');
    stubAuthServicePassword = sinon.stub(AuthService, 'validatePassword');
    stubTokenServiceAccess = sinon.stub(TokenService, 'createAccessToken');
    stubTokenServiceRefresh = sinon.stub(TokenService, 'createRefreshToken');
    stubTokenServiceSessionByToken = sinon.stub(TokenService, 'findSessionByToken');
    stubTokenServiceSessionByUser = sinon.stub(TokenService, 'findSessionByUserId');
    stubTokenServiceDeleteSession = sinon.stub(TokenService, 'deleteToken');
  })
  
  it('Signup OK', async () => {
    let req : UserTO = new UserTO("test@mail.com", "pdw001", "TestTest");
    stubAuthServiceSignUp.resolves({
      statusCode: 200,
      error: "Exitoso",
      message: "User created successfully",
      data: null
    });
    stubAuthServiceEncrypt.resolves("$2b$10$cfzKX9Km1UISIYXeDSz/TOKu.I/trHE.UWfusmd0.Pq7yoJfKiVGS");
    const response: any = await AuthFacade.signup(req);
    expect("User created successfully").equal(response.message);
  });

  it('Signup without email', async () => {
    let req : UserTO = new UserTO("test@mail.com", "pdw001", "TestTest");
    delete req.email;
    stubAuthServiceSignUp.resolves({
      statusCode: 400,
      error: "Error",
      message: "Missing parameters",
      data: null
    });
    const response: any = await AuthFacade.signup(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Signup without password', async () => {
    let req : UserTO = new UserTO("test@mail.com", "pdw001", "TestTest");
    delete req.password;
    stubAuthServiceSignUp.resolves({
      statusCode: 400,
      error: "Error",
      message: "Missing parameters",
      data: null
    });
    const response: any = await AuthFacade.signup(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Signup without username', async () => {
    let req : UserTO = new UserTO("test@mail.com", "pdw001", "TestTest");
    delete req.username;
    stubAuthServiceSignUp.resolves({
      statusCode: 400,
      error: "Error",
      message: "Missing parameters",
      data: null
    });
    const response: any = await AuthFacade.signup(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Login OK', async () => {
    let req : UserTO = new UserTO("test@mail.com", "pdw001");
    stubAuthServiceLogin.resolves({
      _id: 'xx00xx00xx00xx00xx00xx00',
      username: 'TestTest',
      email: 'test@mail.com',
      password: '$2b$10$cfzKX9Km1UISIYXeDSz/TOKu.I/trHE.UWfusmd0.Pq7yoJfKiVGS'
    });
    stubAuthServicePassword.resolves(true);
    stubTokenServiceAccess.resolves("token_access");
    stubTokenServiceRefresh.resolves("refresh_token");
    const response: any = await AuthFacade.login(req);
    expect("Login successfully").equal(response.message);
  });

  it('Login without email', async () => {
    let req : UserTO = new UserTO("test@mail.com", "pdw001");
    delete req.email;
    const response: any = await AuthFacade.login(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Login without password', async () => {
    let req : UserTO = new UserTO("test@mail.com", "pdw001");
    delete req.password;
    const response: any = await AuthFacade.login(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Login user not found', async () => {
    let req : UserTO = new UserTO("test@mail.com", "pdw001");
    stubAuthServiceLogin.resolves(null);
    const response: any = await AuthFacade.login(req);
    expect("User not found").equal(response.message);
  });

  it('Login password incorrect', async () => {
    let req : UserTO = new UserTO("test@mail.com", "pdw001");
    stubAuthServiceLogin.resolves({
      _id: 'xx00xx00xx00xx00xx00xx00',
      username: 'TestTest',
      email: 'test@mail.com',
      password: '$2b$10$cfzKX9Km1UISIYXeDSz/TOKu.I/trHE.UWfusmd0.Pq7yoJfKiVGS'
    });
    stubAuthServicePassword.resolves(false);
    const response: any = await AuthFacade.login(req);
    expect("Incorrect User and/or Password").equal(response.message);
  });

  it('Refresh token OK', async () => {
    let req: string = "refresh_token";
    stubTokenServiceSessionByToken.resolves({
      _id: 'xx00xx00xx00xx00xx00xx01',
      token: 'refresh_token',
      userId: 'xx00xx00xx00xx00xx00xx00'
    });
    stubAuthServiceFindUserById.resolves({
      _id: 'xx00xx00xx00xx00xx00xx00',
      username: 'TestTest',
      email: 'test@mail.com',
      password: '$2b$10$cfzKX9Km1UISIYXeDSz/TOKu.I/trHE.UWfusmd0.Pq7yoJfKiVGS'
    });
    stubTokenServiceAccess.resolves("token_access");
    const response: any = await AuthFacade.refreshToken(req);
    expect("Refresh Token successfully").equal(response.message);
  });

  it('Refresh token without refreshToken', async () => {
    let req;
    const response: any = await AuthFacade.refreshToken(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Refresh token session not found', async () => {
    let req: string = "refresh_token";
    stubTokenServiceSessionByToken.resolves(null);
    const response: any = await AuthFacade.refreshToken(req);
    expect("Session not found").equal(response.message);
  });

  it('Refresh token user not found', async () => {
    let req: string = "refresh_token";
    stubTokenServiceSessionByToken.resolves({
      _id: 'xx00xx00xx00xx00xx00xx01',
      token: 'refresh_token',
      userId: 'xx00xx00xx00xx00xx00xx00'
    });
    stubAuthServiceFindUserById.resolves(null);
    const response: any = await AuthFacade.refreshToken(req);
    expect("User not found").equal(response.message);
  });

  it('Logout OK', async () => {
    let req: string = "xx00xx00xx00xx00xx00xx00";
    stubAuthServiceLogout.resolves({
      _id: 'xx00xx00xx00xx00xx00xx00',
      username: 'TestTest',
      email: 'test@mail.com',
      password: '$2b$10$cfzKX9Km1UISIYXeDSz/TOKu.I/trHE.UWfusmd0.Pq7yoJfKiVGS'
    });
    stubTokenServiceSessionByUser.resolves({
      _id: 'xx00xx00xx00xx00xx00xx01',
      token: 'refresh_token',
      userId: 'xx00xx00xx00xx00xx00xx00'
    });
    stubTokenServiceDeleteSession.resolves();
    const response: any = await AuthFacade.logout(req);
    expect("Logout successfully").equal(response.message);
  });

  it('Logout without userId', async () => {
    let req;
    const response: any = await AuthFacade.logout(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Logout user not found', async () => {
    let req: string = "xx00xx00xx00xx00xx00xx00";
    stubAuthServiceLogout.resolves(null);
    const response: any = await AuthFacade.logout(req);
    expect("User not found").equal(response.message);
  });

  it('Logout session not found', async () => {
    let req: string = "xx00xx00xx00xx00xx00xx00";
    stubAuthServiceLogout.resolves({
      _id: 'xx00xx00xx00xx00xx00xx00',
      username: 'TestTest',
      email: 'test@mail.com',
      password: '$2b$10$cfzKX9Km1UISIYXeDSz/TOKu.I/trHE.UWfusmd0.Pq7yoJfKiVGS'
    });
    stubTokenServiceSessionByUser.resolves(null);
    
    const response: any = await AuthFacade.logout(req);
    expect("Session logout").equal(response.message);
  });

  after(() => {
    stubAuthServiceSignUp.restore();
    stubAuthServiceLogin.restore();
    stubAuthServiceLogout.restore();
    stubAuthServiceFindUserById.restore();
    stubAuthServiceEncrypt.restore();
    stubAuthServicePassword.restore();
    stubTokenServiceAccess.restore();
    stubTokenServiceRefresh.restore();
    stubTokenServiceSessionByToken.restore();
    stubTokenServiceSessionByUser.restore();
    stubTokenServiceDeleteSession.restore();
  });

});