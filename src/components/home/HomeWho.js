import React from 'react'
import { Link } from 'gatsby'

const HomeWho = () => {
  return (
    <div className="home-who">
      <div className="container">
        <h2>Attention to details <span className="amp">&amp;</span> Enthusiasm</h2>
        <div className="row">
          <div className="col-12 col-lg-8 col-presentation">
            <h3>How is it to work with me?</h3>
            <p>My engineering, design, front-end development, and project management backgrounds allow me to tackle projects from raw data to full-fledged digital or printed visualization. I also enjoy jumping in for a specific project stage, whether it is data analysis, design, or development. I mostly work on my own, but I’m always happy to be part of a broader team or lead collaborators from different disciplines toward creating an outstanding experience.</p>
            <p>My signature is an obsession for these little details that make a project rise WAY beyond average. With my enthusiasm, UX considerations, and unique designs, I aim to create a memorable experience for the end-user AND my collaborators.</p>
            <Link className="btn btn-teal" to="/about">Learn more about me</Link>
          </div>
          <div className="col-12 col-lg-4 col-quote">
            <div className="quote quote-side">
              <p className="quote-content">I had the chance to work with Anne-Marie in my team for many years. She has multiple qualities, combining empathy, energy, creativity, and professionalism. She is ready to face challenges outside of her comfort zone, and, on top of that, she delivers outstanding quality. I can only recommend her services to myself and around me.</p>
              <div className="quote-author">Kian Rieben</div>
              <div className="quote-organization"><a href="https://www.inovae.ch/" target="_blank" rel="noreferrer">Inovae</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeWho