import { createStructuredSelector, createSelector } from 'reselect';
import { get } from 'lodash';

const EMPTY_ITEMS_LIST = [];

const loadingSelector = (state) =>
  get(state, ['domain', 'environments', 'list', 'loading'], false);

const loadedSelector = (state) =>
  get(state, ['domain', 'environments', 'list', 'loaded'], false);

const dataSelector = (state) =>
  get(state, ['domain', 'environments', 'list', 'data'], EMPTY_ITEMS_LIST);

const itemsSelector = createSelector(
  dataSelector,
  (state, { match = {} }) => match.url,
  (data, url) =>
    data.map((item) => ({
      ...item,
      editUrl: `${url}/edit/${item.id}`,
      removeUrl: `${url}/remove/${item.id}`,
    })),
);

export default createStructuredSelector({
  loading: loadingSelector,
  loaded: loadedSelector,
  items: itemsSelector,
});
