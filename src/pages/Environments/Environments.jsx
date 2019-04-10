import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Avatar, Button, Layout, List, Empty, Spin } from 'antd';

import { DefaultLayout } from '../../components/layouts';
import { withSelector, withBehavior } from '../../enhancers';

import selector from './selector';
import behavior from './behavior';

const { Content } = Layout;
const { Item } = List;
const { Meta } = Item;

const propTypes = {
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      editUrl: PropTypes.string.isRequired,
      removeUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  loadList: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export const Environments = React.memo(
  ({ loading, loaded, items, loadList, remove, navigate }) => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
      if (!initialized) {
        setInitialized(true);
        loadList();
      }
    }, []);

    return (
      <DefaultLayout>
        <Spin tip="Loading..." spinning={loading}>
          <Layout style={{ padding: 24 }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ float: 'right' }}>
                <Button type="primary">Create environment</Button>
              </div>
            </div>
            <div style={{ padding: 24, backgroundColor: '#FFF' }}>
              <Content>
                {!loaded && <Empty />}
                {loaded && (
                  <List
                    itemLayout="horizontal"
                    dataSource={items}
                    renderItem={(item) => (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
                      <Item actions={[<a onClick={remove(item.id)}>delete</a>]}>
                        <Meta
                          avatar={
                            <Avatar
                              src={`https://ui-avatars.com/api/?name=${
                                item.name
                              }&length=1&rounded=true&bold=true`}
                            />
                          }
                          title={
                            <a
                              href={item.editUrl}
                              onClick={navigate(item.editUrl)}
                            >
                              {item.name}
                            </a>
                          }
                          description={item.description}
                        />
                      </Item>
                    )}
                  />
                )}
              </Content>
            </div>
          </Layout>
        </Spin>
      </DefaultLayout>
    );
  },
);

Environments.propTypes = propTypes;

export default compose(
  withRouter,
  withSelector(selector),
  withBehavior(behavior),
)(Environments);
