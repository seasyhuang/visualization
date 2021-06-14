import React from 'react'

const Face = (props) => {

  const svgWidth = 960
  const svgHeight = 500

  return (
    <svg width={svgWidth} height={svgHeight}>
      <circle
        r="200"
        cx="460"
        cy="250"
        fill="#FFD460"
        stroke="#F7C53F"
        strokeWidth="10px"
      />

      <circle
        r="20"
        cx="350"
        cy="220"
        fill="black"
      />

      <circle
        r="20"
        cx="550"
        cy="220"
        fill="black"
      />

    </svg>
  )
}

export default Face
