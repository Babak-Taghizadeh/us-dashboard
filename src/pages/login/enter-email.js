import React from 'react'
import { Link } from 'react-router-dom'
import LoginFooter from "../../components/Login-Footer/login-footer";

export default function EnterEmail() {
  return (
    <div>
    <div className='container'>
      <h1>Enter email to recieve verification code</h1>
      <input type='text' placeholder='Email'/>
      <button>Continue</button>
      <Link id='link' to="/change-pass">change pass</Link>
      <p>Email is not Valid</p>
    </div>
    <LoginFooter />
    </div>
  )
}
