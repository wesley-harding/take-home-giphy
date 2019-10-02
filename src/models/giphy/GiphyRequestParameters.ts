// Defines available parameters for requests to Giphy API
//
// Model based on Giphy API Documentation
// See: https://developers.giphy.com/docs/api/endpoint
export interface GiphyRequestParameters {
  api_key?: string;
  q?: string;
  limit?: number;
  offset?: number;
  rating?: string;
  random_id?: string;
}
