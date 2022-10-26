import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBwPKqowgFJDC-zO_cAiPgDXHgibvGWqv8",
  authDomain: "the-dojo-76b39.firebaseapp.com",
  projectId: "the-dojo-76b39",
  storageBucket: "the-dojo-76b39.appspot.com",
  messagingSenderId: "830539958632",
  appId: "1:830539958632:web:435ff56d7cf53273352edd"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }