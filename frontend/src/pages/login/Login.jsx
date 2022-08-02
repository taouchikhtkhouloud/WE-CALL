import './login.scss'
import React from 'react';
//import { Link } from "react-router-dom";
import logo from '../../images/WE CALL.png'
import { Link } from 'react-router-dom';
import Axios from "axios";
import { useState } from 'react';
import { response } from 'express';
const Login = () => {
  const [username, setUsername]= useState("");
  const [password, setPassword]= useState("");
  
  const login = () =>{
    Axios.post("http://localhost:1337/login", {
      username: username,
      password: password,
    }).then((response)=>{
      console.log(response);
    })
  }
  return (
    <div className="container">

      
   
      

      <div className="wrapperr" >
      <img src={logo} alt="" className='logoImg1' />
        
        <h1 className="title">Se connecter</h1>
        <form className="form" action="../../login"method="post">
          <input className="input" type="text" name="username" placeholder="username" onChange={(e)=>{setUsername(e.target.value);}} />
          <input className="input" type="password" name="password" placeholder="mot de passe" onChange={(e)=>{setPassword(e.target.value);}} />
          <Link to="/home" style={{ textDecoration: "none" }}>

          <button className="button" type="submit" onClick={login}>Se connecter</button>
          </Link>
         
        </form>
      </div>
      
   
      
    </div>
  );
};

export default Login;