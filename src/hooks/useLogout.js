import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch, user } = useAuthContext()
  const [isCancelled, setIsCancelled] = useState(false);

  const logout = async () => {
    setError(null)
    setIsPending(true)
    try {
      // update online status
      const { uid } = user;
      await projectFirestore.collection('users').doc(uid).update({ online: false })
      // sign the user out
      await projectAuth.signOut()
      // dispatch logout action
      dispatch({ type: 'LOGOUT' })
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

  return { logout, error, isPending }
}