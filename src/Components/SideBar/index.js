import React from 'react';
import { Tabs } from 'antd';
import { PictureFilled, FontSizeOutlined } from '@ant-design/icons';

import { onDragOver, onDragStart } from '../../Utils';

const { TabPane } = Tabs;

const Sider = () => {
    return (
        <div className="sider-wrapper">
            <Tabs centered>
                <TabPane tab="SETTINGS" key="1">
                    <div className="section-items-wrapper">
                        <div
                            className="section-item"
                            draggable
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                        >
                            <div className="section-icon">
                                <PictureFilled />
                            </div>
                            Image
                        </div>
                        <div
                            className="section-item"
                            draggable
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                        >
                            <div className="section-icon">
                                <FontSizeOutlined />
                            </div>
                            Heading
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="LAYOUT" key="2"></TabPane>
                <TabPane tab="BUILD" key="3"></TabPane>
            </Tabs>
        </div>
    )
}

export default Sider;
