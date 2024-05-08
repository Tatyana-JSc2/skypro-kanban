import React, { createContext, useState } from "react";


export const TasksContext = createContext();


export const TasksProvider = ({ children }) => {
    const [taskList, setTaskList] = useState([]);

    const statusList = [
        "Без статуса",
        "Нужно сделать",
        "В работе",
        "Тестирование",
        "Готово",
    ];
    //const navigate = useNavigate();
    // function userReg(newUser) {
    //     localStorage.setItem("user", JSON.stringify(newUser));
    //    setUser(newUser);
    //     navigate(Paths.LOGIN);
    // }

    return <TasksContext.Provider value={{ taskList, setTaskList, statusList }}>
        {children}
    </TasksContext.Provider>;
};
