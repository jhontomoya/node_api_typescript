export class ResponseTO {
  statusCode: number;
  error: string;
  message: string;
  data: any;


  constructor(statusCode: number, message: string, data: any ){
    this.statusCode = statusCode;
    this.error = statusCode === 200 ? 'Exitoso': 'Error';
    this.message = message;
    this.data = data;
  }
}