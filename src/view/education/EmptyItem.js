// @flow
import React from 'react';
import Empty from '../../components/editable/Empty';
import EmptyItemPreview from '../../components/ItemPreview/EmptyItemPreview';
import EmptyActionButtons from '../../components/actionButtons/EmptyActionButtons';

const EmptyItem = (props:any) => (
  <Empty {...props}>
    {context => (
      <EmptyItemPreview>
        <EmptyActionButtons {...context}/>
      </EmptyItemPreview>
    )}
  </Empty>
);

export default EmptyItem;
