import 'regenerator-runtime/runtime';
import { testSaga } from 'redux-saga-test-plan';
import watchForAuth, { auth } from './auth';
import { actions as authActions } from '@core/reducers/auth';

it('watchForAuth', () => {
  testSaga(watchForAuth)
    .next()
    .takeLatest(authActions.authAction, auth)
    .next()
    .isDone();
});

it('auth', () => {
  testSaga(auth)
    // .next({ id: '123' })
    .next()
    .put(authActions.authSuccessAction({ id: '123' }))
    .next()
    .isDone();
});
