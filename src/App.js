// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import loadableVisibility from 'react-loadable-visibility/loadable-components';
import Home from './view/home/Home';
import I18nProvider from './providers/i18n';
import { Header } from './components/header';

const App = () => {
  const Contact = loadableVisibility(() => import('./view/contact/Contact'));
  return (
    <I18nProvider language="en">
      <Header stage={1}>
        <Header.Logo />
        <Header.Menu />
        <Header.LanguageChooser />
      </Header>
      <Home username="DaftCoder" />
      <Contact />
    </I18nProvider>
  );
};
export default hot(module)(App);
