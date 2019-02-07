import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { hot } from 'react-hot-loader/root';

import { history } from './store';
import Counter from './components/Counter';

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route path="/" exact render={() => <div>Main page</div>} />
      <Route path="/counter" component={Counter} />
    </div>
  </ConnectedRouter>
);

export default hot(Router);
