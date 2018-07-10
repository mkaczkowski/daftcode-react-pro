// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import Hero from './view/hero/Loadable';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import I18nProvider from '@core/providers/i18n';
import { createStructuredSelector } from 'reselect';
import Startup from '@core/ui/startup';
import './app.scss';

type AppProps = {
  store: Object,
  routes: Object,
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      props.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const App = (props: AppProps) => (
  <Startup>
    <I18nProvider language={'en'}>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/test">test</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/test" render={() => <div>test</div>} />
          <Route path="" render={() => <div>404</div>} />
        </Switch>
      </div>
    </I18nProvider>
  </Startup>
);

export default hot(module)(App);
