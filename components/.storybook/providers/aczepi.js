//@flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { generateUUID4 } from '@core/utils/uuid/uuid';
import type { AczepiContextProps } from '@core/provider/aczepi';

const props: AczepiContextProps = {
  lastResponse: {},
  api: {
    registerUser: action('registerUser'),
    registerPayment: action('registerPayment'),
    runStatusChecker: action('runStatusChecker'),
    stopStatusChecker: action('stopStatusChecker'),
  },
  session: {
    id: generateUUID4(),
    setData: action('setData'),
    getData: action('getData'),
    hasParam: action('hasParam'),
    getParam: action('getParam'),
  },
};

export default props;
