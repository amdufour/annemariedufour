import React from 'react'
import ProjectThumbnail from '../constants/projectsThumbnails'
import { Link } from 'gatsby'

const SeeMoreProjects = ({background, projects}) => {
  return (
    <div className={`more-projects ${background}`}>
      <div className="container">
        <h2>Explore further</h2>
        <div className="row">
          <div className="col-12 col-sm-6">
            <ProjectThumbnail projectId={projects[0]} />
          </div>
          <div className="col-12 col-sm-6">
            <ProjectThumbnail projectId={projects[1]} />
          </div>
        </div>
        <div className="btn-container">
          <Link className="btn" to="/projects">Go to my portfolio</Link>
        </div>
      </div>
    </div>
  )
}

export default SeeMoreProjects