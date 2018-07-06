import React from 'react';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '@components/theme/commons.scss';

setOptions({
  name: 'Dev7-UI',
  url: '#',
  addonPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

// const componentsReq = require.context("../../lpify-components/", true, /.stories.js$/);
const commonReq = require.context('../../lpify-components/src/common', true, /.stories.js$/);
const formReq = require.context('../../lpify-components/src/form', true, /.stories.js$/);
const stepsReq = require.context('../../lpify-components/src/steps', true, /.stories.js$/);
const sectionsReq = require.context('../../lpify-components/src/sections', true, /.stories.js$/);
const playgroundReq = require.context('../../lpify-components/src/playground', true, /.stories.js$/);
const productsReq = require.context('../../products/pickaflick', true, /.stories.js$/);
// const req = require.context("../src/products/linguotica/landings/ldc/register/sections/msisdn", true, /.stories.js$/);

configure(() => {
  commonReq.keys().forEach(filename => commonReq(filename));
  formReq.keys().forEach(filename => formReq(filename));
  stepsReq.keys().forEach(filename => stepsReq(filename));
  sectionsReq.keys().forEach(filename => sectionsReq(filename));
  playgroundReq.keys().forEach(filename => playgroundReq(filename));
  productsReq.keys().forEach(filename => productsReq(filename));
}, module);
