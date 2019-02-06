import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { withBehavior, withSelector } from '../../enhancers';
import counterBehavior from './behavior';
import counterSelector from './selector';

const propTypes = {
  count: PropTypes.number,
  onDecreaseClick: PropTypes.func,
  onIncreaseClick: PropTypes.func,
};

const defaultProps = {
  count: 0,
  onDecreaseClick: Function.prototype,
  onIncreaseClick: Function.prototype,
};

const Counter = React.memo((props) => {
  const { count, onDecreaseClick, onIncreaseClick } = props;
  return (
    <div>
      <h3> Counter </h3>
      <button type="button" onClick={onDecreaseClick}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={onIncreaseClick}>
        +
      </button>
    </div>
  );
});

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default compose(
  withSelector(counterSelector),
  withBehavior(counterBehavior),
)(Counter);
