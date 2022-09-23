import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';
import "./logIn.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    axios.post(`${baseUrl}/auth/login`, {email: email, password: password}).then(res => {
      if(!res.data.status) {
        alert(res.data.message);
      }
      else {
        alert("successfully logged in");
        navigate("/");
      }
    })
  }
  return (
    <div>
       <div className="login-wrapper">
      <form className="form" onSubmit={loginHandler}>
        <h2>Login</h2>
        <div className="input-group">
          <input type="email" name="loginUser" id="loginUser" onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="loginUser">Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="loginPassword">Password</label>
        </div>
        <input type="submit" value="Login" className="submit-btn" />
      </form>
    </div>
    </div>
  )
}

export default LogIn;
