import { Flowbite } from "flowbite-react"
import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppRouter, flowbiteTheme } from "./exports"

const container = document.getElementById("app") as HTMLElement
const root = createRoot(container)
root.render(<BrowserRouter>
  <Flowbite theme={flowbiteTheme}>
    <AppRouter />
  </Flowbite>
</BrowserRouter>)
