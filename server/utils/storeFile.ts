import * as path from 'path';
import { writeFile, mkdirp } from 'fs-extra';

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

    const dir: string = path.resolve(__dirname, `../../static/${dirName}`);
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
