import React from 'react'
import ProjectThumbnail from '../../constants/projectsThumbnails'

const projectIds = [1, 2, 3, 4]

const HomeProjects = () => {
  return (
    <div id="portfolio" className="home-projects projects">
      <div className="container">
        <h2>Selected projects</h2>
        <div className="row justify-content-center">
          {projectIds.map((id, index) => {
            return (
              <div className="col-12 col-sm-6">
                <ProjectThumbnail key={index} projectId={id} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeProjects