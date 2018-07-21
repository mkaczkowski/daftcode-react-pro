// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import loadableVisibility from 'react-loadable-visibility/loadable-components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Hero from './view/hero/Hero';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  const Contact = loadableVisibility(() => import('./view/contact/Contact'));
  const add = (a: number, b: number): number => a + b;
  console.log(add(1, 2));
  console.log(add(1, false));
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
