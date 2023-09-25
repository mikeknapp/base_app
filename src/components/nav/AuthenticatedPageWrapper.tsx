import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { BouncingIcon, FirebaseUserContext, TopNav, homeUrl, loginUrl, useAppStore } from "../../exports"

export function AuthenticatedPageWrapper(props: { children: React.ReactNode }) {
  const user = useContext(FirebaseUserContext)
  const location = useLocation()
  const navigate = useNavigate()
  const isSignedIn = useAppStore(state => state.isSignedIn)
  const [renderNav, setRenderNav] = React.useState(false)
  const [isInitialized, setIsInitialized] = React.useState(false)

  React.useEffect(() => {
    user.awaitInitialized().then(() => {
      setIsInitialized(true)
      setRenderNav(isSignedIn)
    })
  }, [])

  React.useEffect(() => {
    if (isSignedIn && location.pathname === loginUrl) {
      setRenderNav(isSignedIn)
      return navigate(homeUrl)
    } else if (!isSignedIn && location.pathname !== loginUrl) {
      setRenderNav(isSignedIn)
      return navigate(loginUrl)
    }
  }, [isSignedIn])


  return <div className="flex flex-row w-full h-full">
    {!isInitialized ? <BouncingIcon /> : <>
      {renderNav ? <TopNav>{props.children}</TopNav> : props.children}
    </>
    }
  </div>
}
