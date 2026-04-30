import type { ReactNode } from "react"
import Navbar from "./NavBar"

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="p-4">
        {children}
      </main>
    </div>
  )
}

export default Layout