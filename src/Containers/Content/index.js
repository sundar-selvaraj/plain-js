import React from 'react';

import { TEMPLATES } from '../../Config/Constant';
import { onDrop, onDragOverTarget, onDragEnter, onDragLeave } from '../../Utils';

const ContentWrapper = ({ currentTemplate }) => {
    const content = TEMPLATES[currentTemplate];

    return (
        <div
            className="content-wrapper"
            dangerouslySetInnerHTML={{ __html: content.html }}
            onDrop={onDrop}
            onDragOver={onDragOverTarget}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
        >
        </div>
    )
}

export default ContentWrapper;
