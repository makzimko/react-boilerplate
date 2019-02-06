import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './app';
import store from './store';

const renderApp = (Component) =>
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.querySelector('#root'),
  );

renderApp(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp(App);
  });
}
