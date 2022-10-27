import { useContext } from "react";

// context
import { UserContext } from "../context/UserContext";

export const useUserContext = () => {
    const userContext = useContext(UserContext)

    if (!userContext) {
        throw Error('not inside UserContextProvider')
    }
    return userContext
}