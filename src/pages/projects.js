import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Projects = () => {
  return (
    <Layout>
      <section className="page-projects">
        <div className="page-header">
          <div className="container">
            <h1>My work</h1>
          </div>
        </div>
        <div className="page-content projects">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-6">
                <Link className="project project-nobel" to="/">
                  <div className="project-thumbnail">
                    <div className="more">Explore the project</div>
                  </div>
                  <div className="project-title">A century of Nobel prizes</div>
                  <div className="project-support">digital</div>
                </Link>
              </div>
              <div className="col-12 col-sm-6">
                <Link className="project project-foodprint" to="/">
                  <div className="project-thumbnail">
                    <div className="more">Explore the project</div>
                  </div>
                  <div className="project-title">Daily Foodprint</div>
                  <div className="project-support">digital</div>
                </Link>
              </div>
              <div className="col-12 col-sm-6">
                <Link className="project project-music" to="/">
                  <div className="project-thumbnail">
                    <div className="more">Explore the project</div>
                  </div>
                  <div className="project-title">Top 100 songs streamed on Spotify</div>
                  <div className="project-support">digital</div>
                </Link>
              </div>
              <div className="col-12 col-sm-6">
                <Link className="project project-network" to="/projects/organizations-against-polarization">
                  <div className="project-thumbnail">
                    <div className="more">Learn more</div>
                  </div>
                  <div className="project-title">Organizations working against polarization</div>
                  <div className="project-support">digital</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects