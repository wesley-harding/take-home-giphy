import {takeLatest, put, call} from 'redux-saga/effects';
import {fetchTrendingAsync} from '../actions/gif.actions';
import {trending} from '../services/giphy.service';
import {GiphyCollectionResponse} from '../models/giphy/GiphyCollectionResponse';

export function* fetchTrendingGifs(action: ReturnType<typeof fetchTrendingAsync.request>): Generator {
  try {
    const response: Response = yield call(trending, action.payload);
    const json: GiphyCollectionResponse = yield response.json();

    yield put(fetchTrendingAsync.success(json));
  } catch (e) {
    yield put(fetchTrendingAsync.failure(e));
  }
}

const watch = [
  takeLatest(fetchTrendingAsync.request, fetchTrendingGifs),
];

export default watch;
