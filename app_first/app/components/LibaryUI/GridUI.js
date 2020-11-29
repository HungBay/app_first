import React from 'react';
import { Grid } from '@material-ui/core';

function GridUI(props) {
  return <Grid {...props} />;
}

function GridContainer(props) {
  return <Grid container spacing={2} {...props} />;
}

function GridItem(props) {
  return <Grid item {...props} />;
}

export { GridUI, GridContainer, GridItem };
