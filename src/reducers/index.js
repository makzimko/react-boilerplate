import { connectRouter } from 'connected-react-router';

import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = (history) =>
  combineReducers({
    counter,
    router: connectRouter(history),
  });

export default rootReducer;
