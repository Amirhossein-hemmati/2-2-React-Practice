import ColorfulBox from "./components/ColorfulBox.jsx";
import Selector from "./components/Selector.jsx";
import "./App.css"
import {useState} from "react";


function App() {
    const [color,setColor] = useState("0");


    const changeHandler = (e) => {
        setColor (e.target.value)
        }


    return (
        <div className={'colorful_items'}>
            <Selector
                change = {changeHandler}
                color={color}
            />
            <ColorfulBox color = {color}/>
        </div>
    )
}

export default App
