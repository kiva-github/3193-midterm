import { useState } from 'react'
import { auth } from '../utils/firebase/config'
import { useAuthContext } from './useAuthContext'

import { signOut } from 'firebase/auth'


export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logOut = async () => {
        setError(null)
        setIsPending(true)
        

        try {
            await signOut(auth)
            dispatch({ type: 'LOG_OUT', payload: null})
            setError(null)
            setIsPending(false)
    

        } catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { logOut, error, isPending }

}