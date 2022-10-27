import { useState } from 'react'

// firebase 
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../utils/firebase/config'

// context
import { useUserContext } from './useUserContext'
import { useAuthContext } from './useAuthContext'

export const useFirestore = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useUserContext()
    const { user } = useAuthContext()

    const getTeamTheme = async () => {
        setError(null)
        setIsPending(true)
        
        try {
            // console.log(user)
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                dispatch({ type: 'UPDATE_TEAM', payload: docSnap.data().favoriteTeam });
              } else {
                console.log("Document does not exist");
              }
            setError(null)
            setIsPending(false)
        } catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }
    return { getTeamTheme, error, isPending }
}