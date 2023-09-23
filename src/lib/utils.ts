export function DevLog(...args: unknown[]) {
  if (process.env.NODE_ENV === "development") {
    console.log(...args)
  }
}
