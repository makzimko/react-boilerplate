import { predicates } from '../../actions';

const loadList = (disptach) => () => {
  disptach(predicates.list.load());
};

export default { loadList };
