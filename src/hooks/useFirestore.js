import { useState } from 'react'

// context
import { useAuthContext } from './useAuthContext'

// firebase 
import { doc, getDoc } from 'firebase/firestore'
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
    return { cardCount, error, favoriteTeam, getUserDocs }
}