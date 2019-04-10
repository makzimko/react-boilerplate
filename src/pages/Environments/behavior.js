import { Modal } from 'antd';

import { environments } from '../../actions/domain';
import { history } from '../../behaviors';

const { confirm } = Modal;

const loadList = (dispatch) => () => {
  dispatch(environments.list.load());
};

const remove = (dispatch) => ({ id, name }) => () => {
  confirm({
    title: `Are you sure delete environment?`,
    content: `You just trying to delete ${name} environment. You will not be able to cancel this action!`,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      dispatch(environments.list.remove(id));
    },
  });
};

const create = (dispatch) => ({ name, description }) => {
  dispatch(environments.list.create({ name, description }));
};

export default {
  loadList,
  remove,
  create,
  navigate: history.navigate,
};
