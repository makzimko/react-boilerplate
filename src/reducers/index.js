import { combineReducers } from '../utils';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
