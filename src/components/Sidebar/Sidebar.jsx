import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Menu } from 'antd';
import { compose } from 'redux/es/redux';

import selector from './selector';
import { withBehavior, withSelector } from '../../enhancers';
import behavior from './behavior';

const { Item, ItemGroup } = Menu;

const propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          disabled: PropTypes.bool,
        }),
      ),
    }),
  ).isRequired,
  activeItem: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

const Sidebar = React.memo(({ sections, activeItem, navigate }) => (
  <Menu theme="light" selectedKeys={[activeItem]}>
    {sections.map(({ id, label, items }) => (
      <ItemGroup key={id} title={label}>
        {items.map((item) => (
          <Item
            key={item.id}
            disabled={item.disabled}
            onClick={navigate(item.url)}
          >
            {item.label}
          </Item>
        ))}
      </ItemGroup>
    ))}
  </Menu>
));

Sidebar.propTypes = propTypes;

export default compose(
  withRouter,
  withSelector(selector),
  withBehavior(behavior),
)(Sidebar);
