import * as React from 'react';
import { ERROR_MESSAGES } from '@core/constants/errorCodes';
import { Field } from 'formik';
import { T } from '@core/lib/lioness/index';
import { INPUTS } from '@core/constants/inputs';

const GlobalErrorField = ({ t, className, name = INPUTS.GLOBAL }) => (
  <Field name={name}>
    {({ form: { errors } }) =>
      errors[name] ? <T className={className} message={ERROR_MESSAGES[errors[name]]} /> : null
    }
  </Field>
);

export default GlobalErrorField;
