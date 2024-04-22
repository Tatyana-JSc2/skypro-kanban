import React from 'react'
import Login from '../components/Login/Login'

const LoginPage = ({setIsAuth, setToken}) => {
  return (
    <Login setIsAuth={setIsAuth} setToken={setToken}/>
  )
}

export default LoginPage
