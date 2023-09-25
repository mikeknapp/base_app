import { Flowbite } from "flowbite-react"
import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppRouter, FirebaseUserContext, flowbiteTheme, user } from "./exports"

const container = document.getElementById("app") as HTMLElement
const root = createRoot(container)
root.render(
  <FirebaseUserContext.Provider value={user}>
    <BrowserRouter>
      <Flowbite theme={flowbiteTheme}>
        <AppRouter />
      </Flowbite>
    </BrowserRouter>
  </FirebaseUserContext.Provider>,
)
