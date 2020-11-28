import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_SUCCESS,
} from './contants';

export function getProductRequest() {
  return {
    type: GET_PRODUCT_REQUEST,
  };
}
export function getProductSuccess(products) {
  return {
    type: GET_PRODUCT_SUCCESS,
    products,
  };
}
export function getProductError() {
  return {
    type: GET_PRODUCT_ERROR,
    error,
  };
}

export function createProductRequest(product) {
  return {
    type: CREATE_PRODUCT_REQUEST,
    product,
  };
}
export function createProductSuccess(product) {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    product,
  };
}
export function createProductError() {
  return {
    type: CREATE_PRODUCT_ERROR,
    error,
  };
}
