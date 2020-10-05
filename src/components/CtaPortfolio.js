import React from 'react'
import { Link } from 'gatsby'

const CtaPortfolio = () => {
  return (
    <div className="cta-portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h2>Tailor made Data Visualizations</h2>
            <div className="cta-content">To tell insightful stories</div>
            <div className="cta-content">To generate engagement</div>
            <div className="cta-content">To make an impact</div>
            <div className="cta-content cta-content-more">And so much more ...</div>
            <Link className="btn btn-pink" to="/projects">Take a look at my work</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaPortfolio