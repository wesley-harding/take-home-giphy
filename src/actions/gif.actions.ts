import {createAsyncAction} from 'typesafe-actions';
import {CollectionResponse} from '../models/Giphy';

export const fetchTrendingNextPageAsync = createAsyncAction(
  'gif/fetch_trending_request',
  'gif/fetch_trending_success',
  'gif/fetch_trending_failure',
)<(undefined), CollectionResponse, Error>();
