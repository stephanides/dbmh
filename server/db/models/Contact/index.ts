import mongoose, { Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
