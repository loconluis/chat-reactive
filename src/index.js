import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// redux components
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// component
import App from './components/App';
// reducer
import reducers from './reducers';
// sagas
import handleNewMessage from './sagas';
// websocket
import setUpSocket from './sockets';
// utils
import username from './utils/name';
// styles
import './index.css';

const sagaMiddleware = createSagaMiddleware();

// store from reduxx
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

const socket = setUpSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
