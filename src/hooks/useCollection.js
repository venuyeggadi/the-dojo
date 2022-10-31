import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderQuery) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const query = useRef(_query).current
  const orderQuery = useRef(_orderQuery).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection);
    if (query) {
      ref = ref.where(...query)
    }
    if (orderQuery) {
      ref = ref.orderBy(...orderQuery)
    }
    const unsubscribe = ref.onSnapshot((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() })
      })
      setDocuments(results);
      setError(null);
    }, (error) => {
      console.log(error);
      setError('Could not fetch the data');
    })

    return () => unsubscribe();
  }, [collection, query, orderQuery])

  return { documents, error };
}