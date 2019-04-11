import axios from 'axios';
import { message } from 'antd';
import { history } from '../../../store';

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

const removeSuccess = () => (dispatch) => {
  message.success('Environment was successfully removed');
  dispatch(load());
};

const removeFailed = () => {
  message.error('Error occurred while trying to remove environment');
  return {
    type: actionTypes.DOMAIN.ENVIRONMENTS.LIST.REMOVE.FAILED,
  };
};

const remove = (id) => (dispatch) => {
  dispatch(removeStart());
  axios
    .delete(`/api/environments/${id}`)
    .then(() => dispatch(removeSuccess()))
    .catch((error) => {
      dispatch(removeFailed(error.response.date));
    });
};

const createStart = ({ name, description }) => ({
  type: actionTypes.DOMAIN.ENVIRONMENTS.LIST.CREATE.START,
  payload: {
    name,
    description,
  },
});

const createSuccess = ({ id }) => (dispatch) => {
  history.push(`/project/environments/edit/${id}`);
  dispatch({
    type: actionTypes.DOMAIN.ENVIRONMENTS.LIST.CREATE.SUCCESS,
  });
};

const createFailed = (error) => {
  message.error(`Error occurred while trying to remove environment: ${error}`);
  return {
    type: actionTypes.DOMAIN.ENVIRONMENTS.LIST.CREATE.FAILED,
  };
};

const create = ({ name, description }) => (dispatch) => {
  dispatch(createStart({ name, description }));
  axios
    .post('/api/environments', { name, description })
    .then((response) => dispatch(createSuccess(response.data)))
    .catch((error) => dispatch(createFailed(error.response.data)));
};

export default { load, remove, create };
