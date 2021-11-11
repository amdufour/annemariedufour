import React from 'react'

const HomeWhat = () => {
  return (
    <div className="home-what">
      <div className="container">
        <h2>What I do</h2>
        <ul>
          <li className="what-item what-item-analysis">
            <h3><span className="emphasis">Explore &amp; Analyse</span> datasets</h3>
            <div className="description">Identify <span className="emphasis">insights</span>, <span className="emphasis">trends</span>, <span className="emphasis">outliers</span>. Find the <span className="emphasis">story</span> hidden within your data.</div>
          </li>
          <li className="what-item what-item-design">
            <h3><span className="emphasis">Design</span> data visualizations</h3>
            <div className="description">Find compelling ways to efficiently <span className="emphasis">communicate</span> your data story to <span className="emphasis">your audience</span>.</div>
          </li>
          <li className="what-item what-item-develop">
            <h3><span className="emphasis">Develop</span> for the web</h3>
            <div className="description">Code <span className="emphasis">flawless</span> experiences for destop, tablets and phones.</div>
          </li>
          <li className="what-item what-item-teach">
            <h3><span className="emphasis">Teach</span> D3.js development</h3>
            <div className="description">Turn broad scary subjects into <span className="emphasis">digestible</span> and <span className="emphasis">actionable</span> bits.</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeWhat