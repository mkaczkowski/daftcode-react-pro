import React from 'react';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'React-Pro',
  url: '#',
  addonPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

const req = require.context('../src', true, /.stories.js$/);
// const req = require.context("../src/products/linguotica/landings/ldc/register/sections/msisdn", true, /.stories.js$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
