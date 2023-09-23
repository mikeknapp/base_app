import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "XXXXXXX",
  authDomain: "XXXXXXX",
  projectId: "XXXXXXX",
  storageBucket: "XXXXXXX",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXX",
  measurementId: "XXXXXXX",
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
export const auth = getAuth(app)
