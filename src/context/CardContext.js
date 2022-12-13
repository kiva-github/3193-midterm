import { createContext, useReducer } from "react";

export const CardContext = createContext()

export const cardReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CARD_DATA':
            return { ...state, cardData: action.payload }
        case 'UPDATE_FETCHED_CARD_DATA':
            return { ...state, fetchedCardData: action.payload }
        default:
            return state
    }
}

export const CardContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cardReducer, {
        cardData: null,
        fetchedCardData: null
    })
    console.log('CardContext state:', state)

    return (
        <CardContext.Provider value={{ ...state, dispatch }}>
            { children }
        </CardContext.Provider>
    )
}