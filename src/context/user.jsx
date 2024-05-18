import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../lib/paths";

export const UserContext = createContext();

function checkUser() {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        return user;
    } catch (error) {
        localStorage.removeItem("user");
        return null;
    }
}


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(checkUser);
    const navigate = useNavigate();

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

    return <UserContext.Provider value={{ user, setUser, exit, userReg }}>
        {children}
    </UserContext.Provider>;
};

