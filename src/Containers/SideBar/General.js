import React from 'react'
import { Col, Row } from 'antd';
import { PictureFilled, FontSizeOutlined, PlayCircleOutlined, AlignLeftOutlined, BorderOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons';

import { onDragStart } from '../../Utils';

export default function General() {
  return (
    <>
      <Row >
        <Col>
          <div
            id="general-image"
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
            id="general-video"
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
            id="general-heading"
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
        <Col>
          <div
            id="general-text"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          // onDragOver={onDragOver}
          >
            <div className="section-icon">
              <AlignLeftOutlined />
            </div>
								Text
							</div>
        </Col>
        <Col>
          <div
            id="general-button"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          // onDragOver={onDragOver}
          >
            <div className="section-icon">
              <BorderOutlined />
            </div>
									Button
							</div>
        </Col>
        <Col>
          <div
            id="general-spacer"
            className="section-item"
            draggable
            onDragStart={onDragStart}
          // onDragOver={onDragOver}
          >
            <div className="section-icon">
              <VerticalAlignMiddleOutlined />
            </div>
									Spacer
							</div>
        </Col>
      </Row>
    </>
  )
}
