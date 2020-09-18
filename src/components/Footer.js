import React from 'react'

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
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="credits">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">www.flaticons.com</a></div>
            </div>
            <div className="col-12 col-md-4">
              <div className="copyright">&copy; {copyrightYears} Copyright Anne-Marie Dufour - All rights reserved</div>
            </div>
            <div className="col-12 col-md-4">
              <ul className="social-links">
                <li className="social-link instagram">
                  <a href="/" target="_blank" rel="noreferrer">
                    <svg className="logo-instagram" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><g fill="#F2F2F6"><path d="M21.601 0H8.233C3.693 0 0 3.694 0 8.233v13.368c0 4.54 3.693 8.233 8.233 8.233h13.368c4.54 0 8.233-3.693 8.233-8.233V8.233c0-4.54-3.693-8.233-8.233-8.233zm5.587 21.601a5.593 5.593 0 01-5.587 5.586H8.233a5.592 5.592 0 01-5.586-5.586V8.233a5.592 5.592 0 015.586-5.586h13.368a5.593 5.593 0 015.587 5.586v13.368z"/><path d="M14.917 7.23c-4.239 0-7.687 3.449-7.687 7.688 0 4.238 3.448 7.687 7.687 7.687 4.24 0 7.688-3.449 7.688-7.687 0-4.24-3.449-7.688-7.688-7.688zm0 12.728c-2.779 0-5.04-2.261-5.04-5.04 0-2.78 2.26-5.041 5.04-5.041 2.78 0 5.04 2.261 5.04 5.04 0 2.78-2.26 5.04-5.04 5.04zm8.01-14.973c-.51 0-1.01.207-1.37.569a1.95 1.95 0 00-.57 1.373c0 .51.207 1.01.57 1.373.36.36.86.568 1.37.568A1.96 1.96 0 0024.3 8.3c.362-.362.568-.863.568-1.373a1.95 1.95 0 00-.568-1.373 1.95 1.95 0 00-1.373-.569z"/></g></svg>
                  </a>
                </li>
                <li className="social-link behance">
                  <a href="/" target="_blank" rel="noreferrer">
                    <svg className="logo-behance" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><g fill="#F2F2F6"><path d="M25.605 0H4.395A4.4 4.4 0 000 4.395v21.21A4.4 4.4 0 004.395 30h21.21A4.4 4.4 0 0030 25.605V4.395A4.4 4.4 0 0025.605 0zm2.637 25.605a2.64 2.64 0 01-2.637 2.637H4.395a2.64 2.64 0 01-2.637-2.637V4.395a2.64 2.64 0 012.637-2.637h21.21a2.64 2.64 0 012.637 2.637v21.21z"/><path d="M14.121 12.363a3.52 3.52 0 00-3.516-3.515H5.332v12.304h5.273a3.52 3.52 0 003.516-3.515c0-1.05-.462-1.992-1.194-2.637a3.507 3.507 0 001.194-2.637zm-1.758 5.274a1.76 1.76 0 01-1.758 1.758H7.09v-3.516h3.515c.97 0 1.758.788 1.758 1.758zM7.09 14.12v-3.516h3.515c.97 0 1.758.789 1.758 1.758a1.76 1.76 0 01-1.758 1.758H7.09zm13.183-1.758a4.4 4.4 0 00-4.394 4.395 4.4 4.4 0 004.394 4.394 4.41 4.41 0 003.807-2.196l-1.522-.88a2.647 2.647 0 01-2.285 1.319 2.641 2.641 0 01-2.486-1.758h6.881v-.88a4.4 4.4 0 00-4.395-4.394zm-2.486 3.516a2.641 2.641 0 012.486-1.758c1.146 0 2.124.735 2.487 1.758h-4.973zM16.758 8.848h7.031v1.757h-7.031z"/></g></svg>
                  </a>
                </li>
                <li className="social-link linkedin">
                  <a href="/" target="_blank" rel="noreferrer">
                    <svg className="logo-linkedin" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path fill="#F2F2F6" d="M9.375 24.785H5.274V11.543h4.101v13.242zm.41-17.461a2.403 2.403 0 10-4.805 0 2.403 2.403 0 004.805 0zM24.727 17.5c0-3.555-.751-6.191-4.904-6.191-1.995 0-3.335.998-3.882 2.035h-.004v-1.801h-3.984v13.242h3.985V18.21c0-1.722.438-3.39 2.572-3.39 2.105 0 2.174 1.97 2.174 3.5v6.465h4.043V17.5zM30 26.484V3.516A3.52 3.52 0 0026.484 0H3.516A3.52 3.52 0 000 3.516v22.968A3.52 3.52 0 003.516 30h22.968A3.52 3.52 0 0030 26.484zm-3.516-24.14c.647 0 1.172.525 1.172 1.172v22.968c0 .647-.525 1.172-1.172 1.172H3.516a1.173 1.173 0 01-1.172-1.172V3.516c0-.647.525-1.172 1.172-1.172h22.968z"/></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer