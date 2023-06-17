import React,{useState} from "react";

import { useNavigate } from "react-router-dom";

const SignUpComp = ()=>{
  const Navigate = useNavigate();

  const onSubmitHandle = async (evt)=>{
    evt.preventDefault();
    console.log(firstName)
    setFirstName('')
    console.log(lastName)
    setLastName('')
    console.log(userName)
    setUserName('')
    console.log(email)
    setEmail('')
    console.log(password)
    setPassword('')
    Navigate('/')
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return(
  <div id="SignUpPage">
    <h1>SignUp!</h1>
    <form onSubmit={onSubmitHandle}>
      <div className="signUpForm">
        <label htmlFor="firstName">Enter Firstname: </label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={e=>setFirstName(e.target.value)} required />
      </div>
      <div className="signUpForm">
        <label htmlFor="lastName">Enter Lastname: </label>
        <input type="text" name="lastName" id="lastName" value={lastName} onChange={e=>setLastName(e.target.value)} required />
      </div>
      <div className="signUpForm">
        <label htmlFor="userName">Enter Username: </label>
        <input type="text" name="userName" id="userName" value={userName} onChange={e=>setUserName(e.target.value)} required />
      </div>
      <div className="signUpForm">
        <label htmlFor="email">Enter your email: </label>
        <input type="email" name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      </div>
      <div className="signUpForm">
        <label htmlFor="Password">Create A Password </label>
        <input type="password" name="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} required />
      </div>
       <div className="signUpForm">
        <input type="submit" value="Full-Send!"/>
      </div>
    </form>
  </div>
  )
}

export default SignUpComp;
