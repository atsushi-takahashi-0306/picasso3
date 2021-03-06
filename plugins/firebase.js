import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"



const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    databaseURL: process.env.FB_DATABASE_URL,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGE_SENDER_ID
  };
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase