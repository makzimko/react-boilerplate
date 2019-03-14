import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Sider, Header } = Layout;

const propTypes = {
  children: PropTypes.node.isRequired,
};

const DefaultLayout = ({ children }) => (
  <Layout style={{ height: '100vh' }}>
    <Sider>Sider</Sider>
    <Layout>
      <Header
        style={{ position: 'fixed', width: '100%', backgroundColor: '#fff' }}
      >
        Page title
      </Header>
      <Layout style={{ marginTop: 64 }}>
        <div style={{ padding: 24 }}>{children}</div>
      </Layout>
    </Layout>
  </Layout>
);

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;
