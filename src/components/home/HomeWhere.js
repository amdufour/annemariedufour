import React from 'react'

const HomeWhere = () => {
  return (
    <div className="home-where">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <h2>Sounds interesting! But where can we use Data Visualizations?</h2>
            <p>When thinking about Data Visualizations, the first images that come to my mind are the stunning graphics in National Geographic articles. But sky is the limit! From physical installations, to fashion, to postcards (go take a look <a href="http://giorgialupi.com/dear-data" target="_blank" rel="noreferrer">here</a> if you don’t know what I mean by postcards), the support options for data visualization are endless.</p>
            <p>The 2 main visualizations supports are Digital and Printed. These are commonly used for expository visualizations, where the dataset is fixed. Often, the data has been massaged to expose trends and outliers. On the other hand, Dashboards deal with an ever evolving stream of data and are an exploratory type of visualization.</p>
          </div>
        </div>
        <div className="row supports">
          <div className="col-12 col-md-8 offset-md-2">
            <div className="row">
              <div className="col-12 col-md-4 support support-digital">
                <h3>Digital supports</h3>
                <p>The support of choice to explore a subject through carefully crafted interactions.</p>
              </div>
              <div className="col-12 col-md-4 support support-print">
                <h3>Printed publications</h3>
                <p>To add depth and context to articles, impress stakeholders in reports and raise awareness on posters.</p>
              </div>
              <div className="col-12 col-md-4 support support-dashboard">
                <h3>Dashboards</h3>
                <p>To follow critical data in real-time and take early informed decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeWhere