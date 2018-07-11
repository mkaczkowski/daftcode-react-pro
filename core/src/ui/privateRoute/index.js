// @flow
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { selectors as startupSelectors } from '@core/reducers/startup';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  user: startupSelectors.getUser(),
});

const withConnect = connect(mapStateToProps, null);

export default withConnect(PrivateRoute);
