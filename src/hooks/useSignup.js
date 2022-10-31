import { useEffect, useState } from "react";
import { projectAuth, projectStorage, projectFirestore } from '../firebase/config';
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null)
    setIsPending(true)
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      if (!res) {
        throw new Error('Could not complete signup')
      }

      // upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const img = await projectStorage.ref(uploadPath).put(thumbnail)
      const imgUrl = await img.ref.getDownloadURL()

      // add display name photo url to user
      await res.user.updateProfile({ displayName: displayName, photoURL: imgUrl })

      // create a user document
      await projectFirestore.collection('users').doc(res.user.id).set({
        online: true,
        displayName,
        photoURL: imgUrl
      })

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