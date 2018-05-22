import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Navigation from './Navigation';
import Title from './Title';
import styles from '../styles/App.css';

const { Header, Content } = Layout;

export default class App extends Component {

  render() {
    return (
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Row gutter={16}>
            <Col span={4}>
              <Title className={styles.headerTitle}>WebGIS React</Title>
            </Col>
            <Col span={16}>
              <Navigation />
            </Col>
            <Col span={4}></Col>
          </Row>
        </Header>
        <Content className={styles.content}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}