import React from 'react';
import { useSelector } from "react-redux";
import { Tabs } from 'antd';

import BuildComponents from './Build';
import Layout from './Layout';
import EditSection from './EditSection';
const { TabPane } = Tabs;


const Sider = ({ currentTemplate, setTemplate }) => {

    const { showEditSection } = useSelector(({ editor }) => ({
        showEditSection: editor.showEditSection
    }))
    return (
        <div className="sider-wrapper">
            <Tabs centered>
                <TabPane tab="SETTINGS" key="1">
                </TabPane>
                <TabPane tab="LAYOUT" key="2">
                    <Layout currentTemplate={currentTemplate} setTemplate={setTemplate} />
                </TabPane>
                <TabPane tab="BUILD" key="3">
                    {
                        showEditSection ? <EditSection /> : <BuildComponents />
                    }
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Sider;
