import * as jwt from 'jsonwebtoken';
import * as path from 'path';
import { writeFile, mkdirp } from 'fs-extra';
import { config } from '../../../config';

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

export const verifyToken: (ctx: any, secret: string) => Promise<void> = (
  ctx,
  secret
) =>
  new Promise((resolve, reject) => {
    const { token } = ctx;

    jwt.verify(token, secret, { algorithms: ['HS256'] }, (err, decoded) => {
      if (err) {
        reject(err);
      }

      const { exp } = decoded as any;
      const expires = exp * 1000;
      const now = new Date().getTime();

      if (now > expires) {
        const tokenExpired = new Error('Token has expired');

        reject(tokenExpired);
      }

      resolve();
    });
  });

export const storePdf: (fileData: any) => Promise<string | Error> = (
  fileData
) =>
  new Promise((resolve, reject) => {
    const { fileName, fileBase64Data, dirName, extension } = fileData;

    const base64Data: string = fileBase64Data.split(';base64,')[1];

    const dir: string = path.resolve(
      __dirname,
      `../../../../static/${dirName}`
    );
    const filePath: string = `${dir}/${fileName.toLowerCase()}.${extension}`;

    mkdirp(dir, (dirErr) => {
      if (dirErr) {
        reject(dirErr);
      }

      writeFile(filePath, base64Data, { encoding: 'base64' }, (wFerr) => {
        if (wFerr) {
          reject(wFerr);
        }

        const resultFilePath = `/static${filePath
          .split('static')[1]
          .replace(/\\/g, '/')}`;

        resolve(resultFilePath);
      });
    });
  });

export const storeFile: (fileData: any) => Promise<string | Error> = (
  fileData
) =>
  new Promise((resolve, reject) => {
    const { fileName, fileBase64Data, dirName, extension } = fileData;

    const base64Data: string = fileBase64Data.split(';base64,')[1];

    const extNorm = () => {
      if (extension === 'jpeg') {
        return 'jpg';
      } else if (extension === 'svg+xml') {
        return 'svg';
      }
      return extension;
    };

    const ext = extNorm();

    const dir: string = path.resolve(
      __dirname,
      `../../../../static/${dirName}`
    );
    const filePath: string = `${dir}/${fileName.toLowerCase()}.${ext}`;

    mkdirp(dir, (dirErr) => {
      if (dirErr) {
        reject(dirErr);
      }

      writeFile(filePath, base64Data, { encoding: 'base64' }, (wFerr) => {
        if (wFerr) {
          reject(wFerr);
        }

        const resultFilePath = `/static${filePath
          .split('static')[1]
          .replace(/\\/g, '/')}`;

        resolve(resultFilePath);
      });
    });
  });

export function getImagesPaths(
  images: { base64: string; title: string; ext: string }[],
  vId: string
): Promise<any[]> {
  let j: number = 0;
  const ImagesDataArr = [];

  return new Promise(async (resolve) => {
    while (images.length > j) {
      const { base64, title: imageTitle, ext } = images[j];

      const fileData = {
        fileName: imageTitle,
        fileBase64Data: base64,
        dirName: vId,
        extension: ext,
      };

      const promiseFn = storeFile(fileData);

      ImagesDataArr.push(promiseFn);

      j += 1;
    }

    const paths = await Promise.all(ImagesDataArr);

    let k = 0;
    const ImagesData = [];

    while (paths.length > k) {
      const { base64, ...restImageData } = images[k];
      const imageData = {
        ...restImageData,
        path: paths[k],
      };

      ImagesData.push(imageData);
      k += 1;
    }

    resolve(ImagesData);
  });
}
