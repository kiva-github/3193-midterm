import { createContext, useReducer } from "react";

// context
export const UserContext = createContext()

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TEAM':
            return { ...state, teamGradient: action.payload }
        default:
            return state
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {
        teamGradient: null
    })
    // console.log('UserContext state:', state)

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            { children }
        </UserContext.Provider>
    )
}