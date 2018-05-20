import styled from 'styled-components';
import { ActionsBox } from '../actionButtons/ActionButtons';

const EmptyItemPreview = styled.div`
  position: relative;
  padding: 2.4rem 1rem;
  
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  
  > ${ActionsBox}{
    background-color: transparent;  
  }
`;

export default EmptyItemPreview;
