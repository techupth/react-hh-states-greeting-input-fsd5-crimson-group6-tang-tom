import { useState } from "react";
import "./App.css";

function App() {

const [greetingMessage , setGreetingMessage] = useState("Greeting Message")
const [inputGreetingMessage , setInputGreetingMessage ] = useState("")

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message"></label>
        <input id="greeting-message" type="text" value={inputGreetingMessage} onChange={(event)=>setInputGreetingMessage(event.target.value)}/>
      </div>

      <div className="buttons">
        <button onClick={()=>{
          setGreetingMessage(inputGreetingMessage)
        }}>Update text</button>
      </div>
    </div>
  );
}

export default App;
