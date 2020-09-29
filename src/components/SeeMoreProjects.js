import React from 'react'
import ProjectThumbnail from '../constants/projectsThumbnails'

const SeeMoreProjects = ({background, projects}) => {
  return (
    <div className={`more-projects ${background}`}>
      <div className="container">
        <h2>Other projects that might interest you</h2>
        <div className="row">
          <div className="col-12 col-sm-6">
            <ProjectThumbnail projectId={projects[0]} />
          </div>
          <div className="col-12 col-sm-6">
            <ProjectThumbnail projectId={projects[1]} />
          </div>
        </div>
        <div className="btn-container">
          <a className="btn btn-large" href="/">Go to my portfolio</a>
        </div>
      </div>
    </div>
  )
}

export default SeeMoreProjects