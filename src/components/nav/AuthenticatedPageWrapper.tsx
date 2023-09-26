import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { BouncingIcon, FirebaseUserContext, TopNav, homeUrl, loginUrl, useAppStore } from "../../exports"

export function AuthenticatedPageWrapper(props: { children: React.ReactNode }) {
  const user = useContext(FirebaseUserContext)
  const location = useLocation()
  const navigate = useNavigate()
  const isSignedIn = useAppStore((state) => state.isSignedIn)
  const [renderNav, setRenderNav] = React.useState(false)
  const [isInitialized, setIsInitialized] = React.useState(false)

  function enforceLogin() {
    if (isSignedIn && location.pathname === loginUrl) {
      setRenderNav(isSignedIn)
      return navigate(homeUrl)
    } else if (!isSignedIn && location.pathname !== loginUrl) {
      setRenderNav(isSignedIn)
      return navigate(loginUrl)
    }
  }

  React.useEffect(() => {
    user.awaitInitialized().then(() => {
      enforceLogin()
      setIsInitialized(true)
      setRenderNav(isSignedIn)
    })
  }, [])

  React.useEffect(() => {
    enforceLogin()
  }, [isSignedIn, location.pathname])

  return (
    <div className="flex flex-row w-full h-full">
      {!isInitialized ? <BouncingIcon /> : <>{renderNav ? <TopNav>{props.children}</TopNav> : props.children}</>}
    </div>
  )
}
