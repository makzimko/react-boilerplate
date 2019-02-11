import { createReducer } from '../../utils';
import { actionTypes } from '../../actions';

const initialState = {
  loaded: false,
  loading: false,
};

export default createReducer(initialState, {
  [actionTypes.INFO.LOADING.START]: (state) => ({
    ...state,
    loading: true,
    loaded: false,
  }),
  [actionTypes.INFO.LOADING.SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    data: payload,
  }),
  [actionTypes.INFO.FLUSH]: (state) => ({
    ...state,
    loaded: false,
    data: undefined,
  }),
});
