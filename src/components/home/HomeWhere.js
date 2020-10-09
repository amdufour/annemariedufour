import React from 'react'

const HomeWhere = () => {
  return (
    <div className="home-where">
      <div className="container">
        <h2>Sounds interesting! But where can we use Data Visualizations?</h2>
        <p>When thinking about Data Visualizations, the first images that come to my mind are the stunning graphics in National Geographic articles. But when it comes to where we can use visualizations, the sky is the limit! Data visualization support options are endless: from physical installations to fashion to postcards (take a look <a href="http://giorgialupi.com/dear-data" target="_blank" rel="noreferrer">here</a> if you are wondering what I mean by postcards).</p>
        <p>The two main supports for Creative Data Visualizations are Digital and Print. We often use them for expository visualizations, which have a fixed dataset. Occasionally, creative digital visualizations will have an ever-evolving stream of data and will be exploratory.</p>
        <div className="row supports">
          <div className="col-12 col-sm-6 support support-digital">
            <h3>Digital supports</h3>
            <p>Web pages or applications are the support of choice to explore a subject in depth. Thanks to carefully crafted interactions, the user can reveal information, zoom on a specific section, or even hear music.</p>
          </div>
          <div className="col-12 col-sm-6 support support-print">
            <h3>Printed publications</h3>
            <p>Unique visualizations add depth and context to any article, supporting the text's conclusions. They create engagement and raise awareness on posters and pamphlets or impress stakeholders on reports.</p>
          </div>
          {/* <div className="col-12 col-sm-6 col-md-4 support support-dashboard">
            <h3>Dashboards</h3>
            <p>To follow critical data in real-time and make early informed decisions.</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomeWhere