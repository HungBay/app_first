/**
 *
 * DialogUi
 *
 */

import Dialog from '@material-ui/core/Dialog';
import React, { memo } from 'react';

import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function DialogUi(props) {
  return <Dialog TransitionComponent={Transition} keepMounted {...props} />;
}

DialogUi.propTypes = {};

export default memo(DialogUi);
