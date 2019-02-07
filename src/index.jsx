import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import Router from './router';
import configureStore, { history } from './store';

const store = configureStore({});

const renderApp = (Component) =>
  render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>,
    document.querySelector('#root'),
  );

renderApp(Router);

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp(Router);
  });
}
