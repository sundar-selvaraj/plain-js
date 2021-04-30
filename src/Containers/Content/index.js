import React from 'react';
import { useDispatch } from 'react-redux';

import { TEMPLATES } from '../../Config/Constant';
import { updateEditorReducer } from '../../services/editor/actions';
import { onDrop, onDragOverTarget, onDragEnter, onDragLeave } from '../../Utils';

const ContentWrapper = ({ currentTemplate }, ref) => {
    const dispatch = useDispatch()

    const content = TEMPLATES[currentTemplate];

    const cb = data => {
        dispatch(updateEditorReducer(data))
    }

    return (
        <div
            ref={ref}
            className="content-wrapper"
            dangerouslySetInnerHTML={{ __html: content.html }}
            onDrop={(e) => onDrop(e, cb)}
            onDragOver={onDragOverTarget}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
        >
        </div>
    )
}

export default React.forwardRef(ContentWrapper);