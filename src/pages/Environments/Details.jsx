import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';

const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

const Details = React.memo(({ name, description, onClose }) => (
  <Drawer
    title={`Environment: ${name}`}
    visible
    placement="bottom"
    height="auto"
    onClose={onClose}
    closable={false}
  >
    <p>${description}</p>
  </Drawer>
));

Details.propTypes = propTypes;

export default Details;
