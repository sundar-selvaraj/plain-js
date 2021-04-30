import { Col, Input, Row, Select, Button, Form } from 'antd'
import React from 'react'

function TopBar(props, ref) {

  const [form] = Form.useForm();

  const onFinish = formProps => {
    let data = {
      ...formProps,
      htmlContent: ref.current.innerHTML
    }
    console.log('data', data, data.htmlContent)
  }

  return (
    <Form
      form={form}
      initialValues={{ name: '', desc: '' }}
      onFinish={onFinish}
    >
      <Row style={{ marginTop: '15px' }}>
        <Col span={2} className='top-bar-heading'>
          New Template
        </Col>
        <Col span={4}>
          <Select placeholder='Copy Existing Template'>
          </Select>
        </Col>
        <Col span={6}>
          <Form.Item name='name' rules={[{ required: true, message: 'Please enter name!' }]}>
            <Input placeholder='Name' />
          </Form.Item>
        </Col>
        <Col span={7} className='ml-10'>
          <Form.Item name='desc' rules={[{ required: true, message: 'Please enter description!' }]}>
            <Input placeholder='Description' />
          </Form.Item>
        </Col>
        <Col span={2} className='ml-25'>
          <Button className='top-bar-cancel'>Cancel</Button>
        </Col>
        <Col span={2}>
          <Form.Item>
            <Button htmlType='submit' className='top-bar-save'>Save</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default React.forwardRef(TopBar)