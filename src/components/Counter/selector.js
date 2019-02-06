import { createStructuredSelector } from 'reselect';

const counterSelector = (state) => state.counter;

export default createStructuredSelector({
  count: counterSelector,
});
