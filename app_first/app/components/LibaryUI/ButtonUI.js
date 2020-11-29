import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

ButtonUI.propTypes = {};

function ButtonUI(props) {
  return <Button color="primary" {...props} />;
}

function BtSuccess(props) {
  return <Button variant="outlined" color="primary" {...props} />;
}

function BtError(props) {
  return <Button variant="outlined" color="secondary" {...props} />;
}

export { ButtonUI, BtSuccess, BtError };
