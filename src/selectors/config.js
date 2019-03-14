import { createSelector } from 'reselect';
import { get } from 'lodash';

const EMPTY_CONFIG = {};

const configSelector = (configName) =>
  createSelector(
    (state) => get(state, 'config'),
    ({ loaded, data }) => {
      if (loaded) {
        return get(data, configName, EMPTY_CONFIG);
      }
      return EMPTY_CONFIG;
    },
  );

export default configSelector;
