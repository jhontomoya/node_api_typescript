import config from '../../src/config/env/index';

export const userModelMock = {
  username: config.DATA_MOCK.USR.usr,
  email: config.DATA_MOCK.USR.mail,
  password: config.DATA_MOCK.USR.pdw,
  _id: config.DATA_MOCK.USR.id,
};

export const userMock = {
  username: config.DATA_MOCK.USR.usr,
  email: config.DATA_MOCK.USR.mail,
  password: config.DATA_MOCK.USR.pdw,
  id: config.DATA_MOCK.USR.id,
}; 

export const userWithoutEmailMock = {
  username: config.DATA_MOCK.USR.usr,
  password: config.DATA_MOCK.USR.pdw,
  id: config.DATA_MOCK.USR.id,
};

export const userWithoutPasswordMock = {
  username: config.DATA_MOCK.USR.usr,
  email: config.DATA_MOCK.USR.mail,
  id: config.DATA_MOCK.USR.id,
};

export const userWithoutUsernameMock = {
  email: config.DATA_MOCK.USR.mail,
  password: config.DATA_MOCK.USR.pdw,
  id: config.DATA_MOCK.USR.id,
};

export const loginMock = {
  email: config.DATA_MOCK.USR.mail,
  password: config.DATA_MOCK.USR.pdw,
};

export const loginWithoutEmailMock = {
  password: config.DATA_MOCK.USR.pdw,
};

export const loginWithoutPasswordMock = {
  email: config.DATA_MOCK.USR.mail,
};