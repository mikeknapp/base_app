import { Avatar, Dropdown } from "flowbite-react";
import React, { useContext } from "react";
import { FirebaseUserContext } from "../../exports";

export function UserDropdownMenu() {
  const user = useContext(FirebaseUserContext)

  return <Dropdown
    arrowIcon={true}
    inline
    label={<Avatar alt="User Settings" size="sm" rounded img={user.profileUrl} />}
  >
    <Dropdown.Header>
      <span className="block text-sm">
        {user.displayName}
      </span>
      <span className="block truncate text-sm font-medium">
        {user.email}
      </span>
    </Dropdown.Header>
    <Dropdown.Item onClick={() => user.signOut()}>
      Sign out
    </Dropdown.Item>
  </Dropdown>
}
