//@flow
import { fromJS } from 'immutable';
import { prepareActions, prepareReducers } from '@core/utils/redux';
import { createSelector } from 'reselect';
import type { User } from '@core/constants/flowTypes';

export type StartupType = {
  isLoading: boolean,
  user: User,
};

export const initialState: StartupType = fromJS({
  isLoading: true,
  user: null,
});

export type StartupActions = {
  startupAction: any,
  startupSuccessAction: any,
};

export const actions: StartupActions = prepareActions({}, ['startup', true]);

export default prepareReducers(
  {
    [actions.startupAction]: state => state.set('isLoading', true),
    [actions.startupSuccessAction]: (state, { payload }) => state.set('isLoading', false).set('user', payload),
  },
  initialState
);

/* ------------- Selectors ------------- */
const selectStartup = state => state.get('startup');
export const selectors = {
  isLoading: () => createSelector(selectStartup, startup => startup.get('isLoading')),
  getUser: () => createSelector(selectStartup, startup => startup.get('user')),
};
