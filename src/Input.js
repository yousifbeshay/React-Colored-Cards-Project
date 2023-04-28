import React from 'react' 
import Square from './Square'

const Input = ({colorValue,setColorValue,fontColor,setFontColor}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <label></label>
      <input
      autoFocus
      type="text"
      placeholder='Type the Color Name '
      required
      value = {colorValue}
      onChange={(e) =>
        setColorValue(e.target.value)
      }
      ></input>
      <button onClick={()=>{
        fontColor=== "white" ? setFontColor("black") : setFontColor("white")
      } }> Toogle Dark/Bright Text

      </button>
    </form>
  )
}

export default Input
