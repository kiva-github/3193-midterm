import { useState } from 'react'
import { auth } from '../utils/firebase/config'
import { useAuthContext } from './useAuthContext'

import { signInWithEmailAndPassword } from 'firebase/auth'


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
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { logIn, error, isPending }

}