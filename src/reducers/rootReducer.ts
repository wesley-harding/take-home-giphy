import { combineReducers } from 'redux';
import {GifListReducerState} from './states/GifListReducerState';
import {gifListReducer} from './gifList.reducer';
import {GifReducerState} from './states/GifReducerState';
import {gifReducer} from './gif.reducer';

export interface RootState {
  gifList: GifListReducerState;
  gif: GifReducerState;
}

export const rootReducer = combineReducers({
  gifList: gifListReducer,
  gif: gifReducer,
});
