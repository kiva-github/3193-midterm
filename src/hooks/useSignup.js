import {
    createUserWithEmailAndPassword,
    updateProfile
 } from 'firebase/auth'

import { useState } from "react";
import { auth } from '../utils/firebase/config'

// hooks
import { useAuthContext } from './useAuthContext';


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, confirmPassword, username) => {
        setError(null)
        setIsPending(true)

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            setIsPending(false)

        } else {

            try {
                const res = await createUserWithEmailAndPassword(auth, email, password)
                console.log(res.user)

                if (!res) {
                    throw new Error('Could not complete signup')
                }

                await updateProfile(auth.currentUser, {
                    displayName: username
                    // add Favorite team photo URL here
                })

                // dispatch LOG_IN
                dispatch({ type: 'LOG_IN', payload: res.user })

                setIsPending(false)
                setError(null)
            }
            catch (err) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    return { error, isPending, signup }
}



