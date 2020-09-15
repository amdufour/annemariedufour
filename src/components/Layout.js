import React from 'react'
import Navbar from './Navbar'
import '../sass/main.scss'

const Layout = ({ children, styleClass }) => {
  return (
    <>
      <Navbar styleClass={styleClass} />
      {children}
    </>
  )
}

export default Layout;