import { useContext } from "react";

// context
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
    const authContext = useContext(AuthContext)

    if (!authContext) {
        throw Error('not inside AuthContextProvider')
    }
    return authContext
}