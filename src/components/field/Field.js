import styled from 'styled-components';
import as from './../utils/as';
import Base from '../base';

const Field = styled(Base)`
  display: flex;
  flex-direction: column;
  flex: 1;
  label {
    padding-bottom: 0.5em;
  }
  > *:not(label):not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export default as('div')(Field);
