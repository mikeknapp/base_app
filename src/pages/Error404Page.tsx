import { Button } from "flowbite-react"
import React from "react"
import { Link } from "react-router-dom"

export function Error404Page(props: { link: string }) {
  return <section className="center-container">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl lg:text-9xl tracking-tight font-extrabold text-primary-600 dark:text-primary-500">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-5xl dark:text-white">
          Something&apos;s missing.</p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.</p>
        <Button className="mt-10" color="dark" as={Link} to={props.link}>Back to Homepage</Button>
      </div>
    </div>
  </section>
}
