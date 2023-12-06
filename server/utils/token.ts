import jwt from 'jsonwebtoken';
import { config } from '../config';

type TokenInputOptions = {
  [key: string]: string | number;
};
export type UserTokenPayload = {
  token: string;
  userId?: string;
};

export type TokenPayload = {
  expiresIn: number;
  token: string;
};

export async function getToken(
  options: TokenInputOptions
): Promise<TokenPayload> {
  return new Promise((resolve, reject) => {
    const expiresIn = new Date().getTime() + 365 * (24 * 60 * 60 * 1000); // 365 days

    jwt.sign(options, config.jwtSecret, { expiresIn }, (err, encoded) => {
      if (err) {
        reject(err);
      }

      resolve({ token: encoded, expiresIn });
    });
  });
}

export type TokenUserPayload = {
  [key: string]: string | number;
};

export async function verifyToken(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        reject(err);
      }

      resolve(decoded);
    });
  });
}
