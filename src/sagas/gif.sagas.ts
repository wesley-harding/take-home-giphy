import {takeLatest, put, call, select} from 'redux-saga/effects';
import {fetchTrendingNextPageAsync} from '../actions/gif.actions';
import {trending} from '../services/giphy.service';
import {GiphyCollectionResponse} from '../models/giphy/GiphyCollectionResponse';
import {RootState} from '../reducers/rootReducer';
import {Pagination} from '../models/Giphy';

export function* fetchTrendingGifs(action: ReturnType<typeof fetchTrendingNextPageAsync.request>): Generator {
  try {
    const pagination: Pagination = yield select((state: RootState) => state.gif.pagination);
    const params = {
      limit: 25,
      offset: pagination ? pagination.offset + pagination.count : 0,
    };

    const response: Response = yield call(trending, params);
    const json: GiphyCollectionResponse = yield response.json();

    yield put(fetchTrendingNextPageAsync.success(json));
  } catch (e) {
    yield put(fetchTrendingNextPageAsync.failure(e));
  }
}

const watch = [
  takeLatest(fetchTrendingNextPageAsync.request, fetchTrendingGifs),
];

export default watch;
