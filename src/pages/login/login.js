import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import LoginFooter from '../../components/login-footer.js'
import './login.css'

export default function Login() {
  // const [data, setData] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)


  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => console.log(res.data))
  // }, [])

  return (
    <div >
      <div className='container'>
      <input type='text' placeholder='Email'/>
      <input type='password' placeholder='Password' />
      <button>Log In</button>
      <Link id='link' to="/send-email">Forgot Password?</Link>
      <p>The credential you enterd did not match</p>
      </div>  
      <LoginFooter />
    </div>
  )
}
