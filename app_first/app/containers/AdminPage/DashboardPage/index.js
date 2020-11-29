/**
 *
 * DashboardPage
 *
 */

import { Button } from '@material-ui/core';
import SnackBarUI from 'components/LibaryUI/snackBarUI';
import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import makeSelectDashboardPage from './selectors';

export function DashboardPage(props) {
  useInjectReducer({ key: 'dashboardPage', reducer });
  useInjectSaga({ key: 'dashboardPage', saga });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <FormattedMessage {...messages.header} />
      <FormattedMessage {...messages.footer} /> */}
      Home
      {/* <Button onClick={handleClickOpen}>Click me!</Button> */}
      {/* <SnackBarUI open={open} /> */}
      {/* <DialogUi open={open} onClose={handleClickClose}>
        <div>1</div>
      </DialogUi> */}
    </div>
  );
}

DashboardPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardPage: makeSelectDashboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DashboardPage);
