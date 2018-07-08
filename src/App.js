// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Hero from './view/hero/Hero';
import Header from './components/app/header/Header';
import Footer from './components/app/footer/Footer';
import Contact from './view/contact/Contact';
import CONFIG from './config';
import { mail as mailIcon } from 'react-icons-kit/feather/mail';
import { linkedin as linkedinIcon } from 'react-icons-kit/feather/linkedin';
import { twitter as twitterIcon } from 'react-icons-kit/feather/twitter';
import { github as githubIcon } from 'react-icons-kit/feather/github';

export const App = () => {
  // const CV = loadableVisibility(() => import('./view/cv/index'));


  const socialIcons = [
    {href:`mailto:${CONFIG.email}?Subject=Hello`, icon:mailIcon},
    {href:CONFIG.linkedin, icon:linkedinIcon},
    {href:CONFIG.twitter, icon:twitterIcon},
    {href:CONFIG.github, icon:githubIcon},
  ];

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Header sections={['offer', 'skills', 'clients', 'contact']} />
        <Hero id="hero" />
        <div id="offer">introduction</div>
        <div id="skills">skills</div>
        <div id="clients">
          clients
          <div id="testimonials">testimonials</div>
        </div>
        <Contact id="contact" />
        <Footer icons={socialIcons} />
      </React.Fragment>
    </ThemeProvider>
  );
};


export default hot(module)(App);
