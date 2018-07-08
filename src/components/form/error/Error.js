import React from 'react';
import styled from 'styled-components';

export const ErrorStyled = styled.div`
  color: #ff3d44;
`;

const Error = ({ touched, errors, field }) =>
  (touched[field] && errors[field] && <ErrorStyled>{errors[field]}</ErrorStyled>) || false; /**/

export default Error;
