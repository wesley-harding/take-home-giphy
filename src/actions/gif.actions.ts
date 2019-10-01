import {createAction, createAsyncAction} from 'typesafe-actions';
import {CollectionResponse} from '../models/Giphy';

export const fetchTrendingNextPageAsync = createAsyncAction(
  'gif/fetch_trending_request',
  'gif/fetch_trending_success',
  'gif/fetch_trending_failure',
)<undefined, CollectionResponse, Error>();

export const fetchSearchNextPageAsync = createAsyncAction(
  'gif/fetch_search_request',
  'gif/fetch_search_success',
  'gif/fetch_search_failure',
)<string, CollectionResponse, Error>();

export const resetGifState = createAction('gif/reset');
