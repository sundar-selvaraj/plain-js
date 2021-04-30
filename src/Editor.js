import React, { useRef, useState } from 'react';
import { Layout } from 'antd';
import { TopBar, Sidebar, ContentWrapper } from './Containers';

const { Header, Sider, Content } = Layout;


const Editor = () => {
    const ref = useRef(null);
    const [currentTemplate, setTemplate] = useState('template_1');
    const handleTemplate = (key) => {
        setTemplate(key);
    };
    return <Layout>
        <Header>
            <TopBar ref={ref} />
        </Header>
        <Layout>
            <Sider width={350}>
                <Sidebar currentTemplate={currentTemplate} setTemplate={handleTemplate} />
            </Sider>
            <Content>
                <ContentWrapper currentTemplate={currentTemplate} ref={ref} />
            </Content>
        </Layout>
    </Layout>
}

export default Editor;
