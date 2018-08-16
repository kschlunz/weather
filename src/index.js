// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise'
// import App from './App';
// import rootReducers from './reducers/rootReducers'
//
//
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(rootReducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import Store from './Store'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
