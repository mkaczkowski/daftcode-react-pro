// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import I18nProvider from '@core/providers/i18n';
import LANGUAGES from '@core/constants/language';
import './App.scss';
import Hero from './view/hero/Hero';

const languages = [LANGUAGES.EN, LANGUAGES.PL];

const App = () => {
  return (
    <I18nProvider language="en">
      {/*<Header stage={1}>*/}
      {/*<Header.Logo />*/}
      {/*<Header.Menu />*/}
      {/*<Header.LanguageChooser languages={languages} />*/}
      {/*</Header>*/}
      <Hero />
      {/*<Contact />*/}
      {/*<Footer />*/}
    </I18nProvider>
  );
};

export default hot(module)(App);
