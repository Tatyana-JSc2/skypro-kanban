import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Paths } from "../../lib/paths";



function PrivateRoute({user}) {
    return (user ? <Outlet /> : <Navigate to={Paths.LOGIN}/>);
}

export default PrivateRoute;

