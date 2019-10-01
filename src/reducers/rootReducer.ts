import { combineReducers } from 'redux';
import {GifListReducerState} from './states/GifListReducerState';
import {gifListReducer} from './gifList.reducer';

export interface RootState {
  gif: GifListReducerState;
}

export const rootReducer = combineReducers({
  gif: gifListReducer,
});
