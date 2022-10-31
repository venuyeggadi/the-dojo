import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const [isCancelled, setIsCancelled] = useState(false);

  const logout = async () => {
    setError(null)
    setIsPending(true)
    try {
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