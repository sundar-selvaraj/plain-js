import React from 'react'
import { Col, Row } from 'antd';
import { HeatMapOutlined, FontSizeOutlined, MobileOutlined, ShareAltOutlined, MailFilled } from '@ant-design/icons';

import { onDragStart } from '../../Utils';

export default function Office() {
  return (
    <>
      <Row >
        <Col>
          <div
            id="drag-text"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <FontSizeOutlined />
            </div>
                Text
            </div>
        </Col>
        <Col>
          <div
            id="drag-text"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <MobileOutlined />
            </div>
									Phone
							</div>
        </Col>
        <Col>
          <div
            id="drag-image"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <MailFilled />
            </div>
								Email
							</div>
        </Col>
        <Col>
          <div
            id="drag-text"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <HeatMapOutlined />
            </div>
									Address
							</div>
        </Col>
        <Col>
          <div
            id="drag-text"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <ShareAltOutlined />
            </div>
            <span className='f-11'>Social Media Icons</span>
          </div>
        </Col>
      </Row>
    </>
  )
}
