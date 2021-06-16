import React from 'react'
import { arc } from 'd3'

const Face = (props) => {

  const svgWidth = 960
  const svgHeight = 500
  const centerX = svgWidth/2
  const centerY = svgHeight/2
  const strokeWidth = 30
  const eyeOffsetX = 100
  const eyeOffsetY = 50
  const eyeRadius = 20

  const mouthWidth = 90
  const mouthRadius = 100

  const mouthArc = arc()
    .innerRadius(mouthWidth)
    .outerRadius(mouthRadius)
    .startAngle((Math.PI/2)*1.3)
    .endAngle((Math.PI*3/2)*0.9)

  return (
    <svg width={svgWidth} height={svgHeight}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
          r={centerY - strokeWidth/2}
          strokeWidth={strokeWidth}
          fill="#FFD460"
          stroke="#F7C53F"
        />

        <circle
          r={eyeRadius}
          cx={- eyeOffsetX}
          cy={- eyeOffsetY}
          fill="black"
        />

        <circle
          r={eyeRadius}
          cx={+ eyeOffsetX}
          cy={- eyeOffsetY}
          fill="black"
        />

        <path d={mouthArc()} />
      </g>

    </svg>
  )
}

export default Face
