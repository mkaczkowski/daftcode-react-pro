// @flow
import * as React from 'react';
import Button from '@components/common/button/Button';
import type { TranslateType } from '@core/constants/flowTypes';
import LoginForm from '@components/form/login/LoginForm';

export type LoginProps = {
  t: TranslateType,
  isSubmitting?: boolean,
};

const LoginExtension = ({ t, isSubmitting }: LoginProps) => (
  <React.Fragment>
    <div>
      <Button type="submit" info loading={isSubmitting} disabled={isSubmitting}>
        {t('BUTTON.LOGIN')}
      </Button>
    </div>
    <div className="terms">
      <a href={`/terms`}>{t('FIELD.TERMS_OF_USE.LABEL')}</a>
    </div>
  </React.Fragment>
);

const Login = (props: LoginProps) => {
  const { t } = props;
  return (
    <div className="step">
      <h2 className="heading">{t('REGISTER.EMAIL.HEADING')}</h2>
      <div className="form">
        <h2 className="title">{t('REGISTER.EMAIL.FORM.TITLE')}</h2>
        <h3 className="description">{t('REGISTER.EMAIL.FORM.DESCRIPTION')}</h3>
        <LoginForm {...props} render={LoginExtension} />
      </div>
    </div>
  );
};

export default Login;
