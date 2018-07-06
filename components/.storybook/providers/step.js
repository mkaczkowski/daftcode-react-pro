//@flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { t } from '@core/utils/i18n/translate';

const props = {
  t,
  onError: action('onError'),
  children: undefined,
};

export default props;
