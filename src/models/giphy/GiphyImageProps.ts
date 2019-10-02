// Defines properties available on various GiphyImageObject models
//
// Model based on Giphy API Documentation
// See: https://developers.giphy.com/docs/api/schema#image-object
export interface GiphyImageProps {
  url: string;
  width: string;
  height: string;
  size?: string;
  mp4?: string;
  mp4_size?: string;
  webp?: string;
  webp_size?: string;
}
