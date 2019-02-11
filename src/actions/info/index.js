import axios from 'axios';
import actionTypes from '../actionTypes';

const start = () => ({
  type: actionTypes.INFO.LOADING.START,
});

const success = (data) => ({
  type: actionTypes.INFO.LOADING.SUCCESS,
  payload: data,
});

const load = () => (dispatch) => {
  dispatch(start());
  axios.get('/api/config').then((response) => dispatch(success(response.data)));
};

const flush = () => ({
  type: actionTypes.INFO.FLUSH,
});

export default { load, flush };
