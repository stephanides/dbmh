export const bytesToSize: (bytes: number) => string = (bytes) => {
  const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  if (bytes === 0) {
    return '0 Byte';
  }

  const bite: number = 1024;
  const c: number = Math.floor(Math.log(bytes) / Math.log(bite));

  return `${Math.round(bytes / 1024 ** c)} ${sizes[c]}`;
};

export const formatString = (text: string) => {
  const replaced = text.replace(
    /( |&nbsp;)([vksuzo]|a|i|so|zo) /g,
    '$1$2&nbsp;'
  );
  return { __html: replaced };
};
