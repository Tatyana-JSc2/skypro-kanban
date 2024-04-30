import { useContext } from "react";
import { UserContext } from "../user";


export function useUser() {
    return useContext(UserContext);  
}