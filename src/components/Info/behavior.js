import { config } from '../../actions';

const loadInfo = (dispatch) => () => dispatch(config.load());
const flushInfo = (dispatch) => () => dispatch(config.flush());

export default { loadInfo, flushInfo };
