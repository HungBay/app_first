
import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { GET_PRODUCT_REQUEST, CREATE_PRODUCT_REQUEST } from './contants';
import { getProductSuccess, getProductError } from './actions';

import request from 'utils/request';

export function* getProducts() {
  const requestURL = `https://reqres.in/api/users`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    //console.log(repos.data);
    yield delay(1000);
    yield put(getProductSuccess(repos.data));
  } catch (err) {
    yield put(getProductError(err));
  }
}

export function* createProduct({product}) {
  console.log('product', product);
  // const requestURL = `https://reqres.in/api/users`;

  // try {

  //   const repos = yield call(request, requestURL);
  //   yield delay(1000);
  //   yield put(getProductSuccess(repos.data));
  // } catch (err) {
  //   yield put(getProductError(err));
  // }
}

export default function* appData() {
  yield takeLatest(GET_PRODUCT_REQUEST, getProducts);
  yield takeLatest(CREATE_PRODUCT_REQUEST, createProduct);
}
