import React from 'react'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'
import Footer from './Footer'
import '../sass/main.scss'

// Add class if user is navigating with keyboard
function handleFirstTab(e) {
  if (e.keyCode === 9) { // the "I am a keyboard user" key
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    const mobileScreen = window.innerWidth <= 768 ? true : false;
    this.setState({ isMobile: mobileScreen });
  }

  render () {
    return (
      <>
        <header>
          {this.state.isMobile
            ? <MobileMenu styleClass={this.props.styleClass} />
            : <Navbar styleClass={this.props.styleClass} />
          }
        </header>
        <main>
          {this.props.children}
        </main>
        <Footer />
      </>
    )
  }
}

export default Layout;