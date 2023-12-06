import { storeFile } from './storeFile';

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
