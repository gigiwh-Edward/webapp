import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Navigation from '../Navigation';
import Title from '../Title';
import MapView from '../MapView';
import './index.css';

const { Header, Content } = Layout;

export default class App extends Component {

  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <Row gutter={16}>
            <Col span={4}>
              <Title className="header-title">WebGIS React</Title>
            </Col>
            <Col span={16}>
              <Navigation />
            </Col>
            <Col span={4}></Col>
          </Row>
        </Header>
        <Content className="content">
          <MapView />
        </Content>
      </Layout>
    );
  }
}