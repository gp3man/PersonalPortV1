import React,{useState} from "react";

import { useNavigate } from "react-router-dom";

const ContactForm = ()=>{
  const Navigate = useNavigate();
  const onSubmitHandle = async (evt)=>{
    evt.preventDefault();
    console.log(userName)
    setUserName('')
    console.log(email)
    setEmail('')
    console.log(message)
    setMessage('')
    Navigate('/')
  };
  const [userName, setUserName] = useState("Name");
  const [email, setEmail] = useState("Email");
  const [message, setMessage] = useState("Message Or Friendly Project Idea");

  return(
  <div id="contactForm">
    <h1>Contact Me</h1>
    <small>If you made it this far, Let's get Connected!</small>

    <form onSubmit={onSubmitHandle}>
      <div className="contactForm">
        {/* <label htmlFor="userName">Enter Name: </label> */}
        <input type="text" name="userName" id="userName" value={userName} onChange={e=>setUserName(e.target.value)} required />
      </div>

      <div className="contactForm">
        {/* <label htmlFor="email">Enter your email: </label> */}
        <input type="email" name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      </div>

      <div className="contactForm">
        {/* <label htmlFor="message">Message Or Friendly Project Idea: </label> */}
        <input type="text" name="message" id="message" value={message} onChange={e=>setMessage(e.target.value)} required />
      </div>

       <div className="contactForm">
        <input type="submit" value="Full-Send!"/>
      </div>
    </form>
  </div>
  )
}

export default ContactForm;
