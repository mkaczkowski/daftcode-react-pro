//@flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import type { SalesContextProps } from '@core/provider/sales';

const props: SalesContextProps = {
  loadSales: action('loadSales'),
  initSales: action('initSales'),
  runSales: action('runSales'),
  dispatchFinish: action('dispatchFinish'),
};

export default props;
