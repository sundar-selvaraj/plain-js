import React from 'react'
import { Col, Row } from 'antd';
import { CalendarOutlined, BorderlessTableOutlined, PictureFilled, AlignLeftOutlined, HomeFilled, PlayCircleOutlined, DollarCircleOutlined, HeatMapOutlined, FontSizeOutlined, WalletOutlined, BorderOutlined } from '@ant-design/icons';

import { onDragStart } from '../../Utils';

export default function Listings() {
  return (
    <>
      <Row>
        <Col>
          <div
            id="drag-image"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          // onDragOver={onDragOver}
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
          // onDragOver={onDragOver}
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
          // onDragOver={onDragOver}
          >
            <div className="section-icon">
              <HomeFilled />
            </div>
									Features
							</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            id="drag-image"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          // onDragOver={onDragOver}
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
          // onDragOver={onDragOver}
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
          // onDragOver={onDragOver}
          >
            <div className="section-icon">
              <FontSizeOutlined />
            </div>
									Heading
							</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            id="drag-image"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          // onDragOver={onDragOver}
          >
            <div className="section-icon">
              <AlignLeftOutlined />
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
          // onDragOver={onDragOver}
          >
            <div className="section-icon">
            <CalendarOutlined />
            </div>
            <span className='f-11'>Auction Dare & Time</span>
          </div>
        </Col>
        <Col>
          <div
            id="drag-text"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          // onDragOver={onDragOver}
          >
            <div className="section-icon">
            <BorderlessTableOutlined />
            </div>
            <span className='f-11'>Auction Locations</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            id="drag-image"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          // onDragOver={onDragOver}
          >
            <div className="section-icon">
              <WalletOutlined />
            </div>
            <span className='f-11'>Open Home Date & Time</span>
          </div>
        </Col>
        <Col>
          <div
            id="drag-text"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          // onDragOver={onDragOver}
          >
            <div className="section-icon">
              <BorderOutlined />
            </div>
            <span className='f-11'>View Property Button</span>
          </div>
        </Col>
        <Col>
        </Col>
      </Row>
    </>
  )
}
