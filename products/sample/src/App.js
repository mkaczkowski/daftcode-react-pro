// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import I18nProvider from '@core/providers/i18n';
import './App.scss';
import Hero from './view/hero/Loadable';
import { shouldUpdate } from 'recompose';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Startup from '@core/ui/startup';
import { ConnectedRouter } from 'connected-react-router/immutable';

type AppProps = {
  store: Object,
  routes: Object,
};

const App = (props: AppProps) => (
  <Provider store={props.store}>
    <I18nProvider language="en">
      <Startup>
        <ConnectedRouter history={props.store.history} location={'/'} action={''}>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Hero} />
              {/*<Route path="" component={NotFoundPage} />*/}
            </Switch>
          </React.Fragment>
        </ConnectedRouter>
      </Startup>
    </I18nProvider>
  </Provider>
);

export default hot(module)(App);
