import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Sidebar from '../../Sidebar';

const { Header, Sider } = Layout;

const propTypes = {
  children: PropTypes.node.isRequired,
};

const DefaultLayout = ({ children }) => (
  <Layout style={{ height: '100vh' }}>
    <Header style={{ paddingLeft: 200 }}>
      <h2 style={{ paddingLeft: 24, color: '#fff' }}>Page title</h2>
    </Header>
    <Layout>
      <Sider style={{ zIndex: 2 }} theme="light">
        <Sidebar />
      </Sider>
      <Layout>{children}</Layout>
    </Layout>
  </Layout>
);

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;
