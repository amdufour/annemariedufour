import React from "react"
import Layout from '../components/Layout'
import HeroHome from '../components/HeroHome'

export default function Home() {
  return (
    <Layout styleClass="homepage">
      <HeroHome />
      <div className="home-second"></div>
    </Layout>
  )
}
