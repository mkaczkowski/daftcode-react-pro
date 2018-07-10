import { combineReducers } from 'redux-immutable';

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    ...asyncReducers,
  });
};

export default makeRootReducer;
