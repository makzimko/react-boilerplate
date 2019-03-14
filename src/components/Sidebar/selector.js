import { createStructuredSelector, createSelector } from 'reselect';
import { get } from 'lodash';

import configSelector from '../../selectors/config';

const EMPTY_ITEMS = [];

const itemsSelector = createSelector(
  configSelector('leftMenu'),
  (config) => get(config, 'items', EMPTY_ITEMS),
);

const selector = createStructuredSelector({
  items: itemsSelector,
});

export default selector;
