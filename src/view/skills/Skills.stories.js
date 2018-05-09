//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Skills from './Skills';

const props: any = {};

storiesOf('Sections', module).add('skills', () => <Skills {...props} />);
