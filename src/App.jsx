import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import WebSocket from '@tauri-apps/plugin-websocket';
import "./App.css";

function App() {
  const [morseCode, setMorseCode] = useState("");

  const handleInputChange = (event) => {
    //event.preventDefault();

    const value = event.target.value;

    // Only allow '.' and '-' characters
    if (/^[.-]*$/.test(value)) {
      setMorseCode(value); // Update state if the value is valid
     console.log(morseCode);
    }
  };

   // async function sigma() {
      
     // const ws = await WebSocket.connect('ws://127.0.0.1:8080');

     // ws.addListener((msg) => {
     //   console.log('Received Message:', msg);
     // });

     // await ws.send('Hello World!');

      //await ws.disconnect();
    //}

  return (
    <div className="App">
      <h1>Enter Morse Code</h1>

      <form onSubmit={handleInputChange}>      
        <input
        type="text"
        value={morseCode}
        onChange={handleInputChange}
        placeholder="Enter . and - only"
      />
      <button type="submit">Send Morse Code</button>
      
      </form>
      
      <span>{morseCode}</span>
    </div> 
  );
}

export default App;
