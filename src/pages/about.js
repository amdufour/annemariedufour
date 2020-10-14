import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CtaPortfolio from '../components/CtaPortfolio'

const getImage = graphql`
  {
    file(relativePath: {eq: "portrait-thin.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 990, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const aboutImage = useStaticQuery(getImage)

  return (
    <Layout styleClass="header-with-gradient privacy">
      <SEO title="About" />
      <div className="page-about">
        <div className="small-header">
          <div className="logo-bg"></div>
          <div className="container">
            <h1>About me</h1>
          </div>
          <div className="header-bottom-triangles"></div>
        </div>
        <div className="page-content">
          <div className="container">
            <h3>Hello! Thank you for visiting my site!</h3>
            <p>As you probably already know, I Design and Develop creative Data Visualizations. My work is a delicate balance between data science and a more creative process where I craft unique pieces, which can meet your brand's guidelines or have a style of their own.</p>
            
            <h2>How is it to work with me?</h2>
            <p>I love to participate in all the steps of a project. From refining the first seed of an idea to finding the hidden stories in raw data. From designing intriguing visualizations to turning them into interactive web applications. I'm also happy to join your team at any step of the process, whether it is to make my hands dirty with work or provide guidelines and feedback.</p>
            <p>The quality which best describes how I work is enthusiasm! I love what I do and would probably do it as a hobby if it wasn't my career. Creating a unique experience and a wow effect for users brings me a deep sense of satisfaction. I genuinely enjoy refining these small details that make all the difference: intuitive interfaces, elegant graphics, and seamless transitions.</p>
            <p>I currently live in Budapest and regularly collaborate with clients and teams worldwide. Although I am autonomous and enjoy working on my own, I cherish human connections, and I am pleased when collaborating with a team to bring a shared vision to life.</p> 
            
            <h2>My tools and other useful information</h2>
            <p>Here's an overview of my stack. Although these are the languages, libraries, and frameworks I am the most comfortable and experienced using, I always keep an eye open for the tools that could best serve my clients and projects.</p>
            <div className="skills">
              <div className="skill skill-data">
                <h3>Data Manipulation and Analysis</h3>
                <div className="list">SQL, Python</div>
              </div>
              <div className="skill skill-design">
                <h3>Design</h3>
                <div className="list">Sketch app, Adobe Illustrator, Good ol’ pen and paper</div>
              </div>
              <div className="skill skill-development">
                <h3>Development</h3>
                <div className="list">JavaScript, D3.js, React.js, GatsbyJS, Angular, GSAP, Git, CSS3, SASS, HTML5</div>
              </div>
            </div>
            <div className="info-other">
              <div className="skill skill-languages">
                <h3>Spoken Languages</h3>
                <div className="list">French (native), English (fluent), Hungarian (conversational)</div>
              </div>
              <div className="skill skill-location">
                <h3>Location</h3>
                <div className="list">Budapest (Hungary)</div>
                <div className="list">Collaborating with teams worldwide</div>
              </div>
            </div>
            <Link className="btn btn-teal contact" to="/contact">Contact me</Link>
          </div>

          <div id="quote-kian" className="quote quote-full-width">
            <div className="container">
              <p className="quote-content">I had the chance to work with Anne-Marie in my team for many years. She has multiple qualities, combining empathy, energy, creativity, and professionalism. She is ready to face challenges outside of her comfort zone, and, on top of that, she delivers outstanding quality. I can only recommend her services to myself and around me.</p>
              <div className="quote-author">Kian Rieben</div>
              <div className="quote-organization"><a href="https://www.inovae.ch/" target="_blank" rel="noreferrer">Inovae</a></div>
            </div>
          </div>

          <div className="container">
            <h2>My aim, or what makes me get out of bed in the morning</h2>
            <p>As I am writing these words, we are witnessing extreme polarization in our societies. We observe a broad loss of trust in science and journalism. Populist leaders are actively working on weakening the pillars of our democracies. We struggle to question our habits and comfort to take the courageous actions needed to revert climate changes. And this scares the s**t out of me.</p>
            <p>In isolation, our actions have a limited impact. But I deeply believe in our ability to turn things around if we join forces. My small and humble contribution is to support organizations and companies which are taking action, which are building a better, more fair, and democratic world. Through my participation in data visualization, I aim to create bridges between our different human realities. I aspire to educate people on complex subjects. I hope my work carries values such as transparency, humility, openness, and a deep enthusiasm for life.</p>

            <h2>My background</h2>
            <p>I grew up in Arvida, a small industrial town located in the province of Quebec, in Canada. Like many other kids, I was not very fond of math and never thought I had the skills for the problem solving that math required. I was more the literature and artsy type. But around the age of 14, one of my teachers explained algebra so well that I started to actually like it. I enjoyed studying mathematics so much that I ended up earning a B.Sc. in Mechanical Engineering from Université du Québec à Chicoutimi (UQAC). Since I regarded math and science problems like fun puzzles to solve, I sincerely enjoyed my studies. But when the time came to consider dimensioning shafts for a living, my career path suddenly sounded far less than attractive.</p>
            <div className="portrait-container">
              <Image className="portrait" fluid={aboutImage.file.childImageSharp.fluid} alt="Photo of Anne-Marie" />
            </div>
            <p>My love for learning brought me to pursue graduate studies at UQAC, focusing on computational fluid dynamics. That's when I got exposed to the manipulation of large datasets for the first time. I also became a teaching assistant in many fields of interest, like fluid mechanics, heat transfer, and the environmental impact of engineering projects. Teaching is one of the positions that I loved the most in my career. Making complex subjects accessible came naturally to me, and I relished finding ways to clarify them for my students. I've probably invested way more time and energy preparing my classes than working on my own research projects!</p>
            <p>After the birth of our first son, my partner and I decided it was time to realize one of our dreams. We moved to Europe, more specifically to Budapest. I used this blank slate to reinvent my career and learned front-end development. I then joined <a href="https://www.inovae.ch/" target="_blank" rel="noreferrer">Inovae</a>, a web agency based in Geneva. During the next four years, I learned the trade's best practices and educated my eye to seamless user experiences (UX). In addition to working with a team which is still today very dear to my heart, I had the chance to collaborate on projects for diverse NGOs and institutions, including the <a href="https://www.uicc.org/" target="_blank" rel="noreferrer">Union for International Cancer Control (UICC)</a>, the <a href="https://edb.wto.org/" target="_blank" rel="noreferrer">World Trade Organization (WTO)</a>, and the <a href="https://www.ecolint.ch/" target="_blank" rel="noreferrer">International School of Geneva</a>.</p>
            <p>During my years at Inovae, I worked both as a front-end developer and as a project manager. I collaborated directly with our clients and a team of developers, designers, and user experience (UX) experts. I learned the importance of being attentive to my clients' needs while keeping the end-user central in my decision process.</p>
            <p>But, I knew from the beginning that web development wouldn't be an end goal for me, but a vector toward something even more meaningful. I just didn't know what yet…</p>
            <p>The pieces of my career puzzle started to fit into one another as I got curious about the field of Data Science and, more precisely, in Data Visualization. In 2018, I stumbled across the project <a href="http://www.datasketch.es/" target="_blank" rel="noreferrer">Data Sketches</a> by <a href="https://www.visualcinnamon.com/" target="_blank" rel="noreferrer">Nadieh Bremer</a> and <a href="https://sxywu.com/" target="_blank" rel="noreferrer">Shirley Wu</a>, where I discovered that data visualization was not only a tool to make data more digestible but could also be extremely creative. I knew right away that I HAD to aim in that direction. It was the type of urge that is impossible to ignore. Having just had a new baby at the time, I took things slowly. I went back to the math I had learned earlier and gained new skills like data analysis with python and data visualization development with d3.js.</p>
            <p>In the midst of the 2020 pandemic that brought us all to question certain aspects of our life, I leaped. So here I am, pumped and excited for this new path.</p>
          </div>

          <CtaPortfolio />
        </div>
      </div>
    </Layout>
  )
}

export default About;