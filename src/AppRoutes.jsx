import { Paths } from './lib/paths'
import MainPage from './pages/MainPage'
import ExitPage from './pages/ExitPage'
import CardPage from './pages/CardPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
import { Route, Routes } from "react-router-dom"
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import NewCardPage from './pages/NewCardPage'



function AppRoutes() {


  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={Paths.MAIN} element={<MainPage />}>
            <Route path={Paths.CARD} element={<CardPage />} />
            <Route path={Paths.NEWCARD} element={<NewCardPage />} />
            <Route path={Paths.EXIT} element={<ExitPage />} />
          </Route>
        </Route>
        <Route path={Paths.LOGIN} element={<LoginPage />} />
        <Route path={Paths.REGISTER} element={<RegisterPage />} />
        <Route path={Paths.ERROR} element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default AppRoutes
