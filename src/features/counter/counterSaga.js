import { takeEvery } from 'redux-saga/effects';

// nhận vào action { type, payload }
export function log(action) {
  console.log('Log', action);
}

export default function* counterSaga() {
  console.log('counter saga');

  // effect: mỗi lần có action đc dispatch (*) thì gọi hàm log
  yield takeEvery('*', log);
  // counterSage chạy 1 lần nhưng takeEvery liên tục lắng nghe
}
