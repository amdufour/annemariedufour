import React from "react"
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomeHero from '../components/home/HomeHero'
import HomeWhy from '../components/home/HomeWhy'
import HomeSpotifyBanner from '../components/home/HomeSpotifyBanner'
import HomeWhere from '../components/home/HomeWhere'
import HomeProjects from '../components/home/HomeProjects'
import HomeWho from '../components/home/HomeWho'

export default function Home() {
  return (
    <Layout styleClass="header-with-gradient">
      <SEO />
      <HomeHero />
      <div className="home-content">
        <HomeWhy />
        <HomeSpotifyBanner />
        <HomeWhere />
        <HomeProjects />
        <HomeWho />
      </div>
    </Layout>
  )
}
