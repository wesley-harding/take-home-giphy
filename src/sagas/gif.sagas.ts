import {takeLatest, put, call, select} from 'redux-saga/effects';
import {fetchSearchNextPageAsync, fetchTrendingNextPageAsync} from '../actions/gif.actions';
import {search, trending} from '../services/giphy.service';
import {RootState} from '../reducers/rootReducer';
import {CollectionResponse, RequestParameters} from '../models/Giphy';

const selectOffsetParams = (state: RootState) => {
  const pagination = state.gif.pagination;

  return {
    limit: 25,
    offset: pagination ? pagination.offset + pagination.count : 0,
  };
};

export function* fetchTrendingGifs(action: ReturnType<typeof fetchTrendingNextPageAsync.request>): Generator {
  try {
    const params: Partial<RequestParameters> = yield select(selectOffsetParams);

    const response: Response = yield call(trending, params);
    const json: CollectionResponse = yield response.json();

    yield put(fetchTrendingNextPageAsync.success(json));
  } catch (e) {
    yield put(fetchTrendingNextPageAsync.failure(e));
  }
}

export function* fetchSearchGifs(action: ReturnType<typeof fetchSearchNextPageAsync.request>): Generator {
  try {
    const params: Partial<RequestParameters> = yield select(selectOffsetParams);
    const paramsWithQuery = { ...params, q: action.payload };

    const response: Response = yield call(search, paramsWithQuery);
    const json: CollectionResponse = yield response.json();

    yield put(fetchSearchNextPageAsync.success(json));
  } catch (e) {
    yield put(fetchSearchNextPageAsync.failure(e));
  }
}

const watch = [
  takeLatest(fetchTrendingNextPageAsync.request, fetchTrendingGifs),
  takeLatest(fetchSearchNextPageAsync.request, fetchSearchGifs),
];

export default watch;
