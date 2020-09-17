import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image/withIEPolyfill'
import Video from '../Video'
import crowdVideo from '../../assets/crowd_movie.mp4'
import Captions from "file-loader!../../assets/crowd_captions.vtt"
import Description from "file-loader!../../assets/crowd_description.vtt"
import Network from '../Network'

const getImage = graphql`
  {
    file(relativePath: {eq: "crowd.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HomeHero = () => {
  const screenWidth = window.innerWidth
  const crowdImage = useStaticQuery(getImage)
  
  return (
    <>
      <div className="homehero-background">
        { screenWidth >= 768
          ? <Video src={crowdVideo} captions={Captions} description={Description} />
          : <Image fluid={crowdImage.file.childImageSharp.fluid} alt="Crowd of people walking on a street" objectFit="cover" objectPosition="50% 50%" />
        }
      </div>
      <Network />
      <div className="homehero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="homehero-content homehero-left">
                <div>Carefully crafted</div>
                <div className="emphasis">Data Stories</div>
                <div>create <span className="interchangeable">a Durable Imprint</span></div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="homehero-content homehero-right">
                <div className="name"><span className="salutation">Hi!</span> I'm Anne-Marie</div>
                <div className="job-title">I Design &amp; Develop</div>
                <div className="job-output">Creative Data Visualizations</div>
                <div className="job-impact">that are <span className="interchangeable interchangeable-first">Delightful</span> and
                  <br></br>
                  <span className="interchangeable interchangeable-second">Make an Impact</span>
                </div>
                <a className="btn" href="/">Let's get in touch!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHero