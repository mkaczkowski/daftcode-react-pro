// @flow
import * as React from 'react';
import Button from '@components/common/button/Button';
import type { TranslateType } from '@core/constants/flowTypes';
import LoginForm, { inputs } from '@components/form/login/LoginForm';
import { ERROR_CODES } from '@core/constants/errorCodes';
import Logger from '@core/modules/logger';

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

class Login extends React.Component<LoginProps> {
  logger = Logger.getInstance('Login');

  onCall = (values: Object) => {
    this.logger.debug('submit', values);
    return true;
  };

  onSuccess = (result: any) => {
    this.logger.debug('success', result);
  };

  onError = (errorCallback: any, onErrorResult: any) => {
    this.logger.debug('onError', onErrorResult);
    if (onErrorResult === false) return;
    errorCallback({
      error: ERROR_CODES.UNEXPECTED_ERROR,
      ...onErrorResult,
    });
  };
  render() {
    const { t } = this.props;
    return (
      <div className="step">
        <h2 className="heading">{t('REGISTER.EMAIL.HEADING')}</h2>
        <div className="form">
          <h2 className="title">{t('REGISTER.EMAIL.FORM.TITLE')}</h2>
          <h3 className="description">{t('REGISTER.EMAIL.FORM.DESCRIPTION')}</h3>
          <LoginForm
            {...this.props}
            inputs={inputs}
            onCall={this.onCall}
            onSuccess={this.onSuccess}
            onError={this.onError}
            render={LoginExtension}
          />
        </div>
      </div>
    );
  }
}

export default Login;
