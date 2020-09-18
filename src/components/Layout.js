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

const Layout = ({ children, styleClass }) => {
  const screenWidth = window.innerWidth

  return (
    <>
      <header>
        {screenWidth < 576
          ? <MobileMenu styleClass={styleClass} />
          : <Navbar styleClass={styleClass} />
        }
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;