import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
import { __DEV__ } from '@core/config';
import makeRootReducer from './reducers';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';

// import { updateLocation } from './location';
// import { BrowserRouter } from 'react-router-dom';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  const middlewares = [routerMiddleware(history), sagaMiddleware];

  // ======================================================
  // Store Enhancers
  const enhancers = [];
  let composeEnhancers = compose;

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  const store = createReduxStore(
    connectRouter(history)(makeRootReducer()),
    fromJS(initialState),
    composeEnhancers(applyMiddleware(...middlewares), ...enhancers)
  );

  // Extensions
  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // store.unsubscribeHistory = browserHistory.listen(updateLocation(store));
  store.history = history;
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(makeRootReducer(history)(reducers(store.injectedReducers)));
    });
  }

  return store;
};

export default createStore;
