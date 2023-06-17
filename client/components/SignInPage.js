import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";

const SignInPage = ()=>{
  const Navigate = useNavigate();

  const onSubmitHandle = async (evt)=>{
    evt.preventDefault();

    console.log(userName)
    setUserName('')
    console.log(password)
    setPassword('')
    Navigate('/CurrentUser')
  };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return(
  <div id="SignUpPage">
    <h1>SnapShotChop</h1>
    <form onSubmit={onSubmitHandle}>

      <div className="signUpForm">
        <label htmlFor="userName">Enter Username: </label>
        <input type="text" name="userName" id="userName" value={userName} onChange={e=>setUserName(e.target.value)} required />
      </div>

      <div className="signUpForm">
        <label htmlFor="Password">Create A Password </label>
        <input type="password" name="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} required />
      </div>

       <div className="signUpForm">
        <input type="submit" value="LogIn!"/>
      </div>
        <Link to={'SignUp'}><h3>Don't Have a Login?</h3>
        <h4>SignUp Here!</h4> </Link>

    </form>

  </div>
  )
}

export default SignInPage;
