export const Eyes = ({ eyeRadius, eyeOffsetX, eyeOffsetY }) => {
    return(
      <>
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
      </>
    )
  };
