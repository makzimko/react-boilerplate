import React from 'react';
import { hot } from 'react-hot-loader/root';

import Counter from './components/Counter';

const App = () => (
  <div>
    <span>Hello world!</span>
    <div>
      <Counter />
    </div>
  </div>
);

export default hot(App);
