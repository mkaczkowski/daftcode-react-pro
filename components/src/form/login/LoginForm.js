//@flow
import * as React from 'react';
import { ERROR_CODES } from '@core/constants/errorCodes';
import FormField from '@components/form/inputs/FormField';
import PasswordInput from '@components/form/inputs/password/Password';
import EmailInput from '@components/form/inputs/email/Email';
import Formify from '@core/utils/ui/formify';
import Button from '@components/common/button/Button';
import DisplayFormikState from '@components/form/helpers/DisplayFormikState';
import INPUTS from '@components/constants/inputs';
import './LoginForm.scss';

export const inputs = {
  [INPUTS.EMAIL]: EmailInput({
    isRequired: ERROR_CODES.EMAIL_IS_REQUIRED,
  }),
  [INPUTS.PASSWORD]: PasswordInput({
    isRequired: ERROR_CODES.PASSWORD_IS_REQUIRED,
    hasMinChars: ERROR_CODES.PASSWORD_TOO_SHORT,
  }),
};

const LoginForm = ({ render, ...props }: any) => (
  <Formify {...props}>
    {({ onFormSubmit, inputProps, ...formifyProps }: any) => (
      <form onSubmit={onFormSubmit}>
        <FormField name={INPUTS.EMAIL} {...inputProps} />
        <FormField name={INPUTS.PASSWORD} {...inputProps} />
        {render ? (
          render({ ...formifyProps })
        ) : (
          <div className="login-actions">
            <Button type="submit" primary loading={formifyProps.isSubmitting} disabled={formifyProps.isSubmitting}>
              {props.t('BUTTON.LOGIN')}
            </Button>
          </div>
        )}
        <DisplayFormikState {...formifyProps} />
        {/*<GlobalErrorField className={theme.invalid} />*/}
      </form>
    )}
  </Formify>
);

export default LoginForm;
