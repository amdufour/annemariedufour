import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import CodeBlock from '../../components/CodeBlock'
import SeeMoreProjects from '../../components/SeeMoreProjects'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Video from '../../components/Video'

import Screencast_simulation from '../../assets/projects/org-democracy/videos/Screencast_ticks_calculations.mp4'
import Screencast_simulation_captions from "file-loader!../../assets/projects/org-democracy/videos/Screencast_ticks_calculations_captions.vtt"
import Screencast_simulation_description from "file-loader!../../assets/projects/org-democracy/videos/Screencast_ticks_calculations_description.vtt"
import Screencast_hover from '../../assets/projects/org-democracy/videos/Screencast_hover_interaction.mp4'
import Screencast_hover_captions from "file-loader!../../assets/projects/org-democracy/videos/Screencast_hover_interaction_captions.vtt"
import Screencast_hover_description from "file-loader!../../assets/projects/org-democracy/videos/Screencast_hover_interaction_description.vtt"
import Screencast_click from '../../assets/projects/org-democracy/videos/Screencast_click_interaction.mp4'
import Screencast_click_captions from "file-loader!../../assets/projects/org-democracy/videos/Screencast_click_interaction_captions.vtt"
import Screencast_click_description from "file-loader!../../assets/projects/org-democracy/videos/Screencast_click_interaction_description.vtt"


const getProjectImagesNetwork = graphql`
  {
    allFile(filter: {dir: {regex: "/assets/projects/org-democracy/"}}, sort: {fields: relativePath}) {
      nodes {
        dir
        childImageSharp {
          fluid(maxWidth: 990, quality: 100) {
            ...GatsbyImageSharpFluid
          }
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
  const projectImages = useStaticQuery(getProjectImagesNetwork)

  return (
    <Layout>
      <SEO title="Organizations against polarization" />
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
            <p>Polarization in Western Democracies is a significant concern and has led new and existing nonprofit organizations (NGOs) to focus on this problem. Knowing that we are stronger together, I wondered how their actions combine and generate an even more substantial impact.</p>
            <div className="project-curiosity">
              <div className="curiosity-label">Main curiosity behind this visualization:</div>
              <h2>How are the focus and actions of Nonprofit Organizations interconnected?</h2>
            </div>
            <p>In this project, I used D3.js to generate a network of NGOs linked by their shared fields of action like immigration, democracy, and social justice. The visualization is architected for exploration, to discover the scale at which these NGOs operate (Global, National, Regional, etc.) and other organizations with which they share one or many fields (s) of action.</p>
            <div className="meta-container">
              <a className="image-link" href="https://amdufour.github.io/organizations-against-polarization/" target="_blank">
                <Image className="project-main-image" fluid={projectImages.allFile.nodes[1].childImageSharp.fluid} alt="Screenshot of the project" />
              </a>
              <div className="project-meta">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4 meta-item"><span className="label">Project type: </span>Personal</div>
                  <div className="col-12 col-sm-6 col-md-4 meta-item"><span className="label">Support: </span>Digital</div>
                  <div className="col-12 col-sm-6 col-md-4 meta-item"><span className="label">Dataset: </span><a href="https://data.world/carlvlewis/interdependence-ngos-by-funding-reach" title="Access the dataset" target="_blank" rel="noreferrer">NGOs Interdependence</a></div>
                  <div className="col-12 col-sm-6 col-md-4 meta-item"><span className="label">Data manipulation and analysis: </span>SQL, Python</div>
                  <div className="col-12 col-sm-6 col-md-4 meta-item"><span className="label">Data visualization: </span>D3.js</div>
                  <div className="col-12 col-sm-6 col-md-4 meta-item"><span className="label">Repository: </span><a href="https://github.com/amdufour/ngos_network" title="Access the code repository" target="_blank" rel="noreferrer">ngos network</a></div>
                </div>
              </div>
            </div>
            <a className="btn btn-teal" href="https://amdufour.github.io/organizations-against-polarization/" target="_blank">Explore the visualization</a>

            {/* Project description */}
            <div className="project-description">
              <h2>Finding an angle of analysis</h2>
              <p>When starting a data visualization project, you usually have a dataset in hand, or at least a subject about which to find data. Once you've explored your dataset and made some necessary observations, you can start thinking about which type of data visualization would suit it best. The visualization is at the service of the data, not the reverse.</p>
              <p>For this project, I went against best practices and did precisely the reverse. The reason is, this project started with a design requirement for my website, where I wanted to display a network. You see, I entered the field of data visualization with the desire to support science, journalism, and democracy with my work, knowing that all of our little contributions combine and make a real difference. I planned to symbolically suggest this motivation with a network visualization, where connections pull and push nodes until they find equilibrium. Kind of like in real life!</p>
              <p>At first, I hoped to find a dataset of NGOs with information about their field of action, the countries in which they provide services, and maybe even how they collaborate. Unesco did assemble a <a href="https://uia.org/yearbook" title="Access Unesco's Yearbook of International Organizations" target="_blank" rel="noreferrer">Yearbook of International Organizations</a>, which seemed like an interesting starting point, but the price didn't match a personal project's budget. After a few hours of research, I was getting a little discouraged and was about to start searching for a different angle. But luckily, I stumbled upon a dataset assembled by <a href="https://data.world/carlvlewis" title="Access the profile of Carl V. Lewis on data.world" target="_blank" rel="noreferrer">Carl V. Lewis</a> in 2018 and available on <a href="https://data.world/carlvlewis/interdependence-ngos-by-funding-reach" title="Access the dataset" target="_blank" rel="noreferrer">data.world</a>. This data was collected manually by the author, focusing on nonprofits fighting polarization in Western society. Although this dataset is by no means complete and concentrates mainly on organizations operating from the United States, it matched my initial subject and contained enough information to create a rich visual. Also, 163 organizations seemed like a reasonable amount to make what I had in mind. I was relieved, I had a base to start with!</p>
              <h2>Exploring and understanding the data</h2>
              <p>I began my exploration of the data by listing the type of information available for each organization. I knew right ahead that it would be interesting to represent the estimated number of people impacted visually. I also observed that I could link organizations by tags, representing each organization's field of action, and group the nodes by type of organizations, which is their main area of focus. My imagination was firing, thinking about all the visual possibilities. I quickly concluded that this data visualization could be a project on its own. I would later extract a simplified version of it for my website (the idea finally didn't cut the final design of my website). Also, some information was missing from the original dataset. But after an afternoon of data gathering, I filled the gaps.</p>
              <p>I then used SQL and python to clean and prepare the data. For example, I grouped the tags into an array for each organization. I found that D3 needs a specific data format to realize a force simulation (used to position the links and nodes in a network). It requires a JSON file with the nodes' information grouped in an object, and the connections between each node explicitly listed in another one. Here's how it looked like for me:</p>
              <CodeBlock code={dataFormatSample} />
              <p>Even for a relatively small dataset of 163 organizations, this format generates a massive file of many thousand lines. Not something you wanna write by hand… Fortunately, I could quickly obtain the structure I needed by writing a small Python script.</p>
              <p>Realizing that the dataset contained 21 types of organizations, I decided to group them into meta-categories: Communications, Civic life, Community, Economy, Technology, and Education, allowing to represent them by color.</p>
              <h2>Initial visual explorations: positioning the nodes</h2>
              <p>To create the network visualization, I turned to <a href="https://github.com/d3/d3-force" title="Access D3's force module documentation" target="_blank" rel="noreferrer">D3's force module</a> and warmed myself up with a rudimentary visual displaying a node for each organization and linking them by shared tags. As you can see in the following image, the result was certainly not exciting. Still, I could already see some groups forming naturally, the organizations sharing more tags being pulled closer together by the force simulation.</p>
              <div className="image-container">
                <Image className="project-image" fluid={projectImages.allFile.nodes[2].childImageSharp.fluid} alt="Initial force network" />
                <div className="caption">An initial network where groups formed naturally.</div>
              </div>
              <p>I then colored each node based on the organization's primary focus (the six categories mentioned previously) and calculated it's the nodes areas based on the estimated number of people impacted.</p>
              <div className="image-container">
                <Image className="project-image" fluid={projectImages.allFile.nodes[3].childImageSharp.fluid} alt="Network with colors and sizing applied" />
                <div className="caption">Representation of the organization's primary focus with color and of the number of people impacted with the nodes' size.</div>
              </div>
              <p>D3 allows parameters like each node's initial position and the strength pulling nodes together when running a force simulation. It also lets you calibrate how much force to apply in the x and y directions and locate the center of mass of the whole simulation. After playing with these parameters for a bit, I finally decided to position the starting position of each organization's type around a circle. I also used the collide parameter to ensure that each node would be placed at least 5px from each other and avoid overlap.</p>
              <div className="image-container row">
                <div className="col-12 col-md-6">
                  <Image className="project-image" fluid={projectImages.allFile.nodes[4].childImageSharp.fluid} alt="Network with strong force applied along the y axis" />
                  <div className="caption">Network with strong force applied along the y axis.</div>
                </div>
                <div className="col-12 col-md-6">
                  <Image className="project-image" fluid={projectImages.allFile.nodes[5].childImageSharp.fluid} alt="Network with more force applied along the x axis" />
                  <div className="caption">Network with more force applied along the x axis.</div>
                </div>
                <div className="col-12 col-md-6">
                  <Image className="project-image" fluid={projectImages.allFile.nodes[6].childImageSharp.fluid} alt="Groups' centers positioned around a circle" />
                  <div className="caption">Groups' centers positioned around a circle.</div>
                </div>
                <div className="col-12 col-md-6">
                  <Image className="project-image" fluid={projectImages.allFile.nodes[7].childImageSharp.fluid} alt="Result after applying the collide parameter" />
                  <div className="caption">Result after applying the collide parameter.</div>
                </div>
              </div>
              <h2>Designing the links</h2>
              <p>Designing the linksAlthough I started to be happy with the nodes' position, I knew I had to do something about the links. There are 1056 links in this visualization, and showing them all is confusing and doesn't invite the users to explore further.</p>
              <p>The first step was to give the links a different width based on how many tags they shared with another node. By reducing the opacity of the links sharing only one tag, a visual hierarchy started to appear. But that was not enough to make it pleasing to the eye.</p>
              <div className="image-container">
                <Image className="project-image" fluid={projectImages.allFile.nodes[8].childImageSharp.fluid} alt="Applying different widths to the links" />
                <div className="caption">Applying different widths to the links.</div>
              </div>
              <p>To reduce the contrast between the circular nodes and the very straight links, I chose to generate curved paths between the nodes instead of simple lines. That was reasonably easy to do with D3's path generator, using the circle's center as the starting and endpoints. <a href="https://www.dashingd3js.com/svg-paths-and-d3js" title="Access the article explaining how to calculate SVG path's attributes" target="_blank" rel="noreferrer">This article</a> explains how to calculate an SVG path's different attributes with greater details. To give a more cohesive appearance, I also adjusted the paths' curvature based on their length.</p>
              <p>Inspired by the visualization <a href="https://www.visualcinnamon.com/" title="Access the site of Nadieh Bremer" target="_blank" rel="noreferrer">Nadieh Bremer</a> created for <a href="https://ich.unesco.org/en/dive" title="Access the project" target="_blank" rel="noreferrer">UNESCO's intangible Cultural Heritage</a>, I applied a color gradient to the links, based on the color of the two nodes it was connecting. That looked much better!</p>
              <div className="image-container">
                <Image className="project-image" fluid={projectImages.allFile.nodes[9].childImageSharp.fluid} alt="Curved links with color gradients" />
                <div className="caption">Curved links with color gradients.</div>
              </div>
              <h2>Shaping the nodes</h2>
              <p>Although I started to like the visualization, there was still room to provide more visual information. I was interested in the scale at which each organization operates (Global, Continental, National, Between 2 nations or Regional). Are global organizations always reach more people than National or Regional ones?</p>
              <p>I designed a set of graphics, one for each scale. For example, Global organizations ended up being represented by six circles grouped in a flower-like shape. In contrast, regional organizations use a circle with a white dot in the center, suggesting that they target a specific area within a larger one. I was pleased with the result.</p>
              <div className="image-container">
                <Image className="project-image" fluid={projectImages.allFile.nodes[10].childImageSharp.fluid} alt="Nodes shaped according to their organization's scale" />
                <div className="caption">Nodes shaped according to their organization's scale.</div>
              </div>
              <h2>Extracting the final SVG</h2>
              <p>As I already mentioned, I provided specific parameters regarding the nodes' starting point and the forces holding them up together. From that information, D3 runs a simulation that iterates until it finds the right balance given the initial conditions. This process is fun to watch but didn't bring much valuable information. Contrariwise to my foodprint project (link), it was no more than a distraction. I opted to extract the final SVG and to add it inline to the DOM. In the final project (link), I use D3 solely to handle the user's interactions since they are tightly coupled with the original data.</p>
              <div className="video-container">
                <Video src={Screencast_simulation}
                       captions={Screencast_simulation_captions}
                       description={Screencast_simulation_description}
                       autoplay={false}
                       loop={false}
                       controls={true} />
              </div>
              <h2>Exploring the visualization</h2>
              <p>Now that I had my visual, it was essential to allow users to explore the organizations and how they connect. To do so, I first designed an interaction revealing linked organization as we hover nodes with the mouse. This interaction also shows an infobox, containing information such as the hovered organization's mission, scale, the estimated number of people impacted, and its website's URL.</p>
              <p>To provide information about what exactly links the organizations together, I opted for a simple overhead information box disclosing which tags are shared by the highlighted organizations.</p>
              <div className="video-container">
                <Video src={Screencast_hover}
                       captions={Screencast_hover_captions}
                       description={Screencast_hover_description}
                       autoplay={false}
                       loop={false}
                       controls={true} />
              </div>
              <p>Besides, it felt essential to allow users to explore further highlighted organizations. To do so, clicking on a node freezes the current highlighted state and allows for rolling over the related organizations.</p>
              <div className="video-container">
                <Video src={Screencast_click}
                       captions={Screencast_click_captions}
                       description={Screencast_click_description}
                       autoplay={false}
                       loop={false}
                       controls={true} />
              </div>
              {/* <h2>Responsive considerations</h2> */}
              <p></p>
              <p></p>
              <div className="project-bottom-link-container">
                <a className="btn btn-pink" href="https://amdufour.github.io/organizations-against-polarization/" target="_blank">Explore the visualization</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See more projects */}
      <SeeMoreProjects background="spotify" projects={[3, 4]} />
    </Layout>
  )
}

export default OrganizationsAgainstPolarization