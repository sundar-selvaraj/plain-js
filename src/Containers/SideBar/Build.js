import React from 'react';
import { PictureFilled, FontSizeOutlined } from '@ant-design/icons';

import { onDragStart } from '../../Utils';

const BuildComponents = () => {
    return (
        <div className="section-items-wrapper">
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
        </div>
    )
}

export default BuildComponents
