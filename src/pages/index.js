import React from "react"
import Layout from '../components/Layout'
import HomeHero from '../components/home/HomeHero'
import HomeWhy from '../components/home/HomeWhy'
import HomeSpotifyBanner from '../components/home/HomeSpotifyBanner'

export default function Home() {
  return (
    <Layout styleClass="homepage">
      <HomeHero />
      <HomeWhy />
      <HomeSpotifyBanner />
    </Layout>
  )
}
