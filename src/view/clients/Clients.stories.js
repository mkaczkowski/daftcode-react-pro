//@flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Clients from './Clients';

const props: any = {};

storiesOf('Sections', module).add('clients', () => <Clients {...props} />);
