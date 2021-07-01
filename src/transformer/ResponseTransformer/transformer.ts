import { ResponseTO } from '../../to/responseTO';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';

export const responseSuccess = async (message: string, data?: any): Promise<ResponseTO> => {
  return new ResponseTO(
    HttpStatusCode.OK,
    message,
    data ? data : null
  );
}

export const responseBadRequest = async (message: string, data?: any): Promise<ResponseTO> => {
  return new ResponseTO(
    HttpStatusCode.BAD_REQUEST,
    message,
    data ? data : null
  );
}

export const responseUnauthorized = async (message: string, data?: any): Promise<ResponseTO> => {
  return new ResponseTO(
    HttpStatusCode.UNAUTHORIZED,
    message,
    data ? data : null
  );
}

export const responseNotFound= async (message: string, data?: any): Promise<ResponseTO> => {
  return new ResponseTO(
    HttpStatusCode.NOT_FOUND,
    message,
    data ? data : null
  );
}

export const responseInternalErrorServe= async (message: string, data?: any): Promise<ResponseTO> => {
  return new ResponseTO(
    HttpStatusCode.INTERNAL_SERVER_ERROR,
    message,
    data ? data : null
  );
}

export const response = async (statusCode: number, message: string, data?: any): Promise<ResponseTO> => {
  return new ResponseTO(
    statusCode,
    message,
    data ? data : null
  ); 
}