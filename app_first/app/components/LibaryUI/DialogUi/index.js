/**
 *
 * DialogUi
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function DialogUi() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

DialogUi.propTypes = {};

export default memo(DialogUi);
