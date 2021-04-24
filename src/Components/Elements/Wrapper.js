import React from 'react';
import { DeleteOutlined, CopyOutlined, EditOutlined } from '@ant-design/icons';

const Wrapper = ({ children }) => {
    return (
        <div className="node-content node-wrapper">
            <div className="node-edit-wrapper">
                <span className="edit-icon-wrapper">
                    <EditOutlined />
                </span>
                <span className="edit-icon-wrapper">
                    <CopyOutlined />
                </span>
                <span className="edit-icon-wrapper">
                    <DeleteOutlined />
                </span>
            </div>
            {children}
        </div>
    )
}

export default Wrapper;
