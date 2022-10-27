import { useState } from 'react'

// firebase 
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../utils/firebase/config'

// context
import { useAuthContext } from './useAuthContext'

export const useFirestore = () => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const { user } = useAuthContext()

    const getTeamTheme = async () => {
        setError(null)

        try {
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setDocument(docSnap.data().favoriteTeam)
                setError(null)
              } else {
                setError('Document does not exist')
              }
        } catch (err) {
            setError(err.message)
        }
    }
    return { document, error, getTeamTheme }
}