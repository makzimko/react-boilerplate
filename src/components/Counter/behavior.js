import { counter } from '../../actions';

const onDecreaseClick = (dispatch) => () => {
  dispatch(counter.decrease());
};

const onIncreaseClick = (dispatch) => () => {
  dispatch(counter.increase());
};

export default {
  onDecreaseClick,
  onIncreaseClick,
};
