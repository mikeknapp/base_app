import { Navbar } from "flowbite-react"
import React from "react"
import { MobileMenu, TopNavBrand, UserDropdownMenu } from "../../exports"

export function TopNav(props: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen">
      <Navbar id="top-nav" fluid>
        <TopNavBrand />
        <div className="flex flex-row gap-2">
          <UserDropdownMenu />
          <MobileMenu />
        </div>
      </Navbar>
      <div className="top-nav-offset">{props.children}</div>
    </div>
  )
}
