//@flow

import { fromJS } from 'immutable';
import { prepareActions, prepareReducers } from '@core/utils/redux';

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

export const selectors = {
  isLoading: ({ startup }: any): boolean => startup.get('isLoading'),
};
