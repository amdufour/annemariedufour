import React from 'react'
import Logo from './Logo'
import NavLinks from '../constants/links'
import { Link } from 'gatsby'

const Navbar = ({ styleClass }) => {
  return (
    <nav className={`navbar ${styleClass ? styleClass : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 logo-container">
            <Link to="/">
              <span>Go back to homepage</span>
              <Logo />
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;