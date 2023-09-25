import { Dropdown } from "flowbite-react"
import MenuIcon from "jsx:../../icons/MenuIcon.svg"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { homeUrl } from "../../consts"
import { FirebaseUserContext } from "../../exports"

export function MobileMenu() {
  const user = useContext(FirebaseUserContext)

  return (
    <Dropdown arrowIcon={false} inline label={<MenuIcon />}>
      <Dropdown.Item as={Link} to={homeUrl}>
        Home
      </Dropdown.Item>
      <Dropdown.Item onClick={() => user.signOut()}>Sign Out</Dropdown.Item>
    </Dropdown>
  )
}
