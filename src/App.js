// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import loadableVisibility from 'react-loadable-visibility/loadable-components';
import I18nProvider from './providers/i18n';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Hero from './view/hero/Hero';
import Header from './components/header/Header';
import LANGUAGES from './constants/language';
import Footer from './components/footer/Footer';
import Contact from './view/contact/Contact';

const languages = [LANGUAGES.EN, LANGUAGES.PL];

const App = () => {
  const CV = loadableVisibility(() => import('./view/cv/index'));
  return (
    <ThemeProvider theme={theme}>
      <I18nProvider language="en">
        <Header stage={1}>
          <Header.Logo />
          <Header.Menu />
          <Header.LanguageChooser languages={languages} />
        </Header>
        <Hero />
        <CV/>
        <Contact />
        <Footer />
      </I18nProvider>
    </ThemeProvider>
  );
};

export default hot(module)(App);
