import { unstable_batchedUpdates } from "react-dom"
import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"

export interface AppState {
  loggedIn: boolean
  setLoggedIn: (loggedIn: boolean) => void

  clearStore: () => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        loggedIn: false,
        setLoggedIn: (loggedIn: boolean) => set(() => ({ loggedIn: loggedIn })),

        clearStore: () => {
          set(() => ({
            loggedIn: false,
          }))
        },
      }),
      {
        name: "app-storage",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
)

export const nonReactClearStore = () => {
  unstable_batchedUpdates(() => {
    useAppStore.getState().clearStore()
  })
}

export const nonReactSetIsLoggedIn = (isLoggedIn: boolean) => {
  unstable_batchedUpdates(() => {
    useAppStore.getState().setLoggedIn(isLoggedIn)
  })
}
