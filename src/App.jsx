import "./App.css";
import { useState } from "react";

function App() {
  const [defaultMsg, inputGreeting] = useState("Greeting Message");
  const [inputValue, setInputValue] = useState("");

  const handleGreeting = () => {
    inputGreeting(inputValue);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="greeting-container">{defaultMsg}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>

      <div className="buttons">
        <button onClick={handleGreeting}>Update text</button>
      </div>
    </div>
  );
}

export default App;
