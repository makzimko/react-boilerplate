import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader/root';

import { history } from './store';
import Counter from './components/Counter';
import Info from './components/Info';
import Navigation from './components/Navigation';

const Router = () => (
  <ConnectedRouter history={history}>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Info} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </ConnectedRouter>
);

export default hot(Router);
