import { unstable_batchedUpdates } from "react-dom"
import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"

export interface AppState {
  isSignedIn: boolean
  setIsSignedIn: (isSignedIn: boolean) => void

  clearStore: () => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        isSignedIn: false,
        setIsSignedIn: (loggedIn: boolean) => set(() => ({ isSignedIn: loggedIn })),

        clearStore: () => {
          set(() => ({
            isSignedIn: false,
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

export const nonReactSetIsSignedIn = (isSignedIn: boolean) => {
  unstable_batchedUpdates(() => {
    useAppStore.getState().setIsSignedIn(isSignedIn)
  })
}
