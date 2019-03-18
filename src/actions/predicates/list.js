import axios from 'axios';
import actionTypes from '../actionTypes';

const start = () => ({
  type: actionTypes.PREDICATES.LIST.LOADING.START,
});

const success = (data) => ({
  type: actionTypes.PREDICATES.LIST.LOADING.SUCCESS,
  payload: data,
});

const load = () => (dispatch) => {
  dispatch(start());
  axios
    .get('/api/predicates')
    .then((response) => dispatch(success(response.data)));
};

export default { load };
