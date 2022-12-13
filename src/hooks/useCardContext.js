import { useContext } from "react";

// context
import { CardContext } from '../context/CardContext'

export const useCardContext = () => {
    const cardContext = useContext(CardContext)

    if (!cardContext) {
        throw Error('not inside CardContextProvider')
    }
    return cardContext
}