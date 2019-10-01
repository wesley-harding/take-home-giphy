import {fetchGifByIdAsync} from '../actions/gif.actions';
import {getGifById} from '../services/giphy.service';
import {ItemResponse} from '../models/Giphy';
import {put, call, takeEvery} from '@redux-saga/core/effects';

export function* fetchGifById(action: ReturnType<typeof fetchGifByIdAsync.request>): Generator {
  try {
    const response: Response = yield call(getGifById, action.payload);
    const json: ItemResponse = yield response.json();

    yield put(fetchGifByIdAsync.success(json));
  } catch (e) {
    yield put(fetchGifByIdAsync.failure(e));
  }
}

const watch = [
  takeEvery(fetchGifByIdAsync.request, fetchGifById),
];

export default watch;
