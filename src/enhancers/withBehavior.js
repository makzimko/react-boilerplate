import { connect } from 'react-redux';

const withBehavior = (behavior) =>
  connect(
    null,
    (dispatch, ownProps) =>
      Object.keys(behavior).reduce(
        (handlers, key) => ({
          ...handlers,
          [key]: behavior[key](dispatch, ownProps),
        }),
        {},
      ),
  );

export default withBehavior;
