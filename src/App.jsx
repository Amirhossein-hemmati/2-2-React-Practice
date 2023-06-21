import ColorfulBox from "./components/ColorfulBox.jsx";
import Selector from "./components/Selector.jsx";
import "./App.css"

// import {useState} from "react";


function App() {
    // const [color,setColor] = useState('');

    // setColor()


    return (
        <div className={'colorful_items'}>
            <Selector/>
            <ColorfulBox/>
        </div>
    )
}

export default App
