import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCLXantr1gk_yDfYLYcqJ31ntpMfMoq0A",
  authDomain: "mike-base-app.firebaseapp.com",
  projectId: "mike-base-app",
  storageBucket: "mike-base-app.appspot.com",
  messagingSenderId: "77492849661",
  appId: "1:77492849661:web:fd10093475f4fb8417a794",
  measurementId: "G-X9HRGC7FCD"
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
export const auth = getAuth(app)
