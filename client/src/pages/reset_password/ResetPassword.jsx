import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';
import styles from "./reset_password.module.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const {resetpasswordtoken} = useParams();
  const resetHandler = (e) => {
    console.log('button pressed', password, confirmPassword);
    e.preventDefault();
    axios.post(`${baseUrl}/auth/reset-now`, { password: password, resetPasswordToken: resetpasswordtoken }, { withCredentials: true }).then(res => {
      if (!res.data.status) {
        alert(res.data.message);
      }
      else {
        alert("successfully Password Change");
        navigate("/login");
      }
    })
  }

  return (
    <>
      <div className={styles.reset_box}>
        <h2>Reset Password</h2>
        <form onSubmit={resetHandler}>
          <div className={styles.user_box}>
            <input type="password" name="" required value={password} onChange={e => setPassword(e.target.value)} />
            <label>Password</label>
          </div>
          <div className={styles.user_box}>
            <input type="password" name="" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <label>Confirm Password</label>
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

export default ResetPassword;
