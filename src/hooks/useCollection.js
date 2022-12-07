import { useEffect, useState} from 'react'

// firebase
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../utils/firebase/config'

// hooks
import { useAuthContext } from './useAuthContext'

export const useCollection = (col) => {
    const [documents, setDocuments] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {
        console.log('useCollection.js: useEffect() ran')

        let colRef = collection(db, col)
        const unsub = onSnapshot(colRef, (snapshot) => {
            let res = []
            snapshot.docs.forEach((doc) => {
                const obj = {}
                obj[doc.id] = doc.data().quantity
                res.push(obj)
            })
            setDocuments(res)
        })

        return () => unsub()

    }, [user.uid])

    return { documents }
}