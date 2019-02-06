import { createReducer } from '../../utils';
import { actionTypes } from '../../actions';

export default createReducer(10, {
  [actionTypes.COUNTER.DECREASE]: (state) => state - 1,
  [actionTypes.COUNTER.INCREASE]: (state) => state + 1,
});
