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
import NewCardPage from './pages/NewCardPage'



function AppRoutes() {


  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  //JSON.parse(localStorage.getItem("user"))

  function exit() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(Paths.LOGIN);
  }

  // function userLogin(newUser) {
  //   setToken(newUser.token);
  // localStorage.setItem("user", JSON.stringify(newUser));
  //setUser(newUser);
  // navigate(Paths.MAIN);
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
            <Route path={Paths.NEWCARD} element={<NewCardPage />} />
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
