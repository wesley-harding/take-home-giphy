// Defines structure for a Giphy "GIF".
//
// This is not the actual image, but the overall info about a GIF - akin to a
// post or "Tweet"
//
// Model based on Giphy API Documentation
// See: https://developers.giphy.com/docs/api/schema#gif-object
import {GiphyImageObject} from './GiphyImageObject';

export interface GiphyGifObject {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  user: string;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  title: string;
  images: GiphyImageObject;
}
