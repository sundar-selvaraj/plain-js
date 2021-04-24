import React, { useState } from 'react';
import { Row, Col } from 'antd';

import { Sidebar, ContentWrapper } from './Containers';

const Editor = () => {
    const [currentTemplate, setTemplate] = useState('template_1');
    const handleTemplate = (key) => {
        setTemplate(key);
    };
    return (
        <div className="h-100">
            <Row className="h-100">
                <Col span={6}>
                    <Sidebar currentTemplate={currentTemplate} setTemplate={handleTemplate} />
                </Col>
                <Col span={18}>
                    <ContentWrapper currentTemplate={currentTemplate} />
                </Col>
            </Row>
        </div>
    )
}

export default Editor;
