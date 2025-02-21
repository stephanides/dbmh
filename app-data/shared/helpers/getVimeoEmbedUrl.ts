export const getVimeoEmbedUrl = (url: string) => {
  const videoId = url.split('/').pop(); // Extracts 832153910
  return `https://player.vimeo.com/video/${videoId}`;
};
