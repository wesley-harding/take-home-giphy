import {GiphyGifObject} from './GiphyGifObject';
import {GiphyResponseMeta} from './GiphyResponseMeta';

// Results from a successful request for a single GIF
//
// Model based on Giphy API Documentation
// See: https://developers.giphy.com/docs/api/endpoint#get-gif-by-id
export interface GiphyItemResponse {
  data: GiphyGifObject[];
  meta: GiphyResponseMeta;
}
