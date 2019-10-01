import {GifReducerState} from './states/GifReducerState';
import {createReducer} from 'typesafe-actions';
import {fetchTrendingNextPageAsync} from '../actions/gif.actions';

const initialState: GifReducerState = {
  isLoading: false,
  hasError: false,
  gifObjects: [],
  pagination: undefined,
};

// TODO: handle error message
// TODO: handle loading state
// TODO: handle loading of data
// TODO: We need to be able reset the list of gif data
// TODO: Handle list is complete
export const gifReducer = createReducer<GifReducerState>(initialState)
  .handleAction(fetchTrendingNextPageAsync.request, (state, action) => ({
    ...state,
    isLoading: true,
    hasError: false,
  }))
  .handleAction(fetchTrendingNextPageAsync.success, (state, action) => ({
    ...state,
    isLoading: false,
    gifObjects: [...state.gifObjects, ...action.payload.data],
    pagination: action.payload.pagination,
  }))
  .handleAction(fetchTrendingNextPageAsync.failure, (state, action) => ({
    ...state,
    isLoading: false,
    hasError: true,
  }))
;
