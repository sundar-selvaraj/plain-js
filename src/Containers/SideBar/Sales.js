import React from 'react'
import { Col, Row } from 'antd';
import { PictureFilled, HomeFilled, PlayCircleOutlined, DollarCircleOutlined, CalendarOutlined, HeatMapOutlined, BorderOutlined, FontSizeOutlined } from '@ant-design/icons';

import { onDragStart } from '../../Utils';

export default function Sales() {
  return (
    <>
      <Row>
        <Col>
          <div
            id="drag-image"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <PictureFilled />
            </div>
								Image
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
              <PlayCircleOutlined />
            </div>
									Video
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
              <HomeFilled />
            </div>
									Features
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
              <DollarCircleOutlined />
            </div>
								Price
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
              <CalendarOutlined />
            </div>
									Sales Date
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
              <FontSizeOutlined />
            </div>
									Heading
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
              <DollarCircleOutlined />
            </div>
								Description
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
              <BorderOutlined />
            </div>
            <span className='f-11'>View Property Button</span>
          </div>
        </Col>
      </Row>
    </>
  )
}
