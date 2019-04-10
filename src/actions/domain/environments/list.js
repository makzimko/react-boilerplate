import axios from 'axios';

import actionTypes from '../../actionTypes';

const loadStart = () => ({
  type: actionTypes.DOMAIN.ENVIRONMENTS.LIST.LOADING.START,
});

const loadSuccess = (environmentsList) => ({
  type: actionTypes.DOMAIN.ENVIRONMENTS.LIST.LOADING.SUCCESS,
  payload: environmentsList,
});

const load = () => (dispatch) => {
  dispatch(loadStart());
  axios
    .get('/api/environments')
    .then((response) => dispatch(loadSuccess(response.data)));
};

const removeStart = () => ({
  type: actionTypes.DOMAIN.ENVIRONMENTS.LIST.REMOVE.START,
});

const remove = (id) => (disptach) => {
  disptach(removeStart());
  axios.delete(`/api/environments/${id}`).then(() => load()(disptach));
};

export default { load, remove };
