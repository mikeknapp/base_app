import GoogleLogo from "jsx:../icons/GoogleLogo.svg"
import MicrosoftLogo from "jsx:../icons/MicrosoftLogo.svg"

import { Button } from "flowbite-react"
import React from "react"
import { useNavigate } from "react-router-dom"
import { BouncingIcon, FirebaseAuthProvider, FirebaseUserContext, homeUrl } from "../exports"

export function LoginPage() {
  const user = React.useContext(FirebaseUserContext)
  const navigate = useNavigate()
  const [isSigningIn, setIsSigningIn] = React.useState(false)

  async function signInWith(authProvider: FirebaseAuthProvider) {
    setIsSigningIn(true)
    const success = await user.signInWith(authProvider)
    if (success) {
      navigate(homeUrl)
    } else {
      alert("Login failed")
    }
    setIsSigningIn(false)
  }

  return (
    <>
      {isSigningIn ? (
        <BouncingIcon />
      ) : (
        <div className="centered-container">
          <h1>Login</h1>

          <Button color="gray" className="w-64 mt-3" onClick={() => signInWith(FirebaseAuthProvider.Google)}>
            <GoogleLogo className="w-6 h-6 mr-2" />
            Login with Google
          </Button>

          <Button color="gray" className="w-64 mt-3" onClick={() => signInWith(FirebaseAuthProvider.Google)}>
            <MicrosoftLogo className="w-6 h-6 mr-2" />
            Login with Microsoft
          </Button>
        </div>
      )}
    </>
  )
}
