import { useEffect, useState } from "react";
import { projectAuth } from '../firebase/config';
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      if (!res) {
        throw new Error('Could not complete signup')
      }
      // add display name to user
      await res.user.updateProfile({ displayName: displayName })
      // dispatch login action
      dispatch({type: 'LOGIN', payload: res.user })
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

  return { signup, error, isPending }
}
 
export default useSignup;