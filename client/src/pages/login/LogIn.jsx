import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';
import styles from "./logIn.module.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    axios.post(`${baseUrl}/auth/login`, { email: email, password: password }, { withCredentials: true }).then(res => {
      if (!res.data.status) {
        alert(res.data.message);
      }
      else {
        alert("successfully logged in");
        navigate("/");
      }
    })
  }
  return (
    <>
      <div className={styles.login_box}>
        <h2>Login</h2>
        <form onSubmit={loginHandler}>
          <div className={styles.user_box}>
            <input type="text" name="" required="" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Username</label>
          </div>
          <div className={styles.user_box}>
            <input type="password" name="" required="" value={password} onChange={e => setPassword(e.target.value)} />
            <label>Password</label>
          </div>
          <button type='submit'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default LogIn;
