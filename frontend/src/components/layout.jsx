import Navbar from "./navbar"
import Footer from "./footer"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout