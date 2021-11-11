import React from "react"
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomeHero from '../components/home/HomeHero'
import HomeIntroduction from '../components/home/HomeIntroduction'
// import HomeSpotifyBanner from '../components/home/HomeSpotifyBanner'
// import HomeWhere from '../components/home/HomeWhere'
import HomeProjects from '../components/home/HomeProjects'
import HomeWho from '../components/home/HomeWho'

export default function Home() {
  return (
    <Layout styleClass="header-with-gradient homepage">
      <SEO />
      <HomeHero />
      <div className="home-content">
        <HomeIntroduction />
        {/* <HomeSpotifyBanner /> */}
        {/* <HomeWhere /> */}
        <HomeProjects />
        <HomeWho />
      </div>
    </Layout>
  )
}
