import React from 'react'
import { FaceContainer } from './FaceContainer'
import { BackgroundCircle } from './BackgroundCircle'
import { Eyes } from './Eyes'
import { Mouth } from './Mouth'

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

  return (
    <FaceContainer
      svgWidth = { svgWidth }
      svgHeight = { svgHeight }
      centerX = { centerX }
      centerY = { centerY }
    >
        <BackgroundCircle
          radius = {centerY - strokeWidth/2}
          strokeWidth = {strokeWidth}
        />
        <Eyes
          eyeRadius = {eyeRadius}
          eyeOffsetX = {eyeOffsetX}
          eyeOffsetY = {eyeOffsetY}
        />
        <Mouth
          mouthWidth = {mouthWidth}
          mouthRadius = {mouthRadius}
        />
    </FaceContainer>

  )
}

export default Face
