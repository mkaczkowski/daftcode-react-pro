import React from 'react';

const Error = ({touched, errors, field}) => (touched[field] && errors[field] && <div>{errors[field]}</div>) || false; /**/

export default Error;
