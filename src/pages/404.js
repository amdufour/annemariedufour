import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Link } from 'gatsby'

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <section className="error-page">
        <div className="container">
          <div className="error-container">
            <h1>Oops! It's a dead end...</h1>
            <div className="apologie">
              <p>Maybe I moved or mistyped the link you are looking for.</p>
              <p>Let's start over, shall we?</p>  
            </div>
            <Link to="/" className="btn btn-teal">Go back home</Link>
            <Link to="/projects" className="btn btn-teal">Explore my projects</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Error
