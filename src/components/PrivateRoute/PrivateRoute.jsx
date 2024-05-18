import { Navigate, Outlet } from "react-router-dom";
import { Paths } from "../../lib/paths";
import { useUser } from "../../context/hooks/useUser";



function PrivateRoute() {
    const {user} = useUser();
    return (user ? <Outlet /> : <Navigate to={Paths.LOGIN}/>);
}

export default PrivateRoute;

