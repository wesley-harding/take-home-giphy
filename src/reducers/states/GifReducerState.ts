import {GifObject, Pagination} from '../../models/Giphy';

export interface GifReducerState {
  canLoadMore: boolean;
  gifObjects: GifObject[];
  hasError: boolean;
  isLoading: boolean;
  pagination?: Pagination;
}
