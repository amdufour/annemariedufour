import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../../components/Layout'
import CodeBlock from '../../components/CodeBlock'

const getProjectImages = graphql`
  {
    file(relativePath: {eq: "projects/org-democracy/network-overview.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1382, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const dataFormatSample = `
/* Data format sample */

{
  "nodes": [
    {
      "id": 1,
      ...
    },
    {
      "id": 2,
      ...
    },
    ...
  ],
  "links": [
    {
      "source": 1,
      "target": 2,
      "weight": 1
    },
    ...
  ]
}
`

const OrganizationsAgainstPolarization = () => {
  const projectImage = useStaticQuery(getProjectImages)

  return (
    <Layout>
      <section className="page-project page-project-organizations-against-polarization">

        {/* Project header */}
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

            {/* Project Overview */}
            <div className="project-overview-container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-5">
                  <div className="project-overview">
                    <div className="row">
                      <div className="col-12 col-sm-6">
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
                      <div className="col-12 col-sm-6">
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
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <div className='project-main-image-container'>
                    <a className="btn btn-white" href="https://amdufour.github.io/organizations-against-polarization/" target="_blank" rel="noreferrer">
                      <Image className="project-main-image" fluid={projectImage.file.childImageSharp.fluid} alt="Screenshot of the project" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-7 offset-lg-5">
                  <div className="project-btn-container">
                    <a className="btn btn-white" href="https://amdufour.github.io/organizations-against-polarization/" target="_blank" rel="noreferrer">Access the project</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project description */}
            <div className="project-description">
              <p>When starting a data visualization project, you usually have a dataset in hand, or at least a subject about which to find data. Once you've explored your dataset and made some necessary observations, you can start thinking about which type of data visualization would suit it best. The visualization is at the service of the data, not the reverse.</p>
              <p>For this project, I went against best practices and did precisely the reverse. The reason is, this project started with a design requirement for my website, where I wanted to display a network. You see, I entered the field of data visualization with the desire to support science, journalism, and democracy with my work, knowing that all of our little contributions combine and make a real difference. I planned to symbolically suggest this motivation with a network visualization, where connections pull and push nodes until they find equilibrium. Kind of like in real life!</p>
              <p>At first, I hoped to find a dataset of NGOs with information about their field of action, the countries in which they provide services, and maybe even how they collaborate. Unesco did assemble a <a href="https://uia.org/yearbook" title="Access Unesco's Yearbook of International Organizations" target="_blank" rel="noreferrer">Yearbook of International Organizations</a>, which seemed like an interesting starting point, but the price didn't match a personal project's budget. After a few hours of research, I was getting a little discouraged and was about to start searching for a different angle. But luckily, I stumbled upon a dataset assembled by <a href="https://data.world/carlvlewis" title="Access the profile of Carl V. Lewis on data.world" target="_blank" rel="noreferrer">Carl V. Lewis</a> in 2018 and available on <a href="https://data.world/carlvlewis/interdependence-ngos-by-funding-reach" title="Access the dataset" target="_blank" rel="noreferrer">data.world</a>. This data was collected manually by the author, focusing on nonprofits fighting polarization in Western society. Although this dataset is by no means complete and concentrates mainly on organizations operating from the United States, it was matching my initial subject and contained enough information to create a rich visual. Also, 163 organizations seemed like a reasonable amount to make what I had in mind. I was relieved, I had a base to start with!</p>
              <h2>Exploring and understanding the data</h2>
              <p>began my exploration of the data by listing the type of information available for each organization. I knew right ahead that it would be interesting to represent the estimated number of people impacted visually. I also observed that I could link organizations by tags, representing each organization's field of action, and group the nodes by type of organizations, which is their main area of focus. My imagination was firing, thinking about all the visual possibilities, and I quickly concluded that this data visualization could be a project on its own and that I would later extract a simplified version of it for my website. Also, some information was missing from the original dataset. But after an afternoon of data gathering, I filled the gaps.</p>
              <p>I then used SQL and python to clean and prepare the data. For example, I grouped the tags into an array for each organization. I found that D3 needs a specific data format to realize a force simulation (used to position the links and nodes in a network). It requires a JSON file with the nodes' information grouped in an object, and the connections between each node explicitly listed in another one. Here's how it looked like for me:</p>
              <CodeBlock code={dataFormatSample} />
              <p>Even for a relatively small dataset of 163 organizations, this format generates a massive file of many thousand lines. Not something you wanna write by hand… Fortunately, I could quickly obtain the structure I needed by writing a small Python script.</p>
              <p>Realizing that the dataset contained 21 types of organizations, I decided to group them into meta-categories: Communications, Civic life, Community, Economy, Technology, and Education, allowing to represent them by color.</p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default OrganizationsAgainstPolarization