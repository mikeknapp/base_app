import React from "react"

export function AuthenticatedPageWrapper(props: { children: React.ReactNode }) {
  return <div className="w-full h-full">
    {props.children}
  </div>
}
