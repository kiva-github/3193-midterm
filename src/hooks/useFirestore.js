import { useState } from 'react'

// context
import { useAuthContext } from './useAuthContext'

// firebase 
import { doc, getDoc, increment, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../utils/firebase/config'

export const useFirestore = () => {
    const [favoriteTeam, setFavoriteTeam] = useState(null)
    const [cardCount, setCardCount] = useState(null)
    const [error, setError] = useState(null)
    const { user } = useAuthContext()

    const getUserDocs = async () => {
        setError(null)

        try {
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setFavoriteTeam(docSnap.data().favoriteTeam)
                setCardCount(docSnap.data().cardCount)
                setError(null)
              } else {
                setError('Document does not exist')
              }
        } catch (err) {
            setError(err.message)
        }
    }

    const addCard = async (series, category, type, cardData, quantity) => {
        console.log('inside addCard')
        setError(null)


        const ref = doc(db, 'users', `${user.uid}`, 'my-cards', `${series}`, `${category}`, `${type}`, 'cards', `${cardData.cardNumber}`)
        const docSnap = await getDoc(ref)

        if (docSnap.exists()) {
            try {
                await updateDoc(ref, {
                    quantityCollected: increment(quantity)
                })
                updateCardCount(quantity)
                setError(null)
            } catch (err) {
                setError(err.message)
                alert(err.message)
            }
        } else {
            console.log('doc doesnt exist, creating now...')
            try {
                await setDoc(ref, {
                    cardAttributes: cardData.cardAttributes,
                    cardNumber: cardData.cardNumber,
                    cardType: cardData.cardType,
                    name: cardData.name,
                    team: cardData.team,
                    quantityCollected: quantity
                })
                updateCardCount(quantity)
                setError(null)
            } catch (err) {
                setError(err.message)
                alert(err.message)
            }
        }
    }

    const updateCardCount = async (quantity) => {
        setError(null)
        const countRef = doc(db, 'users', `${user.uid}`)
        const docSnap = await getDoc(countRef)
        if (docSnap.exists()) {
            try {
                await updateDoc(countRef, {
                    cardCount: increment(quantity)
                })
                setError(null)
            } catch (err) {
                setError(err.message)
            }
        } else {
            setError("can't find doc")
        }
    }

    return { cardCount, error, favoriteTeam, getUserDocs, addCard }
}