import React from 'react'
import SocialLinks from './SocialLinks'

const Footer = () => {
  const creationYear = 2020
  const currentYear = new Date().getFullYear()
  const copyrightYears = currentYear === creationYear ? currentYear : `${creationYear}-${currentYear}`;

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <h2>Ready to bring your data to life?</h2>
          <a className="btn btn-white" href="/">Let's get in touch!</a>
          <SocialLinks />
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="credits">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">www.flaticons.com</a></div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="copyright">&copy; {copyrightYears} Copyright Anne-Marie Dufour - All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer