import React from 'react'
import { PlayCircleOutlined, } from '@ant-design/icons';
import Wrapper from './Wrapper'

const defaultProps = {
  padding: ['12', '12', '12', '12'],
  margin: ['10', '10', '10', '10'],
  src: null
  // src: "https://www.w3schools.com/html/mov_bbb.mp4"
};

export default function Video(props) {

  const mainProps = {
    ...defaultProps,
    ...props,
  };

  const {
    // padding,
    // margin,
    src
  } = mainProps;

  return (
    <Wrapper>
      <div className="node-content">
        <div className="image-content-wrapper node-content">
          {
            src ?
              <video className="node-content" style={{width: 'inherit', height: 'inherit'}} controls>
                <source src={src} type="video/mp4" />
              </video>
              :
              <PlayCircleOutlined className="image-content" />
          }
        </div>
      </div>
    </Wrapper>
  )
}
