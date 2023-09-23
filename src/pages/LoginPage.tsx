
import { Button } from "flowbite-react"
import React from "react"
import { FirebaseUserContext } from "../exports"

export function LoginPage() {
  const user = React.useContext(FirebaseUserContext)

  return <div className="center-container">
    <h1>Login</h1>

    <Button onClick={user.signIn}>Login with Google</Button>
  </div>
}
