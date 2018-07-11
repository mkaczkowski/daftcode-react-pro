// @flow
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { selectors as authSelectors } from '@core/reducers/auth';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  user: authSelectors.getUser(),
});

const withConnect = connect(mapStateToProps, null);

export default withConnect(PrivateRoute);
