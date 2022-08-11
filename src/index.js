import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/**
 * Effect: là JS object chứa thông tin cho saga middleware biét cần phải làm gì
 * Effect creator: function trả về 1 effect. vd: takeEvery, takeLatest
 *
 *
 * các effect creator (chỉ trả ra effect - giúp saga middleware biết phải làm gì, ng thực hiện là saga middleware)
 *
 * - takeEvery(pattern, saga, ...args): chạy saga vs các args mỗi khi có action pattern đc dispatch
 * - takeLatest(pattern, saga, ...args): chạy cuối cùng: khi có action pattern mới đc dispatch thì cancel cái trc đó
 * - takeLeading(pattern, saga, ...args): chạy đầu tiên: saga đầu tiên chưa xong thì cancel các action tiếp theo
 * - put(action): dispatch action từ saga
 * - call(fn, ...args): gọi fn
 * - all([...effects]): chạy tất cả các effect cùng lúc (như Promise.all)
 * - take(pattern)
 * - fork(fn, ...args)
 *     mô hình watcher worker, đợi dispatch action pattern thì sẽ thực hiện 1 task nào đó
 * - throttle(ms, pattern, saga, ...args): trong chu kỳ ms đảm bảo chỉ chạy tối đa 1 lần saga
 * - debounce(ms, pattern, saga, ...args): đợi ms nếu ko có dispatch action thì chạy saga
 * - retry(maxTries, delay, fn, ...args)
 */
