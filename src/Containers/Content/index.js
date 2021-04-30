import React from 'react';
import { useDispatch } from 'react-redux';

import { TEMPLATES } from '../../Config/Constant';
import { onDrop, onDragOverTarget, onDragEnter } from '../../Utils';
import { updateEditorReducer } from '../../services/editor/actions';

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
        >
        </div>
    )
}

export default React.forwardRef(ContentWrapper);