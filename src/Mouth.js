import { arc } from 'd3'

export const Mouth = ({ mouthWidth, mouthRadius }) => {
    const mouthArc = arc()
      .innerRadius(mouthWidth)
      .outerRadius(mouthRadius)
      .startAngle((Math.PI/2)*1.3)
      .endAngle((Math.PI*3/2)*0.9)

    return <path d={mouthArc()} />

  }
