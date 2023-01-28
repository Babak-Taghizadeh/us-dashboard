import React from 'react'
import LoginFooter from "../../components/Login-Footer/login-footer";

export default function ChangePass() {
  return (
    <div>
    <div className='container'>
        <h1>Enter email to recieve verification code</h1>
        <input type='password' placeholder='New Password'/>
        <input type='password' placeholder='Re-enter new Password' />
        <button>Continue</button>
        {/* <Link id='link' to="/forget-pass">Forgot Password?</Link> */}
        <p>Fields must have same passwords!</p>
    </div>
    <LoginFooter />
    </div>
  )
}
