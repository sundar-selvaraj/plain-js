import React from 'react'
import Wrapper from './Wrapper';

const defaultProps = {
  padding: ['12', '12', '12', '12'],
  margin: ['10', '10', '10', '10'],
  color: '#89182D',
  fontSize: 15,
  background: 'white',
  border: '3px solid #89182D',
  fontWeight: 'bold',
  text: 'View Property'
};


export default function Button(props) {

  const mainProps = {
    ...defaultProps,
    ...props,
  };

  const {
    text,
    fontSize,
    fontWeight,
    padding,
    margin,
    color,
    background,
    border
  } = mainProps;

  return (
    <Wrapper>
      <div className="node-content">
        <button
          className="node-content"
          style={{
            fontSize,
            fontWeight,
            textTransform: 'capitalize',
            margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
            padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
            color,
            background,
            border
          }}
        >
          {text}
        </button>
      </div>
    </Wrapper>
  )
}
