import React from 'react';
import { withRouter } from 'react-router';

// eslint-disable-next-line react/prop-types
const Navigation = React.memo(({ history }) => {
  return (
    <div>
      <button type="button" onClick={() => history.push('/')}>
        Main page
      </button>
      <button type="button" onClick={() => history.push('/counter')}>
        Counter
      </button>
    </div>
  );
});

export default withRouter(Navigation);
