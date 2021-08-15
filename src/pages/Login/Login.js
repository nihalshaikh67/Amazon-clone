import React, { useState ,useEffect } from 'react';
import AmazonLogo from "../../Amazon_Logo.png"
import "./Login.css"
import {Link ,useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { loginInitiate } from '../../redux/actions';


const Login = () => {

    const[email,setEmail]  = useState("");
    const [password,setPassword] = useState("");


const {user} = useSelector((state) => state.data);

let dispatch = useDispatch();


let history = useHistory();
useEffect(()=>{
if(user){
    history.push("/")
}
},[user,dispatch])


   const signIn = e =>{
     e.preventDefault();
     dispatch(loginInitiate(email,password));
     setEmail("");
     setPassword("")
   }


    return (
        <div className="login">
             <Link to="/">
             <img src={AmazonLogo} className="login-logo" alt="logo"/>
             </Link>
             <div className="login-container">
                 <h1>Sign In</h1>
                 <form>
                     <h4>E-mail</h4>
                     <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                     <h4>Password</h4>
                     <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                     <button type="submit" onClick={signIn} className="login-signIn">
                         Sign In
                     </button>
                 </form>
                 <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
             </div>
           <p>New to Amazon ?</p>
           <Link to="/register">
           <button className="login-register">Create Your Amazon Account</button>
           </Link>
        </div>
    )
}

export default Login
