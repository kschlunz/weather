import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {
  terms: [],
}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
);

export default store;
