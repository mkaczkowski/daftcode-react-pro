import React from 'react';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '@components/theme/commons.scss';

setOptions({
  name: 'APP-UI',
  url: '#',
  addonPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

const commonReq = require.context('../../components/src', true, /.stories.js$/);

configure(() => {
  commonReq.keys().forEach(filename => commonReq(filename));
}, module);
