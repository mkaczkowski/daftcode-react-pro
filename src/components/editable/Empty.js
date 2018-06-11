// @flow
import React from 'react';
import { DataContext } from '../../providers/data';

export type EmptyItemProps = {
  children: any,
};

class Empty extends React.PureComponent<EmptyItemProps> {
  render() {
    return (
      <DataContext.Consumer>
        {context => {
          const combinedProps = {
            ...this.props,
            onAdd: params => context.add({ ...params }),
          };
          // return <Component {...combinedProps} />;
          return this.props.children(combinedProps);
        }}
      </DataContext.Consumer>
    );
  }
}

export default Empty;
