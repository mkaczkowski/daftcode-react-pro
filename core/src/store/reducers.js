import { combineReducers } from 'redux';
import locationReducer from './../reducers/location';

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers,
  });
};

export default makeRootReducer;
