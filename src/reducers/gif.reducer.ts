import {GifReducerState} from './states/GifReducerState';
import {createReducer} from 'typesafe-actions';
import {fetchSearchNextPageAsync, fetchTrendingNextPageAsync, resetGifState} from '../actions/gif.actions';

const initialState: GifReducerState = {
  canLoadMore: true,
  gifObjects: [],
  hasError: false,
  isLoading: false,
  pagination: undefined,
};

export const gifReducer = createReducer<GifReducerState>(initialState)
  .handleAction(resetGifState, () => (initialState))
  .handleAction([
    fetchTrendingNextPageAsync.request,
    fetchSearchNextPageAsync.request,
  ], (state, action) => ({
    ...state,
    hasError: false,
    isLoading: true,
  }))
  .handleAction([
    fetchTrendingNextPageAsync.success,
    fetchSearchNextPageAsync.success,
  ], (state, action) => {
    const { pagination } = action.payload;

    return {
      ...state,
      canLoadMore: pagination.total_count > pagination.offset + pagination.count,
      gifObjects: [...state.gifObjects, ...action.payload.data],
      isLoading: false,
      pagination,
    };
  })
  .handleAction([
    fetchTrendingNextPageAsync.failure,
    fetchSearchNextPageAsync.failure,
  ], (state, action) => ({
    ...state,
    hasError: true,
    isLoading: false,
  }))
;
