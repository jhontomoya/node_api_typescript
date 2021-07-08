import config from '../../src/config/env/index';

export const userModelMock = {
  username: 'TestTest',
  email: 'test@mail.com',
  password: config.psdMock,
  _id: 'xx00',
};

export const userMock = {
  username: 'TestTest',
  email: 'test@mail.com',
  password: config.psdMock,
  id: 'xx00',
}; 

export const userWithoutEmailMock = {
  username: 'TestTest',
  password: config.psdMock,
  id: 'xx00',
};

export const userWithoutPasswordMock = {
  username: 'TestTest',
  email: 'test@mail.com',
  id: 'xx00',
};

export const userWithoutUsernameMock = {
  email: 'test@mail.com',
  password: config.psdMock,
  id: 'xx00',
};

export const loginMock = {
  email: 'test@mail.com',
  password: config.psdMock,
};

export const loginWithoutEmailMock = {
  password: config.psdMock,
};

export const loginWithoutPasswordMock = {
  email: 'test@mail.com',
};