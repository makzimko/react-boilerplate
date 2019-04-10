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

const remove = (id) => (dispatch) => {
  dispatch(removeStart());
  axios.delete(`/api/environments/${id}`).then(() => load()(dispatch));
};

const createStart = ({ name, description }) => ({
  type: actionTypes.DOMAIN.ENVIRONMENTS.LIST.CREATE.CREATE,
  payload: {
    name,
    description,
  },
});

const createSuccess = (id) => ({
  type: actionTypes.DOMAIN.ENVIRONMENTS.LIST.CREATE.SUCCESS,
  payload: id,
});

const create = ({ name, description }) => (dispatch) => {
  dispatch(createStart({ name, description }));
  axios
    .post('/api/environments', { name, description })
    .then((resposne) => dispatch(createSuccess(resposne.data)));
};

export default { load, remove, create };
