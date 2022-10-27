import { createContext, useReducer } from "react";

export const UserContext = createContext()


export const userReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TEAM':
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export const UserContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, {
        teamGradient: ['38,91,91', '20,44,83']
    })


    console.log('UserContext state:', state)

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            { children }
        </UserContext.Provider>
    )
}