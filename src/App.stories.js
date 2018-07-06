//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import LANGUAGES from './constants/language';
import Hero from './view/hero/Hero';

const languages = [LANGUAGES.EN, LANGUAGES.PL];

storiesOf('App|Index', module).add('basic', () => (
  <div>
    <Hero />
  </div>
));
