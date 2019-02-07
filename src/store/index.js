import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from '../reducers';

export const history = createBrowserHistory();

export default (predefinedState) =>
  createStore(
    createRootReducer(history),
    predefinedState,
    compose(
      applyMiddleware(routerMiddleware(history)),
      // eslint-disable-next-line no-undef,no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        // eslint-disable-next-line no-undef,no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
