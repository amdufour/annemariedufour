import React from "react"
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomeHero from '../components/home/HomeHero'
import HomeIntroduction from '../components/home/HomeIntroduction'
// import HomeSpotifyBanner from '../components/home/HomeSpotifyBanner'
// import HomeWhere from '../components/home/HomeWhere'
import HomeWhat from "../components/home/HomeWhat"
import HomeProjects from '../components/home/HomeProjects'
import HomeWho from '../components/home/HomeWho'

import * as d3 from "d3-selection"

class Home extends React.Component {

  componentDidMount() {
    d3.select('#draggable-line').text('hey there!');
  }

  render() {
    return (
      <Layout styleClass="header-with-gradient homepage">
        <SEO />
        <div id="draggable-line"></div>
        <HomeHero />
        <div className="home-content">
          <HomeIntroduction />
          <HomeWhat />
          {/* <HomeSpotifyBanner /> */}
          {/* <HomeWhere /> */}
          <HomeProjects />
          <HomeWho />
        </div>
      </Layout>
    )
  }
}

export default Home;
