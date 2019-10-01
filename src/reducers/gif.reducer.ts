import {createReducer} from 'typesafe-actions';
import {GifReducerState} from './states/GifReducerState';
import {fetchGifByIdAsync, resetGifState} from '../actions/gif.actions';

const initialState: GifReducerState = {
  gifObject: undefined,
  hasError: false,
  isLoading: false,
};

export const gifReducer = createReducer<GifReducerState>(initialState)
  .handleAction(resetGifState, () => (initialState))
  .handleAction(fetchGifByIdAsync.request, (state, action) => ({
    ...state,
    hasError: false,
    isLoading: true,
  }))
  .handleAction(fetchGifByIdAsync.success, (state, action) => ({
    ...state,
    isLoading: false,
    gifObject: action.payload.data,
  }))
  .handleAction(fetchGifByIdAsync.failure, (state, action) => ({
    ...state,
    hasError: true,
    isLoading: false,
  }))
;
