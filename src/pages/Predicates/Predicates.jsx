import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { List, Avatar, Layout, Select, Input, Button, Empty } from 'antd';
import { compose } from 'redux';

import { DefaultLayout } from '../../components/layouts';
import behavior from './behavior';
import selector from './selector';
import { withBehavior, withSelector } from '../../enhancers';

const { Content } = Layout;
const { Option } = Select;
const { Search } = Input;
const { Item } = List;
const { Meta } = Item;

const propTypes = {
  loadList: PropTypes.func,
  loaded: PropTypes.bool,
  loading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

const defaultProps = {
  loadList: Function.prototype,
  loaded: false,
  loading: false,
  items: [],
};

const Predicates = React.memo(({ loadList, loaded, loading, items }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      loadList();
    }
  });

  return (
    <DefaultLayout>
      <Layout>
        <div style={{ padding: 24 }}>
          <div style={{ marginBottom: 24, backgroundColor: 'transparent' }}>
            <div style={{ float: 'right' }}>
              <Button type="primary">Create predicate</Button>
            </div>
            <Select style={{ width: 160 }} defaultValue="all">
              <Option value="all">All environments</Option>
              <Option value="testing">Testing</Option>
              <Option value="staging">Staging</Option>
              <Option value="production">Production</Option>
            </Select>
            <Search
              placeholder="search..."
              style={{ width: 220, marginLeft: 24 }}
            />
          </div>
          <Content style={{ backgroundColor: '#fff', padding: '12px 24px' }}>
            {!loaded && <Empty style={{ padding: 24 }} />}
            {loaded && (
              <List
                loading={loading}
                itemLayout="horizontal"
                dataSource={items}
                renderItem={(item) => (
                  <Item
                    actions={[
                      <a href="/edit">edit</a>,
                      <a href="/delete">delete</a>,
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
                        <a href={`/manage/predicates/${item.id}`}>
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
    </DefaultLayout>
  );
});

Predicates.propTypes = propTypes;
Predicates.defaultProps = defaultProps;

export default compose(
  withBehavior(behavior),
  withSelector(selector),
)(Predicates);
