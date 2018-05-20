// @flow
/**
 * Box with "add" action displayed when no items available wihtin a section
 */
import React from 'react';
import Empty from '../editable/Empty';
import EmptyItemPreview from '../ItemPreview/EmptyItemPreview';
import ActionButtons from '../actionButtons/ActionButtons';

const EmptyItem = (props: any) => (
  <Empty {...props}>
    {context => (
      <EmptyItemPreview>
        <ActionButtons new={true} {...context} />
      </EmptyItemPreview>
    )}
  </Empty>
);

export default EmptyItem;
