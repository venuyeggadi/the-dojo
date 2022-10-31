import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const [isCancelled, setIsCancelled] = useState(false);

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
    try {
      // sign the user in
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      // update online status
      await projectFirestore.collection('users').doc(res.user.uid).update({ online: true })
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })
    }
    catch (err) {
      if (!isCancelled) {
        setError(err.message)
      }
    }
    if (!isCancelled) {
      setIsPending(false)
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, [])

  return { login, error, isPending }
}