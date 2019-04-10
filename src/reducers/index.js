import { connectRouter } from 'connected-react-router';

import { combineReducers } from 'redux';
import counter from './counter';
import config from './config';
import predicates from './predicates';
import domain from './domain';

const rootReducer = (history) =>
  combineReducers({
    counter,
    config,
    predicates,
    domain,
    router: connectRouter(history),
  });

export default rootReducer;
