import {all} from 'redux-saga/effects';

import gifSagas from './gifList.sagas';

export default function* index() {
  yield all([
    ...gifSagas,
    // Add sagas here
  ]);
}
