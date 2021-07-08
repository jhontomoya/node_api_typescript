import config from '../../src/config/env/index';

export const tokenMock = {
  token: config.DATA_MOCK.TKN.rfh_tkn,
  userId: config.DATA_MOCK.TKN.usr_id,
  id: config.DATA_MOCK.TKN.id,
};

export const accessTokenMock = config.DATA_MOCK.TKN.acc_tkn;
export const refreshTokenMock = config.DATA_MOCK.TKN.rfh_tkn;
