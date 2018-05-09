// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import loadableVisibility from 'react-loadable-visibility/loadable-components';
import Home from './view/home/Home';
import I18nProvider from './providers/i18n';
import { Header } from './components/header';
import Introduction from './view/introduction/Introduction';
import Skills from './view/skills/Skills';
import Clients from './view/clients/Clients';
import { ThemeProvider } from 'emotion';
import theme from './styles/theme';
import Hero from './view/hero/Hero';

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
      <Hero />
      <Introduction />
      <Skills />
      <Clients />
      <Contact />
    </I18nProvider>
  );
};

export default hot(module)(App);
