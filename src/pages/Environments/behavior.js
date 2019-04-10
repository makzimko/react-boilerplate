import { environments } from '../../actions/domain';
import { history } from '../../behaviors';

const loadList = (dispatch) => () => {
  dispatch(environments.list.load());
};

const remove = (dispatch) => (id) => (event) => {
  event.preventDefault();
  dispatch(environments.list.remove(id));
};

export default {
  loadList,
  remove,
  navigate: history.navigate,
};
