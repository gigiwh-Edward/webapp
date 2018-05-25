import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Navigation from './Navigation';
import Title from './Title';
import MapView from '@/common/components/MapView';
import styles from '../styles/App.css';
import mapgis_logo from "../images/mapgis-white.png";

const { Header, Content } = Layout;

export default class App extends Component {

  render() {
    return (
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Row gutter={16}>
            <Col span={6}>
              <Title className={styles.headerTitle}><img src={mapgis_logo} className={styles.logo}/>供水管网地理信息系统</Title>
            </Col>
            <Col span={18}>
              <Navigation />
            </Col>
          </Row>
        </Header>
        <Content className={styles.content}>
          <MapView />
          <div className={styles.content2}>
            {this.props.children}
          </div>
        </Content>
      </Layout>
    );
  }
}