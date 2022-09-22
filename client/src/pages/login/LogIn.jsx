import React from 'react'
import "./logIn.css"

const LogIn = () => {

    const play = () => {
        const name = document.getElementById('name').value
        const tel  = document.getElementById('tel').value
        console.log('Play', name, tel)
    }
  return (
    <div>
       <div className="login-wrapper">
      <form className="form">
        <h2>Login</h2>
        <div className="input-group">
          <input type="email" name="loginUser" id="loginUser" required />
          <label for="loginUser">Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            required
          />
          <label for="loginPassword">Password</label>
        </div>
        <input type="submit" value="Login" className="submit-btn" />
      </form>
    </div>
    </div>
  )
}

export default LogIn