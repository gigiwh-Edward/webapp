import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Navigation from './Navigation';
import Title from './Title';
import styles from '../styles/App.css';
import mapgis_logo from "../images/mapgis-white.png";

const { Header, Content, Sider} = Layout;

export default class App extends Component {

  render() {
    return (
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Title className={styles.headerTitle}><img src={mapgis_logo} className={styles.logo}/>市政GIS服务管理器</Title>
        </Header>
        <Content className={styles.content}>
          <Layout className={styles.main}>
            <Sider>
              <Navigation />
            </Sider>
            <Content className={styles.content}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}