import {createAsyncAction} from 'typesafe-actions';
import {CollectionResponse} from '../models/Giphy';
import {GiphyTrendingRequestParameters} from '../models/giphy/GiphyTrendingRequestParameters';

// TODO: consider splitting this into two actions - one for a fresh load, one for infinite scroll
export const fetchTrendingAsync = createAsyncAction(
  'gif/fetch_trending_request',
  'gif/fetch_trending_success',
  'gif/fetch_trending_failure',
)<(GiphyTrendingRequestParameters | undefined), CollectionResponse, Error>();
