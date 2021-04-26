import React from 'react'
import { Col, Row } from 'antd';
import { PictureFilled, FontSizeOutlined, MobileOutlined, MailFilled, ShareAltOutlined, BorderOutlined } from '@ant-design/icons';

import { onDragStart } from '../../Utils';

export default function StaffMembers() {
  return (
    <>
      <Row >
        <Col>
          <div
            id="staff-image"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <PictureFilled />
            </div>
								Profile Image
							</div>
        </Col>
        <Col>
          <div
            id="staff-text"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <FontSizeOutlined />
            </div>
									Name
							</div>
        </Col>
        <Col>
          <div
            id="staff-text"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <MobileOutlined />
            </div>
									Mobile
							</div>
        </Col>
        <Col>
          <div
            id="staff-image"
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
            id="staff-text"
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
        <Col>
          <div
            id="staff-text"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <BorderOutlined />
            </div>
            <span className='f-11'>View Property Button</span>
          </div>
        </Col>
      </Row>
    </>
  )
}
