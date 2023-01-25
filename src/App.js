import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles.css'
import Login from './pages/login/login'
import EnterEmail from './pages/login/enter-email'
import ChangePass from './pages/login/change-pass'

export default function App() {
    return (
      <div>
        <Routes>
            <Route path='/' element={<Login />} />     
            <Route path='/send-email' element={<EnterEmail />} />   
            <Route path='/change-pass' element={<ChangePass />} />   
            <Route path='/change-pass' element={<ChangePass />} />   
        </Routes>
    </div>
  )
}
