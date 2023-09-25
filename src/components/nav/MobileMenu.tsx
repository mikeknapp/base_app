import { Navbar } from "flowbite-react"
import React from "react"

export function MobileMenu() {
  return (
    <Navbar.Collapse>
      <Navbar.Link active href="#">
        <p>Home</p>
      </Navbar.Link>
      <Navbar.Link href="#">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  )
}
