import {GifObject, Pagination} from '../../models/Giphy';

export interface GifReducerState {
  isLoading: boolean;
  hasError: boolean;
  gifObjects: GifObject[];
  pagination?: Pagination;
}
