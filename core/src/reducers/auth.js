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

//prettier-ignore
export const actions: AuthActions = prepareActions({},
  ['auth', true]
);

//prettier-ignore
export default prepareReducers(
  {
    [actions.authAction]: state => state.set('isLoading', true),
    [actions.authSuccessAction]: (state, { payload }) => {
      return state
        .set('isLoading', false)
        .set('user', payload)
    }
  },
  initialState
);

/* ------------- Selectors ------------- */
const selectAuth = (state: AuthType) => state.get('auth');
export const selectors = {
  selectAuth,
  isLoading: () => createSelector(selectAuth, auth => auth.get('isLoading')),
  getUser: () => createSelector(selectAuth, auth => auth.get('user')),
};
