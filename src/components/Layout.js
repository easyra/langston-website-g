import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "../global.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
