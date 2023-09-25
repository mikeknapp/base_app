import { Navbar } from "flowbite-react"
import React from "react"
import { Link } from "react-router-dom"
import { appName, homeUrl } from "../../exports"

export function TopNavBrand() {
  return (
    <Navbar.Brand as={Link} to={homeUrl}>
      <img alt={appName + " logo"} className="mr-3 h-6 sm:h-9" src={require("../../images/icon.svg")} />
      <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">{appName}</span>
    </Navbar.Brand>
  )
}
