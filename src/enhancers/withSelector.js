import { connect } from 'react-redux';

const withSelector = (selector) => connect(selector);

export default withSelector;
