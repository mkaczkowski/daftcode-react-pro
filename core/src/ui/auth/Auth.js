// @flow
import * as React from 'react';
import type { ActionType } from '@core/constants/flowTypes';

export type AuthProps = {
  children?: any,
  isLoading?: boolean,
  actions?: {
    authAction: ActionType,
  },
};

class Auth extends React.Component<AuthProps> {
  componentDidMount() {
    const { actions } = this.props;
    actions && actions.authAction();
  }

  render() {
    return this.props.isLoading ? 'Loading....' : this.props.children;
  }
}

export default Auth;
