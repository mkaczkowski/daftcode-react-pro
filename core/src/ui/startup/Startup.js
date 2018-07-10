// @flow
import * as React from 'react';
import type { ActionType } from '@core/constants/flowTypes';

export type StartupProps = {
  children: any,
  isLoading?: boolean,
  actions?: {
    startupAction: ActionType,
  },
};

class Startup extends React.Component<StartupProps> {
  componentDidMount() {
    const { actions } = this.props;
    actions && actions.startupAction();
  }

  render() {
    return this.props.isLoading ? 'Loading....' : this.props.children;
  }
}

export default Startup;
