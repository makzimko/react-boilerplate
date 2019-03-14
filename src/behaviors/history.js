const navigate = (dispatch, { history }) => (url) => history.push(url);

export default {
  navigate,
};
