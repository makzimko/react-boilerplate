import { createStructuredSelector, createSelector } from 'reselect';
import { get } from 'lodash';

const EMPTY_PREDICATES = {};
const EMPTY_PREDICATES_LIST = [];

const predicatesSelector = createSelector(
  (state) => get(state, 'predicates', EMPTY_PREDICATES),
  (predicates) => predicates,
);

const predicatesLoadedSelector = createSelector(
  predicatesSelector,
  (predicates) => predicates && predicates.loaded,
);

const predicatesLoadingSelector = createSelector(
  predicatesSelector,
  (predicates) => predicates && predicates.loading,
);

const predicatesItemsSelecor = createSelector(
  predicatesSelector,
  (predicates) => get(predicates, 'data', EMPTY_PREDICATES_LIST),
);

const selector = createStructuredSelector({
  loaded: predicatesLoadedSelector,
  loading: predicatesLoadingSelector,
  items: predicatesItemsSelecor,
});

export default selector;
