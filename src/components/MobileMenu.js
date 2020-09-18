import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  handleClick() {
    const burger = document.getElementById('burger')
    this.state.isActive ? burger.classList.remove('is-active') : burger.classList.add('is-active')
    this.setState({ isActive: !this.state.isActive })
  }
  
  render() {
    return (
      <>
        <nav className={`navbar navbar-mobile ${this.props.styleClass ? this.props.styleClass : ""}`}>
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
                        id="burger"
                        className="hamburger-box"
                        onClick={() => this.handleClick()}>
                  <div className="hamburger-inner"></div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default MobileMenu