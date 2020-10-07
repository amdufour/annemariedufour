import React from 'react'
import Layout from '../components/Layout'
import ProjectThumbnail from '../constants/projectsThumbnails'

const projectIds = [1, 2, 3, 4]

const Projects = () => {
  return (
    <Layout>
      <div className="page-projects">
        <div className="page-header">
          <div className="container">
            <h1>My work</h1>
          </div>
        </div>
        <div className="page-content projects">
          <div className="container">
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
      </div>
    </Layout>
  )
}

export default Projects