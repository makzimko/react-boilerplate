import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader/root';

import { compose } from 'redux';
import { history } from './store';
import Counter from './components/Counter';
import { Dashboard, Environments, Predicates } from './pages';
import { config } from './actions';
import { withBehavior } from './enhancers';

const propTypes = {
  loadConfig: PropTypes.func.isRequired,
};

const Router = ({ loadConfig }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      loadConfig();
    }
  }, []);

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/project/environments" exact component={Environments} />
        <Route path="/project/predicates" exact component={Predicates} />
        <Route path="/manage/counter" component={Counter} />
      </Switch>
    </ConnectedRouter>
  );
};

Router.propTypes = propTypes;

export default hot(
  compose(
    withBehavior({
      loadConfig: (dispatch) => () => {
        dispatch(config.load());
      },
    }),
  )(Router),
);
