// @flow
/**
 * Box with "add" action displayed when no items available wihtin a section
 */
import React from 'react';
import Empty from '../../components/editable/Empty';
import EmptyItemPreview from '../../components/ItemPreview/EmptyItemPreview';
import ActionButtons from '../../components/actionButtons/ActionButtons';

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
