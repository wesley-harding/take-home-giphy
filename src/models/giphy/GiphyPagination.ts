// Information on how to paginate through a GiphyCollection
//
// Model based on Giphy API Documentation
// See: https://developers.giphy.com/docs/api/schema/#pagination-object
export interface GiphyPagination {
  offset: number;
  total_count: number;
  count: number;
}
