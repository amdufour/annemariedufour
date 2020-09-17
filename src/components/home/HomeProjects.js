import React from 'react'

const HomeProjects = () => {
  return (
    <div className="home-projects">
      <svg className="projects-bg" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 1257">
        <g fill="#5397A6" fill-rule="evenodd">
          <polygon fill-opacity=".4" points="0 72 1440 160.828 1440 1027 0 969"/>
          <polygon fill-opacity=".4" points="0 0 1440 620 1440 1151 0 881"/>
          <polygon fill-opacity=".4" points="0 161 1440 147 1440 1257 0 586.939"/>
          <polygon fill-opacity=".8" points="0 320.307 1440 72 1440 1107 0 855"/>
        </g>
      </svg>
      <div className="container">
        <h2>Selected projects</h2>
        <div className="row">
          <div className="col-12 col-md-3">
            <a className="project project-nobel" href="/">
              <div className="project-thumbnail">
                <div className="more">Learn more</div>
              </div>
              <div className="project-title">A century of Nobel prizes</div>
              <div className="project-support">digital</div>
            </a>
          </div>
          <div className="col-12 col-md-3">
            <a className="project project-foodprint" href="/">
              <div className="project-thumbnail">
                <div className="more">Learn more</div>
              </div>
              <div className="project-title">Daily Foodprint</div>
              <div className="project-support">digital</div>
            </a>
          </div>
          <div className="col-12 col-md-3">
            <a className="project project-music" href="/">
              <div className="project-thumbnail">
                <div className="more">Learn more</div>
              </div>
              <div className="project-title">Top 100 songs streamed on Spotify</div>
              <div className="project-support">digital</div>
            </a>
          </div>
          <div className="col-12 col-md-3">
            <a className="project project-network" href="/">
              <div className="project-thumbnail">
                <div className="more">Learn more</div>
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