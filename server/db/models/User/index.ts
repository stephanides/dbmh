import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
  confirmed: boolean;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
}

const UserSchema = new mongoose.Schema({
  confirmed: {
    default: false,
    type: Boolean,
  },
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  role: {
    default: 1,
    type: String,
  },
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
