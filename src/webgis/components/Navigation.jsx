import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
const { Item } = Menu;


@withRouter
export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { current: this.getKey(this.props.location.pathname) };
    }
    
    handleClick = (e) => {
        this.setState({ current: e.key });
        this.goto(e.key);
    }

    getKey(pathname) {
        let key = pathname.substr(1);
        return !!key ? key : "map";
    }

    goto(key) {
        const path = key == "map" ? "/" : ["/", key].join("");
        this.props.history.push(path);
    }

    render() {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}>
                <Item key="map">
                    <Icon type="environment-o" />地图
                </Item>
                <Item key="search">
                    <Icon type="search" />查询
                </Item>
                <Item key="statistic">
                    <Icon type="pie-chart" />统计
                </Item>
                <Item key="analysis">
                    <Icon type="line-chart" />分析
                </Item>
                <Item key="tool">
                    <Icon type="tool" />工具
                </Item>
                <Item key="thematic">
                    <Icon type="area-chart" />展示
                </Item>
                <Item key="correct">
                    <Icon type="schedule" />纠错
                </Item>
            </Menu>
        );
    }
}