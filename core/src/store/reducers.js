import { combineReducers } from 'redux-immutable';

export default function createReducer(injectedReducers) {
  return combineReducers({
    // startup: startupReducer,
    ...injectedReducers,
  });
}
