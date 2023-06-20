import React from "react";
import { useNavigate } from "react-router-dom";

const Four0FourPage=()=>{
  const Navigate = useNavigate()
  const Back =()=>{
    Navigate('/')
  }
return(
  <div id="NotFound"><iframe allow="fullscreen" height="270" src="https://giphy.com/embed/H8oJsiC2isDdEPZhtJ/video" width="480"></iframe>
  <h1> Sorry, You Shouldn't be here. Let's get you back...</h1>
  <button onClick={Back}>Back To Safety</button>
  </div>
)
}
export default Four0FourPage;
