import actionTypes from '../actionTypes';

const decrease = () => ({
  type: actionTypes.COUNTER.DECREASE,
});

const increase = () => ({
  type: actionTypes.COUNTER.INCREASE,
});

export default {
  decrease,
  increase,
};
