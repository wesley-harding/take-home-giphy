import {createAction, createAsyncAction} from 'typesafe-actions';
import {ItemResponse} from '../models/Giphy';

export const fetchGifByIdAsync = createAsyncAction(
  'gif/fetch_request',
  'gif/fetch_success',
  'gif/fetch_failure',
)<string, ItemResponse, Error>();

export const resetGifState = createAction('gif/reset');
