import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
  port: string | number;
  database: { 
    DB_TYPE: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
  };
  awaitTime:string | number;
  test?: string;
  testUrl?: string;
  logger_serviceName: string;
  logger_maxSize: number;
  logger_level: string;
  ACCESS_TOKEN: string;
  REFRESH_TOKEN: string;
  DATA_MOCK: {
    USR: {
      usr: string;
      mail: string;
      pdw: string;
      id: string
    }
    TKN: {
      rfh_tkn: string;
      usr_id: string;
      id: string;
      acc_tkn: string;
    }
  }
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
  port: process.env.PORT || 3000,
  database: {
    DB_TYPE:  process.env.DB_TYPE || 'mongodb',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '27017',
    DB_NAME: process.env.DB_NAME || 'test',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
},
  awaitTime: process.env.AWAIT_TIME || 30000,
  test: process.env.TEST,
  testUrl: process.env.TEST_URL,
  logger_serviceName: `${process.env.SERVICE_NAME}` || 'service-service',
  logger_maxSize: Number(`${process.env.LOGGER_MAXSIZE}`) ||  2048,
  logger_level: process.env.LOGGER_LEVEL || 'debug',
  ACCESS_TOKEN: process.env.ACCESS_TOKEN || '',
  REFRESH_TOKEN: process.env.REFRESH_TOKEN || '',
  DATA_MOCK: {
    USR: {
      usr: process.env.MOCK_USR_NM || 'TestTest',
      mail: process.env.MOCK_USR_MAIL || 'test@mail.com',
      pdw: process.env.MOCK_USR_PDW || 'passEncrypt',
      id: process.env.MOCK_USR_ID || 'xx00'
    },
    TKN: {
      rfh_tkn: process.env.MOCK_TKN_RFH || 'refresh_token',
      usr_id: process.env.MOCK_USR_ID || 'xx00',
      id: process.env.MOCK_TKN_ID || 'xx01',
      acc_tkn: process.env.MOCK_TKN_ACC || 'access_token',
    }
  }
};


const config: {
  [name: string]: IConfig
} = {
  development
};

export default config[NODE_ENV];