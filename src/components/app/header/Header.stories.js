//@flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

const props: any = {
  sections:[
    "sample1",
    "sample2",
    "sample3",
  ]
};

storiesOf('Components|Header', module).add('basic', () => <Header {...props} />);
