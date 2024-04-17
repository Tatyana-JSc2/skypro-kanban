import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Paths } from "../../lib/paths";



function PrivateRoute({isAuth}) {
    return (isAuth ? <Outlet /> : <Navigate to={Paths.LOGIN}/>);
}

export default PrivateRoute;

