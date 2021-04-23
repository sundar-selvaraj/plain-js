import React from 'react';
import { PictureFilled } from '@ant-design/icons';

import { onDragOverTarget } from '../../Utils';

const Image = ({ url }) => {
    return (
        <div className="node-content" onDragOver={onDragOverTarget}>
            {url
                ? <img src={url} alt="wrapper" />
                : <div className="image-content-wrapper node-content">
                    <PictureFilled className="image-content" />
                </div>
            }
        </div>
    );
}

export default Image;
