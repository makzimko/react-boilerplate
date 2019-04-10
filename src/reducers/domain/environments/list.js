import { createReducer } from '../../../utils';
import { actionTypes } from '../../../actions';

const initialState = {
  loaded: false,
  loading: false,
  data: [],
};

export default createReducer(initialState, {
  [actionTypes.DOMAIN.ENVIRONMENTS.LIST.LOADING.START]: (state) => ({
    ...state,
    loading: true,
  }),
  [actionTypes.DOMAIN.ENVIRONMENTS.LIST.LOADING.SUCCESS]: (
    state,
    { payload },
  ) => ({
    ...state,
    loading: false,
    loaded: true,
    data: payload,
  }),
});
