import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader/root';

import { history } from './store';
import Counter from './components/Counter';
import { Dashboard } from './pages';

const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </ConnectedRouter>
);

export default hot(Router);
