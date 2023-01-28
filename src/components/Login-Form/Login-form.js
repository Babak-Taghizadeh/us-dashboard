import React from 'react'
import { Link } from 'react-router-dom'
import LoginformCSS from './Login-form.module.css'

export default function Loginform() {
  return (
      <div className={LoginformCSS.container}>
      <input type='text' placeholder='Email'/>
      <input type='password' placeholder='Password' />
      <button>Log In</button>
      <Link id='link' to="/send-email">Forgot Password?</Link>
      <p>The credential you enterd did not match</p>
    </div> 
  )
}
