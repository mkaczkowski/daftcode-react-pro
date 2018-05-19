import styled from 'styled-components';
import as from './../utils/as';
import Base from '../base';

const Box = styled(Base)`
  padding: 0.7rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
`;

export default as('div')(Box);
