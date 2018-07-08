//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './components/app/header/Header';
import Hero from './view/hero/Hero';
import Contact from './view/contact/Contact';
import Footer from './components/app/footer/Footer';

storiesOf('App|Index', module).add('basic', () => (
  <div>
    <Header stage={1}>
      <Header.Logo />
      <Header.Menu />
    </Header>
    <Hero />
    <Contact />
    <Footer />
  </div>
));
