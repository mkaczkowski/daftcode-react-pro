// @flow
import { put, takeLatest } from 'redux-saga/effects';
import { actions as startupActions } from '@core/reducers/startup';

export function* startup(): any {
  try {
    yield put(startupActions.startupSuccessAction());
  } catch (error) {
    console.log(error);
  }
}

export default function* watchForStartup(): any {
  yield takeLatest(startupActions.startupAction, startup);
}
