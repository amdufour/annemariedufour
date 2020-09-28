import React from 'react'
import Layout from '../../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const getProjectImages = graphql`
  {
    file(relativePath: {eq: "projects/org-democracy/network-overview.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const OrganizationsAgainstPolarization = () => {
  const projectImage = useStaticQuery(getProjectImages)

  return (
    <Layout>
      <section className="page-project page-project-organizations-against-polarization">
        <div className="page-project-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-10">
                <div className="date">September 2020</div>
                <h1>Organisations joining forces against polarization</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="project-overview">
              <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2">
                  <h2>Project overview</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 offset-lg-2">
                  <div className="overview-element">
                    <h3>Project type</h3>
                    <div>Personal project</div>
                  </div>
                  <div className="overview-element">
                    <h3>Data manipulation and analysis</h3>
                    <div>SQL, Python</div>
                  </div>
                  <div className="overview-element">
                    <h3>Data visualization</h3>
                    <div>D3.js</div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="overview-element">
                    <h3>Support</h3>
                    <div>Digital</div>
                  </div>
                  <div className="overview-element">
                    <h3>Dataset</h3>
                    <div><a href="https://data.world/carlvlewis/interdependence-ngos-by-funding-reach" title="Access the dataset" target="_blank" rel="noreferrer">Interdependence NGOs by Funding</a></div>
                  </div>
                  <div className="overview-element">
                    <h3>Repository</h3>
                    <div><a href="https://github.com/amdufour/ngos_network" title="Access the code repository" target="_blank" rel="noreferrer">ngos_network</a></div>
                  </div>
                </div>
              </div>
              <div className="project-btn-container">
                <div className="row">
                  <div className="col-12 col-lg-8 offset-lg-2">
                    <a className="btn btn-white" href="https://amdufour.github.io/organizations-against-polarization/" target="_blank" rel="noreferrer">Access the project</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='project-main-image-container'>
              <a className="btn btn-white" href="https://amdufour.github.io/organizations-against-polarization/" target="_blank" rel="noreferrer">
                <Image className="project-main-image" fluid={projectImage.file.childImageSharp.fluid} alt="Screenshot of the project" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default OrganizationsAgainstPolarization