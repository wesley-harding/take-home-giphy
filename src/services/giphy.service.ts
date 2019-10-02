import * as qs from 'query-string';
import {RequestParameters} from '../models/Giphy';

const apiKey = 'mbnz4RnSb0eyc1K92ZAiqvsVOBSWa8bn';
const giphyApiBase = 'https://api.giphy.com';

export function trending(params: RequestParameters = {}) {
  return giphy('/v1/gifs/trending', params);
}

export function search(params: RequestParameters = {}) {
  return giphy('/v1/gifs/search', params);
}

export function getGifById(id: string) {
  return giphy(`/v1/gifs/${id}`);
}

export function giphy(endpoint: string, query: object = {}) {
  const queryString = qs.stringify({api_key: apiKey, ...query}); // Note, we do allow api_key to be overridden
  const slug = [endpoint, queryString].join('?');
  const url = giphyApiBase + slug;

  return fetch(url);
}
