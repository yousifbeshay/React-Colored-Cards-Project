import React from 'react'

const Square = ({colorValue,fontColor}) => {
  return (
    
      <div className ='square'
      style={{backgroundColor:colorValue ,
      color: fontColor==="white" ? "white" : "black" }}
      >
        <p>{colorValue?colorValue:"Empty Color"}</p>
      
      </div>
  )
}

export default Square
