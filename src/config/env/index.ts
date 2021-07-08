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
  psdMock: string;
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
  psdMock: 'passEncrypt'
};


const config: {
  [name: string]: IConfig
} = {
  development
};

export default config[NODE_ENV];