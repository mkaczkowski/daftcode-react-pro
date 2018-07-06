//@flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import type { NavigationContextProps } from '@core/provider/navigation';

const props: NavigationContextProps = {
  goToPrevStep: action('goToPrevStep'),
  goToStep: action('goToStep'),
};

export default props;
