import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="" className="login__logo" />
      <div className="login__form">
        <h1>Sign In</h1>
        <form action=""></form>
      </div>
    </div>
  )
}

export default Login