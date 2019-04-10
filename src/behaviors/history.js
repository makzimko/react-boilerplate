const navigate = (dispatch, { history }) => (url) => (event) => {
  if (event && event.preventDefault) {
    event.preventDefault();
  }

  history.push(url);
};

export default {
  navigate,
};
