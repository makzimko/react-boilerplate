import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { withBehavior, withSelector } from '../../enhancers';
import infoBehavior from './behavior';
import infoSelector from './selector';

const propTypes = {
  loadInfo: PropTypes.func,
  flushInfo: PropTypes.func,
  info: PropTypes.shape({
    loaded: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object,
  }),
};

const defaultProps = {
  loadInfo: Function.prototype,
  flushInfo: Function.prototype,
  info: {
    loaded: false,
    loading: false,
    data: {},
  },
};

// eslint-disable-next-line
const Info = React.memo(({ loadInfo, flushInfo, info }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      loadInfo();
    }

    return () => flushInfo();
  }, []);

  const { loaded, loading, data } = info;

  return (
    <div>
      <div>Loaded: {JSON.stringify(loaded)}</div>
      <div>Loading: {JSON.stringify(loading)}</div>
      {data && (
        <div>
          <div>Title: {data.title}</div>
          <div>Author: {data.author}</div>
        </div>
      )}
    </div>
  );
});

Info.propTypes = propTypes;
Info.defaultProps = defaultProps;

export default compose(
  withBehavior(infoBehavior),
  withSelector(infoSelector),
)(Info);
