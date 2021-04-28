import React from 'react';

import { TEMPLATES } from '../../Config/Constant';
import { onDrop, onDragOverTarget, onDragEnter } from '../../Utils';

const ContentWrapper = ({ currentTemplate }) => {
    const content = TEMPLATES[currentTemplate];

    return (
        <div
            className="content-wrapper"
            dangerouslySetInnerHTML={{ __html: content.html }}
            onDrop={onDrop}
            onDragOver={onDragOverTarget}
            onDragEnter={onDragEnter}
        >
        </div>
    )
}

export default ContentWrapper;
