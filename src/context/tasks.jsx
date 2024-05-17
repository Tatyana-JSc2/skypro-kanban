import { createContext, useState } from "react";


export const TasksContext = createContext();


export const TasksProvider = ({ children }) => {
    const [taskList, setTaskList] = useState([]);

    const GetColor = (anyTheme) => {
        switch (anyTheme) {
            case "Web Design":
                return "_orange"
            case "Research":
                return "_green"
            case "Copywriting":
                return "_purple"
            default:
                return "_gray"
        }
    }

    const statusList = [
        "Без статуса",
        "Нужно сделать",
        "В работе",
        "Тестирование",
        "Готово",
    ];
    

    return <TasksContext.Provider value={{ taskList, setTaskList, statusList, GetColor }}>
        {children}
    </TasksContext.Provider>;
};
