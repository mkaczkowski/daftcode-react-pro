// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import I18nProvider from '@core/providers/i18n';
import './App.scss';
import Hero from './view/hero/Loadable';
import { shouldUpdate } from 'recompose';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Startup from '@core/ui/startup';

type AppProps = {
  store: Object,
  routes: Object,
};

const App = (props: AppProps) => (
  <Provider store={props.store}>
    <I18nProvider language="en">
      <Startup>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Hero} />
              {/*<Route path="" component={NotFoundPage} />*/}
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Startup>
    </I18nProvider>
  </Provider>
);

const enchancer = shouldUpdate(() => false);

export default hot(module)(enchancer(App));
