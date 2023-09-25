import { Navbar } from "flowbite-react";
import React from "react";
import { TopNavBrand, UserDropdownMenu } from "../../exports";

export function TopNav() {
  return <Navbar>
    <TopNavBrand />
    <UserDropdownMenu />
  </Navbar>
}
