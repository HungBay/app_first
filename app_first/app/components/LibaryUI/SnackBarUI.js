import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/core/Alert';
import Slide from '@material-ui/core/Slide';

const vertical = 'top';
const horizontal = 'right';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function SnackBarUI({ open: openUI, ...props }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (openUI) {
      const res = setOpen(openUI);
      return () => {
        res;
      };
    }
  }, [openUI]);

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      TransitionComponent={Transition}
      keepMounted
      open={open}
      // onClose={false}
      // autoHideDuration={3000}
      key={vertical + horizontal}
      {...props}
    />
  );
}

export default SnackBarUI;
