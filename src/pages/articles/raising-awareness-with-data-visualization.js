import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'
import SEO from '../../components/SEO'
import CtaPortfolio from '../../components/CtaPortfolio'

const RaisingAwarenessWithViz = () => {
  return (
    <Layout>
      <SEO title="Raising awareness with Data Visualization" />
      <div className="page-article page-article-awareness">

        {/* Project header */}
        <div className="page-article-header dark awareness">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-10">
                <div className="date">October 23, 2020</div>
                <h1>Data visualization could be the secret sauce of your next awareness campaign. Here’s how.</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="page-content">
          <div className="container">
            <div className="article-introduction">
              <div className="row">
                <div className="col-12 col-md-8">
                  <p className="no-margin-top">Our brain is specifically wired to receive, treat, and retain visual information. It filters and prioritizes information so that we don't have to be constantly aware of every single element in our field of view. Because our visual brain quickly detects patterns and shades variations, it alerts us only if something is worth our precious attention.<span className="sup">1</span></p>
                  <p>Data Visualization effectively leverages this ability of our brain to grasp the big picture in no time. It makes trends and outliers easy to spot. Humongous numbers become something we can picture, and complex situations become more tangible. When coupling Data Visualization with awareness campaigns, we get the perfect combination to generate engagement.</p>
                </div>
                <div className="col-12 col-md-4">
                  <div className="book-quote">
                    <div className="book-quote-text">"At its core, <span className="emphasis">the visual brain is a device that evolved to detect patterns</span>. […] [Its] preattentive detection feature - the instant sorting of differences and similarities - is <span className="emphasis">one of the most powerful weapons in the designer's arsenal</span>."<span className="sup">1</span></div>
                    <div className="book-quote-author">Alberto Cairo</div>
                    <div className="book-quote-source">The Functional Art</div>
                  </div>
                </div>
              </div>
            </div>
            <section className="article-content">
              <h2>Tips for raising awareness with Data Visualization</h2>
              <div className="article-section">
                <h3>Know your audience</h3>
                <ul className="bullet-list">
                  <li>Who do you want to reach? Are they a targeted group of professionals? People of a particular age group or a specific culture?</li>
                  <li>Under which circumstances will they consume your visualization? Will they be sitting in a coffee with plenty of time to explore a complex and intricate piece? Or will they be in a hurry, willing to consume only a few key points?</li>
                </ul>
              </div>
              <div className="article-section">
                <h3>Keep your goals in mind</h3>
                <ul className="bullet-list">
                  <li>Identify the actions you want readers to take after exploring your visualization and plan your Calls-To-Action (CTAs) accordingly.</li>
                  <li>Want readers to subscribe to your newsletter? Add a button right after your visualization.</li>
                  <li>Wish them to donate? Make it easy for them with strategically positioned links.</li>
                  <li>Have a manifestation coming up and hope they will join? Give them all the info they'll need and adapt it to their geographical location.</li>
                  <li>Looking for new volunteers? Make it easy for them to contact your local chapter, with a contact form or with links to their social media accounts.</li>
                </ul>
              </div>
              <div className="article-section">
                <h3>It all starts with a title</h3>
                <ul className="bullet-list">
                  <li>Be specific. Your headline should let your readers know what kind of information they will find and what's the story you are about to tell them. They shouldn't have to guess! If so, they might not take the time to read it all.</li>
                  <li>Use the power of questions to craft compelling headlines! We are naturally curious; questions trigger our brains.</li>
                </ul>
              </div>
              <div className="article-section">
                <h3>Aim at telling a story with your data</h3>
                <ul className="bullet-list">
                  <li>Your original story lies in your data, and your data visualization is the storyteller, with his unique tone of voice, creating the right amount of tension by slowly revealing critical pieces of information.</li>
                  <li>Avoid purely decorative graphics. Instead, focus on charts that reveal insights about your cause.</li>
                  <li>Research the different layouts used for data storytelling and choose the most appropriate one (infographics, exploratory visualization, scrollytelling, etc.)</li>
                </ul>
              </div>
              <div className="article-section">
                <h3>Pick an angle and stick to it</h3>
                <ul className="bullet-list">
                  <li>The problematic that you want to expose is likely complex. When designing for awareness, it can be tempting to add all the facts and figures that you have at your disposal. This will make the piece even more convincing, right? Nope, that will likely dilute your message and fail at generating engagement.</li>
                  <li>Find angles of analysis which answer your initial question (what you've used as a headline) and your initial question only.</li>
                  <li>If sharing information from many angles is the right thing for your campaign, consider producing more than one piece of work and releasing them strategically. This tactic can not only raise awareness and support fundraising in the long term but also position your organization as the go-to one in your field.</li>
                </ul>
              </div>
              <div className="article-section">
                <h3>Market your visualization</h3>
                <ul className="bullet-list">
                  <li>You've created a compelling visualization? Congrats! But there's still work to do. Carefully planned and executed marketing efforts can make or break the success of your campaign.</li>
                  <li>Initiate discussions on social platforms about your viz and what it reveals.</li>
                  <li>Be aware of the impact your visualization can have and the discussions it may generate. This is even more important when a visualization exposes a delicate and sensitive subject. Be ready to listen, discuss and adjust.</li>
                </ul>
              </div>
              <div className="article-section">
                <h3>Repurpose your hard work</h3>
                <ul className="bullet-list">
                  <li>Now that your visualization got noticed don't forget to repurpose it! This will allow you to reach a broader audience and generate a better return on investment.</li>
                  <li>Turn your digital visualization into a poster.</li>
                  <li>Print it on t-shirts and sell them to raise funds.</li>
                  <li>The only limit is your imagination!</li>
                </ul>
              </div>
            </section>
            <section className="article-conclusion">In a nutshell, to leverage our brain's natural attraction to data visualization, you first need to research your audience and define your goals. Then brainstorm headlines, find the story your data tells and stick to one angle of analysis. Finally, market and repurpose your hard work.</section>
            <div className="contact-cta">
              <div className="cta-content">
                <h2>Wanna stand-out?</h2>
                <p>Contact me to book a free call. I'd be happy to discuss how we could build a custom Data Visualization that will support your next campaign.</p>
                <Link className="btn btn-teal" to="/contact">Let's get in touch!</Link>
              </div>
            </div>

            {/* References */}
            <section className="article-sources">
              <h2>References</h2>
              <ol>
                <li>Cairo, Alberto. The Functional Art. New Riders, 2013</li>
                <li>Kirk, Andy. Data Visualisation, A Handbook for Data Driven Design. 2nd ed., SAGE Publications, 2019</li>
                <li>Kirk, Andy. Masterclass in Data Visualisation &amp; Infographic Design | <a href="https://www.visualisingdata.com/training/" target="_blank" rel="noreferrer">Online Training</a>.</li>
                <li>Periscopic. Starting a New Project With a Data Visualization Firm or Partner. Retrieved from <a href="https://periscopic.com/#!/articles/Working-With-A-Data-Partner" target="_blank" rel="noreferrer">https://periscopic.com/#!/articles/Working-With-A-Data-Partner</a></li>
              </ol>
            </section>
          </div>
        </div>
      </div>
      <CtaPortfolio />
    </Layout>
  )
}

export default RaisingAwarenessWithViz