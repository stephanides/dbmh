import { Request } from 'express';
import { config } from '../config';
import User from '../db/models/User';
import { verifyToken } from './token';

type AuthPayload = {
  signed: boolean;
  role?: string;
  userId?: string;
};

export default async function authorization(
  req: Request
): Promise<AuthPayload> {
  const bearer = req.headers.authorization || '';
  let signed: boolean = false;

  if (!bearer) {
    return { signed };
  }

  const token = bearer.split('Bearer ')[1];
  const verified = await verifyToken(token);
  signed = !!verified;

  const user = await User.findOne({ email: verified?.email as string });

  return {
    signed,
    role: user?.role || undefined,
    userId: user?.id || undefined,
  };
}

export async function validateHuman(recaptchaToken: string): Promise<boolean> {
  const secret = config.recaptcha.secret;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptchaToken}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data.success;
}
