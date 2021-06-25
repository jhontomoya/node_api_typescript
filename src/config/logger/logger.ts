import winston from 'winston';
import config from '../../config/env/index';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: `${config.logger_serviceName}` },
  transports: [
    new winston.transports.Console({ level:  config.logger_level})
  ],
});

const logService = {

  logError(error: any, message: string = 'An error was found: '): void {
    logger.error({
      level: 'error',
      message: message,
      date: new Date(),
      content: error,
    });
  },

  logServiceError(error: any, request: any, response: any, endPoint: string, message: string): void {
    logger.error({
      level: 'error',
      message: `An error was found in service: ${message}`,
      date: new Date(),
      content: error,
      request: request,
      response: response,
      endPoint: endPoint
    });
  },

  logInfo(request: any, response: any, message: string): void {
    logger.info({
      level: 'info',
      message: `Info: ${message}`,
      date: new Date(),
      request: request,
      response: response
    });
  },

  logServiceTimer(service: string, endPoint: string, startTime: Date, endTime: Date): void {
    var Segundos_entre_fechas = Math.abs(((startTime.getTime() - endTime.getTime()) / 1000));
    logger.log({
      level: 'http',
      message: 'Service time',
      endPoint: endPoint,
      date: new Date(),
      service: service,
      startTime: startTime,
      endTime: endTime,
      timeElapsed: Segundos_entre_fechas
    });
  },
}

export default logService;