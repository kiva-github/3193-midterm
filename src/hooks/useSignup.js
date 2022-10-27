import { useState } from "react";

// context
import { useAuthContext } from './useAuthContext';

// firebase
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../utils/firebase/config'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, confirmPassword, username, favoriteTeam) => {
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

                // add username to user profile
                await updateProfile(auth.currentUser, {
                    displayName: username
                    // add Favorite team photo URL here
                })

                // create user docs
                await setDoc(doc(db, 'users', res.user.uid), {
                    favoriteTeam: favoriteTeam,
                    cardCount: 0
                })

                // dispatch LOG_IN
                dispatch({ type: 'LOG_IN', payload: res.user })

                setIsPending(false)
                setError(null)
            }
            catch (err) {
                setError(err.message)
                setIsPending(false)
            }
        }
    }
    return { error, isPending, signup }
}