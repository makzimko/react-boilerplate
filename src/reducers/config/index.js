import { createReducer } from '../../utils';
import { actionTypes } from '../../actions';

const initialState = {
  loaded: false,
  loading: false,
};

export default createReducer(initialState, {
  [actionTypes.CONFIG.LOADING.START]: (state) => ({
    ...state,
    loading: true,
    loaded: false,
  }),
  [actionTypes.CONFIG.LOADING.SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    data: payload,
  }),
});
