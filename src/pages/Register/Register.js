import React from 'react';
import "./Register.css";
import {Link , useHistory} from 'react-router-dom';
import { useState ,useEffect } from 'react';
import AmazonLogo from "../../Amazon_Logo.png"
import {useSelector,useDispatch} from 'react-redux'
import { registerInitiate } from '../../redux/actions';


const Register = () => {

const[email,setEmail] = useState("");
const[password,setPassword]  = useState("");

const { user } = useSelector((state) => state.data)

const history = useHistory();



useEffect(() =>{
   if(user)
  history.push("/")
   
},[user,history]);


let dispatch  = useDispatch();
const register = (e) =>{
    e.preventDefault();
    dispatch(registerInitiate(email,password));
    setEmail("");
    setPassword("");
}

    return (
        <div className="register">
         <Link to="/">
           <img src={AmazonLogo} className="register-logo" alt="logo"/>
         </Link>
         <div className="register-container">
             <h1>Create Account</h1>
             <form>
                 <h5>E-mail</h5>
                 <input type="text" value={email} onChange={ (e)=>setEmail(e.target.value)}/>
                 <h5>Password</h5>
                 <input type="text" value={password} onChange={ (e)=>setPassword(e.target.value)}/>
                 <button type="submit" className="continue" onClick={register}>
                     Continue
                 </button>
                 <div className="detail">
                     <p>ALready have an account ?  </p>
                     <Link to="/login" className="signin-link">
                         <p>Sign In</p>
                     </Link>
                 </div>
             </form>
         </div>
        </div>
    )
}

export default Register
