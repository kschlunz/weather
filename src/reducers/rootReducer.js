import { combineReducers } from 'redux';
import reducers from './reducers'

const rootReducer = combineReducers({
  weather: reducers
});

export default rootReducer;
