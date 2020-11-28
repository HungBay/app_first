import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProduct = state => state.product || initialState;

const makeSelectProducts = () =>
  createSelector(
    selectProduct,
    productState => productState.products,
  );
const makeSelectLoading = () =>
  createSelector(
    selectProduct,
    productState => productState.loading,
  );

export { selectProduct, makeSelectProducts, makeSelectLoading };
