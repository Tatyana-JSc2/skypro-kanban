import React from 'react'
import Login from '../components/Login/Login'

const LoginPage = ({setIsAuth, setToken, userLogin}) => {
  return (
    <Login setIsAuth={setIsAuth} setToken={setToken} userLogin={userLogin}/>
  )
}

export default LoginPage
