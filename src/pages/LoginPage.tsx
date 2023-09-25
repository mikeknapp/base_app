
import { Button } from "flowbite-react"
import React from "react"
import { useNavigate } from "react-router-dom"
import { FirebaseAuthProvider, FirebaseUserContext, homeUrl } from "../exports"

export function LoginPage() {
  const user = React.useContext(FirebaseUserContext)
  const navigate = useNavigate()

  async function signInWith(authProvider: FirebaseAuthProvider) {
    const success = await user.signInWith(authProvider)
    if (success) {
      navigate(homeUrl)
    } else {
      alert("Login failed")
    }
  }

  return <div className="centered-container">
    <h1>Login</h1>

    <Button onClick={() => signInWith(FirebaseAuthProvider.Google)}>Login with Google</Button>
  </div>
}
