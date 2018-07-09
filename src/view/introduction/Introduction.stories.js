//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Introduction from './Introduction';

const props: any = {};

storiesOf('Sections|Introduction', module).add('basic', () => <Introduction {...props} />);
