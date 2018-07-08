// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Hero from './view/hero/Hero';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './view/contact/Contact';

const App = () => {
  // const CV = loadableVisibility(() => import('./view/cv/index'));
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Header stage={1}>
          <Header.Logo />
          <Header.Menu />
        </Header>
        <Hero />
        <Contact />
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default hot(module)(App);
