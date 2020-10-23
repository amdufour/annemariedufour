import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ArticleThumbnail from '../constants/articlesThumbnails'

const articleIds = [1]

const Articles = () => {
  return (
    <Layout styleClass="header-with-gradient privacy">
      <SEO title="Articles" />
      <div className="articles-page">
        <div className="small-header">
          <div className="logo-bg"></div>
          <div className="container">
            <h1>Articles</h1>
          </div>
          <div className="header-bottom-triangles"></div>
        </div>
        <div className="page-content articles">
          <div className="container">
            {articleIds.map((id, index) => {
              return <ArticleThumbnail key={index} articleId={id} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Articles