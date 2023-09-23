import { AuthProvider, OAuthProvider, signInWithPopup, User } from "firebase/auth"
import { createContext } from "react"
import { auth, DevLog, nonReactClearStore, nonReactSetIsLoggedIn } from "../exports"

class FirebaseUser {
  initialized = false

  constructor() {
    auth.onAuthStateChanged(this.onAuthStateChanged.bind(this))
  }

  async awaitInitialized(): Promise<void> {
    if (this.initialized) {
      return
    }
    while (!this.initialized) {
      await new Promise((resolve) => setTimeout(resolve, 50))
    }
  }

  isSignedIn(): boolean {
    return this.user !== null
  }

  get user(): User | null {
    return auth.currentUser
  }

  get userId(): string {
    return this.user?.uid || ""
  }

  get displayName(): string {
    return this.user?.displayName || ""
  }

  get email(): string {
    return this.user?.email || ""
  }

  get profileUrl(): string | undefined {
    if (this.isSignedIn()) {
      return this.user?.photoURL || undefined
    }
    return undefined
  }

  async authToken(): Promise<string> {
    await this.awaitInitialized()
    if (this.user !== null) {
      const token = await this.user.getIdToken()
      return token
    }
    return ""
  }

  async onAuthStateChanged(user: User): Promise<void> {
    const isSignedIn = user !== null
    DevLog("user is signed in: " + isSignedIn + ": user object " + user)
    nonReactSetIsLoggedIn(isSignedIn)
    this.initialized = true
  }

  async signIn(): Promise<boolean> {
    const provider: AuthProvider = new OAuthProvider("microsoft.com")
    try {
      const result = await signInWithPopup(auth, provider)
      if (result.user) {
        //const resp: { data: { success: boolean; error: string | null } } = await authorizeFxn()
        //const outcome = resp.data
        // if (!outcome.success) {
        //   this.signOut()
        //   alert(outcome.error || "Unauthorized")
        //   return false
        // }
        this.initialized = true
      }
      return this.user !== null
    } catch (error) {
      DevLog(error)
      return false
    }
  }

  async signOut(): Promise<void> {
    await auth.signOut()
    nonReactClearStore()
  }
}

export const user = new FirebaseUser()
export const FirebaseUserContext = createContext<FirebaseUser>(user)
