import React from 'react';
import { PictureFilled } from '@ant-design/icons';

import Wrapper from './Wrapper';

const Image = ({ url }) => {
    return (
        <Wrapper>
            {url
                ? <img src={url} alt="wrapper" />
                : <div style={{
                    backgroundColor: '#C1DAE6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '10px',
                    height: '230px',
                    // width: '600px'
                }} className="node-content">
                    <PictureFilled style={{ color: '#ffffff', fontSize: '100px' }} className="node-content" />
                </div>
            }
        </Wrapper>
    );
}
export default Image;
