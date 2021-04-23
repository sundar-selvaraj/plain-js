import React from 'react';
import { Row, Col } from 'antd';

import { Sidebar, ContentWrapper } from './Containers';

const Editor = () => {
    return (
        <div>
            <Row>
                <Col flex={1}>
                    <Sidebar />
                </Col>
                <Col flex={5}>
                    <ContentWrapper />
                </Col>
            </Row>
        </div>
    )
}

export default Editor;
