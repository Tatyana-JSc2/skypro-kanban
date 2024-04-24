import React from 'react'
import Register from '../components/Register/Register'

const RegisterPage = ({setIsAuth, userReg}) => {
  return (
    <Register setIsAuth={setIsAuth} userReg={userReg}/>
  )
}
export default RegisterPage
