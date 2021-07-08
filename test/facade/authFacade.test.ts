import sinon, { SinonStub } from "sinon";
import { expect } from "chai";
import AuthFacade from "../../src/facade/AuthFacade/facade";
import AuthService from "../../src/service/AuthService/service";
import TokenService from "../../src/service/TokenService/service";
import { AuthTransformer, ResponseTransformer } from "../../src/transformer/index";
import { UserMock, TokenMock, ResponseMock } from '../../src/mock';

describe('AuthFacade tests', () => {
  
  // Services
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
  // Transformers
  let stubResponseOkTransformer: SinonStub;
  let stubResponseBadTransformer: SinonStub;
  let stubResponseNotFoundTransformer: SinonStub;
  let stubAuthTransformerToDo: SinonStub;
  let stubAuthTransformerDoTo: SinonStub;

  before(() => {
    // Services
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
    // Transformers
    stubResponseOkTransformer = sinon.stub(ResponseTransformer, 'responseSuccess');
    stubResponseBadTransformer = sinon.stub(ResponseTransformer, 'responseBadRequest');
    stubResponseNotFoundTransformer = sinon.stub(ResponseTransformer, 'responseNotFound');
    stubAuthTransformerToDo = sinon.stub(AuthTransformer, 'transformToToDo');
    stubAuthTransformerDoTo = sinon.stub(AuthTransformer, 'transformDoToTo');
    
  })
  
  it('Signup OK', async () => {
    let req = UserMock.userMock;
    stubAuthTransformerToDo.returns(UserMock.userModelMock);
    stubAuthServiceEncrypt.resolves(UserMock.userMock.password);
    stubAuthServiceSignUp.resolves(UserMock.userModelMock);
    stubAuthTransformerDoTo.returns(UserMock.userMock);
    stubResponseOkTransformer.returns(ResponseMock.responseUserCreatedSuccessMock);
    const response: any = await AuthFacade.signup(req);
    expect("User created successfully").equal(response.message);
  });

  it('Signup without email', async () => {
    let req = UserMock.userWithoutEmailMock;
    stubResponseBadTransformer.returns(ResponseMock.responseMissingParameterMock);
    const response: any = await AuthFacade.signup(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Signup without password', async () => {
    let req = UserMock.userWithoutPasswordMock;
    stubResponseBadTransformer.returns(ResponseMock.responseMissingParameterMock);
    const response: any = await AuthFacade.signup(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Signup without username', async () => {
    let req = UserMock.userWithoutUsernameMock;
    stubResponseBadTransformer.returns(ResponseMock.responseMissingParameterMock);
    const response: any = await AuthFacade.signup(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Login OK', async () => {
    let req = UserMock.loginMock;
    stubAuthServiceLogin.resolves(UserMock.userModelMock);
    stubAuthTransformerDoTo.returns(UserMock.userMock);
    stubAuthServicePassword.resolves(true);
    stubTokenServiceAccess.resolves(TokenMock.accessTokenMock);
    stubTokenServiceRefresh.resolves(TokenMock.refreshTokenMock);
    stubResponseOkTransformer.returns(ResponseMock.responsLoginSuccessMock);
    const response: any = await AuthFacade.login(req);
    expect("Login successfully").equal(response.message);
  });

  it('Login without email', async () => {
    let req = UserMock.loginWithoutEmailMock;
    stubResponseBadTransformer.returns(ResponseMock.responseMissingParameterMock);
    const response: any = await AuthFacade.login(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Login without password', async () => {
    let req = UserMock.loginWithoutPasswordMock;
    stubResponseBadTransformer.returns(ResponseMock.responseMissingParameterMock);
    const response: any = await AuthFacade.login(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Login user not found', async () => {
    let req = UserMock.loginMock;
    stubAuthServiceLogin.resolves(null);
    stubResponseNotFoundTransformer.returns(ResponseMock.responseUserNotFoundMock);
    const response: any = await AuthFacade.login(req);
    expect("User not found").equal(response.message);
  });

  it('Login password incorrect', async () => {
    let req = UserMock.loginMock;
    stubAuthServiceLogin.resolves(UserMock.userMock);
    stubAuthServicePassword.resolves(false);
    stubResponseNotFoundTransformer.returns(ResponseMock.responsePasswordIncorrectMock);
    const response: any = await AuthFacade.login(req);
    expect("Incorrect User and/or Password").equal(response.message);
  });

  it('Refresh token OK', async () => {
    let req: string = TokenMock.refreshTokenMock;
    stubTokenServiceSessionByToken.resolves(TokenMock.tokenMock);
    stubAuthServiceFindUserById.resolves(UserMock.userMock);
    stubTokenServiceAccess.resolves(TokenMock.accessTokenMock);
    stubResponseOkTransformer.returns(ResponseMock.responsRefreshSuccessMock);
    const response: any = await AuthFacade.refreshToken(req);
    expect("Refresh Token successfully").equal(response.message);
  });

  it('Refresh token without refreshToken', async () => {
    let req;
    stubResponseBadTransformer.returns(ResponseMock.responseMissingParameterMock);
    const response: any = await AuthFacade.refreshToken(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Refresh token session not found', async () => {
    let req: string = TokenMock.refreshTokenMock;
    stubTokenServiceSessionByToken.resolves(null);
    stubResponseNotFoundTransformer.returns(ResponseMock.responseSessionNotFoundMock);
    const response: any = await AuthFacade.refreshToken(req);
    expect("Session not found").equal(response.message);
  });

  it('Refresh token user not found', async () => {
    let req: string = TokenMock.refreshTokenMock;
    stubTokenServiceSessionByToken.resolves(TokenMock.tokenMock);
    stubAuthServiceFindUserById.resolves(null);
    stubResponseNotFoundTransformer.returns(ResponseMock.responseUserNotFoundMock);
    const response: any = await AuthFacade.refreshToken(req);
    expect("User not found").equal(response.message);
  });

  it('Logout OK', async () => {
    let req: string = UserMock.userMock.id;
    stubAuthServiceLogout.resolves(UserMock.userMock);
    stubTokenServiceSessionByUser.resolves(TokenMock.tokenMock);
    stubTokenServiceDeleteSession.resolves();
    stubResponseOkTransformer.returns(ResponseMock.responsLogoutSuccessMock);
    const response: any = await AuthFacade.logout(req);
    expect("Logout successfully").equal(response.message);
  });

  it('Logout without userId', async () => {
    let req;
    stubResponseBadTransformer.returns(ResponseMock.responseMissingParameterMock);
    const response: any = await AuthFacade.logout(req);
    expect("Missing parameters").equal(response.message);
  });

  it('Logout user not found', async () => {
    let req: string = UserMock.userMock.id;
    stubAuthServiceLogout.resolves(null);
    stubResponseNotFoundTransformer.returns(ResponseMock.responseUserNotFoundMock);
    const response: any = await AuthFacade.logout(req);
    expect("User not found").equal(response.message);
  });

  it('Logout session not found', async () => {
    let req: string = UserMock.userMock.id;
    stubAuthServiceLogout.resolves(UserMock.userMock);
    stubTokenServiceSessionByUser.resolves(null);
    stubResponseNotFoundTransformer.returns(ResponseMock.responseSessionNotFoundMock);
    const response: any = await AuthFacade.logout(req);
    expect("Session not found").equal(response.message);
  });

  after(() => {
    // Services
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
    // Transformers
    stubResponseOkTransformer.restore();
    stubResponseBadTransformer.restore();
    stubResponseNotFoundTransformer.restore();
    stubAuthTransformerToDo.restore();
    stubAuthTransformerDoTo.restore();
  });

});