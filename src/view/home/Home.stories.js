//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Home from './Home';
import faker from 'faker';

const props: any = {
  username: faker.internet.userName(),
};

storiesOf('Sections', module).add('home', () => <Home {...props} />);
