import { connectRouter } from 'connected-react-router';

import { combineReducers } from 'redux';
import counter from './counter';
import info from './info';

const rootReducer = (history) =>
  combineReducers({
    counter,
    info,
    router: connectRouter(history),
  });

export default rootReducer;
