import { useState } from "react"
import  axios from 'axios';
import axiosInstance from "./axios/axiosInstance";

function App() {

  const [ name, setName ] = useState("");
  const [ gotResponse, setGotResponse ] = useState(false);
  const [ response, setResponse ] = useState(false);

  const handleClick = async () => {
    const response = await axiosInstance.get("api/greet/hello?name="+name);
    console.log(response.data);
    setGotResponse(true);
    setResponse(response.data);
  }

  return (
    <>
       {!gotResponse && 
       <>
        <input 
          onChange={(e) => {setName(e.target.value); console.log(name);}} 
          value={name}
          type="text" size="10" 
          placeholder="input Your name" 
        />
        <button onClick={handleClick}>Get Greeting</button>
       </>
      }
       {!!gotResponse && 
        <div>
          <h3>The response is </h3>
          <h4>{response}</h4>
          <button onClick={() => {setGotResponse(false); setResponse("");}} >Get Back</button>
        </div>
       }
    </>
  )
}

export default App
