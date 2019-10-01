import { combineReducers } from 'redux';
import {GifReducerState} from './states/GifReducerState';
import {gifReducer} from './gif.reducer';

export interface RootState {
  gif: GifReducerState;
}

export const rootReducer = combineReducers({
  gif: gifReducer,
});
