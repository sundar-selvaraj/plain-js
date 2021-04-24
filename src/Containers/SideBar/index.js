import React from 'react';
import { Tabs } from 'antd';

import BuildComponents from './Build';
const { TabPane } = Tabs;

const Sider = () => {
    return (
        <div className="sider-wrapper">
            <Tabs centered>
                <TabPane tab="SETTINGS" key="1">
                </TabPane>
                <TabPane tab="LAYOUT" key="2">
                </TabPane>
                <TabPane tab="BUILD" key="3">
                    <BuildComponents />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Sider;
