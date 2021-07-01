import { Schema, model, Document } from 'mongoose';

export interface IToken extends Document {
  token: string;
  userId: string;
}

const TokenSchema = new Schema({
  token: {
    type: String
  },
  userId: {
    type: String
  }
});

export default model<IToken>('Token', TokenSchema);