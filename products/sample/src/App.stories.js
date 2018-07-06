//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import LANGUAGES from '../../../core/src/constants/language';
import Hero from '../../src/view/hero/Hero';

const languages = [LANGUAGES.EN, LANGUAGES.PL];

storiesOf('App|Index', module).add('basic', () => (
  <div>
    <Hero />
  </div>
));
