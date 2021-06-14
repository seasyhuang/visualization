import React from 'react'

const Face = (props) => {

  const svgWidth = 960
  const svgHeight = 500
  const centerX = svgWidth/2
  const centerY = svgHeight/2
  const strokeWidth = 30
  const eyeOffsetX = 100
  const eyeOffsetY = 50
  const eyeRadius = 20

  return (
    <svg width={svgWidth} height={svgHeight}>
      <circle
        cx={centerX}
        cy={centerY}
        r={centerY - strokeWidth/2}
        strokeWidth={strokeWidth}
        fill="#FFD460"
        stroke="#F7C53F"
      />

      <circle
        r={eyeRadius}
        cx={centerX - eyeOffsetX}
        cy={centerY - eyeOffsetY}
        fill="black"
      />

      <circle
        r={eyeRadius}
        cx={centerX + eyeOffsetX}
        cy={centerY - eyeOffsetY}
        fill="black"
      />

    </svg>
  )
}

export default Face
