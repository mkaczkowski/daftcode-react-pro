//@flow

import { fromJS } from 'immutable';
import { prepareActions, prepareReducers } from '@core/utils/redux';
import { createSelector } from 'reselect';

export type StartupType = {
  isLoading: boolean,
};

export const initialState: StartupType = fromJS({
  isLoading: true,
});

export type StartupActions = {
  startupAction: any,
  startupSuccessAction: any,
};

export const actions: StartupActions = prepareActions({}, ['startup', true]);

export default prepareReducers(
  {
    [actions.startupAction]: state => state.set('isLoading', true),
    [actions.startupSuccessAction]: state => state.set('isLoading', false),
  },
  initialState
);

/* ------------- Selectors ------------- */

const selectStartup = state => state.get('startup');
export const selectors = {
  isLoading: () => createSelector(selectStartup, startup => startup.get('isLoading')),
};
