import React from 'react'

export default function Video() {
  return (
    <div className="node-content">
      <video className="node-content" width="600" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
