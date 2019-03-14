import React from 'react';
import { List, Avatar, Layout, Select, Input, Button } from 'antd';

import { DefaultLayout } from '../../components/layouts';

const { Content } = Layout;
const { Option } = Select;
const { Search } = Input;

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const Predicates = React.memo(() => (
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
        <Content style={{ backgroundColor: '#fff' }}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Content>
      </div>
    </Layout>
  </DefaultLayout>
));

export default Predicates;
