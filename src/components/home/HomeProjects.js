import React from 'react'
import ProjectThumbnail from '../../constants/projectsThumbnails'
import { Link } from 'gatsby'

const projectIds = [1, 2, 3, 4]

const HomeProjects = () => {
  return (
    <div id="portfolio" className="home-projects projects">
      <div className="container">
        <h2>Check out my work</h2>
        <div className="row justify-content-center">
          {projectIds.map((id, index) => {
            return (
              <div key={id} className="col-12 col-sm-6">
                <ProjectThumbnail key={index} projectId={id} />
              </div>
            )
          })}
          <Link className="btn btn-white" to="/projects">View more</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeProjects