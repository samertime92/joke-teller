import firebase from  'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA79HQUrlo2L9Lh67iRL7CoDJGxVU0ZGFE",
    authDomain: "joke-pac-react.firebaseapp.com",
    projectId: "joke-pac-react",
    storageBucket: "joke-pac-react.appspot.com",
    messagingSenderId: "146198973998",
    appId: "1:146198973998:web:08f069d77aba215de499bf"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)

  const dataStore =firebaseApp.firestore()
  const timestamp =firebase.firestore.Timestamp
  console.log(timestamp)
  export {dataStore,timestamp}