import React from 'react'

const HomeProjects = () => {
  return (
    <div id="portfolio" className="home-projects">
      <div className="container">
        <h2>Selected projects</h2>
        <div className="row">
          <div className="col-12 col-md-3">
            <a className="project project-nobel" href="/">
              <div className="project-thumbnail">
                <div className="more">Explore the project</div>
              </div>
              <div className="project-title">A century of Nobel prizes</div>
              <div className="project-support">digital</div>
            </a>
          </div>
          <div className="col-12 col-md-3">
            <a className="project project-foodprint" href="/">
              <div className="project-thumbnail">
                <div className="more">Explore the project</div>
              </div>
              <div className="project-title">Daily Foodprint</div>
              <div className="project-support">digital</div>
            </a>
          </div>
          <div className="col-12 col-md-3">
            <a className="project project-music" href="/">
              <div className="project-thumbnail">
                <div className="more">Explore the project</div>
              </div>
              <div className="project-title">Top 100 songs streamed on Spotify</div>
              <div className="project-support">digital</div>
            </a>
          </div>
          <div className="col-12 col-md-3">
            <a className="project project-network" href="/">
              <div className="project-thumbnail">
                <div className="more">Explore the project</div>
              </div>
              <div className="project-title">Nonprofits working agaist polarization</div>
              <div className="project-support">digital</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProjects