import axios from 'axios';
import actionTypes from '../actionTypes';

const start = () => ({
  type: actionTypes.SIDEBAR.LOADING.START,
});

const success = (data) => ({
  type: actionTypes.SIDEBAR.LOADING.SUCCESS,
  payload: data,
});

const load = () => (dispatch) => {
  dispatch(start());
  axios.get('/api/config').then((response) => dispatch(success(response.data)));
};

export default { load };
