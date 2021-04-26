import React from 'react'
import { Col, Row } from 'antd';
import { PictureFilled, HomeFilled, PlayCircleOutlined, DollarCircleOutlined, HeatMapOutlined, FontSizeOutlined, WalletOutlined, BorderOutlined } from '@ant-design/icons';

import { onDragStart } from '../../Utils';

export default function Rentals() {
  return (
    <>
      <Row>
        <Col>
          <div
            id="rental-image"
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
            id="rental-text"
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
            id="rental-text"
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
            id="rental-image"
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
            id="rental-text"
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
            id="rental-heading"
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
            id="rental-image"
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
            id="rental-image"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          >
            <div className="section-icon">
              <WalletOutlined />
            </div>
            <span className='f-11'>Open Home Date & Time</span>
          </div>
        </Col>
        <Col>
          <div
            id="rental-text"
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
