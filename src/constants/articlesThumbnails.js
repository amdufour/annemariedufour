import React from 'react'
import { Link } from 'gatsby'

const articlesInfo = [
  {
    id: 1,
    class: 'article-awareness',
    date: 'October 23, 2020',
    title: 'Data visualization could be the secret sauce of your next awareness campaign. Here’s how.',
    shortText: 'Our brain is specifically wired to receive, treat, and retain visual information. Data Visualization effectively leverages this ability to grasp the big picture in no time, making it a tool of choice to raise awareness.',
    link: '/articles/raising-awareness-with-data-visualization'
  },
]

const ArticleThumbnail = ({articleId}) => {
  const article = articlesInfo.find(article => article.id === articleId)

  return (
    <div className="article-thumbnail">
      <Link className="article-thumbnail-image-link" to={article.link}>
        <div className={`article-thumbnail-image ${article.class}`}></div>
      </Link>
      <div className="article-info">
        <div className="article-date">{article.date}</div>
        <h3 className="article-title">{article.title}</h3>
        <div className="article-short-text">{article.shortText}</div>
        <Link className="btn btn-teal btn-sm" to={article.link}>Read more</Link>
      </div>
    </div>
  )
}

export default ArticleThumbnail