import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import chat from './reducers';
import { addUser } from './actions';
import setUpSocket from './sockets';

const store = createStore(chat);
store.dispatch(addUser('Me'));


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
