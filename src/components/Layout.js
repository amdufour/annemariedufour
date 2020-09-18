import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../sass/main.scss'

const Layout = ({ children, styleClass }) => {
  return (
    <>
      <header>
        <Navbar styleClass={styleClass} />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;