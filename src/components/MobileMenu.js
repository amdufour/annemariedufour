import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
import NavLinks from '../constants/links'
import SocialLinks from './SocialLinks'

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  handleClick() {
    const body = document.querySelector('body');
    this.state.isActive ? body.classList.remove('freeze') : body.classList.add('freeze')
    this.setState({ isActive: !this.state.isActive })
  }
  
  render() {
    return (
      <>
        {/* Mobile navbar and burger */}
        <nav className={`navbar navbar-mobile ${this.props.styleClass ? this.props.styleClass : ""} ${this.state.isActive ? 'is-active' : null}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 logo-container">
                <Link to="/">
                  <span>Go back to homepage</span>
                  <Logo />
                </Link>
              </div>
              <div className="col-6 align-right">
                <button type="button"
                        className="hamburger-box"
                        onClick={() => this.handleClick()}>
                  <div className="hamburger-inner"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu content */}
          <div className="menu-mobile">
            <div className="container">
              <div className="navigation">
                <NavLinks />
              </div>
              <div className="social">
                <SocialLinks />
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default MobileMenu