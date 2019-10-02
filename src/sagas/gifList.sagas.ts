import {takeLatest, put, call, select} from 'redux-saga/effects';
import {fetchSearchNextPageAsync, fetchTrendingNextPageAsync} from '../actions/gifList.actions';
import {search, trending} from '../services/giphy.service';
import {RootState} from '../reducers/rootReducer';
import {CollectionResponse, RequestParameters} from '../models/Giphy';

const selectOffsetParams = (state: RootState) => {
  const pagination = state.gifList.pagination;

  return {
    limit: 25,
    offset: pagination ? pagination.offset + pagination.count : 0,
  };
};

export function* fetchTrendingGifs(action: ReturnType<typeof fetchTrendingNextPageAsync.request>): Generator {
  try {
    // @ts-ignore: Type 'unknown' is not assignable
    const params: Partial<RequestParameters> = yield select(selectOffsetParams);

    // @ts-ignore: Type 'unknown' is not assignable
    const response: Response = yield call(trending, params);
    // @ts-ignore: Type 'unknown' is not assignable
    const json: CollectionResponse = yield response.json();

    yield put(fetchTrendingNextPageAsync.success(json));
  } catch (e) {
    yield put(fetchTrendingNextPageAsync.failure(e));
  }
}

export function* fetchSearchGifs(action: ReturnType<typeof fetchSearchNextPageAsync.request>): Generator {
  try {
    // @ts-ignore: Type 'unknown' is not assignable
    const params: Partial<RequestParameters> = yield select(selectOffsetParams);
    const paramsWithQuery = { ...params, q: action.payload };

    // @ts-ignore: Type 'unknown' is not assignable
    const response: Response = yield call(search, paramsWithQuery);
    // @ts-ignore: Type 'unknown' is not assignable
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
