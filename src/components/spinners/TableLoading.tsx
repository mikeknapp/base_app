import React from "react"

export function TableLoading(props: { border?: boolean } = { border: true }) {
  return (
    <div
      role="status"
      className={
        `${props.border ? "border border-gray-200" : ""}` +
        " w-full mt-5 p-4 space-y-6 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      }
    >
      {[...Array(6)].map((_, i) => (
        <div key={`table-loading-${i}`} className={`flex items-center justify-between ${i > 0 ? "pt-4" : ""}`}>
          <div>
            <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
