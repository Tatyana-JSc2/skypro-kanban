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

  //function User() {
  //  const user = localStorage.getItem("user");
  //  return (user? true : false);
  // }

  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  // const getToken = () => {
  //   const token = user ? `Bearer ${user.token}` : undefined;
  //   return token;
  // };

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={Paths.MAIN} element={<MainPage token={token} />}>
            <Route path={Paths.CARD} element={<CardPage />} />
            <Route path={Paths.EXIT} element={<ExitPage setIsAuth={setIsAuth} />} />
          </Route>
        </Route>
        <Route path={Paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth} setToken={setToken} />} />
        <Route path={Paths.REGISTER} element={<RegisterPage setIsAuth={setIsAuth} />} />
        <Route path={Paths.ERROR} element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default AppRoutes
