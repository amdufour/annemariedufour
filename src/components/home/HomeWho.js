import React from 'react'
import { Link } from 'gatsby'

const HomeWho = () => {
  return (
    <div className="home-who">
      <div className="container">
        <h2>Attention to details <span className="amp">&amp;</span> Enthusiasm</h2>
        <div className="row">
          <div className="col-12 col-lg-8">
            <h3>How is it to work with me?</h3>
            <p>With my background in engineering, design, frontend web development and project management, I can tackle projects from raw data to a full fledged digital or printed visualization.  I am also available to jump in for a specific stage of a project, wheter it is data analysis, design or development. I mostly work on my own, but I’m always happy to be part of a broader team or to lead collaborators from different disciplines toward the creation of an outstanding experience.</p>
            <p>My signature is an obsession for these little details that make a project rise WAY beyond average. With my design touches, custom animations and UX considerations, I alway aim at creating a memorable experience. And the liveliness (gusto?) I bring to the table makes the experience memorable on a human level as well !</p>
          </div>
          <div className="col-12 col-lg-4">
            <div className="quote quote-side">
              <p className="quote-content">I had the chance to work with Anne-Marie in my team for many years. She has multiple qualities, combining empathy, energy, creativity and professionalism. She is ready to face challenges outside of her comfort zone and, on top of that, she delivers with outstanding quality. I can only recommend her services to myself and around me.</p>
              <div className="quote-author">Kian Rieben</div>
              <div className="quote-organization"><a href="https://www.inovae.ch/" target="_blank" rel="noreferrer">Inovae</a></div>
            </div>
          </div>
        </div>
        <Link className="btn btn-teal" to="/about">Learn more about me</Link>
      </div>
    </div>
  )
}

export default HomeWho