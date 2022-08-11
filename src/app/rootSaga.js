import { all } from 'redux-saga/effects';

import counterSaga from '../features/counter/counterSaga';

function* helloSaga() {
  console.log('Hello')
}

// saga đc khởi tạo sẽ chạy root saga lần đầu
export default function* rootSaga() {
  console.log('Root saga');
  // root saga này sẽ chạy 1 loạt các saga con
  // tuy nhiên dispatch action sẽ ko chạy lại saga này
  yield all([
    helloSaga(),
    counterSaga()
  ]);
}
