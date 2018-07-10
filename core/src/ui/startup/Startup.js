// @flow
import * as React from 'react';
import Logger from '@core/modules/logger';
import type { ActionType } from '@core/constants/flowTypes';

export type StartupProps = {
  children: any,
  isLoading?: boolean,
  actions?: {
    startupAction: ActionType,
  },
};

class Startup extends React.PureComponent<StartupProps> {
  logger = Logger.getInstance('OfferStep');

  componentDidMount() {
    const { actions } = this.props;
    actions && actions.startupAction();
  }

  render() {
    return this.props.isLoading ? 'Loading....' : this.props.children;
  }
}

export default Startup;
