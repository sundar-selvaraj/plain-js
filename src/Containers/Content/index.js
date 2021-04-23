import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { onDrop, onDragOverTarget, onDragEnter, onDragLeave } from '../../Utils';

const ContentWrapper = (props) => {
    const [htmlContent, setContent] = useState(null);

    useEffect(() => {
        axios.get("/assets/1.1.html")
            .then(res => {
                console.log('res-------------', res);
                // const json = lz.decompress(lz.decodeBase64(res.data));
                // console.log('JSON', json);
                if (res.data) {
                    setContent(res.data);
                }
            })
            .catch(error => {
                console.log('error---------', error);
            });
    }, []);

    return (
        <div
            className="content-wrapper"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            onDrop={onDrop}
            onDragOver={onDragOverTarget}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
        >

        </div>
    )
}

export default ContentWrapper;
