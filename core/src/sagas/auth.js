// @flow
import { put, takeLatest } from 'redux-saga/effects';
import { actions as authActions } from '@core/reducers/auth';
import type { User } from '@core/constants/flowTypes';

export function* auth(): any {
  try {
    const user: User = { id: '123' };
    yield put(authActions.authSuccessAction(user));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export default function* watchForAuth(): any {
  yield takeLatest(authActions.authAction, auth);
}
