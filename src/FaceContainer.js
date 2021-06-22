export  const FaceContainer = ({ children, svgWidth, svgHeight, centerX, centerY }) => {
    return(
      <svg width={svgWidth} height={svgHeight}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          { children }
        </g>
      </svg>
    )
  }
