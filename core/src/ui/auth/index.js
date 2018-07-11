// @flow
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Auth from './Auth';
import injectReducer from '@core/store/utils/injectReducer';
import injectSaga from '@core/store/utils/injectSaga';
import reducer, { actions as authActions, selectors as authSelectors } from '@core/reducers/auth';
import saga from '@core/sagas/auth';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  isLoading: authSelectors.isLoading(),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      authAction: authActions.authAction,
    },
    dispatch
  ),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(withReducer, withSaga, withConnect)(Auth);
