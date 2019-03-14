import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Menu } from 'antd';
import { compose } from 'redux/es/redux';

import selector from './selector';
import { withBehavior, withSelector } from '../../enhancers';
import behavior from './behavior';

const { Item } = Menu;

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
  navigate: PropTypes.func.isRequired,
};

const defaultProps = {
  items: [],
};

const Sidebar = React.memo(({ items, navigate }) => (
  <div>
    <Menu theme="light">
      {items.map((item) => (
        <Item key={item.id} onClick={() => navigate(item.url)}>
          {item.label}
        </Item>
      ))}
    </Menu>
  </div>
));

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default compose(
  withRouter,
  withSelector(selector),
  withBehavior(behavior),
)(Sidebar);
