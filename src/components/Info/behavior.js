import { info } from '../../actions';

const loadInfo = (dispatch) => () => dispatch(info.load());
const flushInfo = (dispatch) => () => dispatch(info.flush());

export default { loadInfo, flushInfo };
