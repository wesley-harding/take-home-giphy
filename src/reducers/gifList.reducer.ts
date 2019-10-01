import {GifListReducerState} from './states/GifListReducerState';
import {createReducer} from 'typesafe-actions';
import {fetchSearchNextPageAsync, fetchTrendingNextPageAsync, resetGifListState} from '../actions/gifList.actions';

const initialState: GifListReducerState = {
  canLoadMore: true,
  gifObjects: [],
  hasError: false,
  isLoading: false,
  pagination: undefined,
};

export const gifListReducer = createReducer<GifListReducerState>(initialState)
  .handleAction(resetGifListState, () => (initialState))
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
