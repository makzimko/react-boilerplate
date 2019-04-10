import { createStructuredSelector, createSelector } from 'reselect';
import { get, map, flatten } from 'lodash';

import configSelector from '../../selectors/config';

const EMPTY_SECTIONS_LIST = [];

const itemsSelector = createSelector(
  configSelector('leftMenu'),
  (config) => get(config, 'sections', EMPTY_SECTIONS_LIST),
);

const activeItemSelector = createSelector(
  configSelector('leftMenu'),
  (state, { match = {} }) => match.url,
  ({ sections = [] }, url) => {
    const items = flatten(map(sections, 'items'));
    const activeItem = items.find((item) => item.url === url);
    return get(activeItem, 'id', '');
  },
);

const selector = createStructuredSelector({
  sections: itemsSelector,
  activeItem: activeItemSelector,
});

export default selector;
