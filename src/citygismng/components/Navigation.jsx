import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
const { SubMenu, Item } = Menu;


@withRouter
export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { current: "svrmng", openKeys: ['svrmng'], };
        this.rootSubmenuKeys = ['svrmng', 'vectordata', 'tiledata', 'tdmng', 'gdbcatalog'];
    }

    handleClick = (e) => {
        this.setState({ current: e.key });
        this.goto(e.key); 
    }

    goto(key) {
        const path = key == "map" ? "/" : ["/", key].join("");
        this.props.history.push(path);
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render() {
        return (
            <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={['svrlist']}
                onOpenChange={this.onOpenChange}
                openKeys={this.state.openKeys}
                onClick={this.handleClick}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="svrmng" title={<span><Icon type="database" />服务</span>}>
                    <Item key="svrlist">管理服务</Item>
                    <Item key="svrmonitor">服务器监控</Item>
                </SubMenu>
                <SubMenu key="vectordata" title={<span><Icon type="picture" />矢量地图</span>}>
                    <Item key="pipenetdata">管网数据</Item>
                    <Item key="thematicdata">专题数据</Item>
                </SubMenu>
                <SubMenu key="tiledata" title={<span><Icon type="appstore-o" />切片数据</span>}>
                    <Item key="vtdata">矢量切片发布</Item>
                    <Item key="tradvtdata">传统切片发布</Item>
                    <Item key="onlinemapping">地图在线配置</Item>
                </SubMenu>
                <SubMenu key="tdmng" title={<span><Icon type="codepen" />三维管理</span>}>
                    <Item key="tdpipenet">管网三维</Item>
                    <Item key="tddem">地面高程</Item>
                    <Item key="tdbuilding">建筑模型三维</Item>
                    <Item key="tdmodels">模型库管理</Item>
                </SubMenu>
                <SubMenu key="gdbcatalog" title={<span><Icon type="global" />GDBCatalog</span>}>
                    <Item key="gdb1">MapGISLocal</Item>
                    <Item key="gdb2">127.0.0.1</Item>
                    <Item key="gdb3">192.168.111.238</Item>
                    <Item key="gdb4">192.168.16.200</Item>
                </SubMenu>
            </Menu>
        );
    }
}