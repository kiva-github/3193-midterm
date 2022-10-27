import { useState } from 'react'

// firebase
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase/config'

// context
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logIn = async (email, password) => {
        setError(null)
        setIsPending(true)

        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            dispatch({ type: 'LOG_IN', payload: res.user})
            setError(null)
            setIsPending(false)

        } catch (err) {
            setError(err.message)
            setIsPending(false)
        }
    }
    return { error, isPending, logIn }
}