import './login.css'
import React from 'react';
//import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="container">

      
   
      

      <div className="wrapper" >
        
        <h1 className="title">Se connecter</h1>
        <form className="form" action="../../login"method="post">
          <input className="input" type="text" name="email" placeholder="email" />
          <input className="input" type="password" name="password" placeholder="mot de passe" />
          <button className="button" type="submit">Se connecter</button>
         {/*  <Link><p className="link" >VOUS NE VOUS SOUVENEZ PAS DU MOT DE PASSE ?</p></Link>
          <Link ><p className="link">CRÉER UN NOUVEAU COMPTE</p></Link> */}
        </form>
      </div>
      
   
      
    </div>
  );
};

export default Login;