import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { updateEditorReducer } from '../../../services/editor/actions';
import ImageSettings from './ImageSettings';
import TextSettings from './TextSettings';

export default function EditSection() {
  const { targetStyle, selectedItemId } = useSelector(({ editor }) => ({
    selectedItemId: editor.selectedItemId,
    targetStyle: editor.targetStyle
  }))
  const dispatch = useDispatch();
  const getEditContent = () => {
    switch (selectedItemId) {
      case "general-image":
      case "listing-image":
      case "rental-image":
      case "sales-image":
        return <ImageSettings targetStyle={targetStyle} />;
      case "general-text":
        return <TextSettings targetStyle={targetStyle} />;
      default:
        return <span />
    }
  }

  const closeEditSection = () => {
    let data = {
      showEditSection: false,
      selectedItemId: null,
      targetStyle: null
    }
    dispatch(updateEditorReducer(data))
  }
  return (
    <Card title="Edit Object" extra={<CloseOutlined onClick={closeEditSection} />} className='edit-card'>
      {getEditContent()}
    </Card>
  )
}
