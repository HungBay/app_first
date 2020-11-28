
import produce from 'immer';
import { GET_PRODUCT_REQUEST, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from './contants';

export const initialState = {
  loading: false,
  error: null,
  products: [],
};

/* eslint-disable default-case, no-param-reassign */
const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PRODUCT_REQUEST:
        draft.loading = true;
        break;
      case GET_PRODUCT_SUCCESS:
        draft.loading = false;
        draft.products = action.products;
        break;
      case GET_PRODUCT_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default productReducer;
