import React from 'react'
import Layout from '../components/Layout'
import ProjectThumbnail from '../constants/projectsThumbnails'

const projectIds = [1, 2, 3, 4]

const Projects = () => {
  return (
    <Layout styleClass="header-with-gradient privacy">
      <div className="privacy-page">
        <div className="small-header">
          <div className="logo-bg"></div>
          <div className="container">
            <h1>My work</h1>
          </div>
          <div className="header-bottom-triangles"></div>
        </div>
        <div className="page-content projects">
          <div className="container">
            <div className="row justify-content-center">
              {projectIds.map((id, index) => {
                return (
                  <div key={id} className="col-12 col-sm-6">
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