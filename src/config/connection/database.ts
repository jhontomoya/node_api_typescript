import mongoose from 'mongoose';
import config from '../env/index';

export function initDatabase(): void {
  mongoDB();
}

function mongoDB() {
  mongoose.connect(getUrlDatabase(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  
  const connection = mongoose.connection;
  
  connection.on('error', () => {
    console.log("Error to connect database");
  });
  
  connection.once('open', () => {
    console.log("Connection DB Successful");
  });
}

function getUrlDatabase(): string {
  return `${config.database.DB_TYPE}://${config.database.DB_HOST}:${config.database.DB_PORT}/${config.database.DB_NAME}`
}