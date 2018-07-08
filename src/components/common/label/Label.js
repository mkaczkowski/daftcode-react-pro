import styled from 'styled-components';
import as from './../../utils/as';
import Base from '../base';

const Label = styled(Base)`
  display: inline-block;
  font-weight: 600;
`;

export default as('label')(Label);
