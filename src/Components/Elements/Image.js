import React from 'react';
import { PictureFilled } from '@ant-design/icons';

import Wrapper from './Wrapper';

const Image = ({ url }) => {
    return (
        <Wrapper>
            {url
                ? <img src={url} alt="wrapper" />
                : <div className="image-content-wrapper node-content">
                    <PictureFilled className="image-content" />
                </div>
            }
        </Wrapper>
    );
}

export default Image;
