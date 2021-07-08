export const userModelMock = {
  username: 'TestTest',
  email: 'test@mail.com',
  password: 'passEncrypt',
  _id: 'xx00',
};

export const userMock = {
  username: 'TestTest',
  email: 'test@mail.com',
  password: 'passEncrypt',
  id: 'xx00',
}; 

export const userWithoutEmailMock = {
  username: 'TestTest',
  password: 'passEncrypt',
  id: 'xx00',
};

export const userWithoutPasswordMock = {
  username: 'TestTest',
  email: 'test@mail.com',
  id: 'xx00',
};

export const userWithoutUsernameMock = {
  email: 'test@mail.com',
  password: 'passEncrypt',
  id: 'xx00',
};

export const loginMock = {
  email: 'test@mail.com',
  password: 'passEncrypt',
};

export const loginWithoutEmailMock = {
  password: 'passEncrypt',
};

export const loginWithoutPasswordMock = {
  email: 'test@mail.com',
};