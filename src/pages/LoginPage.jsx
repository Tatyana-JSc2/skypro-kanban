import React from 'react'
import Login from '../components/Login/Login'

const LoginPage = ({setIsAuth, token}) => {
  return (
    <Login setIsAuth={setIsAuth}  token={token}/>
  )
}

export default LoginPage
