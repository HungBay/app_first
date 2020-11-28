import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const Main = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

Main.propTypes = {
  // Children: PropTypes.any,
};

export default Main;
