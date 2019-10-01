import {all} from 'redux-saga/effects';

import gifSagas from './gif.sagas';

export default function* index() {
  yield all([
    ...gifSagas,
    // Add sagas here
  ]);
}
