export const getMediaUrl = (path) => {
  return `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${path}`;
};
