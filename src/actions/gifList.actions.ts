import {createAction, createAsyncAction} from 'typesafe-actions';
import {CollectionResponse} from '../models/Giphy';

export const fetchTrendingNextPageAsync = createAsyncAction(
  'gifList/fetch_trending_request',
  'gifList/fetch_trending_success',
  'gifList/fetch_trending_failure',
)<undefined, CollectionResponse, Error>();

export const fetchSearchNextPageAsync = createAsyncAction(
  'gifList/fetch_search_request',
  'gifList/fetch_search_success',
  'gifList/fetch_search_failure',
)<string, CollectionResponse, Error>();

export const resetGifListState = createAction('gif/reset');
