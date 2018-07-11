//@flow
import { fromJS } from 'immutable';
import { prepareActions, prepareReducers } from '@core/utils/redux';
import { createSelector } from 'reselect';
import type { User } from '@core/constants/flowTypes';

export type AuthType = {
  isLoading: boolean,
  user: User,
};

export const initialState: AuthType = fromJS({
  isLoading: true,
  user: null,
});

export type AuthActions = {
  authAction: any,
  authSuccessAction: any,
};

export const actions: AuthActions = prepareActions({}, ['auth', true]);

export default prepareReducers(
  {
    [actions.authAction]: state => state.set('isLoading', true),
    [actions.authSuccessAction]: (state, { payload }) => state.set('isLoading', false).set('user', payload),
  },
  initialState
);

/* ------------- Selectors ------------- */
const selectAuth = state => state.get('auth');
export const selectors = {
  isLoading: () => createSelector(selectAuth, auth => auth.get('isLoading')),
  getUser: () => createSelector(selectAuth, auth => auth.get('user')),
};
