import {all} from 'redux-saga/effects';

import gifSagas from './gif.sagas';
import gifListSagas from './gifList.sagas';

export default function* index() {
  yield all([
    ...gifSagas,
    ...gifListSagas,
  ]);
}
