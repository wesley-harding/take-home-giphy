import {GiphyImageProps} from './GiphyImageProps';

// Defines rendition information for Giphy images.
//
// Not all fields are available on all images, so all fields have been marked
// optional.
//
// Model based on Giphy API Documentation
// See: https://developers.giphy.com/docs/api/schema#image-object
export interface GiphyImageObject {
  fixed_height?: GiphyImageProps;
  fixed_height_still?: GiphyImageProps;
  fixed_height_downsampled?: GiphyImageProps;
  fixed_width?: GiphyImageProps;
  fixed_width_still?: GiphyImageProps;
  fixed_width_downsampled?: GiphyImageProps;
  fixed_height_small?: GiphyImageProps;
  fixed_height_small_still?: GiphyImageProps;
  fixed_width_small?: GiphyImageProps;
  fixed_width_small_still?: GiphyImageProps;
  downsized?: GiphyImageProps;
  downsized_still?: GiphyImageProps;
  downsized_large?: GiphyImageProps;
  downsized_medium?: GiphyImageProps;
  downsized_small?: GiphyImageProps;
  original?: GiphyImageProps;
  original_still?: GiphyImageProps;
  looping?: GiphyImageProps;
  preview?: GiphyImageProps;
  preview_gif?: GiphyImageProps;
}
