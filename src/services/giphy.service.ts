import * as qs from 'query-string';
import {GiphyTrendingRequestParameters} from '../models/giphy/GiphyTrendingRequestParameters';

const apiKey = process.env.GIPHY_API_KEY;
const giphyApiBase = 'https://api.giphy.com';

export function trending(params: GiphyTrendingRequestParameters = {}) {
  return giphy('/v1/gifs/trending', params);
}

export function giphy(endpoint: string, query: object = {}) {
  const queryString = qs.stringify({api_key: apiKey, ...query}); // Note, we do allow api_key to be overridden
  const slug = [endpoint, queryString].join('?');
  const url = giphyApiBase + slug;

  return fetch(url);
}
