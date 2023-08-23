import { put, takeLatest } from 'redux-saga/effects';
import { SET_VALUE } from './actions';

function* handleSetValue(action) {
  // Perform any asynchronous tasks here if needed
}

function* rootSaga() {
  yield takeLatest(SET_VALUE, handleSetValue);
}

export default rootSaga;
