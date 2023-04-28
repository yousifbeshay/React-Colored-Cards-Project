import Square from "./Square"
import Input from "./Input"
import {useState} from "react"
function App() {
  const [colorValue,setColorValue] = useState("");
  const [fontColor,setFontColor] = useState("black");

  return (
    <div className="App">
    <h1> Colored Cards Project</h1>

    <Square 
    colorValue={colorValue}
    fontColor={fontColor}
    />
    <Input 
    colorValue={colorValue}
    setColorValue={setColorValue}
    setFontColor={setFontColor}
    fontColor={fontColor}
    />

    </div>
  );
}

export default App;
