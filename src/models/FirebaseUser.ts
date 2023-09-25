import { AuthProvider, GoogleAuthProvider, OAuthProvider, signInWithPopup, User } from "firebase/auth"
import { createContext } from "react"
import { auth, DevLog, nonReactClearStore, nonReactSetIsSignedIn } from "../exports"

export enum FirebaseAuthProvider {
  Google = "google.com",
  Microsoft = "microsoft.com",
}

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

  get isSignedIn(): boolean {
    return this.user !== null
  }

  get user(): User | null {
    return auth.currentUser || null
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
    if (this.isSignedIn) {
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
    DevLog(`user is signed in: ${isSignedIn ? user?.email : "false"}`)
    nonReactSetIsSignedIn(isSignedIn)
    this.initialized = true
  }

  async signInWith(authProvider: FirebaseAuthProvider): Promise<boolean> {
    let provider: AuthProvider
    switch (authProvider) {
      case FirebaseAuthProvider.Google:
        provider = new GoogleAuthProvider()
        break
      case FirebaseAuthProvider.Microsoft:
        provider = new OAuthProvider("microsoft.com")
        break
      default:
        throw new Error("Unknown auth provider")
    }
    try {
      await signInWithPopup(auth, provider)
      this.initialized = true
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
