import { connectRouter } from 'connected-react-router';

import { combineReducers } from 'redux';
import counter from './counter';
import config from './config';
import predicates from './predicates';

const rootReducer = (history) =>
  combineReducers({
    counter,
    config,
    predicates,
    router: connectRouter(history),
  });

export default rootReducer;
