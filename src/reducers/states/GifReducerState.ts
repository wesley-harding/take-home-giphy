import {GifObject} from '../../models/Giphy';

export interface GifReducerState {
  gifObject?: GifObject;
  hasError: boolean;
  isLoading: boolean;
}
