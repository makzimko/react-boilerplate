import { connectRouter } from 'connected-react-router';

import { combineReducers } from 'redux';
import counter from './counter';
import config from './config';

const rootReducer = (history) =>
  combineReducers({
    counter,
    config,
    router: connectRouter(history),
  });

export default rootReducer;
