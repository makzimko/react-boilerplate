import { createStructuredSelector } from 'reselect';

const infoSelector = (state) => state.info;

export default createStructuredSelector({
  info: infoSelector,
});
