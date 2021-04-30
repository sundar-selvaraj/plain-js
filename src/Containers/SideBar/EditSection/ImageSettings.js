import React, { useEffect } from 'react'
import { Col, InputNumber, Row, Select, Form, Input } from 'antd';

export default function ImageSettings({ targetStyle }) {
  const [form] = Form.useForm();

  const getValueFromPx = padding => {
    if (!padding) {
      return 0
    } else {
      return padding.substring(0, padding.indexOf('p'))
    }
  }

  useEffect(() => {
    form.setFieldsValue({
      pt: getValueFromPx(targetStyle.paddingTop),
      pr: getValueFromPx(targetStyle.paddingRight),
      pb: getValueFromPx(targetStyle.paddingBottom),
      pl: getValueFromPx(targetStyle.paddingLeft),
      border: !targetStyle.border || targetStyle.border === 'none' ? 'none' : 'solid'
    })
  }, [targetStyle])

  const handlePadding = (e, dir) => {
    targetStyle[`padding${dir}`] = `${e}px`
  }

  const handleBorder = val => {
    if (val === 'none') {
      targetStyle.border = 'none'
    } else {
      targetStyle.border = '2px solid black'
    }
  }

  return (
    <Form form={form}>
      <Row>
        <Col span={24}>
          Padding
        </Col>
        <Row className='spacing'>
          <Col span={6}>
            <Form.Item name='pt'>
              <InputNumber className='pd-input' size="small" min={0} onChange={(e) => handlePadding(e, 'Top')} />
            </Form.Item>
            <div>TOP</div>
          </Col>
          <Col span={6}>
            <Form.Item name='pr'>
              <InputNumber className='pd-input' size="small" min={0} onChange={(e) => handlePadding(e, 'Right')} />
            </Form.Item>
            <div>RIGHT</div>
          </Col>
          <Col span={6}>
            <Form.Item name='pb'>
              <InputNumber className='pd-input' size="small" min={0} onChange={(e) => handlePadding(e, 'Bottom')} />
            </Form.Item>
            <div>BOTTOM</div>
          </Col>
          <Col span={6}>
            <Form.Item name='pl'>
              <InputNumber className='pd-input' size="small" min={0} onChange={(e) => handlePadding(e, 'Left')} />
            </Form.Item>
            <div>LEFT</div>
          </Col>
        </Row>
        <Row>
        </Row>
      </Row>
      <Row className='mt-20'>
        <Col span={24}>
          <Row>Border Type</Row>
        </Col>
        <Col span={24}>
          <Form.Item name='border'>
            <Select style={{ width: '100%' }} onChange={handleBorder}>
              <Select.Option value="none">None</Select.Option>
              <Select.Option value="solid">Solid</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Row style={{ color: 'rgb(137, 24, 45)', fontWeight: 'bold' }}>Image</Row>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Input placeholder='Click-Through Link' />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}


// <Col className='mb-4'>
  // <label>Background</label><br />
  // <input type='color' className='color-picker' onChange={handleColorChange} />
// </Col>
// const handleColorChange = (e, e1) => {
//   console.log('handleColorChange', e.target.value)
//   document.getElementById('editor_text_01').style.backgroundColor = e.target.value
// }