// Meta information from a Giphy API response
//
// Model based on Giphy API Documenation
// https://developers.giphy.com/docs/api/schema/#meta-object
export interface GiphyResponseMeta {
  msg: string;
  status: number;
  response_id: string;
}
