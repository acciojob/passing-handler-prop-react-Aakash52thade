import React, { useState } from 'react'

const Selection = ({applyColor}) => {

    const [selectionStyle, setSelectionStyle] = useState({background: ""});

    function updateSelectionStyle(newStyle){
        setSelectionStyle(newStyle)
    }

  return (
    <div 
      className="fix-box" 
      style={selectionStyle}
      onClick={() => applyColor(updateSelectionStyle)}>
    </div>
  )
}

export default Selection