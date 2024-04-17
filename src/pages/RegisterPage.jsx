import React from 'react'
import Register from '../components/Register/Register'

const RegisterPage = ({setIsAuth, setToken}) => {
  return (
    <Register setIsAuth={setIsAuth} setToken={setToken}/>
  )
}
export default RegisterPage
