import React from 'react'
import Network from './Network'

const HeroHome = () => {
  return (
    <>
      <div className="homehero-background"></div>
      <Network />
      <div className="homehero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="homehero-content homehero-left">
                <div>Carefully crafted</div>
                <div className="emphasis">Data Stories</div>
                <div>create <span className="interchangeable">a Durable Imprint</span></div>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="homehero-content homehero-right">
                <div className="name"><span className="salutation">Hi!</span> I'm Anne-Marie</div>
                <div className="job-title">I Design &amp; Develop</div>
                <div className="job-output">Creative Data Visualizations</div>
                <div className="job-impact">that are <span className="interchangeable interchangeable-first">Delightful</span> and
                  <br></br>
                  <span className="interchangeable interchangeable-second">Make an Impact</span>
                </div>
                <a className="btn" href="/">Let's get in touch!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroHome