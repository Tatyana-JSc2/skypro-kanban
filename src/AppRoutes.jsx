import React, { useState } from 'react'
import { Paths } from './lib/paths'
import MainPage from './pages/MainPage'
import ExitPage from './pages/ExitPage'
import CardPage from './pages/CardPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
import { Route, Routes, useNavigate } from "react-router-dom"
import PrivateRoute from './components/PrivateRoute/PrivateRoute'



function AppRoutes() {

  //function User() {
  //  const user = localStorage.getItem("user");
  //  return (user? true : false);
  // }
  //function getUserFromLocalStorage() {
  //  try {
  //    return JSON.parse(window.localStorage.getItem("user"));
  //  } catch (error) {
  //    return null;
  //  }
  // }

  const [user, setUser] = useState(null);
  //const [token, setToken] = useState(null);
  const navigate = useNavigate();



  function exit() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(Paths.LOGIN);
  }

  //function userLogin(newUser) {
  //  setToken(newUser.token);
  //  localStorage.setItem("user", JSON.stringify(newUser));
  //  setIsAuth(JSON.parse(localStorage.getItem("user")));
  //  navigate(Paths.MAIN);
  //}
  function userReg(newUser) {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    navigate(Paths.LOGIN);
  }

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path={Paths.MAIN} element={<MainPage user={user} />}>
            <Route path={Paths.CARD} element={<CardPage />} />
            <Route path={Paths.EXIT} element={<ExitPage exit={exit} />} />
          </Route>
        </Route>
        <Route path={Paths.LOGIN} element={<LoginPage setUser={setUser} />} />
        <Route path={Paths.REGISTER} element={<RegisterPage userReg={userReg} />} />
        <Route path={Paths.ERROR} element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default AppRoutes
