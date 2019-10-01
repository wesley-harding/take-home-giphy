import {GifObject, Pagination} from '../../models/Giphy';

export interface GifListReducerState {
  canLoadMore: boolean;
  gifObjects: GifObject[];
  hasError: boolean;
  isLoading: boolean;
  pagination?: Pagination;
}
