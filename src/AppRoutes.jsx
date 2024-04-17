import React, { useState } from 'react'
import { Paths } from './lib/paths'
import MainPage from './pages/MainPage'
import ExitPage from './pages/ExitPage'
import CardPage from './pages/CardPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
import { Route, Routes } from "react-router-dom"
import PrivateRoute from './components/PrivateRoute/PrivateRoute'



function AppRoutes() {

  function User() {
    const user = localStorage.getItem("user");
    return (user === "user" ? true : false);
  }

  const [isAuth, setIsAuth] = useState(User);

  const [token, setToken] = useState(null);

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={Paths.MAIN} element={<MainPage />}>
            <Route path={Paths.CARD} element={<CardPage />} />
            <Route path={Paths.EXIT} element={<ExitPage setIsAuth={setIsAuth} />} />
          </Route>
        </Route>
        <Route path={Paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth} token={token} />} />
        <Route path={Paths.REGISTER} element={<RegisterPage setIsAuth={setIsAuth} setToken={setToken}/>} />
        <Route path={Paths.ERROR} element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default AppRoutes
