import React, { Component } from 'react';
import { Modal, Table , Icon, Row, Col, Button, Steps, Form, Input, Radio } from 'antd';
const Step = Steps.Step;
const FormItem = Form.Item;

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
    }, {
        title: '描述',
        dataIndex: 'title',
    }, {
        title: '类型',
        dataIndex: 'dtype',
    }];

const data = [
    {
        key: '1',
        name: 'HFRQ',
        title: "合肥燃气",
        dtype: '文件夹',
    }, {
        key: '2',
        name: 'SNERDI',
        title: "上海核工院",
        dtype: '文件夹',
    }, {
        key: '3',
        name: 'DLG',
        title: "大连港",
        dtype: '文件夹',
    }, {
        key: '4',
        name: 'GSSF',
        title: "供水示范数据",
        dtype: '服务',
    }];
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };
    const CollectionCreateForm = Form.create()(
        class extends React.Component {
          render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
              <Modal
                visible={visible}
                title="新建文件夹"
                okText="新建"
                onCancel={onCancel}
                onOk={onCreate}
              >
                <Form layout="vertical">
                  <FormItem label="文件夹名">
                    {getFieldDecorator('title', {
                      rules: [{ required: true, message: '请输入文件夹名!' }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                  <FormItem label="描述">
                    {getFieldDecorator('description')(<Input type="textarea" />)}
                  </FormItem>
                  <FormItem style={{marginBottom:0}}>
                    {getFieldDecorator('modifier', {
                      initialValue: 'public',
                    })(
                      <Radio.Group>
                        <Radio value="public">公有</Radio>
                        <Radio value="private">私有</Radio>
                      </Radio.Group>
                    )}
                  </FormItem>
                </Form>
              </Modal>
            );
          }
        }
      );
                
export default class Search extends Component {
    state = {dlgVisible:false, dlgVisible1:false}
    showModal = () => {
        this.setState({
            dlgVisible: true,
        });
      }
      handleCancel = (e) => {
        console.log(e);
        this.setState({
            dlgVisible: false,
        });
      }

      showModal1 = () => {
        this.setState({
            dlgVisible1: true,
        });
      }
      handleCancel1 = (e) => {
        console.log(e);
        this.setState({
            dlgVisible1: false,
        });
      }
      handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
    
          console.log('Received values of form: ', values);
          form.resetFields();
          this.setState({ visible: false });
        });
      }
      saveFormRef = (formRef) => {
        this.formRef = formRef;
      }
    render() {
        return (
            <div style={{padding:"20px"}}>
                <Row style={{marginBottom:"10px"}}>
                    <Col span={8}>根目录</Col>
                    <Col span={8}><Button type="primary" icon="folder-add" onClick={this.showModal1}>新建文件夹</Button></Col>
                    <Col span={8}><Button type="primary" onClick={this.showModal}>发布服务</Button></Col>
                </Row>
                <Row>
                    <Col span={24}>
                    <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>
                <Modal
                    title="发布服务"
                    visible={this.state.dlgVisible}
                    onCancel={this.handleCancel}
                    footer={null}
                    >
                    <p>选择地图文档</p>
                    <p></p>
                </Modal>
                <CollectionCreateForm 
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.dlgVisible1}
                onCancel={this.handleCancel1}
                onCreate={this.handleCreate} />
            </div>
        );
    }
}