import {GiphyGifObject} from './GiphyGifObject';
import {GiphyPagination} from './GiphyPagination';
import {GiphyResponseMeta} from './GiphyResponseMeta';

// Results from a successful request to a Giphy collection endpoint (e.g.
// trending and search endpoints)
//
// Model based on Giphy API Documentation
// See: https://developers.giphy.com/docs/api/endpoint#trending
export interface GiphyCollectionResponse {
  data: GiphyGifObject[];
  pagination: GiphyPagination;
  meta: GiphyResponseMeta;
}
