// @flow
import { put, takeLatest } from 'redux-saga/effects';
import { actions as startupActions } from '@core/reducers/startup';
import type { User } from '@core/constants/flowTypes';

export function* startup(): any {
  try {
    const user: User = { id: '123' };
    yield put(startupActions.startupSuccessAction(user));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchForStartup(): any {
  yield takeLatest(startupActions.startupAction, startup);
}
