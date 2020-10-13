import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Parallax } from "react-parallax";

const getImage = graphql`
  {
    file(relativePath: {eq: "spotify-banner.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 100) {
          src
        }
      }
    }
  }
`

const HomeSpotifyBanner = () => {
  const img = useStaticQuery(getImage)
  
  return (
    <div className="home-banner-container">
      <Parallax className="home-banner"
                bgImage={img.file.childImageSharp.fluid.src}
                bgImageAlt="Visualization of top 100 songs streamed on Spotify"
                strength={400}>
        <div className="home-inner-container"></div>
      </Parallax>
    </div>
  )
}

export default HomeSpotifyBanner