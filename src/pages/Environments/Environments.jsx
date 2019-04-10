import React, { useCallback, useEffect, useState } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Avatar, Button, Layout, List, Empty, Spin } from 'antd';

import { DefaultLayout } from '../../components/layouts';
import { withSelector, withBehavior } from '../../enhancers';

import Create from './Create';
import selector from './selector';
import behavior from './behavior';

const { Content } = Layout;
const { Item } = List;
const { Meta } = Item;

const propTypes = {
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  creating: PropTypes.bool.isRequired,
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
  create: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export const Environments = React.memo(
  ({
    loading,
    loaded,
    creating,
    items,
    loadList,
    remove,
    create,
    navigate,
  }) => {
    const [initialized, setInitialized] = useState(false);
    const [createModalVisible, toggleCreateModalVisibility] = useState(false);

    useEffect(() => {
      if (!initialized) {
        setInitialized(true);
        loadList();
      }
    }, []);

    const onCreate = useCallback(({ name, description }) => {
      create({
        name,
        description,
      });
      toggleCreateModalVisibility(false);
    }, []);

    return (
      <DefaultLayout>
        {createModalVisible && (
          <Create
            onCancel={() => toggleCreateModalVisibility(false)}
            onCreate={onCreate}
          />
        )}
        <Spin tip="Loading..." spinning={loading || creating}>
          <Layout style={{ padding: 24 }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ float: 'right' }}>
                <Button
                  type="primary"
                  onClick={() => toggleCreateModalVisibility(true)}
                >
                  Create environment
                </Button>
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
                      // eslint-disable-next-line
                      <Item
                        actions={[
                          // eslint-disable-next-line
                          <a
                            onClick={remove({
                              id: item.id,
                              name: item.name,
                            })}
                          >
                            delete
                          </a>,
                        ]}
                      >
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
