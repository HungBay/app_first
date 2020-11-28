import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga, { createProduct } from './saga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getProductRequest, createProductRequest } from './actions';
import { makeSelectProducts, makeSelectLoading } from './selectors';
import { createStructuredSelector } from 'reselect';
import UserProfile from './userProfile';
import CreateProduct from './CreateProduct';

const key = 'product';

const Products = ({ onLoad, products, loading, createProduct }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoad();
  }, []);
  const [onShowForm, setOnShowForm] = useState(false);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <div className="pull-right">
        <button
          onClick={() => setOnShowForm(!onShowForm)}
          className="btn btn-primary"
        >
          +Add
        </button>
      </div>

      <div className="product__create">
        <CreateProduct onShowForm={onShowForm} createProduct={createProduct} />
      </div>
      {products
        ? products.map(({ id, email, first_name, last_name, avatar }) => (
            <UserProfile
              key={id}
              id={id}
              email={email}
              first_name={first_name}
              last_name={last_name}
              avatar={avatar}
            />
          ))
        : ''}
    </div>
  );
};

Products.propTypes = {};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(getProductRequest());
    },
    createProduct: product => {
      dispatch(createProductRequest(product));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Products);
