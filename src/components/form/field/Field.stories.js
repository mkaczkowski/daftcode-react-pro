//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Field from './Field';
import Box from '../../common/box/Box';
import Button from '../../common/button/Button';
import Input from '../../common/input/Input';
import Label from '../../common/label/Label';
import Group from '../../common/group/Group';

storiesOf('Common|Field', module)
  .add('basic', () => (
    <Field>
      <Label htmlFor="input1">Label</Label>
      <Input id="input1" placeholder="Input" />
    </Field>
  ))
  .add('group', () => (
    <Field>
      <Label htmlFor="input2">Label</Label>
      <Group>
        <Button>Button</Button>
        <Input id="input2" placeholder="Input" />
        <Button>Button</Button>
      </Group>
    </Field>
  ))
  .add('box', () => (
    <Field as={Box} padding={8} backgroundColor="rgba(0, 0, 0, 0.03)">
      <Label htmlFor="input3">Label</Label>
      <Input id="input3" placeholder="Input" />
    </Field>
  ));
